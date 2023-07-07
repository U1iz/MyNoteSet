# 计算模块
import numpy as np
# 特殊公式模块
import scipy.special as sp
import os
import matplotlib.pyplot as plt
from scipy import ndimage

# 随机权重矩阵
def random_weight_matrix(len1, len2):
    # 正态分布
    return np.random.normal(0.0, pow(len1, -0.5), (len1, len2))

# 转为矩阵
def convert_matrix(list):
    return np.array(list, ndmin=2).T

# 计算操作
def output_calc(weight, input, activation_fn):
    return activation_fn(np.dot(weight, input))

# 标准化输入
def normalize_mtx(arr):
    return np.asfarray(arr[1:]) / 255 * 0.99 + 0.01

# 将相对路径转为绝对路径
def abs_dir(relative_path):
    # return os.path.abspath(relative_path)
    return os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), relative_path))

def draw(px_arr, ncols=1, inch=3):
    length = 1 if len(px_arr) == 784 else len(px_arr)
    ncols = int(ncols)
    nrows = int(round(length / ncols, 0))
    fig, axes = plt.subplots(ncols=ncols, nrows=nrows, figsize=(ncols * inch, nrows*inch))
    if length == 1:
        axes = [axes]
        px_arr = [px_arr]
    axes = np.array(axes).flatten()  # 将axes对象转换为一维数组
    for i, ax in enumerate(axes):
        img_arr = np.asfarray(px_arr[i]).reshape((28, 28))
        ax.imshow(img_arr, cmap='Greys', interpolation='None')

    plt.tight_layout()
    plt.show()

# 旋转图像
def rotate_img(px_arr, angle=10):
    return ndimage.interpolation.rotate(np.asfarray(px_arr).reshape(28,28), angle, cval=0.01, order=1, reshape=False)

def normalize_and_scale(input):
    input -= np.min(input)
    input /= np.max(input)
    input *= 0.98
    input += 0.01
    
    return input

# 定义神经网络类
class neuralNetwork:
    # 初始化神经网络
    def __init__(self, nodes_info, learning_grate):
        # 输入层、隐藏层、输出层
        self.nodes_input = nodes_info['input']
        self.nodes_hide = nodes_info['hide']
        self.nodes_output = nodes_info['output']

        # 学习率
        self.lr = learning_grate

        # 输入层与隐藏层之间的权重矩阵
        self.w_ih = random_weight_matrix(self.nodes_hide, self.nodes_input)
        # 隐藏层与输出层之间的权重矩阵
        self.w_ho = random_weight_matrix(self.nodes_output, self.nodes_hide)

		# 激活函数（sigmoid）
        self.activation_fn = lambda x: sp.expit(x)
        # 反向查询
        self.inverse_activation_function = lambda x: sp.logit(x)

        # 哈希值
        self.hash_val = ''

    # 训练神经网络
    def train(self, input_list, target_list):
        input = convert_matrix(input_list)
        target = convert_matrix(target_list)

        # input = convert_matrix(input_list)
        self.query(input_list)

        # 算出误差（目标 - 结果）
        # 输出层误差
        output_error = target - self.final_output
        # 隐藏层误差
        hidden_error = np.dot(self.w_ho.T, output_error)

        # 通过误差修改
        self.w_ho += self.lr * np.dot((output_error * self.final_output * (1 - self.final_output)), np.transpose(self.hidden_output))
        self.w_ih += self.lr * np.dot((hidden_error * self.hidden_output * (1 - self.hidden_output)), np.transpose(input))

    # 查询神经网络
    def query(self, input_list):
        hash_val = hash(''.join(str(i) for i in input_list))
        if self.hash_val != hash_val:
            self.hash_val = hash_val
            self.hidden_output = output_calc(self.w_ih, convert_matrix(input_list), self.activation_fn)
            self.final_output = output_calc(self.w_ho, self.hidden_output, self.activation_fn)
        return self.final_output

    # 反向查询
    def back_query(self, targets_list):
        final_outputs = convert_matrix(targets_list)

        final_inputs = self.inverse_activation_function(final_outputs)

        hidden_outputs = np.dot(self.w_ho.T, final_inputs)

        hidden_outputs = normalize_and_scale(hidden_outputs)

        hidden_inputs = self.inverse_activation_function(hidden_outputs)

        inputs = np.dot(self.w_ih.T, hidden_inputs)
        return normalize_and_scale(inputs)


def train(info):
    init = {
        'node_num': (784, 100, 10),
        'learning_grate': 0.3,
        'train_file': 'train.csv',
        'epochs': 2,
        'rotate': True,
        'rotate_info': (10, -10),
        'callback': lambda c: print('测试'),
        'callback_each_epoch': lambda i, c: print(f'第{i}世代', c)
    }

    for key in info.keys():
        init[key] = info[key]
    n_i, n_h, n_o = init['node_num']
    # 节点信息
    neural_node_info = {
        'input': n_i,
        'hide': n_h,
        'output': n_o
    }

    # 实例化一个神经网络对象
    example = neuralNetwork(neural_node_info, init['learning_grate'])
    # 以列表载入mnist训练数据集文件内容
    with open(abs_dir(init['train_file'])) as training_data_file:
        training_data_list = training_data_file.readlines()

    for e in range(init['epochs']):
        # 遍历训练数据集中的所有记录
        for record in training_data_list:
            # 用逗号分隔记录
            val_arr = record.split(',')
            # 转换输入
            inputs = normalize_mtx(val_arr)
            # 设定目标值
            targets = np.zeros(neural_node_info['output']) + 0.01
            # val_arr[0] 就是此记录的目标
            targets[int(val_arr[0])] = 0.99

            example.train(inputs, targets)

            # 旋转图像
            if(init['rotate']):
                l, r = init['rotate_info']
                if l:
                    example.train(rotate_img(inputs, l).reshape(784), targets)
                if r:
                    example.train(rotate_img(inputs, r).reshape(784), targets)

        init['callback_each_epoch'](e + 1, example)
    # 回调输入
    init['callback'](example)
    return example

def test(n_class, test_file):
    # 以数组存储测试数据
    with open(abs_dir(test_file)) as test_data_file:
        test_data_list = test_data_file.readlines()

    # 添加计分板
    scorecard = []
    output_arr = []

    for record in test_data_list:
        val_arr = record.split(',')

        correct_label = int(val_arr[0])
        # print(f'目标值:{correct_label}')

        inputs = normalize_mtx(val_arr)

        # 学习成果
        output = n_class.query(inputs)
        output_arr.append(output)

        # 得出最大值
        label = np.argmax(output)
        # print(f'实际值: {label}')

        # 如果成功算出则加1，反之加0
        if (label == correct_label):
            scorecard.append(1)
        else:
            scorecard.append(0)


    scorecard_arr = np.asarray(scorecard)
    score = scorecard_arr.sum() / scorecard_arr.size
    return (score, scorecard, output_arr)

def back_query(label, n_class):
    if isinstance(label, (tuple, list, range)):
        temp = []
        for e in label:
            temp.append(back_query(e, n_class))
        return temp
    else:
        targets = np.zeros(network_info['node_num'][2]) + 0.01
        targets[label] = 0.99
        return n_class.back_query(targets)

# 调用
network_info = {
    'node_num': (784, 100, 10),
    'learning_grate': 0.3,
    'train_file': './mnist_dataset/pjreddie/mnist_train.csv',
    'epochs': 1,
    'rotate': True, # 是否旋转
    'rotate_info': (9, -9),
    # 最终回调
    # 'callback': lambda c: draw(back_query(3, c)),
    # 世代回调
    'callback_each_epoch': lambda *args: print(args[0])
}

# 训练网络
# nn = train(network_info)

# target = range(10)
# draw(back_query(target, nn), len(target)/2)
# draw(back_query(0, nn))


# 测试网络
# score =  test(nn, './mnist_dataset/mini/mnist_test_10.csv')
# print(score)

# 将反向查询的图绘制出来
# draw(back_query(3, nn))
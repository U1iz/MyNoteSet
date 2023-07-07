# import math

# x = 1.21
# y = 2

# json = {
#     'sqrt': math.sqrt(x), # 返回x的平方根。
#     'pow': math.pow(x, y), # 返回x的y次幂。
#     'floor':math.floor(x), # 返回小于或等于x的最大整数。
#     'ceil':math.ceil(x), # 返回大于或等于x的最小整数。
#     'trunc':math.trunc(x), # 返回x的整数部分。
#     'sin':math.sin(x), # 返回x的正弦值。
#     'cos':math.cos(x), # 返回x的余弦值。
#     'tan':math.tan(x), # 返回x的正切值。
#     'radians':math.radians(x), # 将角度x转换为弧度。
#     'degrees':math.degrees(x), # 将弧度x转换为角度。
#     'pi':math.pi, #表示圆周率 π 的常量。
#     'e':math.e #表示自然对数的底数 e 的常量。
# }

# for val in json.values():
#     print(val)


# print(json.values())

# count(item); # 

# index(item); # 

# len(tuple); # 

# max(tuple); # 

# min(tuple); # 

# sorted(tuple); # 

# sum(tuple); # 


# 返回元组中指定元素item出现的次数。
# tup = (1, 2, 3, 4, 3, 2, 1)
# print(tup.count(3))  # 输出：2

# # 返回元组中指定元素item的第一个出现的索引值。
# print(tup.index(4))  # 输出：3

# # 返回元组中元素的个数。
# print(len(tup))  # 输出：7

# # 返回元组中最大的元素。
# print(max(tup))  # 输出：4

# # 返回元组中最小的元素。
# print(min(tup))  # 输出：1

# # 返回元组中元素的总和。
# print(sum(tup)) # 输出：16

# # 将列表转换为元组。
# lst = [1, 3, 2, 4]
# new_tup = tuple(lst)
# print(new_tup)  # 输出：(1, 3, 2, 4)


# a = {
#     'b': 1,
#     'c': {
#         'd': {
#             'e': ''
#         }
#     }
# }

# # key in dict 判断 dict 的当前层是否含有键key
# print('c' in a) # True
# print('d' in a) # False
# print('e' in a) # False
# print('d' in a['c']) # True
# print('e' in a['c']['d']) # True

# # 删除元素
# del a['c']
# print(a) # {'b': 1}

# # 创建、修改key值
# a['c'] = True
# a['b'] = False
# a['d'] = {
#     'e': 1
# }
# print(a) # {'b': False, 'c': True, 'd': {'e': 1}}

# # 适用于遍历的函数，返回相关数组
# print(a.keys()) # ['b', 'c', 'd']
# print(a.values()) # [False, True, {'e': 1}]
# print(a.items()) # [('b', False), ('c', True), ('d', {'e': 1})]

# array = ['1', 2, 3, 4]
# array[0] = 1
# array.append(5)
# print(array) # [1, 2, 3, 4, 5]
# array = [0] + array
# print(array) # [0, 1, 2, 3, 4, 5]
# array = array[0:5]
# print(array) # [0, 1, 2, 3, 4]
# print(array.pop(), array) # 4 [0, 1, 2, 3] 删除并然后最后一个值
# array = array + [5, 5, 5]

# print(array) # [0, 1, 2, 3, 5, 5, 5]
# print(array.count(5)) # 3 数组中包含5的数量
# print(array.index(5)) # 4 数组中出现的第一个5的索引值


# array.extend(['a', 'b', 'c']) # 拼接一维数组
# print(array) # [0, 1, 2, 3, 5, 5, 5, 'a', 'b', 'c']
# array.clear()
# print(array) # []

   
# def loop(list):
#     for i in list:
#         print(i)
#     print('done')

# loop(range(5)) # 等同于 loop([0, 1, 2, 3, 4])

# import numpy as np
# a = np.zeros([3,2])

# # 输出：
# """ 
# [[0. 0.] 
#  [0. 0.] 
#  [0. 0.]]
# """

# a[0, 0] = 1
# a[0, 1] = 2
# a[1, 0] = 9
# a[2, 1] = 12
# print(a)

# 输出
"""
[[ 1.  2.]
 [ 9.  0.]
 [ 0. 12.]]
"""

# import matplotlib.pyplot as mp
# plt.imshow(a, interpolation="nearest")

# import matplotlib.pyplot as plt
# import numpy as np
# import random

# a = np.zeros([3,2])
# step = 0

# for i in range(len(a)):
#     for j in range(len(a[i])):
#         # 0~1的随机数
#         # a[i][j] = random.random()
#         a[i][j] = step
#         # python只能+=自增，无法使用++代替
#         step += 1
# plt.figure()
# plt.imshow(a, interpolation="nearest")
# plt.show()

import numpy as np
# import scipy.special as sp
from scipy import special as sp

# 随机权重矩阵
def random_weight_matrix(len1, len2):
    # 正态分布
    return np.random.normal(0.0, pow(len1, -0.5), (len1, len2))
    # return np.random.uniform(-1/np.sqrt(len1), 1/np.sqrt(len1), size=(len1, len2))

# 转为矩阵

def convert_matrix(list):
    return np.array(list, ndmin=2).T
    

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
        
        self.activation_fn = lambda x: sp.expit(x)
        
        print('权重1：\n', self.w_ih, '\n权重2：\n', self.w_ho, '\n')
        
        
        pass
    # 训练神经网络
    def train(self, input_list, target_list):
        input = convert_matrix(input_list)
        target = convert_matrix(target_list)

        # 算出误差（目标 - 结果）
        # 输出层误差
        output_error = target - self.final_output
        # 隐藏层误差
        hidden_error = np.dot(self.w_ho.T, output_error)

        # 通过误差修改
        self.w_ho += self.lr * np.dot((output_error * self.final_output * (1 - self.final_output)),
                                      np.transpose(self.hidden_output))
        self.w_ih += self.lr * np.dot((hidden_error * self.hidden_output * (1 - self.hidden_output),
                                       np.transpose(input)))

        pass
    # 查询神经网络
    def query(self, input_list):
        # 将输入数组转为矩阵
        input = convert_matrix(input_list)
        # 计算操作
        def output_calc(weight, input):
            return self.activation_fn(np.dot(weight, input))

        """ hidden_input = np.dot(self.w_ih, input)
        hidden_output = self.activation_fn(hidden_input)

        final_input = np.dot(self.w_ho, hidden_output)
        final_output = self.activation_fn(final_input) """

        self.hidden_output = output_calc(self.w_ih, input)
        self.final_output = output_calc(self.w_ho, self.hidden_output)

        return self.final_output
    pass


# 节点信息
neural_node_info = {
    'input': 3,
    'hide': 3,
    'output': 3
}
# 学习率
learning_grate = 0.3

# 实例化一个神经网络对象
example = neuralNetwork(neural_node_info, learning_grate)
print('当前的计算结果：\n',example.query([1.0, 0.5, -1.5]))

# print('\n')
# print(np.random.normal(0.0, pow(3, -0.5), (3, 3)))
# print('\n')
# print(np.random.uniform(-1/np.sqrt(3), 1/np.sqrt(3), size=(3, 3)))
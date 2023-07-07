# Python基础语法

> win + "idle" 打开idle，进行交互式编程
>
> 项目：
>
> 在idle中 Ctrl + n 创建空文件，（保存好文件后）F5运行
>
> 打印结果显示于idle
>
> 也可直接使用类似于VsCode的编辑器打开文件夹，创建 `.py`  文件直接编写，F5选择合适的编译器运行
>
> 打印结果显示于下方终端（如果没有可以 `Ctrl + ·` 打开）



[toc]



#### 数学运算

```Python
>>> 1 + 2 * (3 - 4)
-1
>>> 1 + 2 * (3 - (4 - 1))
-3
>>> 2 ** 3
8
```

#### 声明变量

不同于其他主流编程语言

python声明变量不需要声明类型

```
>>> x = 10
>>> x
10
```

值得注意的是，这种声明都是private的，在需要声明全局变量时需要特别写一行

```python
global 变量名
```

如果需要在子作用域内修改全局变量则需要在该作用域声明一次全局变量

```python
# global a # 这里本身就处于最外围的作用域，已经是全局变量，所以没必要声明
a = 2
print(a)
def fn():
    global a # 在这里声明全局变量
    a = 1

fn()
print(a)
```

```
2
2
```



#### 定义函数

无返回值

```python
>>> def fn(param):
<<<<<<< HEAD
	print(param)
=======
		print(param)
>>>>>>> ebb6fc5 (completed)

>>> fn('hello world')
hello world
```

有返回值

```python
>>> def pow(num):
<<<<<<< HEAD
	return num ** num
=======
		return num ** num
>>>>>>> ebb6fc5 (completed)

>>> pow(2)
4
>>> pow(3)
27
```



<<<<<<< HEAD
=======
> 使用星号*来定义一个可变长度的参数，在函数内部会将这些参数组合成一个元组来进行处理。

```python
>>> def infinite_param(*args):
    	for arg in args:
        	print(arg)

>>> infinite_param(*range(5))
0
1
2
3
4
```

> 使用两个星号**来定义一个接收关键字参数的参数，在函数内部会将这些参数组合成一个字典来进行处理。

```python
>>> def key_word_param(**kwargs):
    	print(kwargs.items())
	    for key, val in kwargs.items():
    	    print(f'key: {key}; val: {val}')

>>> key_word_param(a=3, b=2, c=1)
dict_items([('a', 3), ('b', 2), ('c', 1)])
key: a; val: 3
key: b; val: 2
key: c; val: 1
```



>>>>>>> ebb6fc5 (completed)
#### 数据类型

1. 数字（Number）：包括整数（int）、浮点数（float）和复数（complex）。
2. 字符串（String）：由一串字符组成，用单引号（' '）或双引号（" "）括起来。
3. 列表（List）：由一系列有序的元素组成，用中括号（[ ]）表示。
4. 元组（Tuple）：与列表类似，但元素不能修改，用小括号（( )）表示。
5. 集合（Set）：由一组无序的、唯一的元素组成，用大括号（{ }）表示。
6. 字典（Dictionary）：由键值对组成的数据结构，用大括号（{ }）表示。键和值之间用冒号（:）进行分隔。
7. 布尔值（Boolean）：表示真（True）或假（False）。
8. 空值（None）：表示空对象或变量。



除了以上常见的数据类型，还可以通过模块引入其他特定的数据类型，如日期时间类型、正则表达式类型等。





##### 数组

```python
array = ['1', 2, 3, 4]
array[0] = 1

print('数组长度: ', len(array)) # 4

array.append(5) # 在数组末尾追加值
print(array) # [1, 2, 3, 4, 5]

array = [0] + array # 可以直接拼接两个数组
print(array) # [0, 1, 2, 3, 4, 5]

array = array[0:5] # 切片数组 [开始: 结束-1]
print(array) # [0, 1, 2, 3, 4]

print(array.pop(), array) # 4 [0, 1, 2, 3] 删除并返回最后一个值
array = array + [5, 5, 5]

print(array) # [0, 1, 2, 3, 5, 5, 5]
print(array.count(5)) # 3 数组中包含5的数量
print(array.index(5)) # 4 数组中出现的第一个5的索引值

array.extend(['a', 'b', 'c']) # 拼接一维数组
print(array) # [0, 1, 2, 3, 5, 5, 5, 'a', 'b', 'c']

array.clear() # 清空数组
print(array) # []
```



##### 字典（类似json）

> key 必须加引号

```python
>>> dict = {
    'name': '张三',
    'age': 8,
    'hobby': ['eating', 'drinking', 'sleeping'],
    'friend': [{
            'name': '李四',
            'age': 7,
            'hobby': ['murdering people'],
        },
        {
            'name': '王五',
            'age': 9,
            'hobby': ['jerk off']
        }
    ]
}
>>> dict
{'name': '张三', 'age': 8, 'hobby': ['eating', 'drinking', 'sleeping'], 'friend': [{'name': '李四', 'age': 7, 'hobby': ['murdering people']}, {'name': '王五', 'age': 9, 'hobby': ['jerk off']}]}

>>> dict['name']
'张三'
>>> dict['hobby'][1]
'drinking'
>>> dict['friend'][0]['hobby']
['murdering people']
```

###### 内置语法

```python
a = {
    'b': 1,
    'c': {
        'd': {
            'e': ''
        }
    }
}

# key in dict 判断 dict 的当前层是否含有键key
print('c' in a) # True
print('d' in a) # False
print('e' in a) # False
print('d' in a['c']) # True
print('e' in a['c']['d']) # True

# 删除元素
del a['c']
print(a) # {'b': 1}

# 创建、修改key值
a['c'] = True
a['b'] = False
a['d'] = {
    'e': 1
}
print(a) # {'b': False, 'c': True, 'd': {'e': 1}}

# 适用于遍历的函数，返回相关数组
print(a.keys()) # ['b', 'c', 'd']
print(a.values()) # [False, True, {'e': 1}]
print(a.items()) # [('b', False), ('c', True), ('d', {'e': 1})]
```



##### 元祖（不可变序列）

```python
>>> tup1 = (1, 2, 3)
>>> len(tup1)
3
>>> tup2 = (4, 5, 6)
>>> tup3 = tup2 + tup1
>>> tup3
(4, 5, 6, 1, 2, 3)

>>> tup1 * 3 # 复制元祖
(1, 2, 3, 1, 2, 3, 1, 2, 3)
>>> (tup1) * 3
(1, 2, 3, 1, 2, 3, 1, 2, 3)
>>> (tup1,) * 3
((1, 2, 3), (1, 2, 3), (1, 2, 3))
```

###### 内置函数

```python
# 返回元组中指定元素item出现的次数。
tup = (1, 2, 3, 4, 3, 2, 1)
print(tup.count(3))  # 输出：2

# 返回元组中指定元素item的第一个出现的索引值。
print(tup.index(4))  # 输出：3

# 返回元组中元素的个数。
print(len(tup))  # 输出：7

# 返回元组中最大的元素。
print(max(tup))  # 输出：4

# 返回元组中最小的元素。
print(min(tup))  # 输出：1

# 返回元组中元素的总和。
print(sum(tup)) # 输出：16

# 将列表转换为元组。
lst = [1, 3, 2, 4]
new_tup = tuple(lst)
print(new_tup)  # 输出：(1, 3, 2, 4)
```



##### 循环

for

```python
def loop(list):
    for i in list:
        print(i)
    print('done')
        
loop(range(5)) # 等同于 loop([0, 1, 2, 3, 4])
```

等同于以下 js

```js
/**
 * 生成一个包含指定长度的整数数组
 * @param {number} list_len - 数组长度
 * @returns {array} - 生成的整数数组
 */
function range(list_len) {
    return Array.from({length: list_len}, (_, i) => i)
}

/**
 * 遍历给定列表，对每个元素执行回调函数，并将元素打印到控制台。
 * @param {Array} list - 待遍历的列表
 * @returns {void}
 */
function loop(list) {
    list.forEach(e => {
        console.log(e)
    })
    console.log('done')

    // 几乎所有主流语言一致的遍历语法
    // for (let i = 0; i < list.length; i++) {
    //     console.log(list[i])
    // }
}

loop(range(5))
```

while

> 相对于 for循环 来说，while 循环更容易因为逻辑不当导致死循环

```python
count = 0
while count < len(arr):
    print(arr[count])
    count += 1
print('---done---')
```

打印

```
0
1
2
3
4
done
```



##### 引入模块

```python
import numpy
print(numpy.zeros([3,2]))

import numpy as np
print(np.zeros([3,2]))


# 输出：
""" 
[[0. 0.] 
 [0. 0.] 
 [0. 0.]]
"""
```

```python
from scipy import special as sp
# 等同于
import scipy.special as sp
```



##### 16进制拼接

```python
i = 10
result = "0x{:x}".format(i)
print(result)


i = "a"
result = "0x" + i
print(result)

result = int(result, 16)
```





##### class 类

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        print("Hello, my name is", self.name, "and I am", self.age, "years old.")
    
    def increment_age(self):
        self.age += 1

# 实例化一个Person对象
john = Person("John", 28)

# 调用对象的方法
john.greet() # 输出: Hello, my name is John and I am 28 years old.

# 修改对象的属性
john.age = 29
john.greet() # 输出: Hello, my name is John and I am 29 years old.

# 调用对象的方法来修改属性
john.increment_age()
john.greet() # 输出: Hello, my name is John and I am 30 years old.
```







## idle使用技巧

```Python
alt + p # 使用上一次输入，等同于cmd中的 ↑ 键
```





## pip

python 3.0 开始，安装python默认配置了全局pip

管理员运行命令行，再使用pip命令

##### 升级pip

```
pip install --upgrade pip
```


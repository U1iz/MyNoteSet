# Python进阶语法

[toc]



## 自动补零

```Python
print('1'.zfill(2)) # 01
print('1'.zfill(3)) # 001
```




## 数组转字符串

```Python
arr = [0, 1, 2]
# [0, 1, 2] -> '[0, 1, 2]'
print(str(arr))
# [0, 1, 2] -> '0, 1, 2'
# [1,2,3].join(', ') # 错误的
# 正确的
', '.join(str(elem) for elem in [1, 2, 3])
```



----



# 类似js的语法

## 三元表达式

> 类似于js: bool ? true : false; bool ?? false

```Python
x = 5

result = True if x >= 10 else False

print(result) # False
```



## f-string

> Python 3.6版本及以上支持的新特性
>
> 类似于 js 中的 \`${变量&语句}`

```Python
# 使用f-string插入变量
x = 10
y = 20
print(f"{x} + {y} = {x + y}")  # 10 + 20 = 30

# 使用表达式进行格式化
pi = 3.1415926
print(f"圆周率保留两位小数的值为: {pi:.2f}")  # 圆周率保留两位小数的值为: 3.14
```



## 解构赋值

```python
a, b, c = [1, 2, 3]
print(a, b, c) # 1 2 3
a, b, c = (4, 5, 6)
print(a, b, c) # 4 5 6
a, b, c = 7, 8, 9
print(a, b, c) # 7 8 9
```



## 箭头函数
> 类似于js中的: add = (a, b) => a + b

```python
# add = (a, b) => a + b
add = lambda a, b: a + b

add(1, 2) # 3
```



## 扩展运算符
> 类似于js中的: ...

```python
a = [1, 2, 3, 4]
print(*a) # 1 2 3 4

arr_1 = [1, 2, 3]
arr_2 = [4, 5, 6]
combined = [*arr_1, *arr_2]
print(combined) # [1, 2, 3, 4, 5, 6]
```





首先，我们需要创建一个Python模块。模块其实就是一个Python文件，我们可以在其中定义函数、类等。

例如，我们创建一个名为mymodule.py的文件，然后在其中定义一个函数：

python



Copy

```
# mymodule.py

def hello_world():
    print("Hello, world!")
```

然后，我们可以在另一个Python文件中导入并使用这个模块。例如，我们创建一个名为main.py的文件，然后在其中导入并使用mymodule：

python



Copy

```
# main.py

import mymodule

mymodule.hello_world()  # 输出：Hello, world!
```

注意，这两个文件需要在同一目录下，或者mymodule.py所在的目录需要在Python的模块搜索路径中。

如果你想导入的模块在子目录中，你需要在子目录中创建一个__init__.py文件（可以是空的），然后使用.来导入子目录中的模块。例如，如果mymodule.py在subdir子目录中，你可以这样导入：

python



Copy

```
# main.py

import subdir.mymodule

subdir.mymodule.hello_world()  # 输出：Hello, world!
```

或者，你也可以使用from ... import ...语句来导入特定的函数或类：

python



Copy

```
# main.py

from mymodule import hello_world

hello_world()  # 输出：Hello, world!
```

这样，你就可以在一个文件中定义函数或类，然后在其他文件中导入并使用它们了。
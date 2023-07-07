### Python操作

Python引入模块

- 打开终端并输入以下命令：`echo %PATH%`
- 检查输出中是否包含Python和pip的安装路径。例如，如果您的Python安装在C:\Python39下，则应该看到类似于C:\Python39和C:\Python39\Scripts的路径。
- 如果没有则在系统环境变量中引入类似以下路径
  - C:\Python39
  - C:\Python39\Scripts	

<img src="Python操作.assets\image-20230527082131249.png" alt="image-20230527082131249" style="zoom:33%;" />

<img src="Python操作.assets\image-20230527082221554.png" alt="image-20230527082221554" style="zoom:33%;" />

- 确定后打开新的终端，输入 `pip --version` 查看到版本则部署成功

---

如果使用 `pip install module` 下载包速度过慢

处理方式与 `npm` 类似

#### **换源**

- 使用阿里云PyPI镜像：

```
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

- 使用清华大学开源软件镜像站

```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

- 使用华为云pypl镜像

```
pip config set global.index-url https://mirrors.huaweicloud.com/repository/pypi/simple/
```



pip升级

```
pip install --upgrade pip
```





#### idle中的快捷操作

1、ALT+3：多行注释。

2、ALT+4：取消多行注释。

3、ALT+P：翻出上一条命令，类似于向上的箭头。

4、ALT+N：翻出下一条命令，类似于向下的箭头。

5、CTRL+：多行的代码的缩进。

6、CTRL+F：查找指定的字符串。

7、CTRL+D：跳出交互模式。

8、ALT+F4：关闭Windows窗口。

9、ALT+M：打开模块代码，先选中模块，就可以查看该模块的源码。

10、ALT+X：进入Python Shell模式。

11、ALT+C：打开类浏览器，方便在模块方法体之间的切换。
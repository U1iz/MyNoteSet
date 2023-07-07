# cmd基础语法

> Ctrl + C 停止
>
> Ctrl + S & 鼠标选择一片区域 暂停程序
>
> Ctrl + Q 继续程序

判断是否存在名为Python的系统环境变量

```cmd
where Python
```

ping

> 用于测试与目标主机之间的网络连接

```
ping 127.0.0.1
ping github.com
```

tracert

> 实时监听包在网络上的路径
>
> 需要打开该网址（所属域）

```
tracert github.com
```

获取网络信息

> 通常为：无线局域网适配器 WLAN

```
ipconfig
```



刷新dns

> 通常在修改host后使用，令修改立即生效

```
ipconfig /flushdns
```



1. 基本的GET请求： `curl [URL]`

   例如：`curl www.bilibili.com`

2. 带有参数的GET请求： `curl [URL]?[参数]`

   例如：`curl https://api.bilibili.com/pgc/web/rank/list?day=3&season_type=1`

3. POST请求： `curl -X POST -d "[参数]" [URL]`

   例如：`curl -X POST -d "name=John&age=25" https://api.example.com/users`

4. 设置Header： `curl -H "Header名称: Header值" [URL]`

   例如：`curl -H "Authorization: Bearer 12345" https://api.example.com/users`

5. 下载文件： `curl -O [文件URL]`

   例如：`curl -O https://s.cn.bing.net/th?id=OHR.CoyoteBanff_ZH-CN7537137739_1920x1080.webp`

6. 向表单提交数据： `curl -X POST -F "字段名=值" [URL]`

   例如：`curl -X POST -F "file=@image.jpg" https://api.example.com/upload`

7. 使用代理服务器： `curl -x [代理服务器地址:端口号] [URL]`

   例如：`curl -x http://proxy.example.com:8080 https://api.example.com`


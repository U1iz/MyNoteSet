## 附录A_微积分简介

> 微积分探讨的是，建立关系以表示一种事物如何随着其它事物的变化而变化
>
> 或者说，以精确的数学方式，理解事物如何变化。

[TOC]



### A.1 一条平直的线

如果一辆车以30公里/时的速度匀速前进

每分钟测量一次汽车的速度，并作出如下图表

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528194721411.png" alt="image-20230528194721411" style="zoom:33%;" />
=======
<img src="附录A_微积分简介.assets/image-20230528194721411.png" alt="image-20230528194721411" style="zoom:33%;" />
>>>>>>> ebb6fc5 (completed)

根据测算结果得出结论：该汽车速度不随时间而改变，相关性为0

速度表达式为 s = 30

用数学表达式表示为：

**δs / δt = 0**

> 事实上，当你再次观察速度的表达式 s = 30时，你可以发现这种不相关性 。
>
> 在这个表达式中，没有提到时间t
>
> 因此，我们不需要任何复杂的算式来计算出 δs / δt = 0，只需要观察就能得出这个结论。该方法称为“**观察法**”



如 δs / δt 的表达式，解释了变化率，称为**导数**。



### A.2 一条斜线

如果一辆车以35英里/时的速度前进，在1分钟后匀速加速

每分钟测量一次速度，图表如下

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528200138252.png" alt="image-20230528200138252" style="zoom:33%;" />
=======
<img src="附录A_微积分简介.assets/image-20230528200138252.png" alt="image-20230528200138252" style="zoom:33%;" />
>>>>>>> ebb6fc5 (completed)

可以得出速度表达式：

s = 30 + 10t

以及速度随时间变化的表达式：

δs / δt = 10

通过观察法，可以知道该斜线的斜率为10



### A.3 一条曲线

直接上图

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528200700740.png" alt="image-20230528200700740" style="zoom: 25%;" /><img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528200636647.png" alt="image-20230528200636647" style="zoom: 25%;" />
=======
<img src="附录A_微积分简介.assets/image-20230528200700740.png" alt="image-20230528200700740" style="zoom: 25%;" /><img src="附录A_微积分简介.assets/image-20230528200636647.png" alt="image-20230528200636647" style="zoom: 25%;" />
>>>>>>> ebb6fc5 (completed)

汽车的速度为时间（分钟）的平方，因此速度表达式为

s = t²



> 问题是：在任何时间点，速度的变化率是多少，在这个实例中的意思是图线向何处弯曲？



### A.4 手绘微积分



<<<<<<< HEAD
![image-20230528201353842](https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528201353842.png)
=======
![image-20230528201353842](附录A_微积分简介.assets/image-20230528201353842.png)
>>>>>>> ebb6fc5 (completed)

可以看到，在6分钟出的斜率比在3分钟处的斜率要大。

> 但是，如何测量曲线的斜率呢？对于直线而言，测斜率非常容易。
>
> 对于曲线而言，可以画出称为切线的斜率估计出曲线在这一点的斜率。
>
> 在其它测量方法出现之前，这就是人们测量曲线斜率的方式。

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528211233063.png" alt="image-20230528211233063" style="zoom:33%;" />
=======
<img src="附录A_微积分简介.assets/image-20230528211233063.png" alt="image-20230528211233063" style="zoom:33%;" />
>>>>>>> ebb6fc5 (completed)

在6分钟时，我们得到了与速度曲线仅有一个交点的切线。

其斜率为 Δs/Δt= 12

即：在6分时，速度变化率为每分钟12.0英里/时



### A.5 非手绘微积分

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528212926777.png" alt="image-20230528212926777" style="zoom:33%;" />
=======
<img src="附录A_微积分简介.assets/image-20230528212926777.png" alt="image-20230528212926777" style="zoom:33%;" />
>>>>>>> ebb6fc5 (completed)

> 这幅图中有一条新的标记直线。
>
> 这条直线与曲线相交与两点上，因此不是一条切线。
>
> 但是这条直线看起来以某种方式围绕着时间点3分钟这个中心。



事实上，这条直线确实与时间点3分钟有关系。

我们选择的时间点是 **t = 3** 分钟的**上下2分钟**处。



使用数学符号表示，**Δx** 为 **2分钟** ，

我们选的时间点为 **x - Δx** 和 **x + Δx**



经过这两点的直线斜率与x处切线的真正斜率大致相同

计算得出该斜线斜率为24/4 = 6



- 这种方法只能得到一个近似值。
- 要改进这个值，我们的目标是按照精确数学的方式，计算出事情如何改变，得到梯度值。



<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528213323588.png" alt="image-20230528213323588" style="zoom:33%;" />如果将Δx**变小**，得到的斜线斜率则将更加接近目标斜率
=======
<img src="附录A_微积分简介.assets/image-20230528213323588.png" alt="image-20230528213323588" style="zoom:33%;" />如果将Δx**变小**，得到的斜线斜率则将更加接近目标斜率
>>>>>>> ebb6fc5 (completed)



### A.6 无需绘制图标的微积分

> 已知速度是时间的函数，即 s = t²。
>
> 我们希望知道作为时间的函数，速度是如何变化的。



变化率 δs / δt 等于我们所构造直线的**高度**除以**宽度**，但是其中 Δx 无限小

**高度 = (t + Δx)² - (t - Δx)²**

**宽度 = 2Δx**

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528220034396.png" alt="image-20230528220034396" style="zoom:50%;" />

如果速度表达式为 **s = t2 + 2t**

<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230528220552101.png" alt="image-20230528220552101" style="zoom: 25%;" />相同的算法，最终得出 **变化率为 2t + 2**
=======
<img src="附录A_微积分简介.assets/image-20230528220034396.png" alt="image-20230528220034396" style="zoom:50%;" />

如果速度表达式为 **s = t2 + 2t**

<img src="附录A_微积分简介.assets/image-20230528220552101.png" alt="image-20230528220552101" style="zoom: 25%;" />相同的算法，最终得出 **变化率为 2t + 2**
>>>>>>> ebb6fc5 (completed)



如果速度表达式为 **s = t³**

则最终得出**变化率**为 3t³ + **Δx²**



前两次表达式中的Δx都被化简抵消了。

- 那么请记住，**只有Δx越来越小，变得无限小时，梯度值才正确**
- **当Δx越来越小，越来越趋近于0，我们就直接将它当为0**



这就得到了数学上的的精确答案：

**δs / δt = 3t²**



### A.7 模式

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230529143531118.png" alt="image-20230529143531118" style="zoom:33%;" />
=======
<img src="附录A_微积分简介.assets/image-20230529143531118.png" alt="image-20230529143531118" style="zoom:33%;" />
>>>>>>> ebb6fc5 (completed)

#### t函数的导数规律

根据之前案例，t函数的导数可以观察到

- t的幂减少了1，其余都是相同的。
- 由于常数都没有变化率，所有常数就简单地**消失**了，*这就是称他们为常量的原因。*
- 在幂指数减小之前，幂指数被用作了乘数。

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230529143832571.png" alt="image-20230529143832571" style="zoom:33%;" />通过以上幂规则，能得如图的公式
=======
<img src="附录A_微积分简介.assets/image-20230529143832571.png" alt="image-20230529143832571" style="zoom:33%;" />通过以上幂规则，能得如图的公式
>>>>>>> ebb6fc5 (completed)

> 这条规则允许进行大量的微分计算，对于大多数用途而言，这就是我们所需的微分。
>
> 但这仅适用于多项式，也就是各种变量的幂次方组成的表达式，如
>
> y  = ax³ + bx² + cx + d
>
> 但是不包括 sinx 或 cosx 这样的式子。



### A.8 函数的函数

如果有一个函数

f = y²

其中 y 也是函数

y = x³ + x

则

f = y² = (x³ + x)²

如果求导 δf / δy，则可以根据之前的的幂规则得出

δf / δy = 2y

但如果要求导 **δf / δx**，就无法再套用之前的规则

但可以使用此前逐渐减小Δ的方式，得以解出其表达式，其模式为

<<<<<<< HEAD
<img src="https://gitee.com/u1iz/notes/raw/master/%E4%B9%A6%E7%B1%8D%E7%AC%94%E8%AE%B0/Python%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/%E9%99%84%E5%BD%95A_%E5%BE%AE%E7%A7%AF%E5%88%86%E7%AE%80%E4%BB%8B.assets/image-20230529150630800.png" alt="image-20230529150630800" style="zoom:50%;" />
=======
<img src="附录A_微积分简介.assets/image-20230529150630800.png" alt="image-20230529150630800" style="zoom:50%;" />
>>>>>>> ebb6fc5 (completed)

这个模式被称为 **链式法则**

通过这个模式可以算出

**δf / δx = （2y） * (3x² + 1)**

= 2(x³ + x) * (3x² + 1)

= (2x³ + 2x)(3x² + 1)



**使用链式法则可以解决许多比较困难的问题**



如果有另一个函数

f = 2xy + 3x²z + 4z

其中x、y和z是互不相关的变量，它们可以为任意值，而无需关心其他变量的取值

如果要求导**δf / δx**则可以根据表达式第一项 **2yx** 得出导数为 **2y**

因为y与x无关，所以x可以视作常数省略

下一项是3x²z，可以应用幂规则，得到6xz

同样x视作常数省略，得到导数 **3z**

最后一项是4z，因为这项中不存在x，因此可以当成常数忽略



最后的答案为

**δf / δx = 2y + 6xy**

$$
Happiness(r) = w_0 + w_1\sum^t_{j=1}γ^{t-j}CR_j + w_2\sum^t_{j=1}γ^{t-j}EV_j +  w_3\sum^t_{j=1}γ^{t-j}RPE_j
$$

> 在最后一个示例中，重要的一点是你要有信心，忽略已知的无关变量。
>
> 这使得对相当复杂的表达式进行微积分运算变得非常简单。
>
> 在观察神经网络的时候，我们非常需要这种深刻的见解
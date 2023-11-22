---
date: 2023-08-03
tag: PyTorch
category: PyTorch
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/rktisg.png
order: 1
---

# 维度

这里就简单讨论一下二维和三维，对于更高维的情况，比较难以想象
![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/93569f.jpg)![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/3ijthh.jpg)![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/jmiurg.jpg)

## 二维

二维可以理解为就是矩阵，例如下面就创建了一个 2*3 的张量（矩阵），dim=0 表示行，dim=1 表示列

```python
>>> x = torch.tensor(range(1, 7)).reshape(2, 3)
>>> print(x)
tensor([[1, 2, 3],
        [4, 5, 6]])
>>> x.sum(dim=0)
tensor([5, 7, 9])
```

对于 x.sum(dim=0)，直觉上会是觉得是把行相加，但是看结果反而是对列进行相加。有种比较好的理解方式，就是把 dim=0 这个维度进行挤压合并，最后剩下一行就是结果，同时 sum 后会降维，如果想要结果维度保持不变，需要加上 keepdim=True 这个参数。

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/7osxxv.gif)

## 三维

三维可以理解为多个矩阵组成的矩阵组，dim=0 表示有几个矩阵，dim=1 表示每个矩阵的行，dim=2 表示每个矩阵的列。

``` python
>>> x = torch.tensor([
        [
         [1,2,3],
         [4,5,6]
        ],
        [
         [1,2,3],
         [4,5,6]
        ],
        [
         [1,2,3],
         [4,5,6]
        ]
    ])
>>> x.sum(dim=0)
tensor([[ 3,  6,  9],
        [12, 15, 18]])
>>> x.sum(dim=1)
tensor([[5, 7, 9],
        [5, 7, 9],
        [5, 7, 9]])
>>> x.sum(dim=2)
tensor([[ 6, 15],
        [ 6, 15],
        [ 6, 15]])
```

三维可能很难想象，直接动图

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/rae3x0.gif)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/rkzfco.gif)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/unnn4l.gif)

## Reference

[笔记 | 什么是张量（tensor）& 深度学习](https://zhuanlan.zhihu.com/p/48982978)

[理解 PyTorch 中维度的概念](https://mathpretty.com/12065.html)

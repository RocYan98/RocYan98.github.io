---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 计算机图形学
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png
order: 3
---

# 变换（二维与三维）

## 1 线性变换

注意：线性变换的矩阵是与向量同维度的，如果不同维度的则是齐次坐标（3.2的内容）

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214416.png)

### 1.1 缩放变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214676.png)

### 1.2 镜像变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214594.png)

### 1.3 剪切变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214579.png)

### 1.4 旋转变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214359.png)

推导过程：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214120.jpg)

## 2 齐次坐标

引入齐次坐标的原因：无法用与向量同维度的矩阵来表示平移变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214185.png)

增加一个维度来表示齐次坐标，其中二维中的点的第三维为 1，二维向量的第三维为 0

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214313.png)

只要第三维非0表示的就是点，两个点相加表示的是两个点所连成的线的中点

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214904.png)

仿射变换=线性变换+平移变换，可以用齐次坐标来表示仿射变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214839.png)

因此线性变换也可以用齐次坐标来表示

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214841.png)

齐次坐标的代价（trade off）：多一个维度

## 3 逆变换

- 一个图形 A 通过变换矩阵 M 得到图形 B，图形 B 可以通过 M 的逆矩阵 $M^{-1}$ 得到原来的图形 A（这个过程称为逆变换）
- 旋转变换矩阵 M 是正交矩阵，即 $M^{-1}=M^T$

## 4 变换的组合

- 一个复杂的变化可以通过许多简单的变换组合得到
- 变换的顺序十分重要（矩阵乘法不满足交换律）
- 矩阵乘法中是从右到左的顺序进行变换，$A_3A_2A_1x$ 是对 x 先进行 $A_1$ 的变换，再进行 $A_2$ 的变换...但是矩阵乘法满足结合率，因此也可以先将矩阵先乘好后再对 x 进行变换

## 5 三维变换

与二维类似，齐次坐标用 4 维表示即可，其他与二维的类似

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261214064.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215855.png)

先线性变换再平移变换

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215652.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215446.png)

![pitch：俯仰，将物体绕 X 轴旋转](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215281.gif)

![yaw: 偏航，将物体绕 Y 轴旋转](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261231092.gif)

![roll：横滚，将物体绕Z轴旋转](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215386.gif)

对于以 n 为轴转动 $\alpha$ 角度可以使用罗德里格斯公式，n 轴是过原点的；要想真的绕任意轴 m 旋转，可以先将图像平移到旋转轴 m 过原点，再利用罗德里格斯公式（I 为单位矩阵），最后对平移进行逆变换。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215081.png)

初始向量 v 绕 n 轴转 $\alpha$角得到$v_{rot}$，$v_{rot}=R(n,\alpha)v,R(n,\alpha)$ 是对应的旋转矩阵

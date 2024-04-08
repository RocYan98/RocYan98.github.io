---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 计算机图形学
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/u37i8v.png
order: 10
---

# 几何（基本表示方法）

几何分为隐式几何（Implicit Geometry）和显式几何（Explicit Geometry)）

## 1 隐式几何

隐式几何不告诉你每个点的具体坐标，而是描述每个点所满足的关系（即几何的函数表达式）

![](http://img.rocyan.cn/blog/2024/04/66134afcb9b6b.png)

- 优点：很容易判断一个点与曲面的关系（在面上、内部或外部）
- 缺点：很难通过函数看出是什么图形

## 2 隐式几何的表示

### 2.1 代数曲面（Algebraic Surfaces）

![](http://img.rocyan.cn/blog/2024/04/66134b011045d.jpg)

### 2.2 构造立体几何（Constructive Solid Geometry，CSG）

CSG 指的是可以对各种不同的几何做布尔运算，如并，交，差：![](http://img.rocyan.cn/blog/2024/04/66134b037af92.png)

### 2.3 符号距离函数 （Signed Distance Function）

可以通过距离函数来得到几何形体混合的效果，可以使用不同的距离函数实现不同混合效果![image-20230720145517725](http://img.rocyan.cn/blog/2024/04/66134b09c2c70.png)![](http://img.rocyan.cn/blog/2024/04/66134b1186de8.png)

### 2.4 水平集（Level Set）

水平集的方与 SDF 类似，也是找出函数值为 0 的地方作曲线，但不像 SDF 会空间中的每一个点有一种严格的数学定义，而是对空间用一个个格子去近似一个函数

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/0dgwch.png)

### 2.5 分型几何（Fractals）

分型几何是指许多自相似的形体最终所组成的几何形状

![](http://img.rocyan.cn/blog/2024/04/66134b1962db1.jpg)

## 3 显式几何

所有曲面的点被直接给出，或者可以通过映射关系直接得到

![](http://img.rocyan.cn/blog/2024/04/66134b1c42ef3.png)

显式几何的优缺点和隐式几何刚好相反

## 4 显式几何的表示

### 4.1 点云（Point Cloud）

很多的点构成的曲面，直接有着所有点的信息

![](http://img.rocyan.cn/blog/2024/04/66134b22009e0.png)

### 4.2 多边形网格（Polygon Mesh）

通过定义各个多边形面的顶点以及顶点之间的连接关系就可以得到许多的三角形面或是四边形面，再通过这些面来近似表现出我们想要的模型效果

![](http://img.rocyan.cn/blog/2024/04/66134b25a8423.png)

通常用 Wavefront Object（.obj）文件来定义，立方体的 obj 文件如下图：

![](http://img.rocyan.cn/blog/2024/04/66134b28e7c91.png)

3 - 10 行定义了立方体的 8 个顶点信息。 12 - 25 行定义了这些顶点的纹理坐标信息（每个面 4 个点，共 6 个面所以最多有24种不同的纹理坐标信息，这里有一些纹理对于不同面上的点是公用的）。 27 - 34 行定义了 6 个面的法线信息，为什么有 8 个是因为建模软件输出的精度问题不必在意，其中有两个是重复的。36 - 47 行中，f 代表一个面，其中 x/x/x 的第一位表示是哪个顶点，第二位表示该顶点纹理坐标是第几个，第三位表示法线信息是第几个。 3 个 x/x/x 表示 3 个顶点的信息构成一个面。

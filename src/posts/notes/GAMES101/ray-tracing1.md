---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 学习笔记
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/9z92pr.png
order: 13
---

# 光线追踪（基本原理）

## Whitted-Style 光线追踪（Ray Tracing）

光线的定义：

- 直线传播
- 光线之间不会碰撞
- 光线从光源发出，进入场景不断碰撞，最终到达眼睛

## 1 光线投射（Ray Casting）

对每一个 pixel，从眼睛/相机发出一根光线，最终打到某一点，如果该点与物体相交，则表示能看到物体上的这个点。再让该点与光源作连线，如果没有遮挡则形成一条有效光路，否则为阴影。（这比 shadow mapping 更方便）

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209513.png)

可以利用 Blinn-Phong 模型对这个点进行局部光照模型计算，得到该像素的颜色，那么遍历投影平面上的所有像素就能得到一张完整的图像。但如果光线追踪仅仅是在 Ray Casting 就停止的话，那么它的效果与局部光照模型是一样的，因此我们还需要考虑反射、折射。

## 2 递归光线追踪（Recursive Ray Tracing）

- primary ray：眼睛发出的光线
- secondary ray：经过反射或折射的光线
- shadow ray：交点到光源的连线

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209503.png)

- 递归有个终止条件，不可能无限递归下去
- 光线在每次反射或者折射之后都有能量损耗，具体的在之后会讲解
- 如果光线没有碰撞到物体则返回一个背景色

## 3 射线方程（Ray Equation）

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209164.png)

Ray 经过 t 时刻到达点 P 可以表示为 $P(x_p,y_p,x_p)=(o_x+td_x,o_y+td_y,o_z+td_z)$，对于原公式中 r(t)=o+td，r 和 o 都是点，d 是方向向量。

## 4 光线与物体的交点

### 4.1 隐式几何

直接联立几何方程和射线方程，只取实数和正数作为结果

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209934.png)

### 4.2 显式几何

图形学中的模型通常由三角形的 mesh 组成，判断一条射线与显式曲面的交点，其实也就是计算光线与三角形面的交点。一个平面是由平面的法向量和平面上的一个点定义，可以通过下图的方程判断一个点是否在平面上。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209531.png)

然后再将射线方程代入平米方程即可解出 t

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209904.png)

通过上述方法求出结果后还要通过向量叉乘的方法判断该点是否在三角形内部，还可以通过下图的方法在求出t的同时判断是否在三角形内部

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261210918.png)

该方法是基于重心坐标，通过克莱姆法则求解线性方程。因为是基于重心坐标来求解，所以只要 $1-b_1-b_2$ 、$b_1$、$b_2$ 三个数都 $\in[0,1]$ 就可以知道该点是在三角形内部。

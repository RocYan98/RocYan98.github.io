---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 学习笔记
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png
order: 8
---

# 着色（着色频率、图形管线、纹理映射）

## 1 着色频率

下图分别对应平面着色、顶点着色和像素着色

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211333.png)

### 1.1 平面着色（Flat Shading）

求每个面的法向量并着色

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211904.png)

### 1.2 顶点着色（Gouraud Shading）

求每个顶点的法向量并着色

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211459.png)

顶点的法线是顶点所关联的面的法线的加权（面积）平均

### 1.3 像素着色（Phong Shading） 

求每个像素的法向量并着色 

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211063.png)

在求每个像素的法向量时需要用到[着色（插值、高级纹理映射）](shading3.html)中的第 1 节重心插值（Barycentric interpolation）的方法

### 1.4 三种着色频率的对比

当顶点数量够多时，平面着色也可以取得不错的效果

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211612.png)

## 2 图形/实时渲染管线

片段（Fragment）是 OpenGL 里的一个概念，可以理解为就是像素

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211127.png)

GPU 就是专门负责执行图形渲染管线的设备

## 3 纹理映射

纹理用来定义着色的时候每一个点的属性，纹理其实就是一张图，可以贴在物体表面。

 物体的表面其实是 2D 的，任意 3D 物体上的任意一点都可以映射到 2D 平面之上。（映射的过程是美工的工作，我们默认是已知的）

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211402.png)

### 3.1 纹理坐标UV

规定 U 和 V 的范围是 [0, 1]

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261212067.png)

### 3.2 特殊纹理tiled

tile 纹理有上下左右重复拼接都是连续的特性，多用在贴在墙面或地板上。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261212577.png)

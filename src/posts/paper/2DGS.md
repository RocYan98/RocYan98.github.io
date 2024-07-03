---
date: 2024-07-03
category: 论文
tag:
  - Paper
  - 3D Reconstruction
  - 2DGS
  - 3DGS
title: 2DGS-论文笔记
order: 19
---

## **2DGS**: 2D Gaussian Splatting for Geometrically Accurate Radiance Fields

[项目地址](https://surfsplatting.github.io)

SIGGRAPH 2024

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407021651321.png)

## Abstract

3D Gaussian Splatting (3DGS) 最近在辐射场重建领域取得了革命性进展，实现了高质量的新视角合成和快速渲染。然而，由于 3D 高斯的多视图不一致性，3DGS 无法准确表示表面。本文提出了 2D Gaussian Splatting (2DGS)，这是一种从多视图图像中建模和重建几何精确辐射场的新方法。核心思想是将 3D 体积压缩成一组 **2D 定向平面高斯盘 (2D oriented planar Gaussian disks)**。与 3D 高斯不同，2D 高斯在建模表面时内在地提供了视图一致的几何形状。为了准确恢复薄表面并实现稳定优化，本文介绍了利用**光线泼溅交汇 (ray-splat intersection)** 和光栅化实现透视准确的 2D splatting 过程。此外，还结合了**深度误差 (depth distortion)** 和法线一致性项，以进一步提高重建质量。证明了本文的可微渲染器在保持竞争性外观质量、快速训练速度和实时渲染的同时，能够实现无噪声且细节丰富的几何重建。

## Introduction

因为体积 3D 高斯模型模拟了完整角度的辐射，这与表面的薄性是冲突的。前人的工作已经证明了**表面元素 (surfels)** 是一个高效表示复杂几何的方法，因此本文用 2D 高斯基元，即**定向椭圆盘 (oriented elliptical disk)** 来表示 3D 场景。相较于 3D 高斯基元，2D 高斯基元可以准确地表示出物体的表面。如图 2 所示，本文采用显式 ray-splat intersection 的方法。3DGS 通过像素光线的相交处来估计高斯的属性，当视角不同时，会产生不同的交平面，最终会导致不一致性。而 ray-splat intersection 的方法能够达到交汇平面的一致性，最实现透视正确的 splatting 效果。并且 2D 基元能够很方便地计算出法线。

> A surfel, that is, a point structure representing Euclidean xyz coordinates, together with normal coordinates, a RGBA color, a radius, a confidence value and the surface curvature estimate.
>

![Fig. 2: Comparison of 3DGS and 2DGS](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407021720559.png)

如果只是用图片求损失来优化效果并不是非常好，因此本文还引入了深度误差和法线一致性损失。深度误差损失将 2D 基元集中在沿光线分布的一个小范围内，解决了渲染过程中忽略高斯基元之间距离的问题；法线一致性损失能最大限度地减少渲染的法线贴图与渲染的深度梯度之间的差异，确保深度和法线定义的几何图形保持一致。

本文的贡献为：

- 提出了一种高效的可微分 2D 高斯渲染器，通过利用 2D 表面建模、ray-splat intersection 和体积积分，实现透视正确的 splatting。
- 引入了两种正则化损失，以改进无噪声表面重建。
- 与其他显式表示法相比，本文的方法实现了最先进的几何重建和**新视角生成 (novel view synthesis, NVS)** 结果。

## Method

### Modeling

如图 3 所示，2DGS 以点 $\mathbf{p}_k$ 为中心，两个主切向量 $\mathbf{t}_u$ 和 $\mathbf{t}_v$ 以及一个控制 2D 高斯方差的缩放向量 $\mathbf{s}=(s_u,s_v)$，两个正交的切向量的叉乘得到高斯基元的法向量 $\mathbf{t}_w=\mathbf{t}_u\times\mathbf{t}_v$。因此可以用一个 $3\times3$ 的旋转矩阵 $\mathbf{R}=[\mathbf{t}_u,\mathbf{t}_v,\mathbf{t}_w]$ 控制基元的方向，用一个最后一行为 $0$ 的 $3\times3$ 对角矩阵 $\mathbf{S}$ 来控制基元的缩放。

![Fig. 3: Illustration of 2D Gaussian Splatting](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407031111398.png)

一个 2D 高斯被在世界空间中的局部切平面的定义如下：
$$
P(u, v)=\mathbf{p}_k+s_u \mathbf{t}_u u+s_v \mathbf{t}_v v=\mathbf{H}(u, v, 1,1)^{\mathrm{T}} 
\tag{1}
$$

$$
\text{where} \ \ \mathbf{H}=\left[\begin{array}{cccc}
s_u \mathbf{t}_u & s_v \mathbf{t}_v & \mathbf{0} & \mathbf{p}_k \\
0 & 0 & 0 & 1
\end{array}\right]=\left[\begin{array}{cc}
\mathbf{R S} & \mathbf{p}_k \\
\mathbf{0} & 1
\end{array}\right]
\tag{2}
$$

- $\mathbf{H}\in4\times4$ 是一个齐次变换矩阵，表示 2D 高斯的几何形状

对于 uv 图中的点 $\mathbf{u}=(u,v)$，其 2D 高斯的值可以通过标准高斯计算出来：
$$
\mathcal{G}(\mathbf{u})=\exp \left(-\frac{u^2+v^2}{2}\right)
\tag{3}
$$

> 可以理解为高斯的均值为0，协方差矩阵为 $\left[\begin{array}{cc}
> 1 & 0 \\
> 0 & 1
> \end{array}\right]$，即此时基元是一个圆。

中心 $\mathbf{p}_k$，缩放 $(s_u,s_v)$，旋转 $(\mathbf{t}_u, \mathbf{t}_v)$ 都是可学习的参数，并且和 3DGS 一样， 2D 高斯基元也有不透明度 $\alpha$ 和通过球谐函数计算的视角依赖的外观 $c$。

### Splatting



## Reference

[[1]2D Gaussian Splatting for Geometrically Accurate Radiance Fields](https://arxiv.org/abs/2403.17888)

[[2]学习笔记之——2D Gaussian Splatting（2DGS）](https://blog.csdn.net/gwplovekimi/article/details/139115674)
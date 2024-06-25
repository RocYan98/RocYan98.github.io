---
date: 2024-06-25
category: 论文
tag:
  - Paper
  - Avatar
  - GoMAvatar
  - 3DGS
title: GoMAvatar-论文笔记
order: 18
---

## GoMAvatar: Efficient Animatable Human Modeling from Monocular Video Using Gaussians-on-Mesh

[项目地址](https://wenj.github.io/GoMAvatar/)

CVPR 2024

![Fig. 1: Overview](http://img.rocyan.cn/blog/2024/06/667a2bc564abb.png)


## Abstract

本文介绍 GoMAvatar，这是一种实时、内存高效、高质量的可动画人体建模新方法。GoMAvatar 将单目视频作为输入，创建一个数字人，能够以新姿势重新建模，并从新的视角进行实时渲染，同时能够无缝集成基于光栅化的图形管道。本文方法的核心是**网格高斯 (Gaussians-on-Mesh, GoM)** 表示法，这是一种混合 3D 模型，结合了 3DGS 的渲染质量和速度，以及几何建模和可变形网格的兼容性。本文在 ZJU-MoCap、PeopleSnapshot 和各种 YouTube 视频上对 GoMAvatar 进行了评估。GoMAvatar 在渲染质量方面超过了当前的单目人体建模算法，在计算效率 (43 FPS) 方面明显优于这些算法，同时内存效率也很高 (每个主体 3.63 MB)。

## Introduction

本文的主要创新点：

- 引入了网格高斯表示法，用于从单个视频中高效、高保真地重建人体，将 3DGS 与可变形网格相结合，实现实时、自由视点渲染。
- 为视角相关性设计了一个独特的可微 shading 模块，将颜色分割为从 3DGS 得到的伪反照率图和从法线图得到的伪阴影图。

## Methods

**Overview**：给定一个人的单目视频，目的是学习一个标准空间的 GoM 表示 $\text{GoM}_\theta^c$ (下标 $\theta$ 表示可学习的函数或变量，上标 $c$ 表示标准空间)，这样在给定相机内参 $K\in\R^{3\times3}$ 、相机外参 $E\in SE(3)$ 和人体 pose $P$ 时，就能渲染出对应的人体。为了渲染，首先将 $\text{GoM}_\theta^c$ 变换到观测空间：
$$
\operatorname{GoM}^o=\text{Articulator}_\theta\left(\operatorname{GoM}_\theta^c, P\right)
\tag{1}
$$

- $\text{GoM}^o$ 表示观测空间的 GoM 表示

为了渲染出 $H\times W$ 的结果，用一个神经渲染器来获得人体的 appearence 和 alpha mask：
$$
(I,M)=\text{Renderer}_\theta(K,E,\text{GoM}^o)
\tag{2}
$$

- $I\in\R^{H\times W\times3}$​​ 表示人体的 appearence
- $M\in\R^{H\times W\times1}$ 表示 alpha mask

最终的渲染结果是基于 $I$ 和 $M$ 通过经典的 alpha 合成得到的。

### Gaussians-on-Mesh Representation

标准空间的 GoM 表示是通过点和面的集合以及相关属性来确定的：
$$
\operatorname{GoM}_\theta^c \triangleq\left\{\left\{v_{\theta, i}^c\right\}_{i=1}^V,\left\{f_{\theta, j}\right\}_{j=1}^F\right\}
\tag{3}
$$

- $\{v_{\theta, i}^c\}_{i=1}^V$ 和 $\{f_{\theta, j}\}_{j=1}^F$ 分别表示 $V$ 个顶点和 $F$ 个面及其相关属性

可以进一步定义顶点为：
$$
v^c_{\theta,i}=(p^c_{\theta,i},w_i)
\tag{4}
$$

- $p^c_{\theta,i}\in\R^3$ 表示顶点坐标
- $w_i\in\R^J$ 表示顶点和 $J$​ 个 joint 的混合蒙皮权重

定义面为：
$$
f_{\theta,j}=(r_{\theta,j},s_{\theta,j},c_{\theta,j},\{\Delta_{j,k}\}_{k=1}^3)
\tag{5}
$$

- $r_{\theta,j}\in so(3)$ 和 $s_{\theta,j}\in\R^3$ 分别表示与面相关的局部高斯的旋转和缩放
- $c_{\theta,j}$ 表示颜色向量
- $\{\Delta_{j,k}\}_{k=1}^3$ 表示第 $j$ 个面所对应的 $3$ 个顶点的坐标，$\Delta_{j,k}\in\{1,...,V\}$​

![Fig. 2: Gaussians-on-Mesh (GoM)](http://img.rocyan.cn/blog/2024/06/667a43c8192f8.png)

本文将高斯参数与面进行关联。如图 2 所示，在每个三角形的局部坐标系中学习高斯分布，并根据三角形的形状将它们转换到世界坐标系。将旋转矩阵 $r_{\theta,j}$ 初始化为0，将缩放因子 $s_{\theta,j}$ 初始化为1，从而使得初始时高斯分布在三角形的法线轴方向上是细长的。同时，椭球体 $\{x : (x−μ_j)^T Σ^{-1}_j (x−μ_j) = 1\}$ 在三角形上的投影是斯坦纳椭圆。

> 斯坦纳椭圆（Steiner ellipse），也称为内切椭圆，是一个在三角形内部的椭圆。它具有以下几个显著特征：
>
> - 斯坦纳椭圆与三角形的每条边相切。
> - 它的中心位于三角形的质心（即三条中线的交点）。
> - 在所有与三角形的三边相切的椭圆中，斯坦纳椭圆的面积最大。

## Rendering



## Reference

[[1]GoMAvatar: Efficient Animatable Human Modeling from Monocular Video Using Gaussians-on-Mesh](https://arxiv.org/abs/2404.07991)


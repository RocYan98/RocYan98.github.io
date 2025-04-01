---
date: 2025-01-15
category: 论文
tag:
  - Paper
  - Avatar
  - Animation
  - PICA
  - 3DGS
title: PICA-论文笔记
order: 9
---

## PICA: Physics-Integrated Clothed Avatar

[项目地址](https://ustc3dv.github.io/PICA/)

TVCG

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202501151312550.png)

## Abstract

我们介绍了 PICA，这是一种用于高保真可动画穿衣数字人的新型表示方法，它具有精确的服装物理动态，即使是宽松的衣服也不例外。以往基于神经渲染的可动画穿衣人体模型通常采用单一模型来表示服装和底层身体。这些方法虽然高效，但往往不能准确地表示复杂的服装动态，导致不正确的服装动态和明显的渲染伪影，尤其是滑动或宽松的服装。此外，以前的工作将服装动态表示为依赖人体姿势的变形，并以数据驱动的方式促进新姿势动画的产生。这样做的结果往往不能真实地表现运动的力学原理，而且泛化性能差。为了解决这些问题，我们采用了两个具有不同变形特征的独立 3DGS 模型，分别对人体和服装进行建模。这种区别可以更好地处理它们各自的运动特性。通过这种表示方法，我们集成了基于图神经网络 (GNN) 的服装人体物理模拟模块，以确保服装动态的准确表示。我们的方法通过其精心设计的功能，实现了对复杂和新颖驱动姿势下着装人体的高保真渲染，在相同设置下明显优于之前的方法。

## Introduction

本文的创新点：

- 通过使用双层 3DGS 来表现穿衣者的身体，从而实现超逼真的渲染效果，这对服装和身体的独立动画制作非常重要。
- 通过将双层表示法与高效的神经模拟模型相结合，PICA 在新视角和新姿势下实现了令人满意的衣着人体动画效果。
- 利用我们的双层表示法和基于物理的驱动模块，PICA 支持逼真的虚拟试穿，并能为穿着新颖服装的数字人制作动画，从而为动态逼真的时尚展示提供更多可能。

## Method

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202501151421494.png)

### Avatar Representation

#### Avatar in canonical space

首先在标准空间中表示数字人。本文将高斯点云锚定在模板 mesh $\{M^{body},M^{clothing}\}$ 的 face 上。人体的 mesh 直接使用 SMPL-X，如果是长头发则在头的后面加一些 face 来建模头发。对于衣服的 mesh，如果是紧身的也是直接使用 SMPL-X 的 mesh；如果是宽松的衣服则用 [Animatable Gaussians](Animatable-Gaussians.html) 里的方法从单帧图片中重建穿衣人体的 mesh。然后再将 2D 分割的 mask 投射到穿衣人体上，得到衣服的 mesh。

然后在 $M^{body},M^{clothing}$ 上采样高斯点云。由于是通过物理先验驱动模板 mesh 来模拟穿衣数字人动态，因此仅根据网格属性来定义高斯的几何属性 (平均位置、缩放和旋转)。具体来说，给定第 $i$ 个 face 的三个顶点  $p_{ij}$ 的位置 (j=1,2,3)，可以通过重心坐标 $b_{j}$ 和法向量偏移 $\delta$ 得到高斯的均值 $\mathbf{x}$ 从而将高斯点云锚定在 mesh 上：
$$
\mathbf{x}=\sum^3_{j=1}b_j\mathbf{p}_{ij} + \delta\mathbf{n}_\mathbf{i}
\tag{1}
$$

- $\mathbf{n}_\mathbf{i}$ 表示 face 的法向量

为了使渲染表面与模板 mesh 表面保持一致，我们希望 3D 高斯尽可能扁平化。因此，使用类似于 [GaMeS](https://waczjoan.github.io/gaussian-mesh-splatting/) 的表示方法将高斯点云与模板 mesh 的三角形面对齐。具体来说，首先计算第 $i$ 个 face 的正交基 $[\mathbf{r}_1,\mathbf{r}_2,\mathbf{r}_3]$，其中 $\mathbf{r}_\mathbf{1}=\mathbf{n}_\mathbf{i}$ 是 face 的法向量：
$$
\mathbf{r}_2=\frac{\left(\mathbf{p}_{i 1}-\mathbf{p}_{i 0}\right)}{\left\|\mathbf{p}_{i 1}-\mathbf{p}_{i 0}\right\|}, \quad \mathbf{r}_3=\mathbf{r}_1 \times \mathbf{r}_2
\tag{2}
$$

- $\mathbf{p}_{i0}$ 表示第 $i$ 个 face 的中心点

为了让高斯核尽量扁平化，高斯核的缩放为：
$$
S=\left[\epsilon,\left\|\mathbf{p}_{i 1}-\mathbf{p}_{i 0}\right\| \cdot s_2,\left\|\mathbf{p}_{i 2}-\mathbf{p}_{i 0}\right\| \cdot s_3\right]
\tag{3}
$$

- $\epsilon$ 表示一个很小的固定值
- $s_2$ 和 $s_3$ 是可以优化的高斯缩放参数

> $\mathbf{p}_{i0}$ 表示三角形的中心，$\mathbf{p}_{i 1}-\mathbf{p}_{i 0}$ 和 $\mathbf{p}_{i 2}-\mathbf{p}_{i 0}$ 表示三角形其中的两个顶点和中心之间的距离。用 $\epsilon$ 使椭球的一个轴趋向于0，使椭球扁平化成椭圆。

#### Deformation

通过 LBS 和一个非刚性变换将 3D 高斯点云从标准空间变换到 pose 空间：
$$
\mathbf{p}^{\prime}=\sum_{i=1}^N w_i G_i(\boldsymbol{\theta}, \boldsymbol{\beta}) \cdot(\mathbf{p}+\Delta \mathbf{p}), \quad \Delta \mathbf{p}=f_{\mathrm{part}}(\mathbf{p}, t)
\tag{4}
$$
衣服上的混合权重是通过最近的身体上的点进行初始化，然后在训练的时候进行优化。$\Delta p$ 是通过 MLP $f_{part}$ 预测出来的非刚性变换

#### Appearance

最初的 3DGS 使用球谐函数来表示颜色，这在静态场景中效果很好。但是，它需要依赖于姿态的颜色来模拟服装的自阴影和褶皱。因此，使用颜色 MLP 根据每个高斯特征向量、视角方向和身体姿态参数来预测颜色，其中每个 3D 高斯的颜色是通过以下方式计算的：
$$
\mathbf{c}_\mathbf{i}=f_{\mathrm{color}}(f_i,\boldsymbol{\theta},h_t,d')
\tag{5}
$$

- $f_i$ 表示高斯的特征
- $\boldsymbol{\theta}$ 表示 SMPL 中的姿态参数
- $h_t$ 表示每个视频帧 $t$ 的 latent embedding，是为了对时变因子进行编码

$d'$ 是对视角方向进行 canonicalize：
$$
d'=R_i^Td
\tag{6}
$$

- $R_i$ 表示第 $i$ 个高斯的旋转矩阵

> 对视角方向进行 canonicalize 到底有没有用存疑

### Training

通过优化 $V^{body}$，$V^{clothing}$ (这两个是 $M^{body},M^{clothing}$ 的顶点)，3DGS 的属性，非刚性变换 MLPs 和 pose-dependent color MLP。同时还会优化 SMPL-X 的参数以及 $V^{clothing}$ 的混合权重。总的损失函数为：
$$
L=L_{color}+L_{mask}+L_{seg}+L_{opac}+L_{geo}
\tag{7}
$$
外观损失 $L_{color}$ 来确保渲染质量：
$$
L_{color}=L_{mse}+\lambda_{ssim}L_{ssim}+\lambda_{lpips}L_{lpips}
\tag{8}
$$
mask 损失 $L_{mask}$ 是渲染 mask 和 GT 之间的 $L_2$ 损失。

分割损失 $L_{seg}$ 确保人体和衣服上的高斯点云锚定在各自的 mesh 上：
$$
L_{seg}=\lambda{seg}BCE(\hat{\mathcal{L}},\mathcal{L}),\quad\hat{\mathcal{L}}=\sum_i\left (\alpha'_i\prod^{i-1}_{j=1}(1-\alpha'_j) \right )l_i
$$

- $l_i=1$ 表示高斯点云在 $M^{clothing}$ 否则 $l_i=0$ 
- $\mathcal{L}$ 表示分割结果的 GT，是通过预训练进行预测

不透明度损失 $L_{opac}$ 约束高斯点云的不透明度要么为 1 要么为 0:
$$
L_{opac}=\lambda_{opac}\frac{1}{N}\sum^N_{i=1}(\ln(o_i)+\ln(1-o_i))
\tag{9}
$$

- $o_i$ 表示第 $i$ 个高斯点云的不透明度

几何损失 $L_{geo}$ 确保模板 mesh 是光滑和规则的，并且 $M^{clothing}$ 是在 $M^{body}$ 外面：
$$
L_{geo}=L_{laplacian}+L_{normal}+L_{collision}+L_{distance}
\tag{10}
$$
$L_{laplacian}$ 是 Laplacian 损失，$L_{normal}$ 是法向量一致性损失，用来约束几何的平滑度，$L_{collision}$ 确保 $M^{clothing}$ 在 $M^{body}$ 的外法线方向上：
$$
L_{collision}=\lambda_{collison}\frac{1}{n}\sum^n_{i=1}\max(\epsilon-(v_i-v_j)\cdot n_j,0)^3
\tag{11}
$$

- $v_i$ 表示衣服上的第 $i$ 个顶点
- $v_j$ 表示与 $v_i$ 最近的身体上的顶点
- $n_j$ 是 $v_j$ 的法向量

$L_{distance}$ 防止身体的 mesh 过于原来初始的 SMPL-X 的 mesh。

### Physics-based Driving

这部分直接用的 [HOOD](../animation/HOOD.html)。
$$
\mathbf{m}_V\left(\alpha_1, \alpha_2, \alpha_3\right)=\alpha_1 \mathbf{v}_1+\alpha_2 \mathbf{v}_2+\alpha_3 \mathbf{v}_3
$$

- $\mathbf{m}_V$ 表示高斯的均值，即高斯核的位置
- $\mathbf{v}_1$，$\mathbf{v}_2$，$\mathbf{v}_3$ 表示 mesh face 的三个顶点

- $\alpha_1$，$\alpha_2$，$\alpha_3$ 是可训练的参数

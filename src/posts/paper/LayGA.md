---
date: 2024-06-26
category: 论文
tag:
  - Paper
  - Avatar
  - LayGA
  - 3DGS
title: LayGA-论文笔记
order: 18
---

## LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer

[项目地址](https://jsnln.github.io/layga/)

SIGGRAPH 2024

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261135825.png)

## Abstract

可动画服装转移，旨在不角色间转移服装并对服装进行动画，是一个具有挑战性的问题。大多数数字人工作将人体和服装的表示统一在一起，这导致在不同身份之间的虚拟试衣变得困难。更糟的是，统一的表示通常无法准确跟踪服装的滑动。为了解决这些限制，本文提出了**分层高斯数字人 (Layered Gaussian Avatars, LayGA)**，这是一种新的表示方法，将身体和服装分为两个独立的层，用于从多视角视频中实现逼真的可动画服装转移。本文的表示方法基于高斯图数字人，因为它在服装细节的表示能力上非常出色。然而，高斯图会在实际表面周围产生非结构化的 3D 高斯分布。缺乏平滑的显式表面在准确的服装跟踪和处理身体与服装之间的碰撞时带来了挑战。因此，本文提出了两阶段训练方法，包括单层重建和多层拟合。在单层重建阶段，本文提出了一系列几何约束来重建平滑表面，同时获得身体和服装之间的分割。接下来，在多层拟合阶段，本文训练两个独立的模型来表示身体和服装，并利用重建的服装几何形状作为三维监督，以实现更准确的服装跟踪。此外，本文提出了几何和渲染层，用于高质量的几何重建和高保真渲染。总体而言，LayGA 实现了逼真的动画和虚拟试穿，并优于其他 baseline 方法。

## Introduction

本文将身体和服装分为两个独立的层，但是直接学习两组高斯来分别表示身体和衣服是不可行的。因为 3DGS 通常在表面上分布不均匀，无法为区分出人体和衣服，而这对于服装适应不同体型和处理衣服和人体的碰撞是很重要的。因此本文提出了两阶段训练方法，包括单层重建和多层拟合。在单层重建阶段，提出了一系列的几何约束来强制 3D 高斯生成在平滑的表面上。最后还提出额外的渲染层来保证平滑重建的同时实现高保真的渲染，因为通过几何约束获得的平滑表面可能会限制渲染的质量。

本文的创新点：

- 提出了分层高斯数字人 (LayGA)，这是首个基于 3DGS 的分层数字人表示法，用于可动画的服装转移。
- 在 3D 高斯上引入了几何约束，以实现平滑的表面重建，并支持在分层表示中处理人体与服装之间的碰撞。
- 在多层学习中，引入了先前的衣服的分割作为监督，以便更准确地跟踪服装边界。此外，还引入了一个渲染层，以缓解几何限制带来的渲染质量下降问题

## Method

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406271623207.png)

### Clothing-aware Avatar Representation

![Fig. 3: Illustration of the clothing-aware avatar representation](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406271659738.png)

这篇文章是基于 [Animatable Gaussians](Animatable-Gaussians.html) 做的，通过预测二维的 pose 相关高斯图来创建高保真的数字人。本文的服装感知数字人表示 (图 3) 就是在其 pose 相关高斯图上对做了针对性修改。

先学习 position map，然后再用 StyleUNet 学习 Gaussian map 的过程和 [Animatable Gaussians](Animatable-Gaussians.thml) 是一样的，这篇文章的创新是除了高斯的基本参数外，额外多学习一个 label 用来区分这个高斯是属于身体还是衣服。

本文的高斯参数为：

- $c_i\in\R^3$ 表示颜色
- $\Delta\bar{x}_i\in\R^3$ 表示参数化模板上的点的位移量
- $o_i\in\R$ 不透明度
- $\bar{s}_i\in\R^3$ 表示缩放向量
- $\bar{q}_i\in\R^4$ 表示选择四元数
- $p_i^{cloth}$ 和 $p_i^{body}$ 分别表示高斯属于衣服或者身体的概率

最终 3D 高斯的均值和协方差为：
$$
\bar{x}_i=\bar{x}_i^{smpl}+\Delta\bar{x}_i
\tag{1}
$$

- $\bar{x}_i^{smpl}$ 表示像素 $i$ 所对应的参数化模板上的点

$$
x_i=R_i(\theta)\bar{x}_i+t_i(\theta)
\tag{2}
$$

$$
\Sigma_i=R_i(\theta)\bar{\Sigma}_iR_i(\theta)^T
\tag{3}
$$

- $R(\theta)$ 和 $t(\theta)$ 表示通过 pose 参数 $\theta$ 求出来的 LBS 变换矩阵
- $\bar{\Sigma}_i$ 表示通过 $\bar{s}_i$ 和 $\bar{q}_i$ 算出来的标准空间下的协方差矩阵

### Single-Layer Modeling with Geometric Constraints

在单层重建阶段，目标是训练一个模型，生成平滑分布在人体实际几何表面上的 3D 高斯，并同时获得人体和衣服之间的分割。

#### Geometric Constraints for Reconstruction

本文希望重建的穿衣人体表面是连续、平滑的，具有服装细节和清晰的服装边界。本文是通过2D 高斯图上均匀分布的像素映射为 3D 高斯 ，因此可以方便地使用每个像素的邻域来约束底层几何。具体来说，本文通过一些几何约束来正则化并提高细节。

## Reference

[[1]LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer](https://arxiv.org/pdf/2405.07319)
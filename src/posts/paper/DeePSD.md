---
date: 2024-03-06
category: 论文
tag:
  - Paper
  - DeePSD
  - Cloth Simulation
title: DeePSD-论文笔记
order: 6
---

## DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation

[项目地址](https://hbertiche.github.io/DeePSD/)

ICCV 2021

## Abstract

我们提出了一种通过深度学习解决服装动画问题的新方案。我们的研究成果可以为任意拓扑结构和几何复杂度的模板服装制作动画。近期的研究通过支撑人体模型 (support body model, 将服装编码为人体的拓扑的一部分)，实现了服装编辑、尺寸调整和动画。这个复杂的工程解决方案在可扩展性、适用性和兼容性方面受到影响。通过将范围限制在服装动画上，我们能够提出一个简单的模型，该模型可以为任何服装制作动画，不受其拓扑结构、顶点顺序或连接性的影响。我们提出的架构将服装动画三维模型映射为三维动画的标准格式 (混合权重和混合形状矩阵)，兼容所有图形引擎。我们还提出了一种方法，利用基于物理的无监督学习来补充监督学习，从而隐式地解决碰撞问题并提高布料质量。

## Introduction

虚拟着装人体动画传统的两种方法：

- **基于物理的模拟 (Physically Based Simulation, PBS)**
- **线性混合蒙皮 (Linear Blend Skinning, LBS)** 和**姿态空间变形(Pose Space Deformation, PSD)**

PBS 能够以巨大的计算成本为代价获得高度真实的布料动力学，LBS 和 PSD 则适用于计算资源有限或对实时性能有需求的项目。

基于深度学习的方法：

- 非线形 PSD 模型，缺乏泛化能力。
- 将服装类型编码为身体的一部分，能够模拟多种服装，但是服装的动画效果局限于人体，对于一些宽松的服装或者裙子，动画效果不好。

本文提出学习从模板服装空间到动画 3D 模型的空间的映射，具有很强的泛化能力，对于没有训练过的具有任意拓扑和顶点连接的服装，也有很好的效果。同时本文可以模拟整套服装 (而不是单件服装) 、多层不同分辨率的服装和具有服装几何细节的服装。并且只使用了一个简单且小型的神经网络。本文贡献如下：

- 服装泛化性：对于没见过的服装，也可以进行动画模拟
- 兼容性：本文是预测混合权重和混合形状矩阵，兼容所有的图形引擎；
- 物理一致性：本文提出训练独立的模型分支，以便物理一致性损失和监督损失不会阻碍对方，这可以在尽可能利用数据的情况下，达到准无碰撞和布料一致的推理结果。
- 可解释性

## Methodology

给定一个动作序列中穿着在 SMPL 人体上的服装的 PBS 数据，定义 $\mathcal{S}=\{X,Y\},其中X=\{\mathbf{T},\mathbf{F},\theta,\beta,g\},Y=\{\mathbf{V}_{PBS}\}$

- $\mathbf{T}$ 表示标准空间下模板服装的顶点
- $\mathbf{F}$ 表示服装的 mesh
- $\theta$ 表示姿态参数
- $\beta$ 表示体格参数
- $g$ 表示性别
- $\mathbf{V}_{PBS}$ 表示动画模拟后的服装顶点的位置

最终目的是训练一个网络 $\mathcal{M}$，该网络可以学习标准空间的服装模板映射到姿态空间时相应的混合权重和混合形状矩阵：
$$
\begin{equation}
\mathcal{M}:\{\mathbf{T},\mathbf{F}\}\rarr\{\mathbf{W},\mathbf{D}_{PSD}\}
\tag{1}
\end{equation}
$$

- $\mathbf{T}$ 表示标准空间下模板服装的顶点
- $\mathbf{F}$ 表示服装的 mesh
- $\mathbf{W}$ 表示混合权重
- $\mathbf{D}_{PSD}$ 表示混合形状矩阵，其实就是 SMPL 中的表示姿态的 PCA 基矩阵 $\mathcal{P}$

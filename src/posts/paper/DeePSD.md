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

给定一个动作序列中穿着在 SMPL 人体上的服装的 PBS 数据，定义 
$$
\mathcal{S}=\{X,Y\},\mathrm{where}\ X=\{\mathbf{T},\mathbf{F},\theta,\beta,g\},Y=\{\mathbf{V}_{PBS}\}
\tag{1}
$$

- $\mathbf{T}$ 表示标准空间下模板服装的顶点
- $\mathbf{F}$ 表示服装的 mesh
- $\theta$ 表示姿态参数
- $\beta$ 表示体格参数
- $g$ 表示性别
- $\mathbf{V}_{PBS}$ 表示动画模拟后的服装顶点的位置

最终目的是训练一个网络 $\mathcal{M}$，该网络可以学习标准空间的服装模板映射到姿态空间时相应的混合权重和混合形状矩阵：
$$
\mathcal{M}:\{\mathbf{T},\mathbf{F}\}\rarr\{\mathbf{W},\mathbf{D}_{PSD}\}
\tag{2}
$$

- $\mathbf{T}$ 表示标准空间下模板服装的顶点
- $\mathbf{F}$ 表示服装的 mesh
- $\mathbf{W}$ 表示混合权重
- $\mathbf{D}_{PSD}$ 表示混合形状矩阵，个人理解就类似 SMPL 中的表示姿态的 PCA 基矩阵 $\mathcal{P}$，用来控制服装的变形

### PBS 数据和物理一致性 (PBS Data and Physical Consistency)

从姿态空间到服装空间的映射是一个多值函数，不同的物理引擎、初始条件、动作速度、时间步长和积分器等会对相同 shape 和 pose 下的相同服装产生不同的模拟结果。所以用 PBS 数据训练是错误地把它映射为一个单值函数。如果样本有着相似的 $X$ 但是显著不同的 $Y$​，那么会影响网络的性能，最终导致网络收敛到平均顶点位置。

将服装表示为身体顶点的子集无法对服装的边 (这里的边是指服装连接顶点的线段) 施加约束，会导致边异常的拉伸或压缩。本文解决了服装模拟独立于服装编辑的问题，可以利用原始的服装模板来对边进行约束。

### 架构 (Architecture)

架构需要满足：

- 处理非结构化 mesh (无固定顶点顺序或连接性)
- 计算非线性变形 (布料的变形是高度非线性的)

定义了以下几个组件：

- $\Phi: \R^{N\times3}\to\R^{N\times F}$ 用模板服装 mesh 的全局和局部信息来计算每个顶点的 **F 维描述符 (descriptors, F = 512)**
- $\Omega:\R^{N\times F}\to\R^{N\times K}$ 用描述符来计算每个顶点的混合权重
- $\Psi:\R^{N\times F}\to\R^{P\times N \times3}$ 有监督地生成一个混合形状矩阵
- $\chi:\R^{N\times F}\to\R^{P\times N\times3}$ 无监督地生成一个混合形状矩阵
- $P$​ 表示控制服装变形的 PCA 基 (就是下文中的 embedding)

本文将 $\theta$ 传入 MLP 获得一个 pose 的 embedding $\Theta\in\R^{P}$，这样可以

- 控制 $P$​ 的维度，进而控制混合形状矩阵的大小
- 对姿态空间到服装空间的映射进行非线形建模

![Fig. 1: 模型架构](http://img.rocyan.cn/blog/2024/04/6612bc7330601.png)

输入衣服顶点，首先通过卷积神经网络获得局部描述符；局部描述符先由全连接层处理，再通过最大池化层 (每套服装对应一个池化层) 进行聚合得到全局描述符；描述符通过三个 MLP 分别得到混合权重和混合形状矩阵。

### Training

$$
\mathcal{L}_{data}=\sum||\mathbf{V}_{\theta,data}-\mathbf{V}_{PBS}||^2
\tag{3}
$$

这个 Loss 很简单，就是让网络预测出来的顶点位置和物理模拟出来的顶点位置越接近越好，这部分是有监督的。


$$
\mathcal{L}_{cloth}=\mathcal{L}_E+\lambda_B\mathcal{L}_B=\sum_{e\in E}||e-e_\mathbf{T}||^2+\lambda_B\Delta (\mathbf{n})^2
\tag{4}
$$

- $L_E$ 表示边的损失，防止边过度的拉伸或压缩
- $\mathcal{L}_B$ 表示弯曲损失，通过约束相邻顶点之间的法线，控制局部表面平滑
- $E$ 表示边的集合
- $e$ 表示预测出来的边的长度
- $e_{\mathbf{T}}$ 表示模板上的边的长度
- $\Delta(\mathbf{n})$​​ 表示应用于预测出来的服装顶点法线的 Laplace-Beltrami 算子

这个 Loss 用来约束边和控制局部表面平滑，参考了弹簧置点模型。


$$
\mathcal{L}_{collision}=\sum_{(i,j)\in A}min(\mathbf{d}_{j,i}\cdot\mathbf{n}_j-\epsilon,0)^2
\tag{5}
$$

- A 表示预测的服装上的点和其最接近的人体上的点的对应关系 $(i,j)$ 集
- $\mathbf{d}_{i,j}$ 表示人体第 $j$ 个顶点到服装第 $i$ 个顶点的向量
- $\mathbf{n}_j$ 是人体第 $j$ 个顶点的法向量
- $\epsilon$ 是用来提高鲁棒性的小的正阈值，本文设置为 5 mm

这个 Loss 假定服装是紧贴皮肤的，并对穿透进皮肤的服装进行惩罚。


$$
\mathcal{L}_{phys}=\mathcal{L}_{cloth}+\lambda_{collision}\mathcal{L}_{collision}
\tag{6}
$$
最终的无监督损失定义为公式 (6)。

## Reference

[DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation](https://openaccess.thecvf.com/content/ICCV2021/html/Bertiche_DeePSD_Automatic_Deep_Skinning_and_Pose_Space_Deformation_for_3D_ICCV_2021_paper.html)

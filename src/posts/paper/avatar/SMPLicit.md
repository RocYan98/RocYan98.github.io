---
date: 2024-03-24
category: 论文
tag:
  - Paper
  - Avatar
  - Reconstructing
  - SMPLicit
  - Mesh
title: SMPLicit-论文笔记
order: 3
---

## SMPLicit: Topology-aware Generative Model for Clothed People

[项目地址](http://www.iri.upc.edu/people/ecorona/smplicit/)

CVPR 2021

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261145405.png)

## Abstract

在本文中，我们介绍了 SMPLicit，这是一可以联合表示身体姿势、形状和服装几何形状的模型。现有的基于学习的方法需要为每种类型的服装训练特定的模型，相比之下，SMPLicit 能以统一的方式表示不同的服装拓扑结构 (如无袖上衣、连帽衫和开襟夹克)，同时控制其他属性，如服装尺寸或松紧度。我们展示了我们的模型适用于各种服装，包括 T 恤、连帽衫、夹克、短裤、裤子、裙子、鞋子甚至头发。SMPLicit 的表示灵活性建立在一个以 SMPL 人体参数为条件的隐式模型和一个可学习的潜在空间之上，该潜在空间在语义上可解释并与服装属性相一致。所提出的模型是完全可微分的，因此可用于更大的端到端可训练系统。在实验部分，我们展示了 SMPLicit 可用于 3D 扫描拟合和着装者图像的三维重建。在这两种情况下，我们在复杂的服装几何图形、处理多层服装的情况以及提供方便的服装编辑工具等方面都超越现有技术水平。

## Introduction

本文的个贡献：

- 一个能够表现不同拓扑结构服装的生成模型；
- 一个用于控制服装款式和剪裁的低维、语义可解释的潜在向量；
- 一个可根据人体姿势、形状和服装款式/剪裁进行调节的模型；
-  一个易于与深度学习集成的完全可微分模型；
-  一种可应用于 3D 扫描拟合和图像的 3D 重建方法；
-  一种可生成可编辑表面的 3D 重建算法；

## Method

对于给定的点先训练一个 UDF，然后通过 Marching Cubes 算法从 UDF 中提取 mesh，整体的公式如下：
$$
C(\theta,\beta,\mathbf{z}_{cut},\mathbf{z}_{style})\mapsto\mathcal{G}
\tag{1}
$$

- $\theta$ 和 $\beta$ 就是 SMPL 里的参数
- $\mathbf{z}_{cut}$ 和 $\mathbf{z}_{style}$ 分别表示控制服装的剪裁 (如长款和短款) 和款式 (如连帽衫和非连帽衫) 的 latent code
- $\mathcal{G}$​ 表示对应 pose 下衣服的 mesh 

### SMPLicit-Core Formulation

![Fig. 2](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261145748.png)

本文用 2 个参数 $\mathbf{z}=[\mathbf{z}_{cut},\mathbf{z}_{style}]\in\R^{N}$ 分别来控制服装的剪裁和款式，用身体形状来控制服装的合身程度。

**服装剪裁 (Clothing cut)**：本文将服装裁剪定义为被服装遮挡的身体区域 (本质还是把服装当成身体的一部分)
$$
f:\mathbf{U}\mapsto\mathbf{z}_{cut}\in\R^D
\tag{2}
$$

- $f$ 表示图像编码器
- $\mathbf{U}$​ 表示身体的 UV 图中衣服的部分 (Fig. 1中绿色的部分)

通过一个图像编码器将衣服映射成 latent code。



**服装款式 (Clothing style)**：不同的衣服可能遮挡的区域是相同的 (松紧程度、低频的褶皱或领口细节等)，因此增加一个 $\mathbf{z}_{style}$。首先初始化一个零向量，然后通过 auto-decoder 进行训练。



**Body shape**：将服装顶点相对于人体顶点进行编码。

- 对于训练集中的每类衣服，根据 SMPL 网格顶点距离衣服网格的接近程度，获得均匀分布于 T-pose 下人体表面的 $K$ 个顶点聚类 $\mathbf{v}_k\in\R^3$
- 然后将空间中的 3D 点 $\mathbf{p}\in\R^3$ 映射到一个编码矩阵 $\mathbf{P}_\beta\in\R^{K\times3}$，该矩阵每一行存储着相对于每一类顶点的偏移 $\mathbf{P}_{\beta,k}=(\mathbf{p}-\mathbf{v}_k)$

这种过度参数化的表达使得网络能够推理人体的边界，作者经验性的发现其相比欧几里得距离和重心坐标距离具有更好的表现。



**Output representation**：因为服装是开曲面，因此选择 UDF 来表示服装。给定空间中一点 $\mathbf{p}$、其位置编码 $\mathbf{P}_\beta$ 和服装参数 $\mathbf{z}$，作者训练了一个解码器网络 $C(\mathbf{P}_\beta,\mathbf{z})\mapsto\R^+$ 来预测真实衣服表面的无符号距离场 $D(\mathbf{p})$。

### SMPLicit-core Training

在训练时，作者在人体的 3D 包围盒中和真实衣服表面附近均匀采样，对于一个训练样例和一个采样点 $\mathbf{p}$​，损失函数如下：
$$
\mathcal{L}_d=|C(\mathbf{P}_\beta,f(\mathbf{U};\mathbf{w}_1),\mathbf{z}_{style};\mathbf{w}_2)-D(\mathbf{p})|
\tag{3}
$$

- $\mathbf{w}_1$ 是服装裁剪图像编码器 $f(\mathbf{U};\mathbf{w}_1)$ 的网络权重

- $\mathbf{w}_2$ 是解码器 $C(\cdot;\mathbf{w}_2)$ 的网络权重。 

由于上衣、裤子、裙子、鞋子、头发是相对独立的，互相之间的插值也是没有意义的，作者针对这些类别分别训练了一个模型。

为了能够平滑地插值并生成新服装，本文使用损失函数 $\mathcal{L}_z=|\mathbf{z}|$ 来约束潜空间 $\mathbf{z}=[\mathbf{z}_{cut},\mathbf{z}_{style}]$​ 使其服从正态分布。

在训练过程中，网络前向推理之前在服装表达中增加均值为零、协方差为单位阵的高斯噪声 $\mathbf{z}_{\sigma}\sim\mathcal{N}(\mathbf{0},\sigma_n\mathbf{I})$，将 $C(\mathbf{P}_\beta,\mathbf{z}+\mathbf{z}_\sigma)$ 作为输入，这对于数据较少的服装类型非常有用。

### SMPLicit-core Inference

要生成适合人体形状 $\beta$ 的服装，需要进行以下三步：

- 采样 $\mathbf{z}\sim\mathcal{N}(\mu*\mathbf{1},\sigma*\mathbf{I})$，其均值 $\mu$ 和方差 $\sigma$ 来自训练集的隐空间
- 估计 T-pose 下人体附近点的位置编码 $\mathbf{P}_\beta$，然后预测 UDF 值 $C(\mathbf{P}_\beta,\mathbf{z})$​
- 使用 Marching Cubes 算法以阈值 $t_d$ 提取距离场的等值面，本文 $t_d=0.1mm$，因此本文提取的服装是有厚度的。

### Pose Dependent Deformation

后续关于 pose 的变形也不是本文的重点，先不看。

## Reference

[[1]SMPLicit: Topology-aware Generative Model for Clothed People](http://www.iri.upc.edu/people/ecorona/smplicit/paper.pdf)

[[2]CVPR 2021 | SMPL人体模型有了，是不是还缺个衣服模型？SMPLicit来了](https://zhuanlan.zhihu.com/p/362132005)

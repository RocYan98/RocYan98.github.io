---
date: 2024-05-29
category: 论文
tag:
  - Paper
  - Segmentation
  - SAGA
  - 3DGS
title: SAGA-论文笔记
order: 16
---

## Segment Any 3D Gaussians

[项目地址](https://jumpat.github.io/SAGA/)

arXiv preprint arXiv:2312.00860

![Fig. 1: Overview](http://img.rocyan.cn/blog/2024/05/6656a577bde4d.png =x500)

## Abstract

在辐射场中进行交互式 3D 分割是一项很有吸引力的任务，因为它对 3D 场景的理解和操作非常重要。然而，现有的方法在实现细粒度、多粒度分割方面面临着挑战，或者要与巨大的计算开销作斗争，从而阻碍了实时交互。本文介绍了 Segment Any 3D GAussians (SAGA)，这是一种新颖的 3D 交互式分割方法，它将 2D 分割基础模型与 3DGS 无缝融合在一起。SAGA 通过精心设计的对比训练，将由分割基础模型生成的多粒度 2D 分割结果有效地嵌入到 3D 高斯点特征中。对现有 benchmarks 的评估表明，SAGA 的性能可与最先进的方法相媲美。此外，SAGA 还能实现多粒度分割，并适应各种提示，包括点、涂鸦和 2D mask。值得注意的是，SAGA 可以在几毫秒内完成 3D 分割，与之前的 SOTA 相比，实现了近 1000 倍的加速。

## Method

![Fig. 2: Pipeline](http://img.rocyan.cn/blog/2024/05/6656d9a34ae97.png)

### Preliminary

**3D Gaussian Splatting (3DGS)**：这部分直接跳过。

**Segment Anything Model (SAM)**：输入图片 $\mathbf{I}$ 和一组提示 $\mathcal{P}$，输出对应 2D 分割 mask $\mathbf{M}$：
$$
\mathbf{M}=\mathrm{SAM}(\mathbf{I},\mathcal{P})
\tag{1}
$$

### Overall Pipeline

如图 2 所示，给定一个预训练 3DGS 模型 $\mathcal{G}$ 和其训练集 $\mathcal{I}$，首先用 SAM encoder 对训练集 $\mathcal{I}$ 中的每张图片 $\mathbf{I}\in\R^{H\times W}$ 提取 2D 特征图 $\mathbf{F}_{\mathbf{I}}^{\mathrm{SAM}}\in\R^{C^{\mathrm{SAM}}\times H\times W}$ 和一组多粒度 mask $\mathcal{M}^{\mathrm{SAM}}_{\mathbf{I}}$。然后对 $\mathcal{G}$ 中的每个高斯核 $\mathbf{g}$ 基于提取出来的 mask 训练一个低维特征 $\mathbf{f}_{\mathbf{g}}\in\R^{C}$ 来聚合这些多粒度的分割信息 ($C$ 表示特征的维度，默认为 32)。

在推理的阶段，对于一个特定视角，有相机位姿 $v$ 和基于输入的提示 $\mathcal{P}$ 生成的一组查询 $\mathcal{Q}$。通过与所学特征的高效特征匹配，利用这些查询来检索对应的 3D 高斯。此外，还引入了一种高效的后处理操作，利用 3DGS 的点云结构提供的强大 3D 先验来完善检索到的 3D 高斯。



## Reference

[[1]Segment Any 3D Gaussians](https://arxiv.org/abs/2312.00860)
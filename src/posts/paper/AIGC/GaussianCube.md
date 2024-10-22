---
date: 2024-10-21
category: 论文
tag:
  - Paper
  - AIGC
  - GaussianCube
  - 3DGS
title: GaussianCube-论文笔记
order: 3
---

## GaussianCube: A Structured and Explicit Radiance Representation for 3D Gener

[项目地址](https://gaussiancube.github.io)

arXiv

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202410211702844.png)

## Abstract

我们引入了一种既结构化又完全显式的辐射表示法，从而极大地促进了 3D 生成模型。现有的辐射表示要么需要隐式特征解码器，降低了表示的建模能力；要么在空间上是非结构化的，因此很难与主流的 3D 扩散方法集成。我们的 GaussianCube 使用一种新颖的密度约束高斯拟合算法，该算法使用固定数量的自由高斯函数实现高精度拟合，然后通过 Optimal Transport 将这些高斯重新排列到预定义的体素网格中。由于 GaussianCube 是一种结构化网格表示法，因此我们可以使用标准 3D U-Net 作为扩散模型的 backbone。更重要的是，高斯函数的高精度拟合使我们能够以比以往的结构化表示少一个到两个数量级的参数，实现高质量的表示。GaussianCube 的紧凑性大大降低了 3D 生成模型的难度。我们在无条件和类条件物体生成、数字人创建和 text-to-3D 合成方面进行了广泛实验，结果表明，我们的模型在质量和量化指标上都取得了 SOTA 的生成结果，突显了 GaussianCube 作为一种高度精确且多功能的辐射表示在 3D 生成模型中的潜力。

## Intruduction

大多数现有 3D 生成模型使用 NeRF 的变体作为 3D 表示，其通常结合显式的结构化代理表示和隐式特征解码器。然而，这些混合 NeRF 变体在生成模型中表现出较弱的表示能力，尤其是在所有对象共享一个隐式解码器时。此外，体渲染的高计算复杂性导致渲染速度慢且内存消耗大。

GaussianCube 是一种结构化且显式的辐射表示法，具备强大的拟合能力。该方法首先通过高斯拟合确保高精度，然后使用 Optimal Transport 将高斯分布在结构化的体素网格中。这种结构化的显式表示允许使用标准的 3D 卷积架构 (如U-Net) 进行扩散建模，避免了复杂的网络设计。GaussianCube 不仅保留了高斯拟合的精度，还减少了模型参数量级，大大降低了生成建模的难度，同时提高了性能。

## Method

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202410211751931.png)

整个 Pipeline 可以分为两个阶段，模型重建和扩散模型。在第一阶段，重建出高斯核数量有限制的高斯模型；第二阶段用 Optimal Transport 将重建出了模型分布在结构化的体素网格中，这个体素网格就是 GaussianCube。

### Representation Construction




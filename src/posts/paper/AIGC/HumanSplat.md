---
date: 2024-10-25
category: 论文
tag:
  - Paper
  - AIGC
  - GaussianCube
  - 3DGS
title: HumanSplat-论文笔记
order: 2
---

## HumanSplat: Generalizable Single-Image Human Gaussian Splatting with Structure Priors

[项目地址](https://humansplat.github.io)

NeurlPS 2024

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202410251455125.png)

## Abstract

尽管高保真人体重建技术取得了最新进展，但通常需要大量的输入图像或优化时间，这极大地阻碍了它们在更广泛的场景中的应用。为了解决这些问题，我们提出了 HumanSplat，它以生成的方式从单个输入图像预测任何人的 3DGS 属性。具体来说，HumanSplat 包括一个 2D 多视角扩散模型和一个具有人体结构先验的潜在重建 Transformer，能够巧妙地将几何先验和语义特征整合在统一框架中。此外，我们设计了一个分层损失，结合了人体语义信息，以实现高保真的纹理建模，并更好地约束估计的多视角。标准 benchmarks 和真实场景图像上的综合实验表明，HumanSplat 在实现逼真的新视角合成方面超越了现有的 SOTA。

## Introduction

本文的主要贡献：

- 我们提出了一种新颖的可通用人体 GS 网络，用于从单张图像进行高保真人体重建
- 我们通过利用来自 SMPL 模型的人体几何先验和来自 2D 生成扩散模型的人体外观先验，将结构和外观信息整合到一个通用的Transformer框架中。几何先验有助于稳定生成高质量的人体几何结构，而外观先验则有助于推测穿衣人体的未见部分。
- 我们通过引入语义提示、分层监督和定制的损失函数，提升了重建人体模型的保真度。

## Method


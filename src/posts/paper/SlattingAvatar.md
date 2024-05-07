---
date: 2024-05-01
category: 论文
tag:
  - Paper
  - Avatar
  - SplattingAvatar
  - 3DGS
title: SplattingAvatar-论文笔记
order: 12
---

## SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting

[项目地址](https://initialneil.github.io/SplattingAvatar)

CVPR 2024

## Abstract

我们展示了 SplattingAvatar，这是一种在三角形网格上嵌入 3DGS 的逼真数字人的混合 3D 表现形式，在现代 GPU 上的渲染速度超过 300 FPS，在移动设备上的渲染速度为 30 FPS。我们通过显式网格和隐式高斯进行拼接建模，将数字人的运动和外观分离开来。高斯由三角形网格上的重心坐标和位移定义为 Phong Surface。我们通过改进 Lifted Optimiaztion 方法，在遍历三角形网格的同时优化高斯参数。SplattingAvatar 是数字人的混合表现形式，其中网格代表低频运动和表面变形，而高斯则代表高频几何和细节外观。现有的变形方法依赖于基于 MLP 的线性混合蒙皮 (LBS) 来表示运动，与之不同的是，我们直接通过网格来控制高斯的旋转和平移，这就增强了它与各种动画技术 (如骨骼动画、混合形状和网格编辑) 的兼容性。SplattingAvatar 可通过单目视频对全身和头部进行训练，在多个数据集上显示出一流的渲染质量。

![Fig. 1: Overview](http://img.rocyan.cn/blog/2024/05/6638529ae6e2f.png)

## Introduction

本文提出用可训练的 mesh 的 embeddings 来显示控制高斯，将 mesh 表示为 Phong surface [[2]][ref2]，

本文的主要贡献：

- 本文介绍了一种将 3DGS 与 mesh 整合在一起的框架，它提供了一种新的数字人表现形式，既逼真又能提高计算效率。
- 本文使用 lifted optimization 来优化数字人模型，允许对高斯参数和 mesh embeddings 进行联合优化，以实现精确的重建。
- 本文通过综合评估和 Unity，展示了实时渲染的能力和创建各种数字人的泛化性。

## Reference:

[[1]SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting](https://arxiv.org/abs/2403.05087)

[ref2]: 2ThePhongSurface:Efficient3DModelFittingusingLiftedOptimization(https://arxiv.org/pdf/2007.04940)
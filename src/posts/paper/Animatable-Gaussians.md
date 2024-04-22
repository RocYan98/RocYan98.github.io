---
date: 2024-04-22
category: 论文
tag:
  - Paper
  - 3DGS
  - Avatar
title: Animatable-Gaussians-论文笔记
order: 10
---

## Animatable Gaussians: Learning Pose-dependent Gaussian Maps  for High-fidelity Human Avatar Modeling

[项目地址](https://animatable-gaussians.github.io)

CVPR 2024

## Abstract

从 RGB 视频中建立可动画化的数字人模型是一个长期存在且极具挑战性的问题。最近的研究通常采用基于 MLP 的神经辐射场（NeRF）来表示三维人体，但纯 MLP 仍然难以回归与姿势相关的服装细节。为此，我们引入了动画高斯，这是一种新的数字人表示方法，它利用强大的 2D CNN 和 3DGS 来创建高保真数字人。为了将 3DGS 与可动画化的数字人联系起来，我们从输入视频中学习参数模板，然后将模板参数化为正面和反面的标准空间的高斯映射，其中每个像素代表一个高斯核。学习到的模板对穿着的服装具有自适应性，可用于制作连衣裙等宽松服装的模型。这种以模板为导向的二维参数化使我们能够采用功能强大的基于 StyleGAN 的 CNN 来学习与姿势相关的高斯映射，从而为详细的动态外观建模。此外，我们还引入了一种姿势投影策略，以更好地泛化新姿势。总之，我们的方法可以创建具有动态、逼真和泛化外观的逼真数字人。实验表明，我们的方法优于其他最先进的方法。

## Introduction

本文的贡献：

- 一种新的数字人表示法，它在数字人建模中引入了显示的 3DGS 技术，利用功能强大的 2D CNN 创建具有高保真姿态动态特性的逼真数字人。
- 模板指导参数化，可为一般服装（如连衣裙）学习特定特诊模板，并将 3DGS 参数化为正反高斯图，以便与二维网络兼容。
- 一种简单而有效的姿态投影策略，在驱动信号上使用 PCA，对新姿态具有更好的泛化能力。

## Method

![Pipeline](http://img.rocyan.cn/blog/2024/04/6625d63e87204.png)

### Overview

输入为 RGB 视频，以及每一帧的 SMPL-X 的 pose 和 shape 参数。

1. **Learning Parametric Template**：从输入视频中挑选一帧接近 A-pose 的图像，然后通过 SMPL 蒙皮和基于 SDF 的体渲染来优化一个标准空间 SDF 和颜色场。通过 Marching Cubes 从标准空间 SDF 中提取模板 mesh。最后，将蒙皮权重从 SMPL 顶点扩散到模板表面，得到一个可变形参数模板。
2. **Learning Pose-dependent Gaussian Maps**：给定一个训练 pose 后，我们首先通过线性混合蒙皮（LBS）将模板变形到 pose 空间，然后将 pose 顶点坐标渲染到标准空间的正反视图上，从而得到两个位置映射。位置映射作为 pose 条件，并通过 StyleUNet 转换为正反高斯映射。然后，我们在模板 mask 内提取有效的 3DGS 映射，并通过 LBS 将标准空间 3DGS 变形到 pose 空间。最后，我们通过可微光栅化技术，将 pose 空间的 3DGS 渲染到给定的相机空间中。

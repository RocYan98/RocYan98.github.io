---
date: 2024-09-26
category: 论文
tag:
  - Paper
  - Cloth Simulation
  - Gaussian Garments
  - 3DGS
title: Gaussian Garments-论文笔记
order: 6
---

## Gaussian Garments: Reconstructing Simulation-Ready Clothing with Photorealistic Appearance from Multi-View Video

[项目地址](https://ribosome-rbx.github.io/Gaussian-Garments/)

![Overview](/Users/Yan/Library/Application Support/typora-user-images/image-20240926142158040.png)

## Abstract

我们介绍了高斯服装，这是一种从多视角视频中重建逼真的可模拟服装资产的新方法。我们的方法结合三维网格和高斯纹理来表示服装，高斯纹理同时编码了颜色和高频表面细节。这种表示方法可以从多视角视频中将服装几何图形准确地进行配准，并有助于将纹理的固有颜色与光照效果区分开来。此外，我们还演示了如何对预先训练好的图神经网络（GNN）进行微调，以复制每件服装的真实行为。重建的高斯服装可自动组合成多件服装，并通过微调后的 GNN 制作动画。

## Introduction

作者认为数字化衣服有三个关键点：衣服的 3D geometry、appearance 和 behavior/animation。本文用 3DGS 来表示这三点。

传统的多边形网格可以很好地表示服装的拓扑，但是通过可微优化直接从图片中获取网格。神经隐式表示可以对服装拓扑进行优化，但是很难对服装的动画进行仿真。因为 3DGS 是显式表示，因此可以对每个高斯基元进行单独地编辑，这样既可以优化拓扑也可以进仿真。

本文的核心是将基于网格的几何图形与基于高斯的外观建模相结合，主要贡献为：

- 利用 Gaussian splatting 技术重建真实世界服装的形状、外观和行为的综合管道
- 基于 Gaussian splatting 的优化程序，为多视角视频服装 mesh 进行配准的算法
- 是一种高斯服装表示方式，将三角形 mesh 与高斯纹理相结合，捕捉逼真的外观，可作为完全可控的 3D 资产使用。

## Method


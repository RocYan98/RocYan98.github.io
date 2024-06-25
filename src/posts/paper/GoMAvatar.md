---
date: 2024-06-25
category: 论文
tag:
  - Paper
  - Avatar
  - GoMAvatar
  - 3DGS
title: GoMAvatar-论文笔记
order: 18
---

## GoMAvatar: Efficient Animatable Human Modeling from Monocular Video Using Gaussians-on-Mesh

[项目地址](https://wenj.github.io/GoMAvatar/)

CVPR 2024

![Fig. 1: Overview](http://img.rocyan.cn/blog/2024/06/667a2bc564abb.png)


## Abstract

本文介绍 GoMAvatar，这是一种实时、内存高效、高质量的可动画人体建模新方法。GoMAvatar 将单目视频作为输入，创建一个数字人，能够以新姿势重新建模，并从新的视角进行实时渲染，同时能够无缝集成基于光栅化的图形管道。本文方法的核心是**网格高斯 (Gaussians-on-Mesh, GoM)** 表示法，这是一种混合 3D 模型，结合了 3DGS 的渲染质量和速度，以及几何建模和可变形网格的兼容性。本文在 ZJU-MoCap、PeopleSnapshot 和各种 YouTube 视频上对 GoMAvatar 进行了评估。GoMAvatar 在渲染质量方面超过了当前的单目人体建模算法，在计算效率 (43 FPS) 方面明显优于这些算法，同时内存效率也很高 (每个主体 3.63 MB)。

## Introduction



## Reference

[[1]GoMAvatar: Efficient Animatable Human Modeling from Monocular Video Using Gaussians-on-Mesh](https://arxiv.org/abs/2404.07991)
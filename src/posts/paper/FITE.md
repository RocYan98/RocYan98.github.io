---
date: 2024-04-25
category: 论文
tag:
  - Paper
  - Avatar
  - FITE
  - SDF
title: FITE-论文笔记
order: 11
---

## Learning Implicit Templates for Point-Based Clothed Human Modeling

[项目地址](https://jsnln.github.io/fite/index.html)

ECCV 2022

## Abstract

我们提出的 FITE (First-Implicit-Then-Explicit) 是一个先隐后显的框架，用于为穿着服装的数字人建模。我们的框架首先学习表示粗略服装拓扑结构的隐式表面模板，然后利用模板指导点集的生成，进一步捕捉与姿势相关的服装变形（如褶皱）。我们的管道结合了隐式和显式表示法的优点，即能够处理不同的拓扑结构，并能有效捕捉精细细节。我们还提出了扩散蒙皮技术，以方便模板训练，尤其是宽松服装的模板训练，以及通过基于投影的 pose 编码从 mesh 模板中提取 pose 信息，而无需预定义的 UV 贴图或连通性。

## Introduction

本文的主要贡献：

- 我们提出了一种先隐后显的穿衣人体建模框架，该框架融合了隐式和显式表示法的优点，与现有方法相比，具有更好的拓扑特性。
- 针对粗模板训练，我们提出了扩散蒙皮策略，即使在数据有限或服装宽松的情况下，也能预测出从标准空间到pose 空间的稳定对应关系。
- 为了提取姿态信息，我们提出了基于投影的姿态编码，在没有预定义的 UV 贴图或连接性的前提下，可以通过训练后的模板学习出一个连续的特征空间。

## Method

![Fig. 1: Pipeline](http://img.rocyan.cn/blog/2024/04/662b21eac5add.png)

#### Task Formulation and Notions

本文的任务是从一组不同服装、不同 pose 的图像中学习出逼真的可动画的穿衣数字人模型。图 1 是本文的 pipeline，第一阶段学习隐式模板，第二阶段预测依赖 pose 的位移。为了简化符号，先假设同一个人只穿一件衣服，后续会说明如何扩展到多件衣服。

LBS：
$$
q^i=W(p,w(p),T,\theta^i)=\sum_{j=1}^{24}w_j(p)R^i_j(p)
\tag{1}
$$

- $p$ 和 $q^i$ 分别表示标准空间下一点的坐标和其对应第 i 帧 pose 所在位置的坐标
- $T$ 和 $\theta^i$ 分别表示 SMPL 在标准空间下的平均模板和第 i 帧的 pose 参数
- $w(p)=(w_1(p),\dots,w_{24}(p))\in\R^{24}$ 表示标准空间下的点 $p$ 对于每个 joint 的蒙皮权重，这个权重只是定义在 SMPL 的表面
- $R_j^i(p)$ 是由 $T$ 和 $\theta^i$ 确定的变换到第 i 帧 pose 的刚体变换矩阵


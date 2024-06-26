---
date: 2024-06-26
category: 论文
tag:
  - Paper
  - Avatar
  - LayGA
  - 3DGS
title: LayGA-论文笔记
order: 18
---

## LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer

[项目地址](https://jsnln.github.io/layga/)

SIGGRAPH 2024

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261135825.png)

## Abstract

可动画服装转移，旨在不角色间转移服装并对服装进行动画，是一个具有挑战性的问题。大多数数字人工作将人体和服装的表示统一在一起，这导致在不同身份之间的虚拟试衣变得困难。更糟的是，统一的表示通常无法准确跟踪服装的滑动。为了解决这些限制，本文提出了**分层高斯数字人 (Layered Gaussian Avatars, LayGA)**，这是一种新的表示方法，将身体和服装分为两个独立的层，用于从多视角视频中实现逼真的可动画服装转移。本文的表示方法基于高斯图数字人，因为它在服装细节的表示能力上非常出色。然而，高斯图会在实际表面周围产生非结构化的 3D 高斯分布。缺乏平滑的显式表面在准确的服装跟踪和处理身体与服装之间的碰撞时带来了挑战。因此，我们提出了两阶段训练方法，包括单层重建和多层拟合。在单层重建阶段，我们提出了一系列几何约束来重建平滑表面，同时获得身体和服装之间的分割。接下来，在多层拟合阶段，我们训练两个独立的模型来表示身体和服装，并利用重建的服装几何形状作为三维监督，以实现更准确的服装跟踪。此外，我们提出了几何和渲染层，用于高质量的几何重建和高保真渲染。总体而言，LayGA 实现了逼真的动画和虚拟试穿，并优于其他 baseline 方法。

> 这篇文章是基于 [Animatable Gaussians](Animatable-Gaussians) 做的，这里高斯图就是那篇文章里的内容。

## Reference

[[1]LayGA: Layered Gaussian Avatars for Animatable Clothing Transfer](https://arxiv.org/pdf/2405.07319)
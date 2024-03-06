---
date: 2024-03-06
category: 论文
tag:
  - Paper
  - DeePSD
  - Cloth Simulation
title: DeePSD-论文笔记
order: 6
---

## DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation

[项目地址](https://hbertiche.github.io/DeePSD/)

ICCV 2021

## Abstract

我们提出了一种通过深度学习解决服装动画问题的新方案。我们的研究成果可以为任意拓扑结构和几何复杂度的模板服装制作动画。近期的研究通过支撑人体模型 (support body model, 将服装编码为人体的拓扑的一部分)，实现了服装编辑、尺寸调整和动画。这个复杂的工程解决方案在可扩展性、适用性和兼容性方面受到影响。通过将范围限制在服装动画上，我们能够提出一个简单的模型，该模型可以为任何服装制作动画，不受其拓扑结构、顶点顺序或连接性的影响。我们提出的架构将服装动画三维模型映射为三维动画的标准格式 (混合权重和混合形状矩阵)，兼容所有图形引擎。我们还提出了一种方法，利用基于物理的无监督学习来补充监督学习，从而隐式地解决碰撞问题并提高布料质量。

## Introduction


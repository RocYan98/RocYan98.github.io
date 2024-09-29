---
date: 2024-09-29
category: 论文
tag:
  - Paper
  - Cloth Simulation
  - ContourCraft
  - Mesh
title: ContourCraft-论文笔记
order: 7
---

## ContourCraft: Learning to Resolve Intersections in Neural Multi-Garment Simulations

[项目地址](https://dolorousrtur.github.io/contourcraft/)

SIGGRAPH 2024

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202409291350814.png)

## Abstract

近年来，基于学习的布料模拟方法开始显示出其潜力。然而，在神经模拟中处理碰撞和穿透在很大程度上仍然是一个未解决的问题。在这项工作中，我们提出了 ContourCraft，一种基于学习的解决方案，用于处理神经布料模拟中的交叉点。与传统方法严重依赖无交叉输入不同，ContourCraft 可以从自穿透的错误输入服装中纠正这些穿透现象。ContourCraft 的技术核心是一种新的 intersection contour 损失，它可以惩罚交叉穿透并促进快速修正。我们将交叉损失与避免碰撞的排斥目标整合到一种基于图神经网络的神经布料模拟方法中。我们在动态人体运动下展示了我们的方法在一组具有挑战性的多层服装中的仿真能力。我们广泛的分析表明，ContourCraft 显著改善了学习模拟的碰撞处理，并产生了视觉上引人注目的结果。

## Introduction



## Reference

[[1]ContourCraft: Learning to Resolve Intersections in Neural Multi-Garment Simulations](https://dl.acm.org/doi/abs/10.1145/3641519.3657408)

---
date: 2024-05-15
category: 论文
tag:
  - Paper
  - Physical Simulation
  - Feature Splatting
  - 3DGS
title: Feature Splatting-论文笔记
order: 13
---

## Feature Splatting: Language-Driven Physics-Based Scene Synthesis and Editing

[项目地址](https://feature-splatting.github.io)

arXiv preprint arXiv:2404.01223

## Abstract

使用 3D 高斯核的场景表示法在静态和动态三维场景的外观建模方面取得了出色的效果。然而，许多图形应用需要同时处理物体的外观和物理特性。我们提出了 Feature Splatting，这是一种将基于物理的动态场景合成与基于自然语言的视觉语言基础模型的丰富语义相统一的方法。我们的第一个贡献是将高质量的、以物体为中心的视觉语言特征提炼为 3D 高斯特征，从而能够使用文本查询进行半自动场景分解。我们的第二个贡献是使用基于粒子的模拟器从静态场景中合成基于物理的动态效果，其中材料属性通过文本查询自动分配。我们对这一管道中使用的关键技术进行消融实验，以说明将外观、几何、材料属性和基于自然语言的语义统一表示为带特征的 3D 高斯所面临的挑战和机遇。

## Introduction


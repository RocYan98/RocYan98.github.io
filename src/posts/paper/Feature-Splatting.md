---
date: 2024-05-22
category: 论文
tag:
  - Paper
  - Physical Simulation
  - Feature Splatting
  - 3DGS
title: Feature Splatting-论文笔记
order: 14
---

## Feature Splatting: Language-Driven Physics-Based Scene Synthesis and Editing

[项目地址](https://feature-splatting.github.io)

arXiv preprint arXiv:2404.01223

![Fig. 1: Overview](http://img.rocyan.cn/blog/2024/05/664b34e9d23b4.png)

## Abstract

使用 3D 高斯核的场景表示法在静态和动态三维场景的外观建模方面取得了出色的效果。然而，许多图形应用需要同时处理物体的外观和物理特性。我们提出了 Feature Splatting，这是一种将基于物理的动态场景合成与基于自然语言的视觉语言基础模型的丰富语义相统一的方法。我们的第一个贡献是将高质量的、以物体为中心的视觉语言特征提炼为 3D 高斯特征，从而能够使用文本查询进行半自动场景分解。我们的第二个贡献是使用基于粒子的模拟器从静态场景中合成基于物理的动态效果，其中材料属性通过文本查询自动分配。我们对这一管道中使用的关键技术进行消融实验，以说明将外观、几何、材料属性和基于自然语言的语义统一表示为带特征的 3D 高斯所面临的挑战和机遇。

## Introduction

本文的主要贡献：

- 提出了 feature splatting 这个新方法，通过对场景增加语义和语言驱动场景内的物体进行物理真实的移动，来增强静态场景。
- 一个基于 MPM 来驱动高斯的物理引擎，一种融合多个基础视觉 2D 模型的新分割方法。
- 证明 feature splatting 是一个优秀的语言驱动的场景编辑工具。

## Language-Driven Physics-Based Synthesis and Editing

三个关键组件：

- 一个将丰富语义特征从视觉语言模型蒸馏到 3D 高斯的方法；
- 一个使用开放文本查询将场景分割为关键部分的方法；
- 一个通过语言来确定材料属性的方法 (作为物理真实动态场景合成的一部分)；

### Differentiable Feature Splatting

**Feautre Splatting**：对每个高斯核增加一个额外的特征向量 $\mathbf{f}_i \in \R^d$，与视角方向无关。然后进行渲染：
$$
\{\hat{\mathbf{F}}, \hat{\mathbf{C}}\}=\sum_{i \in N}\left\{\mathbf{f}_i, \mathbf{c}_i\right\} \cdot \alpha_i \prod_{j=1}^{i-1}\left(1-\alpha_j\right)
\tag{1}
$$
**Systenms Considerations**：直接光栅化高维度特征会导致昂贵的训练时间，深入分析后发现主要瓶颈在内存访问模式，通过设计了 cuda kernal 解决。

**Improving Reference Feature Quality Using Part-Priors**：

## Reference

[[1]Feature Splatting: Language-Driven Physics-Based Scene Synthesis and Editing](https://arxiv.org/pdf/2404.01223)

[[2]紫爷论文阅读笔记](https://pat-chou-li.github.io/ayene-no-blog/posts/论文阅读笔记#feature-splatting-language-driven-physics-based-scene-synthesis-and-editing)

---
date: 2024-06-07
category: 论文
tag:
  - Paper
  - Reconstruction
  - ImmFusion
  - mmWave-RGB
title: ImmFusion-论文笔记
order: 17
---

## ImmFusion: Robust mmWave-RGB Fusion for 3D Human Body Reconstruction in All Weather Conditions

ICRA 2023

## Abstract

RGB 图像的 3D 人体重建在良好天气条件下能取得不错的效果，但在恶劣天气下效果会显著下降。作为补充，毫米波雷达已被用于在恶劣天气下重建 3D 人体关节和网格。然而，由于毫米波信号的稀疏性和 RGB 图像的脆弱性，将 RGB 和毫米波信号结合起来以实现全天候的鲁棒 3D 人体重建仍然是一个未解决的挑战。在本文中，我们提出了 ImmFusion，这是首个能够在各种天气条件下稳健地重建 3D 人体的毫米波-RGB 融合解决方案。具体来说，我们的 ImmFusion 包含图像和点云骨干网络用于特征提取，并包含一个 Transformer 模块用于特征融合。图像和点云骨干网络从原始数据中提取全局和局部特征，而融合 Transformer 模块则通过动态选择信息丰富的特征来实现两种模态的有效信息融合。在各种环境下捕获的大规模数据集 mmBody 上进行的大量实验表明，ImmFusion 能够高效利用两种模态的信息，实现稳健的全天候 3D 人体重建。此外，我们的方法在准确性上显著优于最先进的基于 Transformer 的 激光雷达-相机融合方法。

## Introduction
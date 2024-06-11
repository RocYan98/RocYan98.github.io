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

![Fig. 1: Overview](http://img.rocyan.cn/blog/2024/06/6667b188ebedf.png =x500)

## Abstract

RGB 图像的 3D 人体重建在良好天气条件下能取得不错的效果，但在恶劣天气下效果会显著下降。作为补充，毫米波雷达已被用于在恶劣天气下重建 3D 人体关节和网格。然而，由于毫米波信号的稀疏性和 RGB 图像的脆弱性，将 RGB 和毫米波信号结合起来以实现全天候的鲁棒 3D 人体重建仍然是一个未解决的挑战。在本文中，我们提出了 ImmFusion，这是首个能够在各种天气条件下稳健地重建 3D 人体的毫米波-RGB 融合解决方案。具体来说，我们的 ImmFusion 包含图像和点云骨干网络用于特征提取，并包含一个 Transformer 模块用于特征融合。图像和点云骨干网络从原始数据中提取全局和局部特征，而融合 Transformer 模块则通过动态选择信息丰富的特征来实现两种模态的有效信息融合。在各种环境下捕获的大规模数据集 mmBody 上进行的大量实验表明，ImmFusion 能够高效利用两种模态的信息，实现稳健的全天候 3D 人体重建。此外，我们的方法在准确性上显著优于最先进的基于 Transformer 的激光雷达 - 相机融合方法。

## Introduction

3D 人体重建广泛应用于许多实际的机器人应用中，例如人机交互、姿态估计和动作捕捉。目前，最流行的方法是使用 RGB 图像进行重建，然而，在恶劣环境下，使用 RGB 图像进行重建的性能仍然有限，因为 RGB 相机的感知能力在光照不良或恶劣天气条件下会迅速下降。另一方面，由于从单个图像回归深度本质上是一个病态问题，基于单目相机的 3D 重建相当复杂。

最近，毫米波雷达在无线感知领域越来越受欢迎，如自动驾驶、人类活动识别和无人机。同时，毫米波雷达在人体重建任务中表现出巨大的潜力，因为它不受不利环境的影响。因此，在某些特定情况下，其重建结果与 RGB 图像相比具有竞争力或优越性。然而，尽管毫米波信号具有深度测量和抗极端天气条件的能力，但毫米波重建受限于稀疏性和多路径效应，限制了其在正常场景中的高性能。将 RGB 信号引入毫米波系统可能是一个解决方案，融合这两种模态以结合它们的优势应该是实现全天候鲁棒 3D 人体重建的关键。

大多数现有的激光雷达 - 相机融合方法采用点到图像投影，通过逐元素加法或通道连接来融合点云和RGB像素值。然而，直接将稀疏、噪声、随机丢失和时间闪烁的毫米波点云附加到RGB图像上会降低提取的特征，特别是在光照不良等恶劣环境下。因此，这种策略不适用于毫米波 - RGB 融合。另一方面，Transformer 为多模态融合方法的研究开辟了新途径。然而，这些 Transformer 融合框架主要集中在基于 激光雷达 - 相机融合的目标检测上，这对于基于毫米波 - RGB 融合的人体重建任务并不适用。

为了解决这些问题，本文提出了 ImmFusion，这是第一个结合毫米波点云和 RGB 图像以鲁棒地在各种天气条件下重建 3D 人体的融合解决方案。鉴于多路径效应引起的背景噪声，我们从点簇而不是单个点中提取特征。此外，为了解决异构模态的时空错位问题，我们通过一个设计精巧的融合 Transformer 模块，利用局部和全局特征来融合密集的图像特征和稀疏的雷达点簇特征。

本文的主要贡献：

- 提出了ImmFusion，这是第一个在包括雨、烟雾和光照不良等严酷环境在内的所有天气条件下进行 3D 人体重建的最先进毫米波 - RGB 融合方法。
- 采用了一个设计精巧的融合 Transformer 模块，有效地融合了从毫米波和 RGB 模态提取的全局和局部特征，并设计了一个巧妙的模态屏蔽模块，以增强模型在所有场景中的鲁棒性。
- 在大规模毫米波数据集 mmBody 上评估了 ImmFusion，结果表明在所有天气条件下，ImmFusion 的表现均优于其他非融合或激光雷达 - 相机融合模型。

## Method

![Fig. 2: Pipeline. (a)ImmFusion. D.R. MLP stands for a dimension reduction MLP. (b)Point-level fusion methods. (c)DeepFusion. (d)TokenFusion](http://img.rocyan.cn/blog/2024/06/6667b35b4ae99.png)

图 2 展示了本文的 pipeline，给定一个具有固定点数的雷达点云和一个大小为 $224\times224$​ 的图像，首先由图像和点云 backbone 分别提取全局/局部点和图像特征。接下来，将两个全局特征合并为一个全局特征向量，并嵌入 SMLP-X 模板位置。然后，将所有全局/局部特征标记为多层融合 Transformer 模块的输入，以动态融合两种模态的信息，并直接回归 3D 人体关节和粗略网格顶点的坐标。最后，使用 MLP 将粗略网格顶点上采样到完整的 SMPL-X 网格顶点。

### Preliminary of 3D Human Body Reconstruction

3D 人体重建旨在预测所有关节和顶点的 3D 位置。本文采用非参数方法进行人体重建，使用从 GT 中自动标注的 bounding box 来裁剪仅包含身体部分的区域。给定一个数据集 $D = \{P_t, I_t, J_t, V_t\}, t = 0, \ldots, N$，其中 $P_t \in \mathbb{R}^{1024×3}$ 是裁剪后的毫米波雷达点云 (含 1024 个点)， $I_t \in \mathbb{R}^{224×224×3}$ 是大小为 $224\times224$ 的 RGB 图像的人体区域，$J_t \in \mathbb{R}^{22×3} ,  V_t \in \mathbb{R}^{10475×3}$ 分别是 $t$​ 时刻 GT 标注的 22 个关节和 10475 个顶点的位置，我们努力融合两种模态的输入信息来重建 3D 人体。

### Extraction of Global and Local Features



## Reference

[[1]ImmFusion: Robust mmWave-RGB Fusion for 3D Human Body Reconstruction in All Weather Conditions](https://ieeexplore.ieee.org/abstract/document/10161428)

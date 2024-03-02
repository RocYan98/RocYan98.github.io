---
date: 2024-03-01
category: 论文
tag:
  - Paper
  - REC-MV
  - Reconstructing
  - Cloth Simulation
title: REC-MV-论文笔记
order: 5
---

##REC-MV: REconstructing 3D Dynamic Cloth from Monocular Videos 

[项目地址](https://lingtengqiu.github.io/2023/REC-MV/)

CVPR 2023

## Abstract

从单目视频中重建具有开放边界的动态 3D 服装表面是一个重要的问题，因为它为服装数字化提供了实用且低成本的解决方案。最近的神经渲染方法从单目视频中实现了高质量的动态服装人体重建结果，但这些方法无法将服装表面与身体分开。此外，尽管基于特征曲线表示的现有服装重建方法展示了从单个图像重建服装的令人印象深刻的结果，但它们很难为视频输入生成时间一致的表面。为了解决上述限制，在本文中，我们将此任务制定为 3D 服装特征曲线和单目视频表面重建的优化问题。我们引入了一种称为REC-MV 的新颖方法来联合优化服装的显式特征曲线和隐式符号距离场 (SDF)。然后可以通过规范空间中的服装模板注册来提取开放的服装网格。对多个随意捕获的数据集的实验表明，我们的方法优于现有方法，并且可以生成高质量的动态服装表面。

## Introduction

目前有 2 种主流的解决方案，1) 利用神经渲染的方法，隐式表示标准空间下穿着衣服的人体，再用基于蒙皮的变形方法将其变形到对应的 pose。想要用这种方法使衣服与人体分离需要大量的工作。2）直接从单目图像中重建高保真的衣物 mesh 模板，ReER 就使用特征曲线和隐式表面场的方法来重建衣物的模板。但是这些方法在以视频为输入时，很难保证重建出的衣服在时间上具有表面一致性。

本文结合神经渲染方法中的动态表面模型和显式特征曲线，使用基于蒙皮的运动建模来表示标准空间下的显示曲线和隐式表面，并通过从视频中自动提取的2D信息（如图片像素，服装 mask 和可视化特征曲线）来优化。主要贡献如下：

- REC-MV，第一个从单目视频中重建动态且拥有开放边界的宽松衣服的方法。
- 提出优化显式特征曲线和隐式服装表面的方法。
- 对于随意拍摄的单目视频，本文方法是SOTA。

## Method

使用特征曲线（领口、袖口、衣服下摆、裙摆等）确定服装的轮廓，使用 SDF 来表示服装的表面。首先从视频中获取显式特征曲线和隐式服装表面，然后应用非刚性服装模板配准来提取开放边界服装 mesh。

**Preprocessing：**通过 Videoavatar 生成初始体格参数（shape parameters）$\beta$，相机内参 $\pi$ 和每帧的 SMPL 姿态参数（pose parameters）$\vec\theta$。使用 [Self-Correction-Human-Parsing](https://github.com/GoGoDuck912/Self-Correction-Human-Parsing) 的方法来估计服装 mask。还需要 2D 可见曲线 $\zeta=\{\zeta_{l,t}|l=1,...N_l,t=1,...,N_i\}$（其中 $N_l$ 表示曲线的数量，$N_i$ 表示视频的帧数）来恢复 3D 曲线，2D 可见曲线分析服装 mask 的边界时会自动生成。

### 特征曲线和表面重建

**显式表面模板**：本文采用了几个表面模板（包括上衣、连衣裙、外套、短裤和衬衫），模板包含预定义的 3D 特征曲线几何集 $\mathbf{L}=\{L_i|i=1,...,N_l\}$（$N_l$​ 表示特征曲线的数量） ，这些特征曲线是从服装的边界提取出来的。表面模板和预定义的特征曲线将分别用于服装表面和特征曲线的初始化。

**无交点曲线变形**：如果直接将特征曲线表示为离散的点集，那么优化时对每个点进行 3D 变形偏移的时候，点的顺序可能会打乱，导致曲线交叉。所以本文提出了无交点曲线变形（Intersection-free Curve Deformation）的方法，点点变形由曲线中心和两个正交方向控制：
$$
\begin{equation}
\mathcal{C}'(i)=\mathbf{p}_{\mathbf{c}}+S^d_i\mathbf{n}^{\mathbf{d}}_{\mathbf{i}}+S^c_i\mathbf{n}^{\mathbf{c}}
\tag{1}
\end{equation}
$$

- $\mathcal{C}'(i)$​ 表示偏移后的点
- $\mathbf{p}_{\mathbf{c}}$ 表示曲线的中心
- $\mathbf{n}^{\mathbf{d}}_{\mathbf{i}}$ 表示曲线中心到当前点 $\mathcal{C}(i)$ 的方向
- $\mathbf{n}^{\mathbf{c}}=\frac{1}{N_p-1}\sum_{i=1}^{N_p}(\mathbf{n}^{\mathbf{d}}_{\mathbf{i}}\times\mathbf{n}^{\mathbf{d}}_{\mathbf{i-1}})$​ 表示垂直于特征曲线平面的方向
- $S^d_i\in\R,S^c_i\in\R$ 是可学习的参数，确定变形步长

![Fig. 1: 可视化无交点曲线变形](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/efocab.png)

**标准空间的隐式 SDF**：UDF 是可以表示开放表面的隐函数，但是在接近表面的点处不可微。因此本文用 SDF 来表示一个封闭的衣服表面，然后使用非刚性服装模板配准来提取开放表面的服装。本文并不使用一整个 SDF 来表示整个衣服表面，而是拆分成三种表面类型（上衣、下衣和连体衣物），SDF 由具有可学习权重 $\eta$ 的 MLP $f$ 表示：$S(\eta)=\{\mathbf{p}\in\R^3|f(\mathbf{p};\eta)=0\}$​

### 基于蒙皮的运动建模

对于大型身体运动，采用线性混合蒙皮 LBS，对于细粒度的变形则是采用非刚性变形场。

**蒙皮转换**：

## Reference

[REC-MV: REconstructing 3D Dynamic Cloth from Monocular Videos](https://arxiv.org/abs/2305.14236)

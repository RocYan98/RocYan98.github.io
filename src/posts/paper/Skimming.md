---
date: 2024-05-24
category: 论文
tag:
  - Paper
  - Skimming
title: 论文略读
order: 1
---

## D3GA：Drivable 3D Gaussian Avatars

[项目地址](https://zielon.github.io/d3ga/)

arXiv preprint arXiv:2311.08581

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143740.png)

![Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143918.png)

### Abstract

我们提出了可驱动 3D 高斯数字人 (D3GA)，这是首个用 3DGS 渲染的人体三维可控模型。目前逼真的数字人在训练过程中需要精确的 3D 注册，在测试过程中需要密集的输入图像，或者两者兼而有之。基于神经辐射场的数字人在远程应用中也往往过于缓慢。本研究利用最近提出的 3DGS 技术，以密集配准的多视角视频作为输入，实时渲染逼真的人体。为了对这些基元进行变形，我们放弃了常用的 LBS 变形方法，而采用了经典的体积变形方法：笼式变形。鉴于它们的尺寸较小，我们用关节角度和关键点来驱动这些变形，这更适合通信应用。在使用相同的训练和测试数据时，我们对九个具有不同体形、衣服和动作的测试者进行了实验，结果比最先进的方法质量更高。

> 整体流程如 Pipeline 所示，主要是想看这篇文章是分割出衣服的 —— "To create a cage per garment, we segment all images of a single time instance using an [EfficientNet][ref1] backbone with [PointRend][ref2] refinement."
>
> [ref1]: http://proceedings.mlr.press/v97/tan19a.html?ref=jina-ai-gmbh.ghost.io
> [ref2]:https://openaccess.thecvf.com/content_CVPR_2020/html/Kirillov_PointRend_Image_Segmentation_As_Rendering_CVPR_2020_paper.html

## Dynamic Point Field

[项目地址](https://sergeyprokudin.github.io/dpf/)

ICCV 2023

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143606.png =x400)

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261144768.png)

### Abstract

近年来，神经表面重建领域取得了重大进展。在广泛关注体积和隐式方法的同时，一些研究表明，显式图形基元 (如点云) 可以显著降低计算复杂度，同时不影响重建表面的质量。然而，人们较少关注用点云基元对动态表面建模。在这项工作中，我们提出了一种动态点云场模型，该模型结合了显式点云基元的表示优势和隐式形变网络优势，可对非刚性三维表面进行高效建模。通过使用显式表面，我们还可以轻松地将 as-isometric-as-possible 等成熟的约束条件纳入其中。虽然在完全无监督的情况下学习这种变形模型容易出现局部最优，但我们建议同时利用关键点动态等语义信息来指导学习。我们通过一个应用实例来演示我们的模型，即从三维扫描集合中创建一个富有表现力的可动画化的人体。在这里，以前的方法大多依赖于 LBS，这从根本上限制了此类模型在处理长裙等复杂布料外观时的表现力。

> 这篇文章主要是学习一个动态点云场，可以理解为学习一个基于点云的 PSD，要有 GT 的 mesh 才能学出点云表示的表面。

## GaussianAvatar: Towards Realistic Human Avatar Modeling from a Single Video via Animatable 3D Gaussians

[项目地址](https://huliangxiao.github.io/GaussianAvatar)

CVPR 2024

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407051530107.png)

![Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407051531677.png)

### Abstract

本文介绍的**高斯数字人 (GaussianAvatar)** 是一种高效的方法，可通过单个视频创建具有动态三维外观的逼真数字人。我们首先引入了可动画化的 3D 高斯来显式表示不同姿势和服装的人体。这种显式且可动画化的表现形式可以更高效、更一致地从 2D **流形 (manifold)** 中学习 3D 外观。本文的表示进一步增强了动态属性，以支持 pose-dependent 的外观建模，其中通过动态外观网络和可优化的特征张量可以学习 motion-to-appearance 的映射。此外，通过利用可微 motion condition，本文的方法可以在数字人建模过程中对 motion 和 appearance 进行联合优化，这有助于解决长期存在的单目环境下运动估计不准确的问题。GaussianAvatar 在公开数据集和我们收集的数据集上都得到了验证，证明了它在外观质量和渲染效率方面的卓越表现。

> 这篇工作的整体思路和 [Animatable Gaussians](Animatable-Gaussians.thml) 很相似，都是用 2D map 来表示 pose，然后直接通过网络学习出高斯的属性。本文的输入是单个视频，不同 pose下每个顶点的位置用 uv 图 (颜色表示具体的坐标) 表示，然后通过动态外观网络 (网络的架构和 [POP](https://openaccess.thecvf.com/content/ICCV2021/html/Ma_The_Power_of_Points_for_Modeling_Humans_in_Clothing_ICCV_2021_paper.html) 一样) 来学习出高斯的属性。本文还用 motion and appearance 联合优化的方法来缓解 SMPL pose 估计不准的问题。

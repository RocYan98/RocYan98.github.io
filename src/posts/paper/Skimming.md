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

![image-20240527163215445](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143606.png =x400)

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261144768.png)

### Abstract

近年来，神经表面重建领域取得了重大进展。在广泛关注体积和隐式方法的同时，一些研究表明，显式图形基元 (如点云) 可以显著降低计算复杂度，同时不影响重建表面的质量。然而，人们较少关注用点云基元对动态表面建模。在这项工作中，我们提出了一种动态点云场模型，该模型结合了显式点云基元的表示优势和隐式形变网络优势，可对非刚性三维表面进行高效建模。通过使用显式表面，我们还可以轻松地将 as-isometric-as-possible 等成熟的约束条件纳入其中。虽然在完全无监督的情况下学习这种变形模型容易出现局部最优，但我们建议同时利用关键点动态等语义信息来指导学习。我们通过一个应用实例来演示我们的模型，即从三维扫描集合中创建一个富有表现力的可动画化的人体。在这里，以前的方法大多依赖于 LBS，这从根本上限制了此类模型在处理长裙等复杂布料外观时的表现力。

> 这篇文章主要是学习一个动态点云场，可以理解为学习一个基于点云的 PSD，要有 GT 的 mesh 才能学出点云表示的表面。


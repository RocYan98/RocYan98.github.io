---
date: 2024-05-24
category: 论文
tag:
  - Paper
  - Skimming
title: 论文略读
order: 0
---

## D3GA：Drivable 3D Gaussian Avatars

[项目地址](https://zielon.github.io/d3ga/)

arXiv preprint arXiv:2311.08581

![Overview](http://img.rocyan.cn/blog/2024/05/665043cf9cb25.png)

![Pipeline](http://img.rocyan.cn/blog/2024/05/6653e0403d7fe.png)

### Abstract

我们提出了可驱动 3D 高斯数字人 (D3GA)，这是首个用 3DGS 渲染的人体三维可控模型。目前逼真的数字人在训练过程中需要精确的 3D 注册，在测试过程中需要密集的输入图像，或者两者兼而有之。基于神经辐射场的数字人在远程应用中也往往过于缓慢。本研究利用最近提出的 3DGS 技术，以密集配准的多视角视频作为输入，实时渲染逼真的人体。为了对这些基元进行变形，我们放弃了常用的 LBS 变形方法，而采用了经典的体积变形方法：笼式变形。鉴于它们的尺寸较小，我们用关节角度和关键点来驱动这些变形，这更适合通信应用。在使用相同的训练和测试数据时，我们对九个具有不同体形、衣服和动作的测试者进行了实验，结果比最先进的方法质量更高。

To create a cage per garment, we segment all images of a single time instance using an [EfficientNet][ref1] backbone with [PointRend][ref2] refinement.

[ref1]: http://proceedings.mlr.press/v97/tan19a.html?ref=jina-ai-gmbh.ghost.io
[ref2]:https://openaccess.thecvf.com/content_CVPR_2020/html/Kirillov_PointRend_Image_Segmentation_As_Rendering_CVPR_2020_paper.html

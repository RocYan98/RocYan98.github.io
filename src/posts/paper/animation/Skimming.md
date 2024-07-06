---
date: 2024-05-24
category: 论文
tag:
  - Paper
  - Animation
  - Skimming
title: 论文略读合集 (仿真)
order: 1
---

## Dynamic Point Field

[项目地址](https://sergeyprokudin.github.io/dpf/)

ICCV 2023

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143606.png =x400)

![Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407060844480.png)

### Abstract

近年来，神经表面重建领域取得了重大进展。在广泛关注体积和隐式方法的同时，一些研究表明，显式图形基元 (如点云) 可以显著降低计算复杂度，同时不影响重建表面的质量。然而，人们较少关注用点云基元对动态表面建模。在这项工作中，我们提出了一种动态点云场模型，该模型结合了显式点云基元的表示优势和隐式形变网络优势，可对非刚性三维表面进行高效建模。通过使用显式表面，我们还可以轻松地将 as-isometric-as-possible 等成熟的约束条件纳入其中。虽然在完全无监督的情况下学习这种变形模型容易出现局部最优，但本文建议同时利用关键点动态等语义信息来指导学习。我们通过一个应用实例来演示我们的模型，即从三维扫描集合中创建一个富有表现力的可动画化的人体。在这里，以前的方法大多依赖于 LBS，这从根本上限制了此类模型在处理长裙等复杂布料外观时的表现力。

> 这篇文章主要是学习一个动态点云场，可以理解为学习一个基于点云的 PSD，要有 GT 的 mesh 才能学出点云表示的表面。
---
date: 2024-04-30
category: 计算机图形学
tag:
  - Coordinate
  - Render
title: 相机坐标系总结
---

在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。

![Fig. 1: 常见的相机坐标系](http://img.rocyan.cn/blog/2024/04/6630f07ce9ba9.png)

常见的相机坐标系通常分为以上 4 种，都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表：

| 相机坐标系 | 软件或模型                     |
| ---------- | ------------------------------ |
| RDF        | OpenCV、Colmap、SMPL           |
| DRB        | LLFF                           |
| RUB        | OpenGL、NeRF、Blender、MeshLab |
| LUF        | Pytorch3D                      |

## Reference

[NeRF代码解读-相机参数与坐标系变换](https://zhuanlan.zhihu.com/p/593204605)
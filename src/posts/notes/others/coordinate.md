---
date: 2024-04-30
category: 学习笔记
tag:
  - Coordinate
  - Render
title: 相机坐标系总结
---

在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。

![Fig. 1: 常见的相机坐标系](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261203428.png)

上图 4 种都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表：

| 相机坐标系                | 软件或模型            |
| ------------------------- | --------------------- |
| RDF (Right Down Forward)  | OpenCV、Colmap        |
| DRB (Down Right Backward) | LLFF                  |
| RUB (Right Up Backward)   | OpenGL、NeRF、MeshLab |
| LUF (Left Up Forward)     | Pytorch3D             |
| BUL (Backward Up Left)    | SMPL (不确定)         |

还有些就更奇怪了，比如常用的 blender 就是 z 轴朝上，有些是左手坐标系。找到的另一张图对常用渲染引擎的坐标系总结如下图：

![Fig 2: 常用引擎的坐标系](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261203613.jpeg)

对于矩阵表示，在左乘时候，实际上是对坐标进行变换，表现为原空间基向量不变，变换本身发生了变换。而右乘是对原空间基向量进行变换，表现为坐标不变，原空间基向量发生改变。

左乘旋转矩阵通常表示相对于固定坐标系的旋转，‌右乘表示相对于当前坐标系的旋转，旋转方向为逆时针。

可以用这行代码快速得到绕 z轴逆时针转 90 度的旋转矩阵`pytorch3d.transforms.axis_angle_to_matrix(torch.tensor([0, 0, np.pi / 2]))`

## Reference

[NeRF代码解读-相机参数与坐标系变换](https://zhuanlan.zhihu.com/p/593204605)

[What’s your blender to threejs workflow to handle different axis?](https://discourse.threejs.org/t/whats-your-blender-to-threejs-workflow-to-handle-different-axis/33408)
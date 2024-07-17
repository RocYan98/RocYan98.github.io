---
date: 2024-03-15
category: 论文
tag:
  - Paper
  - Representation
  - 3DGS
title: 3DGS-论文笔记
order: 4
---

## 3D Gaussian Splatting for Real-Time Radiance Field Rendering

[项目地址](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)

SIGGRAPH 2023

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261146300.png)

## Abstract

辐射场方法最近彻底改变了用多张照片或视频拍摄的场景的新视角合成。然而，要实现高视觉质量，仍然需要神经网络，而神经网络的训练和渲染成本很高，同时，最近的快速方法不可避免地要以速度换质量。对于无边界的完整场景 (而不是孤立的物体) 和 1080p 分辨率渲染，目前的方法都无法实现实时显示率。我们引入了三个关键要素，使我们能够在保持有竞争力的训练时间的同时实现最先进的视觉质量，更重要的是，我们能够在 1080p 分辨率下实现高质量的实时 (≥ 30 fps) 新视图合成。首先，从摄像机标定过程中产生的稀疏点云开始，我们用三维高斯表示场景，这种三维高斯保留了用于场景优化的连续体积辐射场的理想特性，同时避免了在空白空间进行不必要的计算；其次，我们对三维高斯进行交错优化/密度控制，特别是优化各向异性协方差，以实现场景的精确表示；第三，我们开发了一种快速的可见性感知的渲染算法，该算法支持各向异性拼接，既能加快训练速度，又能实现实时渲染。我们在几个已建立的数据集上展示了最先进的视觉质量和实时渲染。

## Introduction

本文的三个贡献：

- 引入各向异性三维高斯，作为辐射场的一种高质量、非结构化表示方法。
- 一种三维高斯特性优化方法，与自适应密度控制交错使用，为拍摄到的场景创建高质量的表现形式。
- 基于 GPU 可见性感知的快速可微分渲染算法，通过各向异性拼接和快速反向传播实现高质量的新视图合成。

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261146942.png)

## 可微 3DGS (Differentiable 3D Gaussian Splatting)

这部分主要是是数学推导，这里就不展开了。只需要知道这几个参数：

- $\mu$ 表示 3D 高斯的均值，决定高斯基元的空间位置坐标
- $\Sigma=RSS^TR^T$​ 表示协方差矩阵 (S 和 R 分别是缩放矩阵和旋转矩阵)，决定了高斯椭球的形状
- $\alpha$ 表示不透明度
- 球谐函数 (SH) 系数，决定了高斯的颜色，拟合视角相关的外观

## 3DGS 自适应密度控制 (Optimization With Adaptive Density Control Of 3D Gaussian)

### 优化 (Optimization)

就是通过梯度下降来优化前面提到的 4 个参数，用 CUDA 写的前向传播和反向传播来提高并行速度。为了获得平滑梯度，本文使用 sigmoid 激活函数将 $\alpha$ 约束在 $[0,1)$ 的区间内，对协方差使用了指数激活函数。损失函数为：
$$
\mathcal{L}=(1-\lambda)\mathcal{L}_1+\lambda\mathcal{L}_{D-SSIM}
\tag{1}
$$

- $\mathcal{L}_1$ 为渲染图像的光度损失
- $\mathcal{L}_{D-SSIM}$ 用于约束渲染图像和 GT 之间的相似度

### 高斯自适应控制 (Adaptive Control of Gaussians)

每 100 轮迭代进行一次密集化，并去除那些透明的椭球 (不透明度 $\alpha$ 低于某个阈值 $\epsilon_\alpha$ 的椭球) 。对于缺少几何特征 (欠重建) 或高斯球覆盖很大区域 (过重建) 的场景，通常都有很大的观察空间位置梯度，所以对于梯度大于阈值 $\tau_{pos}$ 的区域就进行密集化。

![Fig. 3: Adaptive Gaussian densification scheme](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261146653.png)

对于欠重建区域通常进行克隆，复制原本的高斯球，并朝着梯度的方向移动；对于过重建区域，将高斯球分裂成 2 个，分裂系数为 $\phi=1.6$，分裂后高斯球的位置是通过将原始 3D 高斯作为概率密度函数进行采样确定的。

每 3000 次迭代会将不透明度 $\alpha$ 归零，之后的优化会提升 $\alpha$ 并且将 $\alpha$ 小于阈值的点移除；并且还会定期删除世界空间中体积过大的高斯球和观察空间中面积过大的高斯球。这样做都能够有效控制高斯球的个数。

## 快速可微光栅化

大致步骤如下：

- 将屏幕分成 $16\times16$ 个 tiles，每个 tile 只挑选视锥内置信区间 99% 的高斯球，并将极端位置 (均值接近近平面但是远离视锥的物体) 的高斯球给剔除；
- 对于每个 tile 里的高斯球按照深度顺序进行排序 (没有逐像素进行排序)；
- 对于光栅化，为每个 tile 启动了一个线程块。每个线程块首先将高斯球加载在到共享的存储器中，然后对于每个给定的像素，按照深度从前到后累计颜色和 $\alpha$ 值；
- 当在一个像素中， $\alpha$ 值累积到目标饱和度后，对应的线程就会停止。每经过固定的间隔，一个 tile 中的线程就会被查询，当其中的所有像素都达到饱和度的时候这个 tile 就会终止；

## Reference

[[1]3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/3d_gaussian_splatting_low.pdf)

[[2]3D Gaussian Splatting](https://pat-chou-li.github.io/ayene-no-blog/posts/3dgs/3d%20gaussian%20splatting)

[[3]3DGS学习笔记（3D Gaussian Splatting）](https://zhuanlan.zhihu.com/p/671425023)

---
date: 2024-02-27
category: 论文
tag:
  - Paper
  - SMPL
  - Avatar
title: SMPL-论文解析
order: 4
---

## SMPL: A Skinned Multi-Person Linear Model

[项目地址](https://smpl.is.tue.mpg.de)

SIGGRAPH Asia 2015

## 1 SMPL模型概述

SMPL 是一种基于顶点的蒙皮模型，能准确表现自然人体姿势中的各种体形。简单来说就是可以表现各种姿态下不同体格 (高矮胖瘦) 的人。SMPL 分别用**形状参数 (shape parameters)** 来控制体格，用**姿态参数 (pose parameters)** 来控制不同的姿态，并且这些控制都是线性的。SMPL 模型包含 6890​ 个顶点和 24 个关节 (23 个关节点 + 1 个根节点)。

![Fig. 1: SMPL模型的24个关节](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ps9e7y.png)



### 1.1 SMPL中的参数

为了方便之后的讲解先把SMPL中的所有参数先列出来，具体含义之后会讲解：

$N$ 6890 个顶点

$K$ 23 个关节 (不包括根节点)

$\bar{T}\in\R^{3N}$ 人体平均模型

$\mathcal{W}\in\R^{N\times K}$ 混合权重 (blend weights) 矩阵

$\vec\beta\in\R^{10}$ 体格参数 (shape parameters)

$\vec\theta\in\R^{72}$ 姿态参数 (pose parameters)，$23 \times 3 + 3 = 72$ (要加上根节点)

$\vec\theta^*$​​ 标准姿态 (canonical pose \ rest pose \ T-pose \ zero pose) 下的姿态参数

$J(\vec\beta):\R^{\lvert\vec\beta\rvert}\mapsto\R^{3K}$​ 骨骼点位置估计函数 (joint location predict function)

$B_S(\vec\beta):\R^{\lvert\vec\beta\rvert}\mapsto\R^{3N}$ 基于体格的混合形状函数 (blend shape function)

$B_P(\vec\theta):\R^{\lvert\vec\theta\rvert}\mapsto\R^{3N}$​ 基于姿态的混合形状函数 (pose-dependent blend shape function)

$M(\vec\beta,\vec\theta;\bar{T},\mathcal{W},\mathcal{S},\mathcal{J},\mathcal{P}):\R^{\lvert\vec\theta\rvert\times\lvert\vec\beta\rvert}\mapsto\R^{3N}$ SMPL最终的一个方程，根据体格和姿态参数，映射到对应体格和姿态的顶点集。分号前的 2 个参数是人工指定的，分号后的 5 个参数是通过学习得到的，本文都采用这种格式。

- $\bar{T}$ 人体平均模型
- $\mathcal{W}$​ 混合权重矩阵
- $\mathcal{S}$ 体格的主成分分析 (PCA) 基矩阵
- $\mathcal{J}$ 骨骼点位置估计矩阵
- $\mathcal{P}$ 姿态的 PCA 基矩阵

SMPL 模型最终就是要学习这 5 个参数。



## 2 Pipeline

SMPL 模型可以分为 4 个阶段：**平均模版形状 (mean template shape)**，**基于体格的混合成形 (shape blend shapes)**，基于姿态的混合成形 (pose blend shapesy) 和**蒙皮 (skinning)**；

### 2.1 平均模版形状 (Mean Template Shape)

先定义一个在 T-pose 下的平均模板，可以认为它是一个基模板，后续基于体格和姿态的混合成形都是在这个集模板上进行参数的变化。这个模板是通过统计大量的真实人体 mesh，得到的均值形状，由 $N=6890$ 个**顶点 (vertex)** 和 13776 个**面片 (mesh)** 组成。

![Fig. 2: 平均模板的 mesh，混合权重用颜色表示，关节用白点表示](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hym0vq.png)

### 2.2 基于体格的混合成形 (Shape Blend Shapes)

基于体格的混合成形就是在平均模板的基础上，加上基于体格的混合形状函数的偏移，形成新的 shape。这一步主要是用于改变人物的高矮胖瘦等体格特征，每个体格参数 $\beta$ 可以控制一项体格特征，具体的可视化可以参考[SMPL模型Shape和Pose参数](https://wap.sciencenet.cn/blog-465130-1177111.html)。

![Fig. 3: 在平均模板上加上基于形状的偏移并且预测关节](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/3k6z3u.png)

### 2.3 基于姿态的混合成形 (Pose Blend Shapes)

不同的 pose 也会改变人物的 shape，比如弯腰的时候肚子上的肉会压缩，视觉上可能会显得变大。所以先把某一帧的 pose 导致的 shape 的改变加到 T-pose 下。

![Fig. 4: 姿态对 T-pose 下的 shape 的影响](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/f2actb.png)

### 2.4 蒙皮 (Skinning)

最后通过线性混合蒙皮 LBS，将 T-pose 下的模型蒙皮到对应的 pose 下。



![Fig. 5: 蒙皮后的模型](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/tmpmmi.png)

## 3 模型中的公式

首先要明确一点，无论是基于体格的混合成形还是基于姿态的混合成形，都是在求与平均模板的**偏移 (offset)**，求出来的偏移都是要加上平均模板上的顶点位置，才是最终的顶点位置。

### 3.1 基于体格的混合成形 (Shape Blend Shapes)

$$
\begin{equation}
B_S(\vec\beta;\mathcal{S})=\sum_{n=1}^{\lvert\vec\beta\rvert}\beta_n\mathbf{S}_n
\tag{1}
\end{equation}
$$

- $\vec\beta=[\beta_1,...,\beta_{10}]^T$

- $\lvert\vec\beta\rvert=10$ 表示体格参数的个数

- $\mathbf{S}_n\in\R^{3N}$​  表示体格的 PCA 基

- $\mathcal{S}=[\mathbf{S}_1,...,\mathbf{S}_{10}]\in\R^{3N\times\lvert\vec\beta\rvert}$​ 表示体格的 PCA 基矩阵

用公式 (1) 就能求出不同体格对于 shape 的偏移。

### 3.2 骨骼点位置估计

当经过基于体格的混合成形后，骨骼点的位置也会发生变换，不再是平均模板下的骨骼位置，因此需要对骨骼点进行位置估计，骨骼点的位置由它本身最为接近的若干个 mesh 的端点加权决定。
$$
\begin{equation}
J(\vec\beta;\mathcal{J},\bar{\mathbf{T}},\mathcal{S})=\mathcal{J}(\bar{\mathbf{T}}+B_S(\vec\beta;\mathcal{S}))
\tag{2}
\end{equation}
$$

- $\mathcal{J}\in\R^{3N\times 3K}$ 骨骼点位置估计矩阵

![Fig. 6: 骨骼点位置估计的可视化](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/890tuo.png)

### 3.3 基于姿态的混合成形 (Pose Blend Shapes)

本文采用**轴角 (Axis-angle)** 表示旋转，$\vec\omega=(x,y,z)$ 表示以 $\bar{\omega}=\frac{\vec\omega}{\lVert\vec\omega\rVert}$ 为旋转轴，旋转 $\lVert\vec\omega\rVert$ 度。原文中姿态参数 $\vec\theta=[\vec\omega_0^T,...,\vec\omega_{23}^T]^T$ 表示总共24个关节 (0 号是根节点，1 ~ 23 是关节点) 关于其父节点的旋转，总共有 $3 \times 23 + 3 = 72$ 个参数。
$$
\begin{equation}
\exp(\vec\omega_j)=\mathcal{I}+\hat{\bar{\omega}}_j\sin(\lVert\vec\omega_j\rVert)+\hat{\bar{\omega}}_j^2\cos(1-\lVert\vec\omega_j\rVert)
\tag{3}
\end{equation}
$$
这个公式叫做 Rodrigues 公式，论文中是错的，原作者后面也进行了勘误。通过 Rodrigues 公式可以将轴角式转换成旋转矩阵，同时每个关节点参数也由原来的 3 个变成了旋转矩阵的 9 个。
$$
\begin{equation}
B_P(\vec\theta;\mathcal{P})=\sum_{n=1}^{9K}(R_n(\vec\theta)-R_n(\vec\theta^*))\mathbf{P}_n
\tag{4}
\end{equation}
$$

- $R(\vec\theta):\R^{\lvert\vec\theta\rvert}\mapsto\R^{9K}$ 表示 Rodrigues 公式，参数个数变为 $23 \times 9 = 207$ 个
- $\mathbf{P}_n\in\R^{3N}$ 表示姿态的 PCA 基
- $\mathcal{P}=[\mathbf{P}_1,...,\mathbf{P}_{207}]\in\R^{3N\times 9K}$ 表示姿态的 PCA 基矩阵

因为每个 pose 都是从 T-pose 变换过去的，如果想要保持线性，那就必须把 T-pose 下的旋转给减掉，这样才是相对于 T-pose 下的变换。


### 3.4 线性混合蒙皮LBS (Linear Blend Skinning)

$$
\begin{equation}
\mathbf{t}'_i=\sum_{k=1}^Kw_{k,i}G'_k(\vec\theta,\mathbf{J})\mathbf{t}_i
\tag{5}
\end{equation}
$$

- $\mathbf{t}_i$ 表示第 $i$ 个顶点蒙皮前的位置

- $\mathbf{t}'_i$ 表示第 $i$ 个顶点蒙皮后的位置

- $w_{k,i}$ 表示第 $k$ 个关节对第 $i$ 个顶点的蒙皮权重，是混合权重矩阵 $\mathcal{W}$ 中的一个元素

- $G'_k(\vec\theta,\mathbf{J})$ 表示从标准姿态到当前姿态的仿射变换矩阵。

对于 LBS 的更详细的介绍可以看[这篇文章](https://yunyang1994.gitee.io/2021/08/21/三维人体模型-SMPL-A-Skinned-Multi-Person-Linear-Model/)。

在经过 3.1、3.2 和 3.3 的之后，公式 (5) 可以进一步写为：
$$
\begin{equation}
\mathbf{t}'_i=\sum_{k=1}^Kw_{k,i}G'_k(\vec\theta,J(\vec\beta;\mathcal{J},\bar{\mathbf{T}},\mathcal{S}))\mathbf{t}_{P,i}(\vec\beta,\vec\theta;\bar{\mathbf{T},\mathcal{S},\mathcal{P}})
\tag{6}
\end{equation}
$$
其中
$$
\begin{equation}
\mathbf{t}_{P,i}(\vec\beta,\vec\theta;\bar{\mathbf{T},\mathcal{S},\mathcal{P}})=\bar{\mathbf{t}}_i+\sum_{m=1}^{\lvert\vec\beta\rvert}\beta_m\mathbf{s}_{m,i}+\sum_{n=1}^{9K}(R_n(\vec\theta)-R_n(\vec\theta^*))\mathbf{p}_{n,i}
\tag{7}
\end{equation}
$$

- $\bar{\mathbf{t}}_i$ 表示平均模板上的第 $i$ 个顶点蒙皮前的位置

公式 (7) 就是对平均模板进行基于体格的混合成形和基于姿态的混合成形后的 shape，也就是加偏移的过程。

## Reference

[SMPL: A Skinned Multi-Person Linear Model](https://files.is.tue.mpg.de/black/papers/SMPL2015.pdf)

[人体动作捕捉与SMPL模型 (mocap and SMPL model)](https://zhuanlan.zhihu.com/p/158700893)

[三维人体动捕模型 SMPL：A Skinned Multi Person Linear Model](https://yunyang1994.gitee.io/2021/08/21/三维人体模型-SMPL-A-Skinned-Multi-Person-Linear-Model/)

[基于SMPL的三维人体重建-SMPL模型的计算与构建（3）](https://zhuanlan.zhihu.com/p/458868557?utm_id=0)

[SMPL模型Shape和Pose参数](https://wap.sciencenet.cn/blog-465130-1177111.html)

[SMPL模型学习](https://www.cnblogs.com/sariel-sakura/p/14321818.html)

[SMPL: A Skinned Multi-Person Linear Model论文解读](https://blog.csdn.net/JerryZhang__/article/details/103478265?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-103478265-blog-127206953.235%5Ev43%5Epc_blog_bottom_relevance_base1&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-103478265-blog-127206953.235%5Ev43%5Epc_blog_bottom_relevance_base1)

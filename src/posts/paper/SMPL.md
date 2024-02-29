---
date: 2024-02-27
category: 论文
tag:
  - Paper
  - SMPL
title: SMPL: A Skinned Multi-Person Linear Model
order: 4
---

## SMPL: A Skinned Multi-Person Linear Model

[项目地址](https://smpl.is.tue.mpg.de)

SIGGRAPH Asia 2015

### 1 SMPL模型概述

SMPL 是一种基于顶点的蒙皮模型，能准确表现自然人体姿势中的各种体形。简单来说就是可以表现各种姿态下不同高矮胖瘦的人。SMPL 分别用形状参数（shape parameters）来控制高矮胖瘦，用姿态参数（pose parameters）来控制不同的姿态，并且这些控制都是线性的。SMPL 模型包含 6890​ 个顶点和 24 个关节（23 个关节点 + 1 个根节点）。

![Fig. 1：SMPL模型的24个关节](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ps9e7y.png)



#### 1.1 SMPL中的参数

为了方便之后的讲解先把SMPL中的所有参数先列出来，具体含义之后会讲解：

$N$ 6890 个顶点

$K$ 23 个关节（不包括根节点）

$\bar{T}\in\R^{3N}$ 人体平均模型

$\mathcal{W}\in\R^{N\times K}$ 混合权重（blend weights）矩阵

$\vec\beta\in\R^{10}$ 形状参数（shape parameters）

$\vec\theta\in\R^{72}$ 姿态参数（pose parameters），$23 \times 3 + 3 = 72$（要加上根节点）

$\vec\theta^*$​​ 标准姿态（canonical pose \ rest pose \ T-pose \ zero pose）下的姿态参数

$J(\vec\beta):\R^{\lvert\vec\beta\rvert}\mapsto\R^{3K}$​ 骨骼点位置估计函数（joint location predict function）

$B_S(\vec\beta):\R^{\lvert\vec\beta\rvert}\mapsto\R^{3N}$​ 混合形状函数（blend shape function）

$B_P(\vec\theta):\R^{\lvert\vec\theta\rvert}\mapsto\R^{3N}$​ 姿态混合形状函数（pose-dependent blend shape function）

$M(\vec\beta,\vec\theta;\bar{T},\mathcal{W},\mathcal{S},\mathcal{J},\mathcal{P}):\R^{\lvert\vec\theta\rvert\times\lvert\vec\beta\rvert}\mapsto\R^{3N}$ SMPL最终的一个方程，根据形状和姿态参数，映射到对应形状和姿态的顶点集。分号前的 2 个参数是人工指定的，分号后的 5 个参数是通过学习得到的，本文都采用这种格式。

- $\bar{T}$ 人体平均模型
- $\mathcal{W}$​ 混合权重矩阵
- $\mathcal{S}$ 形状的 PCA 基
- $\mathcal{J}$ 骨骼点位置估计矩阵
- $\mathcal{P}$ 先简单理解为姿态的 PCA 基

SMPL 模型最终就是要学习这 5 个参数。



### 2 Pipeline

SMPL 模型可以分为 4 个阶段：平均模版形状（mean template shape），基于形状的混合成形（shape blend shapes），基于姿态的混合成形（pose blend shapesy）和蒙皮（skinning）；

#### 2.1 平均模版形状（Mean Template Shape）

先定义一个在 T-pose 下的平均模板，可以认为它是一个基模板，后续基于形状和姿态的混合成形都是在这个集模板上进行参数的变化。这个模板是通过统计大量的真实人体 mesh，得到的均值形状，由 $N=6890$ 个顶点（vertex）和 13776 个面片（mesh）组成。

![Fig. 2：平均模板的 mesh，混合权重用颜色表示，关节用白点表示](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hym0vq.png)

#### 2.2 基于形状的混合成形（Shape Blend Shapes）

基于形状的混合成形就是在平均模板的基础上，加上混合形状函数的偏移，形成新的 shape。这一步主要是用于改变人物的高矮胖瘦等特征，每个形状参数 $\beta$ 可以控制一项特征，具体的可视化可以参考[SMPL模型Shape和Pose参数](https://wap.sciencenet.cn/blog-465130-1177111.html)。

![Fig. 3：在平均模板上加上基于形状的偏移并且预测关节](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/3k6z3u.png)

#### 2.3 基于姿态的混合成形（Pose Blend Shapes）

不同的 pose 也会改变人物的 shape，比如弯腰的时候肚子上的肉会压缩，视觉上可能会显得变大。所以先把某一帧的 pose 导致的 shape 的改变加到 T-pose 下。

![Fig. 4：姿态对 T-pose 下的 shape 的影响](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/f2actb.png)

#### 2.4 蒙皮（Skinning）



![Fig. 5：蒙皮后的模型](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/tmpmmi.png)


### 3 模型中的公式

#### 3.1 混合形状函数（Blend Shape Function）



#### 3.2 骨骼点位置估计

#### 3.3 线性混合蒙皮LBS（Linear Blend Skinning）

$$
\begin{equation}
\bar{\mathbf{t}}'_i=\sum_{k=1}^Kw_{k,i}G'_k(\vec\theta,\mathbf{J})\bar{\mathbf{t}}_i
\tag{1}
\end{equation}
$$

$\bar{\mathbf{t}}_i$ 表示第 $i$ 个顶点蒙皮前的位置；$\bar{\mathbf{t}}'_i$ 表示第 $i$ 个顶点蒙皮后的位置；$w_{k,i}$ 表示第 $k$ 个关节对第 $i$ 个顶点的蒙皮权重，是混合权重矩阵 $\mathcal{W}$ 中的一个元素；$G'_k(\vec\theta,\mathbf{J})$ 表示从标准姿态到当前姿态的仿射变换矩阵。对于 LBS 的更详细的介绍可以看[这篇文章](https://yunyang1994.gitee.io/2021/08/21/三维人体模型-SMPL-A-Skinned-Multi-Person-Linear-Model/)。

## Reference

[SMPL: A Skinned Multi-Person Linear Model](https://files.is.tue.mpg.de/black/papers/SMPL2015.pdf)

[人体动作捕捉与SMPL模型 (mocap and SMPL model)](https://zhuanlan.zhihu.com/p/158700893)

[三维人体动捕模型 SMPL：A Skinned Multi Person Linear Model](https://yunyang1994.gitee.io/2021/08/21/三维人体模型-SMPL-A-Skinned-Multi-Person-Linear-Model/)

[基于SMPL的三维人体重建-SMPL模型的计算与构建（3）](https://zhuanlan.zhihu.com/p/458868557?utm_id=0)

[SMPL模型Shape和Pose参数](https://wap.sciencenet.cn/blog-465130-1177111.html)

[SMPL模型学习](https://www.cnblogs.com/sariel-sakura/p/14321818.html)

[SMPL: A Skinned Multi-Person Linear Model论文解读](https://blog.csdn.net/JerryZhang__/article/details/103478265?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-103478265-blog-127206953.235%5Ev43%5Epc_blog_bottom_relevance_base1&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-103478265-blog-127206953.235%5Ev43%5Epc_blog_bottom_relevance_base1)

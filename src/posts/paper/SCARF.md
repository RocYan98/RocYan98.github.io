---
date: 2024-03-29
category: 论文
tag:
  - Paper
  - SCARF
  - Reconstructing
  - Avatar
  - Cloth Simulation
title: SCARF-论文笔记
order: 10
---

## SCARF: Capturing and Animation of Body and Clothing from Monocular Video

[项目地址](https://yfeng95.github.io/scarf/)

Siggraph Asia 2022

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143591.png)

## Abstract

尽管最近的研究表明，从单张图像、视频或一组三维扫描图像中提取穿衣三维人体模型的工作取得了进展，但仍存在一些局限性。大多数方法使用整体表示法对身体和服装进行联合建模，这意味着在虚拟试穿等应用中无法将服装和身体分开。其他方法则将人体和服装分开建模，但需要从三维/四维扫描仪或物理模拟中获得的大量三维穿衣人体 mesh 进行训练。我们的见解是，身体和服装有不同的建模要求。基于 mesh 的参数化三维模型可以很好地表示人体，而隐式表示法和神经辐射场则更适合捕捉服装中的各种形状和外观。基于这一观点，我们提出了 SCARF (Segmented Clothed Avatar Radiance Field)，这是一种将基于 mesh 的人体与神经辐射场相结合的混合模型。将网格与可微分光栅化器相结合集成到体渲染中，使我们能够直接从单目视频中优化 SCARF，而无需任何 3D 监督。混合建模使 SCARF 能够：(i) 通过改变身体姿势 (包括手部衔接和面部表情) 为穿着衣服的 avatar 制作动画；(ii) 合成 avatar 的新视图；(iii) 在虚拟试穿应用中实现 avatar 之间的服装转移。我们证明，与现有方法相比，SCARF 重建的服装具有更高的视觉质量，服装会随着身体姿势和体形的变化而变形，而且服装可以在不同的 avatar 之间成功转移。

## Introduction

概括来说，本文使用 SMPL-X 来表示人体，使用 NeRF 来表示衣服。分为四步：

- NeRF 表示的是标准空间中的衣服，所以首先要估计图片中的人体的 pose，用估计出来的参数将观测空间中衣服的点变换到标准空间。估计 pose 用的 PIXIE 的方法，但是不精确，作者对其进行了优化；
- SMPL-X 的参数无法精确适用于服装的变换，因此本文还学习了一个非刚体变换场来修正服装与身体的偏差；
- 渲染的时候需要考虑到服装和人体的遮挡，所以作者写了一个自己的体渲染方法；
- 要想将身体和衣服分开，必须防止 NeRF 捕捉到包括身体在内的所有图像信息。作者使用衣服分割 mask 来惩罚衣服以外的区域；

## Method

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143763.png)

### 混合表示 (Hybrid Representation)

**身体表示 (Body representation)**：模型定义如下：
$$
M({\beta},{\theta},{\psi},O)=\mathrm{LBS}(T_P({\beta},{\theta},{\psi},O),J({\beta}),{\theta},{\mathcal{W}})
\tag{1}
$$

- $\beta \in \R^{|\beta|}$ 是 SMPL-X 的 shape 参数
- $\theta \in \R^{3n_k+3}$ 是 SMPL-X 的 pose 参数，$n_k$ 表示关节点的数量
- $\psi \in R^{|\psi|}$ 是 SMPL-X 的 facial 参数
- $O \in \R^{n_v\times 3}$  是一组捕获局部几何细节的顶点位移，$n_v$​ 表示顶点数量
- $J(\cdot) \in R^{n_k\times3}$ 表示关节点的回归器
- $\mathcal{W}\in\R^{n_k\times n_v}$​  表示 LBS 的权重

公式 (1) 中的 $T_P(\cdot)$ 定义如下：
$$
T_P({\beta},{\theta},{\psi},O)=\mathbf{T}+O+B({\beta},{\theta},{\psi})
\tag{2}
$$

- $\mathbf{T} \in \R^{n_v\times3}$  是 SMPL-X 在 rest pose 下的模板
- $B(\beta,\theta,\psi)=B_S(\beta;\mathcal{S})+B_P(\theta;\mathcal{P})+B_E(\psi;\mathcal{E})$​ 分别表示基于体格的混合形状函数，基于姿态的混合形状函数和基于表情的混合形状函数

最终 $\mathbf{v}_i = M_i(\beta,\theta,\psi,O)\mathbf{t}_i$ ($\mathbf{v}_i$ 和 $\mathbf{t}_i$ 都是齐次坐标)，$M_i(\cdot) \in \R^{4\times4}$ 为：
$$
M_i(\beta,\theta,\psi,O)=(\sum_{k=1}^{n_k}w_{k,i}G_k(\theta,\mathbf{J}))\begin{bmatrix}
   \mathrm{I} & o_i+B_i(\beta,\theta,\psi) \\
   0^T & 1
\end{bmatrix}
\tag{3}
$$

- $G_k(\theta,\mathbf{J}) \in R^{4\times4}$​  表示关节 k 在世界坐标系下的变换矩阵
- $o_i$ 和 $B_i(\cdot)$ 分别是 $O$ 和 $B(\cdot)$ 的元素

为了获取更多的几何细节，对 SMPL-X 进行上采样，得到 $n_v=38705$ (论文里是 38703，但实际上是 38705) 个顶点和 $n_t=77336$ 个面片。上采样的算法如下：

- 首先将 SMPL-X 的模板转换为四边形的版本
- 然后利用每个四边形的重心坐标，对模板的参数也进行上采样

上采样后还是用三角 mesh 来表示模型，四边形的版本只是用来上采样。为了增加模型的可变形，还要学习一个位移，分别用两个隐式模型 $F_d:t\to o$ 和 $F_t:t\to c$ 来预测模板 $T$ 上每个顶点 $t$ 的位移和颜色。

**服装表示 (Clothing representation)**：用 NeRF $F_c:x^c\to(c,\sigma)$ 表示标准空间下的服装。~~因为只有标准空间下的衣服表示，所以还要学一个从观测空间到标准空间的非刚体变换函数：~~ 因为直接使用 LBS 将观测空间中的点变换到标准空间还会有偏差，所以还需要学习一个非刚体变换函数来修正偏差：
$$
F_m(\mathbf{x}^c,\mathbf{v}^p_{nn(\mathbf{x})})\to d^c
\tag{4}
$$

- $\mathbf{x}^c$​ 表示标准空间的一个点 
- $\mathbf{x}$ 表示观测空间的一个点
- $\mathbf{v}^p_{nn(x)}$ 表示观测空间的身体表示中距离 $\mathbf{x}$​ 最近的那个点

预测结果 $d^c$ 是偏移量，因此最后输入 $F_c$ 的是 $\mathbf{x}^c+\mathbf{d}^c$。

### 标准化 (Canonicalization)

$$
\sum_{v_i\in\mathcal{N}(\mathbf{x})}\frac{\omega_i(\mathbf{x})}{\omega(\mathbf{x})}M_i(0,\theta^c,0,0)(M_i(\beta,\theta,\psi,O))^{-1}\mathbf{x}\rarr \mathbf{x}^c
\tag{5}
$$

其中：
$$
\omega_i(\mathbf{x})=\exp(-\frac{||\mathbf{x}-\mathbf{v}_i||_2||w_{nn(\mathbf{x})}-w_i||_2}{2\sigma^2})\\
\omega(\mathbf{x})=\sum_{\mathbf{v}_i\in\mathcal{N}(\mathbf{x})}\omega_i(\mathbf{x})
\tag{6}
$$

- $\mathcal{N}(\mathbf{x})$ 表示在 $\mathrm{V}$ 中距离 $\mathbf{x}$ 最近的点集，$\mathrm{V}$ 表示观测空间中 body mesh 的点集

### 损失函数

**重建损失**：
$$
L_{recon}=\lambda_{vol}L_{\delta}(\mathcal{R}_v-I)+\lambda_{mrf}L_{mrf}(\mathcal{R}_v-I)
\tag{7}
$$

- $\mathcal{R}_v$ 和 $I$ 分别表示渲染出来的图像和 GT
- $L_\delta$ 和 $L_{mrf}$​ 分别表示 Huber 损失和 ID-MRF 损失

Huber 损失和 ID-MRF 损失分别是用来约束整体和细节部分的重建效果。

**衣服 segentation 的损失**：
$$
    L_{clothing}=\lambda_{clothing}||S_v-S_c||_1
\tag{8}
$$

- $S_v$ 和 $S_c$ 分别表示 NeRF mask 和 GT 的衣服 mask

确保 NeRF 只表示衣服的部分。

**人体损失**：

穿衣人体 mask 损失：
$$
L_{sihouette}=\lambda_{silhouette}L_{\delta}(\mathcal{R}^s_m(M,p)-S)
\tag{9}
$$

- $\mathcal{R}^s_m(M,p)$ 表示渲染后的穿衣人体 mask
- $S$​​ 表示 GT 的穿衣人体 mask

人体 mask 损失：
$$
L_{bodymask}=\lambda_{bodymask}L_\delta(S_b\odot(\mathcal{R}^s_m(M,p)-S_b))
\tag{10}
$$

- $S_b$ 表示身体 mask
- $\odot$ 表示[哈达玛积](https://www.zhihu.com/search?q=哈达玛积&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2759730412})

人体光度损失：
$$
L_{skin}=\lambda_{skin}L_\delta(S_b\odot(\mathcal{R}_m(M,c,p)-I))
\tag{11}
$$
- $\mathcal{R}_m(M,c,p)$ 表示渲染后穿衣人体的图像

(10) 和 (11) 两个 loss 是为了解决更换人体时出现的瑕疵（特别是宽松的衣服）。

人体范围损失：
$$
L_{inside}=\lambda_{inside}L_{\delta}(ReLU(R^s_m(M,p)-S_c))
\tag{12}
$$

- $S_c$​ 表示衣服 mask

约束人体的范围在衣服 mask 以内

皮肤颜色损失：
$$
L_{skininside}=\lambda_{skininside}L_\delta(S_c\odot(\mathcal{R}_m(M,c,p)-C_{hand}))
\tag{13}
$$

- $C_{hand}$ 表示人手上顶点的颜色均值

约束被衣服遮挡部分人体和手之间的颜色

正则化：
$$
L_{reg}=\lambda_{edge}L_{edge}(M)+\lambda_{offset}||O||_2
\tag{14}
$$

- $L_{edge}$​ 表示有偏移和没有偏移的优化身体 mesh 之间的相对边缘损失

所以人体损失表示为：$L_{body}=L_{sihouette}+L_{bodymask}+L_{skin}+L_{skininside}+L_{inside}+L_{reg}$​

整体的损失函数为：$L=L_{recon}+L_{clothing}+L_{body}$​

## Reference

[[1]Capturing and Animation of Body and Clothing from Monocular Video](https://arxiv.org/abs/2210.01868)

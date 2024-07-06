---
date: 2024-05-20
category: 论文
tag:
  - Paper
  - Cloth Simulation
  - PBNS
  - Mesh
title: PBNS-论文笔记
order: 5
---

## PBNS: Physically Based Neural Simulator for Unsupervised Garment Pose Space Deformation

[项目地址](https://hbertiche.github.io/PBNS)

TOG 2021

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261142057.png)

## Abstract

我们提出了一种通过深度学习自动获取服装 **pose 空间变形 (Pose Space Deformation, PSD)** 的方法。经典方法依赖基于**物理的模拟 (Physically Based Simulations, PBS)** 来制作服装动画。这是一种通用的解决方案，只要对空间和时间进行足够精细的离散化，就能获得高度逼真的效果。然而，它们的计算成本很高，而且任何场景的修改都需要重新模拟。使用 PSD 的**线性混合蒙皮 (LBS)** 为 PBS 提供了一个轻量级的替代方案，不过它需要大量数据来学习适当的 PSD。我们建议使用深度学习，并将其表述为隐式 PBS，以无监督的方式学习受限场景中的真实布料 pose 空间变形：穿衣人体。此外，我们还展示了在与几个序列的 PBS 相当的时间内训练这些模型的可能性。据我们所知，我们是第一个提出布料神经模拟器的人。虽然该领域基于深度的方法正成为一种趋势，但这些模型对数据的需求量很大。此外，作者通常会提出复杂的公式，以便更好地从 PBS 数据中学习褶皱。监督学习会导致物理上不一致的预测，需要使用碰撞解法。同时，对 PBS 数据的依赖限制了这些解决方案的可扩展性，而它们的表述方式又阻碍了其适用性和兼容性。通过提出一种无监督方法来学习 LBS 模型的 PSD，我们克服了这两个缺点。研究结果表明，在动画中保持了服装一致性以及与姿势相关的服装褶皱。我们的解决方案非常高效，可以处理多层布料，允许在无监督的情况下调整服装尺寸，并可轻松应用于任何自定义 3D 数字人。

## Introduction

主要贡献：

- 无监督 PSD 学习：通过在模型训练过程中强化物理一致性，我们消除了对 PBS 或扫描数据的依赖。因此，这种方法可应用于任意数量的服装、体形和姿势，而无需为获取它们的数据付出计算成本。
- 高效地训练、部署和兼容性：当前文献中基于深度学习的相关方法提出了复杂的公式，以获得真实的结果。这阻碍了训练过程和后期部署。我们提出的方法能生成 LBS 模型的混合形状，这是 3D 动画的标准，因此它能自动兼容所有图形引擎，提高了方法的适用性。
- 物理一致性：基于学习的相关方法无法预测无穿透的服装，因此需要进行碰撞处理才能用于实际应用。这就影响了实时性能，增加了调整这些解决方案所需的工程工作量，并消除了模型的可区分性，从而影响了它们在研究中的适用性。其中一些工作在训练过程中使用碰撞处理 loss 来缓解这一问题，但身体穿透现象依然存在。我们将展示这与监督训练的关系。另一方面，即使在极端的未知姿势下，PBNS 也能生成无穿透预测，从而有效地消除了后处理的需要。物理一致性不仅限于碰撞，还包括表面质量。受质量弹簧质点模型的启发，我们在预测中强制执行边缘和弯曲约束。这确保了服装没有扭曲的边缘 (这会产生纹理假象) 和光滑的表面。
- 多层服装之间的交互：我们首次提出了一种基于学习的方法，能够明确处理多层服装之间的交互。正因为如此，PBNS 是目前唯一一种能够将多层服装制作成完整复杂服装动画的方法。

## Method

### PBS Data and Physical Consistency

这里在说基于 PBS 的有监督学习算法的缺点，就不细讲。

### Formulation

本文的目标是给出一个 LBS 模型的 pose，获取服装的 PSD，以便同时为服装和人体制作动画。给定 rest pose 下的服装模板 $\mathbf{T}\in\R^{N\times 3}$，服装 PSD 的每个顶点定义为：
$$
t_i^{\prime}=\sum_k^K w_{k, i} G_k(\theta, J)\left(t_i+d t_i(\theta)\right)
\tag{1}
$$

- $J\in\R^{K\times3}$ 表示关节点
- $w_{k,i}$ 表示顶点 $i$ 和关节点 $k$ 之间的混合权重
- $G_k$ 是第 k 个关节点的线性变换矩阵
- $\theta$ 是轴角式表示的每个关节点相对于其父节点的旋转
- $t_i$ 和 $dt_i$ 分别表示 rest pose 下第 $i$​ 个服装顶点和该顶点在 pose 空间下的变形

需要为衣服找一个有效的混合蒙皮权重 $\mathcal{W}\in\R^{N\times K}$ 和 PSD 的映射 $f:\theta\to\{d\mathbf{T}|\mathbf{T}_\theta=\mathbf{T}+d\mathbf{T}\}$，$\mathbf{T}_\theta\in\R^{N\times3}$ 表示标准空间下与人体对齐且不发生穿透的衣服顶点。

**Blend Weight**：服装顶点的蒙皮权重用距离服装最接近的人体上的点的蒙皮权重，对于裙子这类宽松的服装则用网络对蒙皮权重进行优化。

**PSD**：本文提出首先通过神经网络 $\mathbf{X}=f_{\mathbf{X}}(\theta)$ 来获取 pose 序列的高阶 embedding，然后用这些 embedding 和 PSD 矩阵 $\mathbf{D} \in \mathbb{R}^{|\mathbf{X}| \times N \times 3}$ 来获取最后的变形。这样可以建模从 $\theta$ 到 $dT$ 的任意非线性映射，还可以控制矩阵 $\mathbf{D}$ 的大小。

### Architecture

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261142681.png)

本文用 4 层的 MLP 来表示 $f_\mathbf{X}(\theta)$，通过给定 $\theta$ 来得到最后服装的变形 $\mathbf{V}_\theta$：
$$
\mathbf{V}_\theta=w(\mathbf{T}+f_\mathbf{X}(\theta)\cdot\mathbf{D},\theta,\mathcal{W})
\tag{2}
$$

- $W(\cdot,\theta,\mathcal{W})$ 是蒙皮方程
- $f_\mathbf{X}(\theta)\cdot\mathbf{D}$ 计算为 $\sum_i^{|\mathbf{X}|}f_\mathbf{X}(\theta)_i\mathbf{D}_i$

这个方法的整体 Pipeline 如图 2 所示，PSD 矩阵 $\mathbf{D}$ 也是通过学习得到的。

### Training

物理系统是通过作用力 $\mathbf{F}=-\nabla U$ (其中 $U$​ 是整个系统的势能) 来进行隐式优化，本文则是将势能定义为 loss 来对神经网络进行优化。通过这种方式，模型就能学习到预测一致、能量最小化且稳定的结果。将全部的 loss (或者也可以认为是势能) 定义为：
$$
\mathcal{L}=\mathcal{L}_{cloth}+\mathcal{L}_{collision}+\mathcal{L}_{gravity}+\mathcal{L}_{pin}
\tag{3}
$$

- $\mathcal{L}_{cloth}$ 表示衣服的弹簧势能，来指导模型预测服装一致的 mesh
- $\mathcal{L}_{collision}$ 表示身体与衣服的穿透所产生的势能，其梯度会将衣服顶点推到不穿透的位置
- $\mathcal{L}_{gravity}$ 表示重力势能
- $\mathcal{L}_{pin}$ 来限制所选顶点的变形 (这是受到 PBS 的启发)

**Cloth consistency**：
$$
\mathcal{L}_{cloth}=\lambda_e\mathcal{L}_{edge}+\lambda_b\mathcal{L}_{bend}=\lambda_e||E-E_\mathbf{T}||^2+\lambda_b\Delta(\mathbf{N})^2
\tag{4}
$$

- $E\in\R^{N_E}$ 是预测出来的边的长度，$E_\mathbf{T}\in\R^{N_E}$ 是服装上其余边的长度 ($N_E$ 是边的数量)
- $\mathbf{N}\in\R^{N_F\times3}$ 是面的法向量 ($N_F$ 是面的数量)
- $\Delta(\cdot)$ 是 Laplace-Beltrami 算子

$\mathcal{L}_{edge}$ 保证衣服不会过度拉伸或者压缩，它被定义为系统的弹性势能，其梯度就像力一样。$\mathcal{L}_{bend}$ 来保证衣服的局部光滑。

**Collisions**：
$$
\mathcal{L}_{\text {collision }}=\lambda_c \sum_{(i, j) \in A} \min \left(\mathbf{d}_{j, i} \cdot \mathbf{n}_j-\epsilon, 0\right)^2
\tag{5}
$$

- $(i,j)\in A$ 表示服装上和身体上的最相邻顶点的对应关系，$A$ 是这些关系的集合；
- $\mathbf{d}_{j,i}$ 表示身体上第 $j$ 个顶点指向衣服上第 $i$​ 个顶点的向量
- $\mathbf{n}_j$ 是第 $j$ 个顶点的法向量
- $\epsilon$ 是提升鲁棒性的阈值，用来控制服装和人体之间的距离，取 4 mm

**Cloth-to-cloth**：简单一句话概括就是迭代地对每一层服装应用公式 5。

**Gravity**：物理中重力势能 $U=mgh$，因为 $m$ 和 $g$ 是常量，可以把重力损失理解为 $\mathcal{L}_{gravity}=k\mathbf{V}_{\theta_z}$，换句话来说就是最小化衣服每个顶点的 $Z$ 坐标。

**Pinning**：对于某些服装，我们希望某些顶点不要移动。例如，随着训练的进行，下半身服装可能会因重力损失而掉落。我们希望限制腰部顶点的变形，使其保持在原来的位置。因此本文对每个顶点的变形 $dt$ 施加了 L2 损失：
$$
\mathcal{L}_{pin}=\lambda_{pin}\sum_ib_idt_i^2,
\tag{6}
$$

- 当顶点 $i$ 是固定的则 $b_i=1$ 否则 $b_i=0$

如果顶点完全不动则可能还会和身体发生穿透，所以固定的顶点也需要稍微发生一点移动，因此设定 $\lambda_{pin}=10$​ 。

将 $\mathcal{L}_{cloth}$ 和 $\mathcal{L}_{gravity}$ 看作是物理量，其对应的 loss 权重和织物的属性直接相关：杨氏模量表示弹性，质量表示重力。其余的 loss 则是对基层物理的简化。

## Reference

[[1]PBNS: Physically Based Neural Simulator for Unsupervised Garment Pose Space Deformation](https://dl.acm.org/doi/10.1145/3478513.3480479)

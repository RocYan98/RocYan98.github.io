---
date: 2024-09-29
category: 论文
tag:
  - Paper
  - Cloth Simulation
  - HOOD
  - Mesh
title: HOOD-论文笔记
order: 7
---

## HOOD: Hierarchical Graphs for Generalized Modelling of Clothing Dynamics

[项目地址](https://dolorousrtur.github.io/hood/)

CVPR 2023

![Fig. 1: Overview](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202410041405905.png)

## Abstract

我们提出了一种利用图神经网络、多层次信息传递和无监督训练的方法，以实现对现实服装动态的有效预测。现有的基于线性混合蒙皮的方法必须针对特定的服装进行训练，而我们的方法，称为HOOD，与体型无关，适用于紧身和宽松的服装以及自由流动的服装。此外，HOOD 可以处理拓扑结构 (例如，带有纽扣或拉链的服装) 和材料属性的变化。作为一个关键贡献，我们提出了一种分层的消息传递方案，该方案在保留局部细节的同时有效地传播刚性拉伸模式。我们的经验表明 HOOD 在数量上优于 baseline，并且仿真结果比 SOTA 更真实。

## Introduction

传统的物理仿真方法虽然能取得很好的效果，但是时间开销大，无法实现实时应用。基于深度学习的方法在紧身的衣服上表现不错，但是在宽松衣服上效果不好。并且只能对特定训练好的衣服有不错的效果，泛化能力差。本文提出了一个新的基于图神经网络 (GNNs) 来无监督地训练和预测服装动态的方法。通过 GNN 来推测局部运动，力和加速度之间的映射关系，因为预测的是局部的运动，因此提高了泛化能力。

GNN 通过局部变换和消息传递在网格中传播信号，但由于消息传递的步骤是有限的，信号传播范围被限制。这对服装仿真来说是个挑战，因为服装的弹性波会快速传播，如果信号传播不足，可能会导致布料看起来像橡胶一样过度拉伸。尽管增加消息传递的次数可以解决这个问题，但会导致计算时间增加，且由于网格分辨率不确定，很难预设合适的传递次数。

本文通过在不同分辨率之间交替进行消息传递，成功解决了布料模拟中快速传播波引起的长距离耦合问题。通过将全局和局部信息分开处理，它既提高了计算效率，又增强了对局部细节的捕捉。

本文的主要贡献：

- 可高效预测各种服装的物理真实动态运动
- 可泛化到训练期间未见的新服装类型和形状
- 可在运行时改变材料属性和服装尺寸
- 支持动态拓扑变化，如打开拉链或解开衬衫扣子

## Method

![Fig. 2: Pipeline](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202410081451205.png)

本文通过图神经网络将服装与仿真解耦学习布料的局部动态，通过分层消息传递能够有效地捕获布料的长距离耦合，最后利用基于物理的损失函数实现自监督训练。

### Background

HOOD 是建立在 [MeshGraphNets](https://arxiv.org/abs/2010.03409) 基础上的 GNN，网络训练好了之后就可以通过顶点当前的位置和速度预测出加速度，进而推进服装的 mesh。

#### Basic Structure

本文将服装的动态基于图来建模，图由服装 mesh 的顶点和边以及**身体边 (body edges)** 组成。

> 身体边的定义：每个服装顶点都找一个距离最近的身体上的点，这两点之间的距离如果小于阈值就是身体边。

顶点和边会赋予特征向量 $v_i$ 以及 $e_{ij}$ ($i$ 和 $j$ 是节点的坐标)。节点的特征向量由类型值 (服装或人体)、当前状态变量 (速度、法向量) 和物理属性 (质量) 组成。边的特征向量存储了两个节点之间的相对位置，既与当前状态有关，也与服装的标准几何形状有关。

#### Message Passing

为了使系统向前发展，本文在输入图上应用了 N 个信息传递步骤。在每一步中，边缘特征首先按以下方式更新：
$$
e_{ij}\leftarrow f_{v\rightarrow e}(e_{ij},v_i,v_j)
\tag{1}
$$

- $f_{v\rightarrow e}$ 表示一个 MLP

节点后续会根据入射边的特征的均质进行更新，表示为 $f_{e\rightarrow v}$：
$$
v_i\leftarrow f_{e\rightarrow v}(v_i,\sum_je^{body}_{ij},\sum_je_{ij})
\tag{2}
$$

- $f_{e\rightarrow v}$ 表示另一个 MLP
- $e^{body}_{ij}$ 表示身体边

虽然对所有节点使用相同的MLP，但每组边都由单独的MLP处理。在 N 个消息传递步骤之后，节点特征被传递到解码器 MLP 中以获得每个顶点的加速度，然后用于计算步骤结束的速度和位置。

#### Extensions for Clothing

为了能够模拟不同种类的布料以及多材质组合的服装，本文将每个节点和边的特征向量中添加了局部材质参数，包括：杨氏模量和泊松比 (这两个参数会被映射为 Lamé 参数 $\mu$ 和 $\lambda$) 来分别描述材料的拉伸抗性和区域保持性；弯曲系数 $k_{bending}$ 用来惩罚布料的折叠和褶皱；以及布料的密度来定义布料的重量。

### Hierarchical Message Passing

织物材料具有足够的刚度，因此施加在某一位置的力会迅速传遍整个服装。然而，当使用固定数量的信息传递步长时，在给定的时间步长内，力只能在有限的半径范围内传播。因此，如果信息传递步数太少，服装就会显得过于有弹性和橡胶一样。本文通过扩展 MeshGraphNets 来加速信号传播，从而解决了这一问题。为此，从平面输入图中构建了一个分层图表示法，并利用它在信息传递过程中加速信号传播。

#### Hierarchical Graph Construction



## Reference

[[1]HOOD: Hierarchical Graphs for Generalized Modelling of Clothing Dynamics](https://arxiv.org/abs/2212.07242)

[[2]Learning Mesh-Based Simulation with Graph Networks](https://arxiv.org/abs/2010.03409)


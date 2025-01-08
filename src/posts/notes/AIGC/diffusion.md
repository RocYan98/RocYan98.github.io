---
date: 2024-11-13
category: 学习笔记
tag:
  - diffusion
title: 贝叶斯
---

## 贝叶斯统计模型

### 几个基本的公式

先列出几个最基本的公式：

- 条件概率：$P(A|B)=\frac{P(AB)}{P(B)}$，事件 A 和 B 同时发生的概率相对于 B 发生的概率进行归一化，得到 B 发生是 A 发生的概率
- 乘法公式：$P(AB)=P(A|B)P(B)$，通过条件概率可以推出乘法公式
- 贝叶斯公式：$P(A|B)=\frac{P(B|A)P(A)}{P(B)}=\frac{P(B|A)P(A)}{P(B|A)P(A)+P(B|\bar{A})P(\bar{A})}$

::: details 贝叶斯公式推导

根据两个条件概率公式 $P(A|B)=\frac{P(AB)}{P(B)}$ 和 $P(B|A)=\frac{P(AB)}{P(A)}$ 可以得到：
$$
P(AB)=P(A|B)P(B)=P(B|A)P(A)
\tag{A}
$$

将公式 A 整理可得：
$$
P(A|B)=\frac{P(B|A)P(A)}{P(B)}
\tag{B}
$$
$P(B)$ 一般比较难以获取，所以可以进一步推导为 (这一步的详细推导过程可以参考[这篇文章](https://zhuanlan.zhihu.com/p/653382366))：
$$
\begin{split}
P(B) &=P(BA)+P(B\bar{A})\\
	&=P(B|A)P(A)+P(B|\bar{A})P(\bar{A})
\end{split}
\tag{C}
$$
将公式 C 代入公式 B：
$$
P(A|B)=\frac{P(B|A)P(A)}{P(B|A)P(A)+P(B|\bar{A})P(\bar{A})}
\tag{D}
$$
:::

### 概率和似然

- 概率：$P(X=x;\theta)$ 在已知参数 $\theta$ 的条件下， $x$ 发生的概率
- 似然：$L(\theta|x)=P(x;\theta)$ 表示给定样本 $x$，$\theta$ 是真实值的可能性
- 极大似然估计：找到一个参数，使观察到的数据在该参数下似然函数最大

可以简单理解为概率就是推理，极大似然估计就是训练。



## Reference

[[1]一文搞懂贝叶斯定理（原理篇）](https://zhuanlan.zhihu.com/p/653382366)

[[2]概率论公式汇总](https://zhuanlan.zhihu.com/p/721535637)

[[3]似然与概率的区别](https://www.zhihu.com/question/54082000/answer/145495695)

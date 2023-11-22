---
date: 2023-08-03
tag: PyTorch
category: PyTorch
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/rktisg.png
order: 2
---

# 广播机制

当两个 shape 不同的矩阵进行运算，当满足广播机制的条件时，就会把小的矩阵扩张成相同 shape 的矩阵，然后对两个矩阵相同的位置进行运算

## 广播机制的条件

- 两个张量都至少有一个维度，且不是 0 维
- 按从右往左看每一个张量的维度，两个维度需要满足以下任一条件：
  1. 这两个维度的大小相等
  2. 某个维度，一个张量有，一个张量没有
  3. 某个维度，两个张量都有，但有一个是 1

```python
x = torch.empty(5, 3, 4, 1)
y = torch.empty(   3, 1, 1)

# 对于 x 和 y 从右往左看
# 第 4 维满足 a
# 第 3 维满足 c
# 第 2 维满足 a
# 第 1 维满足 b
```

## 广播的过程

- 对于条件 a 无需处理

- 对于条件 b，先将其变为条件 c

- 对于条件 c，将两个维度变为相等

```python
# 广播后
x = torch.empty(5, 3, 4, 1)
y = torch.empty(5, 3, 4, 1)
```

## Reference

[Pytorch/Numpy中的广播机制（Broadcast）](https://www.syrr.cn/news/40121.html?action=onClick)

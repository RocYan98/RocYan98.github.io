---
date: 2023-08-15
tag: PyTorch
category: PyTorch
order: 3
---

# reshape 与 view 的区别

要搞清楚 reshape 和 view 的区别首先需要了解 tensor 在 PyTorch 中是怎么存储的。

## 1 Tensor 的存储方式

Tensor 是头信息区（Tensor）和数据区（storage）分开存储的，Tensor 的形状 size、步长 stride、数据的索引等信息都存储在头信息区，而数据是存放在数据区。可能多个 Tensor 是共用一个 storage 的，类似于多个头节点指向同一片数据区。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261223717.jpg)

可以通过`tensor.storage.data_ptr()`获取 tensor 的存储区的地址

```python
a = torch.tensor(range(6))
b = a[3:]
print(a.storage().data_ptr() == b.storage().data_ptr()) # 输出 True
```

注意不是用`tensor.data_ptr()`，这个函数返回的是该 tensor 第一个元素的地址，而不是存储区的地址。



##  2 Tensor 的 stride 属性

stride 是在指定维度（dim）中从一个元素跳到紧邻下一个元素所必需的步长。当没有参数传入时，stride() 返回由每个维度步长组成的一个元组。如果有整数参数传入，则返回该整数指定的维度的步长。

```python
a = torch.tensor([[4, 2, 5], [7, 6, 9]])
print(a.stride()) # 输出 (3, 1)
```



![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261223479.jpg)

有了之前关于[维度](dimension)的讲解，这里为什么 (3, 1) 应该比较好理解



## 3 视图（view）和副本

视图其实可以理解为引用，通过视图可以访问和操作原有数据，并且不会产生数据的拷贝，但会影响到原始数据。

与之对应的就是副本，副本是一个数据的完整的拷贝，如果我们对副本进行修改，它不会影响到原始数据，因为物理内存不在同一位置。



## 4 torch.Tensor.view()

官方文档里的描述：返回一个与原 Tensor 数据相同但是形状不同的 Tesnor，返回的 Tensor 与原始的 Tensor 共享存储区，且返回的 Tensor 必须与原始的 Tensor 的 size 和 stride 相兼容。（顺带提一句，PyTorch中`a.size()`和`a.shape`都能获取 a 的形状，`a.size(0)`和`a.shape[0]`都能获取 a 第 0 维的个数，`len(a)`是获取 a 第 0 维的个数）

怎么判断是否兼容呢？其实就是看 Tensor 的 stride 是否与矩阵的形状相吻合。还是以之前那个矩阵举例：

```python
a = torch.tensor([[4, 2, 5], [7, 6, 9]])
print(a)
print(a.stride())
# 输出
# tensor([[4, 2, 5],
#         [7, 6, 9]])
# (3, 1)

b = a.T
print(b)
print(b.stride())
# 输出
# tensor([[4, 7],
#         [2, 6],
#         [5, 9]])
# (1, 3)

print(a.storage().data_ptr() == b.storage().data_ptr()) # 输出 True
```

b 是 a 的转置，b 的 stride 应该为 (2, 1) 而不是 (1, 3)，因此 b 就不兼容（或者称不满足连续性）。同时可以看出 b 其实与 a 还是共享同一个 storage，并没有真的改变数据的存放顺序，只是改变了 b 的 stride而已。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261223503.jpg)

只有在满足连续性的前提下，才能用 view() 来改变 Tensor 的形状，否则就需要先使用 contiguous() 方法，这个方法会先复制一个副本，改变数据的存放顺序，使其满足连续性，之后就可以用 view() 改变形状。

```python
a = torch.tensor([[4, 2, 5], [7, 6, 9]])
b = a.T
b = b.contiguous()
print(b.stride()) # 输出(2, 1)
print(a.storage().data_ptr() == b.storage().data_ptr()) # 输出 False
```



## 5 torch.reshape()

`a.reshape()`与 view 类似，是将原 Tensor 转换成新的形状，只不过他更加强大，如果 Tensor 是连续的，那就和`a.view()`是等价的；如果不不连续，则会复制一个副本再改变形状，即和`a.contiguous().view()`是等价的。



## 6 总结

view 只适合对满足连续性条件（contiguous）的 Tensor 进行操作，而 reshape 同时还可以对不满足连续性条件的 tensor 进行操作，reshape 对满足连续性条件的 tensor，就相当于 view。



## Reference

[TENSOR VIEWS](https://pytorch.org/docs/stable/tensor_view.html)

[What's the difference between reshape and view in pytorch?](https://stackoverflow.com/questions/49643225/whats-the-difference-between-reshape-and-view-in-pytorch)

[PyTorch：view() 与 reshape() 区别详解](https://blog.csdn.net/Flag_ing/article/details/109129752)

[tensor的数据结构、storage()、stride()、storage_offset()](https://www.jianshu.com/p/ebd7f6395bf4)


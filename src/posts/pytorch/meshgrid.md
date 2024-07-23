---
date: 2024-07-23
tag: PyTorch
category: PyTorch
order: 4
---

# meshgrid 生成坐标网格

```python
torch.meshgrid(*tensors, indexing='ij')
```

- *tensors：任意数量的一维张量。这些张量定义了网格的每一个维度

- indexing：网格的索引方式。可以是 'xy' 或 'ij'

  - 'xy'：适合笛卡尔坐标系，其中第一个张量表示 x 轴，第二个张量表示 y 轴

  - 'ij'：适合矩阵索引，其中第一个张量表示行索引，第二个张量表示列索引

'xy' 和 'ij' 可以分别理解为如下坐标系：

![indexing](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407231000090.png)

### 例子

```python
# indexing='xy'
grid_x, grid_y = torch.meshgrid(torch.arange(3, device='cuda').float(), torch.arange(2, device='cuda').float(), indexing='xy')
# grid_x: tensor([[0., 1., 2.], [0., 1., 2.]])
# grid_y: tensor([[0., 0., 0.], [1., 1., 1.]])

# indexing='ij'
grid_x, grid_y = torch.meshgrid(torch.arange(2, device='cuda').float(), torch.arange(3, device='cuda').float(), indexing='ij')
# grid_x: tensor([[0., 0., 0.], [1., 1., 1.]])
# grid_y: tensor([[0., 1., 2.], [0., 1., 2.]])
```

- indexing='xy' 生成的 grid_x 对应的是 x 轴坐标，grid_y 对应的是 y 轴坐标
- indexing='ij' 生成的 grid_x 对应的是行索引，grid_y 对应的是列索引


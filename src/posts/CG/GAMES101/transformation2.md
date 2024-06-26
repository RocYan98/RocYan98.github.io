---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 计算机图形学
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png
order: 4
---

# 变换（模型、视图、投影）

## 1 观测（Viewing）变换

- 观测（Viewing）变换
  - 视图（View）/ 相机（Camera）变换
  - 投影（Projection）变换
    - 正交（Orthographic）投影
    - 透视（Perspective）投影

计算机图形学就是在做M（Model）V（View）P（Projection）变换，可以用现实中的拍照来类比：

- 找个好地方，安排好每个人的位置（模型变换，从局部空间到世界空间）
- 把相机放到一个好的角度（视图变换，从世界空间到观察空间）
- 按快门拍照（投影变换，从观察空间到裁剪空间）

对于 MVP 变换可以参考[图形学：MVP变换概述](https://zhuanlan.zhihu.com/p/551648397)

### 1.1 视图（View）/ 相机（Camera）变换

相机的定义：

- 相机的位置 —— $\overrightarrow{e}$
- 相机看向的方向 —— $\hat{g}$
- 相机朝上的方向 —— $\hat{t}$

默认相机的位置 $\overrightarrow{e}$ 在原点 (0, 0, 0)，相机看向的方向 $\hat{g}$ 为 -Z，相机朝上的方向 $\hat{t}$ 为 Y，因此当相机不在原点时，需要先将相机摆到默认的位置，同时模型也随着相机同步移动

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215002.png)

可以用 $M_{view}=R_{view}T_{view}$ 来表示，其中 $T_{view}$ 表示平移变换 $R_{view}$ 表示旋转变换，先将相机平移到原点，$T_{view}$ 很容易就能求出来，$R_{view}$ 很难直接求出，但是将默认位置旋转到相机的位置相对比较容易，因此可以先求出 $R_{view}^{-1}$ （即默认位置旋转到相机的位置的旋转变换矩阵），又因为旋转变换的矩阵是正交矩阵，因此再将求出的矩阵进行转置就可以得到最后的 $R_{view}$

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215130.png)

### 1.2 投影（Projection）变换

把三维的场景变成观测到的二维的图像，这就是投影。投影分为正交投影和透视投影。其中透视投影跟我们平时人眼观测到的成像差不多，近大远小。正交投影就是不发生近大远小的变化，几何上来说就是，正交投影中平行的线成像后依旧平行。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215719.png)

#### 1.2.1 正交（Orthographic）投影

当可观测区域是一个 [l(eft), r(right)] * [b(ottom), t(op)] * [f(ar), n(ear)] 的长方体时，要让他变成 $[-1, 1]^3$ 且中心在原点的标准（canonical）视体（默认要把可观测区域变成这样的立方体）

-  将长方体的中心平移到原点，中心坐标为 $(\frac{r+l}{2},\frac{t+b}{2},\frac{n+f}{2})$
-  将各边放缩到长度为 2

其正交投影矩阵如下（此时物体肯定会被拉伸，之后的视口变换（5.2）操作中会恢复）

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215078.png)

因为使用右手螺旋定则，所以看的方向是 -z，因此 far 会小于 near

#### 1.2.2 透视（Perspective）投影

先将锥体中远平面到近平面之间的所有平面挤压到近平面的大小，使锥体变成长方体的样子

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215570.png)

然后再利用正交投影的办法，因此透视投影的矩阵 $M_{persp}=M_{ortho}M_{persp\to ortho}$，$M_{persp\to ortho}=\begin{pmatrix}n&&0&&0&&0\\0&&n&&0&&0\\0&&0&&n+f&&-nf\\0&&0&&1&&0\end{pmatrix}$，具体推导过程看[视频](https://www.bilibili.com/video/BV1X7411F744/?p=4&vd_source=95e0ef9d858ed50b1480bdef3931ea83)。在锥体变为长方体的过程中，每个点的 z 分量会变小。从锥体变为长方体的过程可以理解为将 n 到 f 平面划分为无数个小平面，再将每个平面压缩成 n 平面的大小。对于下图可以假设以枕木为边界划分平面，枕木之间的距离就是两个平面之间的距离，在锥体中每个枕木之间的距离是相等的，而压缩到长方体时，就变得近大远小，可以近似理解为下图就是长方体中的样子。n 平面和 f 平面的 z 坐标都是不变的，而离镜头越远，枕木之间的距离越小，只能是每段枕木向远离镜头的方向移动，离镜头越远，z 越小。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261215580.png)

对于透视投影可以参考[图形学：正交/透视投影矩阵的推导（多个思路）](https://zhuanlan.zhihu.com/p/554093703)

## 2 总结

**Model 变换**是从**局部空间 (Local Space)** 到 **世界空间 (World Space)**，**View 变换**是从世界空间到**观察空间 (View Space)**，**Projection 变换**是从观察空间到**裁剪空间 (Clip Space)**，**透视除法 (Perspective Division)** 是从裁剪空间到**标准设备坐标系 (Normalized Device Coordinate, NDC)**，**Viewport 变换**是从 NDC 到**屏幕空间 (Screen Space)**。

---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 计算机图形学
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/9z92pr.png
order: 14
---

# 光线追踪（加速结构）

判断光线与物体相交需要去遍历所有的三角形，开销过大，因此需要考虑一些加速的方法。

## 1 轴对齐包围盒(Axis-Aligned Bounding Box，AABB)

包围盒完全包围物体，如果光线没有打到包围盒，那么光线一定和物体没有交集。所以先测试包围盒，再测试物体。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261210363.png)

AABB 包围盒：由三对平面的交集构成，任意一对平面都与 x 轴、y 轴或 z 轴垂直

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261210663.png)

光线与每一对平面（这里的平面并不是指包围盒的表面，而是指没有截成盒子前的无穷大的平面)都有两个交点 $t_{min}$和$t_{max}$，最终的 $t_{ennter}=max\{t_{min}\},t_{exit}=min\{t_{max}\}$，由于光线是射线，因此当且仅当 $t_{enter}<t_{exit}$且$t_{exit}\ge0$ 时，光线与 AABB 相交

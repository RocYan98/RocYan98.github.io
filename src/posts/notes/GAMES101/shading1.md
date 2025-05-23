---
date: 2023-08-04
tag:
  - CG
  - GAMES101
category:
  - 学习笔记
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png
order: 7
---

# 着色（光照与基本着色模型）

着色：对不同物体应用不同的材质（不同的材质和光线的相互作用有不同的方法）

## 布林·冯反射模型（Blinn-Phong Reflectance Model）

- Diffuse
- Specular
- Ambient

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261210272.png)

着色具有局部性，对着色的描述是一个点，v、l、n（法线）都是单位向量，shininess表示的是表面有多亮（不是指亮度）

暂时先不考虑阴影

## 1 漫反射

漫反射后，光会朝着所有方向进行反色，因此对于物体表面的同一个点，在所有的观测角度看到的颜色应该是相同的。

### 1.2 兰伯特余弦定律

对于任意一个着色点，它周围的单位面积能接收到的能量，是与光照方向l和着色点表面的法线方向n的余弦成正比的

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211596.png)

### 1.3 光照衰减

点光源是向周围所有方向辐射出能量（即以点光源为球心辐射能量），能量集中在球壳上且能量是守恒的，因此当能量辐射到距离点光源越远的地方，球体的表面积就越大，单位面积的能量就越小。根据球的表面积公式：$S=4\pi r^2$可知，单位面积的能力是与半径的平方$r^2$成反比的。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211307.png)

根据7.1.2能得出多少能量被着色点接收，根据7.1.3能得出多少能量能传播到着色点，最后再根据着色点的漫反射系数$k_d$（即颜色的RGB值），就能得到漫反射公式（即多少能量能从着色点反射出去），可以看到漫反射与观测方向v没有任何关系

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211939.png)

## 2 镜面反射

镜面反射与观测方向v有关，当观测方向v与镜面反射方向R越接近，则产生的高光也越亮

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211456.png)

可以转换成计算半程向量h与法线n之间的远近来判断，因为高光通常是白色的，因此镜面反射系数$k_s$通常就是白色；布林·冯模型简化了7.1.2的部分，理论上来说任何反射都应该考虑有多少能量被着色点接收。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211127.png)

因为能看到高光的角度范围很小，因此需要指数p来限制角度，通常p在布林·冯模型中取100到200之间

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211981.png)![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211393.png)

## 3 环境光

布林·冯模型对于环境光是一个大胆的简化，从下图可以看出是一个常数，与光照方向l、法线n和观测方向v都无关。这只是一个近似值，如果要很精确的计算需要运用到全局光照的知识

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211199.png)

将漫反射、镜面反射和环境光相加，就能得到最后的布林·冯反射模型的结果

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261211156.png)

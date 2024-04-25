---
date: 2024-04-25
category: 论文
tag:
  - Paper
  - Avatar
  - FITE
  - SDF
title: FITE-论文笔记
order: 11
---

## Learning Implicit Templates for Point-Based Clothed Human Modeling

[项目地址](https://jsnln.github.io/fite/index.html)

ECCV 2022

## Abstract

我们提出的 FITE (First-Implicit-Then-Explicit) 是一个先隐后显的框架，用于为穿着服装的数字人建模。我们的框架首先学习表示粗略服装拓扑结构的隐式表面模板，然后利用模板指导点集的生成，进一步捕捉与姿势相关的服装变形（如褶皱）。我们的管道结合了隐式和显式表示法的优点，即能够处理不同的拓扑结构，并能有效捕捉精细细节。我们还提出了扩散蒙皮技术，以方便模板训练，尤其是宽松服装的模板训练，以及通过基于投影的 pose 编码从 mesh 模板中提取 pose 信息，而无需预定义的 UV 贴图或连通性。

## Introduction


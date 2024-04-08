---
date: 2023-08-08
tag: PyCharm
category: 工具
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/1wp636.jpeg
---

# PyCharm 连接远程服务器上的 Docker

## 1 配置远程服务器 docker

```bash
docker run -d -it --name="cudaroc" -v /home/summer2023/Desktop:/workspace/shared --gpus=all  -p 9000:22 pytorch/pytorch:2.0.1-cuda11.7-cudnn8-devel
```

- `-d`  以分离（后台）模式运行容器

- `-it` 交互式 bash 模式
- `--name` 指定名称
- `-v` 本地目录:容器目录。挂载主机的本地目录 /home/summer2023/Desktop 到容器目录 /workspace/shared，本地目录的路径必须是绝对路径
- `--gpus` 要添加到容器中的 GPU 设备
- `-p` 端口映射（主机:容器）因为要用ssh连接，所以容器的端口一定要是22，主机端口可以随意



```bash
docker exec -it cudaroc bash
passwd
```

连接到容器并更改容器的 root 密码



```bash
apt-get install openssh-server
```

安装 ssh 服务，在这个过程中可以会遇到 Unable to locate package openssh-server 的报错，一般原因是刚安装的 Ubuntu 后没有更新软件源导致的

```bash
apt-get update
apt-get upgrade
```

先执行这两行代码更新软件源后再安装 ssh 服务



安装好 ssh 服务后打开 /etc/ssh/sshd_config 文件，将以下代码加入到文件中

```bash
PermitRootLogin yes #允许root用户使用ssh登录
```

启动ssh服务即可

```bash
service ssh restart
```

之后通过 root 账号还有 9000 端口就可以连接到 docker



## 2 配置 pycharm 建立连接

找到 pycharm 中 Tools-Deployment-Configuration，点击左上角的 + 创建一个 SFTP 连接

![](http://img.rocyan.cn/blog/2024/04/66135479c74b2.png)

先通过 9000 端口建立 ssh 连接

![](http://img.rocyan.cn/blog/2024/04/6613547f1d77c.png)

在 Mappings 中设置好本地路径和 docker 容器的路径的映射关系

![](http://img.rocyan.cn/blog/2024/04/661354837c592.png)

### 3 设置 pycharm 的 python 解释器

在 docker 中通过以下代码先找到解释器的路径

```bash
which python
# 解释器路径为/opt/conda/bin/python
```



找到 Settings 中的解释器页面添加解释器

![](http://img.rocyan.cn/blog/2024/04/6613548804d3d.png)

选择 SSH

![](http://img.rocyan.cn/blog/2024/04/6613548b7accb.png)

因为之前在 SFTP 中已经配置过 SSH 连接了，所以在 Existing 中可以找到之前的设置，直接选择就行

![](http://img.rocyan.cn/blog/2024/04/6613548f3e835.png)

Automaticlly upload project files to the server 勾选则会自动同步本地和 docker 中的文件

![](http://img.rocyan.cn/blog/2024/04/661354949b814.png)

右侧绿色的就是 docker 中的项目内容

![](http://img.rocyan.cn/blog/2024/04/6613549b580bc.png)

## Reference

[pycharm专业版连接远程docker容器](https://blog.csdn.net/sinat_28916141/article/details/126637604)

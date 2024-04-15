---
date: 2024-04-15
category: 其他
tag: 
  - ubuntu
---

# Ubuntu-20.04 安装教程

因为最近实验室发了主机，所以把安装 ubuntu-20.04 的过程记录一下，顺便推荐一些好用的软件。

## 1 安装系统

直接参考[这篇文章](https://blog.csdn.net/wyr1849089774/article/details/133387874)，主要分为以下 3 步。

### 1.1 制作 ubuntu 启动盘

制作启动盘也可以考虑用 [Rufus](http://rufus.ie/downloads/)。

### 1.2 windows 分区设置

如果不需要双系统，可以直接跳过这一步。

在合并 windows 分区的时候，可能会遇到恢复分区，删除恢复分区看[这篇文章](https://www.disktool.cn/content-center/how-to-delete-a-recovery-partition-631.html)。

### 1.3 安装 ubuntu

安装完 ubuntu 后建议切换成英文系统，不然有些目录是中文确实很奇怪。

## 2 基本配置

### 2.1 网络认证

插上实验室的网线之后可能需要去网络认证一下，网址是 wlrz.fudan.edu.cn，如果没法上网的话去认证一下。因为校园网的 ip 基本上不会改变，也就不需要弄静态 ip，直接用就好了。

### 2.2 SSH

想要用自己的电脑 ssh 连接，需要先执行下面的命令：

```bash
sudo apt install openssh-server
```

### 2.3 免密 SSH 连接

嫌每次 ssh 连接都要输密码很麻烦， 可以在自己的电脑的终端上输入：

```bash
ssh-copy-id 主机上的用户@主机的 ip
```

然后输入主机的密码，这样以后连接就不用再输密码。

### 2.4 修改主机名

如果你嫌自己默认的主机名太长太丑，可以直接修改 /etc/hostname 这个文件，修改后重启就好。

<img src="http://img.rocyan.cn/blog/2024/04/661cec4fb68da.png" alt="image-20240415161239236" style="zoom:50%;" /> @ 前面的是用户名，@ 后面的是主机名。

### 2.5 远程访问桌面

#### 2.5.1 向日葵

直接下载[向日葵](https://sunlogin.oray.com)，这种方式最简单。

#### 2.5.2 VNC

如果你愿意折腾也可以配置 vnc：

```bash
# 下载 x11vnc
sudo apt install x11vnc
# 配置密码
x11vnc -storepasswd
# 启动 vnc 服务
x11vnc -forever -shared -rfbauth ~/.vnc/passwd
```

如果你是 mac，可以用自带的屏幕共享，直接访问。

就是这个 <img src="http://img.rocyan.cn/blog/2024/04/661cec43b914e.png" style="zoom:25%;" /> app，在启动台的'其他'里面可以可以找到；在应用程序的使用工具文件里也可以找到；或者聚集搜索直接搜也行。

### 3 推荐配置

基本配置完成之后差不多就可以用了，接下来的配置是我个人的推荐，有些安装起来可能有点复杂，需要有 linux 的基础。

### 3.1 ZSH

安装 ZSH，里面有很多插件都很好用，安装和配置直接看[这篇文章](https://blog.csdn.net/NRWHF/article/details/129628713)。默认使用 ZSH 输入这个命令 `chsh -s $(which zsh) `。

### 3.2 Conda

我这里选择安装 miniconda，当然你也可以选择 anaconda：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
sh Miniconda3-latest-Linux-x86_64.sh
```

### 3.3 Homebrew

我喜欢用 homebrew 来安装和管理软件，如果你对这个不了解，建议还是用系统自带的 apt 就好。可以看 homebrew [官网](https://brew.sh/)的简介并进行安装，或者跟着如下步骤安装：

```bash
# 先安装 curl
sudo apt install curl
# 安装 homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完成之后记得添加环境变量。

### 3.4 Clash

虽然 clash 已经删库跑路了，但是还是可以下载[备份](https://paolu.lanzn.com/i4Js01in4rcb)，下载解压之后进入文件夹执行 `./cfw` 命令，配置好 clash，配置的过程买 vpn 的地方应该都有教学。

然后设置里设置网络代理：

![](http://img.rocyan.cn/blog/2024/04/661cecb01d98a.png)

![](http://img.rocyan.cn/blog/2024/04/661cec9d89b56.png)



如果觉得每次都要输入 `./cfw` 太麻烦，可以参考[这篇文章](https://blog.csdn.net/m0_47406832/article/details/126447106)来创建图标。

### 3.5 proxychains

虽然配置好了 clash，但是你在终端还是没法进行代理访问，除了每次都输入一下终端代理命令外，还可以用 proxychains，在需要代理的指令前加上 proxychains 就行。下载和配置过程可以参考我之前的[服务器代理](https://rocyan.top/posts/others/server-proxy.html)的文章。

### 3.6 SMB

可以直接把 ubuntu 上的文件挂载到本地，这样上传下载文件不再需要用 scp 或者 sftp，可以参考[这篇文章](https://blog.csdn.net/qq_41975640/article/details/128568428)。

### 3.7 Barrier

可以让 ubuntu、macos 和 windows 之间共享一套键鼠和剪贴板，这个真的巨好用，就是网络不好的时候没有那么流畅，参考[这篇文章](https://blog.csdn.net/zc15210073939/article/details/136685526)。

### 3.8 Gateway

在写远程主机或者服务器上的代码时，除了 vscode，还可以考虑用 [gateway](https://www.jetbrains.com.cn/en-us/remote-development/gateway/)，不过还是 beta 版本，可能有些不稳定，但是如果你习惯用 pycharm 的话，这个真的更好用。当然这个是在你本地电脑上下载，不是在 ubuntu 上下载。

## Reference：

[Ubuntu20.04双系统安装详解](https://blog.csdn.net/wyr1849089774/article/details/133387874)

[恢复分区怎么删除？这样做轻松删除！](https://www.disktool.cn/content-center/how-to-delete-a-recovery-partition-631.html)

[Ubuntu安装zsh](https://blog.csdn.net/NRWHF/article/details/129628713)

[Linux 创建桌面图标](https://blog.csdn.net/m0_47406832/article/details/126447106)

[ubuntu挂载samba](https://blog.csdn.net/qq_41975640/article/details/128568428)

[使用Barrier共享鼠标键盘，通过macos控制ubuntu系统](https://blog.csdn.net/zc15210073939/article/details/136685526)
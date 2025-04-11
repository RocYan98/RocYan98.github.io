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

插上实验室的网线之后可能需要去网络认证一下，网址是 http://10.250.3.66，如果没法上网的话去认证一下。因为校园网的 ip 基本上不会改变，也就不需要弄静态 ip，直接用就好了。

### 2.2 SSH

想要用自己的电脑 ssh 连接，需要先执行下面的命令：

```bash
sudo apt install openssh-server
```

### 2.3 免密 SSH 连接

嫌每次 ssh 连接或者 scp 传文件都要输密码很麻烦可以设置免密。

首先，请确保您在本地系统上已经生成了 SSH 密钥对。如果还没有生成，请使用以下命令来生成 SSH 密钥对：
```bash
ssh-keygen -t rsa -b 4096
```

将在默认目录 `~/.ssh/` 下生成密钥对文件。

然后可以使用以下命令将公钥复制到远程主机：

```bash
ssh-copy-id 主机上的用户@主机的ip
```

然后输入远程主机的密码，这样以后连接就不用再输密码。

### 2.4 修改主机名

如果你嫌自己默认的主机名太长太丑，可以直接修改 `/etc/hostname` 这个文件，修改后重启就好。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261228183.png" alt="image-20240415161239236" style="zoom:50%;" /> @ 前面的是用户名，@ 后面的是主机名。

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

就是这个 <img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261221999.png" style="zoom:25%;" /> app，在启动台的'其他'里面可以可以找到；在应用程序的使用工具文件里也可以找到；或者聚集搜索直接搜也行。

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

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261221069.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261222775.png)



如果觉得每次都要输入 `./cfw` 太麻烦，可以参考[这篇文章](https://blog.csdn.net/m0_47406832/article/details/126447106)来创建图标。

### 3.5 proxychains

虽然配置好了 clash，但是你在终端还是没法进行代理访问，除了每次都输入一下终端代理命令外，还可以用 proxychains，在需要代理的指令前加上 proxychains 就行。下载和配置过程可以参考我之前的[服务器代理](https://rocyan.top/posts/others/server-proxy.html)的文章。

### 3.6 SMB

可以直接把 ubuntu 上的文件挂载到本地，这样上传下载文件不再需要用 scp 或者 sftp，可以参考[这篇文章](https://blog.csdn.net/qq_41975640/article/details/128568428)。

### 3.7 Barrier

可以让 ubuntu、macos 和 windows 之间共享一套键鼠和剪贴板，这个真的巨好用，就是网络不好的时候没有那么流畅，参考[这篇文章](https://blog.csdn.net/zc15210073939/article/details/136685526)。

### 3.8 Gateway

在写远程主机或者服务器上的代码时，除了 vscode，还可以考虑用 [gateway](https://www.jetbrains.com.cn/en-us/remote-development/gateway/)，不过还是 beta 版本，可能有些不稳定，但是如果你习惯用 pycharm 的话，这个真的更好用。当然这个是在你本地电脑上下载，不是在 ubuntu 上下载。

### 3.9 开机自动启动

参考[这篇文章](https://blog.csdn.net/t624124600/article/details/111085234)。

## 4 挂载新硬盘

### 4.1 查找硬盘

通过 `df -h` 命令可以查看已挂载硬盘，ubuntu 可能会自动把硬盘挂载到 `/media` 下。

再通过 `lsblk -f` 命令查看所有硬盘信息，两边比对一下就能找到新硬盘的名字，比如我找到的硬盘名字叫 nvme1n1，那硬盘的位置就在 `/dev/nvme1n1`。

### 4.2 格式化硬盘

新的硬盘一般需要格式化，如果已经格式化过的可以跳过这一步。也可以对硬盘进行分区，这里跳过分区的步骤。

linux 默认支持的格式是 ext4：

```bash
sudo mkfs -t ext4 /dev/nvme1n1
```

如果想要与 mac 兼容可以格式化为 exfat 格式：

```bash
sudo mkfs -t exfat /dev/nvme1n1
```

格式化为 exfat 格式的时候可能会报错 mkfs: failed to execute mkfs.exfat: No such file or directory，这是因为不支持 exfat 格式， `sudo apt-get install exfat-fuse` 安装 exfat-fuse 即可。

### 4.3 临时挂载硬盘

需要新建一个文件夹作为挂载点，并挂载:

```bash
mkdir ~/data
sudo mount /dev/nvme1n1 ~/data
```

如果想要卸载可以 `sudo umount ~/data` 即可。

由于 exFAT 本身没有权限，需要在挂载时**强制设置所有文件的权限**：

```bash
sudo mount -o uid=1000,gid=1000,fmask=133,dmask=022 /dev/nvme1n1 ~/data
```

- **`uid=1000`**：设置默认用户（用 `id -u` 查你的用户ID）。
- **`gid=1000`**：设置默认组（用 `id -g` 查你的组ID）。
- **`fmask=133`**：
  - 文件权限 `133` = `644`（`rw-r--r--`），即用户可读写，其他人只读。
- **`dmask=022`**：
  - 目录权限 `022` = `755`（`rwxr-xr-x`），即用户可读写执行，其他人只读和执行。

### 4.4 开机自动挂载

临时挂载重启后还是需要重新挂载，如果想要自动挂载：

```bash
blkid /dev/nvme1n1 #找到硬盘的 UUID
sudo vim /etc/fstab #修改 fstab 文件
```

在 ` /etc/fstab` 文件的末尾加入：

```bash
UUID=xxx /home/yan/data exfat defaults 0 2
```

- 第一个参数就是 UUID
- 第二个参数是要挂载的位置
- 第三个参数是磁盘的 TYPE
- 第四个参数是挂载的选项，直接 defaults 就好
- 第五个参数是 dump 备份设置，1 允许 dump 备份，0 忽略备份
- 第六个参数是 fsck 磁盘检查设置：其值是一个顺序。当其值为 0 时，永远不检查；而 / 根目录分区永远都为1。其它分区从 2 开始，数字越小越先检查，如果两个分区的数字相同，则同时检查。

同理如果是 exFAT 也需要设置文件的权限：

```bash
UUID=xxx /home/yan/data exfat defaults,uid=1000,gid=1000,fmask=133,dmask=022 0 2
```





如果 ` /etc/fstab` 写错了是会导致开机就进入紧急模式无法进入图形化界面，这时候把文件末尾加的这个删掉就好。

## Reference：

[Ubuntu20.04双系统安装详解](https://blog.csdn.net/wyr1849089774/article/details/133387874)

[恢复分区怎么删除？这样做轻松删除！](https://www.disktool.cn/content-center/how-to-delete-a-recovery-partition-631.html)

[Ubuntu安装zsh](https://blog.csdn.net/NRWHF/article/details/129628713)

[Linux 创建桌面图标](https://blog.csdn.net/m0_47406832/article/details/126447106)

[ubuntu挂载samba](https://blog.csdn.net/qq_41975640/article/details/128568428)

[使用Barrier共享鼠标键盘，通过macos控制ubuntu系统](https://blog.csdn.net/zc15210073939/article/details/136685526)

[ubuntu18.04设置开机启动命令/脚本的三种方法（可sudo）](https://blog.csdn.net/t624124600/article/details/111085234)

[[Ubuntu-22.04 挂载磁盘](https://www.cnblogs.com/luoguoguo/p/18554122)](https://www.cnblogs.com/luoguoguo/p/18554122)

[Ubuntu 系统不支持exFat文件系统的移动存储介质直接挂载](https://blog.csdn.net/Terminal_wen/article/details/128088973)
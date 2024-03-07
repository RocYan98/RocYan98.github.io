---
date: 2024-03-07
category: 其他
tag: 
  - server
  - proxy
---

# 服务器代理

主要分为以下 2 步：

1. 安装配置 ssr
2. 安装配置 proxychains4

## 1 SSR

### 1.1 安装 ssr 脚本

[CharlesScripts](https://github.com/the0demiurge/CharlesScripts.git) 库里有许多脚本，我们需要拿到这个库里的 ssr 脚本，可以一键安装、配置、使用 ShadowSocksR，当然你也可以选择自己直接安装。

你可以直接 clone 整个库，然后找到里面的脚本，具体目录在 `CharlesScripts/charles/bin/ssr` 。我这里选择直接打开[脚本文件](https://github.com/the0demiurge/CharlesScripts/blob/master/charles/bin/ssr)，把整个脚本复制后，在服务器创建一个 ssr 脚本，然后把复制的内容粘贴进去。

```bash
# 1.创建ssr文件并编辑
vim ssr
# 2.把复制的脚本粘贴进去

# 3.给脚本添加执行权限
chmod +x ./ssr
# 4.把脚本移动到可执行脚本目录
sudo mv ./ssr /usr/local/bin
```

当然第 4 步你也可以选择直接添加环境变量。

### 1.2 安装配置 ssr

在安装完 ssr 脚本后，在 terminal 输入 ssr 会出现如下提示：

```bash
ShadowSocksR python client tool
if you have not installed ssr, run `ssr install` first
Usage:
	 ssr help

 Install/Uninstall
	 ssr install      install shadowsocksr client
	 ssr uninstall    uninstall shadowsocksr client

 Config and Subscribe
	 ssr update       update subscription from http://ss.pythonic.life
	 ssr config       edit config.json
	 ssr xclip        paste configs from clipboard to config.json

 Start/Stop/Restart
	 ssr start        start the shadowsocks service
	 ssr stop         stop the shadowsocks service
	 ssr restart      restart the shadowsocks service

 Testing and Maintenance
	 ssr test         get ip from cip.cc using socks5 proxy
	 ssr log          cat the log of shadowsocks
	 ssr shell        cd into ssr installation dir
	 ssr clean        clean ssr configuration backups
```

首先输入 `ssr install` 安装 ShadowSocksR，安装完之后输入 `ssr config` 进行配置，配置文件如下：

```json
{	
    // 服务器的ip或者网址
    "server": "",
    "server_ipv6": "::",
    // 服务器端口号
    "server_port": ,
    // 本地ip
    "local_address": "127.0.0.1",
    // 本地端口号
    "local_port": 1080,

    // 服务器密码
    "password": "",
    // 算法
    "method": "",
    // 协议
    "protocol": "auth_aes128_md5",
    // 协议参数
    "protocol_param": "",
    // 混淆
    "obfs": "",
    // 混淆参数
    "obfs_param": "",
    "speed_limit_per_con": 0,
    "speed_limit_per_user": 0,

    "additional_ports" : {}, 
    "additional_ports_only" : false, 
    "timeout": 120,
    "udp_timeout": 60,
    "dns_ipv6": false,
    "connect_verbose_info": 0,
    "redirect": "",
    "fast_open": false
}

```

有可能需要改的地方用注释标记出来，具体的还是根据你自己的代理去设置。

## 2 proxychains4

### 2.1 安装

```bash
sudo apt-get install proxychains4
```

### 2.2 配置

```bash
sudo vim /etc/proxychains.conf
```

因为 ssr 是 socks5 协议默认 1080 端口，所以只需要改配置文件的最后一行，具体还是要看你设置的端口号。

```conf
[ProxyList]
# add proxy here ...
# meanwile
# defaults set to "tor"
socks5  127.0.0.1 1080
```

### 2.3 测试

先测试不用代理的 IP

```bash
curl www.httpbin.org/ip
```

再测试用代理的 IP

```bash
proxychains4 curl www.httpbin.org/ip
```

如果两次的 IP 不同，说明成功了，以后需要挂代理的命令前加上 `proxychains4` 或 `proxychains` 就可以。

##3 gdown

可以使用 gdown 让服务器直接从 Google Drive 下载文件。

### 3.1 安装

```bash
 git clone https://github.com/wkentaro/gdown 
 cd gdown
 pip install gdown
```

### 3.2 获取 Google Drive 文件链接/ID

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/7r9572.png)

通过以上步骤可以获取文件的 ID，`https://drive.google.com/file/d/12DmrxXNtl0U9hnN1bzue4XX7nw1fSMZ5/view?usp=share_link` 其中 `12DmrxXNtl0U9hnN1bzue4XX7nw1fSMZ5` 就是文件的 ID，最后的链接是 `https://drive.google.com/uc?id=<文件ID>`。并且文件的访问权限必须是”互联网上知道链接的任何人都可以查看“。

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/9s0jdv.png)

如果直接用共享的文件可能会遇到超出下载配额的问题，所以建议保存到自己的云盘后再下载。网页版的谷歌云盘经常没有反应，所以建议下载桌面版云端云盘后再操作。

### 3.3 使用 gdown 下载

```bash
# 使用链接下载文件
gdown https://drive.google.com/uc?id=<文件ID>
# 使用ID下载文件
gdown 文件ID
# 下载文件夹
gdown https://drive.google.com/drive/folders/15uNXeRBIhVvZJIhL4yTw4IsStMhUaaxl -O /tmp/folder --folder
```

命令的具体参数可以看 [gdown](https://github.com/wkentaro/gdown.git) 的 github，还有一个常用的是 `-c`，如果下载到一半中断后可以加上这个参数继续下载。

## Reference

[Linux下ssr的安装使用](https://www.jianshu.com/p/27dfbeab506c)

[CentOS/Debian/Ubuntu ShadowsocksR 单/多端口 一键管理脚本](https://zhuanlan.zhihu.com/p/612211755)

[proxychains4配置使用](https://huaweidevelopers.csdn.net/65b380fa28cf1d21b51ffbb8.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYyMDQyNiwiZXhwIjoxNzEwMjUzMDQxLCJpYXQiOjE3MDk2NDgyNDEsInVzZXJuYW1lIjoid2VpeGluXzQyNTYzMjE2In0.w6aaZ-r_VbOiV0lG7TbjqAkOEGPfXs4vBaXAdLA3IJY)

[Linux使用gdown从Google Drive下载文件和文件夹（命令行/代码下载）](https://zhuanlan.zhihu.com/p/678312414)

[CharlesScripts](https://github.com/the0demiurge/CharlesScripts.git)

[gdown](https://github.com/wkentaro/gdown.git)

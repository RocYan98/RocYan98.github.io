---
date: 2023-08-03
tag: Linux
category: Linux
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hohlue.webp
order: 4
---

# Linux 软件包安装

## 一、 软件包分类

- 源码包
- 二进制包（RPM 包/DPKG 包）



### 1.1 源码包

- 优点：
  - 开源
  - 自由选择所需的功能
  - 通过编译安装，更适合自己的系统，比二进制包性能提高约 5%
  - 卸载方便，干净
- 缺点：
  - 安装过程步骤较多
  - 编译过程时间较长，安装比二进制安装时间长



### 1.2 二进制包

#### 1.2.1 二进制包分类

- DPKG 包：是由Debian Linux所开发出来的包管理机制，通过DPKG包，Debian Linux就可以进行软件包管理。主要应用在Debian和unbuntu中。
- RPM 包：是由Red Hat公司所开发的包管理系统。功能强大，安装、升级、查询和卸载都非常简单和方便。目前很多Linux都在使用这种包管理方式，包括Fedora、CentOS、SuSE等。



#### 1.2.2 优缺点

- 优点：
  - 包管理系统简单
  - 安装速度比源码包安装快的多
- 缺点：
  - 经过编译，不再可以看到源代码
  - 功能选择不如源码包灵活
  - 依赖性（有时会发现需要安装软件包a时需要先安装b和c，而安装b时需要安装d和e。这是需要先安装d和e，再安装b和c，最后才能安装a包。）



#### 1.2.3 RPM 包的依赖

- 树形依赖
  - a---->b---->c
- 环形依赖
  - a---->b---->c---->a 
  - 同时安装 a、b、c 三个包即可
- 函数库依赖
  - 安装某个包时，发现报错，需要安装如“libodbc.so.2”函数库文件，这时会发现在光盘中根本找不到这个文件。那是因为函数库没有单独成包，是包含在某一个软件包中的。
  - 查询网站 www.rpmfind.net 可以找到哪个包中有该函数库。



## 二、RPM 包安装

### 2.1 RPM 包命名规则

> httpd-2.2.15-15.el6.centos.1.i686.rpm
>
> - httpd：软件包名
> - 2.2.15：软件版本
> - 15：软件发布的次数
> - e16：软件发行商。el6是RedHat公司发布，适合RHEL6.x（Red Hat Enterprise Linux）和CentOS6.x下使用
> - i686：适合的硬件平台。RPM包可以在不同的硬件平台安装，选择适合不同CPU的软件版本，可以最大化的发挥CPU性能，所以出现了所谓的i386（386以上计算机都可以安装）、i586（586以上的计算机都可以安装）、i686（奔腾II以上计算机都可以安装，目前所有的CPU都是奔腾II以上，所以这个软件版本居多）、x86_64（64位CPU可以安装）和noarch（没有硬件限制）等文件名了
> - rpm：rpm包的扩展名（给管理员看的，不是真正的扩展名）

- 包全名：如果操作的是未安装软件包，则使用包全名，需要使用绝对路径
- 包名：如果操作的是已经安装的软件包，则使用包名即可，系统会生产RPM包的数据库（/var/lib/rpm/），而且可以在任意路径下操作



### 2.2 rpm包手工命令安装

#### 2.2.1 默认安装位置

| 路径           | 解释                       |
| -------------- | -------------------------- |
| /etc           | 配置文件安装目录           |
| /usr/bin       | 可执行的命令安装目录       |
| /usr/lib       | 程序所使用的函数库保存位置 |
| /usr/share/doc | 基本的软件使用手册保存位置 |
| usr/share/man  | 帮助文件保存位置           |



#### 2.2.2 RPM 包安装

```bash
[root@localhost ~]# rpm -ivh 包全名
选项：
	-i    install安装（install）
  -v    显示更详细的信息（verbose）
  -h    打印显示安装进度（hash）
  --nodeps  			不检测依赖性安装。软件时会检测依赖性，确定所需的底层软件是否安装。如果没有安装则会报错。如果我不管依赖性，想强行安装，可以使用这个选项。注意：这样不检测依赖性安装的软件基本是不能使用的，所以不建议这样做。
  --replacefiles  替换文件安装。如果安装软件包，可是包中部分文件已经存在，那么正常安装时候，会报错“某个文件已经存在”从而导致软件无法安装，使用这个选项可以忽视这个报错，而覆盖安装。
  --replacepkgs 	替换软件包安装。如果软件包已经安装，此选项可以把软件包重复安装一遍。
  --force  				强制安装。不管是否已经安装，都重新安装。就是—replacefiles和—replacepkgs的综合
  --test  				测试安装。不会实际安装，只是检测一下依赖性。
  --prefix  			指定安装路径。为安装软件指定安装路径，而不使用默认安装路径。注意：如果指定了安装路径，软件没有安装到系统默认路径中的话，系统会找不到这些安装的软件，需要进行手工配置才能被系统识别。所以rpm包我们一般都采用默认路径安装。
```

rpm 安装时常用的选项与参数说明：

| 可下达的选项    | 代表意义                                                     |
| --------------- | ------------------------------------------------------------ |
| --nodeps        | 使用时机：当发生软件属性相依问题而无法安装，但你执意安装时 危险性： 软件会有相依性的原因是因为彼此会使用到对方的机制或功能，如果强制安装而不考虑软件的属性相依， 则可能会造成该软件的无法正常使用！ |
| --replacefiles  | 使用时机： 如果在安装的过程当中出现了“某个文件已经被安装在你的系统上面”的信息，又或许出现版本不合的讯息 （confilcting files） 时，可以使用这个参数来直接覆盖文件。危险性： 覆盖的动作是无法复原的！所以，你必须要很清楚的知道被覆盖的文件是真的可以被覆盖喔！否则会欲哭无泪！ |
| --replacepkgs   | 使用时机： 重新安装某个已经安装过的软件！如果你要安装一堆 RPM 软件文件时，可以使用 rpm -ivh *.rpm ，但若某些软件已经安装过了， 此时系统会出现“某软件已安装”的信息，导致无法继续安装。此时可使用这个选项来重复安装喔！ |
| --force         | 使用时机：这个参数其实就是 --replacefiles 与 --replacepkgs 的综合体！ |
| --test          | 使用时机： 想要测试一下该软件是否可以被安装到使用者的 Linux 环境当中，可找出是否有属性相依的问题。范例为： `rpm -ivh pkgname.i386.rpm --test` |
| --justdb        | 使用时机： 由于 RPM 数据库破损或者是某些缘故产生错误时，可使用这个选项来更新软件在数据库内的相关信息。 |
| --nosignature   | 使用时机： 想要略过数码签章的检查时，可以使用这个选项。      |
| --prefix 新路径 | 使用时机： 要将软件安装到其他非正规目录时。举例来说，你想要将某软件安装到 /usr/local 而非正规的 /bin, /etc 等目录， 就可以使用“ --prefix /usr/local ”来处理了。 |
| --noscripts     | 使用时机：不想让该软件在安装过程中自行执行某些系统指令。说明： RPM 的优点除了可以将文件放置到定位之外，还可以自动执行一些前置作业的指令，例如数据库的初始化。 如果你不想要让 RPM 帮你自动执行这一类型的指令，就加上他吧！ |

#### 2.2.3 服务启动

```bash
[root@localhost ~]# service 服务名 start|stop|restart|status
参数：    
	start：启动服务   
  stop：停止服务
  estart：重启服务    
  status：查看服务状态
  
[root@localhost ~]# systemctl restart httpd
#这个命令也行
```

> ​	service 找的其实是 /etc/rc.d/init.d/服务名 或 /etc/init.d/服务名



#### 2.2.4 RPM 包升级

```bash
[root@localhost ~]#  rpm –Uvh 包全名
选项：    
	-U（大写）升级安装，如果没有安装过，系统直接安装。如果安装过的版本较旧，则升级到新版本（upgrade）[root@localhost ~]#  rpm –Fvh 包全名
选项：
	-F（大写）升级安装，如果没有安装过，则不会安装。必须安装有较旧版本，才能升级（freshen）
```



#### 2.2.5 RPM 包卸载

```bash
[root@localhost ~]# rpm  -e  包名
选项：
	--nodeps 	 不检查依赖性
  -e         卸载
```

> 卸载时也有依赖，顺序反过来



#### 2.2.6 RPM 包查询

```bash
[root@localhost ~]#  rpm –q 包名
#查询软件包是否安装

[root@localhost ~]# rpm -qa
#查询系统中所有已安装的包

[root@localhost ~]#  rpm –qi 包名
#查询已安装包的详细信息

[root@localhost ~]#  rpm –qip 包全名
#查询未安装包的详细信息

[root@localhost ~]#  rpm –ql 包名
#询已经安装的软件包中的文件列表和安装的完整目录

[root@localhost ~]#  rpm –qlp 包全名
#查询未安装的软件包中的文件列表和打算安装的位置

[root@localhost ~]#  rpm –qf 系统文件名
#查询系统文件属于哪个RPM包(手工建立的文件是不能查询的，因为这些文件不是通过RPM包安装的，当然不能反向查询它属于哪个RPM包)

[root@localhost ~]# rpm –qR 包名
#查询系统中和已经安装的软件包有依赖关系的软件包

[root@localhost ~]# rpm -qRp 包全名
#查询未安装的软件包的依赖性

选项：
	-q：查询（query）
	-a：所有（all）
	-i：查询软件信息（information）
	-p：查询没有安装的软件包（package）
	-l：列出软件包中所有的文件列表和软件所安装的目录（list）
	-f：查询系统文件属于哪个软件包（file）
	-R：查询软件包的依赖性（requires）
```



#### 2.2.7 RPM 包验证

- 验证 （Verify） 的功能主要在于提供系统管理员一个有用的管理机制，作用的方式是使用 /var/lib/rpm 下面的数据库内容来比对目前 Linux 系统的环境下的所有软件文件，也就是说，当你有数据不小心遗失， 或者是因为你误杀了某个软件的文件，或者是不小心不知道修改到某一个软件的文件内容， 就用这个简单的方法来验证一下原本的文件系统，来了解到底是修改到哪些文件数据了。

```bash
[root@study ~]# rpm -Va
[root@study ~]# rpm -V  已安装的软件名称
[root@study ~]# rpm -Vp 某个 RPM 文件的文件名
[root@study ~]# rpm -Vf 在系统上面的某个文件
选项与参数：
	-V：		校验指定RPM包中的文件（verify）
	-Va：  校验本机已经安装的所有软件包
	-Vp：  后面加的是文件名称，列出该软件内可能被更动过的文件；
	-Vf：  列出某个文件是否被更动过～
```

例1：

```bash
[root@study ~]# rpm -V logrotate
# 如果没有出现任何讯息，该软件所提供的文件没有被更动过。
```

例2:

```bash
[root@localhost ~]# rpm -V httpd
S.5....T.           c         /etc/httpd/conf/httpd.con
验证内容						文件类型		文件名
```

> 验证内容中的8个信息的具体内容如下：
>
> - S ：（file Size differs） 文件的容量大小是否被改变
> - M ：（Mode differs） 文件的类型或文件的属性 （rwx） 是否被改变？如是否可执行等参数已被改变
> - 5 ：（MD5 sum differs） MD5 这一种指纹码的内容已经不同
> - D ：（Device major/minor number mis-match） 设备的主/次代码已经改变
> - L ：（readLink（2） path mis-match） Link 路径已被改变
> - U ：（User ownership differs） 文件的所属人已被改变
> - G ：（Group ownership differs） 文件的所属群组已被改变
> - T ：（mTime differs） 文件的创建时间已被改变
> - P ：（caPabilities differ） 功能已经被改变
>
> 文件类型：
>
> - c ：配置文件 （config file）
> - d ：文件数据文件 （documentation）
> - g ：鬼文件～通常是该文件不被某个软件所包含，较少发生！（ghost file）
> - l ：授权文件 （license file）
> - r ：读我文件 （read me）



#### 2.2.8 数字证书

- 校验方法只能对已经安装的RPM包中的文件进行校验，但是如果RPM包本身就被动过手脚，那么校验就不能解决问题，就必须使用数字证书验证。
- 数字证书有如下特点：
  - 必须找到原厂的公钥文件，然后进行安装
  - 在安装RPM包时，会去提取RPM包中的证书信息，然后和本机安装的原厂证书进行验证
  - 如果验证通过，则允许安装；如果验证不通过，则不允许安装并警告
- 数字证书的位置：
  - 光盘中的数字证书位置：/mnt/cdrom/RPM-GPG -KEY -CentOS-6
  - 系统中的数字证书位置：/etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6
- 数字证书的导入：

```bash
[root@localhost ~]# rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY  -CentOS-6
选项：
	--import	导入数字证书
```

- 查询系统中安装好的数字证书：

```bash
[root@localhost ~]# rpm -qa | grep gpg-pubkey
gpg-pubkey-c105b9de-4e0fd3a3
[root@localhost ~]# rpm -qi gpg-pubkey-c105b9de-4e0fd3a3
```



### 2.3 rpm 包在线安装（yum 安装）

#### 2.3.1 yum 源文件解析

- yum源配置文件保存在/etc/yum.repos.d/目录中 ，文件的扩展名一定是“*.  repo”。也就是说，yum源配置文件只要扩展名是“*.repo”就会生效。

```bash
[root@localhost ~]# ls  /etc/yum.repos.d/ 
CentOS-Base.repo  CentOS-Debuginfo.repo  CentOS-fasttrack.repo  CentOS-Media.repo  CentOS-Vault.repo
```

- 默认情况下CentOS-Base.repo文件生效。

```bash
[root@localhost yum.repos.d]# vim /etc/yum.repos.d/CentOS-Base.repo 

[base]
name=CentOS-$releasever - Base
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
baseurl=http://mirror.centos.org/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6 
...省略部分输出...
```

- [base]：容器名称，一定要放在[ ]中
- name：容器说明，可以自己随便写
- mirrorlist：镜像站点，这个可以注释掉
- baseurl：我们的yum源服务器的地址。默认是CentOS官方的yum源服务器，是可以使用的。如果你觉得慢，则可以改成你喜欢的yum源地址
- enabled：此容器是否生效，如果不写或写成enabled=1则表示  此容器生效，写成enabled=0则表示此容器不生效
- gpgcheck：如果为1则表示RPM的数字证书生效；如果为0则表示RPM的数字证书不生效
- gpgkey：数字证书的公钥文件保存位置。不用修改。



#### 2.3.2 yum 命令

1. 查询

> - 查询yum源服务器上所有可安装的软件包列表。
>
> ```bash
> [root@localhost yum.repos.d]# yum list
> #查询所有可用软件包列表
> Installed Packages  
> #已经安装的软件包
> ConsoleKit.i686 0.4.1-3.el6  @anaconda-CentOS-201207051201.i386/6.3
> ConsoleKit-libs.i686 0.4.1-3.el6  @anaconda-CentOS-201207051201.i386/6.3
> ...省略部分输出... 
> Available Packages
> #还可以安装的软件包
> 389-ds-base.i686                          1.2.10.2-15.el6             c6-media 389-ds-base-devel.i686                   1.2.10.2-15.el6             c6-media
> #软件名																		版本										所在位置（光盘）
> ...省略部分输出...
> ```
>
> - 查询yum源服务器中是否包含某个软件包。
>
> ```bash
> [root@localhost yum.repos.d]# yum list 包名
> #查询单个软件包
> 例如：
> [root@localhost yum.repos.d]# yum list samba
> Available Packages
> samba.i686                3.5.10-125.el6                      c6-media
> ```
>
> - 搜索yum源服务器上所有和关键字相关的软件包。
>
> ```bash
> [root@localhost yum.repos.d]# yum search 关键字
> #搜索服务器上所有和关键字相关的软件包
> 例如：
> [root@localhost ~]# yum search ifconfig
> 已加载插件：fastestmirror, langpacks
> Loading mirror speeds from cached hostfile
> =========================================================== 匹配：ifconfig ===========================================================
> net-tools.x86_64 : Basic networking tools
> #um  search搜索可以用于确定某个软件在哪个相关包当中。此例子可以确定“ifconfig”命令需要安装“net-tools”包。
> ```
>
> - 查询指定软件包的信息。
>
> ```bash
> [root@localhost yum.repos.d]# yum info samba
> #查询samba软件包的信息
> Available Packages     #还没有安装
> Name        : samba    #包名
> Arch        : i686     #适合的硬件平台
> Version     : 3.5.10   #版本
> Release     : 125.el6  #发布版本
> Size        : 4.9 M    #大小
> Repo        : c6-media #在光盘上
> ...省略部分输出...
> ```

2. 安装

```bash
[root@localhost yum.repos.d]# yum -y install 包名
选项：    
	install安装    -y         自动回答yes。如果不加-y，那么每个安装的软件都需要手工回答yes 
例如：
[root@localhost yum.repos.d]# yum -y install gcc
#使用yum自动安装gcc 
```

3. 升级

> ```bash
> [root@localhost yum.repos.d]# yum -y update 包名#升级指定的软件包
> 选项：    
> 	update：升级    
> 	-y：自动回答yes
> ```
>
> 注意：在进行升级操作时，yum源服务器中软件包的版本要比本机安装的软件包的版本高。
>
> ```bash
> [root@localhost yum.repos.d]# yum -y update
> #升级本机所有软件包（包括内核）
> ```
>
> 这条命令会升级系统中所有的软件包。不过我们的生产服务器是稳定优先的，所以这种全系统升级的情况并不多见。

4. 卸载

> ```bash
> [root@localhost yum.repos.d]# yum remove 包名
> #卸载指定的软件包
> 例如：
> [root@localhost yum.repos.d]# yum remove samba
> #卸载samba软件包
> ```
>
> 除非你确定卸载的软件的依赖包不会对系统产生影响，否则不要执行yum的卸载，因为很有可能在卸载软件包的同时卸载的依赖包也是重要的系统文件，这就有可能导致系统崩溃。



#### 2.3.3 yum 组管理命令

- 查询可以安装的软件组

```bash
[root@localhost ~]# yum grouplist
#列出所有可用的软件组列表
```

- 查询软件组内包含的软件

```bash
[root@localhost ~]# yum groupinfo 软件组名
#列出软件组中包含的软件
例如：[root@localhost ~]# yum groupinfo "Web Server"
#查询软件组"Web Server"中包含的软件
```

- 安装软件组

```bash
[root@localhost ~]# yum groupinstall 软件组名
#安装指定软件组，组名可以由grouplist查询出来
例如：
[root@localhost ~]# yum groupinstall "Web Server"
#安装网页服务软件组
```

> 6.3之后的版本可以直接使用中文安装

- 卸载软件组

```bash
[root@localhost ~]# yum groupremove 软件组名
#卸载指定软件组
```



## 三、源码包安装

### 3.1 注意事项

- 如果软件包是给大量客户提供访问，建议使用源码包安装，如LAMP环境搭建，因为源码包效率更高。
- 如果软件包是给Linux底层使用，或只给少量客户访问，建议使用rpm包安装，因为rpm包简单。
- rpm包是光盘中直接包含的，所以不需要用户单独下载。而源码包是通过官方网站下载的，如果需要使用，是需要单独下载的。

> RPM包：不建议指定安装位置的，建议安装在默认位置（RPM包安装的服务有标准卸载命令，不怕文件到处安装）
>
> - 配置文件：      /etc/httpd/conf/httpd.conf
> - 网页位置：      /var/www/html/
> - 日志位置：      /var/log/httpd/
> - 启动方法：      1. service  httpd  restart                     2. /etc/rc.d/init.d/httpd  restart
>
> 源码包：必须指定安装位置（源码包没有安装数据库，没有删除命令，极少数不能指定位置，不然会报错）
>
> - 配置文件：      /usr/local/apache2/conf/httpd.conf
> - 网页文件：      /usr/local/apache2/htdocs/
> - 日志位置：      /usr/local/apache2/logs/ 
> - 启动方法：      /usr/local/apache2/bin/apachectl  start
>
> 注意：可以通过 ps aux 命令查看具体是哪个位置启动，生产服务器上不建议同时安装 RPM 包和源码包，浪费资源。给外界访问的不建议更改端口号。



### 3.2 安装过程

- 下载软件包
- 解压缩
- 进入解压目录
- ./configure 编译前准备（绝大多数源码包都有此文件，只有极少数如 mysql 是用 ./makec）
  - 这一步主要有三个作用：①在安装之前需要检测系统环境是否符合安装要求。②定义需  要的功能选项。“./configure”支持的功能选项较多，可以执行“./configure --help”命令查询其支持的功能。一般都会通过“./configure --prefix=安装路径”来指定安装路径。③把系统环境的检测结果和定义好的功能选项写入Makefile文件，后续的编译和安装需要依赖这个文件的内容。
  - 需要注意的是，configure不是系统命令，而是源码包软件自带的一个脚本程序，所以必须采用“./configure”方式执行（“./”代表 在当前目录下）
- make：编译
  - make会调用gcc编译器，并读取Makefile文件中的信息进行系统软件编译。编译的目的就是把源码程序转变为能被Linux识别的可执行文件，这些可执行文件保存在当前目录下。编译过程较为耗时，需要有足够的 耐心。
- make clean：清空编译内容（非必需步骤）。
  - 如果在  “./configure”或“make”编译中报错，那么我们在重新执行命令前一定要记得执行make clean命令，它会清空Makefile文件或编译产生的“.o”头文件。
- make install：编译安装。
  - 这才是真正的安装过程，一般会写清楚程序的安装位置。如果忘记指定安装目录，则可以把这个命令的执行过程保存下来，以备将来删除使用。



### 3.3 删除

- 源码包没有删除命令，如果需要删除，直接删除安装目录即可。
- 安装完成后，源码包就可以删除。



### 3.4 打入补丁

#### 3.4.1 补丁的生成

```bash
[root@localhost ~]# diff 选项 old new
#比较old和new文件的不同
选项：    
	-a     将任何文档当做文本文档处理    
  	-b     忽略空格造成的不同   
  	-B     忽略空白行造成的不同   
  	-I     忽略大小写造成的不同    
  	-N     当比较两个目录时，如果某个文件只在一个目录中，则在另一个目录中视作空文件  
  	-r     当比较目录时，递归比较子目录 
  	-u     使用同一的输出格式
  
#举例
[root@localhost test]# diff -Naur /root/test/old.txt /root/test/new.txt > txt.patch
#比较两个文件的不同，同时生成txt.patch补丁文件

[root@localhost test]# vi txt.patch
#查看下这个文件
--- /root/test/old.txt  2012-11-23 05:51:14.347954373 +0800
#前一个文件
+++ /root/test/new.txt  2012-11-23 05:50:05.772988210 +0800
#后一个文件
@@ -2,3 +2,5 @@
 school 
 is   
 atguigu
+in 
+beijing
#后一个文件比前一个文件多两行（+表示）
```



#### 3.4.2 打入补丁

```bash
[root@localhost test]# patch –pn < 补丁文件
#按照补丁文件进行更新
选项：    
	-pn   n为数字。代表按照补丁文件中的路径，指定更新文件的位置。
```

> -pn”不好理解，补丁文件是要打入旧文件的，但是你当前所在的目录和补丁文件中的记录的目录是不一定匹配的，所以就需要“-pn”来同步两个目录。
>
> 比如我当前是在“/root/test”目录中（我要打补丁的旧文件就在当前目录下），补丁文件中记录的文件目录为“/root/test/old.txt”，这时如果写入“-p1”（在补丁文件目录中取消一级目录）那么补丁文件就会打入“/root/test/root/test/old.txt”文件中，这显然是不对的。那如果写入的是“-p2”（在补丁文件目录中取消二级目录）那么补丁文件打入的就是“/root/test/test/old.txt”,这显然也不对。如果写入的是“-p3”（在补丁文件目录中取消三级目录）那么补丁文件就是打入的“/root/test/old.txt”，我们的old.txt文件就在这个目录下，所以就应该是“-p3”。
>
> 注意：一般补丁中会有说明需要-pn，或者可以一个一个试过来，现在已较少使用补丁。



## 四、脚本安装程序

- 脚本程序包并不多见，所以在软件包分类中并没有把它列为一类（脚本内部还是 RPM 包安装或者 yum 安装）。它更加类似于Windows下的程序安装，有一个可执行的安装程序，只要运行安装程序，然后进行简单的功能定制选择（比如指定安装目录等），就可以安装成功，只不过是在字符界面下完成的。目前常见的脚本程序以各类硬件的驱动居多。
- 下载软件压缩包后解压进入目录，执行 ./setup.sh 命令，按照步骤执行即可。


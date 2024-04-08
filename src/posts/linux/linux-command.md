---
date: 2023-08-03
tag: Linux
category: Linux
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hohlue.webp
order: 3
---

# Linux 命令

## 一、命令的基本格式

### 1.1 命令的提示符

```bash
[root@localhost ~]#
```

- \[\]：这是提示符的分隔符号，没有特殊意义
- root显示的是当前的登录用户
- @分隔符号，没有特殊意义
- localhost当前系统的简写主机名（完整主机名是 localhost.localdomain）
- ～：代表用户当前所在的目录，~表示家目录
- \#：命令提示符。超级用户是\#，普通用户是\$



### 1.2 命令的基本格式

```bash
[root@localhost ~]# 命令 [选项] [参数]
```

- 选项：是用于调整命令的功能
- 参数：是命令的操作对象，如果省略参数，是因为有默认参数



## 二、目录操作命令

### 2.1 ls 命令

- 命令名称：ls
- 英文原意：list
- 所在路径：/bin/ls
- 执行权限：所有用户
- 功能描述：显示目录下的内容

```bash
[root@localhost ~]# ls [选项] [文件名或目录名]
选项：
	-a：						显示所有文件
	--color=when： 支持颜色输出，when 的默认值是 always，也可以是 never 和 auto
	-d：						显示目录信息，而不是目录下的文件
	-h：						人性化显示，按照习惯的单位显示文件大小（Linux 默认显示的文件大小是字节）
	-i：						显示文件的 inode 索引节点号
	-l：						显示文件的详细信息
```

举例：

```bash
[root@localhost ~]# ls -l
total 44
-rw-------. 1 root root  1250 Dec 14 18:18 anaconda-ks.cfg
权限		引用计数 所有者 所属组 文件大小 文件修改时间  文件名
```

- 权限：[详情](#permission)
- 引用计数：文件的引用计数代表该文件的硬链接个数，目录的引用计数代表该目录下有多少个一级子目录
- 所有者：这个文件属于哪个用户。默认所有者是文件的建立用户
- 所属组：默认属组是文件建立用户的有效组，一般情况下就睡建立用户的所在组
- 文件大小：默认单位是字节
- 文件修改时间：文件状态修改或文件数据修改都会改变这个时间，不是文件创建的时间
- 文件名：文件的名字



### 2.2 cd 命令

- 命令名称：cd
- 英文原意：change directory
- 所在路径：Shell 内置命令
- 执行权限：所有用户
- 功能描述：切换所在目录



#### 2.2.1 cd 命令的简化用法

| 特殊符号 | 作用             |
| -------- | ---------------- |
| ～       | 代表用户的家目录 |
|          | 代表上次所在目录 |
| .        | 代表当前目录     |
| ..       | 代表上级目录     |



#### 2.2.2 绝对路径和相对路径

- 绝对路径：以根目录为参照物
- 相对路径：以当前目录为参照物



### 2.3 pwd 命令

- 命令名称：pwd
- 英文原意：print name of working directory
- 所在路径：/bin/pwd
- 执行权限：所有用户
- 功能描述：查询所在的工作目录



### 2.4 mkdir 命令

- 命令名称：mkdir
- 英文原意：make directories
- 所在路径：/bin/mkdir
- 执行权限：所有用户
- 功能描述：创建空目录

```bash
[root@localhost ~]# mkdir [选项] 目录名
选项：
	-p：递归建立所需目录
```

 > *目录和文件不能重名*



### 2.5 rmdir 命令

- 命令名称：rmdir
- 英文原意：remove empty directories
- 所在路径：/bin/rmdir
- 执行权限：所有用户
- 功能描述：删除空目录

```bash
[root@localhost ~]# rmdir [选项] 目录名
选项：
	-p：递归删除目录
```

> *rmdir 命令只能删除空目录，一旦目录中有内容就会报错，删除文件或者目录一般使用 rm 命令。放误删软件 Extundelete*



## 三、文件操作命令

### 3.1 touch 命令

- 命令名称：touch
- 英文原意：change file timestamps
- 所在路径：/bin/touch
- 执行权限：所有用户
- 功能描述：修改文件的时间戳



### 3.2 stat 命令

- 命令名称：stat
- 英文原意：display file or file system status
- 所在路径：/usr/bin/stat
- 执行权限：所有用户
- 功能描述：显示文件或文件系统的详细信息

```bash
[root@localhost ~]# stat anaconda-ks.cfg
  File: `anaconda-ks.cfg'
  Size: 1250            Blocks: 8          IO Block: 4096   regular file
Device: 803h/2051d      Inode: 2888817     Links: 1
Access: (0600/-rw-------)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2019-12-14 15:31:52.968999993 +0800
Modify: 2019-12-14 15:31:53.161999993 +0800
Change: 2019-12-14 15:31:55.805999993 +0800
```

> 		*Linux 中的文件没有创建时间*
>					
> 	访问时间（atime->access time）：读一次这个文件的内容，这个时间就会更新。比如对这个文件运用 more、cat等命令。*ls、stat命令不会修改文件的访问时间* 
>					
> 	修改时间（mtime->modifiy time）：修改时间是文件内容最后一次被修改时间。比如：vi后保存文件。ls -l列出的时间就是这个时间
>					
> 	状态改动时间（ctime->change time）：ctime是在写入文件、更改所有者、权限或链接设置时改变，是该文件的Inode最后一次被修改的时间，通过chmod、chown命令修改一次文件属性，这个时间就会更新



### 3.3 cat 命令

- 命令名称：cat
- 英文原意：concatenate files and print on the standard output
- 所在路径：/bin/cat
- 执行权限：所有用户
- 功能描述：合并文件并打印输出到标准输出

```bash
[root@localhost ~]# cat [选项] 文件名
选项：
	-A：相当于-vET选项的整合，用于列出所有隐藏符号   
	-E：列出每行结尾的回车符$    
	-n：显示行号   
	-T：把Tab键用^I显示出来   
	-v：列出特殊字符
```



### 3.4 more 命令

- 命令名称：more

- 英文原意：file perusal filter for crt viewin

- 所在路径：/bin/more

- 执行权限：所有用户

- 功能描述：分屏显示文件内容

- 交互命令：

  >空格键/f：向下翻页
  >
  >b：向上翻页
  >
  >回车键：向下滚动一行
  >
  >/字符串：搜索指定的字符串
  >
  >q：退出



### 3.5 less 命令

- 命令名称：less
- 英文原意：opposite of more
- 所在路径：/usr/bin/less
- 执行权限：所有用户
- 功能描述：分行显示文件内容
- 交互命令：与 more 命令的交互命令相同



### 3.6 head 命令

- 命令名称：head
- 英文原意：output the first part of files
- 所在路径：/usr/bin/head
- 执行权限：所有用户
- 功能描述：显示文件开头的内容（*默认显示10行*）

```bash
[root@localhost ~]# head [选项] 文件名
选项：
	-n 行数/-行数：从文件头开始，显示指定行数
	-v：显示文件名
```



### 3.7 tail 命令

- 命令名称：tail
- 英文原意：output the last part of files
- 所在路径：/usr/bin/tail
- 执行权限：所有用户
- 功能描述：显示文件结尾的内容（*默认显示10行*）

```bash
[root@localhost ~]# tail [选项] 文件名
选项：
	-n 行数/-行数：从文件结尾开始，显示指定行数
	-f：监听文件的新增内容
```



### 3.8 ln 命令

- 命令名称：ln
- 英文原意：make links between file
- 所在路径：/bin/ln
- 执行权限：所有用户
- 功能描述：在文件之间建立链接



#### 3.8.1 ln 命令的基本格式

```bash
[root@localhost ~]# ln [选项] 源文件目标文件
选项：
	-s：建立软链接文件。如果不加“-s”选项，则建立硬链接文件   
	-f：强制。如果目标文件已经存在，则删除目标文件后再建立链接文件
```

	创建硬链接：

```bash
[root@localhost ~]# touch cangls 
[root@localhost ~]# ln /root/cangls /tmp/ 
#建立硬链接文件，目标文件没有写文件名，会和原名一致
#也就是/root/cangls和/tmp/cangls是硬链接文件
```

	创建软链接：

```bash
[root@localhost ~]# touch bols 
[root@localhost ~]# ln -s /root/bols  /tmp/
#建立软链接文件
#软链接文件的源文件必须写成绝对路径，而不能写成相对路径（硬链接没有这样的要求）否则软链接文件会报错
```



#### 3.8.2 硬链接与软连接的特征

- 硬链接特征：

  - 源文件和硬链接文件拥有相同的Inode和Block
  - 修改任意一个文件，另一个都改变
  - 删除任意一个文件，另一个都能使用
  - 硬链接标记不清，很难确认硬链接文件位置，不建议使用
  - 硬链接不能链接目录
  - 硬链接不能跨分区
  - 硬链接示意图：

  ![硬链接示意图](http://img.rocyan.cn/blog/2024/04/66134dcba67a1.jpg)

  

- 软链接特征：

  - 软链接和源文件拥有不同的Inode和Block
  - 两个文件修改任意一个，另一个都改变
  - 删除软链接，源文件不受影响；删除源文件，软链接不能使用
  - 软链接没有实际数据，只保存源文件的Inode，不论源文件多大，软链接大小不变软链接的权限是最大权限lrwxrwxrwx.，但是由于没有实际数据，最终访问时需要参考源文件权限
  - 软链接可以链接目录
  - 软链接可以跨分区
  - 软链接特征明显，建议使用软连接
  - 软链接示意图

  ![软链接示意图](http://img.rocyan.cn/blog/2024/04/66134dcecb681.jpg)



## 四、目录和文件都能操作的命令

### 4.1 rm 命令

- 命令名称：rm
- 英文原意：remove files or directories
- 所在路径：/bin/rm
- 执行权限：所有用户
- 功能描述：删除文件或目录

```bash
[root@localhost ~]# rm [选项] 文件或目录
选项：
	-f：强制删除（force）
	-i：交互删除，在删除之前会询问用户(默认是交互的)
	-r：递归删除，可以删除目录（recursive）
```



### 4.2 cp 命令

- 命令名称：cp
- 英文原意：copy files and directories
- 所在路径：/bin/cp
- 执行权限：所有用户
- 功能描述：复制文件和目录

```bash
[root@localhost ~]# cp [选项] 源文件目标文件
选项：
	-a：相当于-dpr选项的集合，使复制的文件和原文件完全相同
	-d：如果源文件为软链接（对硬链接无效），则复制出的目标文件也为软链接
	-i：询问，如果目标文件已经存在，则会询问是否覆盖
	-p：复制后目标文件保留源文件的属性（包括所有者、所属组、权限和时间）
	-r：递归复制，用于复制目录
```



### 4.3 mv 命令

- 命令名称：mv
- 英文原意：move (rename) files
- 所在路径：/bin/mv
- 执行权限：所有用户
- 功能描述：移动文件或改名

```bash
[root@localhost ~]# mv [选项] 源文件目标文件
选项：
	-f：强制覆盖，如果目标文件已经存在，则不询问，直接强制覆盖
	-i：交互移动，如果目标文件已经存在，则询问用户是否覆盖（默认选项）
	-v：显示详细信息
```



## <span id="permission">五、基本权限管理</span>

### 5.1 权限的介绍

```bash
[root@localhost ~]# ls -l install.log
-rw-r--r--. 1 root root 24772 1月  14 18:17 install.log
```

- 权限共有10位，部分权限最后会有一个“.”

![权限位的含义](http://img.rocyan.cn/blog/2024/04/66134dd4d88e0.png)

- 第1位：代表文件类型，以下为常见的文件类型

  - -：普通文件
  - b：块设备文件。这是一种特殊设备文件，存储设备都是这种文件，如分区文件/dev/sda1就是这种文件
  - c：字符设备文件。这也是特殊设备文件，输入设备一般都是这种文件，如鼠标、键盘等
  - d：目录文件。Linux中一切皆文件，所以目录也是文件的一种
  - l：软链接文件
  - p：管道符文件。这是一种非常少见的特殊设备文件
  - s：套接字文件。这也是一种特殊设备文件，一些服务支持Socket访问，就会产生这样的文件。

- 第 2 ～ 4 位：代表文件所有者的权限

  - r：代表 read，读取权限
  - w：代表write，写权限
  - x：代表execute，执行权限

  *如果有字母，则代表拥有对应的权限；如果是“-”，则代表没有对应的权限*

- 第5～7位代表文件所属组的权限，同样拥有“rwx”权限

- 第8～10位代表其他人的权限，同样拥有“rwx”权限

- 最后一个 “." 表示是 selinux



### 5.2 基本权限命令

- 命令名称：chmod
- 英文原意：change file mode bits
- 所在路径：/bin/chmod
- 执行权限：所有用户
- 功能描述：修改文件的权限模式
- 注意点：普通用户可以修改属于自己的文件的权限

```bash
[root@localhost ~]# chmod [选项] 权限模式文件名
选项：
	-R：递归设置权限，也就是给子目录中的所有文件设定权限
```

#### 5.2.1 权限模式

- chmod命令的权限模式的格式是“\[ugoa\]\[\[+-=\]\[perms\]\]”，也就是“\[用户身份\]\[\[赋予方式\]\[权限\]\]”的格式
- 用户身份
  - u：代表所有者（user）
  - g：代表所属组（group）
  - o：代表其他人（other）
  - a：代表全部身份（all）
- 赋予方式
  - +：加入权限
  - -：减去权限
  - =：设置权限
- 权限
  - r：读取权限（read）
  - w：写权限（write）
  - x：执行权限（execute）

#### 5.2.2 数字权限

- 4：代表“r”权限 
- 2：代表“w”权限 
- 1：代表“x”权限

#### 5.2.3 常用权限

- 644：这是文件的基本权限，代表所有者拥有读、写权限，而所属组和其他人拥有只读权限
- 755：这是文件的执行权限和目录的基本权限，代表所有者拥有读、写和执行权限，而所属组和其他人拥有读和执行权限
- 777：这是最大权限。在实际的生产服务器中，要尽力避免给文件或目录赋予这样的权限，这会造成一定的安全隐患

### 5.3 基本权限的作用

#### 5.3.1 权限含义的解释

- 权限对文件的作用
  - 读（r）：对文件有读（r）权限，代表可以读取文件中的数据。如果把权限对应到命令上，那么一旦对文件有读（r）权限，就可以对文件执行 **cat、more、less、head、tail** 等文件查看命令。
  - 写（w）：对文件有写（w）权限，代表可以修改文件中的数据。如果把权限对应到命令上，那么一旦对文件有写（w）权限，就可以对文件执行 **vim、echo** 等修改文件数据的命令。**注意：对文件有写权限，是不能删除文件本身的，只能修改文件中的数据。如果要想删除文件，则需要对文件的上级目录拥有写权限。**
  - 执行（x）：对文件有执行（x）权限，代表文件拥有了执行权限，可以运行。在 Linux 中，只要文件有执行（x）权限，这个文件就是执行文件了。只是这个文件到底能不能正确执行，不仅需要执行（x）权限，还要看文件中的代码是不是正确的语言代码。对文件来说，执行（x）权限是最高权限。
- 权限对目录的作用
  - 读（r）：对目录有读（r）权限，代表可以查看目录下的内容，也就是可以查看目录下有哪些子文件和子目录。如果把权限对应到命令上，那么一旦对目录拥有了读（r）权限，就可以在目录下执行 **ls** 命令，查看目录下的内容了。
  - 写（w）：对目录有写（r）权限，代表可以修改目录下的数据，也就是可以在目录中新建、删除、复制、剪切子文件或子目录。如果把权限对应到命令上，那么一旦对目录拥有了写（w）权限，就可以在目录下执行 **touch、rm、cp、mv** 命令。对目录来说，写（w）权限是最高权限。
  - 执行（x）：目录是不能运行的，那么对目录拥有执行（x）权限，代表可以进入目录。如果把权限对应到命令上，那么一旦对目录拥有了执行（x）权限，就可以对目录执行 **cd** 命令，进入目录。

#### 5.3.2 目录的可用权限

- 目录的可用权限其实只有以下几个:

  > 0：任何  权限都不赋予
  >
  > 5：基本的目录浏览和进入权限
  >
  > 7：完全权限



### 5.4 所有者和所属组命令

#### 5.4.1 chown 命令

- 命令名称：chown
- 英文原意：change file owner and group
- 所在路径：/bin/chown
- 执行权限：所有用户
- 功能描述：修改文件和目录 的所有者和所属组
- 注意点：普通用户不能修改文件的所有者（哪怕这个文件属于这个普通用户），只有超级用户才能修改

```bash
[root@localhost ~]# chown [选项] 所有者:所属组文件或目录
选项：
	-R：递归设置权限，也就是给子目录中的所有文件设置权限
```

*所有者和所属组之前可以用 “:” 或 “.” 分隔*

#### 5.4.2 chgrp 命令

- 命令名称：chgrp
- 英文原意：change group ownership
- 所在路径：/bin/chgrp
- 执行权限：所有用户
- 功能描述：修改文件和目录的所属组



### 5.5 umask 默认权限

#### 5.5.1 查看系统的 umask 权限

```bash
[root@localhost ~]# umask 
0022 
#用八进制数值显示umask权限
[root@localhost ~]# umask-S 
u=rwx,g=rx,o=rx 
#用字母表示文件和目录的初始权限
```



#### 5.5.2 umask 权限的计算方法

- 新建文件和目录的默认最大权限：

  - 对文件来讲，新建文件的默认最大权限是666，没有执行（x）权限。这是因为执行权限对文件来讲比较危险，不能在新建文件的时候默认赋予，而必须通过用户手工赋予。
  - 对目录来讲，新建目录的默认最大权限是777。这是因为对目录而言，执行（x）权限仅仅代表进入目录，所以即使建立新文件时直接默认赋予，也没有什么危险。

- 官方的标准算法：

  - umask默认权限需要使用 **二进制进行逻辑与**和**逻辑非**联合运算才可以得到正确的新建文件和目录的默认权限。

- 推荐的算法：

  - 文件的默认权限最大只能是666，而umask的值是022

    “-rw-rw-rw-”减去“-----w--w-”等于“-rw-r--r—”

  - 目录的默认权限最大可以是777，而umask的值是022

    “drwxrwxrwx”减去“d----w--w-”等于“drwx-r-xr-x”

  **umask默认权限的计算绝不是数字直接相减**

  - 文件的默认权限最大只能是666，而umask的值是033

    “-rw-rw-rw-”减去“-----wx-wx”等于“-rw-r-- r—”



#### 5.5.3 修改umask

- 临时修改：直接在umask后输入修改后的权限值

```bash
[root@localhost ~]# umask 033
```

- 永久修改：修改环境变量 /etc/profile



## 六、帮助命令

### 6.1 man 命令

- 命令名称：man
- 英文原意：format and display the on-line manual pages
- 所在路径：/usr/bin/man
- 执行权限：所有用户
- 功能描述：显示联机帮助手册

```bash
[root@localhost ~]# man [选项] 命令
选项：
	-f：查看命令拥有哪个级别的帮助（等同于 whatis 命令）
	-k：查看和命令相关的所有帮助（等同于 apropos 命令）
```



#### 6.1.1 man 命令的快捷方式

| 快捷键   | 作用                                        |
| -------- | ------------------------------------------- |
| y/上箭头 | 向上移动一行                                |
| e/下箭头 | 向下移动一行                                |
| b/PgUp   | 向上翻一页                                  |
| f/PgDn   | 向下翻一页                                  |
| g/<      | 移动到第一页                                |
| G/>      | 移动到最后一页                              |
| q        | 退出                                        |
| /字符串  | 从当前页向下搜索字符串                      |
| ?字符串  | 从当前页向上搜索字符串                      |
| n        | 当搜索字符串时，可以使用n键找到下一个字符串 |
| N        | 当搜索字符串时，使用N键反向查询字符串。     |



#### 6.1.2 man 命令的帮组级别

| 级别 | 作用                                         |
| ---- | -------------------------------------------- |
| 1    | 普通用户可以执行的系统命令和可执行文件的帮助 |
| 2    | 内核可以调用的函数和工具的帮助               |
| 3    | C 语言函数的帮助                             |
| 4    | 设备和特殊文件的帮助                         |
| 5    | 配置文件的帮助                               |
| 6    | 游戏的帮助（个人版的Linux中是有游戏的）      |
| 7    | 杂项的帮助                                   |
| 8    | 超级用户可以执行的系统命令的帮助             |
| 9    | 内核的帮助                                   |



### 6.2 info 命令

- 命令名称：info
- 英文原意：read documentation in info format
- 所在路径：/usr/bin/info
- 执行权限：所以用户
- 功能描述：info命令的帮助信息是一套完整的资料，每个单独命令的帮助信息只是这套完整资料中的某一个小章节

| 快捷键   | 作用                                      |
| -------- | ----------------------------------------- |
| y/上箭头 | 向上移动一行                              |
| e/下箭头 | 向下移动一行                              |
| b/PgUp   | 向上翻一页                                |
| f/PgDn   | 向下翻一页                                |
| Tab      | 在有 “*” 符号的节点间进行切               |
| 回车     | 进入有 “*” 符号的子页面，查看详细帮助信息 |
| u        | 进入上一层信息（回车是进入下一层信息）    |
| n        | 进入下一小节信息                          |
| p        | 进入上一小节信息                          |
| ?        | 查看帮助信息                              |
| q        | 退出info信息                              |



### 6.3 help 命令

- 命令名称：help
- 英文原意：help
- 所在路径：Shell内置命令
- 执行权限：所有用户
- 功能描述：显示Shell内置命令的帮助
- 注意点：可以使用type命令来区分内置命令与外部命令，如果显示路径则是外部命令。shell是Linux的命令解释器



### 6.4 --help 选项

> 		绝大多数命令都可以使用“--help”选项来查看帮助，这也是一种获取帮助的方法。例如：
>					
> 	```bash
> 	[root@localhost ~]# ls --help 
> 	```
>					
> 	这种方法非常简单，输出的帮助信息基本上是man命令的信息简要版，部分可显示中文。



## 七、搜索命令

### 7.1 whereis 命令

- 命令名称：whereis
- 英文原意：locate the binary, source, and manual page files for a command
- 所在路径：/usr/bin/whereis
- 执行权限：所有用户
- 功能描述：查找二进制命令、源文件和帮助文档的命令



### 7.2 which 命令

- 命令名称：which
- 英文原意：shows the full path of (shell) commands
- 所在路径：/usr/bin/which
- 执行权限：所有用户
- 功能描述：列出命令的所在路径
- 与 whereis 的区别：whereis命令可以  在查找 到二进制命令的同时，查找到帮助文档的位置，而which命令在查找到二进制命令的同时，如果这个命令有别名，则还可以找到别名命令



### 7.3 locate 命令

- 命令名称：locate
- 英文原意：find files by name
- 所在路径：/usr/bin/locate
- 执行权限：所有用户
- 功能描述：按照文件名搜索文件
- 优点：按照数据库搜索，搜索速度快，消耗资源小。数据库位置/var/lib/mlocate/mlocate.db，可以使用updatedb命令强制更新数据库
- 缺点：只能按照文件名来搜索文件，而不能执行更复杂的搜索，比如按照权限、大小、修改时间等搜索文件
- 配置文件：/etc/updatedb.conf

```bash
[root@localhost ~]# vi /etc/updatedb.conf
PRUNE_BIND_MOUNTS = "yes" #开启搜索限制，也就是让这个配置文件生效
PRUNEFS = "......" #在locate执行搜索时，禁止搜索这些文件系统类型
PRUNENAMES = "......" #在locate执行搜索时，禁止搜索带有这些扩展名的文件
PRUNEPATHS = "......" #在locate执行搜索时，禁止搜索这些系统目录
```



### 7.4 find 命令

- 命令名称：find
- 英文原意：search for files in a directory hierarchy
- 所在路径：/bin/find
- 执行权限：所有用户
- 功能描述：在目录中搜索文件



#### 7.4.1 按照文件名搜索

```bash
[root@localhost ~]# find 搜索路径 [选项] 搜索内容
选项：
	-name：按照文件名搜索
	-iname：按照文件名搜索，不区分文件名大小写
	-inum：按照inode号搜索
```



#### 7.4.2 按照文件大小搜索

```bash
[root@localhost ~]# find 搜索路径 [选项] 搜索内容
选项：
	-size [+|-]大小：按照指定大小搜索文件
```

> 这里的“+”的意思是搜索比指定大小还要大的文件，“-”的意思是搜索比指定大小还要小的文件
>
> ##### find 命令的单位：
>
> 'b'    for 512-byte blocks (this is the default if no suffix is used) #这是默认单位，如果单位为b或不写单位，则按照512 Byte搜索              
>
> 'c'    for bytes     #搜索单位是c，按照字节搜索              
>
> 'w'    for two-byte words #搜索单位是w，按照双字节（中文）搜索              
>
> 'k'    for Kilobytes (units of 1024 bytes)     #按照KB单位搜索，必须是小写的k               
>
> 'M'    for Megabytes (units of 1048576 bytes) #按照MB单位搜索，必须是大写的M               
>
> 'G'    for Gigabytes (units of 1073741824 bytes)     #按照GB单位搜索，必须是大写的G



#### 7.4.3 按照修改时间搜索

```bash
[root@localhost ~]# find 搜索路径 [选项] 搜索内容
选项：
	-atime [+|-]时间：按照文件访问时间搜索
	-mtime [+|-]时间：按照文件数据修改时间搜索
	-ctime [+|-]时间：按照文件状态修改时间搜索
```

> 以 mtime 数据修改时间来举例，说明“[+ | -]时间”的含义：
>
> - -5：代表5天内修改的文件
> - 5：代表前5～6天那一天修改的文件
> - +5：代表6天前修改的文件
>
> ![时间轴](http://img.rocyan.cn/blog/2024/04/66134dda0fd16.png)



#### 7.4.4 按照权限搜索

```bash
[root@localhost ~]# find 搜索路径 [选项] 搜索内容
选项：
	-perm 权限模式：查找文件权限刚好等于“权限模式”的文件
	-perm -权限模式：查找文件所有者、所属组、其他权限全部大于等于该权限模式的文件
	-perm +权限模式：查找文件所有者、所属组、其他权限中有一个大于等于该权限模式的文件
  
 例如：
 [root@localhost ~]# find . -perm 755
 # 搜索当前目录下权限刚好等于 755 的文件
 
 [root@localhost ~]# find . -perm -755
 # 搜索当前目录下 755 或 777 的文件
 
 [root@localhost ~]# find . -perm +755
 # 搜索当前目录下所有者、所属组、其他权限中有一个大于等于755的文件，如 700 等
```



#### 7.4.5 按照所有者和所属组搜索

```bash
[root@localhost ~]# find 搜索路径 [选项] 搜索内容
选项：
	-uid 用户ID：按照用户ID查找所有者是指定ID的文件
	-gid 组ID：按照用户组ID查找所属组是指定ID的文件
	-user 用户名：按照用户名查找所有者是指定用户的文件
	-group 组名：按照组名查找所属组是指定用户组的文件
	-nouser：查找没有所有者的文件
```

> 按照所有者和所属组搜索时，“-nouser”选项比较常用，主要用于查找垃圾文件
>
> 只有一种情况例外，那就是外来文件。比如光盘和U盘中的文件如果是由Windows复制的，在Linux中查看就是没有所有者的文件；再比如手工源码包安装的文件，也有可能没有所有者



#### 7.4.6 按照文件类型搜索

```bash
[root@localhost ~]# find 搜索路径 [选项] 搜索内容
选项：
	-type d：查找目录
	-type f：查找普通文件 
	-type l：查找软链接文件
```



#### 7.4.7 逻辑运算符

```bash
[root@localhost ~]# find 搜索路径[选项] 搜索内容
选项：
	-a：and逻辑与
	-o：or逻辑或
	-not/!：not逻辑非
```



#### 7.4.8 其他选项

1. -exec 选项

   ```bash
   [root@localhost ~]# find 搜索路径 [选项] 搜索内容 -exec 命令2 {} \;
   ```

   这个选项的作用其实是把find命令的结果交给由“-exec”调用的命令2来处理。“{}”就代表find命令的查找结果

2. -ok 选项

   ```bash
   [root@localhost ~]# find 搜索路径 [选项] 搜索内容 -ok 命令2 {} \;
   ```

   “-ok”选项和“-exec”选项的作用基本一致，区别在于  ：“-exec”的命令2会直接处理，而不询问；“-ok”的命令2在处理前会先询问用户是否这样处理，在得到确认命令后，才会执行



### 7.5 grep 命令

```bash
[root@localhost ~]# grep [选项] "搜索内容" 文件名
选项：
	-i：忽略大小写
	-n：输出行号
	-v：反向查找
	--color=auto: 搜索出的关键字用颜色显示
```

- find 命令和 grep 命令的区别：

  - find命令用于  在系统中搜索符合条件的文件名，如果需要模糊查询，则使用通配符进行匹配，通配符是完全匹配（find命令可以通过-regex选项，把匹配规则转为正则表达式规则，但是不建议如此）。
  - grep命令用于在文件中搜索符合条件的字符串，如果需要模糊查询， 则使用正则表达式进行匹配，正则表达式是包含匹配。

- 通配符和正则表达式的区别：

  - 通配符：用于匹配文件名，完全匹配

    | 通配符 | 作用                                                         |
    | ------ | ------------------------------------------------------------ |
    | ？     | 匹配一个任意字符                                             |
    | *      | 匹配0个或任意多个任意字符，也就是可以匹配任何内容            |
    | []     | 匹配中括号中任意一个字符。例如，[abc]代表一定匹配一个字符，或者是a，或者是b，或者是c |
    | [-]    | 匹配中括号中任意一个字符，-代表一个范围。例如，[a-z]代表匹配一个小写字母；[A-Za-z]代表匹配英文字母；[0-9]代表匹配数字 |
    | [^]    | 逻辑非，表示匹配不是中括号内的一个字符。例如，[^0-9]代表匹配一个不是数字的字符 |

  - 正则表达式：用于匹配字符串，包含匹配

    | 正则符 | 作用                                                         |
    | ------ | ------------------------------------------------------------ |
    | ？     | 匹配前一个字符重复0次，或1次（?是扩展正则，需要使用egrep命令） |
    | *      | 匹配前一个字符重复0次，或任意多次                            |
    | []     | 匹配中括号中任意一个字符。例如，[abc]代表一定匹配一个字符，或者是a，或者是b，或者是c |
    | [-]    | 匹配中括号中任意一个字符，-代表一个范围。例如，[a-z]代表匹配一个小写字母 |
    | [^]    | 逻辑非，表示匹配不是中括号内的一个字符。例如，[^0-9]代表匹配一个不是数字的字符 |
    | ^      | 匹配行首                                                     |
    | $      | 匹配行尾                                                     |



### 7.6 管道符

- 命令格式：命令 1 | 命令 2
- 命令 1 的正确输出作为命令 2 的操作对象



### 7.7 命令的别名

```bash
[root@localhost ~]# alias
#查询命令别名
[root@localhost ~]# alias 别名='原命令' 
#设定命令别名
例如：
[root@localhost ~]# alias ser='service network restart'
#用ser别名，替代service network restart命令
```

> 用 alias 定义的别名是临时的，永久修改要修改配置文件 ~/.bashrc



## 八、压缩和解压命令

### 8.1 ".zip" 格式

- “.zip”是Windows中最常用的压缩格式，Linux也可以正确识别“.zip”格式，这可以方便地和Windows系统通用压缩文件。



#### 8.1.1 ".zip" 格式的压缩命令

- 命令名称：zip
- 英文原意：package and compress (archive) files
- 所在路径：/usr/bin/zip
- 执行权限：所有用户
- 功能描述：压缩文件或目录

```bash
[root@localhost ~]# zip [选项] 压缩包名源文件或源目录
选项：
	-r：压缩目录
	
例如：[root@localhost ~]# zip ana.zip anaconda-ks.cfg
```



#### 8.1.2 ".zip" 格式的解压命令

- 命令名称：unzip
- 英文原意：list, test and extract compressed files in a ZIP archive
- 所在路径：/usr/bin/unzip
- 执行权限：所有用户
- 功能描述：列表、测试和提取压缩文件中的文件

```bash
[root@localhost ~]# unzip [选项] 压缩包名
选项：
	-d：指定解压缩位置
	
例如：
[root@localhost ~]# unzip -d /tmp/ ana.zip 
#把压缩包解压到指定位置
```



### 8.2 ".gz" 格式

- **.gz 不会打包**
- “.gz”格式是Linux中最常用的压缩格式



#### 8.2.1 ".gz" 格式的压缩命令

- 命令名称：gzip
- 英文原意：compress or expand files
- 所在路径：/bin/gzip
- 执行权限：所有用户
- 功能描述：压缩文件或目录
- 注意点：用 gzip 压缩文件后原文件自动删除

```bash
[root@localhost ~]# gzip [选项] 源文件
选项：
	-c：将压缩数据输出到标准输出中，可以用于保留源文件 
	-d：解压缩 
	-r：压缩目录
  
[root@localhost ~]# gzip -c anaconda-ks.cfg > anaconda-ks.cfg.gz #使用-c选项，但是不让压缩数据输出到屏幕上，而是重定向到压缩文件中#这样可以在压缩文件的同时不删除源文件
```



#### 8.2.2 ".gz" 格式的解压命令

- 命令名称：gunzip
- 英文原意：compress or expand files
- 所在路径：/bin/gunzip
- 执行权限：所有用户
- 功能描述：解压缩文件或目录

```bash
例如：
[root@localhost ~]# gunzip install.log.gz 
[root@localhost ~]# gzip -d anaconda-ks.cfg.gz
```

> 两个命令都可以解压，建议使用第二种



### 8.3 ".bz2" 格式

- **".bz2" 格式不能压缩目录**
- “.bz2”格式是Linux的另一种压缩格式，从理论上来讲，“.bz2”格式的算法更先进、压缩比更好；而“.gz”格式相对来讲压缩的时间更快



#### 8.3.1 ".bz2" 格式的压缩命令

- 命令名称：bzip2
- 英文原意：a block-sorting file compressor
- 所在路径：/usr/bin/bzip2
- 执行权限：所有用户
- 功能描述：.bz2格式的压缩命令

```bash
[root@localhost ~]# bzip2 [选项] 源文件
选项：
	-d：解压缩   
	-k：压缩时，保留源文件   
	-v：显示压缩的详细信息
	
例如：
[root@localhost ~]# bzip2 anaconda-ks.cfg 
#压缩成.bz2格式
[root@localhost ~]# bzip2 -k install.log.syslog 
#保留源文件压缩
```



#### 8.3.2 ".bz2" 格式的解压命令

- 命令名称：bunzip2
- 英文原意：a block-sorting file compressor
- 所在路径：/usr/bin/bunzip2
- 执行权限：所有用户
- 功能描述：.bz2格式的解压缩命令

```bash
[root@localhost ~]# bunzip2 anaconda-ks.cfg.bz2
[root@localhost ~]# bzip2 -d install.log.syslog.bz2
```

> 两个命令都可以解压，建议使用第二种



### 8.4 ".tar" 格式

- **".tar" 格式只打包不会压缩**



#### 8.4.1 ".tar" 格式的打包命令

- 命令名称：tar
- 英文原意：tar
- 所在路径：/bin/tar
- 执行权限：所有用户
- 功能描述：打包与解打包命令

```bash
[root@localhost ~]# tar [选项] [-f 压缩包名] 源文件或目录
选项：
	-c：打包 
	-f：指定压缩包的文件名。压缩包的扩展名是用来给管理员识别格式的，所以一定要正确指定扩展名
	-v：显示打包文件过程
```



#### 8.4.2 ".tar" 格式的解打包命令

- “.tar”格式的解打包也需要使用tar命令，但是选项不太一样。命令格式如下：

```bash
[root@localhost ~]# tar [选项] 压缩包
选项：
	-x：解打包  
	-f：指定压缩包的文件名 
	-v：显示解打包文件过程  
	-t：测试，就是不解打包，只是查看包中有哪些文件
	-C(大) 目录：指定解打包位置
```



### 8.5 ".tar.gz" 和 ".tar.bz2" 格式

- 这两个是 Linux 中常用的两个压缩包格式

```bash
[root@localhost ~]# tar [选项] 压缩包源文件或目录
选项：
	-z：压缩和解压缩“.tar.gz”格式  
	-j：压缩和解压缩“.tar.bz2”格式
```

例如：.tar.gz 格式

```bash
[root@localhost ~]# tar -zcvf tmp.tar.gz /tmp/ 
#把/tmp/目录直接打包压缩为“.tar.gz”
格式[root@localhost ~]# tar -zxvf tmp.tar.gz 
#解压缩与解打包“.tar.gz”格式
```

例如：.tar.bz2 格式

```bash
[root@localhost ~]# tar -jcvf tmp.tar.bz2 /tmp/ 
#打包压缩为“.tar.bz2”格式，注意压缩包文件名
[root@localhost ~]# tar -jxvf tmp.tar.bz2 
#解压缩与解打包“.tar.bz2”格式
```

```bash
[root@localhost ~]# tar -zcvf  test.tar.gz  test/ 
#压缩
[root@localhost ~]# tar  -ztvf  test.tar.gz
#只查看，不解压
[root@localhost ~]# tar  -zxvf  test.tar.gz -C /tmp 
#解压缩到指定位置
[root@localhost ~]# tar  -zxvf  test.tar.gz -C /tmp  test/cde
#只解压压缩包中的特定文件，到指定位置
```

| 选项  | 作用                                                     |
| ----- | -------------------------------------------------------- |
| -zcvf | 压缩为 ".tar.gz" 格式                                    |
| -zxvf | 解压 ".tar.gz" 格式                                      |
| -jcvf | 压缩为 ".tar.bz2" 格式                                   |
| -jxvf | 解压 ".tar.bz2" 格式                                     |
| -ztf  | 查看 ".tar.gz" 格式的压缩包中有哪些内容（只显示文件名）  |
| -ztvf | 查看 ".tar.gz" 格式的压缩包中有哪些内容（详细显示）      |
| -jtf  | 查看 ".tar.bz2" 格式的压缩包中有哪些内容（只显示文件名） |
| -jtvf | 查看 ".tar.bz2" 格式的压缩包中有哪些内容（详细显示）     |



## 九、关机和重启命令

### 9.1 sync 数据同步

- 命令名称：sync
- 英文原意：flush file system buffers
- 所在路径：/bin/sync
- 执行权限：所有用户
- 功能描述：刷新文件系统缓冲区



### 9.2 shutdown 命令

- 命令名称：shutdown
- 英文原意：bring the system down
- 所在路径：/sbin/shutdown
- 执行权限：超级用户
- 功能描述：关机和重启
- 注意点：关机和重启都建议使用这个命令

```bash
[root@localhost ~]# shutdown [选项] 时间 [警告信息] 
选项：
	-c：取消已经执行的shutdown命令
	-h：关机
  	-r：重启
```



### 9.3 reboot 命令

- 重启命令，在现在的系统中，reboot命令也是安全的，而且不需要加入过多的选项



### 9.4 halt 和 poweroff 命令

- 这两个都是关机命令，直接执行即可。这两个命令不会完整关闭和保存系统的服务，不建议使用



### 9.5 init 命令

- init是修改Linux运行级别的命令，也可以用于关机和重启。这个命令并不安全，不建议使用

```bash
[root@localhost ~]# init 0
#关机，也就是调用系统的 0 级别
[root@localhost ~]# init 6
#重启，也就是调用系统的 6 级别
```



## 十、常用网络命令

### 10.1 配置 IP 地址

- 配置 IP 地址

  - 配置 IP 地址有两种方法：

  1. setup 工具
  2. vi /etc/sysconfig/network-scripts/ifcfg-eth0

- 重启网络服务

```bash
[root@localhost ~]# service network restart
#重启网络服务
```

- 虚拟机需要桥接到有线网卡，并重启网络服务
- 复制镜像有可能需要重置 UUID（唯一识别符）

```bash
[root@localhost ~]# vi  /etc/sysconfig/network-scripts/ifcfg-eth0
#删除MAC地址行
[root@localhost ~]# rm  -rf  /etc/udev/rules.d/70-persistent-net.rules 
#删除MaC地址和UUID绑定文件
[root@localhost ~]# reboot 
#重启Linux 
```



### 10.2 ifconfig 命令

- 命令名称：ifconfig
- 英文原意：configure a network interface
- 所在路径：/sbin/ifconfig
- 执行权限：超级用户
- 功能描述：配置网络接口

![image-20191220184004530](http://img.rocyan.cn/blog/2024/04/66134ddf063c2.png)



### 10.3 ping 命令

- 命令名称：ping
- 英文原意：send ICMP ECHO_REQUEST to network hosts
- 所在路径：/bin/ping
- 执行权限：所有用户
- 功能描述：向网络主机发送ICMP请求

```bash
[root@localhost ~]# ping [选项] IP 
选项：   
	-b：后面加入广播地址，用于对整个网段进行探测
	-c 次数：用于指定ping的次数
	-s 字节：指定探测包的大小
```



### 10.4 netstat 命令

- 命令名称：netstat
- 英文原意：Print  network  connections,  routing  tables,  interface  statistics,  masquerade  connections,  and multicast memberships
- 所在路径：/bin/netstat
- 执行权限：所有用户
- 功能描述：输出网络连接、路由表、接口统计、伪装连接和组播成员
- 注意点：在CentOS 7.x中netstat命令默认没有安装，如果需要使用，需要安装net-snmp和net-tools软件包

```bash
[root@localhost ~]# netstat [选项] 
选项：
	-a：列出所有网络状态，包括Socket程序
	-c 秒数：指定每隔几秒刷新一次网络状态 
	-n：使用IP地址和端口号显示，不使用域名与服务名
	-p：显示PID和程序名
	-t：显示使用TCP协议端口的连接状况
	-u：显示使用UDP协议端口的连接状况
	-l：仅显示监听状态的连接
	-r：显示路由表
```

例1：查看本机开启的端口

```bash
[root@localhost ~]# netstat -tuln
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address               		State
tcp          0       0 0.0.0.0:3306             0.0.0.0:*                     LISTEN 
tcp          0       0 0.0.0.0:11211            0.0.0.0:*                     LISTEN 
tcp          0       0 0.0.0.0:22               0.0.0.0:* 										LISTEN 
tcp          0       0 :::11211                 :::*                          LISTEN 
tcp          0       0 :::80                    :::*                          LISTEN
tcp          0       0 :::22                    :::*                          LISTEN
udp          0       0 0.0.0.0:11211           	0.0.0.0:*    
udp          0       0 :::11211                 :::*  
#协议	接收队列	发送队列	本机的IP地址及端口号			远程主机的IP地址及端口号								状态
```

- Proto：网络连接的协议，一般就是TCP协议或者UDP协议

- Recv-Q：表示接收到的数据，已经在本地的缓冲中，但是还没有被进程取走

- Send-Q：表示从本机发送，对方还没有收到的数据，依然在本地的缓冲中，一般是不具备ACK标志的数据包

- Local Address：本机的IP地址和端口号

- Foreign Address：远程主机的IP地址和端口号

- State：状态。常见的状态主要有以下几种。

  - LISTEN：监听状态，只有TCP协议需要监听，而UDP协议不需要监听
  - ESTABLISHED：已经建立连接的状态。如果使用“-l”选项， 则看不到已经建立连接的状态
  - SYN_SENT：SYN发起包，就是主动发起连接的数据包
  - SYN_RECV：接收到主动连接的数据包
  - FIN_WAIT1：正在中断的连接
  - FIN_WAIT2：已经中断的连接，但是正在等待对方主机进行确认
  - TIME_WAIT：连接已经中断，但是套接字依然在网络中等待结束
  - CLOSED：套接字没有被使用。

  > 在这些状态中，我们最常用的就是LISTEN和ESTABLISHED状态，一种代表正在监听，另一种代表已经建立连接

例2：查看本机有哪些程序开启的端口

```bash
[root@localhost ~]# netstat -tulnp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address    Foreign Address   State    PID/Program name
tcp         0        0 0.0.0.0:3306      0.0.0.0:*          LISTEN   2359/mysqld         
tcp         0        0 0.0.0.0:11211     0.0.0.0:*          LISTEN   1563/memcached      
tcp         0        0 0.0.0.0:22        0.0.0.0:*          LISTEN   1490/sshd            
tcp         0        0 :::11211          :::*        				LISTEN   1563/memcached      
tcp         0        0 :::80             :::*               LISTEN   21025/httpd         
tcp         0        0 :::22             :::*               LISTEN   1490/sshd            
udp         0        0 0.0.0.0:11211     0.0.0.0:*                   563/memcached      
udp         0        0 :::11211          :::*                        1563/memcached
```

例3：查看所有连接

```bash
[root@localhost ~]# netstat -an
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address          State      
tcp        0      0 0.0.0.0:3306            0.0.0.0:*                LISTEN      
tcp        0      0 0.0.0.0:11211           0.0.0.0:*                LISTEN
tcp        0      0 117.79.130.170:80       78.46.174.55:58815       SYN_RECV    
tcp        0      0 0.0.0.0:22              0.0.0.0:*                LISTEN
tcp        0      0 117.79.130.170:22       124.205.129.99:10379     ESTABLISHED
tcp        0      0 117.79.130.170:22       124.205.129.99:11811     ESTABLISHED
...省略部分内容...
udp        0      0 0.0.0.0:11211           0.0.0.0:*
udp        0      0 :::11211                :::*                                   
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags    Type     State        I-Node Path
unix  2      [ ACC ]   STREAM   LISTENING   9761  @/var/run/hald/dbus-fr41WkQn1C
...省略部分内容...
```

> 从“Active UNIX domain sockets”开始，之后的内容就是Socket程序产生的连接，之前的内容都是网络服务产生的连接。我们可以在“-an”选项的   输出中看到各种网络连接状态，而之前的“-tuln”选项则只能看到监听状态。

### 10.5	write 命令

- 命令名称：write
- 英文原意：send a message to another user
- 所在路径：/usr/bin/write
- 执行权限：所有用户
- 功能描述：向其他用户发送信息

```bash
[root@localhost ~]#write user1 pts/1 
hello I will be in 5 minutes to restart, please save your data 
#向在pts/1（远程终端1）登录的user1用户发送信息，使用“Ctrl+D”快捷键保存发送的数据
```



### 10.6 wall 命令

- write命令用于  给指定用户发送信息，而wall命令用于给所有登录用户发送信息，包括你自己。执行时，在wall命令后加入需要发送的信息即可

```bash
[root@localhost ~]# wall "I will be in 5 minutes to restart, please save your data" 
```



### 10.7 mail 命令

- 命令名称：mail
- 英文原意：send and receive Internet mail
- 所在路径：/bin/mail
- 执行权限：所有用户
- 功能描述：发送和接收电子邮件

例1：发送邮件

```bash
[root@localhost ~]# mail user1
Subject: hello 						<- 邮件标题
Nice to meet you!					<- 邮件具体内容
.                         <- 使用“.”来结束邮件输入
#发送邮件给user1用户
```

> 		接收到的邮件都保存在“/var/spool/mail/用户名”中，每个用户都有一个以自己的用户名命名的邮箱

例2：发送文件内容（常用）

```bash
[root@localhost ~]# mail -s "test mail" root < /root/anaconda-ks.cfg 
选项：
	-s：指定邮件标题
#把/root/anaconda-ks.cfg文件的内容发送给root用户
```

> 在写脚本时，有时需要脚本自动发送一些信息给指定用户，可以把要发送的信息预先写到文件中

例3：查看已经接收到邮件

```bash
[root@localhost ~]# mail
Heirloom Mail version 12.4 7/29/08.Type ?for help.
"/var/spool/mail/root": 1 message 1 new 
>N  1 root                  Mon Dec  5 22:45  68/1777  "test mail"<-之前收到的邮件
>N  2 root                  Mon Dec  5 23:08  18/602   "hello"
#未阅读 编号 发件人						 时间												 标题													
&                                                        <-等待用户输入命令
```

> “N”代表未读邮件，如果是已经阅读过的邮件，则前面是不会有这个“N”的；之后的数字是邮件的编号，我们主要通过这个编号来进行邮件的操作。如果我们想要查看第一封邮件，则只需输入邮件的编号“1”就可以了



## 十一、系统痕迹命令

- 系统中有一些重要的痕迹日志文件，如/var/log/wtmp、/var/run/utmp、/var/log/btmp、/var/log/lastlog等日志文件，如果你用vim打开这些文件，你会发现这些文件是二进制乱码。这是由于这些日志中保存的是系统的重要登录痕迹，包括某个用户何时登录了系统，何时退出了系统，错误登录等重要的系统信息。这些信息要是可以通过vim打开，就能编辑，这样痕迹信息就不准确，所以这些重要的痕迹日志，只能通过对应的命令来进行查看。



### 11.1 w 命令

- w命令是显示系统中正在登陆的用户信息的命令，这个命令查看的痕迹日志是/var/run/utmp
- 命令名称：w
- 英文原意：Show who is logged on and what they are doing
- 所在路径：/usr/bin/w
- 执行权限：所有用户
- 功能描述：显示灯用户，和他正在做什么

```bash
[root@localhost ~]# w
00:06:11 up  5:47,  2 users,  load average: 0.00, 0.01, 0.05
#系统时间	  持续开机时间 登陆用户					系统在1分钟，5分钟，15分钟前的平均负载
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty1                      23:59    7:07   0.08s  0.08s -bash
root     pts/2    192.168.252.1    23:42    3.00s  0.44s  0.06s w
```

第一行信息内容如下：

| 内容                           | 说明                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| 00:06:11                       | 系统当前时间                                                 |
| up 5:47,                       | 系统的运行时间，本机已经运行5小时47分钟                      |
| 2 users                        | 当前登陆了两个用户                                           |
| load average：0.00, 0.01, 0.05 | 系统在之前1分钟、5分钟、15分钟的平均负载。如果CPU是单核的，则这个数值超过1就是高负载；如果CPU是四核  的，则这个数值超过4就是高负载（这个平均负载完全是依据个人经验来进行判断的，一般认为不应该超过服务器CPU的核数） |

第二行信息内容如下：

| 内容   | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| USER   | 当前登陆的用户                                               |
| TTY    | 登陆的终端：tty1-6：本地字符终端（alt+F1-6切换）                                                                 tty7：本地图形终端（ctrl+alt+F7切换，必须安装启动图形界面）                                                   pts/0-255:远程终端 |
| FROM   | 登陆的IP地址，如果是本地终端，则是空                         |
| LOGIN@ | 登陆时间                                                     |
| IDLE   | 用户闲置时间                                                 |
| JCPU   | 所有的进程占用的CPU时间                                      |
| PCPU   | 当前进程占用的CPU时间                                        |
| WHAT   | 用户正在进行的操作                                           |



### 11.2 who 命令

- who命令和w命令类似，用于查看正在登陆的用户，但是显示的内容更加简单，也是查看/var/run/utmp日志

```bash
[root@localhost ~]# who
root     tty1         2018-11-12 23:59 
root     pts/2        2018-11-12 23:42 (192.168.252.1) 
#用户名   登陆终端      登陆时间（来源IP）
```



### 11.3 last 命令

- last命令是查看系统所有登陆过的用户信息的，包括正在登陆的用户和之前登陆的用户。这个命令查看的是/var/log/wtmp痕迹日志文件

```bash
[root@localhost ~]# last
root     tty1                          Mon Nov 12 23:59   still logged in 
root     pts/2        192.168.252.1    Mon Nov 12 23:42   still logged in
root     pts/1        192.168.252.1    Mon Nov 12 23:37 - 23:59  (00:22)
root     tty1                          Mon Nov 12 19:17 - 23:58  (04:41)
root     pts/0        192.168.252.1    Mon Nov 12 18:20 - 23:52  (05:32)
reboot   system boot  3.10.0-862.el7.x Mon Nov 12 18:18 - 00:22  (06:03) 
#系统重启信息记录
root     pts/1        192.168.252.1    Mon Nov 12 08:48 - down   (01:29) 
root     pts/1        192.168.252.1    Thu Nov  8 21:04 - 22:29  (01:25)  
#用户名   终端号			  来源IP地址				登陆时间           - 退出时间 (登陆时长)
```



### 11.4 lastlog 命令

- lastlog命令是查看系统中所有用户最后一次的登陆时间的命令，他查看的日志是/var/log/lastlog文件

```bash
[root@localhost ~]# lastlog
Username         Port     From             Latest
root             tty1                      Mon Nov 12 23:59:03 +0800 2018
bin       																 **Never logged in**
daemon                                     **Never logged in**
adm                                        **Never logged in**
lp                                         **Never logged in**
sync                                       **Never logged in** 
...省略部分内容... 
#用户名					终端			来源IP 						登陆时间
```



### 11.5 lastb 命令

- lastb命令是查看错误登陆的信息的，查看的是/var/log/btmp痕迹日志

```bash
[root@localhost ~]# lastb
(unknown       tty1                          Mon Nov 12 23:58 - 23:58  (00:00)
root           tty1                          Mon Nov 12 23:58 - 23:58  (00:00)
#错误登陆用户	   终端													 尝试登陆的时间
```



## 十二、挂载命令

### 12.1 mount 命令的基本格式

- 命令名称：mount
- 命令所在路径：/bin/mount
- 执行权限：所有用户

```bash
[root@localhost ~]# mount [-l]
#查询系统中已经挂载的设备，-l会显示卷标名称
[root@localhost ~]# mount –a
#依据配置文件/etc/fstab的内容，自动挂载
[root@localhost ~]# mount [-t 文件系统] [-L 卷标名] [-o 特殊选项] 设备文件名 挂载点
选项：    
	-t 文件系统：加入文件系统类型来指定挂载的类型，可以ext3、ext4、iso9660等文件系统。
	-L 卷标名：挂载指定卷标的分区，而不是安装设备文件名挂载    
	-o 特殊选项：可以指定挂载的额外选项，比如读写权限、同步异步等，如果不指定则默认值生效。具体的特殊选项，见下表
```

| 参数          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| atime/noatime | 更新访问时间/不更新访问时间。访问分区文件时，是否更新文件的访问时间，默认为更新 |
| async/sync    | 异步/同步，默认为异步                                        |
| auto/noauto   | 自动/手动，mount –a命令执行时，是否会自动安装/etc/fstab文件内容挂载，默认为自动 |
| defaults      | 定义默认值，相当于rw,suid,dev,exec,auto,nouser,async这七个选项 |
| exec/noexec   | 执行/不执行，设定是否允许在文件系统中执行可执行文件，默认是exec允许 |
| remount       | 重新挂载已经挂载的文件系统，一般用于指定修改特殊权限         |
| rw/ro         | 读写/只读，文件系统挂载时，是否具有读写权限，默认是rw        |
| suid/nosuid   | 具有/不具有SUID权限，设定文件系统是否具有SUID和SGID的权限，默认是具有 |
| user/nouser   | 允许/不允许普通用户挂载，设定文件系统是否允许普通用户挂载，默认是不允许，只有root可以挂载分区 |
| usrquota      | 写入代表文件系统支持用户磁盘配额，默认不支持                 |
| grpquota      | 写入代表文件系统支持组磁盘配额，默认不支持                   |



### 12.2 挂载光盘

- 光盘挂载的前提依然是指定光盘的设备文件名，不同版本的Linux，设备文件名并不相同：
  - CentOS 5.x以前的系统，光盘设备文件名是/dev/hdc
  - CentOS 6.x以后的系统，光盘设备文件名是/dev/sr0

```bash
[root@localhost ~]# mount -t iso9660 /dev/cdrom /mnt/cdrom/
#挂载光盘
```

```bash
[root@localhost ~]# umount /dev/sr0
[root@localhost ~]# umount /mnt/cdrom 
#因为设备文件名和挂载点已经连接到一起，卸载哪一个都可以
```

> 卸载的时候需要退出光盘目录，才能正常卸载



### 12.3 挂载 U 盘

- U盘会和硬盘共用设备文件名，所以U盘的设备文件名不是固定的，需要手工查询，查询命令：

```bash
[root@localhost ~]# fdisk -l
#查询硬盘
```

- 如果U盘中有中文，会发现中文是乱码。Linux要想正常显示中文，需要两个条件：
  - 安装了中文编码和中文字体
  - 操作终端需要支持中文显示（纯字符终端，是不支持中文编码的）
  - 需要在挂载的时候，手工指定中文编码

```bash
[root@localhost ~]# mount -t vfat -o iocharset=utf8 /dev/sdb1 /mnt/usb/ 
#挂载U盘，指定中文编码格式为UTF-8  
```



### 12.4 挂载 NTFS 分区

#### 12.4.1 Linux 的驱动加载顺序

- 驱动直接放入系统内核之中。这种驱动主要是系统启动加载必须的驱动，数量较少。
- 驱动以模块的形式放入硬盘。大多数驱动都已这种方式保存，保存位置在/lib/modules/3.10.0-862.el7.x86_64/kernel/中。
- 驱动可以被Linux识别，但是系统认为这种驱动一般不常用，默认不加载。如果需要加载这种驱动，需要重新编译内核，而NTFS文件系统的驱动就属于这种情况。
- 硬件不能被Linux内核识别，需要手工安装驱动。当然前提是厂商提供了该硬件针对Linux的驱动，否则就需要自己开发驱动了



#### 12.4.2 使用NTFS-3G安装NTFS文件系统模块

- 从网站http://www.tuxera.com/community/ntfs-3g-download/下载NTFS-3G插件到Linux服务器上
- 在编译安装NTFS-3G插件之前，要保证gcc编译器已经安装。

```bash
[root@localhost ~]# tar -zxvf ntfs-3g_ntfsprogs-2013.1.13.tgz
#解压
[root@localhost ~]# cd ntfs-3g_ntfsprogs-2013.1.13
#进入解压目录
[root@localhost ntfs-3g_ntfsprogs-2013.1.13]# ./configure
#编译器准备。没有指定安装目录，安装到默认位置中
[root@localhost ntfs-3g_ntfsprogs-2013.1.13]# make
#编译
[root@localhost ntfs-3g_ntfsprogs-2013.1.13]# make install
#编译安装
```

安装就完成了，已经可以挂载和使用Windows的NTFS分区了。不过需要注意挂载分区时的文件系统不是ntfs，而是ntfs   -3g。挂载命令如下：

```bash
[root@localhost ~]# mount -t ntfs-3g 分区设备文件名挂载点

例如：
[root@localhost ~]# mount –t ntfs-3g /dev/sdb1 /mnt/win
```
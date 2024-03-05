---
date: 2023-08-03
category: 其他
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/kjg9rw.webp
---

# 文件系统

## 一、文件系统的定义

- 文件系统是操作系统用于明确存储设备（常见的是磁盘，也有基于 NAND Flash 的固态硬盘）或分区上的文件的方法和数据结构；即在存储设备上组织文件的方法。操作系统中负责管理和存储文件信息的软件机构称为文件管理系统，简称文件系统。文件系统由三部分组成：文件系统的接口，对对象操纵和管理的软件集合，对象及属性。



## 二、常见的文件系统

### 2.1 Windows 下常见的文件系统

### FAT

在 Win 9X 下，FAT16 支持的分区最大为 2GB。我们知道计算机将信息保存在硬盘上称为“簇”的区域内。使用的簇越小，保存信息的效率就越高。在 FAT16 的情况下，分区越大簇就相应的要大，存储效率就越低，势必造成存储空间的浪费。并且随着计算机硬件和应用的不断提高，FAT16 文件系统已不能很好地适应系统的要求。在这种情况下，推出了增强的文件系统 FAT32。

### NTFS（目前常用）

NTFS 文件系统是一个基于安全性的文件系统，是 Windows NT 所采用的独特的文件系统结构，它是建立在保护文件和目录数据基础上，同时照顾节省存储资源、减少磁盘占用量的一种先进的文件系统。使用非常广泛的 Windows NT 4.0 采用的就是 NTFS 4.0 文件系统，相信它所带来的强大的系统安全性一定给广大用户留下了深刻的印象。Win 2000 采用了更新版本的 NTFS 文件系统 NTFS 5.0，它的推出使得用户不但可以像 Win 9X 那样方便快捷地操作和管理计算机，同时也可享受到 NTFS 所带来的系统安全性。

### exFAT（与 mac 文件系统兼容）

全称 Extended File Allocation Table File System，扩展 FAT，即扩展文件分配表，是 Microsoft在Windows Embeded 5.0以上（包括Windows CE 5.0、6.0、Windows Mobile5、6、6.1）中引入的一种适合于闪存的文件系统，为了解决 FAT32 等不支持 4G 及其更大的文件而推出。



### 2.2 Linux 下常见的文件系统

### EXt（RHEL6 中使用）

####  Ext2

Ext 是 GNU / Linux 系统中标准的文件系统，其特点为存取文件的性能极好，对于中小型的文件更显示出优势，这主要得利于其簇快取层的优良设计。

#### Ext3

是一种日志式文件系统，是对 ext2 系统的扩展，它兼容 ext2。日志式文件系统的优越性在于：由于文件系统都有快取层参与运作，如不使用时必须将文件系统卸下，以便将快取层的资料写回磁盘中。因此每当系统要关机时，必须将其所有的文件系统全部 shutdown 后才能进行关机。

 #### Ext4

Linux kernel 自 2.6.28 开始正式支持新的文件系统 Ext4。Ext4 是 Ext3 的改进版，修改了 Ext3 中部分重要的数据结构，而不仅仅像 Ext3 对 Ext2 那样，只是增加了一个日志功能而已。Ext4 可以提供更佳的性能和可靠性，还有更为丰富的功能。

### XFS（RHEL7 中使用）

由于虚拟化的应用越来越广泛，虚拟化磁盘来源的举行文件越来越常见，这些巨型文件在处理上考虑到刑恩那个问题，因此 xfs 比较适合高容量磁盘与巨型文件，且性能较佳的文件系统。

### 对比

| 类型 | 单文件最大 |
| ---- | ---------- |
| EXT  | 2GB        |
| EXT2 | 2TB        |
| EXT3 | 16TB       |
| EXT4 | 32TV       |
| XFS  | 8EB        |



## 2.3 MacOS下常见的文件系统

### APFS

macOS 10.13 或后续版本使用的文件系统

### Mac OS 扩展

macOS 10.12 或之前版本使用的文件系统
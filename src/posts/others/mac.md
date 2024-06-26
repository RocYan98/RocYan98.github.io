---
date: 2023-08-17
category: 其他
tag: MacOS
---

# Mac 的使用技巧

## 写在最前面

这篇文章主要是分享一下这些年来我使用 Mac 的经验和技巧，以及为什么我更喜欢 Mac。

首先 macOS 是基于 Unix 的，而作为一个计算机专业的学生，是一定会和 Linux 打交道的，众所周知 Unix 和 Linux 几乎没什么区别，所以我可以只用一套逻辑和指令使用 macOS 和 Linux。

同时 Mac 拥有世界上最好用的触控板，仔细观察你会发现每台 MacBook 的触控板面积都是巨大的。至于 Windows 笔记本上的触控板，只能说聊胜于无，至少我还没见过哪个人不再单独配一个鼠标的。

尽管有触控板的加持，但是比起图形化界面，我更喜欢用命令行去控制电脑，因为使用命令行的时候我的双手不需要离开键盘区，当然这个前提是用正确的指法去按键盘。但是当我要使用触控板时，我必须将手从键盘区移动到触控板，频繁移动必然是不舒服的。这就是我为什么钟爱 Terminal 和 Vim，Vim 可以完全只基于键盘来编辑文件（[Vim的使用教程](../linux/linux-vim)）。当然学会[移动光标快捷键](#移动光标快捷键)后，也可以减少使用触控板的次数，并且移动光标的快捷键和 Linux 是相同的。

当然 Mac 也有许多缺点，比如有些软件并不兼容（这也导致玩不了绝大多游戏），不能用 GPU 跑模型等。

## Mac 键盘快捷键

::: tip
完整的快捷键请查看[官方文档](https://support.apple.com/zh-cn/HT201236)，这里只列出一些我常用的。
:::

### 常用快捷键

- **Command-X**：剪切所选项并拷贝到剪贴板。
- **Command-C**：将所选项拷贝到剪贴板。这同样适用于“访达”中的文件。
- **Command-V**：将剪贴板的内容粘贴到当前文稿或 App 中。这同样适用于“访达”中的文件。
- **Command-Z**：撤销上一个命令。随后你可以按 Shift-Command-Z 来重做，从而反向执行撤销命令。在某些 App 中，你可以撤销和重做多个命令。
- **Command-A**：全选各项。
- **Command-F**：查找文稿中的项目或打开“查找”窗口。
- **Command-T**：打开新标签页。
- **Command-N**：打开一个新的进程。在浏览器中 Command-T 是打开一个新标签页，Command-N 是打开一个新的浏览器。
- **Command-W**：关闭当前的窗口。要关闭 App 的所有窗口，请按下 Option-Command-W，关闭了所有窗口并不代表关闭了程序。
- **Command-Q**：关闭最前面的程序。注意与 Command-W 的区别，如果你的浏览器开了很多网页，用 Command-W 是关闭当前网页，而 Command-Q 是关闭整个浏览器的进程。
- **Command-E**：推出所选磁盘或宗卷。当安装完文件后一般会在桌面上留下一个宗卷，选中它后按此快捷键可以直接推出。
- **Command-逗号 (,)**：打开当前 App 的偏好设置。
- **Command-空格键**：显示或隐藏聚焦搜索栏，[聚焦搜索功能介绍](#聚焦搜索)。
- **Command-Tab**：在打开的 App 中切换到下一个最近使用的 App。松开 Tab 但不松开 Command 可以看到所有打开的 App，再按下 Tab 可以选择想要切换的 App。
- **空格键**：使用快速查看来预览所选项目。这个功能很强大，可以选中一个图片文件，再按空格看看效果，具体功能描述请查看[官方文档](https://support.apple.com/guide/mac-help/view-and-edit-files-with-quick-look-mh14119/mac)。
- **Command-Shift-句号(.)**：隐藏或显示隐藏文件（以.开头的文件）
- **Command-Shift-3**：截屏。如果在屏幕右下角看到缩略图，请点按缩略图以编辑截屏，如果什么也不操作几秒钟后截屏会存储到桌面。要将截屏拷贝到剪贴板而不保存成一张图片文件，可以按 Command-Shift-Contrl-3，之后 Command-V 可以将截屏粘贴到其他位置。
- **Command-Shift-4**：截取屏幕上的某一部分。拖移十字线 <img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261222362.png" style="zoom:50%;"  />以选择要捕捉的屏幕区域。要移动所选区域，请在拖移时按住空格键。要取消截屏，请按下 Esc 键。要将截屏拷贝到剪贴板而不保存成一张图片文件，在确定所选区域后按下 Contrl 键再松开光标，之后 Command-V 可以将截屏粘贴到其他位置。
- **Command-Shift-4+空格**：截取窗口或菜单。先按下 Command-Shift-4，再按下空格后光标会变成相机图标<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261222213.png" style="zoom:50%;" />，选取想要截取的窗口或菜单。要取消截屏，请按下 Esc 键。要将截屏拷贝到剪贴板而不保存成一张图片文件，先按下 Contrl 键再选取想要截取的窗口或菜单，之后 Command-V 可以将截屏粘贴到其他位置。
- **Command-Shift-4+空格+Option**：截取窗口或菜单，并从截屏中去除窗口的阴影。先按下 Option 键再选取想要截取的窗口或菜单，就可以去除窗口的阴影。下图分别是未去除阴影和去除阴影的截屏对比。

![Command-Shift-4+空格 未去除阴影](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261217228.png)

![Command-Shift-4+空格+Option 去除阴影](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261217350.png)

- **Command-Shift-5**：拍摄截屏或录制屏幕。具体功能描述请查看[官方文档](https://support.apple.com/zh-cn/guide/mac-help/mh26782/mac)。



### 移动光标快捷键

::: tip
在看这些快捷键之前，我建议先调换一下大写锁定（⇪）键和 Control（⌃）键，[具体操作看这里](#互换大写锁定键和control-键)。因为会经常用到 Control 键，而把 Control 键放到大写锁定键的位置使用起来更加顺手。不用担心调换之后切换输入法会比较麻烦，可以用 **Control-空格** 代替。我是借鉴了 HHKB 键盘的布局，如果你也是使用 Mac 的程序员，并且喜欢使用 Vim 或 Emacs，那么我强烈推荐你尝试一下这款键盘。
:::

- **Control-P**：上移一行。
- **Control-N**：下移一行。
- **Control-F**：向前移动一个字符。
- **Control-B**：向后移动一个字符。
- **Control-A**：移至行或段落的开头。
- **Control-E**：移至行或段落的末尾。
- **Control-H**：删除插入点左边的字符。也可以使用 Delete 键。
- **Control-D**：删除插入点右边的字符。也可以使用 Fn-Delete。
- **Control-空格**：切换输入法。



## Mac 触控板

::: tip
首先你需要知道 Mac 的触控板并不是真的能按压的，而是通过震动反馈让你以为能按下去。并且你用力点按会发现其实触控板是有两段的震动反馈，这点之后会用到。
:::

在电脑的设置中已经有比较明确的功能演示了

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261230570.png)

可以再结合[官方文档](https://support.apple.com/zh-cn/HT204895)来学习，这里我再补充一点可能比较难懂或者比较重要的功能。

- **查询与数据检测器**：单指用力点按想查询的词，在某些 App 里可能需要选中想查询的单词，我通常把这个功能当作字典来用。用力点按链接可以预览链接里的内容。他的功能还有许多，你可以用力点按任何东西，当然不局限于浏览器内，说不定有其他我没发现的内容。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261217135.png" alt="image-20240626121756099" style="zoom:50%;" />

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261218788.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261218258.png)

- **三指拖移**：先[按照步骤](#打开-mac-触控板的三指拖移功能)打开三指拖移功能，用三根手指拖移屏幕上的项目。此时用三指等价于长按左键。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261218779.png" alt="image-20240626121859732" style="zoom:50%;" />

- **放大或缩小**：双指捏合或张开可放大或缩小，这几乎适用于任何 App。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261219913.png" style="zoom:50%;" />

- **显示桌面**：将拇指和另外三根手指同时展开，可显示桌面，当打开许多进程挡住桌面的时候，可以显示桌面。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261219704.png" style="zoom:50%;" />

- **切换桌面**：用四根手指向左或向右轻扫，即可在桌面之间移动。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261219234.png" style="zoom:50%;" />

- **打开启动台**：将拇指和另外三根手指合拢到一起，可显示启动台。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261219957.png" style="zoom:50%;" />

- **打开调度中心**：用四根手指向上轻扫，即可打开调度中心。可以看当前桌面打开了那些进程。

<img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261219666.png" style="zoom:50%;" />



## 多桌面/调度中心

不要把所有应用都开在一个桌面里，可以多开几个桌面，每个桌面对应一个任务，我一般会开5个左右。

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220378.png)

具体的使用方法比较简单，参展[官方文档](https://support.apple.com/zh-cn/HT204100)即可。



## App 推荐

::: tip
很多 App 都需要付费，请在能力范围内支持正版！
:::

::: projects

```yaml
- icon: https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261232260.png
  name: Paste
  desc:	可以保存、查找和管理过去所有的复制内容
  link: https://pasteapp.io
  
- icon:	https://www.iina.io/images/iina-icon-60.png
  name: IINA
  desc:	macOS 上一个很好用的播放器
  link: https://www.iina.io

- icon: https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261233802.png
  name: CommandQ
  desc:	不再因为误按而退出整个应用
  link: https://commandqapp.com

- icon:	https://www.keka.io/img/Keka-Square-32x32@2x.png
  name: Keka
  desc:	压缩解压缩 App
  link: https://www.keka.io/en/

- icon:	https://magnet.crowdcafe.com/imgs/icon.png
  name: Magnet
  desc:	窗口辅助管理工具
  link: https://magnet.crowdcafe.com

- icon:	https://www.macbartender.com/Bartender4/img/Icon-1024.png
  name: Bartender
  desc:	管理 MenuBar
  link: https://www.macbartender.com

- icon:	https://bjango.com/images/mac/istatmenus6/icon-istatmenus6.png
  name: iStat Menus
  desc:	MenuBar 上的系统监视器
  link: https://bjango.com/mac/istatmenus/

- icon:	https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261233153.png
  name: MTMR
  desc:	自定义 Touch Bar
  link: https://github.com/Toxblh/MTMR

- icon:	https://typoraio.cn/img/favicon-128.png
  name: Typora
  desc:	Markdown 编辑器和阅读器
  link: https://typoraio.cn
  
- icon:	https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg
  name: DeepL
  desc:	全世界最好的机器翻译
  link: https://www.deepl.com

- icon:	https://brew.sh/assets/img/homebrew.svg
  name: Homebrew
  desc:	软件包管理工具
  link: https://brew.sh/index_zh-cn

- icon:	https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261233626.png
  name: Vim
  desc:	编辑器之神
  link: https://www.vim.org
```

:::

展示一下我的 Touch Bar (换了 M 芯片之后 Touch Bar 已经没了，还是挺怀念这个没用的东西的)：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220113.png)

## 附录

### 聚焦搜索

这个功能其实比你想象的更强大，你可以用它打开一个 App：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220041.png)

可以把它当作一个简易计算器：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220529.png)

可以把它当作一个字典：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220643.png)

可以用它直接打开百度，不再需要先打开浏览器再打开百度才能输入想要搜索的内容：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220902.png)

还可以用它搜索你电脑上包含搜索关键词的所有文件、照片和邮件等任何东西。

更多功能请查看[官方文档](https://support.apple.com/guide/mac-help/mchlp1008/mac)。



### 互换大写锁定键和Control 键

按如下步骤操作：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220740.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220459.png)

### 打开 Mac 触控板的三指拖移功能

按如下步骤操作：

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220954.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220457.png)

![](https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261220501.png)

## Reference

[Mac 键盘快捷键 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT201236)

[在 Mac 上使用多点触控手势 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT204895)

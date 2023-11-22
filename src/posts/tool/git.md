---
date: 2023-08-03
tag:
  - Git
  - GitHub
category: 工具
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/b6bycj.jpg
---

# Git&GitHub

## 一、Git结构

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/yujcn.png)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/40lf4.jpg)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ub1qk.png)

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地库）
- Remote：远程仓库



## 二、Git 命令行操作

### 2.1 本地库初始化

```bash
git init
```

效果：初始化本地库，在目录中创建一个.git文件 

注意: *.git目录中存放的是本地库相关的子目录和文件，不要删除，也不用轻易修改*



### 2.2 设置签名

- 形式：

  - name：Yan
  - email：rocyan98@gmail.com
- 作用： 区分不同开发人员的身份
- 注意：*这里设置的签名和登陆远程仓库（github）的账号密码没有关系*
- 命令：

```bash
# 项目级别/仓库级别：仅在当前本地仓库范围内有效
git config user.name Yan
git config user.email rocyan98@gmail.com
# 信息保存的位置 ./.git/config 文件中

# 系统用户级别：登陆当前操作系统的用户范围
git config --global user.name Yan
git config --global user.email rocyan98@gmail.com
# 信息保存的位置：~/.gitconfi文件
```

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/frpza.png)

```bash
# 查看当前Git配置信息
git config --list / git config -l
```

```bash
# 编辑Git配置文件
git config -e [--global]
```

​    

- 级别优先级：

  - 就近原则：项目级别优先于系统用户级别，二者都有时，采用项目级别的签名
  - 不允许没有签名



### 2.3 基本操作

#### 2.3.1 状态查看

```bash
# 查看工作区、暂存区状态
git status
```

- 共有三种状态：

  

  - **Untracked files *红色*** 未追踪的文件，工作区新建文件，但是没有提交到暂存区
     - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ew98s.png)
  - **Changes not staged for commit *红色*** 工作区内的文件有更新，但是没有提交到暂存区 
     - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/lwsky.png)
   - **Changes to be committed *绿色*** 改变的内容提交到暂存区
     - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/7c8td.png)
  - **working tree clean** 暂存区的内容都已经提交到本地库
     - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/sv78d.png)



#### 2.3.2 添加/删除/恢复文件

```bash
# 添加指定文件到暂存区
git add [file1] [file2] ... 

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
git add -p

# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区（配合.gitignore，即删除远程仓库但不删除本地）
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]

# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复某个 commit 的指定文件到暂存区和工作区
git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
git checkout .
```




#### 2.3.3 提交

```bash
# 提交暂存区到本地库
git commit -m [message]

# 提交暂存区的指定文件到本地库
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次 commit 之后的变化，直接到本地库
git commit -am [message]

# 提交时显示所有 diff 信息
git commit -v

# 使用一次新的 commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息
git commit --amend -m [message]

# 重做上一次 commit，并包括指定文件的新变化
git commit --amend [file1] [file2] ...
```




#### 2.3.4 查看历史记录

- 方法一：

```bash
git log
```

  - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/tn1ih.png)

    - 多屏显示控制方式：空格向下翻页、b 向上翻页、 q 退出

- 方法二：

```bash
git log --pretty=oneline
```

  - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/wjcmr.png)

- 方法三：

```bash
git log --oneline
```

  - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/3b3l8.png)

- 方法四：

```bash
git reflog
```

  - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ghlhi.png)

    - HEAD@{移动到当前版本需要多少步}



#### 2.3.5 版本前进后退

- 基于索引值操作（**推荐**）

```bash
git reset --hard [局部索引值]
git reset --hard f73f651
```

- 使用^符号（**只能后退**）

```bash
git reset --hard HEAD^
```

  - 注意：*一个 ^ 表示后退一步，n 个 ^ 表示后退 n 步*

- 使用 ~ 符号（**只能后退**）

```bash
git reset --hard HEAD~n
```

  - 注意：*表示后退 n 步*



#### 2.3.6 reset 命令的三个参数对比：

- --soft 参数（*status 为绿色*）
  - 仅在本地库移动 HEAD 指针
  - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/daa3v.png)
- --mixed 参数（*status 为红色*）
  - 在本地库移动 HEAD 指针
  - 重置暂存区
  - ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4oe42.png)
- --hard 参数（*整体回退*，status 为 working tree clean）
  - 在本地库移动HEAD指针
  - 重置暂存区
  - 重置工作区



#### 2.3.7 比较文件差异:

```bash
# 显示暂存区和工作区的差异
git diff [file]

# 显示暂存区和上一个 commit 的差异
git diff --cached [file]

# 显示工作区中的文件和本地库历史记录的差异
git diff [本地库中历史版本] [file]

# 显示工作区与当前分支最新 commit 之间的差异
git diff HEAD

# 显示两次提交之间的差异
git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
git diff --shortstat "@{0 day ago}"
```



### 2.4 分支管理

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/uf2bx.png)



#### 2.4.1 分支操作

```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 新建一个分支，指向指定 commit
git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote-branch]

# 在现有分支与指定的远程分支之间建立追踪关系
git branch --set-upstream [branch] [remote-branch]

# 查看本地分支与远程分支的追踪关系
git branch -vv

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 切换到上一个分支
git checkout -

# 合并指定分支到当前分支
git merge [branch]

# 选择一个 commit，合并进当前分支
git cherry-pick [commit]

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```



#### 2.4.2 冲突

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/njeji.png)

- 解决冲突：

  - 第一步：编辑文件，删除特殊符号

  - 第二步：把文件修改到满意的程度，保存并退出

  - 第三步：

    ```bash
    git add [file]
    ```

  - 第四步（*此时commit一定不能带具体文件名*）：

    ```bash
    git commit -m [message]
    ```



## 三、.gitignore 文件

**.gitignore 文件是用来忽视提交到 Github 上的文件和文件夹的，除了忽略掉文件夹，还有其他用法：**

- \##注释##：注释
- /文件夹/ ：过滤文件夹
- *.xml ：过滤某类型的文件
- /mtk/do.c：指定过滤具体文件
- !开头表示不过滤
-  *.[oa]  支持通配符：过滤repo中所有以.o或者.a为扩展名的文件



## 四、Git 基本原理

### 4.1 简介哈希

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ovwt8.png)
- 哈希是一个系列的加密算法，各个不同的哈希算法虽然加密强度不同，但是有以下几个共同点：
  1. 不管输入数据的数据量有多大，输入同一个哈希算法，得到的加密结果长度固定。
  2. 哈希算法确定，输入数据确定，输出数据能够保证不变
  3. 哈希算法确定，输入数据有变化，输出数据一定有变化，而且通常变化很大
  4. 哈希算法不可逆
- Git 底层采用的是 SHA-1 算法。
- 哈希算法可以被用来验证下载的文件的完整性（*Git 就是靠这种机制来从根本上保证数据完整性的*）：
- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/10q98.png)



### 4.2 Git 保存版本的机制

#### 4.2.1 集中式版本公知工具的文件管理机制

- 以文件变更列表的方式存储信息。这类系统将它们保存的信息看作是一组基本

  文件和每个文件随时间逐步累积的差异。

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/2gq11.png)



#### 4.2.2 Git 的文件管理机制

- Git 把数据看作是小型文件系统的一组快照。每次提交更新时 Git 都会对当前

  的全部文件制作一个快照并保存这个快照的索引。为了高效，如果文件没有修改， Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。所以 Git 的 工作方式可以称之为快照流。

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/uk4jl.png)



#### 4.2.3 Git 文件管理机制细节

- Git 的“提交对象”

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/lyxkn.png)
- 提交对象及其父对象形成的链条
- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/374al.png)



### 4.3 Git 分支管理机制

#### 4.3.1 分支的创建

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/vs6jz.png)



#### 4.3.2 分支的切换

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ewf5o.png)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hctng.png)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/18q5n.png)

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/fqmx7.png)



## 五、GitHub

- 远程同步

```bash
# 查看当前所有远程地址别名
git remote -v

# 增加一个新的远程仓库，并命名
git remote add [alias] [url]

# 删除远程仓库
git remote rm [alias]

# 显示某个远程仓库的信息
git remote show [remote]

# 完整的把远程库下载到本地
# 创建 origin 远程地址别名
# 初始化本地库
git clone [url]

# 将本地 master 分支推动到远程 origin 库
# -u 表示本地指定分支就和远程主机的同名分支建立追踪关系，下次直接用 git push 代替
# -f 表示强制执行（非个人仓库禁止使用）
git push -u [remote] [branch]
git push -u origin master

# 同时指定要将本地分支推送到哪一个远程分支
# 如果没有指定远程分支，则 push 当前分支到当前分支的追踪关系分支
git push [remote] [local branch]:[remote branch]

# 下载远程仓库的所有变动
git fetch [远程地址别名] [远程分支名]

# 把下载的远程库的分支合并到当前分支
git merge [远程地址别名/远程分支名]

# 取回远程仓库的变化，并与本地分支合并
# pull = fetch + merge
git pull [远程地址别名] [远程分支名]
```



## 六、Git工作流

### 6.1 概念

- 在项目开发过程中使用 Git 的方式



### 6.2 分类

#### 6.2.1 集中式工作流

- 像 SVN 一样，集中式工作流以中央仓库作为项目所有修改的单点实体。所有

  修改都提交到 Master 这个分支上。*这种方式与 SVN 的主要区别就是开发人员有本地库。Git 很多特性并没有用到。*

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/fskoj.png)



#### 6.2.2 GitFlow 工作流

- Gitflow 工作流通过为功能开发、发布准备和维护设立了独立的分支，让发布

  迭代过程更流畅。严格的分支模型也为大型项目提供了一些非常必要的结构。

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/d2rsd.png)



#### 6.2.3 Forking 工作流

- Forking 工作流是在 GitFlow 基础上，充分利用了 Git 的 Fork 和 pull request 的

  功能以达到代码审核的目的。更适合安全可靠地管理大团队的开发者，而且能接受 不信任贡献者的提交。

- ![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/0fg5x.png)



### 6.3 GitFlow 工作流详解

#### 6.3.1 分支种类

- 主干分支 master

  - 主要负责管理正在运行的生产环境代码。永远保持与正在运行的生产环境 完全一致。

- 开发分支 develop

  - 主要负责管理正在开发过程中的代码。一般情况下应该是最新的代码。

- bug修理分支 hotfix

  - 主要负责管理生产环境下出现的紧急修复的代码。 从主干分支分出，修

    理完毕并测试上线后，并回主干分支。并回后，视情况可以删除该分支。

- 准生产分支（预发布分支）release

  - 较大的版本上线前，会从开发分支中分出准生产分支，进行最后阶段的集 成测试。该版本上线后，会合并到主干分支。生产环境运行一段阶段较稳定后 可以视情况删除。

- 功能分支 feature

  - 为了不影响较短周期的开发工作，一般把中长期开发模块，会从开发分支 中独立出来。 开发完成后会合并到开发分支。



#### 6.3.2 GitFlow 工作举例

![](http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/7198a.png)
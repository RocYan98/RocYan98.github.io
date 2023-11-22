---
date: 2023-08-03
tag: Linux
category: Linux
#cover: http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hohlue.webp
order: 6
---

# Linux 用户管理

## 一、用户相关文件

### 1.1 用户信息文件 /etc/passwd

`root:x:0:0:root:/root:/bin/bash`

- 第一列：用户名
- 第二列：密码位（x表示有密码，具体密码在/etc/shadow）
- 第三列：用户ID
  - 0超级用户UID。如果用户UID为0，代表这个账号是管理员账号。那Linux中如何把普通用户升级成为管理员呢？就是把其他用户的UID修改为0就可以了，不建议建立多个管理员账号。
  - 1-499系统用户（伪用户）UID。这些UID账号是系统保留给系统用户的UID，也就是说UID是1-499范围内的用户是不能登录系统的，而是用来运行系统或服务的。其中1-99是系统保留的账号，系统自动创建。100-499 是预留给用户创建系统账号的。
  - 500-60000普通用户UID。建立的普通用户UID从500开始，最大到60000。这些用户足够使用了，但是如果不够也不用害怕，2.6.x内核以后的Linux系统用户UID已经可以支持$2^{32}$这么多了。
- 第四列：组ID   
  - GID 添加用户时，如果不指定用户所属的初始组，那么会建立和用户名相同的组
- 第五列：用户说明第六列：用户家目录  ~
- 第七列：登录shell  
  - 用户的是/bin/bash
  - 伪用户的是/sbin/nologin 表示无法登陆



### 1.2 影子文件 /etc/shadow

```bash
root:$6$9w5Td6lg$bgpsy3olsq9WwWvS5Sst2W3ZiJpuCGDY.4w4MRk3ob/i85fI38RH15wzVoomff9isV1PzdcXmixzhnMVhMxbv0:15775:0:99999:7:::
```

- 第一列：用户名

- 第二列：加密密码

- 第三列：密码最近更改时间（时间戳表示）, 1970年1月1日作为标准时间

 ```bash
#时间戳转日期
[root@localhost ~]# date -d "1970-01-   01 15775 days"
2013年 03月 11日星期一 00:00:00 CST

#日期转时间戳
[root@localhost ~]# echo $(($(date --date="2013/03/11" +%s)/86400+1))
15775
 ```

- 第四列：两次密码的修改间隔时间（和第3字段相比）

- 第五例：密码有效期（和第3字段相比）

- 第六列：密码修改到期前的警告天数（和第5字段相比）

- 第七列：密码过期后的宽限天数（和第5字段相比）

- 第八列：密码失效时间这里同样要写时间戳，也就是用1970年1月1日进行时间换算。如果超过了失效时间，就算密码没有过期，用户也就失效无法使用了

- 第九列：保留



### 1.3 组信息文件 /etc/group

`root:x:0:root`

- 第一列：组名
- 第二列：组密码位
- 第三列：    GID
- 第四列：此组中支持的其他用户.附加组是此组的用户

> - 初始组：每个用户初始组只能有一个，初始组只能有一个，一般都是和用户名相同的组作为初始组
> - 附加组：每个用户可以属于多个附加组。要把用户加入组，都是加入附加组



### 1.4 组密码文件 /etc/gshadow

- 如果给用户组设定了组管理员，并给该用户组设定了组密码，组密码就保存在这个文件当中。组管理员就可以利用这个密码管理这个用户组了。



### 1.5 用户的家目录

- root用户在 /root，普通用户在 /home/user



### 1.6 用户邮箱目录 

- 这个邮箱在/var/spool/mail目录当中，例如user1用户的邮箱就是/var/spool/mail/user1文件



### 1.7 用户模版目录 /etc/skel



## 二、用户管理命令

### 2.1 添加用户

- 添加用户只是修改或增加了以下六个文件，手工删除六个文件的内容就可以删除用户。
  - /etc/passwd
  - /etc/shadow
  - /etc/group
  - /etc/gshadow
  - /home/user
  - /var/spool/mail/user



#### 2.1.1 useradd 命令

```bash
[root@localhost ~]# useradd 选项 用户名
选项：
  -u  550指定UID     
  -g  组名指定初始组不要手工指定      
  -G  组名指定附加组，把用户加入组，使用附加组  
  -c  说明添加说明      
  -d  目录手工指定家目录，目录不需要事先建立    
  -s  shell   /bin/bash
  
如：
[root@localhost ~]# groupadd lamp1
#先手工添加lamp1用户组，因为我一会要把lamp1用户的初始组指定过来，如果不事先建立，会报错用户组不存在[root@localhost ~]# useradd -u 550 -g lamp1 -G root -d /home/lamp1  \ 
-c "test user" -s /bin/bash lamp1 
#建立用户lamp1的同时指定了UID（550），初始组（lamp1），附加组（root），家目录（/home/lamp1），用户说明(test user)和用户登录shell（/bin/bash）
[root@localhost ~]# grep "lamp1" /etc/passwd /etc/shadow /etc/group
#同时查看三个文件/etc/passwd:lamp1:x:550:502:test user:/home/lamp1:/bin/bash
#用户的UID、初始组、用户说明、家目录和登录shell都和命令手工指定的一致
/etc/shadow:lamp1:!!:15710:0:99999:7:::
#lamp1用户还没有设定密码/etc/group:root:x:0:lamp1 
#lamp1用户加入了root组，root组是lamp1用户的附加组
/etc/group:lamp1:x:502:
#GID502的组是lamp1组
[root@localhost ~]# ll -d /home/lamp1/
drwx------ 3 lamp1 lamp1 4096 1月    6 01:13 /home/lamp1/ 
#家目录也建立了啊。不需要手工建立家目录
```

> 不常用选项



#### 2.2.2 useradd 的默认值

- useradd 添加用户时参考的默认值文件主要有两个，分别是/etc/default/useradd 和/etc/login.defs

```bash
[root@localhost ~]# vi /etc/default/useradd
# useradd defaults file
GROUP=100
HOME=/home
INACTIVE=-1 
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/ske
lCREATE_MAIL_SPOOL=yes
```

> - GROUP=100
>   - 这个选项是建立用户的默认组，也就是说添加每个用户时，用户的初始组就是GID为100的这个用户组。目前我们采用的机制私有用户组机制。
> - HOME=/home
>   - 这个选项是用户的家目录的默认位置，所以所有的新建用户的家目录默认都在/home/下。
> - INACTIVE=-1 
>   - 这个选项就是密码过期后的宽限天数，也就是/etc/shadow文件的第七个字段。如果是天数，比如10代表密码过期后10天后失效；如果是0，代表密码过期后立即失效；如果是-1，则代表密码永远不会失效。这里默认值是-1，所以所有新建立的用户密码都不会失效。
> - EXPIRE=
>   - 这个选项是密码失效时间，也就是/etc/shadow文件的第八个字段。也就说用户到达这个日期后就会直接失效。当然这里也是使用时间戳来表示日期的。默认值是空，所以所有新建用户没有失效时间，永久有效。
> - SHELL=/bin/bash
>   - 这个选项是用户的默认shell的。/bin/bash是Linux的标志shell，所以所有新建立的用户默认都具备shell赋予的权限。
> - SKEL=/etc/skel
>   - 这个选项就是定义用户的模板目录的位置，/etc/skel/目录中的文件都会复制到新建用户的家目录当中。
> - CREATE_MAIL_SPOOL=yes
>   - 这个选项定义是否给新建用户建立邮箱，默认是创建，也就是说所有的新建用户系统都会新建一个邮箱，放在/var/spool/mail/下和用户名相同。

```bash
[root@localhost ~]# vi /etc/login.defs
#这个文件有些注释，把注释删除掉，文件内容就变成下面这个样子了
MAIL_DIR        /var/spool/mail
PASS_MAX_DAYS   99999
PASS_MIN_DAYS   0
PASS_MIN_LEN    5
PASS_WARN_AGE   7
UID_MIN                   500
UID_MAX                 60000
GID_MIN                   500
GID_MAX                 60000
CREATE_HOME     yes
UMASK           077
USERGROUPS_ENAB yes
ENCRYPT_METHOD SHA512
```

> - MAIL_DIR   
>   -  /var/spool/mail这行指定了新建用户的默认邮箱位置。比如user1用户的邮箱是就是/var/spool/mail/user1。
> - PASS_MAX_DAYS   99999
>   - 这行指定的是密码的有效期，也就是/etc/shadow文件的第五字段。代表多少天之后必须修改密码，默认值是99999。
> - PASS_MIN_DAYS   0 
>   - 这行指定的是两次密码的修改间隔时间，也就是/etc/shadow文件的第四字段。代表第一次修改密码之后，几天后才能再次修改密码。默认值是0。
> - PASS_MIN_LEN    5 
>   - 这行代表密码的最小长度，默认不小于5位。但是我们现在用户登录时验证已经被PAM模块取代，所以这个选项并不生效。
> - PASS_WARN_AGE   7 
>   - 这行代表密码修改到期前的警告天数，也就是/etc/shadow文件的第六字段。代表密码到底有效期前多少天开始进行警告提醒，默认值是7天。
> - UID_MIN     500 
> - UID_MAX     60000
>   - 这两行代表创建用户时，最小UID和最大的UID的范围。我们2.6.x内核开始，Linux用户的UID最大可以支持232这么多，但是真正使用时最大范围是60000。还要注意如果我手工指定了一个用户的UID是550，那么下一个创建的用户的UID就会从551开始，哪怕500-   549之间的UID没有使用（小于500的UID是给伪用户预留的）。
> - GID_MIN     500 
> - GID_MAX     60000
>   - 这两行指定了GID的最小值和最大值之间的范围。
> - CREATE_HOME     yes 
>   - 这行指定建立用户时是否自动建立用户的家目录，默认是建立
> - UMASK       077 
>   - 这行指定的是建立的用户家目录的默认权限，因为umask值是077，所以新建的用户家目录的权限是700。
> - USERGROUPS_ENAB     yes 
>   - 这行指定的是使用命令userdel删除用户时，是否删除用户的初始组，默认是删除。
> - ENCRYPT_METHOD      SHA512
>   - 这行指定Linux用户的密码使用SHA512散列模式加密，这是新的密码加密模式，原先的Linux只能用DES或MD5方式加密



### 2.2 设定密码

```bash
[root@localhost ~]#passwd 选项 用户名
选项：    
	-l:   暂时锁定用户。仅root用户可用   
  -u:   解锁用户。仅root用户可用 
  --stdin:可以将通过管道符输出的数据作为用户的密码。主要在批量添加用户时使用
  
  [root@localhost ~]#passwd 
  #passwd直接回车代表修改当前用户的密码
  
  #也可以使用字符串作为密码
  [root@localhost ~]# echo "123" | passwd --stdin user1 
  #更改用户 user1的密码。
  
  #可以通过命令，把密码修改日期归零（shadow第3字段）.这样用户一登陆就要修改密码，例如:
  [root@localhost ~]# chage -d 0 user1
```



### 2.3 用户信息修改

```bash
[root@localhost ~]#usermod 选项 用户名
选项：    
	-u UID：修改用户的UID   
  -d 家目录：修改用户的家目录。家目录必须写绝对路径 
  -c 用户说明：修改用户的说明信息，就是/etc/passwd文件的第五个字段  
  -g 组名：修改用户的初始组，就是/etc/passwd文件的第四个字段
  -G 组名：修改用户的附加组，其实就是把用户加入其他用户组 
  -s shell：修改用户的登录Shell。默认是/bin/bash   
  -e 日期：修改用户的失效日期，格式为“YYYY-MM-DD”。也就是/etc/shadow文件的第八个字段 
  -L 临时锁定用户（Lock）    
  -U 解锁用户（Unlock）
  -l 修改用户名 usermod -l 新名 旧名
```



### 2.4 删除用户

```bash
[root@localhost ~]# userdel [-r] 用户名
选项：  
	-r：在删除用户的同时删除用户的家目录
```



### 2.5 切换用户身份

```bash
[root@localhost ~]# su [选项] 用户名
选项：
	-：选项只使用“-”代表连带用户的环境变量一起切换
	-c 命令：仅执行一次命令，而不切换用户身份
```

> “-”不能省略，它代表切换用户身份时，用户的环境变量也要切换成新用户的环境变量。



## 三、组管理命令

### 3.1 添加用户组

```bash
[root@localhost ~]# groupadd 选项 组名
选项：
	-g GID：指定组ID
```



### 3.2 删除用户组

```bash
[root@localhost ~]#groupdel 组名

如：
[root@localhost ~]#groupdel testgrp 
#删除testgrp组
```

> 注意：要删除的组不能是其他用户的初始组，也就是说这个组中没有初始用户才可以删除。如果组中有附加用户，则删除组时不受影响。



### 3.3 从组中添加或删除用户

```bash
[root@localhost ~]# gpasswd 选项 组名
选项：
	-a 用户名：把用户加入组
	-d 用户名：把用户从组中删除
	
如：
[root@localhost ~]# groupadd grouptest 
#添加组grouptest  
[root@localhost ~]# gpasswd -a user1 grouptest 
#把用户user1加入grouptest组
[root@localhost ~]# gpasswd -d user1 grouptest 
#把用户user1从组中删除
```

> ​	也可以使用usermod命令把用户加入某个组，不过usermod命令的操作对象是用户，命令是“usermod -G grouptest user1”，把用户名作为参数放在最后；而gpasswd命令的操作对象是组，命令是“gpasswd -a user1 grouptest”，把组名作为参数放在最后。



### 3.4 改变有效组

- 当用户创建一个文件时，文件的所属组默认是用户的初始组，即使该用户有其他附加组。可以使用newgrp命令改变用户的有效组。

```bash
[root@localhost ~]# newgrp 组名
```


const t=JSON.parse(`{"key":"v-11d23175","path":"/posts/linux/linux-directory.html","title":"Linux 常用目录结构","lang":"zh-CN","frontmatter":{"date":"2023-08-03T00:00:00.000Z","tag":"Linux","category":"Linux","order":2,"description":"Linux 常用目录结构 目录名 目录的作用（开头有 * 表示不要轻易改动） /bin 存放系统命令的目录，普通用户和超级用户都可以执行。Binary（二进制的）的缩写，是 /usr/bin 目录的软链接 /sbin 存放系统命令的目录，只有超级用户才可以执行。是 /usr/sbin 目录的软链接 /usr/bin 存放系统命令的目录，普通用户和超级用户都可以执行 /usr/sbin 存放系统命令的目录，只有超级用户才可以执行 /boot * 系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序（grub） /dev/ * 设备文件保存位置。Device（设备）的缩写 /etc/ 系统管理所需要的配置文件。系统内采用默认安装方式（RPM 包安装）的服务配置文件全部保存在此目录中，如用户信息、服务的启动脚步、常用服务的配置文件等 /home/ 普通用户的家目录。在创建用户时，每个用户都要有一个默认登陆和保存自己数据的位置，就是用户的家目录，所有普通用户的宿主目录是在 /home 下建立一个和用户名相同的目录。如用户 user1 的家目录就是 /home/user1 /lib/ *系统调用的函数库的保存位置。Libraries的缩写，是 /usr/lib 的软链接 （以 .so结尾或以 .so加数字结尾的是 Linux 重要系统函数） /lib64/ *64 位函数库保存位置。是 /usr/lib64 的软链接 /lost+found/ 当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中 fsck 工具会检查这里，并自动修复已经损坏的文件系统。这个目录只在每个分区中出现，例如 /lost+found 就是根分区的备份恢复目录，/boot/lost+found 就是 /boot 分区的备份恢复目录 /media/ 挂载目录（空目录/挂载点）。系统建议是用来挂载媒体设备的，如软盘和光盘 /misc/ 挂载目录（空目录/挂载点）。系统建议用来挂载 NFS 服务的共享目录。 /mnt/ 挂载目录（空目录/挂载点）。Mount 的缩写，系统建议这个目录来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区。（早期 Linux 只有这一个挂载目录，并没有细分，大部分工程师还是习惯在/mnt 目录下建立不同目录挂载不同设备的习惯。如 /mnt/cdrom 挂载光盘，/mnt/usb 挂载 U 盘） /opt/ 第三方安装的软件保存位置。Option的缩写，这个目录是放置和安装其他软件的位置，手工安装的源码包软件都可以安装到这个目录中。（大部分工程师还是习惯安装在 /usr/local 目录中） /proc *虚拟文件系统。Process的缩写，该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。如 /proc/cpuinfo 是保存 CPU 等信息，/proc/devices 是保存设备驱动的列表，/proc/filesystems 是保存文件系统列表的，/proc/net 是保存网络协议信息的…… /sys *虚拟文件系统。和 /proc 目录相似，该目录中的数据都保存在内存中，主要保存与内核相关的信息 /root root 的宿主目录。普通用户宿主目录在 /home 下，root 宿主目录直接在 / 下 /run 系统运行时产生的数据，如 ssid，pid 等相关数据。/var/run 是此目录的软链接 /srv 系统服务数据目录。Services 的缩写，一些系统服务启动后，可以在这个目录中保存所需的数据 /tmp 临时目录。Temporary 的缩写（临时的）系统存放临时文件的目录，在该目录下，所有用户都可以访问和写入。（建议不要在此目录存放重要数据，每次开机都把此目录清空） /selinux 安全增强型Linux。Security-EnhancedLinux的缩写 /usr 系统软件资源目录。UNIX Software Resource 的缩写，不是存放用户数据的目录，而是存放系统软件资源的目录。系统中安装的软件大多数保存在这里。 /usr/lib 应用程序调用的函数库保存位置 /usr/local 手工安装的软件保存位置。一般建议源码包安装在这个位置 /usr/share 应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录 /usr/src 源码包保存位置。src 是 source 的缩写，手工下载的源码包和内核源码包都可以保存在这里。不过大多数程序员习惯把手工下载的源码包保存到 /usr/local/src 目录中，把内核源码保存到 /usr/src/kernels 目录中 /usr/src/kernels 内核源码保存位置 /var 动态数据保存位置。Variable 的缩写，主要保存缓存、日志以及软件运行所产生的文件 /var/www/html RPM 包安装的 Apache 的网页主目录 /var/lib 程序运行中需要调用或改变的数据保存位置。如 RPM 包安装的 MySQL 的数据库保存在 /var/lib/mysql 目录中 /var/log 系统日志保存位置 /var/run 一些服务和程序运行后，它们的 PID （进程ID）保存位置。是 /run 目录的软链接 /var/spool 放置队列数据的目录。就是排队等待其他程序使用的数据，比如邮件队列和打印队列 /var/spool/mail 新收到的邮件队列保存位置。系统新收到的邮件会保存在此目录中 /var/spool/corn 系统的定时队列保存位置。系统的计划任务会保存在这里","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/linux/linux-directory.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"Linux 常用目录结构"}],["meta",{"property":"og:description","content":"Linux 常用目录结构 目录名 目录的作用（开头有 * 表示不要轻易改动） /bin 存放系统命令的目录，普通用户和超级用户都可以执行。Binary（二进制的）的缩写，是 /usr/bin 目录的软链接 /sbin 存放系统命令的目录，只有超级用户才可以执行。是 /usr/sbin 目录的软链接 /usr/bin 存放系统命令的目录，普通用户和超级用户都可以执行 /usr/sbin 存放系统命令的目录，只有超级用户才可以执行 /boot * 系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序（grub） /dev/ * 设备文件保存位置。Device（设备）的缩写 /etc/ 系统管理所需要的配置文件。系统内采用默认安装方式（RPM 包安装）的服务配置文件全部保存在此目录中，如用户信息、服务的启动脚步、常用服务的配置文件等 /home/ 普通用户的家目录。在创建用户时，每个用户都要有一个默认登陆和保存自己数据的位置，就是用户的家目录，所有普通用户的宿主目录是在 /home 下建立一个和用户名相同的目录。如用户 user1 的家目录就是 /home/user1 /lib/ *系统调用的函数库的保存位置。Libraries的缩写，是 /usr/lib 的软链接 （以 .so结尾或以 .so加数字结尾的是 Linux 重要系统函数） /lib64/ *64 位函数库保存位置。是 /usr/lib64 的软链接 /lost+found/ 当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中 fsck 工具会检查这里，并自动修复已经损坏的文件系统。这个目录只在每个分区中出现，例如 /lost+found 就是根分区的备份恢复目录，/boot/lost+found 就是 /boot 分区的备份恢复目录 /media/ 挂载目录（空目录/挂载点）。系统建议是用来挂载媒体设备的，如软盘和光盘 /misc/ 挂载目录（空目录/挂载点）。系统建议用来挂载 NFS 服务的共享目录。 /mnt/ 挂载目录（空目录/挂载点）。Mount 的缩写，系统建议这个目录来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区。（早期 Linux 只有这一个挂载目录，并没有细分，大部分工程师还是习惯在/mnt 目录下建立不同目录挂载不同设备的习惯。如 /mnt/cdrom 挂载光盘，/mnt/usb 挂载 U 盘） /opt/ 第三方安装的软件保存位置。Option的缩写，这个目录是放置和安装其他软件的位置，手工安装的源码包软件都可以安装到这个目录中。（大部分工程师还是习惯安装在 /usr/local 目录中） /proc *虚拟文件系统。Process的缩写，该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。如 /proc/cpuinfo 是保存 CPU 等信息，/proc/devices 是保存设备驱动的列表，/proc/filesystems 是保存文件系统列表的，/proc/net 是保存网络协议信息的…… /sys *虚拟文件系统。和 /proc 目录相似，该目录中的数据都保存在内存中，主要保存与内核相关的信息 /root root 的宿主目录。普通用户宿主目录在 /home 下，root 宿主目录直接在 / 下 /run 系统运行时产生的数据，如 ssid，pid 等相关数据。/var/run 是此目录的软链接 /srv 系统服务数据目录。Services 的缩写，一些系统服务启动后，可以在这个目录中保存所需的数据 /tmp 临时目录。Temporary 的缩写（临时的）系统存放临时文件的目录，在该目录下，所有用户都可以访问和写入。（建议不要在此目录存放重要数据，每次开机都把此目录清空） /selinux 安全增强型Linux。Security-EnhancedLinux的缩写 /usr 系统软件资源目录。UNIX Software Resource 的缩写，不是存放用户数据的目录，而是存放系统软件资源的目录。系统中安装的软件大多数保存在这里。 /usr/lib 应用程序调用的函数库保存位置 /usr/local 手工安装的软件保存位置。一般建议源码包安装在这个位置 /usr/share 应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录 /usr/src 源码包保存位置。src 是 source 的缩写，手工下载的源码包和内核源码包都可以保存在这里。不过大多数程序员习惯把手工下载的源码包保存到 /usr/local/src 目录中，把内核源码保存到 /usr/src/kernels 目录中 /usr/src/kernels 内核源码保存位置 /var 动态数据保存位置。Variable 的缩写，主要保存缓存、日志以及软件运行所产生的文件 /var/www/html RPM 包安装的 Apache 的网页主目录 /var/lib 程序运行中需要调用或改变的数据保存位置。如 RPM 包安装的 MySQL 的数据库保存在 /var/lib/mysql 目录中 /var/log 系统日志保存位置 /var/run 一些服务和程序运行后，它们的 PID （进程ID）保存位置。是 /run 目录的软链接 /var/spool 放置队列数据的目录。就是排队等待其他程序使用的数据，比如邮件队列和打印队列 /var/spool/mail 新收到的邮件队列保存位置。系统新收到的邮件会保存在此目录中 /var/spool/corn 系统的定时队列保存位置。系统的计划任务会保存在这里"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-22T09:03:56.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T09:03:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 常用目录结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-22T09:03:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1700643836000,"updatedTime":1700643836000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":4.95,"words":1484},"filePathRelative":"posts/linux/linux-directory.md","localizedDate":"2023年8月3日","excerpt":"<h1> Linux 常用目录结构</h1>\\n<table>\\n<thead>\\n<tr>\\n<th>目录名</th>\\n<th>目录的作用（开头有 * 表示不要轻易改动）</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>/bin</td>\\n<td>存放系统命令的目录，普通用户和超级用户都可以执行。Binary（二进制的）的缩写，是 /usr/bin 目录的软链接</td>\\n</tr>\\n<tr>\\n<td>/sbin</td>\\n<td>存放系统命令的目录，只有超级用户才可以执行。是 /usr/sbin 目录的软链接</td>\\n</tr>\\n<tr>\\n<td>/usr/bin</td>\\n<td>存放系统命令的目录，普通用户和超级用户都可以执行</td>\\n</tr>\\n<tr>\\n<td>/usr/sbin</td>\\n<td>存放系统命令的目录，只有超级用户才可以执行</td>\\n</tr>\\n<tr>\\n<td>/boot</td>\\n<td>* 系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序（grub）</td>\\n</tr>\\n<tr>\\n<td>/dev/</td>\\n<td>* 设备文件保存位置。Device（设备）的缩写</td>\\n</tr>\\n<tr>\\n<td>/etc/</td>\\n<td>系统管理所需要的配置文件。系统内采用默认安装方式（RPM 包安装）的服务配置文件全部保存在此目录中，如用户信息、服务的启动脚步、常用服务的配置文件等</td>\\n</tr>\\n<tr>\\n<td>/home/</td>\\n<td>普通用户的家目录。在创建用户时，每个用户都要有一个默认登陆和保存自己数据的位置，就是用户的家目录，所有普通用户的宿主目录是在 /home 下建立一个和用户名相同的目录。如用户 user1 的家目录就是 /home/user1</td>\\n</tr>\\n<tr>\\n<td>/lib/</td>\\n<td>*系统调用的函数库的保存位置。Libraries的缩写，是 /usr/lib 的软链接 （<em>以 .so结尾或以 .so加数字结尾的是 Linux 重要系统函数</em>）</td>\\n</tr>\\n<tr>\\n<td>/lib64/</td>\\n<td>*64 位函数库保存位置。是 /usr/lib64 的软链接</td>\\n</tr>\\n<tr>\\n<td>/lost+found/</td>\\n<td>当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中 fsck 工具会检查这里，并自动修复已经损坏的文件系统。这个目录只在每个分区中出现，例如 /lost+found 就是根分区的备份恢复目录，/boot/lost+found 就是 /boot 分区的备份恢复目录</td>\\n</tr>\\n<tr>\\n<td>/media/</td>\\n<td>挂载目录（空目录/挂载点）。系统建议是用来挂载媒体设备的，如软盘和光盘</td>\\n</tr>\\n<tr>\\n<td>/misc/</td>\\n<td>挂载目录（空目录/挂载点）。系统建议用来挂载 NFS 服务的共享目录。</td>\\n</tr>\\n<tr>\\n<td>/mnt/</td>\\n<td>挂载目录（空目录/挂载点）。Mount 的缩写，系统建议这个目录来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区。（<em>早期 Linux 只有这一个挂载目录，并没有细分，大部分工程师还是习惯在/mnt 目录下建立不同目录挂载不同设备的习惯。如 /mnt/cdrom 挂载光盘，/mnt/usb 挂载 U 盘</em>）</td>\\n</tr>\\n<tr>\\n<td>/opt/</td>\\n<td>第三方安装的软件保存位置。Option的缩写，这个目录是放置和安装其他软件的位置，手工安装的源码包软件都可以安装到这个目录中。（<em>大部分工程师还是习惯安装在 /usr/local 目录中</em>）</td>\\n</tr>\\n<tr>\\n<td>/proc</td>\\n<td>*虚拟文件系统。Process的缩写，该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。如 /proc/cpuinfo 是保存 CPU 等信息，/proc/devices 是保存设备驱动的列表，/proc/filesystems 是保存文件系统列表的，/proc/net 是保存网络协议信息的……</td>\\n</tr>\\n<tr>\\n<td>/sys</td>\\n<td>*虚拟文件系统。和 /proc 目录相似，该目录中的数据都保存在内存中，主要保存与内核相关的信息</td>\\n</tr>\\n<tr>\\n<td>/root</td>\\n<td>root 的宿主目录。普通用户宿主目录在 /home 下，root 宿主目录直接在 / 下</td>\\n</tr>\\n<tr>\\n<td>/run</td>\\n<td>系统运行时产生的数据，如 ssid，pid 等相关数据。/var/run 是此目录的软链接</td>\\n</tr>\\n<tr>\\n<td>/srv</td>\\n<td>系统服务数据目录。Services 的缩写，一些系统服务启动后，可以在这个目录中保存所需的数据</td>\\n</tr>\\n<tr>\\n<td>/tmp</td>\\n<td>临时目录。Temporary 的缩写（临时的）系统存放临时文件的目录，在该目录下，所有用户都可以访问和写入。（<em>建议不要在此目录存放重要数据，每次开机都把此目录清空</em>）</td>\\n</tr>\\n<tr>\\n<td>/selinux</td>\\n<td>安全增强型Linux。Security-EnhancedLinux的缩写</td>\\n</tr>\\n<tr>\\n<td>/usr</td>\\n<td>系统软件资源目录。UNIX Software Resource 的缩写，不是存放用户数据的目录，而是存放系统软件资源的目录。系统中安装的软件大多数保存在这里。</td>\\n</tr>\\n<tr>\\n<td>/usr/lib</td>\\n<td>应用程序调用的函数库保存位置</td>\\n</tr>\\n<tr>\\n<td>/usr/local</td>\\n<td>手工安装的软件保存位置。一般建议源码包安装在这个位置</td>\\n</tr>\\n<tr>\\n<td>/usr/share</td>\\n<td>应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录</td>\\n</tr>\\n<tr>\\n<td>/usr/src</td>\\n<td>源码包保存位置。src 是 source 的缩写，手工下载的源码包和内核源码包都可以保存在这里。不过大多数程序员习惯把手工下载的源码包保存到 /usr/local/src 目录中，把内核源码保存到 /usr/src/kernels 目录中</td>\\n</tr>\\n<tr>\\n<td>/usr/src/kernels</td>\\n<td>内核源码保存位置</td>\\n</tr>\\n<tr>\\n<td>/var</td>\\n<td>动态数据保存位置。Variable 的缩写，主要保存缓存、日志以及软件运行所产生的文件</td>\\n</tr>\\n<tr>\\n<td>/var/www/html</td>\\n<td>RPM 包安装的 Apache 的网页主目录</td>\\n</tr>\\n<tr>\\n<td>/var/lib</td>\\n<td>程序运行中需要调用或改变的数据保存位置。如 RPM 包安装的 MySQL 的数据库保存在 /var/lib/mysql 目录中</td>\\n</tr>\\n<tr>\\n<td>/var/log</td>\\n<td>系统日志保存位置</td>\\n</tr>\\n<tr>\\n<td>/var/run</td>\\n<td>一些服务和程序运行后，它们的 PID （进程ID）保存位置。是 /run 目录的软链接</td>\\n</tr>\\n<tr>\\n<td>/var/spool</td>\\n<td>放置队列数据的目录。就是排队等待其他程序使用的数据，比如邮件队列和打印队列</td>\\n</tr>\\n<tr>\\n<td>/var/spool/mail</td>\\n<td>新收到的邮件队列保存位置。系统新收到的邮件会保存在此目录中</td>\\n</tr>\\n<tr>\\n<td>/var/spool/corn</td>\\n<td>系统的定时队列保存位置。系统的计划任务会保存在这里</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};

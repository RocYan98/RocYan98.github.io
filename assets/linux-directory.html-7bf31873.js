import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as r,e}from"./app-68ddd53f.js";const o={},s=e('<h1 id="linux-常用目录结构" tabindex="-1"><a class="header-anchor" href="#linux-常用目录结构" aria-hidden="true">#</a> Linux 常用目录结构</h1><table><thead><tr><th>目录名</th><th>目录的作用（开头有 * 表示不要轻易改动）</th></tr></thead><tbody><tr><td>/bin</td><td>存放系统命令的目录，普通用户和超级用户都可以执行。Binary（二进制的）的缩写，是 /usr/bin 目录的软链接</td></tr><tr><td>/sbin</td><td>存放系统命令的目录，只有超级用户才可以执行。是 /usr/sbin 目录的软链接</td></tr><tr><td>/usr/bin</td><td>存放系统命令的目录，普通用户和超级用户都可以执行</td></tr><tr><td>/usr/sbin</td><td>存放系统命令的目录，只有超级用户才可以执行</td></tr><tr><td>/boot</td><td>* 系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序（grub）</td></tr><tr><td>/dev/</td><td>* 设备文件保存位置。Device（设备）的缩写</td></tr><tr><td>/etc/</td><td>系统管理所需要的配置文件。系统内采用默认安装方式（RPM 包安装）的服务配置文件全部保存在此目录中，如用户信息、服务的启动脚步、常用服务的配置文件等</td></tr><tr><td>/home/</td><td>普通用户的家目录。在创建用户时，每个用户都要有一个默认登陆和保存自己数据的位置，就是用户的家目录，所有普通用户的宿主目录是在 /home 下建立一个和用户名相同的目录。如用户 user1 的家目录就是 /home/user1</td></tr><tr><td>/lib/</td><td>*系统调用的函数库的保存位置。Libraries的缩写，是 /usr/lib 的软链接 （<em>以 .so结尾或以 .so加数字结尾的是 Linux 重要系统函数</em>）</td></tr><tr><td>/lib64/</td><td>*64 位函数库保存位置。是 /usr/lib64 的软链接</td></tr><tr><td>/lost+found/</td><td>当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中 fsck 工具会检查这里，并自动修复已经损坏的文件系统。这个目录只在每个分区中出现，例如 /lost+found 就是根分区的备份恢复目录，/boot/lost+found 就是 /boot 分区的备份恢复目录</td></tr><tr><td>/media/</td><td>挂载目录（空目录/挂载点）。系统建议是用来挂载媒体设备的，如软盘和光盘</td></tr><tr><td>/misc/</td><td>挂载目录（空目录/挂载点）。系统建议用来挂载 NFS 服务的共享目录。</td></tr><tr><td>/mnt/</td><td>挂载目录（空目录/挂载点）。Mount 的缩写，系统建议这个目录来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区。（<em>早期 Linux 只有这一个挂载目录，并没有细分，大部分工程师还是习惯在/mnt 目录下建立不同目录挂载不同设备的习惯。如 /mnt/cdrom 挂载光盘，/mnt/usb 挂载 U 盘</em>）</td></tr><tr><td>/opt/</td><td>第三方安装的软件保存位置。Option的缩写，这个目录是放置和安装其他软件的位置，手工安装的源码包软件都可以安装到这个目录中。（<em>大部分工程师还是习惯安装在 /usr/local 目录中</em>）</td></tr><tr><td>/proc</td><td>*虚拟文件系统。Process的缩写，该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。如 /proc/cpuinfo 是保存 CPU 等信息，/proc/devices 是保存设备驱动的列表，/proc/filesystems 是保存文件系统列表的，/proc/net 是保存网络协议信息的……</td></tr><tr><td>/sys</td><td>*虚拟文件系统。和 /proc 目录相似，该目录中的数据都保存在内存中，主要保存与内核相关的信息</td></tr><tr><td>/root</td><td>root 的宿主目录。普通用户宿主目录在 /home 下，root 宿主目录直接在 / 下</td></tr><tr><td>/run</td><td>系统运行时产生的数据，如 ssid，pid 等相关数据。/var/run 是此目录的软链接</td></tr><tr><td>/srv</td><td>系统服务数据目录。Services 的缩写，一些系统服务启动后，可以在这个目录中保存所需的数据</td></tr><tr><td>/tmp</td><td>临时目录。Temporary 的缩写（临时的）系统存放临时文件的目录，在该目录下，所有用户都可以访问和写入。（<em>建议不要在此目录存放重要数据，每次开机都把此目录清空</em>）</td></tr><tr><td>/selinux</td><td>安全增强型Linux。Security-EnhancedLinux的缩写</td></tr><tr><td>/usr</td><td>系统软件资源目录。UNIX Software Resource 的缩写，不是存放用户数据的目录，而是存放系统软件资源的目录。系统中安装的软件大多数保存在这里。</td></tr><tr><td>/usr/lib</td><td>应用程序调用的函数库保存位置</td></tr><tr><td>/usr/local</td><td>手工安装的软件保存位置。一般建议源码包安装在这个位置</td></tr><tr><td>/usr/share</td><td>应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录</td></tr><tr><td>/usr/src</td><td>源码包保存位置。src 是 source 的缩写，手工下载的源码包和内核源码包都可以保存在这里。不过大多数程序员习惯把手工下载的源码包保存到 /usr/local/src 目录中，把内核源码保存到 /usr/src/kernels 目录中</td></tr><tr><td>/usr/src/kernels</td><td>内核源码保存位置</td></tr><tr><td>/var</td><td>动态数据保存位置。Variable 的缩写，主要保存缓存、日志以及软件运行所产生的文件</td></tr><tr><td>/var/www/html</td><td>RPM 包安装的 Apache 的网页主目录</td></tr><tr><td>/var/lib</td><td>程序运行中需要调用或改变的数据保存位置。如 RPM 包安装的 MySQL 的数据库保存在 /var/lib/mysql 目录中</td></tr><tr><td>/var/log</td><td>系统日志保存位置</td></tr><tr><td>/var/run</td><td>一些服务和程序运行后，它们的 PID （进程ID）保存位置。是 /run 目录的软链接</td></tr><tr><td>/var/spool</td><td>放置队列数据的目录。就是排队等待其他程序使用的数据，比如邮件队列和打印队列</td></tr><tr><td>/var/spool/mail</td><td>新收到的邮件队列保存位置。系统新收到的邮件会保存在此目录中</td></tr><tr><td>/var/spool/corn</td><td>系统的定时队列保存位置。系统的计划任务会保存在这里</td></tr></tbody></table>',2),i=[s];function n(c,a){return d(),r("div",null,i)}const m=t(o,[["render",n],["__file","linux-directory.html.vue"]]);export{m as default};

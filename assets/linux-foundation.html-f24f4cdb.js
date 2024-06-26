import{_ as i,o as e,c as l,f as t}from"./app-f74ea474.js";const a={},d=t('<h1 id="linux-基础" tabindex="-1"><a class="header-anchor" href="#linux-基础" aria-hidden="true">#</a> Linux 基础</h1><h2 id="一、虚拟机" tabindex="-1"><a class="header-anchor" href="#一、虚拟机" aria-hidden="true">#</a> 一、虚拟机</h2><h3 id="_1-1-虚拟机的三种网络链接" tabindex="-1"><a class="header-anchor" href="#_1-1-虚拟机的三种网络链接" aria-hidden="true">#</a> 1.1 虚拟机的三种网络链接：</h3><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261216714.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th style="text-align:left;">连接方式</th><th style="text-align:left;">能否连接本机</th><th>能否连接局域网</th><th style="text-align:left;">能否连接公网</th></tr></thead><tbody><tr><td style="text-align:left;">桥接</td><td style="text-align:left;">Y</td><td>Y</td><td style="text-align:left;">Y</td></tr><tr><td style="text-align:left;">NAT</td><td style="text-align:left;">Y</td><td>N</td><td style="text-align:left;">Y</td></tr><tr><td style="text-align:left;">仅主机</td><td style="text-align:left;">Y</td><td>N</td><td style="text-align:left;">N</td></tr></tbody></table><h2 id="二、系统分区" tabindex="-1"><a class="header-anchor" href="#二、系统分区" aria-hidden="true">#</a> 二、系统分区</h2><h3 id="_2-1-磁盘分区" tabindex="-1"><a class="header-anchor" href="#_2-1-磁盘分区" aria-hidden="true">#</a> 2.1 磁盘分区</h3><ul><li>磁盘分区是使用分区编辑器（partition editor）在磁盘上划分几个逻辑部分。磁片一旦划分成数个分区（Partition），不同类的目录与文件可以存储进不同的分区。</li><li>两种分区表形式 <ul><li>MBR分区表（主引导记录 <em>目前常用，即将被淘汰</em>）：最大支持2.1TB硬盘，最多支持4个分区</li><li>GPT分区表（全局唯一标示分区表）：支持9.4ZB硬盘（1ZB=1024PB，1PB=1024EB，1EB=1024TB）。理论上支持的分区数没有限制，但windows限制128个主分区。</li></ul></li><li>分区类型 <ul><li>主分区： <ul><li>一个硬盘最多只能有4个</li><li>编号为1-4</li></ul></li><li>扩展分区： <ul><li>最多只能有1个</li><li>主分区加扩展分区最多有4个</li><li>不能写入数据，只能包含逻辑分区，可以包含11个逻辑分区</li></ul></li><li>逻辑分区： <ul><li>编号从5开始</li></ul></li></ul></li></ul><h3 id="_2-2-格式化-为了写入文件系统" tabindex="-1"><a class="header-anchor" href="#_2-2-格式化-为了写入文件系统" aria-hidden="true">#</a> 2.2 格式化（为了写入文件系统）</h3><ul><li>定义：格式化（高级格式化）又称逻辑格式化，它是指根据用户选定的<a href="">文件系统</a>，在磁盘的特点区域写入特定数据，在分区中划出一片用于存放文件分配表、目录表等用于文件管理等磁盘空间，格式化时会把文件清空。</li><li>ext4文件系统原理：会把一块分区分为Inode和许多等大小的block，block用来存放数据，Inode为索引节点。</li></ul><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261216043.jpg" alt="ext4 文件系统示意图" tabindex="0" loading="lazy"><figcaption>ext4 文件系统示意图</figcaption></figure><h4 id="_2-2-1-block" tabindex="-1"><a class="header-anchor" href="#_2-2-1-block" aria-hidden="true">#</a> 2.2.1 block</h4><ul><li>在linux中，block默认为4KB（<em>也可选择2KB，1KB</em>），系统存放时尽量连续存放，但不一定是连续的（<em>连续存储，读取速度更快</em>）。block是最小的存储单位，当一个block没存满时，不能存放另一个文件。</li></ul><h4 id="_2-2-2-inode" tabindex="-1"><a class="header-anchor" href="#_2-2-2-inode" aria-hidden="true">#</a> 2.2.2 Inode</h4><ul><li>一般为128KB-256B，存放文件Inode id+时间+权限。<em>Inode也可能被写满，所以不能无限制存放空文件。</em></li><li>根目录的 Inode 固定为 2</li></ul><h3 id="_2-3-硬件设备文件名-给每个分区定义设备文件名" tabindex="-1"><a class="header-anchor" href="#_2-3-硬件设备文件名-给每个分区定义设备文件名" aria-hidden="true">#</a> 2.3 硬件设备文件名（给每个分区定义设备文件名）</h3><table><thead><tr><th>硬件</th><th>设备文件名[字母表示第几块硬盘]</th></tr></thead><tbody><tr><td>IDE硬盘</td><td>/dev/hd[a-d]</td></tr><tr><td>SCSI/SATA/USB硬盘</td><td>/dev/sd[a-p]</td></tr><tr><td>光驱</td><td>/dev/cdrom或/dev/sr0</td></tr><tr><td>软盘</td><td>/dev/fd[0-1]</td></tr><tr><td>打印机(25针)</td><td>/dev/lp[0-2]</td></tr><tr><td>打印机(USB)</td><td>/dev/usb/lp[0-15]</td></tr><tr><td>鼠标</td><td>/dev/mouse</td></tr></tbody></table><ul><li>/dev/hda1（IDE硬盘接口 <em>家用已淘汰，光驱在用</em>） <ul><li>第一块IDE硬盘的第一个主分区</li></ul></li><li>/dev/sda1（SCSI硬盘接口 <em>服务器已淘汰</em>、SATA硬盘接口 <em>服务器家用 目前使用</em>、USB接口） <ul><li>第一块SATA硬盘的第一个主分区</li></ul></li><li>/dev/sdb5 <ul><li>第二块SATA硬盘的第一个逻辑分区</li></ul></li></ul><h3 id="_2-4-挂载-给每个分区分配挂载点" tabindex="-1"><a class="header-anchor" href="#_2-4-挂载-给每个分区分配挂载点" aria-hidden="true">#</a> 2.4 挂载（给每个分区分配挂载点）</h3><ul><li><p>挂载点（用户访问硬盘的接口，使用已存在的空目录作为挂载点，包括新建目录也可以作为挂载点，/bin、/lib、/etc除外，这三个目录必须在根目录下）</p></li><li><p>必须分区（没有这两个分区无法安装）</p><ul><li>/（根分区）</li><li>swap分区（交换分区 <em>内核使用，普通用户无法使用</em>） <ul><li>如果真实内存小于4GB，swap位内存的两倍</li><li>如果真实内存大于4GB，swap和内存一致</li></ul></li></ul></li><li><p>推荐分区（实际上也必须，否则根目录满了之后无法启动系统）</p><ul><li>/boot（启动分区）</li></ul></li><li><p>常用分区</p><ul><li>/home（用于文件服务器）</li><li>/www（用于Web服务器）</li></ul></li><li><p>文件系统结构</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261216891.png" alt="文件系统结构" tabindex="0" loading="lazy"><figcaption>文件系统结构</figcaption></figure></li></ul><h2 id="三、linux-与-windows-的主要区别" tabindex="-1"><a class="header-anchor" href="#三、linux-与-windows-的主要区别" aria-hidden="true">#</a> 三、Linux 与 Windows 的主要区别</h2><h3 id="_3-1-linux-严格区分大小写" tabindex="-1"><a class="header-anchor" href="#_3-1-linux-严格区分大小写" aria-hidden="true">#</a> 3.1 Linux 严格区分大小写</h3><ul><li>Linux严格区分大小写，Windows不区分，包括文件名、目录名、命令（<em>命令没有大写</em>）、命令选项、配置文件设置选项等。</li></ul><h3 id="_3-2-linux-一切皆文件" tabindex="-1"><a class="header-anchor" href="#_3-2-linux-一切皆文件" aria-hidden="true">#</a> 3.2 Linux 一切皆文件</h3><ul><li>Linux 中所有内容都是以文件的形式保存和管理的，硬件设备也是文件。Windows 是通过设备管理器来管理硬件的，Linux 的设备文件保存在/dev/目录中，硬盘文件是/dev/sd[a-p]，光盘文件是/dev/hdc等</li></ul><h3 id="_3-3-linux-不靠扩展名区分文件类型" tabindex="-1"><a class="header-anchor" href="#_3-3-linux-不靠扩展名区分文件类型" aria-hidden="true">#</a> 3.3 Linux 不靠扩展名区分文件类型</h3><ul><li><p>Windows 依赖扩展名区分文件类型，如*.txt是文本文件、*.exe是执行文件、*.ini是配置文件、*.mp4是电影文件等。Linux 不靠扩展名区分文件类型，而是通过权限位标识来确定文件类型，Linux 下的可执行文件是普通文件被赋予了可执行权限。</p><p>Linux 下的文件类型：</p><table><thead><tr><th>文件属性</th><th>文件类型</th></tr></thead><tbody><tr><td>-</td><td>常规文件，即file</td></tr><tr><td>d</td><td>目录文件</td></tr><tr><td>b</td><td>block device 即块设备文件，如硬盘;支持以block为单位进行随机访问</td></tr><tr><td>c</td><td>character device 即字符设备文件，如键盘支持以character为单位进行线性访问</td></tr><tr><td>l</td><td>symbolic link 即符号链接文件，又称软链接文件</td></tr><tr><td>p</td><td>pipe 即命名管道文件</td></tr><tr><td>s</td><td>socket 即套接字文件，用于实现两个进程进行通信</td></tr></tbody></table></li><li><p>Linux 中有一些特殊文件还是要求写“扩展名”的，这并不是 Linux 靠扩展名来识别文件，而是为了帮助管理员区分不同的文件类型。常见的需要写扩展名的文件有以下几种：</p><blockquote><h4 id="压缩包" tabindex="-1"><a class="header-anchor" href="#压缩包" aria-hidden="true">#</a> 压缩包</h4><p>Linux 下常见的压缩文件名有 *.gz、*.bz2、*.zip、*.tar.gz、*.tar.bz2、*.tgz等。在 Linux 中，不同的压缩包解压命令不同，写明扩展名可以帮助程序员判断压缩包的格式。（<em>在 Linux 中，没有写扩展名也是可以解压缩的</em>）</p><h4 id="二进制软件包" tabindex="-1"><a class="header-anchor" href="#二进制软件包" aria-hidden="true">#</a> 二进制软件包</h4><p>CentOS 中所使用的二进制安装包是 RPM 包，所有的 RPM 包都用 *.rpm 扩展名结尾。</p><h4 id="程序文件" tabindex="-1"><a class="header-anchor" href="#程序文件" aria-hidden="true">#</a> 程序文件</h4><p>Shell 脚步一般用 *.sh 扩展名结尾，c语言文件用 *.c 扩展名结尾</p><h4 id="网页文件" tabindex="-1"><a class="header-anchor" href="#网页文件" aria-hidden="true">#</a> 网页文件</h4><p>网页一般用 *.html *.php 等结尾，不过这是网页服务器等要求，而不是 Linux 的要求</p></blockquote></li></ul><h3 id="_3-4-linux-中所有的存储设备都必须挂载之后才能使用" tabindex="-1"><a class="header-anchor" href="#_3-4-linux-中所有的存储设备都必须挂载之后才能使用" aria-hidden="true">#</a> 3.4 Linux 中所有的存储设备都必须挂载之后才能使用</h3><ul><li>Linux 中所有的存储设备都有自己的设备文件名，这些设备文件必须在挂载之后才能使用，包括硬盘、U 盘和光盘（<em>在 Linux 中硬盘自动挂载，U 盘和光盘需要手动挂载，在 Linux 中设置自动挂载设备，如果开机时没有该设备，则会启动失败。在 Windows 中 U 盘和光盘也会自动挂载，卸载设备都需要手动卸载</em>）。挂载其实是给这些存储设备分配盘符，Windows 中的盘符永英文字母表示，Linux 中的盘符则是一个已经建立的空目录。把设备文件（如/dev/sdb）和挂载点（已经建立的空目录）连接的过程叫挂载。</li></ul><h2 id="四、linux-注意事项" tabindex="-1"><a class="header-anchor" href="#四、linux-注意事项" aria-hidden="true">#</a> 四、Linux 注意事项</h2><h3 id="_4-1-远程服务器关机及重启时的注意事项" tabindex="-1"><a class="header-anchor" href="#_4-1-远程服务器关机及重启时的注意事项" aria-hidden="true">#</a> 4.1 远程服务器关机及重启时的注意事项</h3><ul><li>远程服务器不能关机，只能重启。<em>服务器如果在远程，一旦关机只能求助托管机房的管理人员帮忙开机</em></li></ul><h4 id="_4-1-1-远程服务器在重启前-要中止正在执行的服务" tabindex="-1"><a class="header-anchor" href="#_4-1-1-远程服务器在重启前-要中止正在执行的服务" aria-hidden="true">#</a> 4.1.1 远程服务器在重启前，要中止正在执行的服务</h4><ul><li>计算机的硬盘在高速存储时断电或重启，非常容易造成硬盘损坏。在重启前先中止<br> 服务，甚至可以考虑暂时断开对外提供服务的网络。</li></ul><h4 id="_4-1-2-重启命令的选用" tabindex="-1"><a class="header-anchor" href="#_4-1-2-重启命令的选用" aria-hidden="true">#</a> 4.1.2 重启命令的选用</h4><ul><li>Linux 可以识别的重启命令有很多条，建议使用 shutdown -r now 命令重启。这条命令在重启时会正常保存和中止服务器中正在运行的程序，是安全重启命令。最好在重启前执行几次 sync 命令，这条命令是数据同步命令，可以让暂时保存在内存中的数据同步到硬盘上。</li></ul><h3 id="_4-2-不要在服务器访问高峰运行高负载命令" tabindex="-1"><a class="header-anchor" href="#_4-2-不要在服务器访问高峰运行高负载命令" aria-hidden="true">#</a> 4.2 不要在服务器访问高峰运行高负载命令</h3><ul><li>在服务器访问高峰如果使用一些对服务器压力较大的命令（<em>如复制大量的数据、压缩或解压大文件、大范围的硬盘搜索等</em>），则有可能会造成服务器响应缓慢甚至死机。</li><li>一般认为 17:00 -- 24:00 算作访问高峰期（<em>不同服务器高峰期不同</em>），一般建议在 04:00 -- 05:00 执行高负载命令（<em>使用系统的计划任务让操作系统自动在指定时间段执行</em>）。</li></ul><h3 id="_4-3-远程配置防火墙时不要把自己提出服务器" tabindex="-1"><a class="header-anchor" href="#_4-3-远程配置防火墙时不要把自己提出服务器" aria-hidden="true">#</a> 4.3 远程配置防火墙时不要把自己提出服务器</h3><ul><li><p>防火墙配置完全靠手工命令完成，配置规则和配置命令相对复杂，容易发生错误。</p></li><li><p>如何避免：</p><ol><li><p>在服务器本地配置防火墙</p></li><li><p>在本地测试完善后再上传，降低发生故障的概率（<em>虽然在本地测试好后再上传，但是传到远程服务器时仍有可能发生问题</em>）</p></li><li><p>先在服务器上写一个系统定时任务，让服务器每5分钟清空一下防火墙规则，等测试没问题之后再删除这个定时任务</p></li></ol></li></ul><h3 id="_4-4-指定合理的密码规范并定期更新" tabindex="-1"><a class="header-anchor" href="#_4-4-指定合理的密码规范并定期更新" aria-hidden="true">#</a> 4.4 指定合理的密码规范并定期更新</h3><ul><li>设置密码时要遵守三原则： <ul><li>复杂性 <ul><li>8位字符以上</li><li>大写字母、小写字母、数字、符号至少要有三种</li><li>不能是现有的英文单词</li><li>不能和个人用户信息有关</li></ul></li><li>易记忆性</li><li>时效性：每180天更新一次密码</li></ul></li></ul><h3 id="_4-5-合理分配权限" tabindex="-1"><a class="header-anchor" href="#_4-5-合理分配权限" aria-hidden="true">#</a> 4.5 合理分配权限</h3><ul><li>服务器管理有一个最简单的原则：给予用户最小的权限</li></ul><h3 id="_4-6-定期备份重要数据和日志" tabindex="-1"><a class="header-anchor" href="#_4-6-定期备份重要数据和日志" aria-hidden="true">#</a> 4.6 定期备份重要数据和日志</h3><ul><li>备份的基本原则：不要把鸡蛋放在同一个篮子里</li></ul>',46),r=[d];function h(n,u){return e(),l("div",null,r)}const s=i(a,[["render",h],["__file","linux-foundation.html.vue"]]);export{s as default};

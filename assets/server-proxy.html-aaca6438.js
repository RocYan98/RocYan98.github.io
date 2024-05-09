import{_ as t,r as i,o as r,c as l,b as s,e as n,d as e,f as o}from"./app-b912b4e9.js";const p={},c=o('<h1 id="服务器代理" tabindex="-1"><a class="header-anchor" href="#服务器代理" aria-hidden="true">#</a> 服务器代理</h1><p>主要分为以下 2 步：</p><ol><li>安装配置 ssr</li><li>安装配置 proxychains4</li></ol><h2 id="_1-ssr" tabindex="-1"><a class="header-anchor" href="#_1-ssr" aria-hidden="true">#</a> 1 SSR</h2><h3 id="_1-1-安装-ssr-脚本" tabindex="-1"><a class="header-anchor" href="#_1-1-安装-ssr-脚本" aria-hidden="true">#</a> 1.1 安装 ssr 脚本</h3>',5),d={href:"https://github.com/the0demiurge/CharlesScripts.git",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"CharlesScripts/charles/bin/ssr",-1),v={href:"https://github.com/the0demiurge/CharlesScripts/blob/master/charles/bin/ssr",target:"_blank",rel:"noopener noreferrer"},h=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.创建ssr文件并编辑</span>
<span class="token function">vim</span> ssr
<span class="token comment"># 2.把复制的脚本粘贴进去</span>

<span class="token comment"># 3.给脚本添加执行权限</span>
<span class="token function">chmod</span> +x ./ssr
<span class="token comment"># 4.把脚本移动到可执行脚本目录</span>
<span class="token function">sudo</span> <span class="token function">mv</span> ./ssr /usr/local/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然第 4 步你也可以选择直接添加环境变量。</p><h3 id="_1-2-安装配置-ssr" tabindex="-1"><a class="header-anchor" href="#_1-2-安装配置-ssr" aria-hidden="true">#</a> 1.2 安装配置 ssr</h3><p>在安装完 ssr 脚本后，在 terminal 输入 ssr 会出现如下提示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ShadowSocksR python client tool
<span class="token keyword">if</span> you have not installed ssr, run <span class="token variable"><span class="token variable">\`</span>ssr <span class="token function">install</span><span class="token variable">\`</span></span> first
Usage:
	 ssr <span class="token builtin class-name">help</span>

 Install/Uninstall
	 ssr <span class="token function">install</span>      <span class="token function">install</span> shadowsocksr client
	 ssr uninstall    uninstall shadowsocksr client

 Config and Subscribe
	 ssr update       update subscription from http://ss.pythonic.life
	 ssr config       edit config.json
	 ssr xclip        <span class="token function">paste</span> configs from clipboard to config.json

 Start/Stop/Restart
	 ssr start        start the shadowsocks <span class="token function">service</span>
	 ssr stop         stop the shadowsocks <span class="token function">service</span>
	 ssr restart      restart the shadowsocks <span class="token function">service</span>

 Testing and Maintenance
	 ssr <span class="token builtin class-name">test</span>         get <span class="token function">ip</span> from cip.cc using socks5 proxy
	 ssr log          <span class="token function">cat</span> the log of shadowsocks
	 ssr shell        <span class="token builtin class-name">cd</span> into ssr installation <span class="token function">dir</span>
	 ssr clean        clean ssr configuration backups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先输入 <code>ssr install</code> 安装 ShadowSocksR，安装完之后输入 <code>ssr config</code> 进行配置，配置文件如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>	
    <span class="token comment">// 服务器的ip或者网址</span>
    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;server_ipv6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;::&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 服务器端口号</span>
    <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span> <span class="token punctuation">,</span>
    <span class="token comment">// 本地ip</span>
    <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 本地端口号</span>
    <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>

    <span class="token comment">// 服务器密码</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 算法</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 协议</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auth_aes128_md5&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 协议参数</span>
    <span class="token property">&quot;protocol_param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 混淆</span>
    <span class="token property">&quot;obfs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 混淆参数</span>
    <span class="token property">&quot;obfs_param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;speed_limit_per_con&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;speed_limit_per_user&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    <span class="token property">&quot;additional_ports&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;additional_ports_only&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token property">&quot;udp_timeout&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dns_ipv6&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;connect_verbose_info&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有可能需要改的地方用注释标记出来，具体的还是根据你自己的代理去设置。</p><h2 id="_2-proxychains4" tabindex="-1"><a class="header-anchor" href="#_2-proxychains4" aria-hidden="true">#</a> 2 proxychains4</h2><h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装" aria-hidden="true">#</a> 2.1 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> proxychains4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-配置" aria-hidden="true">#</a> 2.2 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/proxychains.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 ssr 是 socks5 协议默认 1080 端口，所以只需要改配置文件的最后一行，具体还是要看你设置的端口号。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[ProxyList]
# add proxy here ...
# meanwile
# defaults set to &quot;tor&quot;
socks5  127.0.0.1 1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-测试" tabindex="-1"><a class="header-anchor" href="#_2-3-测试" aria-hidden="true">#</a> 2.3 测试</h3><p>先测试不用代理的 IP</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> www.httpbin.org/ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再测试用代理的 IP</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proxychains4 <span class="token function">curl</span> www.httpbin.org/ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果两次的 IP 不同，说明成功了，以后需要挂代理的命令前加上 <code>proxychains4</code> 或 <code>proxychains</code> 就可以。</p><p>##3 gdown</p><p>可以使用 gdown 让服务器直接从 Google Drive 下载文件。</p><h3 id="_3-1-安装" tabindex="-1"><a class="header-anchor" href="#_3-1-安装" aria-hidden="true">#</a> 3.1 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> clone https://github.com/wkentaro/gdown 
 <span class="token builtin class-name">cd</span> gdown
 pip <span class="token function">install</span> gdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-获取-google-drive-文件链接-id" tabindex="-1"><a class="header-anchor" href="#_3-2-获取-google-drive-文件链接-id" aria-hidden="true">#</a> 3.2 获取 Google Drive 文件链接/ID</h3><figure><img src="http://img.rocyan.cn/blog/2024/04/66135347c9f8e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过以上步骤可以获取文件的 ID，<code>https://drive.google.com/file/d/12DmrxXNtl0U9hnN1bzue4XX7nw1fSMZ5/view?usp=share_link</code> 其中 <code>12DmrxXNtl0U9hnN1bzue4XX7nw1fSMZ5</code> 就是文件的 ID，最后的链接是 <code>https://drive.google.com/uc?id=&lt;文件ID&gt;</code>。并且文件的访问权限必须是”互联网上知道链接的任何人都可以查看“。</p><figure><img src="http://img.rocyan.cn/blog/2024/04/6613534f8c999.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果直接用共享的文件可能会遇到超出下载配额的问题，所以建议保存到自己的云盘后再下载。网页版的谷歌云盘经常没有反应，所以建议下载桌面版云端云盘后再操作。</p><h3 id="_3-3-使用-gdown-下载" tabindex="-1"><a class="header-anchor" href="#_3-3-使用-gdown-下载" aria-hidden="true">#</a> 3.3 使用 gdown 下载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用链接下载文件</span>
gdown https://drive.google.com/uc?id<span class="token operator">=</span><span class="token operator">&lt;</span>文件ID<span class="token operator">&gt;</span>
<span class="token comment"># 使用ID下载文件</span>
gdown 文件ID
<span class="token comment"># 下载文件夹</span>
gdown https://drive.google.com/drive/folders/15uNXeRBIhVvZJIhL4yTw4IsStMhUaaxl <span class="token parameter variable">-O</span> /tmp/folder <span class="token parameter variable">--folder</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),m={href:"https://github.com/wkentaro/gdown.git",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"-c",-1),k=s("h2",{id:"reference",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),n(" Reference")],-1),g={href:"https://www.jianshu.com/p/27dfbeab506c",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhuanlan.zhihu.com/p/612211755",target:"_blank",rel:"noopener noreferrer"},_={href:"https://huaweidevelopers.csdn.net/65b380fa28cf1d21b51ffbb8.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYyMDQyNiwiZXhwIjoxNzEwMjUzMDQxLCJpYXQiOjE3MDk2NDgyNDEsInVzZXJuYW1lIjoid2VpeGluXzQyNTYzMjE2In0.w6aaZ-r_VbOiV0lG7TbjqAkOEGPfXs4vBaXAdLA3IJY",target:"_blank",rel:"noopener noreferrer"},q={href:"https://zhuanlan.zhihu.com/p/678312414",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/the0demiurge/CharlesScripts.git",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/wkentaro/gdown.git",target:"_blank",rel:"noopener noreferrer"};function w(I,S){const a=i("ExternalLinkIcon");return r(),l("div",null,[c,s("p",null,[s("a",d,[n("CharlesScripts"),e(a)]),n(" 库里有许多脚本，我们需要拿到这个库里的 ssr 脚本，可以一键安装、配置、使用 ShadowSocksR，当然你也可以选择自己直接安装。")]),s("p",null,[n("你可以直接 clone 整个库，然后找到里面的脚本，具体目录在 "),u,n(" 。我这里选择直接打开"),s("a",v,[n("脚本文件"),e(a)]),n("，把整个脚本复制后，在服务器创建一个 ssr 脚本，然后把复制的内容粘贴进去。")]),h,s("p",null,[n("命令的具体参数可以看 "),s("a",m,[n("gdown"),e(a)]),n(" 的 github，还有一个常用的是 "),b,n("，如果下载到一半中断后可以加上这个参数继续下载。")]),k,s("p",null,[s("a",g,[n("Linux下ssr的安装使用"),e(a)])]),s("p",null,[s("a",f,[n("CentOS/Debian/Ubuntu ShadowsocksR 单/多端口 一键管理脚本"),e(a)])]),s("p",null,[s("a",_,[n("proxychains4配置使用"),e(a)])]),s("p",null,[s("a",q,[n("Linux使用gdown从Google Drive下载文件和文件夹（命令行/代码下载）"),e(a)])]),s("p",null,[s("a",x,[n("CharlesScripts"),e(a)])]),s("p",null,[s("a",y,[n("gdown"),e(a)])])])}const N=t(p,[["render",w],["__file","server-proxy.html.vue"]]);export{N as default};

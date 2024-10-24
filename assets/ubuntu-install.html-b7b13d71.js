const e=JSON.parse(`{"key":"v-160da74d","path":"/posts/others/ubuntu-install.html","title":"Ubuntu-20.04 安装教程","lang":"zh-CN","frontmatter":{"date":"2024-04-15T00:00:00.000Z","category":"其他","tag":["ubuntu"],"description":"Ubuntu-20.04 安装教程 因为最近实验室发了主机，所以把安装 ubuntu-20.04 的过程记录一下，顺便推荐一些好用的软件。 1 安装系统 直接参考这篇文章，主要分为以下 3 步。 1.1 制作 ubuntu 启动盘 制作启动盘也可以考虑用 Rufus。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/others/ubuntu-install.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"Ubuntu-20.04 安装教程"}],["meta",{"property":"og:description","content":"Ubuntu-20.04 安装教程 因为最近实验室发了主机，所以把安装 ubuntu-20.04 的过程记录一下，顺便推荐一些好用的软件。 1 安装系统 直接参考这篇文章，主要分为以下 3 步。 1.1 制作 ubuntu 启动盘 制作启动盘也可以考虑用 Rufus。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-26T04:33:55.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"ubuntu"}],["meta",{"property":"article:published_time","content":"2024-04-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-26T04:33:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu-20.04 安装教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-26T04:33:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 安装系统","slug":"_1-安装系统","link":"#_1-安装系统","children":[{"level":3,"title":"1.1 制作 ubuntu 启动盘","slug":"_1-1-制作-ubuntu-启动盘","link":"#_1-1-制作-ubuntu-启动盘","children":[]},{"level":3,"title":"1.2 windows 分区设置","slug":"_1-2-windows-分区设置","link":"#_1-2-windows-分区设置","children":[]},{"level":3,"title":"1.3 安装 ubuntu","slug":"_1-3-安装-ubuntu","link":"#_1-3-安装-ubuntu","children":[]}]},{"level":2,"title":"2 基本配置","slug":"_2-基本配置","link":"#_2-基本配置","children":[{"level":3,"title":"2.1 网络认证","slug":"_2-1-网络认证","link":"#_2-1-网络认证","children":[]},{"level":3,"title":"2.2 SSH","slug":"_2-2-ssh","link":"#_2-2-ssh","children":[]},{"level":3,"title":"2.3 免密 SSH 连接","slug":"_2-3-免密-ssh-连接","link":"#_2-3-免密-ssh-连接","children":[]},{"level":3,"title":"2.4 修改主机名","slug":"_2-4-修改主机名","link":"#_2-4-修改主机名","children":[]},{"level":3,"title":"2.5 远程访问桌面","slug":"_2-5-远程访问桌面","link":"#_2-5-远程访问桌面","children":[]},{"level":3,"title":"3 推荐配置","slug":"_3-推荐配置","link":"#_3-推荐配置","children":[]},{"level":3,"title":"3.1 ZSH","slug":"_3-1-zsh","link":"#_3-1-zsh","children":[]},{"level":3,"title":"3.2 Conda","slug":"_3-2-conda","link":"#_3-2-conda","children":[]},{"level":3,"title":"3.3 Homebrew","slug":"_3-3-homebrew","link":"#_3-3-homebrew","children":[]},{"level":3,"title":"3.4 Clash","slug":"_3-4-clash","link":"#_3-4-clash","children":[]},{"level":3,"title":"3.5 proxychains","slug":"_3-5-proxychains","link":"#_3-5-proxychains","children":[]},{"level":3,"title":"3.6 SMB","slug":"_3-6-smb","link":"#_3-6-smb","children":[]},{"level":3,"title":"3.7 Barrier","slug":"_3-7-barrier","link":"#_3-7-barrier","children":[]},{"level":3,"title":"3.8 Gateway","slug":"_3-8-gateway","link":"#_3-8-gateway","children":[]},{"level":3,"title":"3.9 开机自动启动","slug":"_3-9-开机自动启动","link":"#_3-9-开机自动启动","children":[]}]},{"level":2,"title":"Reference：","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1713172518000,"updatedTime":1719376435000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2},{"name":"rocyan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":4.29,"words":1287},"filePathRelative":"posts/others/ubuntu-install.md","localizedDate":"2024年4月15日","excerpt":"<h1> Ubuntu-20.04 安装教程</h1>\\n<p>因为最近实验室发了主机，所以把安装 ubuntu-20.04 的过程记录一下，顺便推荐一些好用的软件。</p>\\n<h2> 1 安装系统</h2>\\n<p>直接参考<a href=\\"https://blog.csdn.net/wyr1849089774/article/details/133387874\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">这篇文章</a>，主要分为以下 3 步。</p>\\n<h3> 1.1 制作 ubuntu 启动盘</h3>\\n<p>制作启动盘也可以考虑用 <a href=\\"http://rufus.ie/downloads/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Rufus</a>。</p>","autoDesc":true}`);export{e as data};
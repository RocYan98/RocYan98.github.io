const e=JSON.parse(`{"key":"v-f614590a","path":"/posts/linux/linux-software-install.html","title":"Linux 软件包安装","lang":"zh-CN","frontmatter":{"date":"2023-08-03T00:00:00.000Z","tag":"Linux","category":"Linux","order":4,"description":"Linux 软件包安装 一、 软件包分类 源码包 二进制包（RPM 包/DPKG 包） 1.1 源码包 优点： 开源 自由选择所需的功能 通过编译安装，更适合自己的系统，比二进制包性能提高约 5% 卸载方便，干净 缺点： 安装过程步骤较多 编译过程时间较长，安装比二进制安装时间长","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/linux/linux-software-install.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"Linux 软件包安装"}],["meta",{"property":"og:description","content":"Linux 软件包安装 一、 软件包分类 源码包 二进制包（RPM 包/DPKG 包） 1.1 源码包 优点： 开源 自由选择所需的功能 通过编译安装，更适合自己的系统，比二进制包性能提高约 5% 卸载方便，干净 缺点： 安装过程步骤较多 编译过程时间较长，安装比二进制安装时间长"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T08:25:48.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T08:25:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 软件包安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T08:25:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"一、 软件包分类","slug":"一、-软件包分类","link":"#一、-软件包分类","children":[{"level":3,"title":"1.1 源码包","slug":"_1-1-源码包","link":"#_1-1-源码包","children":[]},{"level":3,"title":"1.2 二进制包","slug":"_1-2-二进制包","link":"#_1-2-二进制包","children":[]}]},{"level":2,"title":"二、RPM 包安装","slug":"二、rpm-包安装","link":"#二、rpm-包安装","children":[{"level":3,"title":"2.1 RPM 包命名规则","slug":"_2-1-rpm-包命名规则","link":"#_2-1-rpm-包命名规则","children":[]},{"level":3,"title":"2.2 rpm包手工命令安装","slug":"_2-2-rpm包手工命令安装","link":"#_2-2-rpm包手工命令安装","children":[]},{"level":3,"title":"2.3 rpm 包在线安装（yum 安装）","slug":"_2-3-rpm-包在线安装-yum-安装","link":"#_2-3-rpm-包在线安装-yum-安装","children":[]}]},{"level":2,"title":"三、源码包安装","slug":"三、源码包安装","link":"#三、源码包安装","children":[{"level":3,"title":"3.1 注意事项","slug":"_3-1-注意事项","link":"#_3-1-注意事项","children":[]},{"level":3,"title":"3.2 安装过程","slug":"_3-2-安装过程","link":"#_3-2-安装过程","children":[]},{"level":3,"title":"3.3 删除","slug":"_3-3-删除","link":"#_3-3-删除","children":[]},{"level":3,"title":"3.4 打入补丁","slug":"_3-4-打入补丁","link":"#_3-4-打入补丁","children":[]}]},{"level":2,"title":"四、脚本安装程序","slug":"四、脚本安装程序","link":"#四、脚本安装程序","children":[]}],"git":{"createdTime":1691819321000,"updatedTime":1692087948000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":5}]},"readingTime":{"minutes":19.22,"words":5766},"filePathRelative":"posts/linux/linux-software-install.md","localizedDate":"2023年8月3日","excerpt":"<h1> Linux 软件包安装</h1>\\n<h2> 一、 软件包分类</h2>\\n<ul>\\n<li>源码包</li>\\n<li>二进制包（RPM 包/DPKG 包）</li>\\n</ul>\\n<h3> 1.1 源码包</h3>\\n<ul>\\n<li>优点：\\n<ul>\\n<li>开源</li>\\n<li>自由选择所需的功能</li>\\n<li>通过编译安装，更适合自己的系统，比二进制包性能提高约 5%</li>\\n<li>卸载方便，干净</li>\\n</ul>\\n</li>\\n<li>缺点：\\n<ul>\\n<li>安装过程步骤较多</li>\\n<li>编译过程时间较长，安装比二进制安装时间长</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};

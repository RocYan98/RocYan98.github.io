const e=JSON.parse(`{"key":"v-abe4478a","path":"/posts/linux/linux-user-manage.html","title":"Linux 用户管理","lang":"zh-CN","frontmatter":{"date":"2023-08-03T00:00:00.000Z","tag":"Linux","category":"Linux","order":6,"description":"Linux 用户管理 一、用户相关文件 1.1 用户信息文件 /etc/passwd root:x:0:0:root:/root:/bin/bash 第一列：用户名 第二列：密码位（x表示有密码，具体密码在/etc/shadow） 第三列：用户ID 0超级用户UID。如果用户UID为0，代表这个账号是管理员账号。那Linux中如何把普通用户升级成为管理员呢？就是把其他用户的UID修改为0就可以了，不建议建立多个管理员账号。 1-499系统用户（伪用户）UID。这些UID账号是系统保留给系统用户的UID，也就是说UID是1-499范围内的用户是不能登录系统的，而是用来运行系统或服务的。其中1-99是系统保留的账号，系统自动创建。100-499 是预留给用户创建系统账号的。 500-60000普通用户UID。建立的普通用户UID从500开始，最大到60000。这些用户足够使用了，但是如果不够也不用害怕，2.6.x内核以后的Linux系统用户UID已经可以支持这么多了。 第四列：组ID GID 添加用户时，如果不指定用户所属的初始组，那么会建立和用户名相同的组 第五列：用户说明第六列：用户家目录 ~ 第七列：登录shell 用户的是/bin/bash 伪用户的是/sbin/nologin 表示无法登陆","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/linux/linux-user-manage.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"Linux 用户管理"}],["meta",{"property":"og:description","content":"Linux 用户管理 一、用户相关文件 1.1 用户信息文件 /etc/passwd root:x:0:0:root:/root:/bin/bash 第一列：用户名 第二列：密码位（x表示有密码，具体密码在/etc/shadow） 第三列：用户ID 0超级用户UID。如果用户UID为0，代表这个账号是管理员账号。那Linux中如何把普通用户升级成为管理员呢？就是把其他用户的UID修改为0就可以了，不建议建立多个管理员账号。 1-499系统用户（伪用户）UID。这些UID账号是系统保留给系统用户的UID，也就是说UID是1-499范围内的用户是不能登录系统的，而是用来运行系统或服务的。其中1-99是系统保留的账号，系统自动创建。100-499 是预留给用户创建系统账号的。 500-60000普通用户UID。建立的普通用户UID从500开始，最大到60000。这些用户足够使用了，但是如果不够也不用害怕，2.6.x内核以后的Linux系统用户UID已经可以支持这么多了。 第四列：组ID GID 添加用户时，如果不指定用户所属的初始组，那么会建立和用户名相同的组 第五列：用户说明第六列：用户家目录 ~ 第七列：登录shell 用户的是/bin/bash 伪用户的是/sbin/nologin 表示无法登陆"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T08:25:48.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T08:25:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 用户管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T08:25:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"一、用户相关文件","slug":"一、用户相关文件","link":"#一、用户相关文件","children":[{"level":3,"title":"1.1 用户信息文件 /etc/passwd","slug":"_1-1-用户信息文件-etc-passwd","link":"#_1-1-用户信息文件-etc-passwd","children":[]},{"level":3,"title":"1.2 影子文件 /etc/shadow","slug":"_1-2-影子文件-etc-shadow","link":"#_1-2-影子文件-etc-shadow","children":[]},{"level":3,"title":"1.3 组信息文件 /etc/group","slug":"_1-3-组信息文件-etc-group","link":"#_1-3-组信息文件-etc-group","children":[]},{"level":3,"title":"1.4 组密码文件 /etc/gshadow","slug":"_1-4-组密码文件-etc-gshadow","link":"#_1-4-组密码文件-etc-gshadow","children":[]},{"level":3,"title":"1.5 用户的家目录","slug":"_1-5-用户的家目录","link":"#_1-5-用户的家目录","children":[]},{"level":3,"title":"1.6 用户邮箱目录","slug":"_1-6-用户邮箱目录","link":"#_1-6-用户邮箱目录","children":[]},{"level":3,"title":"1.7 用户模版目录 /etc/skel","slug":"_1-7-用户模版目录-etc-skel","link":"#_1-7-用户模版目录-etc-skel","children":[]}]},{"level":2,"title":"二、用户管理命令","slug":"二、用户管理命令","link":"#二、用户管理命令","children":[{"level":3,"title":"2.1 添加用户","slug":"_2-1-添加用户","link":"#_2-1-添加用户","children":[]},{"level":3,"title":"2.2 设定密码","slug":"_2-2-设定密码","link":"#_2-2-设定密码","children":[]},{"level":3,"title":"2.3 用户信息修改","slug":"_2-3-用户信息修改","link":"#_2-3-用户信息修改","children":[]},{"level":3,"title":"2.4 删除用户","slug":"_2-4-删除用户","link":"#_2-4-删除用户","children":[]},{"level":3,"title":"2.5 切换用户身份","slug":"_2-5-切换用户身份","link":"#_2-5-切换用户身份","children":[]}]},{"level":2,"title":"三、组管理命令","slug":"三、组管理命令","link":"#三、组管理命令","children":[{"level":3,"title":"3.1 添加用户组","slug":"_3-1-添加用户组","link":"#_3-1-添加用户组","children":[]},{"level":3,"title":"3.2 删除用户组","slug":"_3-2-删除用户组","link":"#_3-2-删除用户组","children":[]},{"level":3,"title":"3.3 从组中添加或删除用户","slug":"_3-3-从组中添加或删除用户","link":"#_3-3-从组中添加或删除用户","children":[]},{"level":3,"title":"3.4 改变有效组","slug":"_3-4-改变有效组","link":"#_3-4-改变有效组","children":[]}]}],"git":{"createdTime":1691819321000,"updatedTime":1692087948000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":5}]},"readingTime":{"minutes":10.29,"words":3086},"filePathRelative":"posts/linux/linux-user-manage.md","localizedDate":"2023年8月3日","excerpt":"<h1> Linux 用户管理</h1>\\n<h2> 一、用户相关文件</h2>\\n<h3> 1.1 用户信息文件 /etc/passwd</h3>\\n<p><code>root:x:0:0:root:/root:/bin/bash</code></p>\\n<ul>\\n<li>第一列：用户名</li>\\n<li>第二列：密码位（x表示有密码，具体密码在/etc/shadow）</li>\\n<li>第三列：用户ID\\n<ul>\\n<li>0超级用户UID。如果用户UID为0，代表这个账号是管理员账号。那Linux中如何把普通用户升级成为管理员呢？就是把其他用户的UID修改为0就可以了，不建议建立多个管理员账号。</li>\\n<li>1-499系统用户（伪用户）UID。这些UID账号是系统保留给系统用户的UID，也就是说UID是1-499范围内的用户是不能登录系统的，而是用来运行系统或服务的。其中1-99是系统保留的账号，系统自动创建。100-499 是预留给用户创建系统账号的。</li>\\n<li>500-60000普通用户UID。建立的普通用户UID从500开始，最大到60000。这些用户足够使用了，但是如果不够也不用害怕，2.6.x内核以后的Linux系统用户UID已经可以支持这么多了。</li>\\n</ul>\\n</li>\\n<li>第四列：组ID\\n<ul>\\n<li>GID 添加用户时，如果不指定用户所属的初始组，那么会建立和用户名相同的组</li>\\n</ul>\\n</li>\\n<li>第五列：用户说明第六列：用户家目录  ~</li>\\n<li>第七列：登录shell\\n<ul>\\n<li>用户的是/bin/bash</li>\\n<li>伪用户的是/sbin/nologin 表示无法登陆</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};

const t=JSON.parse(`{"key":"v-97851074","path":"/posts/CG/GAMES101/rasterization2.html","title":"6.光栅化（抗锯齿与深度测试）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":"GAMES101","cover":"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png","description":"6.光栅化（抗锯齿与深度测试） 1 采样产生的问题 Sampling Artifacts in CG：（这里的Artifacts是指一切看上去不太对的东西，可以翻译为瑕疵） 锯齿（阶梯形状） 摩尔纹 车轮效应 ... 产生Artifacts的原因：信号变化的太快了（频率太高），但是采样速率太慢 2 走样 对两个不同的函数进行采样，采样的结果完全相同，这就被称为走样（Aliases）","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/CG/GAMES101/rasterization2.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"6.光栅化（抗锯齿与深度测试）"}],["meta",{"property":"og:description","content":"6.光栅化（抗锯齿与深度测试） 1 采样产生的问题 Sampling Artifacts in CG：（这里的Artifacts是指一切看上去不太对的东西，可以翻译为瑕疵） 锯齿（阶梯形状） 摩尔纹 车轮效应 ... 产生Artifacts的原因：信号变化的太快了（频率太高），但是采样速率太慢 2 走样 对两个不同的函数进行采样，采样的结果完全相同，这就被称为走样（Aliases）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-12T09:00:16.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"6.光栅化（抗锯齿与深度测试）"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-12T09:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.光栅化（抗锯齿与深度测试）\\",\\"image\\":[\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-12T09:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 采样产生的问题","slug":"_1-采样产生的问题","link":"#_1-采样产生的问题","children":[]},{"level":2,"title":"2 走样","slug":"_2-走样","link":"#_2-走样","children":[]},{"level":2,"title":"3 滤波","slug":"_3-滤波","link":"#_3-滤波","children":[{"level":3,"title":"3.1 高通滤波","slug":"_3-1-高通滤波","link":"#_3-1-高通滤波","children":[]},{"level":3,"title":"3.2 低通滤波","slug":"_3-2-低通滤波","link":"#_3-2-低通滤波","children":[]}]},{"level":2,"title":"4 卷积","slug":"_4-卷积","link":"#_4-卷积","children":[]},{"level":2,"title":"5 走样的原因","slug":"_5-走样的原因","link":"#_5-走样的原因","children":[]},{"level":2,"title":"6 反走样","slug":"_6-反走样","link":"#_6-反走样","children":[{"level":3,"title":"6.1 多重采样抗锯齿MSAA（Multisample Anti-Aliasing）","slug":"_6-1-多重采样抗锯齿msaa-multisample-anti-aliasing","link":"#_6-1-多重采样抗锯齿msaa-multisample-anti-aliasing","children":[]}]},{"level":2,"title":"7 深度测试","slug":"_7-深度测试","link":"#_7-深度测试","children":[]}],"git":{"createdTime":1691819321000,"updatedTime":1691830816000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":4.17,"words":1252},"filePathRelative":"posts/CG/GAMES101/rasterization2.md","localizedDate":"2023年8月4日","excerpt":"<h1> 6.光栅化（抗锯齿与深度测试）</h1>\\n<h2> 1 采样产生的问题</h2>\\n<p>Sampling Artifacts in CG：（这里的Artifacts是指一切看上去不太对的东西，可以翻译为瑕疵）</p>\\n<ul>\\n<li>锯齿（阶梯形状）</li>\\n<li>摩尔纹</li>\\n<li>车轮效应</li>\\n<li>...</li>\\n</ul>\\n<p>产生Artifacts的原因：信号变化的太快了（频率太高），但是采样速率太慢</p>\\n<h2> 2 走样</h2>\\n<p>对两个不同的函数进行采样，采样的结果完全相同，这就被称为走样（Aliases）</p>\\n<figure><img src=\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/sszjhd.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}`);export{t as data};

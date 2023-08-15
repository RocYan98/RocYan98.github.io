const n=JSON.parse(`{"key":"v-16814be9","path":"/posts/pytorch/broadcast.html","title":"广播机制","lang":"zh-CN","frontmatter":{"date":"2023-08-03T00:00:00.000Z","tag":"PyTorch","category":"PyTorch","order":2,"description":"广播机制 当两个shape不同的矩阵进行运算，当满足广播机制的条件时，就会把小的矩阵扩张成相同shape的矩阵，然后对两个矩阵相同的位置进行运算 广播机制的条件： 两个张量都至少有一个维度，且不是0维 按从右往左看每一个张量的维度，两个维度需要满足以下任一条件： 这两个维度的大小相等 某个维度，一个张量有，一个张量没有 某个维度，两个张量都有，但有一个是1 x = torch.empty(5, 3, 4, 1) y = torch.empty( 3, 1, 1) # 对于x和y从右往左看 # 第4维满足a # 第3维满足c # 第2维满足a # 第1维满足b","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/pytorch/broadcast.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"广播机制"}],["meta",{"property":"og:description","content":"广播机制 当两个shape不同的矩阵进行运算，当满足广播机制的条件时，就会把小的矩阵扩张成相同shape的矩阵，然后对两个矩阵相同的位置进行运算 广播机制的条件： 两个张量都至少有一个维度，且不是0维 按从右往左看每一个张量的维度，两个维度需要满足以下任一条件： 这两个维度的大小相等 某个维度，一个张量有，一个张量没有 某个维度，两个张量都有，但有一个是1 x = torch.empty(5, 3, 4, 1) y = torch.empty( 3, 1, 1) # 对于x和y从右往左看 # 第4维满足a # 第3维满足c # 第2维满足a # 第1维满足b"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T11:58:38.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"PyTorch"}],["meta",{"property":"article:published_time","content":"2023-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T11:58:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"广播机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T11:58:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"广播机制的条件：","slug":"广播机制的条件","link":"#广播机制的条件","children":[]},{"level":2,"title":"广播的过程","slug":"广播的过程","link":"#广播的过程","children":[]},{"level":2,"title":"Reference：","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1691819321000,"updatedTime":1692100718000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":6}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"posts/pytorch/broadcast.md","localizedDate":"2023年8月3日","excerpt":"<h1> 广播机制</h1>\\n<p>当两个shape不同的矩阵进行运算，当满足广播机制的条件时，就会把小的矩阵扩张成相同shape的矩阵，然后对两个矩阵相同的位置进行运算</p>\\n<h2> 广播机制的条件：</h2>\\n<ul>\\n<li>两个张量都至少有一个维度，且不是0维</li>\\n<li>按从右往左看每一个张量的维度，两个维度需要满足以下任一条件：\\n<ol>\\n<li>这两个维度的大小相等</li>\\n<li>某个维度，一个张量有，一个张量没有</li>\\n<li>某个维度，两个张量都有，但有一个是1</li>\\n</ol>\\n</li>\\n</ul>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>x <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>empty<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\ny <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>empty<span class=\\"token punctuation\\">(</span>   <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 对于x和y从右往左看</span>\\n<span class=\\"token comment\\"># 第4维满足a</span>\\n<span class=\\"token comment\\"># 第3维满足c</span>\\n<span class=\\"token comment\\"># 第2维满足a</span>\\n<span class=\\"token comment\\"># 第1维满足b</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};

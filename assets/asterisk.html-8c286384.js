const n=JSON.parse(`{"key":"v-5d042b29","path":"/posts/python/asterisk.html","title":"参数中的星号","lang":"zh-CN","frontmatter":{"date":"2023-08-10T00:00:00.000Z","tag":"Python","category":"Python","description":"参数中的星号 1 参数中的*args和**kwargs 在了解*args和**kwargs的作用之前，首先要理解*和**在Python中的使用。*和**主要有三方面的用途： 对可迭代对象进行拆分 可变变量的赋值 函数的可选参数标志 1.1 对可迭代对象进行拆分 print(*(1, 2, 3)) # 1 2 3 print(*{'a': 1, 'b': 2, 'c': 3}) # a b c 拆解字典时只拆解key print({**{'a': 1, 'b': 2, 'c': 3}})# {'a': 1, 'b': 2, 'c': 3}对key和value都进行了拆解","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/python/asterisk.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"参数中的星号"}],["meta",{"property":"og:description","content":"参数中的星号 1 参数中的*args和**kwargs 在了解*args和**kwargs的作用之前，首先要理解*和**在Python中的使用。*和**主要有三方面的用途： 对可迭代对象进行拆分 可变变量的赋值 函数的可选参数标志 1.1 对可迭代对象进行拆分 print(*(1, 2, 3)) # 1 2 3 print(*{'a': 1, 'b': 2, 'c': 3}) # a b c 拆解字典时只拆解key print({**{'a': 1, 'b': 2, 'c': 3}})# {'a': 1, 'b': 2, 'c': 3}对key和value都进行了拆解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T08:25:48.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T08:25:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"参数中的星号\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T08:25:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 参数中的*args和**kwargs","slug":"_1-参数中的-args和-kwargs","link":"#_1-参数中的-args和-kwargs","children":[{"level":3,"title":"1.1 对可迭代对象进行拆分","slug":"_1-1-对可迭代对象进行拆分","link":"#_1-1-对可迭代对象进行拆分","children":[]},{"level":3,"title":"1.2 可变变量的赋值","slug":"_1-2-可变变量的赋值","link":"#_1-2-可变变量的赋值","children":[]},{"level":3,"title":"1.3 函数的可选参数标志","slug":"_1-3-函数的可选参数标志","link":"#_1-3-函数的可选参数标志","children":[]}]},{"level":2,"title":"2 参数中的/和*","slug":"_2-参数中的-和","link":"#_2-参数中的-和","children":[]},{"level":2,"title":"Reference：","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1691819321000,"updatedTime":1692087948000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":5}]},"readingTime":{"minutes":3.5,"words":1051},"filePathRelative":"posts/python/asterisk.md","localizedDate":"2023年8月10日","excerpt":"<h1> 参数中的星号</h1>\\n<h2> 1 参数中的*args和**kwargs</h2>\\n<p>在了解*args和**kwargs的作用之前，首先要理解*和**在Python中的使用。*和**主要有三方面的用途：</p>\\n<ol>\\n<li>对可迭代对象进行拆分</li>\\n<li>可变变量的赋值</li>\\n<li>函数的可选参数标志</li>\\n</ol>\\n<h3> 1.1 对可迭代对象进行拆分</h3>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># 1 2 3</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'b'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'c'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># a b c 拆解字典时只拆解key</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">**</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'b'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'c'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token comment\\"># {'a': 1, 'b': 2, 'c': 3}对key和value都进行了拆解</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};

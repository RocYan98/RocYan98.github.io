const t=JSON.parse(`{"key":"v-4dcab934","path":"/posts/notes/GAMES101/rasterization1.html","title":"光栅化（三角形的离散化）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":["学习笔记"],"order":5,"description":"光栅化（三角形的离散化） 将 [−1,1]3[-1, 1]^3[−1,1]3 的标准立方体中的内容经过一系列变换最终转换为像素从而呈现在屏幕上的过程就称为光栅化。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/notes/GAMES101/rasterization1.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"光栅化（三角形的离散化）"}],["meta",{"property":"og:description","content":"光栅化（三角形的离散化） 将 [−1,1]3[-1, 1]^3[−1,1]3 的标准立方体中的内容经过一系列变换最终转换为像素从而呈现在屏幕上的过程就称为光栅化。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-08T07:20:57.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-08T07:20:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"光栅化（三角形的离散化）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-08T07:20:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 屏幕空间","slug":"_1-屏幕空间","link":"#_1-屏幕空间","children":[]},{"level":2,"title":"2 视口变换","slug":"_2-视口变换","link":"#_2-视口变换","children":[]},{"level":2,"title":"3 三角形","slug":"_3-三角形","link":"#_3-三角形","children":[]},{"level":2,"title":"4 判断一个像素的中心点与三角形的位置关系","slug":"_4-判断一个像素的中心点与三角形的位置关系","link":"#_4-判断一个像素的中心点与三角形的位置关系","children":[]}],"git":{"createdTime":1731476671000,"updatedTime":1736320857000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"posts/notes/GAMES101/rasterization1.md","localizedDate":"2023年8月4日","excerpt":"<h1> 光栅化（三角形的离散化）</h1>\\n<p>将 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">[</mo><mo>−</mo><mn>1</mn><mo separator=\\"true\\">,</mo><mn>1</mn><msup><mo stretchy=\\"false\\">]</mo><mn>3</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">[-1, 1]^3</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">[</span><span class=\\"mord\\">−</span><span class=\\"mord\\">1</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mclose\\"><span class=\\"mclose\\">]</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">3</span></span></span></span></span></span></span></span></span></span></span> 的标准立方体中的内容经过一系列变换最终转换为像素从而呈现在屏幕上的过程就称为光栅化。</p>","autoDesc":true}`);export{t as data};

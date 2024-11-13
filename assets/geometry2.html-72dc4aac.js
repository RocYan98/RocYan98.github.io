const s=JSON.parse(`{"key":"v-707114d4","path":"/posts/notes/GAMES101/geometry2.html","title":"几何（曲线与曲面）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":["计算机图形学"],"order":11,"description":"几何（曲线与曲面） 1 贝塞尔曲线 p0,p1,p2,p3p_0,p_1,p_2,p_3p0​,p1​,p2​,p3​ 为控制点，蓝色曲线就是贝塞尔曲线，曲线会与初始与终止端点相切，并且经过起点与终点","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/notes/GAMES101/geometry2.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"几何（曲线与曲面）"}],["meta",{"property":"og:description","content":"几何（曲线与曲面） 1 贝塞尔曲线 p0,p1,p2,p3p_0,p_1,p_2,p_3p0​,p1​,p2​,p3​ 为控制点，蓝色曲线就是贝塞尔曲线，曲线会与初始与终止端点相切，并且经过起点与终点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-13T05:44:31.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T05:44:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"几何（曲线与曲面）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-13T05:44:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 贝塞尔曲线","slug":"_1-贝塞尔曲线","link":"#_1-贝塞尔曲线","children":[{"level":3,"title":"1.1 de Casteljau Algorithm","slug":"_1-1-de-casteljau-algorithm","link":"#_1-1-de-casteljau-algorithm","children":[]},{"level":3,"title":"1.2 代数式表达","slug":"_1-2-代数式表达","link":"#_1-2-代数式表达","children":[]},{"level":3,"title":"1.3 贝塞尔曲线的性质","slug":"_1-3-贝塞尔曲线的性质","link":"#_1-3-贝塞尔曲线的性质","children":[]},{"level":3,"title":"1.4 分段贝塞尔曲线","slug":"_1-4-分段贝塞尔曲线","link":"#_1-4-分段贝塞尔曲线","children":[]}]},{"level":2,"title":"2 贝塞尔曲面","slug":"_2-贝塞尔曲面","link":"#_2-贝塞尔曲面","children":[]}],"git":{"createdTime":1731476671000,"updatedTime":1731476671000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":2.36,"words":708},"filePathRelative":"posts/notes/GAMES101/geometry2.md","localizedDate":"2023年8月4日","excerpt":"<h1> 几何（曲线与曲面）</h1>\\n<h2> 1 贝塞尔曲线</h2>\\n<p><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>p</mi><mn>0</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>p</mi><mn>1</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>p</mi><mn>2</mn></msub><mo separator=\\"true\\">,</mo><msub><mi>p</mi><mn>3</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">p_0,p_1,p_2,p_3</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">p</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">p</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">p</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">p</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">3</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> 为<strong>控制点</strong>，蓝色曲线就是贝塞尔曲线，曲线会与初始与终止端点相切，并且经过起点与终点</p>","autoDesc":true}`);export{s as data};

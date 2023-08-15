const t=JSON.parse(`{"key":"v-c03bf9fe","path":"/posts/CG/GAMES101/geometry2.html","title":"几何（曲线与曲面）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":["计算机图形学","GAMES101"],"order":11,"description":"几何（曲线与曲面） 1 贝塞尔曲线 为控制点，蓝色曲线就是贝塞尔曲线，曲线会与初始与终止端点相切，并且经过起点与终点 1.1 de Casteljau Algorithm de Casteljau算法描述了如何用多个点画出一条贝塞尔曲线，其核心是线性插值和递归。第一步选定一个参数 ，在线段上利用t值进行线性插值，即，得到之后在线段上重复做相同的线性插值得到，再在线段上递归进行相同操作得到，对所有的都重复上述过程后就能得到贝塞尔曲线，这是求二阶贝塞尔曲线的过程。","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/CG/GAMES101/geometry2.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"几何（曲线与曲面）"}],["meta",{"property":"og:description","content":"几何（曲线与曲面） 1 贝塞尔曲线 为控制点，蓝色曲线就是贝塞尔曲线，曲线会与初始与终止端点相切，并且经过起点与终点 1.1 de Casteljau Algorithm de Casteljau算法描述了如何用多个点画出一条贝塞尔曲线，其核心是线性插值和递归。第一步选定一个参数 ，在线段上利用t值进行线性插值，即，得到之后在线段上重复做相同的线性插值得到，再在线段上递归进行相同操作得到，对所有的都重复上述过程后就能得到贝塞尔曲线，这是求二阶贝塞尔曲线的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T08:25:48.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T08:25:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"几何（曲线与曲面）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T08:25:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 贝塞尔曲线","slug":"_1-贝塞尔曲线","link":"#_1-贝塞尔曲线","children":[{"level":3,"title":"1.1 de Casteljau Algorithm","slug":"_1-1-de-casteljau-algorithm","link":"#_1-1-de-casteljau-algorithm","children":[]},{"level":3,"title":"1.2 代数式表达","slug":"_1-2-代数式表达","link":"#_1-2-代数式表达","children":[]},{"level":3,"title":"1.3 贝塞尔曲线的性质","slug":"_1-3-贝塞尔曲线的性质","link":"#_1-3-贝塞尔曲线的性质","children":[]},{"level":3,"title":"1.4 分段贝塞尔曲线","slug":"_1-4-分段贝塞尔曲线","link":"#_1-4-分段贝塞尔曲线","children":[]}]},{"level":2,"title":"2 贝塞尔曲面","slug":"_2-贝塞尔曲面","link":"#_2-贝塞尔曲面","children":[]}],"git":{"createdTime":1691819321000,"updatedTime":1692087948000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":5}]},"readingTime":{"minutes":2.36,"words":709},"filePathRelative":"posts/CG/GAMES101/geometry2.md","localizedDate":"2023年8月4日","excerpt":"<h1> 几何（曲线与曲面）</h1>\\n<h2> 1 贝塞尔曲线</h2>\\n<p>为<strong>控制点</strong>，蓝色曲线就是贝塞尔曲线，曲线会与初始与终止端点相切，并且经过起点与终点</p>\\n<figure><img src=\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/bex2rz.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h3> 1.1 de Casteljau Algorithm</h3>\\n<p>de Casteljau算法描述了如何用多个点画出一条贝塞尔曲线，其核心是线性插值和递归。第一步选定一个参数 ，在线段上利用t值进行线性插值，即，得到之后在线段上重复做相同的线性插值得到，再在线段上递归进行相同操作得到，对所有的都重复上述过程后就能得到贝塞尔曲线，这是求二阶贝塞尔曲线的过程。</p>","autoDesc":true}`);export{t as data};

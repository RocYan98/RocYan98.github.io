const e=JSON.parse('{"key":"v-9c207b50","path":"/posts/CG/GAMES101/transformation2.html","title":"4.变换（模型、视图、投影）","lang":"zh-CN","frontmatter":{"title":"4.变换（模型、视图、投影）","date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101","线性代数"],"category":"GAMES101","cover":"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png","description":"1 观测（Viewing）变换 观测（Viewing）变换 视图（View）/相机（Camera）变换 投影（Projection）变换 正交（Orthographic）投影 透视（Perspective）投影 计算机图形学就是在做M（Model）V（View）P（Projection）变换，可以用现实中的拍照来类比： 找个好地方，安排好每个人的位置（模型变换，从局部空间到世界空间） 把相机放到一个好的角度（视图变换，从世界空间到观察空间） 按快门拍照（投影变换，从观察空间到裁剪空间）","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/CG/GAMES101/transformation2.html"}],["meta",{"property":"og:site_name","content":"Roc Yan"}],["meta",{"property":"og:title","content":"4.变换（模型、视图、投影）"}],["meta",{"property":"og:description","content":"1 观测（Viewing）变换 观测（Viewing）变换 视图（View）/相机（Camera）变换 投影（Projection）变换 正交（Orthographic）投影 透视（Perspective）投影 计算机图形学就是在做M（Model）V（View）P（Projection）变换，可以用现实中的拍照来类比： 找个好地方，安排好每个人的位置（模型变换，从局部空间到世界空间） 把相机放到一个好的角度（视图变换，从世界空间到观察空间） 按快门拍照（投影变换，从观察空间到裁剪空间）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-12T05:48:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"4.变换（模型、视图、投影）"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:tag","content":"线性代数"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-12T05:48:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.变换（模型、视图、投影）\\",\\"image\\":[\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-12T05:48:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 观测（Viewing）变换","slug":"_1-观测-viewing-变换","link":"#_1-观测-viewing-变换","children":[{"level":3,"title":"1.1 视图（View）/相机（Camera）变换","slug":"_1-1-视图-view-相机-camera-变换","link":"#_1-1-视图-view-相机-camera-变换","children":[]},{"level":3,"title":"1.2 投影（Projection）变换","slug":"_1-2-投影-projection-变换","link":"#_1-2-投影-projection-变换","children":[]}]}],"git":{"createdTime":1691819321000,"updatedTime":1691819321000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1094},"filePathRelative":"posts/CG/GAMES101/transformation2.md","localizedDate":"2023年8月4日","excerpt":"<h2> 1 观测（Viewing）变换</h2>\\n<ul>\\n<li>观测（Viewing）变换\\n<ul>\\n<li>视图（View）/相机（Camera）变换</li>\\n<li>投影（Projection）变换\\n<ul>\\n<li>正交（Orthographic）投影</li>\\n<li>透视（Perspective）投影</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n<p>计算机图形学就是在做M（Model）V（View）P（Projection）变换，可以用现实中的拍照来类比：</p>\\n<ul>\\n<li>找个好地方，安排好每个人的位置（模型变换，从局部空间到世界空间）</li>\\n<li>把相机放到一个好的角度（视图变换，从世界空间到观察空间）</li>\\n<li>按快门拍照（投影变换，从观察空间到裁剪空间）</li>\\n</ul>","autoDesc":true}');export{e as data};

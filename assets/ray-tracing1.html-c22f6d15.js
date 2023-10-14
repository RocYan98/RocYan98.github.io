const t=JSON.parse(`{"key":"v-2911a602","path":"/posts/CG/GAMES101/ray-tracing1.html","title":"光线追踪（基本原理）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":["计算机图形学"],"order":13,"description":"光线追踪（基本原理） Whitted-Style 光线追踪（Ray Tracing） 光线的定义： 直线传播 光线之间不会碰撞 光线从光源发出，进入场景不断碰撞，最终到达眼睛 1 光线投射（Ray Casting） 对每一个 pixel，从眼睛/相机发出一根光线，最终打到某一点，如果该点与物体相交，则表示能看到物体上的这个点。再让该点与光源作连线，如果没有遮挡则形成一条有效光路，否则为阴影。（这比 shadow mapping 更方便）","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/CG/GAMES101/ray-tracing1.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"光线追踪（基本原理）"}],["meta",{"property":"og:description","content":"光线追踪（基本原理） Whitted-Style 光线追踪（Ray Tracing） 光线的定义： 直线传播 光线之间不会碰撞 光线从光源发出，进入场景不断碰撞，最终到达眼睛 1 光线投射（Ray Casting） 对每一个 pixel，从眼睛/相机发出一根光线，最终打到某一点，如果该点与物体相交，则表示能看到物体上的这个点。再让该点与光源作连线，如果没有遮挡则形成一条有效光路，否则为阴影。（这比 shadow mapping 更方便）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-14T14:02:19.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-14T14:02:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"光线追踪（基本原理）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-14T14:02:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"Whitted-Style 光线追踪（Ray Tracing）","slug":"whitted-style-光线追踪-ray-tracing","link":"#whitted-style-光线追踪-ray-tracing","children":[]},{"level":2,"title":"1 光线投射（Ray Casting）","slug":"_1-光线投射-ray-casting","link":"#_1-光线投射-ray-casting","children":[]},{"level":2,"title":"2 递归光线追踪（Recursive Ray Tracing）","slug":"_2-递归光线追踪-recursive-ray-tracing","link":"#_2-递归光线追踪-recursive-ray-tracing","children":[]},{"level":2,"title":"3 射线方程（Ray Equation）","slug":"_3-射线方程-ray-equation","link":"#_3-射线方程-ray-equation","children":[]},{"level":2,"title":"4 光线与物体的交点","slug":"_4-光线与物体的交点","link":"#_4-光线与物体的交点","children":[{"level":3,"title":"4.1 隐式几何","slug":"_4-1-隐式几何","link":"#_4-1-隐式几何","children":[]},{"level":3,"title":"4.2 显式几何","slug":"_4-2-显式几何","link":"#_4-2-显式几何","children":[]}]}],"git":{"createdTime":1691819321000,"updatedTime":1697292139000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":7}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"posts/CG/GAMES101/ray-tracing1.md","localizedDate":"2023年8月4日","excerpt":"<h1> 光线追踪（基本原理）</h1>\\n<h2> Whitted-Style 光线追踪（Ray Tracing）</h2>\\n<p>光线的定义：</p>\\n<ul>\\n<li>直线传播</li>\\n<li>光线之间不会碰撞</li>\\n<li>光线从光源发出，进入场景不断碰撞，最终到达眼睛</li>\\n</ul>\\n<h2> 1 光线投射（Ray Casting）</h2>\\n<p>对每一个 pixel，从眼睛/相机发出一根光线，最终打到某一点，如果该点与物体相交，则表示能看到物体上的这个点。再让该点与光源作连线，如果没有遮挡则形成一条有效光路，否则为阴影。（这比 shadow mapping 更方便）</p>","autoDesc":true}`);export{t as data};

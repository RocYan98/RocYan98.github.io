const e=JSON.parse(`{"key":"v-149f30f0","path":"/posts/CG/GAMES101/shading3.html","title":"着色（插值、高级纹理映射）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":["计算机图形学","GAMES101"],"order":9,"description":"着色（插值、高级纹理映射） 1 重心坐标 重心坐标是为了做三角形内的插值 三角形 ABC（无论是几维）平面内任意一点都可以写成是三个顶点坐标的线性组合，即点 (x, y) 可以用 表示， 就是重心坐标，，且当点在三角形内部时，三个值都是非负的。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/CG/GAMES101/shading3.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"着色（插值、高级纹理映射）"}],["meta",{"property":"og:description","content":"着色（插值、高级纹理映射） 1 重心坐标 重心坐标是为了做三角形内的插值 三角形 ABC（无论是几维）平面内任意一点都可以写成是三个顶点坐标的线性组合，即点 (x, y) 可以用 表示， 就是重心坐标，，且当点在三角形内部时，三个值都是非负的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-17T11:01:38.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-17T11:01:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"着色（插值、高级纹理映射）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-17T11:01:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 重心坐标","slug":"_1-重心坐标","link":"#_1-重心坐标","children":[{"level":3,"title":"1.1 插值","slug":"_1-1-插值","link":"#_1-1-插值","children":[]}]},{"level":2,"title":"2 纹理映射","slug":"_2-纹理映射","link":"#_2-纹理映射","children":[{"level":3,"title":"2.1 纹理过小","slug":"_2-1-纹理过小","link":"#_2-1-纹理过小","children":[]},{"level":3,"title":"2.2 纹理过大","slug":"_2-2-纹理过大","link":"#_2-2-纹理过大","children":[]}]},{"level":2,"title":"3 纹理应用","slug":"_3-纹理应用","link":"#_3-纹理应用","children":[{"level":3,"title":"3.1 环境光映射（Environment Map）","slug":"_3-1-环境光映射-environment-map","link":"#_3-1-环境光映射-environment-map","children":[]},{"level":3,"title":"3.2 凹凸 / 法线贴图（Bump / Normal Mapping）","slug":"_3-2-凹凸-法线贴图-bump-normal-mapping","link":"#_3-2-凹凸-法线贴图-bump-normal-mapping","children":[]},{"level":3,"title":"3.3 位移贴图（Displacement Mapping）","slug":"_3-3-位移贴图-displacement-mapping","link":"#_3-3-位移贴图-displacement-mapping","children":[]},{"level":3,"title":"3.4 三维纹理","slug":"_3-4-三维纹理","link":"#_3-4-三维纹理","children":[]},{"level":3,"title":"3.5 阴影纹理","slug":"_3-5-阴影纹理","link":"#_3-5-阴影纹理","children":[]}]}],"git":{"createdTime":1691819321000,"updatedTime":1692270098000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":6}]},"readingTime":{"minutes":6.9,"words":2071},"filePathRelative":"posts/CG/GAMES101/shading3.md","localizedDate":"2023年8月4日","excerpt":"<h1> 着色（插值、高级纹理映射）</h1>\\n<h2> 1 重心坐标</h2>\\n<p>重心坐标是为了做三角形内的插值</p>\\n<p>三角形 ABC（无论是几维）平面内任意一点都可以写成是三个顶点坐标的线性组合，即点 (x, y) 可以用  表示， 就是重心坐标，，且当点在三角形内部时，三个值都是非负的。</p>\\n<figure><img src=\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/uh96ti.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}`);export{e as data};
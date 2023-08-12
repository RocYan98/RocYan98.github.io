const a=JSON.parse(`{"key":"v-149f30f0","path":"/posts/CG/GAMES101/shading3.html","title":"9.着色（插值、高级纹理映射）","lang":"zh-CN","frontmatter":{"date":"2023-08-04T00:00:00.000Z","tag":["CG","GAMES101"],"category":"GAMES101","cover":"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png","description":"9.着色（插值、高级纹理映射） 1 重心坐标 重心坐标是为了做三角形内的插值 三角形ABC（无论是几维）平面内任意一点都可以写成是三个顶点坐标的线性组合，即点(x, y)可以用(α,β,γ)(\\\\alpha,\\\\beta,\\\\gamma)(α,β,γ)表示，(α,β,γ)(\\\\alpha,\\\\beta,\\\\gamma)(α,β,γ)就是重心坐标，α+β+γ=1\\\\alpha +\\\\beta +\\\\gamma=1α+β+γ=1，且当点在三角形内部时，三个值都是非负的。","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/CG/GAMES101/shading3.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"9.着色（插值、高级纹理映射）"}],["meta",{"property":"og:description","content":"9.着色（插值、高级纹理映射） 1 重心坐标 重心坐标是为了做三角形内的插值 三角形ABC（无论是几维）平面内任意一点都可以写成是三个顶点坐标的线性组合，即点(x, y)可以用(α,β,γ)(\\\\alpha,\\\\beta,\\\\gamma)(α,β,γ)表示，(α,β,γ)(\\\\alpha,\\\\beta,\\\\gamma)(α,β,γ)就是重心坐标，α+β+γ=1\\\\alpha +\\\\beta +\\\\gamma=1α+β+γ=1，且当点在三角形内部时，三个值都是非负的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-12T09:00:16.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"9.着色（插值、高级纹理映射）"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"CG"}],["meta",{"property":"article:tag","content":"GAMES101"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-12T09:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9.着色（插值、高级纹理映射）\\",\\"image\\":[\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4rrgwz.png\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-12T09:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"1 重心坐标","slug":"_1-重心坐标","link":"#_1-重心坐标","children":[{"level":3,"title":"1.1 插值","slug":"_1-1-插值","link":"#_1-1-插值","children":[]}]},{"level":2,"title":"2 纹理映射","slug":"_2-纹理映射","link":"#_2-纹理映射","children":[{"level":3,"title":"2.1 纹理过小","slug":"_2-1-纹理过小","link":"#_2-1-纹理过小","children":[]},{"level":3,"title":"2.2 纹理过大","slug":"_2-2-纹理过大","link":"#_2-2-纹理过大","children":[]}]},{"level":2,"title":"3 纹理应用","slug":"_3-纹理应用","link":"#_3-纹理应用","children":[{"level":3,"title":"3.1 环境光映射（Environment Map）","slug":"_3-1-环境光映射-environment-map","link":"#_3-1-环境光映射-environment-map","children":[]},{"level":3,"title":"3.2 凹凸/法线贴图（Bump/Normal Mapping）","slug":"_3-2-凹凸-法线贴图-bump-normal-mapping","link":"#_3-2-凹凸-法线贴图-bump-normal-mapping","children":[]},{"level":3,"title":"3.3 位移贴图（Displacement Mapping）","slug":"_3-3-位移贴图-displacement-mapping","link":"#_3-3-位移贴图-displacement-mapping","children":[]},{"level":3,"title":"3.4 三维纹理","slug":"_3-4-三维纹理","link":"#_3-4-三维纹理","children":[]},{"level":3,"title":"3.5 阴影纹理","slug":"_3-5-阴影纹理","link":"#_3-5-阴影纹理","children":[]}]}],"git":{"createdTime":1691819321000,"updatedTime":1691830816000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":6.78,"words":2034},"filePathRelative":"posts/CG/GAMES101/shading3.md","localizedDate":"2023年8月4日","excerpt":"<h1> 9.着色（插值、高级纹理映射）</h1>\\n<h2> 1 重心坐标</h2>\\n<p>重心坐标是为了做三角形内的插值</p>\\n<p>三角形ABC（无论是几维）平面内任意一点都可以写成是三个顶点坐标的线性组合，即点(x, y)可以用<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><mi>α</mi><mo separator=\\"true\\">,</mo><mi>β</mi><mo separator=\\"true\\">,</mo><mi>γ</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(\\\\alpha,\\\\beta,\\\\gamma)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.0037em;\\">α</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05556em;\\">γ</span><span class=\\"mclose\\">)</span></span></span></span>表示，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><mi>α</mi><mo separator=\\"true\\">,</mo><mi>β</mi><mo separator=\\"true\\">,</mo><mi>γ</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(\\\\alpha,\\\\beta,\\\\gamma)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.0037em;\\">α</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05556em;\\">γ</span><span class=\\"mclose\\">)</span></span></span></span>就是重心坐标，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>α</mi><mo>+</mo><mi>β</mi><mo>+</mo><mi>γ</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">\\\\alpha +\\\\beta +\\\\gamma=1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.0037em;\\">α</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8889em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05278em;\\">β</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05556em;\\">γ</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6444em;\\"></span><span class=\\"mord\\">1</span></span></span></span>，且当点在三角形内部时，三个值都是非负的。</p>","autoDesc":true}`);export{a as data};

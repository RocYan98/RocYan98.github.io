const e=JSON.parse(`{"key":"v-26c95811","path":"/posts/paper/NeRF/analysis.html","title":"论文解析","lang":"zh-CN","frontmatter":{"date":"2023-10-26T00:00:00.000Z","category":"论文","tag":["Paper","Analysis","NeRF"],"title":"论文解析","order":2,"description":"NeRF 是做什么的 想知道一个模型是干什么的，最简单的方式就是看这个模型的输入输出。先忽略内部细节，NeRF 的输入就是对一个物体从不同角度拍摄的多张图片，输出就是渲染出来的输入集中所没有的新视角下的图片 (如图 1 所展示的那样)，简而言之 NeRF 就是合成新视角下的视图的模型。 Fig. 1","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/NeRF/analysis.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"论文解析"}],["meta",{"property":"og:description","content":"NeRF 是做什么的 想知道一个模型是干什么的，最简单的方式就是看这个模型的输入输出。先忽略内部细节，NeRF 的输入就是对一个物体从不同角度拍摄的多张图片，输出就是渲染出来的输入集中所没有的新视角下的图片 (如图 1 所展示的那样)，简而言之 NeRF 就是合成新视角下的视图的模型。 Fig. 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-31T05:13:23.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"Analysis"}],["meta",{"property":"article:tag","content":"NeRF"}],["meta",{"property":"article:published_time","content":"2023-10-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T05:13:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"论文解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-31T05:13:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"NeRF 是做什么的","slug":"nerf-是做什么的","link":"#nerf-是做什么的","children":[]},{"level":2,"title":"NeRF 是怎么做的","slug":"nerf-是怎么做的","link":"#nerf-是怎么做的","children":[{"level":3,"title":"Pipeline","slug":"pipeline","link":"#pipeline","children":[]},{"level":3,"title":"实现细节","slug":"实现细节","link":"#实现细节","children":[]}]},{"level":2,"title":"NeRF 做的怎么样","slug":"nerf-做的怎么样","link":"#nerf-做的怎么样","children":[]}],"git":{"createdTime":1698241347000,"updatedTime":1698729203000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"posts/paper/NeRF/analysis.md","localizedDate":"2023年10月26日","excerpt":"<h2> NeRF 是做什么的</h2>\\n<p>想知道一个模型是干什么的，最简单的方式就是看这个模型的输入输出。先忽略内部细节，NeRF 的输入就是对一个物体从不同角度拍摄的多张图片，输出就是渲染出来的输入集中所没有的新视角下的图片 (如图 1 所展示的那样)，简而言之 NeRF 就是合成新视角下的视图的模型。</p>\\n<figure><img src=\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/a5o42t.png\\" alt=\\"Fig. 1\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Fig. 1</figcaption></figure>","autoDesc":true}`);export{e as data};

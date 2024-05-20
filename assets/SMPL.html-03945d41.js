const e=JSON.parse(`{"key":"v-bd20272a","path":"/posts/paper/SMPL.html","title":"SMPL-论文解析","lang":"zh-CN","frontmatter":{"date":"2024-02-27T00:00:00.000Z","category":"论文","tag":["Paper","SMPL","Avatar"],"title":"SMPL-论文解析","order":4,"description":"SMPL: A Skinned Multi-Person Linear Model 项目地址 SIGGRAPH Asia 2015 Fig. 1: Overview","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/SMPL.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"SMPL-论文解析"}],["meta",{"property":"og:description","content":"SMPL: A Skinned Multi-Person Linear Model 项目地址 SIGGRAPH Asia 2015 Fig. 1: Overview"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T11:49:21.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"SMPL"}],["meta",{"property":"article:tag","content":"Avatar"}],["meta",{"property":"article:published_time","content":"2024-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T11:49:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SMPL-论文解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-20T11:49:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"SMPL: A Skinned Multi-Person Linear Model","slug":"smpl-a-skinned-multi-person-linear-model","link":"#smpl-a-skinned-multi-person-linear-model","children":[]},{"level":2,"title":"SMPL模型概述","slug":"smpl模型概述","link":"#smpl模型概述","children":[{"level":3,"title":"SMPL中的参数","slug":"smpl中的参数","link":"#smpl中的参数","children":[]}]},{"level":2,"title":"Pipeline","slug":"pipeline","link":"#pipeline","children":[{"level":3,"title":"平均模版形状 (Mean Template Shape)","slug":"平均模版形状-mean-template-shape","link":"#平均模版形状-mean-template-shape","children":[]},{"level":3,"title":"基于体格的混合成形 (Shape Blend Shapes)","slug":"基于体格的混合成形-shape-blend-shapes","link":"#基于体格的混合成形-shape-blend-shapes","children":[]},{"level":3,"title":"基于姿态的混合成形 (Pose Blend Shapes)","slug":"基于姿态的混合成形-pose-blend-shapes","link":"#基于姿态的混合成形-pose-blend-shapes","children":[]},{"level":3,"title":"蒙皮 (Skinning)","slug":"蒙皮-skinning","link":"#蒙皮-skinning","children":[]}]},{"level":2,"title":"模型中的公式","slug":"模型中的公式","link":"#模型中的公式","children":[{"level":3,"title":"基于体格的混合成形 (Shape Blend Shapes)","slug":"基于体格的混合成形-shape-blend-shapes-1","link":"#基于体格的混合成形-shape-blend-shapes-1","children":[]},{"level":3,"title":"骨骼点位置估计","slug":"骨骼点位置估计","link":"#骨骼点位置估计","children":[]},{"level":3,"title":"基于姿态的混合成形 (Pose Blend Shapes)","slug":"基于姿态的混合成形-pose-blend-shapes-1","link":"#基于姿态的混合成形-pose-blend-shapes-1","children":[]},{"level":3,"title":"线性混合蒙皮LBS (Linear Blend Skinning)","slug":"线性混合蒙皮lbs-linear-blend-skinning","link":"#线性混合蒙皮lbs-linear-blend-skinning","children":[]}]},{"level":2,"title":"SMPL-X 预训练模型参数","slug":"smpl-x-预训练模型参数","link":"#smpl-x-预训练模型参数","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1709190553000,"updatedTime":1716205761000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":15}]},"readingTime":{"minutes":9.56,"words":2867},"filePathRelative":"posts/paper/SMPL.md","localizedDate":"2024年2月27日","excerpt":"<h2> SMPL: A Skinned Multi-Person Linear Model</h2>\\n<p><a href=\\"https://smpl.is.tue.mpg.de\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目地址</a></p>\\n<p>SIGGRAPH Asia 2015</p>\\n<figure><img src=\\"http://img.rocyan.cn/blog/2024/05/664b376c6ec50.png\\" alt=\\"Fig. 1: Overview\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Fig. 1: Overview</figcaption></figure>","autoDesc":true}`);export{e as data};

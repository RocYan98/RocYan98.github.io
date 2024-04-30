const t=JSON.parse(`{"key":"v-65d7db2a","path":"/posts/CG/coordinate.html","title":"相机坐标系总结","lang":"zh-CN","frontmatter":{"date":"2024-04-30T00:00:00.000Z","category":"计算机图形学","tag":["Coordinate","Render"],"title":"相机坐标系总结","description":"在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。 Fig. 1: 常见的相机坐标系 常见的相机坐标系通常分为以上 4 种，都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表： 相机坐标系 软件或模型 RDF OpenCV、Colmap、SMPL DRB LLFF RUB OpenGL、NeRF、Blender、MeshLab LUF Pytorch3D","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/CG/coordinate.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"相机坐标系总结"}],["meta",{"property":"og:description","content":"在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。 Fig. 1: 常见的相机坐标系 常见的相机坐标系通常分为以上 4 种，都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表： 相机坐标系 软件或模型 RDF OpenCV、Colmap、SMPL DRB LLFF RUB OpenGL、NeRF、Blender、MeshLab LUF Pytorch3D"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-30T13:33:22.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Coordinate"}],["meta",{"property":"article:tag","content":"Render"}],["meta",{"property":"article:published_time","content":"2024-04-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-30T13:33:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"相机坐标系总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-30T13:33:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1714484002000,"updatedTime":1714484002000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"posts/CG/coordinate.md","localizedDate":"2024年4月30日","excerpt":"<p>在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。</p>\\n<figure><img src=\\"http://img.rocyan.cn/blog/2024/04/6630f07ce9ba9.png\\" alt=\\"Fig. 1: 常见的相机坐标系\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Fig. 1: 常见的相机坐标系</figcaption></figure>\\n<p>常见的相机坐标系通常分为以上 4 种，都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>相机坐标系</th>\\n<th>软件或模型</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>RDF</td>\\n<td>OpenCV、Colmap、SMPL</td>\\n</tr>\\n<tr>\\n<td>DRB</td>\\n<td>LLFF</td>\\n</tr>\\n<tr>\\n<td>RUB</td>\\n<td>OpenGL、NeRF、Blender、MeshLab</td>\\n</tr>\\n<tr>\\n<td>LUF</td>\\n<td>Pytorch3D</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};

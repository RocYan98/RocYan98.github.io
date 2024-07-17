const t=JSON.parse(`{"key":"v-1789146b","path":"/posts/CG/others/coordinate.html","title":"相机坐标系总结","lang":"zh-CN","frontmatter":{"date":"2024-04-30T00:00:00.000Z","category":"计算机图形学","tag":["Coordinate","Render"],"title":"相机坐标系总结","description":"在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。 Fig. 1: 常见的相机坐标系 上图 4 种都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表： 相机坐标系 软件或模型 RDF (Right Down Forward) OpenCV、Colmap DRB (Down Right Backward) LLFF RUB (Right Up Backward) OpenGL、NeRF、MeshLab LUF (Left Up Forward) Pytorch3D BUL (Backward Up Left) SMPL (不确定)","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/CG/others/coordinate.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"相机坐标系总结"}],["meta",{"property":"og:description","content":"在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。 Fig. 1: 常见的相机坐标系 上图 4 种都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表： 相机坐标系 软件或模型 RDF (Right Down Forward) OpenCV、Colmap DRB (Down Right Backward) LLFF RUB (Right Up Backward) OpenGL、NeRF、MeshLab LUF (Left Up Forward) Pytorch3D BUL (Backward Up Left) SMPL (不确定)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-17T13:16:43.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Coordinate"}],["meta",{"property":"article:tag","content":"Render"}],["meta",{"property":"article:published_time","content":"2024-04-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-17T13:16:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"相机坐标系总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-17T13:16:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1720229997000,"updatedTime":1721222203000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":1.1,"words":331},"filePathRelative":"posts/CG/others/coordinate.md","localizedDate":"2024年4月30日","excerpt":"<p>在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。</p>\\n<figure><img src=\\"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261203428.png\\" alt=\\"Fig. 1: 常见的相机坐标系\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Fig. 1: 常见的相机坐标系</figcaption></figure>\\n<p>上图 4 种都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>相机坐标系</th>\\n<th>软件或模型</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>RDF (Right Down Forward)</td>\\n<td>OpenCV、Colmap</td>\\n</tr>\\n<tr>\\n<td>DRB (Down Right Backward)</td>\\n<td>LLFF</td>\\n</tr>\\n<tr>\\n<td>RUB (Right Up Backward)</td>\\n<td>OpenGL、NeRF、MeshLab</td>\\n</tr>\\n<tr>\\n<td>LUF (Left Up Forward)</td>\\n<td>Pytorch3D</td>\\n</tr>\\n<tr>\\n<td>BUL (Backward Up Left)</td>\\n<td>SMPL (不确定)</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};

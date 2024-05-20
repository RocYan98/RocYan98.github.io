const e=JSON.parse(`{"key":"v-bc5d60f8","path":"/posts/paper/3DGS.html","title":"3DGS-论文笔记","lang":"zh-CN","frontmatter":{"date":"2024-03-15T00:00:00.000Z","category":"论文","tag":["Paper","3DGS","3D Reconstruction"],"title":"3DGS-论文笔记","order":7,"description":"3D Gaussian Splatting for Real-Time Radiance Field Rendering 项目地址 SIGGRAPH 2023 Fig. 1: Overview","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/3DGS.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"3DGS-论文笔记"}],["meta",{"property":"og:description","content":"3D Gaussian Splatting for Real-Time Radiance Field Rendering 项目地址 SIGGRAPH 2023 Fig. 1: Overview"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T11:49:21.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"3DGS"}],["meta",{"property":"article:tag","content":"3D Reconstruction"}],["meta",{"property":"article:published_time","content":"2024-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T11:49:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3DGS-论文笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-20T11:49:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"3D Gaussian Splatting for Real-Time Radiance Field Rendering","slug":"_3d-gaussian-splatting-for-real-time-radiance-field-rendering","link":"#_3d-gaussian-splatting-for-real-time-radiance-field-rendering","children":[]},{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"可微 3DGS (Differentiable 3D Gaussian Splatting)","slug":"可微-3dgs-differentiable-3d-gaussian-splatting","link":"#可微-3dgs-differentiable-3d-gaussian-splatting","children":[]},{"level":2,"title":"3DGS 自适应密度控制 (Optimization With Adaptive Density Control Of 3D Gaussian)","slug":"_3dgs-自适应密度控制-optimization-with-adaptive-density-control-of-3d-gaussian","link":"#_3dgs-自适应密度控制-optimization-with-adaptive-density-control-of-3d-gaussian","children":[{"level":3,"title":"优化 (Optimization)","slug":"优化-optimization","link":"#优化-optimization","children":[]},{"level":3,"title":"高斯自适应控制 (Adaptive Control of Gaussians)","slug":"高斯自适应控制-adaptive-control-of-gaussians","link":"#高斯自适应控制-adaptive-control-of-gaussians","children":[]}]},{"level":2,"title":"快速可微光栅化","slug":"快速可微光栅化","link":"#快速可微光栅化","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1710899618000,"updatedTime":1716205761000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":7}]},"readingTime":{"minutes":4.61,"words":1382},"filePathRelative":"posts/paper/3DGS.md","localizedDate":"2024年3月15日","excerpt":"<h2> 3D Gaussian Splatting for Real-Time Radiance Field Rendering</h2>\\n<p><a href=\\"https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目地址</a></p>\\n<p>SIGGRAPH 2023</p>\\n<figure><img src=\\"http://img.rocyan.cn/blog/2024/05/664b388a855d2.png\\" alt=\\"Fig. 1: Overview\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Fig. 1: Overview</figcaption></figure>","autoDesc":true}`);export{e as data};

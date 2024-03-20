const e=JSON.parse('{"key":"v-089cffb2","path":"/posts/paper/NeRF-translation.html","title":"NeRF-论文翻译","lang":"zh-CN","frontmatter":{"date":"2023-10-14T00:00:00.000Z","category":"论文","tag":["Paper","Translation","NeRF"],"title":"NeRF-论文翻译","order":1,"description":"NeRF：基于神经辐射场的视图合成 摘要：我们提出了一个方法，通过使用稀疏的输入视图集来优化底层的连续体积场景函数，在复杂场景的新视图合成方面取得了最先进的成果。我们的算法通过一个全连接的深度网络 (非卷积的) 来表示场景，这个网络的输入是一个连续的 5D 坐标 (空间位置 (x, y, z) 和视角 (θ,ϕ)(\\\\theta,\\\\phi)(θ,ϕ))，输出是该空间位置的体积密度和与视角相关的发射辐射强度。我们通过沿着相机光线采样 5D 坐标来合成新的视图，并且使用经典的体积渲染技术将输出的颜色和密度投射到图片上。因为体渲染有天然的可微分性，因此我们对表示的优化只需要唯一的输入，就是一组知道相机姿势的图像集。我们描述了如何高效的优化神经辐射场来渲染逼真的拥有复杂几何和外观的场景新视图，并且展示在神经渲染和视图生成方面超越前人的结果。查看视图合成的结果的最好方式是视频，因此我们建议读者观看我们的补充视频，以进行有说服性的比较。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/NeRF-translation.html"}],["meta",{"property":"og:site_name","content":"小严学习日记"}],["meta",{"property":"og:title","content":"NeRF-论文翻译"}],["meta",{"property":"og:description","content":"NeRF：基于神经辐射场的视图合成 摘要：我们提出了一个方法，通过使用稀疏的输入视图集来优化底层的连续体积场景函数，在复杂场景的新视图合成方面取得了最先进的成果。我们的算法通过一个全连接的深度网络 (非卷积的) 来表示场景，这个网络的输入是一个连续的 5D 坐标 (空间位置 (x, y, z) 和视角 (θ,ϕ)(\\\\theta,\\\\phi)(θ,ϕ))，输出是该空间位置的体积密度和与视角相关的发射辐射强度。我们通过沿着相机光线采样 5D 坐标来合成新的视图，并且使用经典的体积渲染技术将输出的颜色和密度投射到图片上。因为体渲染有天然的可微分性，因此我们对表示的优化只需要唯一的输入，就是一组知道相机姿势的图像集。我们描述了如何高效的优化神经辐射场来渲染逼真的拥有复杂几何和外观的场景新视图，并且展示在神经渲染和视图生成方面超越前人的结果。查看视图合成的结果的最好方式是视频，因此我们建议读者观看我们的补充视频，以进行有说服性的比较。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T06:45:31.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"Translation"}],["meta",{"property":"article:tag","content":"NeRF"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T06:45:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NeRF-论文翻译\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T06:45:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"NeRF：基于神经辐射场的视图合成","slug":"nerf-基于神经辐射场的视图合成","link":"#nerf-基于神经辐射场的视图合成","children":[]},{"level":2,"title":"1 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":2,"title":"2 相关工作","slug":"_2-相关工作","link":"#_2-相关工作","children":[]},{"level":2,"title":"3 神经辐射场场景表示","slug":"_3-神经辐射场场景表示","link":"#_3-神经辐射场场景表示","children":[]},{"level":2,"title":"4 利用辐射场进行体渲染","slug":"_4-利用辐射场进行体渲染","link":"#_4-利用辐射场进行体渲染","children":[]},{"level":2,"title":"5 优化神经辐射场","slug":"_5-优化神经辐射场","link":"#_5-优化神经辐射场","children":[{"level":3,"title":"5.1 位置编码","slug":"_5-1-位置编码","link":"#_5-1-位置编码","children":[]},{"level":3,"title":"5.2 分层体积采样","slug":"_5-2-分层体积采样","link":"#_5-2-分层体积采样","children":[]},{"level":3,"title":"5.3 实现细节","slug":"_5-3-实现细节","link":"#_5-3-实现细节","children":[]}]},{"level":2,"title":"6 结果","slug":"_6-结果","link":"#_6-结果","children":[{"level":3,"title":"6.1 数据集","slug":"_6-1-数据集","link":"#_6-1-数据集","children":[]},{"level":3,"title":"6.2 比较","slug":"_6-2-比较","link":"#_6-2-比较","children":[]},{"level":3,"title":"6.3 讨论","slug":"_6-3-讨论","link":"#_6-3-讨论","children":[]},{"level":3,"title":"6.4 消融实验","slug":"_6-4-消融实验","link":"#_6-4-消融实验","children":[]}]},{"level":2,"title":"7 结论","slug":"_7-结论","link":"#_7-结论","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]},{"level":2,"title":"额外的实现细节","slug":"额外的实现细节","link":"#额外的实现细节","children":[]}],"git":{"createdTime":1703843101000,"updatedTime":1709880331000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":31.91,"words":9574},"filePathRelative":"posts/paper/NeRF-translation.md","localizedDate":"2023年10月14日","excerpt":"<h2> NeRF：基于神经辐射场的视图合成</h2>\\n<p><strong>摘要</strong>：我们提出了一个方法，通过使用稀疏的输入视图集来优化底层的连续体积场景函数，在复杂场景的新视图合成方面取得了最先进的成果。我们的算法通过一个全连接的深度网络 (非卷积的) 来表示场景，这个网络的输入是一个连续的 5D 坐标 (空间位置 (x, y, z) 和视角 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mo stretchy=\\"false\\">(</mo><mi>θ</mi><mo separator=\\"true\\">,</mo><mi>ϕ</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">(\\\\theta,\\\\phi)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">θ</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord mathnormal\\">ϕ</span><span class=\\"mclose\\">)</span></span></span></span>)，输出是该空间位置的体积密度和与视角相关的发射辐射强度。我们通过沿着相机光线采样 5D 坐标来合成新的视图，并且使用经典的体积渲染技术将输出的颜色和密度投射到图片上。因为体渲染有天然的可微分性，因此我们对表示的优化只需要唯一的输入，就是一组知道相机姿势的图像集。我们描述了如何高效的优化神经辐射场来渲染逼真的拥有复杂几何和外观的场景新视图，并且展示在神经渲染和视图生成方面超越前人的结果。查看视图合成的结果的最好方式是视频，因此我们建议读者观看我们的补充视频，以进行有说服性的比较。</p>","autoDesc":true}');export{e as data};

const t=JSON.parse(`{"key":"v-10f4cbca","path":"/posts/paper/REC-MV.html","title":"REC-MV-论文笔记","lang":"zh-CN","frontmatter":{"date":"2024-03-01T00:00:00.000Z","category":"论文","tag":["Paper","REC-MV","Reconstructing","Cloth Simulation"],"title":"REC-MV-论文笔记","order":5,"description":"REC-MV: REconstructing 3D Dynamic Cloth from Monocular Videos 项目地址 CVPR 2023 Abstract 从单目视频中重建具有开放边界的动态 3D 服装表面是一个重要的问题，因为它为服装数字化提供了实用且低成本的解决方案。最近的神经渲染方法从单目视频中实现了高质量的动态服装人体重建结果，但这些方法无法将服装表面与身体分开。此外，尽管基于特征曲线表示的现有服装重建方法展示了从单个图像重建服装的令人印象深刻的结果，但它们很难为视频输入生成时间一致的表面。为了解决上述限制，在本文中，我们将此任务制定为 3D 服装特征曲线和单目视频表面重建的优化问题。我们引入了一种称为REC-MV 的新颖方法来联合优化服装的显式特征曲线和隐式符号距离场 (SDF)。然后可以通过规范空间中的服装模板注册来提取开放的服装网格。对多个随意捕获的数据集的实验表明，我们的方法优于现有方法，并且可以生成高质量的动态服装表面。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/REC-MV.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"REC-MV-论文笔记"}],["meta",{"property":"og:description","content":"REC-MV: REconstructing 3D Dynamic Cloth from Monocular Videos 项目地址 CVPR 2023 Abstract 从单目视频中重建具有开放边界的动态 3D 服装表面是一个重要的问题，因为它为服装数字化提供了实用且低成本的解决方案。最近的神经渲染方法从单目视频中实现了高质量的动态服装人体重建结果，但这些方法无法将服装表面与身体分开。此外，尽管基于特征曲线表示的现有服装重建方法展示了从单个图像重建服装的令人印象深刻的结果，但它们很难为视频输入生成时间一致的表面。为了解决上述限制，在本文中，我们将此任务制定为 3D 服装特征曲线和单目视频表面重建的优化问题。我们引入了一种称为REC-MV 的新颖方法来联合优化服装的显式特征曲线和隐式符号距离场 (SDF)。然后可以通过规范空间中的服装模板注册来提取开放的服装网格。对多个随意捕获的数据集的实验表明，我们的方法优于现有方法，并且可以生成高质量的动态服装表面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-07T03:42:30.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"REC-MV"}],["meta",{"property":"article:tag","content":"Reconstructing"}],["meta",{"property":"article:tag","content":"Cloth Simulation"}],["meta",{"property":"article:published_time","content":"2024-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-07T03:42:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"REC-MV-论文笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-07T03:42:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"REC-MV: REconstructing 3D Dynamic Cloth from Monocular Videos","slug":"rec-mv-reconstructing-3d-dynamic-cloth-from-monocular-videos","link":"#rec-mv-reconstructing-3d-dynamic-cloth-from-monocular-videos","children":[]},{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Method","slug":"method","link":"#method","children":[{"level":3,"title":"特征曲线和表面重建","slug":"特征曲线和表面重建","link":"#特征曲线和表面重建","children":[]},{"level":3,"title":"基于蒙皮的运动建模","slug":"基于蒙皮的运动建模","link":"#基于蒙皮的运动建模","children":[]},{"level":3,"title":"基于 2D 投影的 3D 特征曲线","slug":"基于-2d-投影的-3d-特征曲线","link":"#基于-2d-投影的-3d-特征曲线","children":[]},{"level":3,"title":"曲线和表面协同优化","slug":"曲线和表面协同优化","link":"#曲线和表面协同优化","children":[]},{"level":3,"title":"损失函数","slug":"损失函数","link":"#损失函数","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1709356499000,"updatedTime":1715053350000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":12}]},"readingTime":{"minutes":11.83,"words":3549},"filePathRelative":"posts/paper/REC-MV.md","localizedDate":"2024年3月1日","excerpt":"<h2> REC-MV: REconstructing 3D Dynamic Cloth from Monocular Videos</h2>\\n<p><a href=\\"https://lingtengqiu.github.io/2023/REC-MV/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目地址</a></p>\\n<p>CVPR 2023</p>\\n<h2> Abstract</h2>\\n<p>从单目视频中重建具有开放边界的动态 3D 服装表面是一个重要的问题，因为它为服装数字化提供了实用且低成本的解决方案。最近的神经渲染方法从单目视频中实现了高质量的动态服装人体重建结果，但这些方法无法将服装表面与身体分开。此外，尽管基于特征曲线表示的现有服装重建方法展示了从单个图像重建服装的令人印象深刻的结果，但它们很难为视频输入生成时间一致的表面。为了解决上述限制，在本文中，我们将此任务制定为 3D 服装特征曲线和单目视频表面重建的优化问题。我们引入了一种称为REC-MV 的新颖方法来联合优化服装的显式特征曲线和隐式<strong>符号距离场 (SDF)</strong>。然后可以通过规范空间中的服装模板注册来提取开放的服装网格。对多个随意捕获的数据集的实验表明，我们的方法优于现有方法，并且可以生成高质量的动态服装表面。</p>","autoDesc":true}`);export{t as data};
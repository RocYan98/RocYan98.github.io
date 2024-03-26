const e=JSON.parse(`{"key":"v-5fc00064","path":"/posts/paper/DeePSD.html","title":"DeePSD-论文笔记","lang":"zh-CN","frontmatter":{"date":"2024-03-06T00:00:00.000Z","category":"论文","tag":["Paper","DeePSD","Cloth Simulation"],"title":"DeePSD-论文笔记","order":6,"description":"DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation 项目地址 ICCV 2021 Abstract 我们提出了一种通过深度学习解决服装动画问题的新方案。我们的研究成果可以为任意拓扑结构和几何复杂度的模板服装制作动画。近期的研究通过支撑人体模型 (support body model, 将服装编码为人体的拓扑的一部分)，实现了服装编辑、尺寸调整和动画。这个复杂的工程解决方案在可扩展性、适用性和兼容性方面受到影响。通过将范围限制在服装动画上，我们能够提出一个简单的模型，该模型可以为任何服装制作动画，不受其拓扑结构、顶点顺序或连接性的影响。我们提出的架构将服装动画三维模型映射为三维动画的标准格式 (混合权重和混合形状矩阵)，兼容所有图形引擎。我们还提出了一种方法，利用基于物理的无监督学习来补充监督学习，从而隐式地解决碰撞问题并提高布料质量。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/DeePSD.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"DeePSD-论文笔记"}],["meta",{"property":"og:description","content":"DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation 项目地址 ICCV 2021 Abstract 我们提出了一种通过深度学习解决服装动画问题的新方案。我们的研究成果可以为任意拓扑结构和几何复杂度的模板服装制作动画。近期的研究通过支撑人体模型 (support body model, 将服装编码为人体的拓扑的一部分)，实现了服装编辑、尺寸调整和动画。这个复杂的工程解决方案在可扩展性、适用性和兼容性方面受到影响。通过将范围限制在服装动画上，我们能够提出一个简单的模型，该模型可以为任何服装制作动画，不受其拓扑结构、顶点顺序或连接性的影响。我们提出的架构将服装动画三维模型映射为三维动画的标准格式 (混合权重和混合形状矩阵)，兼容所有图形引擎。我们还提出了一种方法，利用基于物理的无监督学习来补充监督学习，从而隐式地解决碰撞问题并提高布料质量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-14T12:03:42.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"DeePSD"}],["meta",{"property":"article:tag","content":"Cloth Simulation"}],["meta",{"property":"article:published_time","content":"2024-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-14T12:03:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DeePSD-论文笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-14T12:03:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation","slug":"deepsd-automatic-deep-skinning-and-pose-space-deformation-for-3d-garment-animation","link":"#deepsd-automatic-deep-skinning-and-pose-space-deformation-for-3d-garment-animation","children":[]},{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Methodology","slug":"methodology","link":"#methodology","children":[{"level":3,"title":"PBS 数据和物理一致性 (PBS Data and Physical Consistency)","slug":"pbs-数据和物理一致性-pbs-data-and-physical-consistency","link":"#pbs-数据和物理一致性-pbs-data-and-physical-consistency","children":[]},{"level":3,"title":"架构 (Architecture)","slug":"架构-architecture","link":"#架构-architecture","children":[]},{"level":3,"title":"Training","slug":"training","link":"#training","children":[]}]}],"git":{"createdTime":1709706372000,"updatedTime":1710417822000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":8}]},"readingTime":{"minutes":6.58,"words":1974},"filePathRelative":"posts/paper/DeePSD.md","localizedDate":"2024年3月6日","excerpt":"<h2> DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation</h2>\\n<p><a href=\\"https://hbertiche.github.io/DeePSD/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目地址</a></p>\\n<p>ICCV 2021</p>\\n<h2> Abstract</h2>\\n<p>我们提出了一种通过深度学习解决服装动画问题的新方案。我们的研究成果可以为任意拓扑结构和几何复杂度的模板服装制作动画。近期的研究通过支撑人体模型 (support body model, 将服装编码为人体的拓扑的一部分)，实现了服装编辑、尺寸调整和动画。这个复杂的工程解决方案在可扩展性、适用性和兼容性方面受到影响。通过将范围限制在服装动画上，我们能够提出一个简单的模型，该模型可以为任何服装制作动画，不受其拓扑结构、顶点顺序或连接性的影响。我们提出的架构将服装动画三维模型映射为三维动画的标准格式 (混合权重和混合形状矩阵)，兼容所有图形引擎。我们还提出了一种方法，利用基于物理的无监督学习来补充监督学习，从而隐式地解决碰撞问题并提高布料质量。</p>","autoDesc":true}`);export{e as data};

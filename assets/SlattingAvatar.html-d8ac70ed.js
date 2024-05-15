const t=JSON.parse(`{"key":"v-9d5c29e4","path":"/posts/paper/SlattingAvatar.html","title":"SplattingAvatar-论文笔记","lang":"zh-CN","frontmatter":{"date":"2024-05-01T00:00:00.000Z","category":"论文","tag":["Paper","Avatar","SplattingAvatar","3DGS"],"title":"SplattingAvatar-论文笔记","order":12,"description":"SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting 项目地址 CVPR 2024 Abstract 我们展示了 SplattingAvatar，这是一种在三角形网格上嵌入 3DGS 的逼真数字人的混合 3D 表现形式，在现代 GPU 上的渲染速度超过 300 FPS，在移动设备上的渲染速度为 30 FPS。我们通过显式网格和隐式高斯进行拼接建模，将数字人的运动和外观分离开来。高斯由三角形网格上的重心坐标和位移定义为 Phong Surface[2]。我们通过改进 Lifted Optimiaztion[2] 方法，在三角形网格上 walking 的同时优化高斯参数。SplattingAvatar 是数字人的混合表现形式，其中网格代表低频运动和表面变形，而高斯则代表高频几何和细节外观。现有的变形方法依赖于基于 MLP 的线性混合蒙皮 (LBS) 来表示运动，与之不同的是，我们直接通过网格来控制高斯的旋转和平移，这就增强了它与各种动画技术 (如骨骼动画、混合形状和网格编辑) 的兼容性。SplattingAvatar 可通过单目视频对全身和头部进行训练，在多个数据集上显示出一流的渲染质量。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/SlattingAvatar.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"SplattingAvatar-论文笔记"}],["meta",{"property":"og:description","content":"SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting 项目地址 CVPR 2024 Abstract 我们展示了 SplattingAvatar，这是一种在三角形网格上嵌入 3DGS 的逼真数字人的混合 3D 表现形式，在现代 GPU 上的渲染速度超过 300 FPS，在移动设备上的渲染速度为 30 FPS。我们通过显式网格和隐式高斯进行拼接建模，将数字人的运动和外观分离开来。高斯由三角形网格上的重心坐标和位移定义为 Phong Surface[2]。我们通过改进 Lifted Optimiaztion[2] 方法，在三角形网格上 walking 的同时优化高斯参数。SplattingAvatar 是数字人的混合表现形式，其中网格代表低频运动和表面变形，而高斯则代表高频几何和细节外观。现有的变形方法依赖于基于 MLP 的线性混合蒙皮 (LBS) 来表示运动，与之不同的是，我们直接通过网格来控制高斯的旋转和平移，这就增强了它与各种动画技术 (如骨骼动画、混合形状和网格编辑) 的兼容性。SplattingAvatar 可通过单目视频对全身和头部进行训练，在多个数据集上显示出一流的渲染质量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T09:46:35.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"Avatar"}],["meta",{"property":"article:tag","content":"SplattingAvatar"}],["meta",{"property":"article:tag","content":"3DGS"}],["meta",{"property":"article:published_time","content":"2024-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-13T09:46:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SplattingAvatar-论文笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-13T09:46:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting","slug":"splattingavatar-realistic-real-time-human-avatars-with-mesh-embedded-gaussian-splatting","link":"#splattingavatar-realistic-real-time-human-avatars-with-mesh-embedded-gaussian-splatting","children":[]},{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Method","slug":"method","link":"#method","children":[{"level":3,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":3,"title":"Embedding on mesh","slug":"embedding-on-mesh","link":"#embedding-on-mesh","children":[]},{"level":3,"title":"Differentiable rendering of Gaussian Splatting","slug":"differentiable-rendering-of-gaussian-splatting","link":"#differentiable-rendering-of-gaussian-splatting","children":[]},{"level":3,"title":"Walking on a triangle mesh","slug":"walking-on-a-triangle-mesh","link":"#walking-on-a-triangle-mesh","children":[]}]},{"level":2,"title":"Reference:","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1714549406000,"updatedTime":1715593595000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":12}]},"readingTime":{"minutes":6.52,"words":1957},"filePathRelative":"posts/paper/SlattingAvatar.md","localizedDate":"2024年5月1日","excerpt":"<h2> SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting</h2>\\n<p><a href=\\"https://initialneil.github.io/SplattingAvatar\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目地址</a></p>\\n<p>CVPR 2024</p>\\n<h2> Abstract</h2>\\n<p>我们展示了 SplattingAvatar，这是一种在三角形网格上嵌入 3DGS 的逼真数字人的混合 3D 表现形式，在现代 GPU 上的渲染速度超过 300 FPS，在移动设备上的渲染速度为 30 FPS。我们通过显式网格和隐式高斯进行拼接建模，将数字人的运动和外观分离开来。高斯由三角形网格上的重心坐标和位移定义为 Phong Surface<a href=\\"https://arxiv.org/pdf/2007.04940\\" title=\\"The Phong Surface: Efficient 3D Model Fitting Using Lifted Optimization\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">[2]</a>。我们通过改进 Lifted Optimiaztion<a href=\\"https://arxiv.org/pdf/2007.04940\\" title=\\"The Phong Surface: Efficient 3D Model Fitting Using Lifted Optimization\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">[2]</a> 方法，在三角形网格上 walking 的同时优化高斯参数。SplattingAvatar 是数字人的混合表现形式，其中网格代表低频运动和表面变形，而高斯则代表高频几何和细节外观。现有的变形方法依赖于基于 MLP 的线性混合蒙皮 (LBS) 来表示运动，与之不同的是，我们直接通过网格来控制高斯的旋转和平移，这就增强了它与各种动画技术 (如骨骼动画、混合形状和网格编辑) 的兼容性。SplattingAvatar 可通过单目视频对全身和头部进行训练，在多个数据集上显示出一流的渲染质量。</p>","autoDesc":true}`);export{t as data};
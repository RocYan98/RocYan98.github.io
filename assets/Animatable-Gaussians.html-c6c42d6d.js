const e=JSON.parse(`{"key":"v-429891f8","path":"/posts/paper/Animatable-Gaussians.html","title":"Animatable-Gaussians-论文笔记","lang":"zh-CN","frontmatter":{"date":"2024-04-22T00:00:00.000Z","category":"论文","tag":["Paper","3DGS","Avatar"],"title":"Animatable-Gaussians-论文笔记","order":10,"description":"Animatable Gaussians: Learning Pose-dependent Gaussian Maps for High-fidelity Human Avatar Modeling 项目地址 CVPR 2024 Abstract 从 RGB 视频中建立可动画化的数字人模型是一个长期存在且极具挑战性的问题。最近的研究通常采用基于 MLP 的神经辐射场（NeRF）来表示三维人体，但纯 MLP 仍然难以回归与姿势相关的服装细节。为此，我们引入了动画高斯，这是一种新的数字人表示方法，它利用强大的 2D CNN 和 3DGS 来创建高保真数字人。为了将 3DGS 与可动画化的数字人联系起来，我们从输入视频中学习参数模板，然后将模板参数化为正面和反面的标准空间的高斯映射，其中每个像素代表一个高斯核。学习到的模板对穿着的服装具有自适应性，可用于制作连衣裙等宽松服装的模型。这种以模板为导向的二维参数化使我们能够采用功能强大的基于 StyleGAN 的 CNN 来学习与姿势相关的高斯映射，从而为详细的动态外观建模。此外，我们还引入了一种姿势投影策略，以更好地泛化新姿势。总之，我们的方法可以创建具有动态、逼真和泛化外观的逼真数字人。实验表明，我们的方法优于其他最先进的方法。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/Animatable-Gaussians.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"Animatable-Gaussians-论文笔记"}],["meta",{"property":"og:description","content":"Animatable Gaussians: Learning Pose-dependent Gaussian Maps for High-fidelity Human Avatar Modeling 项目地址 CVPR 2024 Abstract 从 RGB 视频中建立可动画化的数字人模型是一个长期存在且极具挑战性的问题。最近的研究通常采用基于 MLP 的神经辐射场（NeRF）来表示三维人体，但纯 MLP 仍然难以回归与姿势相关的服装细节。为此，我们引入了动画高斯，这是一种新的数字人表示方法，它利用强大的 2D CNN 和 3DGS 来创建高保真数字人。为了将 3DGS 与可动画化的数字人联系起来，我们从输入视频中学习参数模板，然后将模板参数化为正面和反面的标准空间的高斯映射，其中每个像素代表一个高斯核。学习到的模板对穿着的服装具有自适应性，可用于制作连衣裙等宽松服装的模型。这种以模板为导向的二维参数化使我们能够采用功能强大的基于 StyleGAN 的 CNN 来学习与姿势相关的高斯映射，从而为详细的动态外观建模。此外，我们还引入了一种姿势投影策略，以更好地泛化新姿势。总之，我们的方法可以创建具有动态、逼真和泛化外观的逼真数字人。实验表明，我们的方法优于其他最先进的方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-22T07:58:54.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"3DGS"}],["meta",{"property":"article:tag","content":"Avatar"}],["meta",{"property":"article:published_time","content":"2024-04-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-22T07:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Animatable-Gaussians-论文笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-22T07:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"Animatable Gaussians: Learning Pose-dependent Gaussian Maps  for High-fidelity Human Avatar Modeling","slug":"animatable-gaussians-learning-pose-dependent-gaussian-maps-for-high-fidelity-human-avatar-modeling","link":"#animatable-gaussians-learning-pose-dependent-gaussian-maps-for-high-fidelity-human-avatar-modeling","children":[]},{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Method","slug":"method","link":"#method","children":[{"level":3,"title":"Overview","slug":"overview","link":"#overview","children":[]}]}],"git":{"createdTime":1713754912000,"updatedTime":1713772734000,"contributors":[{"name":"rocyan","email":"rocyan98@gmail.com","commits":2}]},"readingTime":{"minutes":2.7,"words":809},"filePathRelative":"posts/paper/Animatable-Gaussians.md","localizedDate":"2024年4月22日","excerpt":"<h2> Animatable Gaussians: Learning Pose-dependent Gaussian Maps  for High-fidelity Human Avatar Modeling</h2>\\n<p><a href=\\"https://animatable-gaussians.github.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目地址</a></p>\\n<p>CVPR 2024</p>\\n<h2> Abstract</h2>\\n<p>从 RGB 视频中建立可动画化的数字人模型是一个长期存在且极具挑战性的问题。最近的研究通常采用基于 MLP 的神经辐射场（NeRF）来表示三维人体，但纯 MLP 仍然难以回归与姿势相关的服装细节。为此，我们引入了动画高斯，这是一种新的数字人表示方法，它利用强大的 2D CNN 和 3DGS 来创建高保真数字人。为了将 3DGS 与可动画化的数字人联系起来，我们从输入视频中学习参数模板，然后将模板参数化为正面和反面的标准空间的高斯映射，其中每个像素代表一个高斯核。学习到的模板对穿着的服装具有自适应性，可用于制作连衣裙等宽松服装的模型。这种以模板为导向的二维参数化使我们能够采用功能强大的基于 StyleGAN 的 CNN 来学习与姿势相关的高斯映射，从而为详细的动态外观建模。此外，我们还引入了一种姿势投影策略，以更好地泛化新姿势。总之，我们的方法可以创建具有动态、逼真和泛化外观的逼真数字人。实验表明，我们的方法优于其他最先进的方法。</p>","autoDesc":true}`);export{e as data};
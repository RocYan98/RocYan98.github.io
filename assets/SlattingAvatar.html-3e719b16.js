import{_ as n,r,o as s,c as o,b as e,e as a,d as i,f as l}from"./app-0b1e4222.js";const d={},c=e("h2",{id:"splattingavatar-realistic-real-time-human-avatars-with-mesh-embedded-gaussian-splatting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#splattingavatar-realistic-real-time-human-avatars-with-mesh-embedded-gaussian-splatting","aria-hidden":"true"},"#"),a(" SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting")],-1),h={href:"https://initialneil.github.io/SplattingAvatar",target:"_blank",rel:"noopener noreferrer"},g=l('<p>CVPR 2024</p><h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h2><p>我们展示了 SplattingAvatar，这是一种在三角形网格上嵌入 3DGS 的逼真数字人的混合 3D 表现形式，在现代 GPU 上的渲染速度超过 300 FPS，在移动设备上的渲染速度为 30 FPS。我们通过显式网格和隐式高斯进行拼接建模，将数字人的运动和外观分离开来。高斯由三角形网格上的重心坐标和位移定义为 Phong Surface。我们通过改进 Lifted Optimiaztion 方法，在遍历三角形网格的同时优化高斯参数。SplattingAvatar 是数字人的混合表现形式，其中网格代表低频运动和表面变形，而高斯则代表高频几何和细节外观。现有的变形方法依赖于基于 MLP 的线性混合蒙皮 (LBS) 来表示运动，与之不同的是，我们直接通过网格来控制高斯的旋转和平移，这就增强了它与各种动画技术 (如骨骼动画、混合形状和网格编辑) 的兼容性。SplattingAvatar 可通过单目视频对全身和头部进行训练，在多个数据集上显示出一流的渲染质量。</p><figure><img src="http://img.rocyan.cn/blog/2024/05/6638529ae6e2f.png" alt="Fig. 1: Overview" tabindex="0" loading="lazy"><figcaption>Fig. 1: Overview</figcaption></figure><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',5),p={href:"https://arxiv.org/pdf/2007.04940",title:"[2]ThePhongSurface:Efficient3DModelFittingusingLiftedOptimization",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"本文的主要贡献：",-1),f=e("ul",null,[e("li",null,"本文介绍了一种将 3DGS 与 mesh 整合在一起的框架，它提供了一种新的数字人表现形式，既逼真又能提高计算效率。"),e("li",null,"本文使用 lifted optimization 来优化数字人模型，允许对高斯参数和 mesh embeddings 进行联合优化，以实现精确的重建。"),e("li",null,"本文通过综合评估和 Unity，展示了实时渲染的能力和创建各种数字人的泛化性。")],-1),m=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),a(" Reference:")],-1),_={href:"https://arxiv.org/abs/2403.05087",target:"_blank",rel:"noopener noreferrer"};function v(b,S){const t=r("ExternalLinkIcon");return s(),o("div",null,[c,e("p",null,[e("a",h,[a("项目地址"),i(t)])]),g,e("p",null,[a("本文提出用可训练的 mesh 的 embeddings 来显示控制高斯，将 mesh 表示为 Phong surface "),e("a",p,[a("[2]"),i(t)]),a("，")]),u,f,m,e("p",null,[e("a",_,[a("[1]SplattingAvatar: Realistic Real-Time Human Avatars with Mesh-Embedded Gaussian Splatting"),i(t)])])])}const A=n(d,[["render",v],["__file","SlattingAvatar.html.vue"]]);export{A as default};

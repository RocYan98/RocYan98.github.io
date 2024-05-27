import{_ as r,r as i,o,c as s,b as e,e as n,d as t}from"./app-0f723a4b.js";const l={},c=e("h2",{id:"d3ga-drivable-3d-gaussian-avatars",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#d3ga-drivable-3d-gaussian-avatars","aria-hidden":"true"},"#"),n(" D3GA：Drivable 3D Gaussian Avatars")],-1),_={href:"https://zielon.github.io/d3ga/",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,"arXiv preprint arXiv:2311.08581",-1),h=e("figure",null,[e("img",{src:"http://img.rocyan.cn/blog/2024/05/665043cf9cb25.png",alt:"Overview",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Overview")],-1),g=e("figure",null,[e("img",{src:"http://img.rocyan.cn/blog/2024/05/6653e0403d7fe.png",alt:"Pipeline",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Pipeline")],-1),p=e("h3",{id:"abstract",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abstract","aria-hidden":"true"},"#"),n(" Abstract")],-1),m=e("p",null,"我们提出了可驱动 3D 高斯数字人 (D3GA)，这是首个用 3DGS 渲染的人体三维可控模型。目前逼真的数字人在训练过程中需要精确的 3D 注册，在测试过程中需要密集的输入图像，或者两者兼而有之。基于神经辐射场的数字人在远程应用中也往往过于缓慢。本研究利用最近提出的 3DGS 技术，以密集配准的多视角视频作为输入，实时渲染逼真的人体。为了对这些基元进行变形，我们放弃了常用的 LBS 变形方法，而采用了经典的体积变形方法：笼式变形。鉴于它们的尺寸较小，我们用关节角度和关键点来驱动这些变形，这更适合通信应用。在使用相同的训练和测试数据时，我们对九个具有不同体形、衣服和动作的测试者进行了实验，结果比最先进的方法质量更高。",-1),f={href:"http://proceedings.mlr.press/v97/tan19a.html?ref=jina-ai-gmbh.ghost.io",target:"_blank",rel:"noopener noreferrer"},u={href:"https://openaccess.thecvf.com/content_CVPR_2020/html/Kirillov_PointRend_Image_Segmentation_As_Rendering_CVPR_2020_paper.html",target:"_blank",rel:"noopener noreferrer"};function b(v,k){const a=i("ExternalLinkIcon");return o(),s("div",null,[c,e("p",null,[e("a",_,[n("项目地址"),t(a)])]),d,h,g,p,m,e("p",null,[n("To create a cage per garment, we segment all images of a single time instance using an "),e("a",f,[n("EfficientNet"),t(a)]),n(" backbone with "),e("a",u,[n("PointRend"),t(a)]),n(" refinement.")])])}const D=r(l,[["render",b],["__file","Skimming.html.vue"]]);export{D as default};

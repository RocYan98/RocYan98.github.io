import{_ as n,r as i,o as l,c as o,b as a,e as s,d as e,f as r}from"./app-7f3145e1.js";const c={},h=a("h2",{id:"d3ga-drivable-3d-gaussian-avatars",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#d3ga-drivable-3d-gaussian-avatars","aria-hidden":"true"},"#"),s(" D3GA：Drivable 3D Gaussian Avatars")],-1),p={href:"https://zielon.github.io/d3ga/",target:"_blank",rel:"noopener noreferrer"},m=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143740.png",alt:"Overview",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Overview")],-1),g=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143918.png",alt:"Pipeline",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Pipeline")],-1),d=a("h3",{id:"abstract",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#abstract","aria-hidden":"true"},"#"),s(" Abstract")],-1),u=a("p",null,"我们提出了可驱动 3D 高斯数字人 (D3GA)，这是首个用 3DGS 渲染的人体三维可控模型。目前逼真的数字人在训练过程中需要精确的 3D 注册，在测试过程中需要密集的输入图像，或者两者兼而有之。基于神经辐射场的数字人在远程应用中也往往过于缓慢。本研究利用最近提出的 3DGS 技术，以密集配准的多视角视频作为输入，实时渲染逼真的人体。为了对这些基元进行变形，我们放弃了常用的 LBS 变形方法，而采用了经典的体积变形方法：笼式变形。鉴于它们的尺寸较小，我们用关节角度和关键点来驱动这些变形，这更适合通信应用。在使用相同的训练和测试数据时，我们对九个具有不同体形、衣服和动作的测试者进行了实验，结果比最先进的方法质量更高。",-1),_={href:"http://proceedings.mlr.press/v97/tan19a.html?ref=jina-ai-gmbh.ghost.io",target:"_blank",rel:"noopener noreferrer"},v={href:"https://openaccess.thecvf.com/content_CVPR_2020/html/Kirillov_PointRend_Image_Segmentation_As_Rendering_CVPR_2020_paper.html",target:"_blank",rel:"noopener noreferrer"},b=a("h2",{id:"gaussianavatar-towards-realistic-human-avatar-modeling-from-a-single-video-via-animatable-3d-gaussians",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gaussianavatar-towards-realistic-human-avatar-modeling-from-a-single-video-via-animatable-3d-gaussians","aria-hidden":"true"},"#"),s(" GaussianAvatar: Towards Realistic Human Avatar Modeling from a Single Video via Animatable 3D Gaussians")],-1),f={href:"https://huliangxiao.github.io/GaussianAvatar",target:"_blank",rel:"noopener noreferrer"},y=r('<p>CVPR 2024</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407051530107.png" alt="Overview" tabindex="0" loading="lazy"><figcaption>Overview</figcaption></figure><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407051531677.png" alt="Pipeline" tabindex="0" loading="lazy"><figcaption>Pipeline</figcaption></figure><h3 id="abstract-1" tabindex="-1"><a class="header-anchor" href="#abstract-1" aria-hidden="true">#</a> Abstract</h3><p>本文介绍的<strong>高斯数字人 (GaussianAvatar)</strong> 是一种高效的方法，可通过单个视频创建具有动态三维外观的逼真数字人。我们首先引入了可动画化的 3D 高斯来显式表示不同姿势和服装的人体。这种显式且可动画化的表现形式可以更高效、更一致地从 2D <strong>流形 (manifold)</strong> 中学习 3D 外观。本文的表示进一步增强了动态属性，以支持 pose-dependent 的外观建模，其中通过动态外观网络和可优化的特征张量可以学习 motion-to-appearance 的映射。此外，通过利用可微 motion condition，本文的方法可以在数字人建模过程中对 motion 和 appearance 进行联合优化，这有助于解决长期存在的单目环境下运动估计不准确的问题。GaussianAvatar 在公开数据集和我们收集的数据集上都得到了验证，证明了它在外观质量和渲染效率方面的卓越表现。</p>',5),x=a("a",{href:"Animatable-Gaussians.thml"},"Animatable Gaussians",-1),G={href:"https://openaccess.thecvf.com/content/ICCV2021/html/Ma_The_Power_of_Points_for_Modeling_Humans_in_Clothing_ICCV_2021_paper.html",target:"_blank",rel:"noopener noreferrer"},w=a("h2",{id:"ash-animatable-gaussian-splats-for-efficient-and-photoreal-human-rendering",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ash-animatable-gaussian-splats-for-efficient-and-photoreal-human-rendering","aria-hidden":"true"},"#"),s(" ASH: Animatable Gaussian Splats for Efficient and Photoreal Human Rendering")],-1),k={href:"https://vcai.mpi-inf.mpg.de/projects/ash/",target:"_blank",rel:"noopener noreferrer"},D=a("p",null,"CVPR 2024",-1),P=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407051701353.png",alt:"Overview",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Overview")],-1),z=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407051701447.png",alt:"Pipeline",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Pipeline")],-1),S=a("h2",{id:"abstract-2",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#abstract-2","aria-hidden":"true"},"#"),s(" Abstract")],-1),M=a("p",null,"实时渲染逼真、可控的数字人是计算机视觉和图形学的基石。虽然隐式神经渲染技术的最新进展为数字人带来了前所未有的逼真度，但实时性能大多只在静态场景中得到了验证。为了解决这个问题，本文提出了 ASH，一种可动画化的 3DGS 方法，用于实时逼真地渲染动态人体。我们将穿着衣服的人体参数化为可动画化的 3D 高斯，并将其有效地 splatting 到图像空间中，以生成最终的渲染效果。然而，在 3D 空间中天真地学习高斯参数对计算能力提出了严峻的挑战。相反，我们将高斯附加到可变形的角色模型上，并在 2D 纹理空间中学习它们的参数，这样就可以利用高效的 2D 卷积架构，轻松扩展所需的高斯数量。我们在姿态可控的数字人上对 ASH 与其他竞争方法进行了基准测试，结果表明本文的方法远远优于现有的实时方法，并显示出与离线方法相当甚至更好的效果。",-1),A=a("a",{href:"Animatable-Gaussians.thml"},"Animatable Gaussians",-1),R={href:"https://dl.acm.org/doi/abs/10.1145/3450626.3459749",target:"_blank",rel:"noopener noreferrer"},L=a("strong",null,"对偶四元数蒙皮 (Dual Quaternion skinning)",-1),V=a("h2",{id:"_3dgs-avatar-animatable-avatars-via-deformable-3d-gaussian-splatting",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3dgs-avatar-animatable-avatars-via-deformable-3d-gaussian-splatting","aria-hidden":"true"},"#"),s(" 3DGS-Avatar: Animatable Avatars via Deformable 3D Gaussian Splatting")],-1),C={href:"https://neuralbodies.github.io/3DGS-Avatar/index.html",target:"_blank",rel:"noopener noreferrer"},H=a("p",null,"CVPR 2024",-1),N=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407052119182.png",alt:"Overview",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Overview")],-1),F=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407052120368.png",alt:"Pipeline",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Pipeline")],-1),O=a("h3",{id:"abstract-3",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#abstract-3","aria-hidden":"true"},"#"),s(" Abstract")],-1),B=a("p",null,"本文介绍了一种利用 3DGS 从单目视频中创建可动画化人体的方法。基于神经辐射场 (NeRFs) 的现有方法可实现高质量的新视角/新姿势图像合成，但通常需要数天的训练，而且推理速度极慢。最近，业界探索了快速网格结构，用于高效训练穿衣人体。尽管训练速度极快，但这些方法只能勉强达到 15 FPS 左右的交互式渲染帧率。在本文中使用 3DGS 并学习非刚性变形网络来重建可动画的穿衣人体，该方法可在 30 分钟内完成训练，并以实时帧率 (50+ FPS) 进行渲染。鉴于 3DGS 的显式表示，可以进一步在高斯均值向量和协方差矩阵上引入了 as-isometric-aspossible 正则化，从而增强了模型对未见姿势的泛化能力。实验结果表明，与最先进的方法相比，本文的方法在通过单目输入创建动画人体方面取得了相当甚至更好的性能，同时在训练和推理方面分别快了 400 倍和 250 倍。",-1),I={href:"https://openaccess.thecvf.com/content/CVPR2022/html/Weng_HumanNeRF_Free-Viewpoint_Rendering_of_Moving_People_From_Monocular_Video_CVPR_2022_paper.html",target:"_blank",rel:"noopener noreferrer"},q=a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"script"},"Z"),a("mi",null,"p")])]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{Z}_p")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.9694em","vertical-align":"-0.2861em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.07944em"}},"Z"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0794em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"p")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.2861em"}},[a("span")])])])])])])])],-1),E=a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"script"},"G"),a("mi",null,"c")])]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{G}_c")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.0593em"}},"G"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0593em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"c")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])],-1),T=a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"script"},"G"),a("mi",null,"d")])]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{G}_d")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.0593em"}},"G"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3361em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0593em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"d")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])],-1),Z=a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"script"},"G"),a("mi",null,"d")])]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{G}_d")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.0593em"}},"G"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3361em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0593em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"d")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])],-1),K=a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"script"},"G"),a("mi",null,"o")])]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{G}_o")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.0593em"}},"G"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.0593em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"o")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])],-1),j={href:"https://openaccess.thecvf.com/content/CVPR2021/html/Peng_Neural_Body_Implicit_Neural_Representations_With_Structured_Latent_Codes_for_CVPR_2021_paper.html",target:"_blank",rel:"noopener noreferrer"},W=a("h2",{id:"gauhuman-articulated-gaussian-splatting-from-monocular-human-videos",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gauhuman-articulated-gaussian-splatting-from-monocular-human-videos","aria-hidden":"true"},"#"),s(" GauHuman: Articulated Gaussian Splatting from Monocular Human Videos")],-1),J={href:"https://skhu101.github.io/GauHuman/",target:"_blank",rel:"noopener noreferrer"},Q=a("p",null,"CVPR 2024",-1),U=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407060949697.png",alt:"Overview",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Overview")],-1),X=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407060949541.png",alt:"Pipeline",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Pipeline")],-1),Y=a("h3",{id:"abstract-4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#abstract-4","aria-hidden":"true"},"#"),s(" Abstract")],-1),$=a("p",null,"本文展示了 GauHuman，这是一种基于 3DGS 的人体模型，用于快速训练 (1∼2 分钟) 和实时渲染 (高达 189 FPS)，现有的基于 NeRF 的隐式表示建模框架需要几个小时的训练和秒级的渲染。具体来说，GauHuman 在标准空间中编码 3DGS，并使用线性混合蒙皮 (LBS) 将 3D 高斯从规范空间转换为 pose 空间，其中设计了有效的 pose 和 LBS refine 模块来学习 3D 人体的精细细节，这些模块的计算成本可以忽略不计。此外，为了实现 GauHuman 的快速优化，本文使用 3D 人类先验来初始化点云和优化 3D 高斯，同时通过 KL 散度引导拆分/克隆，以及一种新颖的合并操作来进一步加快速度。基于 ZJU_Mocap 和 MonoCap 数据集的广泛实验表明，GauHuman 在定量和定性上都达到了最快的训练和实时渲染速度。值得注意的是，在不牺牲渲染质量的情况下，GauHuman 可以使用 13k 个 3D 高斯快速建模 3D 人体。",-1),aa=a("blockquote",null,[a("p",null,"这篇文章主要强调的是训练时间短，渲染速度快。整体的 pipeline 是和以前基于 NeRF 的工作类似，简单概括就是用 3DGS 表示标准空间的人体，通过 LBS 将标准空间的人体变换到 pose 空间，然后用 3DGS 的光栅化器进行渲染，然后优化标准空间中的人体。高斯基元的蒙皮权重是通过一个 MLP 学习出来的，同时还用了一个 MLP 去 refine 估计出来的 pose。文章的主要创新点在 3DGS 的自适应密度控制的部分，用一个 KL 散度和人体先验去优化这个密度控制的策略，最终实现速度上的提升。")],-1);function sa(ta,ea){const t=i("ExternalLinkIcon");return l(),o("div",null,[h,a("p",null,[a("a",p,[s("项目地址"),e(t)])]),m,g,d,u,a("blockquote",null,[a("p",null,[s('整体流程如 Pipeline 所示，主要是想看这篇文章是分割出衣服的 —— "To create a cage per garment, we segment all images of a single time instance using an '),a("a",_,[s("EfficientNet"),e(t)]),s(" backbone with "),a("a",v,[s("PointRend"),e(t)]),s(' refinement."')])]),b,a("p",null,[a("a",f,[s("项目地址"),e(t)])]),y,a("blockquote",null,[a("p",null,[s("这篇工作的整体思路和 "),x,s(" 很相似，都是用 2D map 来表示 pose，然后直接通过网络学习出高斯的属性。本文的输入是单个视频，不同 pose下每个顶点的位置用 uv 图 (颜色表示具体的坐标) 表示，然后通过动态外观网络 (网络的架构和 "),a("a",G,[s("POP"),e(t)]),s(" 一样) 来学习出高斯的属性。本文还用 motion and appearance 联合优化的方法来缓解 SMPL pose 估计不准的问题。")])]),w,a("p",null,[a("a",k,[s("项目地址"),e(t)])]),D,P,z,S,M,a("blockquote",null,[a("p",null,[s("这篇工作的整体思路和 "),A,s(" 也很相似，输入的也是多视角的视频。首先需要通过 "),a("a",R,[s("Real-time deep dynamic characters"),e(t)]),s(" 生成一个可动画的人体 mesh 模版，根据这个模板可以生成 motion-aware 的 2D 纹理，然后基于 2D 纹理通过两个 2D 卷积神经网络 (几何网络和外观网络) 预测出高斯的属性，最后用"),L,s(" 将人体从标准空间变换到 pose 空间。")])]),V,a("p",null,[a("a",C,[s("项目地址"),e(t)])]),H,N,F,O,B,a("blockquote",null,[a("p",null,[s("从这篇工作中看到了很多之前 NeRF 相关工作的影子。和 "),a("a",I,[s("HumanNeRF"),e(t)]),s(" 一样，把人体的 pose 变换拆解成非刚性变换 (与 pose 相关的衣服的变形) 和由人体骨骼控制的刚性变换。首先用一个轻量级分层 pose 编码器对 SMPL 的 pose 和 shape 参数进行编码得到 pose 向量 "),q,s("，然后基于这个向量，用非刚体变换模块将标准空间中的高斯基元 "),E,s(" 变换成非刚体变换后的高斯基元 "),T,s("；再通过 LBS (蒙皮权重是通过一个 MLP 学出来的) 将 "),Z,s(" 变换到观测空间 "),K,s("。最后和 "),a("a",j,[s("Neural Body"),e(t)]),s(" 类似通过一个 MLP 直接预测出每个高斯基元的颜色。")])]),W,a("p",null,[a("a",J,[s("项目地址"),e(t)])]),Q,U,X,Y,$,aa])}const ia=n(c,[["render",sa],["__file","Skimming.html.vue"]]);export{ia as default};
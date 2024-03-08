import{_ as l,r as n,o as e,c as m,b as a,e as s,d as i,f as r}from"./app-9e52fb9b.js";const c={},p=a("h2",{id:"deepsd-automatic-deep-skinning-and-pose-space-deformation-for-3d-garment-animation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#deepsd-automatic-deep-skinning-and-pose-space-deformation-for-3d-garment-animation","aria-hidden":"true"},"#"),s(" DeePSD: Automatic Deep Skinning And Pose Space Deformation For 3D Garment Animation")],-1),h={href:"https://hbertiche.github.io/DeePSD/",target:"_blank",rel:"noopener noreferrer"},o=r('<p>ICCV 2021</p><h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h2><p>我们提出了一种通过深度学习解决服装动画问题的新方案。我们的研究成果可以为任意拓扑结构和几何复杂度的模板服装制作动画。近期的研究通过支撑人体模型 (support body model, 将服装编码为人体的拓扑的一部分)，实现了服装编辑、尺寸调整和动画。这个复杂的工程解决方案在可扩展性、适用性和兼容性方面受到影响。通过将范围限制在服装动画上，我们能够提出一个简单的模型，该模型可以为任何服装制作动画，不受其拓扑结构、顶点顺序或连接性的影响。我们提出的架构将服装动画三维模型映射为三维动画的标准格式 (混合权重和混合形状矩阵)，兼容所有图形引擎。我们还提出了一种方法，利用基于物理的无监督学习来补充监督学习，从而隐式地解决碰撞问题并提高布料质量。</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>虚拟着装人体动画传统的两种方法：</p><ul><li><strong>基于物理的模拟 (Physically Based Simulation, PBS)</strong></li><li><strong>线性混合蒙皮 (Linear Blend Skinning, LBS)</strong> 和<strong>姿态空间变形(Pose Space Deformation, PSD)</strong></li></ul><p>PBS 能够以巨大的计算成本为代价获得高度真实的布料动力学，LBS 和 PSD 则适用于计算资源有限或对实时性能有需求的项目。</p><p>基于深度学习的方法：</p><ul><li>非线形 PSD 模型，缺乏泛化能力。</li><li>将服装类型编码为身体的一部分，能够模拟多种服装，但是服装的动画效果局限于人体，对于一些宽松的服装或者裙子，动画效果不好。</li></ul><p>本文提出学习从模板服装空间到动画 3D 模型的空间的映射，具有很强的泛化能力，对于没有训练过的具有任意拓扑和顶点连接的服装，也有很好的效果。同时本文可以模拟整套服装 (而不是单件服装) 、多层不同分辨率的服装和具有服装几何细节的服装。并且只使用了一个简单且小型的神经网络。本文贡献如下：</p><ul><li>服装泛化性：对于没见过的服装，也可以进行动画模拟</li><li>兼容性：本文是预测混合权重和混合形状矩阵，兼容所有的图形引擎；</li><li>物理一致性：本文提出训练独立的模型分支，以便物理一致性损失和监督损失不会阻碍对方，这可以在尽可能利用数据的情况下，达到准无碰撞和布料一致的推理结果。</li><li>可解释性</li></ul><h2 id="methodology" tabindex="-1"><a class="header-anchor" href="#methodology" aria-hidden="true">#</a> Methodology</h2><p>给定一个动作序列中穿着在 SMPL 人体上的服装的 PBS 数据，定义</p>',13),g=a("p",{class:"katex-block"},[a("span",{class:"katex-display"},[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("semantics",null,[a("mtable",{width:"100%"},[a("mtr",null,[a("mtd",{width:"50%"}),a("mtd",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"S"),a("mo",null,"="),a("mo",{stretchy:"false"},"{"),a("mi",null,"X"),a("mo",{separator:"true"},","),a("mi",null,"Y"),a("mo",{stretchy:"false"},"}"),a("mo",{separator:"true"},","),a("mtext",null,"其中"),a("mi",null,"X"),a("mo",null,"="),a("mo",{stretchy:"false"},"{"),a("mi",{mathvariant:"bold"},"T"),a("mo",{separator:"true"},","),a("mi",{mathvariant:"bold"},"F"),a("mo",{separator:"true"},","),a("mi",null,"θ"),a("mo",{separator:"true"},","),a("mi",null,"β"),a("mo",{separator:"true"},","),a("mi",null,"g"),a("mo",{stretchy:"false"},"}"),a("mo",{separator:"true"},","),a("mi",null,"Y"),a("mo",null,"="),a("mo",{stretchy:"false"},"{"),a("msub",null,[a("mi",{mathvariant:"bold"},"V"),a("mrow",null,[a("mi",null,"P"),a("mi",null,"B"),a("mi",null,"S")])]),a("mo",{stretchy:"false"},"}")])]),a("mtd",{width:"50%"}),a("mtd",null,[a("mtext",null,"(1)")])])]),a("annotation",{encoding:"application/x-tex"}," \\mathcal{S}=\\{X,Y\\},其中X=\\{\\mathbf{T},\\mathbf{F},\\theta,\\beta,g\\},Y=\\{\\mathbf{V}_{PBS}\\} \\tag{1} ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"{"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),a("span",{class:"mclose"},"}"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord cjk_fallback"},"其中"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"{"),a("span",{class:"mord mathbf"},"T"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathbf"},"F"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),a("span",{class:"mclose"},"}"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"{"),a("span",{class:"mord"},[a("span",{class:"mord mathbf",style:{"margin-right":"0.01597em"}},"V"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3283em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.016em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05764em"}},"PBS")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mclose"},"}")]),a("span",{class:"tag"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord text"},[a("span",{class:"mord"},"("),a("span",{class:"mord"},[a("span",{class:"mord"},"1")]),a("span",{class:"mord"},")")])])])])])],-1),d=a("ul",null,[a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold"},"T")]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{T}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord mathbf"},"T")])])]),s(" 表示标准空间下模板服装的顶点")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold"},"F")]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{F}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord mathbf"},"F")])])]),s(" 表示服装的 mesh")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"θ")]),a("annotation",{encoding:"application/x-tex"},"\\theta")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ")])])]),s(" 表示姿态参数")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"β")]),a("annotation",{encoding:"application/x-tex"},"\\beta")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"β")])])]),s(" 表示体格参数")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"g")]),a("annotation",{encoding:"application/x-tex"},"g")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")])])]),s(" 表示性别")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"bold"},"V"),a("mrow",null,[a("mi",null,"P"),a("mi",null,"B"),a("mi",null,"S")])])]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{V}_{PBS}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8361em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathbf",style:{"margin-right":"0.01597em"}},"V"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3283em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.016em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05764em"}},"PBS")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])]),s(" 表示动画模拟后的服装顶点的位置")])],-1),u=a("p",null,[s("最终目的是训练一个网络 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"M")]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{M}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal"},"M")])])]),s("，该网络可以学习标准空间的服装模板映射到姿态空间时相应的混合权重和混合形状矩阵：")],-1),x=a("p",{class:"katex-block"},[a("span",{class:"katex-display"},[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("semantics",null,[a("mtable",{width:"100%"},[a("mtr",null,[a("mtd",{width:"50%"}),a("mtd",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"M"),a("mo",null,":"),a("mo",{stretchy:"false"},"{"),a("mi",{mathvariant:"bold"},"T"),a("mo",{separator:"true"},","),a("mi",{mathvariant:"bold"},"F"),a("mo",{stretchy:"false"},"}"),a("mo",null,"→"),a("mo",{stretchy:"false"},"{"),a("mi",{mathvariant:"bold"},"W"),a("mo",{separator:"true"},","),a("msub",null,[a("mi",{mathvariant:"bold"},"D"),a("mrow",null,[a("mi",null,"P"),a("mi",null,"S"),a("mi",null,"D")])]),a("mo",{stretchy:"false"},"}")])]),a("mtd",{width:"50%"}),a("mtd",null,[a("mtext",null,"(2)")])])]),a("annotation",{encoding:"application/x-tex"}," \\mathcal{M}:\\{\\mathbf{T},\\mathbf{F}\\}\\rarr\\{\\mathbf{W},\\mathbf{D}_{PSD}\\} \\tag{2} ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal"},"M"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"{"),a("span",{class:"mord mathbf"},"T"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathbf"},"F"),a("span",{class:"mclose"},"}"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"→"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"{"),a("span",{class:"mord mathbf",style:{"margin-right":"0.01597em"}},"W"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathbf"},"D"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3283em"}},[a("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05764em"}},"PS"),a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"D")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mclose"},"}")]),a("span",{class:"tag"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord text"},[a("span",{class:"mord"},"("),a("span",{class:"mord"},[a("span",{class:"mord"},"2")]),a("span",{class:"mord"},")")])])])])])],-1),y=a("ul",null,[a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold"},"T")]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{T}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord mathbf"},"T")])])]),s(" 表示标准空间下模板服装的顶点")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold"},"F")]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{F}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord mathbf"},"F")])])]),s(" 表示服装的 mesh")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold"},"W")]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{W}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord mathbf",style:{"margin-right":"0.01597em"}},"W")])])]),s(" 表示混合权重")]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"bold"},"D"),a("mrow",null,[a("mi",null,"P"),a("mi",null,"S"),a("mi",null,"D")])])]),a("annotation",{encoding:"application/x-tex"},"\\mathbf{D}_{PSD}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8361em","vertical-align":"-0.15em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathbf"},"D"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.3283em"}},[a("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05764em"}},"PS"),a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"D")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])])])])]),s(" 表示混合形状矩阵，其实就是 SMPL 中的表示姿态的 PCA 基矩阵 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"P")]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{P}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal",style:{"margin-right":"0.08222em"}},"P")])])])])],-1),b=a("h3",{id:"pbs-数据和物理一致性-pbs-data-and-physical-consistency",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pbs-数据和物理一致性-pbs-data-and-physical-consistency","aria-hidden":"true"},"#"),s(" PBS 数据和物理一致性 (PBS Data and Physical Consistency)")],-1),w=a("p",null,[s("从姿态空间到服装空间的映射是一个多值函数，不同的物理引擎、初始条件、动作速度、时间步长和积分器等会对相同 shape 和 pose 下的相同服装产生不同的模拟结果。所以用 PBS 数据训练是错误地把它映射为一个单值函数。如果样本有着相似的 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"X")]),a("annotation",{encoding:"application/x-tex"},"X")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),s(" 但是显著不同的 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"Y")]),a("annotation",{encoding:"application/x-tex"},"Y")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),s("，那么会影响网络的性能，最终导致网络收敛到平均顶点位置。")],-1);function k(f,v){const t=n("ExternalLinkIcon");return e(),m("div",null,[p,a("p",null,[a("a",h,[s("项目地址"),i(t)])]),o,g,d,u,x,y,b,w])}const _=l(c,[["render",k],["__file","DeePSD.html.vue"]]);export{_ as default};

import{_ as o,r as a,o as i,c as s,b as e,e as n,d as c}from"./app-c1e03e11.js";const r={},l=e("h2",{id:"dynamic-point-field",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dynamic-point-field","aria-hidden":"true"},"#"),n(" Dynamic Point Field")],-1),d={href:"https://sergeyprokudin.github.io/dpf/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"ICCV 2023",-1),_=e("figure",null,[e("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261143606.png",alt:"Overview",height:"400",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Overview")],-1),u=e("figure",null,[e("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202407060844480.png",alt:"Overview",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Overview")],-1),p=e("h3",{id:"abstract",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abstract","aria-hidden":"true"},"#"),n(" Abstract")],-1),m=e("p",null,"近年来，神经表面重建领域取得了重大进展。在广泛关注体积和隐式方法的同时，一些研究表明，显式图形基元 (如点云) 可以显著降低计算复杂度，同时不影响重建表面的质量。然而，人们较少关注用点云基元对动态表面建模。在这项工作中，我们提出了一种动态点云场模型，该模型结合了显式点云基元的表示优势和隐式形变网络优势，可对非刚性三维表面进行高效建模。通过使用显式表面，我们还可以轻松地将 as-isometric-as-possible 等成熟的约束条件纳入其中。虽然在完全无监督的情况下学习这种变形模型容易出现局部最优，但本文建议同时利用关键点动态等语义信息来指导学习。我们通过一个应用实例来演示我们的模型，即从三维扫描集合中创建一个富有表现力的可动画化的人体。在这里，以前的方法大多依赖于 LBS，这从根本上限制了此类模型在处理长裙等复杂布料外观时的表现力。",-1),g=e("blockquote",null,[e("p",null,"这篇文章主要是学习一个动态点云场，可以理解为学习一个基于点云的 PSD，要有 GT 的 mesh 才能学出点云表示的表面。")],-1);function f(b,v){const t=a("ExternalLinkIcon");return i(),s("div",null,[l,e("p",null,[e("a",d,[n("项目地址"),c(t)])]),h,_,u,p,m,g])}const y=o(r,[["render",f],["__file","Skimming.html.vue"]]);export{y as default};
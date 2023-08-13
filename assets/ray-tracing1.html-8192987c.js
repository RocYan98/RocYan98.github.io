import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as l,a as s,d as a}from"./app-45181478.js";const i={},m=l('<h1 id="光线追踪-基本原理" tabindex="-1"><a class="header-anchor" href="#光线追踪-基本原理" aria-hidden="true">#</a> 光线追踪（基本原理）</h1><h2 id="whitted-style-光线追踪-ray-tracing" tabindex="-1"><a class="header-anchor" href="#whitted-style-光线追踪-ray-tracing" aria-hidden="true">#</a> Whitted-Style 光线追踪（Ray Tracing）</h2><p>光线的定义：</p><ul><li>直线传播</li><li>光线之间不会碰撞</li><li>光线从光源发出，进入场景不断碰撞，最终到达眼睛</li></ul><h2 id="_1-光线投射-ray-casting" tabindex="-1"><a class="header-anchor" href="#_1-光线投射-ray-casting" aria-hidden="true">#</a> 1 光线投射（Ray Casting）</h2><p>对每一个pixel，从眼睛/相机发出一根光线，最终打到某一点，如果该点与物体相交，则表示能看到物体上的这个点。再让该点与光源作连线，如果没有遮挡则形成一条有效光路，否则为阴影。（这比shadow mapping更方便）</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/4zxrbq.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以利用Blinn-Phong模型对这个点进行局部光照模型计算，得到该像素的颜色，那么遍历投影平面上的所有像素就能得到一张完整的图像。但如果光线追踪仅仅是在Ray Casting就停止的话，那么它的效果与局部光照模型是一样的，因此我们还需要考虑反射、折射。</p><h2 id="_2-递归光线追踪-recursive-ray-tracing" tabindex="-1"><a class="header-anchor" href="#_2-递归光线追踪-recursive-ray-tracing" aria-hidden="true">#</a> 2 递归光线追踪（Recursive Ray Tracing）</h2><ul><li>primary ray：眼睛发出的光线</li><li>secondary ray：经过反射或折射的光线</li><li>shadow ray：交点到光源的连线</li></ul><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ee9mhh.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>递归有个终止条件，不可能无限递归下去</li><li>光线在每次反射或者折射之后都有能量损耗，具体的在之后会讲解</li><li>如果光线没有碰撞到物体则返回一个背景色</li></ul><h2 id="_3-射线方程-ray-equation" tabindex="-1"><a class="header-anchor" href="#_3-射线方程-ray-equation" aria-hidden="true">#</a> 3 射线方程（Ray Equation）</h2><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/f3bd6b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),p=s("p",null,[a("Ray经过t时刻到达点P可以表示为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"x"),s("mi",null,"p")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"y"),s("mi",null,"p")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"x"),s("mi",null,"p")]),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"o"),s("mi",null,"x")]),s("mo",null,"+"),s("mi",null,"t"),s("msub",null,[s("mi",null,"d"),s("mi",null,"x")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"o"),s("mi",null,"y")]),s("mo",null,"+"),s("mi",null,"t"),s("msub",null,[s("mi",null,"d"),s("mi",null,"y")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"o"),s("mi",null,"z")]),s("mo",null,"+"),s("mi",null,"t"),s("msub",null,[s("mi",null,"d"),s("mi",null,"z")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"P(x_p,y_p,x_p)=(o_x+td_x,o_y+td_y,o_z+td_z)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"o"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9805em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"d"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"o"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9805em","vertical-align":"-0.2861em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"d"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"o"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"d"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])]),a("，对于原公式中r(t)=o+td，r和o都是点，d是方向向量。")],-1),c=l('<h2 id="_4-光线与物体的交点" tabindex="-1"><a class="header-anchor" href="#_4-光线与物体的交点" aria-hidden="true">#</a> 4 光线与物体的交点</h2><h3 id="_4-1-隐式几何" tabindex="-1"><a class="header-anchor" href="#_4-1-隐式几何" aria-hidden="true">#</a> 4.1 隐式几何</h3><p>直接联立几何方程和射线方程，只取实数和正数作为结果</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/cw94zq.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-显式几何" tabindex="-1"><a class="header-anchor" href="#_4-2-显式几何" aria-hidden="true">#</a> 4.2 显式几何</h3><p>图形学中的模型通常由三角形的mesh组成，判断一条射线与显式曲面的交点，其实也就是计算光线与三角形面的交点。一个平面是由平面的法向量和平面上的一个点定义，可以通过下图的方程判断一个点是否在平面上。</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ivpyxu.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后再将射线方程代入平米方程即可解出t</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/7ddv40.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过上述方法求出结果后还要通过向量叉乘的方法判断该点是否在三角形内部，还可以通过下图的方法在求出t的同时判断是否在三角形内部</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/e1lvjb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11),r=s("p",null,[a("该方法是基于重心坐标，通过克莱姆法则求解线性方程。因为是基于重心坐标来求解，所以只要"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"b"),s("mn",null,"1")]),s("mo",null,"−"),s("msub",null,[s("mi",null,"b"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"1-b_1-b_2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(" 、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"b"),s("mn",null,"1")])]),s("annotation",{encoding:"application/x-tex"},"b_1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"b"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"b_2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("三个数都"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"∈"),s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\in[0,1]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])]),a("就可以知道该点是在三角形内部。")],-1),h=[m,p,c,r];function g(o,u){return n(),e("div",null,h)}const v=t(i,[["render",g],["__file","ray-tracing1.html.vue"]]);export{v as default};

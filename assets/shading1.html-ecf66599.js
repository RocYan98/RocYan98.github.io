import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as i,e as n,a as s,d as a}from"./app-45181478.js";const e={},c=n('<h1 id="着色-光照与基本着色模型" tabindex="-1"><a class="header-anchor" href="#着色-光照与基本着色模型" aria-hidden="true">#</a> 着色（光照与基本着色模型）</h1><p>着色：对不同物体应用不同的材质（不同的材质和光线的相互作用有不同的方法）</p><h2 id="布林·冯反射模型-blinn-phong-reflectance-model" tabindex="-1"><a class="header-anchor" href="#布林·冯反射模型-blinn-phong-reflectance-model" aria-hidden="true">#</a> 布林·冯反射模型（Blinn-Phong Reflectance Model）</h2><ul><li>Diffuse</li><li>Specular</li><li>Ambient</li></ul><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/bkf31c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>着色具有局部性，对着色的描述是一个点，v、l、n（法线）都是单位向量，shininess表示的是表面有多亮（不是指亮度）</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/arxpyi.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>暂时先不考虑阴影</p><h2 id="_1-漫反射" tabindex="-1"><a class="header-anchor" href="#_1-漫反射" aria-hidden="true">#</a> 1 漫反射</h2><p>漫反射后，光会朝着所有方向进行反色，因此对于物体表面的同一个点，在所有的观测角度看到的颜色应该是相同的。</p><h3 id="_1-2-兰伯特余弦定律" tabindex="-1"><a class="header-anchor" href="#_1-2-兰伯特余弦定律" aria-hidden="true">#</a> 1.2 兰伯特余弦定律</h3><p>对于任意一个着色点，它周围的单位面积能接收到的能量，是与光照方向l和着色点表面的法线方向n的余弦成正比的</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/pipsh7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-3-光照衰减" tabindex="-1"><a class="header-anchor" href="#_1-3-光照衰减" aria-hidden="true">#</a> 1.3 光照衰减</h3>',14),h=s("p",null,[a("点光源是向周围所有方向辐射出能量（即以点光源为球心辐射能量），能量集中在球壳上且能量是守恒的，因此当能量辐射到距离点光源越远的地方，球体的表面积就越大，单位面积的能量就越小。根据球的表面积公式："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mo",null,"="),s("mn",null,"4"),s("mi",null,"π"),s("msup",null,[s("mi",null,"r"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"S=4\\pi r^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a("可知，单位面积的能力是与半径的平方"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"r"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"r^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),a("成反比的。")],-1),r=s("figure",null,[s("img",{src:"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/s1lckp.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),o=s("p",null,[a("根据7.1.2能得出多少能量被着色点接收，根据7.1.3能得出多少能量能传播到着色点，最后再根据着色点的漫反射系数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"k"),s("mi",null,"d")])]),s("annotation",{encoding:"application/x-tex"},"k_d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"d")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("（即颜色的RGB值），就能得到漫反射公式（即多少能量能从着色点反射出去），可以看到漫反射与观测方向v没有任何关系")],-1),p=s("figure",null,[s("img",{src:"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/h7qie8.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),m=s("h2",{id:"_2-镜面反射",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-镜面反射","aria-hidden":"true"},"#"),a(" 2 镜面反射")],-1),g=s("p",null,"镜面反射与观测方向v有关，当观测方向v与镜面反射方向R越接近，则产生的高光也越亮",-1),d=s("figure",null,[s("img",{src:"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/t7uasa.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),u=s("p",null,[a("可以转换成计算半程向量h与法线n之间的远近来判断，因为高光通常是白色的，因此镜面反射系数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"k"),s("mi",null,"s")])]),s("annotation",{encoding:"application/x-tex"},"k_s")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0315em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"s")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("通常就是白色；布林·冯模型简化了7.1.2的部分，理论上来说任何反射都应该考虑有多少能量被着色点接收。")],-1),y=n('<figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ighhky.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为能看到高光的角度范围很小，因此需要指数p来限制角度，通常p在布林·冯模型中取100到200之间</p><p><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/xa8kyx.png" alt="" loading="lazy"><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hy8gx8.png" alt="" loading="lazy"></p><h2 id="_3-环境光" tabindex="-1"><a class="header-anchor" href="#_3-环境光" aria-hidden="true">#</a> 3 环境光</h2><p>布林·冯模型对于环境光是一个大胆的简化，从下图可以看出是一个常数，与光照方向l、法线n和观测方向v都无关。这只是一个近似值，如果要很精确的计算需要运用到全局光照的知识</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/aa4dge.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将漫反射、镜面反射和环境光相加，就能得到最后的布林·冯反射模型的结果</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hasdac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),f=[c,h,r,o,p,m,g,d,u,y];function x(_,z){return l(),i("div",null,f)}const k=t(e,[["render",x],["__file","shading1.html.vue"]]);export{k as default};

import{_ as e,r as t,o,c as r,b as h,e as a,d as c,w as d,f as n}from"./app-d622f1fe.js";const s={},g=n('<h1 id="着色-着色频率、图形管线、纹理映射" tabindex="-1"><a class="header-anchor" href="#着色-着色频率、图形管线、纹理映射" aria-hidden="true">#</a> 着色（着色频率、图形管线、纹理映射）</h1><h2 id="_1-着色频率" tabindex="-1"><a class="header-anchor" href="#_1-着色频率" aria-hidden="true">#</a> 1 着色频率</h2><p>下图分别对应平面着色、顶点着色和像素着色</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/oh57zq.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-1-平面着色-flat-shading" tabindex="-1"><a class="header-anchor" href="#_1-1-平面着色-flat-shading" aria-hidden="true">#</a> 1.1 平面着色（Flat Shading）</h3><p>求每个面的法向量并着色</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/1rx56r.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-2-顶点着色-gouraud-shading" tabindex="-1"><a class="header-anchor" href="#_1-2-顶点着色-gouraud-shading" aria-hidden="true">#</a> 1.2 顶点着色（Gouraud Shading）</h3><p>求每个顶点的法向量并着色</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/yqc32j.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>顶点的法线是顶点所关联的面的法线的加权（面积）平均</p><h3 id="_1-3-像素着色-phong-shading" tabindex="-1"><a class="header-anchor" href="#_1-3-像素着色-phong-shading" aria-hidden="true">#</a> 1.3 像素着色（Phong Shading）</h3><p>求每个像素的法向量并着色</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/t3c4xk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),p=n('<h3 id="_1-4-三种着色频率的对比" tabindex="-1"><a class="header-anchor" href="#_1-4-三种着色频率的对比" aria-hidden="true">#</a> 1.4 三种着色频率的对比</h3><p>当顶点数量够多时，平面着色也可以取得不错的效果</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/cgzoqk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-图形-实时渲染管线" tabindex="-1"><a class="header-anchor" href="#_2-图形-实时渲染管线" aria-hidden="true">#</a> 2 图形/实时渲染管线</h2><p>片段（Fragment）是 OpenGL 里的一个概念，可以理解为就是像素</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/h9omyt.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>GPU 就是专门负责执行图形渲染管线的设备</p><h2 id="_3-纹理映射" tabindex="-1"><a class="header-anchor" href="#_3-纹理映射" aria-hidden="true">#</a> 3 纹理映射</h2><p>纹理用来定义着色的时候每一个点的属性，纹理其实就是一张图，可以贴在物体表面。</p><p>物体的表面其实是 2D 的，任意 3D 物体上的任意一点都可以映射到 2D 平面之上。（映射的过程是美工的工作，我们默认是已知的）</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/qznmyd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-1-纹理坐标uv" tabindex="-1"><a class="header-anchor" href="#_3-1-纹理坐标uv" aria-hidden="true">#</a> 3.1 纹理坐标UV</h3><p>规定 U 和 V 的范围是 [0, 1]</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/hrsj0d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-2-特殊纹理tiled" tabindex="-1"><a class="header-anchor" href="#_3-2-特殊纹理tiled" aria-hidden="true">#</a> 3.2 特殊纹理tiled</h3><p>tile 纹理有上下左右重复拼接都是连续的特性，多用在贴在墙面或地板上。</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/o9a5a8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17);function l(u,f){const i=t("RouterLink");return o(),r("div",null,[g,h("p",null,[a("在求每个像素的法向量时需要用到"),c(i,{to:"/posts/CG/GAMES101/shading3.html"},{default:d(()=>[a("着色（插值、高级纹理映射）")]),_:1}),a("中的第 1 节重心插值（Barycentric interpolation）的方法")]),p])}const y=e(s,[["render",l],["__file","shading2.html.vue"]]);export{y as default};
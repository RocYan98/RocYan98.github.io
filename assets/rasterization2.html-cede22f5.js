import{_ as i,o as t,c as l,f as n,b as a,e as s}from"./app-c1e03e11.js";const e={},c=n('<h1 id="光栅化-抗锯齿与深度测试" tabindex="-1"><a class="header-anchor" href="#光栅化-抗锯齿与深度测试" aria-hidden="true">#</a> 光栅化（抗锯齿与深度测试）</h1><h2 id="_1-采样产生的问题" tabindex="-1"><a class="header-anchor" href="#_1-采样产生的问题" aria-hidden="true">#</a> 1 采样产生的问题</h2><p>Sampling Artifacts in CG：（这里的 Artifacts 是指一切看上去不太对的东西，可以翻译为瑕疵）</p><ul><li>锯齿（阶梯形状）</li><li>摩尔纹</li><li>车轮效应</li><li>...</li></ul><p>产生 Artifacts 的原因：信号变化的太快了（频率太高），但是采样速率太慢</p><h2 id="_2-走样" tabindex="-1"><a class="header-anchor" href="#_2-走样" aria-hidden="true">#</a> 2 走样</h2><p>对两个不同的函数进行采样，采样的结果完全相同，这就被称为走样（Aliases）</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208181.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-滤波" tabindex="-1"><a class="header-anchor" href="#_3-滤波" aria-hidden="true">#</a> 3 滤波</h2><p>滤波（Filtering）就是去掉一些特定的频率</p><p>傅里叶变换可以把一个函数从时域（自变量是时间，因变量是信号的变化）变为频域（自变量是频率，因变量是该频率信号的幅度）</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208205.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下图中，左图经过傅里叶变换可以变为右图（图像本身不带有时间信息，但空间上的位置也称为时域)，右图是频谱图。在频谱图中，中间部分是低频信息，越往外越高频，亮度表示该频率信号的多少，越亮越多。</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208313.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>频谱图的水平和垂直方向会有两根很亮的线，因为在分析一个信号时，会认为它是一个周期性重复的信号，但是图像并没有这种特征，因此会认为图片到达边界后又会重复，即在水平方向和竖直方向上有无数张同样的图片，在图片的边界上会产生剧烈的变化，因此会产生极其高的高频，<strong>分析图片时可以忽略这两条线</strong>。</p><h3 id="_3-1-高通滤波" tabindex="-1"><a class="header-anchor" href="#_3-1-高通滤波" aria-hidden="true">#</a> 3.1 高通滤波</h3><p>高通滤波（锐化）是指只有高频可以通过，因此在频域空间内完全抹掉低频信号，将结果还原成图像，形成左图。高频的东西在图像上表示的就是图像的边界。当某一图像的周围突然发生发生了变化，我们就认为他是边界。</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208112.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-2-低通滤波" tabindex="-1"><a class="header-anchor" href="#_3-2-低通滤波" aria-hidden="true">#</a> 3.2 低通滤波</h3><p>低通滤波（模糊）是指只有低频可以通过，就是把边界给去掉</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208771.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-卷积" tabindex="-1"><a class="header-anchor" href="#_4-卷积" aria-hidden="true">#</a> 4 卷积</h2><p>时域卷积定理：两个时间信号卷积的频谱等于它们频谱的乘积</p>',23),o=a("p",null,[s("频域卷积定理：两个时间信号乘积的频谱等于它们的频谱的卷积乘以 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mfrac",null,[a("mn",null,"1"),a("mrow",null,[a("mn",null,"2"),a("mi",null,"π")])])]),a("annotation",{encoding:"application/x-tex"},"\\frac{1}{2\\pi}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8451em"}},[a("span",{style:{top:"-2.655em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mtight"},"2"),a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"π")])])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.394em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mtight"},"1")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.345em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})])])])])],-1),p=n('<p>对图像进行模糊有两种方法</p><ul><li><p>方法一：拿到一幅图直接用一个卷积滤波器进行卷积操作</p></li><li><p>方法二：</p><ol><li><p>先傅里叶变换这幅图，将这幅图变到频谱图</p></li><li><p>将卷积滤波器变到频域上</p></li><li><p>将两者相乘，乘完后得到的频域的结果，将其逆傅里叶变换，变到时域上</p></li></ol></li></ul><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208604.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),r=a("p",null,[s("滤波器（滤波器其实就是卷积核的集合，如果只有一个通道，那么滤波器就是卷积核)要乘 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mfrac",null,[a("mn",null,"1"),a("mn",null,"9")])]),a("annotation",{encoding:"application/x-tex"},"\\frac1 9")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8451em"}},[a("span",{style:{top:"-2.655em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mtight"},"9")])])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.394em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mtight"},"1")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.345em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})])])])]),s(" 是为了不让图像的颜色发生变化，不然每个像素就会是原来这个像素周围九个像素的和，图像就会越滤波越明亮了。")],-1),h=n('<p>滤波器越大，滤波后的图片就越模糊，留下的频率就越低</p><p><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208338.png" alt="" loading="lazy"><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208638.png" alt="" loading="lazy"></p><h2 id="_5-走样的原因" tabindex="-1"><a class="header-anchor" href="#_5-走样的原因" aria-hidden="true">#</a> 5 走样的原因</h2><p>采样的间隔不同，会引起频谱不同间隔进行复制，混叠的部分就是走样</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208474.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-反走样" tabindex="-1"><a class="header-anchor" href="#_6-反走样" aria-hidden="true">#</a> 6 反走样</h2><p>在采样之前先进行低通滤波/模糊（顺序不能反，不能先采样再模糊），上图中混叠的部分（下图中被裁掉的部分）就是高频</p><p><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261208838.png" alt="" loading="lazy"><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209213.png" alt="" loading="lazy"></p><p>对三角形所覆盖的每个像素都进行卷积（求平均值)</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209716.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_6-1-多重采样抗锯齿-msaa-multisample-anti-aliasing" tabindex="-1"><a class="header-anchor" href="#_6-1-多重采样抗锯齿-msaa-multisample-anti-aliasing" aria-hidden="true">#</a> 6.1 多重采样抗锯齿 MSAA（Multisample Anti-Aliasing）</h3><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209367.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过更多的样本来近似三角形的覆盖率，并不是提高采样频率，而是把一个像素划分为几个小点，判断这些小点是否在三角形内，再把结果平均起来，就知道三角形覆盖了这个像素的百分之多少 。</p><p><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209822.png" alt="" loading="lazy"><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209670.png" alt="" loading="lazy"><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209407.png" alt="" loading="lazy"></p><p>MSAA并没有提高采样频率，而只是对图像进行模糊操作。</p><p>其他抗锯齿方案：</p><ul><li>快速近似抗锯齿 FXAA（Fast Approximate Anti-Aliasing）</li><li>TAA（Temporal Anti-Aliasing）</li></ul><h2 id="_7-深度测试" tabindex="-1"><a class="header-anchor" href="#_7-深度测试" aria-hidden="true">#</a> 7 深度测试</h2><p>使用深度缓存（Z-buffering）算法来进行深度测试。对于每次渲染，Z-buffering 都会同步生成两张图，一个是将所有像素的颜色存在 frame buffer 中，另一个是将所有像素的深度值（每个像素只存最小的深度值）存在 depth buffer 中，对于深度来说，假设深度永远是正的且越小越近，越大越远。</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209754.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',20),g=a("p",null,[s("具体算法如下（R 表示 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"∞")]),a("annotation",{encoding:"application/x-tex"},"\\infin")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord"},"∞")])])]),s(")：")],-1),m=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209741.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),d=a("figure",null,[a("img",{src:"https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261209153.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),u=[c,o,p,r,h,g,m,d];function f(y,b){return t(),l("div",null,u)}const _=i(e,[["render",f],["__file","rasterization2.html.vue"]]);export{_ as default};
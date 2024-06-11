import{_ as t,r as e,o,c,b as n,e as a,d as p,f as u}from"./app-ae947163.js";const i={},l=u(`<h1 id="维度" tabindex="-1"><a class="header-anchor" href="#维度" aria-hidden="true">#</a> 维度</h1><p>这里就简单讨论一下二维和三维，对于更高维的情况，比较难以想象<br><img src="http://img.rocyan.cn/blog/2024/04/66135375adad9.jpg" alt="" loading="lazy"><img src="http://img.rocyan.cn/blog/2024/04/66135378eec5c.jpg" alt="" loading="lazy"><img src="http://img.rocyan.cn/blog/2024/04/6613537ccb7fb.jpg" alt="" loading="lazy"></p><h2 id="二维" tabindex="-1"><a class="header-anchor" href="#二维" aria-hidden="true">#</a> 二维</h2><p>二维可以理解为就是矩阵，例如下面就创建了一个 2*3 的张量（矩阵），dim=0 表示行，dim=1 表示列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>dim<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 x.sum(dim=0)，直觉上会是觉得是把行相加，但是看结果反而是对列进行相加。有种比较好的理解方式，就是把 dim=0 这个维度进行挤压合并，最后剩下一行就是结果，同时 sum 后会降维，如果想要结果维度保持不变，需要加上 keepdim=True 这个参数。</p><figure><img src="http://img.rocyan.cn/blog/2024/04/6613538c1823d.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三维" tabindex="-1"><a class="header-anchor" href="#三维" aria-hidden="true">#</a> 三维</h2><p>三维可以理解为多个矩阵组成的矩阵组，dim=0 表示有几个矩阵，dim=1 表示每个矩阵的行，dim=2 表示每个矩阵的列。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
         <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
         <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
         <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>dim<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">3</span><span class="token punctuation">,</span>  <span class="token number">6</span><span class="token punctuation">,</span>  <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>dim<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>dim<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三维可能很难想象，直接动图</p><figure><img src="http://img.rocyan.cn/blog/2024/04/6613539255b54.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://img.rocyan.cn/blog/2024/04/661353965e8bb.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://img.rocyan.cn/blog/2024/04/66135399a3d9e.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,15),r={href:"https://zhuanlan.zhihu.com/p/48982978",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mathpretty.com/12065.html",target:"_blank",rel:"noopener noreferrer"};function d(m,b){const s=e("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",r,[a("笔记 | 什么是张量（tensor）& 深度学习"),p(s)])]),n("p",null,[n("a",k,[a("理解 PyTorch 中维度的概念"),p(s)])])])}const v=t(i,[["render",d],["__file","dimension.html.vue"]]);export{v as default};
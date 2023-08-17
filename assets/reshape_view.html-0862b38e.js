import{_ as e,r as p,o,c,b as n,e as a,d as t,f as i}from"./app-be3c67fd.js";const u={},r=i(`<h1 id="reshape-与-view-的区别" tabindex="-1"><a class="header-anchor" href="#reshape-与-view-的区别" aria-hidden="true">#</a> reshape 与 view 的区别</h1><p>要搞清楚 reshape 和 view 的区别首先需要了解 tensor 在 PyTorch 中是怎么存储的。</p><h2 id="_1-tensor-的存储方式" tabindex="-1"><a class="header-anchor" href="#_1-tensor-的存储方式" aria-hidden="true">#</a> 1 tensor 的存储方式</h2><p>tensor 是头信息区（tensor）和数据区（storage）分开存储的，tensor 的形状 size、步长 stride、数据的索引等信息都存储在头信息区，而数据是存放在数据区。可能多个 tensor 是共用一个 storage 的，类似于多个头节点指向同一片数据区。</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/nzolbv.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以通过<code>tensor.storage.data_ptr()</code>获取 tensor 的存储区的地址</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data_ptr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> b<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data_ptr<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出 True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不是用<code>tensor.data_ptr()</code>，这个函数返回的是该 tensor 第一个元素的地址，而不是存储区的地址。</p><h2 id="_2-tensor-的-stride-属性" tabindex="-1"><a class="header-anchor" href="#_2-tensor-的-stride-属性" aria-hidden="true">#</a> 2 tensor 的 stride 属性</h2><p>stride 是在指定维度（dim）中从一个元素跳到紧邻下一个元素所必需的步长。当没有参数传入时，stride() 返回由每个维度步长组成的一个元组。如果有整数参数传入，则返回该整数指定的维度的步长。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>stride<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出 (3, 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/2dgi29.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有了之前关于<a href="dimension">维度</a>的讲解，这里为什么 (3, 1) 应该比较好理解</p><h2 id="_3-视图-view-和副本" tabindex="-1"><a class="header-anchor" href="#_3-视图-view-和副本" aria-hidden="true">#</a> 3 视图（view）和副本</h2><p>视图其实可以理解为引用，通过视图可以访问和操作原有数据，并且不会产生数据的拷贝，但会影响到原始数据。</p><p>与之对应的就是副本，副本是一个数据的完整的拷贝，如果我们对副本进行修改，它不会影响到原始数据，因为物理内存不在同一位置。</p><h2 id="_4-torch-tensor-view" tabindex="-1"><a class="header-anchor" href="#_4-torch-tensor-view" aria-hidden="true">#</a> 4 torch.Tensor.view()</h2><p>官方文档里的描述：返回一个与原 tensor 数据相同但是形状不同的 tesnor，返回的 tensor 与原始的 tensor 共享存储区，且返回的 tensor 必须与原始的 tensor 的 size 和 stride 相兼容。（顺带提一句，PyTorch中<code>a.size()</code>和<code>a.shape</code>都能获取 a 的形状，<code>a.size(0)</code>和<code>a.shape[0]</code>都能获取 a 第 0 维的个数，<code>len(a)</code>是获取 a 第 0 维的个数）</p><p>怎么判断是否兼容呢？其实就是看 tensor 的 stride 是否与矩阵的形状相吻合。还是以之前那个矩阵举例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>stride<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment"># tensor([[4, 2, 5],</span>
<span class="token comment">#         [7, 6, 9]])</span>
<span class="token comment"># (3, 1)</span>

b <span class="token operator">=</span> a<span class="token punctuation">.</span>T
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>stride<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment"># tensor([[4, 7],</span>
<span class="token comment">#         [2, 6],</span>
<span class="token comment">#         [5, 9]])</span>
<span class="token comment"># (1, 3)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data_ptr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> b<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data_ptr<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出 True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b 是 a 的转置，b 的 stride 应该为 (2, 1) 而不是 (1, 3)，因此 b 就不兼容（或者称不满足连续性）。同时可以看出 b 其实与 a 还是共享同一个 storage，并没有真的改变数据的存放顺序，只是改变了 b 的 stride而已。</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/bpmkfy.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>只有在满足连续性的前提下，才能用 view() 来改变 tensor 的形状，否则就需要先使用 contiguous() 方法，这个方法会先复制一个副本，改变数据的存放顺序，使其满足连续性，之后就可以用 view() 改变形状。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a<span class="token punctuation">.</span>T
b <span class="token operator">=</span> b<span class="token punctuation">.</span>contiguous<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>stride<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出(2, 1)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data_ptr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> b<span class="token punctuation">.</span>storage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data_ptr<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出 False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-torch-reshape" tabindex="-1"><a class="header-anchor" href="#_5-torch-reshape" aria-hidden="true">#</a> 5 torch.reshape()</h2><p><code>a.reshape()</code>与 view 类似，是将原 tensor 转换成新的形状，只不过他更加强大，如果 tensor 是连续的，那就和<code>a.view()</code>是等价的；如果不不连续，则会复制一个副本再改变形状，即和<code>a.contiguous().view()</code>是等价的。</p><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6 总结</h2><p>view 只适合对满足连续性条件（contiguous）的 tensor 进行操作，而 reshape 同时还可以对不满足连续性条件的 tensor 进行操作，reshape 对满足连续性条件的 tensor，就相当于 view。</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,29),l={href:"https://pytorch.org/docs/stable/tensor_view.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://stackoverflow.com/questions/49643225/whats-the-difference-between-reshape-and-view-in-pytorch",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/Flag_ing/article/details/109129752",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jianshu.com/p/ebd7f6395bf4",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",l,[a("TENSOR VIEWS"),t(s)])]),n("p",null,[n("a",d,[a("What's the difference between reshape and view in pytorch?"),t(s)])]),n("p",null,[n("a",k,[a("PyTorch：view() 与 reshape() 区别详解"),t(s)])]),n("p",null,[n("a",h,[a("tensor的数据结构、storage()、stride()、storage_offset()"),t(s)])])])}const _=e(u,[["render",m],["__file","reshape_view.html.vue"]]);export{_ as default};

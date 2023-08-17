import{_ as i,o as a,c as n,f as l}from"./app-be3c67fd.js";const e={},t=l('<h1 id="回顾线性代数" tabindex="-1"><a class="header-anchor" href="#回顾线性代数" aria-hidden="true">#</a> 回顾线性代数</h1><h2 id="_1-向量的点乘" tabindex="-1"><a class="header-anchor" href="#_1-向量的点乘" aria-hidden="true">#</a> 1 向量的点乘</h2><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/u0m2j3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>应用</strong>：</p><ul><li>判断两个向量在方向上多么接近：向量的点积与它们夹角的余弦成正比，因此在聚光灯的效果计算中，可以根据点积来得到光照效果，如果点积越大，说明夹角越小，则物体离光照的轴线越近，光照越强。</li><li>分解一个向量</li><li>判断向量的方向性： <ul><li>点乘为 0 表示两个向量垂直</li><li>点乘为正数表示两个向量方向基本一致</li><li>点乘为负数表示两个向量方向基本相反</li></ul></li></ul><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/n7qhjl.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-向量的叉乘" tabindex="-1"><a class="header-anchor" href="#_2-向量的叉乘" aria-hidden="true">#</a> 2 向量的叉乘</h2><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/nalwri.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>叉乘的结果是一个同时垂直于这两个向量的向量（两个相同的向量叉乘的结果是零向量），通过右手螺旋定则判断叉乘的结果的方向，如 a×b=c 四指从 a 的方向向 b 的方向握紧，大拇指指向的就是 c 的方向 。</p><p>应用：</p><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/5ezfip.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>判断两个向量的左右：a×b 得到结果是和 z 轴同向，是正的，说明 b 在 a 的左侧</li><li>判断一个点是否在三角形内部（做光栅化，给三角形内部像素着色需要用到）： <ul><li>AB×AP &gt; 0 说明 P 在 AB 左侧</li><li>BC×BP &gt; 0 说明 P 在 BC 左侧</li><li>CA×CP &gt; 0 说明 P 在 CA 左侧</li><li>因此说明 P 落在三角形 ABC 内部</li></ul></li></ul><h2 id="_3-点乘和叉乘的矩阵形式" tabindex="-1"><a class="header-anchor" href="#_3-点乘和叉乘的矩阵形式" aria-hidden="true">#</a> 3 点乘和叉乘的矩阵形式</h2><figure><img src="http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/748ymq.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),c=[t];function o(r,s){return a(),n("div",null,c)}const h=i(e,[["render",o],["__file","linear-algebra.html.vue"]]);export{h as default};

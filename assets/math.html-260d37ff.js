const s=JSON.parse(`{"key":"v-714fa965","path":"/posts/paper/NeRF/math.html","title":"数学推导","lang":"zh-CN","frontmatter":{"date":"2023-10-19T00:00:00.000Z","category":"论文","tag":["Paper","Volume Rendering","NeRF"],"title":"数学推导","description":"吸收模型(Absorption Only) Fig. 1 如图 1 所示，粒子的半径为 rrr，投影面积 A=πr2A=\\\\pi r^2A=πr2，单位体积内粒子数为ρ\\\\rhoρ，底面积为 EEE，宽度为 ΔS\\\\Delta SΔS，光沿着垂直于底面的方向传播，LiL_iLi​ 表示入射光，LoL_oLo​ 表示出射光。圆柱体体积为 EΔsE\\\\Delta sEΔs，包含 N=ρEΔsN=\\\\rho E \\\\Delta sN=ρEΔs 个粒子，假设 Δs\\\\Delta sΔs足够小，且粒子没有重叠，那么这些粒子在底面上遮挡的总面积是 NA=ρAEΔsNA=\\\\rho AE\\\\Delta sNA=ρAEΔs。所以一束光通过这个圆柱体的时候，有 ρAEΔsE=ρAΔs\\\\frac{\\\\rho AE\\\\Delta s}{E}=\\\\rho A\\\\Delta sEρAEΔs​=ρAΔs 的概率会被遮挡，即出射光的辐射强度是入射光辐射强度的 ρAΔs\\\\rho A\\\\Delta sρAΔs 倍，数学上可以表示为：","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/NeRF/math.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"数学推导"}],["meta",{"property":"og:description","content":"吸收模型(Absorption Only) Fig. 1 如图 1 所示，粒子的半径为 rrr，投影面积 A=πr2A=\\\\pi r^2A=πr2，单位体积内粒子数为ρ\\\\rhoρ，底面积为 EEE，宽度为 ΔS\\\\Delta SΔS，光沿着垂直于底面的方向传播，LiL_iLi​ 表示入射光，LoL_oLo​ 表示出射光。圆柱体体积为 EΔsE\\\\Delta sEΔs，包含 N=ρEΔsN=\\\\rho E \\\\Delta sN=ρEΔs 个粒子，假设 Δs\\\\Delta sΔs足够小，且粒子没有重叠，那么这些粒子在底面上遮挡的总面积是 NA=ρAEΔsNA=\\\\rho AE\\\\Delta sNA=ρAEΔs。所以一束光通过这个圆柱体的时候，有 ρAEΔsE=ρAΔs\\\\frac{\\\\rho AE\\\\Delta s}{E}=\\\\rho A\\\\Delta sEρAEΔs​=ρAΔs 的概率会被遮挡，即出射光的辐射强度是入射光辐射强度的 ρAΔs\\\\rho A\\\\Delta sρAΔs 倍，数学上可以表示为："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T06:59:08.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"Volume Rendering"}],["meta",{"property":"article:tag","content":"NeRF"}],["meta",{"property":"article:published_time","content":"2023-10-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T06:59:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数学推导\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T06:59:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"吸收模型(Absorption Only)","slug":"吸收模型-absorption-only","link":"#吸收模型-absorption-only","children":[]},{"level":2,"title":"发射模型(Emission Only)","slug":"发射模型-emission-only","link":"#发射模型-emission-only","children":[]},{"level":2,"title":"吸收发射模型(Absorption Plus Emission)","slug":"吸收发射模型-absorption-plus-emission","link":"#吸收发射模型-absorption-plus-emission","children":[]}],"git":{"createdTime":1697698748000,"updatedTime":1697698748000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"posts/paper/NeRF/math.md","localizedDate":"2023年10月19日","excerpt":"<h2> 吸收模型(Absorption Only)</h2>\\n<figure><img src=\\"http://rocyan.oss-cn-hangzhou.aliyuncs.com/notes/ga8o4u.jpg\\" alt=\\"Fig. 1\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Fig. 1</figcaption></figure>\\n<p>如图 1 所示，粒子的半径为 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\\"application/x-tex\\">r</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">r</span></span></span></span>，投影面积 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">A=\\\\pi r^2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\">A</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">π</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">r</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span>，单位体积内粒子数为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\rho</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.625em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">ρ</span></span></span></span>，底面积为 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\\"application/x-tex\\">E</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">E</span></span></span></span>，宽度为 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi mathvariant=\\"normal\\">Δ</mi><mi>S</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\Delta S</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span></span></span></span>，光沿着垂直于底面的方向传播，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>L</mi><mi>i</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">L_i</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">L</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> 表示入射光，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>L</mi><mi>o</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">L_o</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">L</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1514em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">o</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> 表示出射光。圆柱体体积为 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>E</mi><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><annotation encoding=\\"application/x-tex\\">E\\\\Delta s</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">E</span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\">s</span></span></span></span>，包含 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>N</mi><mo>=</mo><mi>ρ</mi><mi>E</mi><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><annotation encoding=\\"application/x-tex\\">N=\\\\rho E \\\\Delta s</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8778em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">ρE</span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\">s</span></span></span></span> 个粒子，假设 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\Delta s</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\">s</span></span></span></span>足够小，且粒子没有重叠，那么这些粒子在底面上遮挡的总面积是 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>N</mi><mi>A</mi><mo>=</mo><mi>ρ</mi><mi>A</mi><mi>E</mi><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><annotation encoding=\\"application/x-tex\\">NA=\\\\rho AE\\\\Delta s</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"mord mathnormal\\">A</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8778em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">ρ</span><span class=\\"mord mathnormal\\">A</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">E</span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\">s</span></span></span></span>。所以一束光通过这个圆柱体的时候，有 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><mrow><mi>ρ</mi><mi>A</mi><mi>E</mi><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><mi>E</mi></mfrac><mo>=</mo><mi>ρ</mi><mi>A</mi><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{\\\\rho AE\\\\Delta s}{E}=\\\\rho A\\\\Delta s</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.2694em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.9244em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05764em;\\">E</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.4461em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">ρ</span><span class=\\"mord mathnormal mtight\\">A</span><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05764em;\\">E</span><span class=\\"mord mtight\\">Δ</span><span class=\\"mord mathnormal mtight\\">s</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8778em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">ρ</span><span class=\\"mord mathnormal\\">A</span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\">s</span></span></span></span> 的概率会被遮挡，即出射光的辐射强度是入射光辐射强度的 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>ρ</mi><mi>A</mi><mi mathvariant=\\"normal\\">Δ</mi><mi>s</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\rho A\\\\Delta s</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8778em;vertical-align:-0.1944em;\\"></span><span class=\\"mord mathnormal\\">ρ</span><span class=\\"mord mathnormal\\">A</span><span class=\\"mord\\">Δ</span><span class=\\"mord mathnormal\\">s</span></span></span></span> 倍，数学上可以表示为：</p>","autoDesc":true}`);export{s as data};

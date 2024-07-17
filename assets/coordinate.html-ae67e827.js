import{_ as a,r as n,o as d,c,b as t,e as r,d as o,f as i}from"./app-5ce7cc88.js";const s={},h=i('<p>在用各种渲染软件或者模型的时候，各自的坐标系都不统一，经常搞混淆，所以在这里总结一下。</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261203428.png" alt="Fig. 1: 常见的相机坐标系" tabindex="0" loading="lazy"><figcaption>Fig. 1: 常见的相机坐标系</figcaption></figure><p>上图 4 种都是右手坐标系，几个我遇到过的软件或者模型所对应的坐标系见下表：</p><table><thead><tr><th>相机坐标系</th><th>软件或模型</th></tr></thead><tbody><tr><td>RDF (Right Down Forward)</td><td>OpenCV、Colmap</td></tr><tr><td>DRB (Down Right Backward)</td><td>LLFF</td></tr><tr><td>RUB (Right Up Backward)</td><td>OpenGL、NeRF、MeshLab</td></tr><tr><td>LUF (Left Up Forward)</td><td>Pytorch3D</td></tr><tr><td>BUL (Backward Up Left)</td><td>SMPL (不确定)</td></tr></tbody></table><p>还有些就更奇怪了，比如常用的 blender 就是 z 轴朝上，有些是左手坐标系。找到的另一张图对常用渲染引擎的坐标系总结如下图：</p><figure><img src="https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261203613.jpeg" alt="Fig 2: 常用引擎的坐标系" tabindex="0" loading="lazy"><figcaption>Fig 2: 常用引擎的坐标系</figcaption></figure><p>左乘旋转矩阵通常表示相对于固定坐标系的旋转，‌右乘表示相对于当前坐标系的旋转，旋转方向为逆时针。</p><p>可以用这行代码快速得到绕 z轴逆时针转 90 度的旋转矩阵<code>pytorch3d.transforms.axis_angle_to_matrix(torch.tensor([0, 0, np.pi / 2]))</code></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',9),l={href:"https://zhuanlan.zhihu.com/p/593204605",target:"_blank",rel:"noopener noreferrer"},p={href:"https://discourse.threejs.org/t/whats-your-blender-to-threejs-workflow-to-handle-different-axis/33408",target:"_blank",rel:"noopener noreferrer"};function f(g,_){const e=n("ExternalLinkIcon");return d(),c("div",null,[h,t("p",null,[t("a",l,[r("NeRF代码解读-相机参数与坐标系变换"),o(e)])]),t("p",null,[t("a",p,[r("What’s your blender to threejs workflow to handle different axis?"),o(e)])])])}const b=a(s,[["render",f],["__file","coordinate.html.vue"]]);export{b as default};

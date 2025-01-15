const e=JSON.parse(`{"key":"v-28c430a6","path":"/posts/paper/representation/NeRF-preknowledge.html","title":"NeRF-前置知识","lang":"zh-CN","frontmatter":{"date":"2023-10-19T00:00:00.000Z","category":"论文","tag":["Paper","Representation","NeRF"],"title":"NeRF-前置知识","order":2,"description":"体渲染 (Volume Rendering) 简介 体渲染技术主要是为了渲染云、烟、雾和火等非刚性物体，这些物体可以看作是一堆聚积在一起的粒子，当光线穿过这些物体时，光中的粒子光子 (Photons) 会与这些物体内部的粒子发生作用，可能被吸收或发生散射等现象，同时这些物体中的粒子本身也可能会发光，这些物体中的粒子被称为参与介质 (Participating Media)。体渲染技术最主流的是在医疗领域，比如 CT 和核磁共振等来获取人体内部的医学数据。 体数据 离散化后的体数据可以看成是由 体素 (Vixel) 组成的三维数组，vixel 这个单词是由 volume + pixel 组成，可以理解成是体中的像素，是体的最小单位，每个体素是一个正方体，其中存储的是颜色和密度等信息。","head":[["meta",{"property":"og:url","content":"https://rocyan.top/posts/paper/representation/NeRF-preknowledge.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"NeRF-前置知识"}],["meta",{"property":"og:description","content":"体渲染 (Volume Rendering) 简介 体渲染技术主要是为了渲染云、烟、雾和火等非刚性物体，这些物体可以看作是一堆聚积在一起的粒子，当光线穿过这些物体时，光中的粒子光子 (Photons) 会与这些物体内部的粒子发生作用，可能被吸收或发生散射等现象，同时这些物体中的粒子本身也可能会发光，这些物体中的粒子被称为参与介质 (Participating Media)。体渲染技术最主流的是在医疗领域，比如 CT 和核磁共振等来获取人体内部的医学数据。 体数据 离散化后的体数据可以看成是由 体素 (Vixel) 组成的三维数组，vixel 这个单词是由 volume + pixel 组成，可以理解成是体中的像素，是体的最小单位，每个体素是一个正方体，其中存储的是颜色和密度等信息。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-23T03:42:04.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"Paper"}],["meta",{"property":"article:tag","content":"Representation"}],["meta",{"property":"article:tag","content":"NeRF"}],["meta",{"property":"article:published_time","content":"2023-10-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-23T03:42:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NeRF-前置知识\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-23T03:42:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan.top\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"体渲染 (Volume Rendering) 简介","slug":"体渲染-volume-rendering-简介","link":"#体渲染-volume-rendering-简介","children":[{"level":3,"title":"体数据","slug":"体数据","link":"#体数据","children":[]},{"level":3,"title":"光线投射 (Ray Casting) 算法","slug":"光线投射-ray-casting-算法","link":"#光线投射-ray-casting-算法","children":[]}]},{"level":2,"title":"体渲染模型","slug":"体渲染模型","link":"#体渲染模型","children":[{"level":3,"title":"吸收模型 (Absorption Only)","slug":"吸收模型-absorption-only","link":"#吸收模型-absorption-only","children":[]},{"level":3,"title":"放射模型 (Emission Only)","slug":"放射模型-emission-only","link":"#放射模型-emission-only","children":[]},{"level":3,"title":"吸收放射模型 (Absorption Plus Emission)","slug":"吸收放射模型-absorption-plus-emission","link":"#吸收放射模型-absorption-plus-emission","children":[]}]},{"level":2,"title":"NeRF 中的体渲染","slug":"nerf-中的体渲染","link":"#nerf-中的体渲染","children":[{"level":3,"title":"积分颜色方程","slug":"积分颜色方程","link":"#积分颜色方程","children":[]},{"level":3,"title":"离散颜色方程","slug":"离散颜色方程","link":"#离散颜色方程","children":[]}]},{"level":2,"title":"采样","slug":"采样","link":"#采样","children":[{"level":3,"title":"逆变换采样 (Inverse Transform Sampling)","slug":"逆变换采样-inverse-transform-sampling","link":"#逆变换采样-inverse-transform-sampling","children":[]},{"level":3,"title":"NeRF 中的分层采样 (Hierarchical Sampling)","slug":"nerf-中的分层采样-hierarchical-sampling","link":"#nerf-中的分层采样-hierarchical-sampling","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1720229997000,"updatedTime":1721706124000,"contributors":[{"name":"Yan","email":"Yan@roc.0.128.162.10.in-addr.arpa","commits":1},{"name":"Yan","email":"rocyan98@gmail.com","commits":1}]},"readingTime":{"minutes":12.93,"words":3880},"filePathRelative":"posts/paper/representation/NeRF-preknowledge.md","localizedDate":"2023年10月19日","excerpt":"<h2> 体渲染 (Volume Rendering) 简介</h2>\\n<p>体渲染技术主要是为了渲染云、烟、雾和火等非刚性物体，这些物体可以看作是一堆聚积在一起的粒子，当光线穿过这些物体时，光中的粒子<strong>光子 (Photons)</strong> 会与这些物体内部的粒子发生作用，可能被吸收或发生散射等现象，同时这些物体中的粒子本身也可能会发光，这些物体中的粒子被称为<strong>参与介质 (Participating Media)</strong>。体渲染技术最主流的是在医疗领域，比如 CT 和核磁共振等来获取人体内部的医学数据。</p>\\n<h3> 体数据</h3>\\n<p>离散化后的体数据可以看成是由 <strong>体素 (Vixel)</strong> 组成的三维数组，vixel 这个单词是由 volume + pixel 组成，可以理解成是体中的像素，是体的最小单位，每个体素是一个正方体，其中存储的是颜色和密度等信息。</p>","autoDesc":true}`);export{e as data};
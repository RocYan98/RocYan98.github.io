const n=JSON.parse(`{"key":"v-9f6f5cb0","path":"/posts/PAT/data-structure.html","title":"PAT 数据结构","lang":"zh-CN","frontmatter":{"date":"2023-08-03T00:00:00.000Z","tag":["PAT","Algorithm"],"category":"PAT","order":1,"description":"PAT 数据结构 PAT甲级题目整理 链表 做题时一般使用静态链表 struct Node { int data; Node* next; }; //静态链表 struct Node { int data; int next; } node[MAX]; Node* create(int arr[]) { Node* p, head, pre; head = new Node; head-&gt;next = NULL; pre = head; for (int i = 0; i &lt; n; ++i) { p = new Node; p-&gt;data = arr[i]; p-&gt;next = NULL; pre-&gt;next = p; pre = p; } return head; }","head":[["meta",{"property":"og:url","content":"https://rocyan98.github.io/posts/PAT/data-structure.html"}],["meta",{"property":"og:site_name","content":"Roc Yan's Blog"}],["meta",{"property":"og:title","content":"PAT 数据结构"}],["meta",{"property":"og:description","content":"PAT 数据结构 PAT甲级题目整理 链表 做题时一般使用静态链表 struct Node { int data; Node* next; }; //静态链表 struct Node { int data; int next; } node[MAX]; Node* create(int arr[]) { Node* p, head, pre; head = new Node; head-&gt;next = NULL; pre = head; for (int i = 0; i &lt; n; ++i) { p = new Node; p-&gt;data = arr[i]; p-&gt;next = NULL; pre-&gt;next = p; pre = p; } return head; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T08:25:48.000Z"}],["meta",{"property":"article:author","content":"Roc Yan"}],["meta",{"property":"article:tag","content":"PAT"}],["meta",{"property":"article:tag","content":"Algorithm"}],["meta",{"property":"article:published_time","content":"2023-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T08:25:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PAT 数据结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-15T08:25:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Roc Yan\\",\\"url\\":\\"https://rocyan98.github.io\\",\\"email\\":\\"qpyan23@m.fudan.edu.cn\\"}]}"]]},"headers":[{"level":2,"title":"PAT甲级题目整理","slug":"pat甲级题目整理","link":"#pat甲级题目整理","children":[]},{"level":2,"title":"链表","slug":"链表","link":"#链表","children":[]},{"level":2,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[{"level":3,"title":"二叉树的遍历","slug":"二叉树的遍历","link":"#二叉树的遍历","children":[]},{"level":3,"title":"平衡二叉树","slug":"平衡二叉树","link":"#平衡二叉树","children":[]},{"level":3,"title":"哈夫曼树","slug":"哈夫曼树","link":"#哈夫曼树","children":[]}]},{"level":2,"title":"并查集","slug":"并查集","link":"#并查集","children":[]},{"level":2,"title":"图","slug":"图","link":"#图","children":[{"level":3,"title":"DFS遍历图","slug":"dfs遍历图","link":"#dfs遍历图","children":[]},{"level":3,"title":"BFS遍历图","slug":"bfs遍历图","link":"#bfs遍历图","children":[]},{"level":3,"title":"Trie（字典树）","slug":"trie-字典树","link":"#trie-字典树","children":[]}]}],"git":{"createdTime":1691819321000,"updatedTime":1692087948000,"contributors":[{"name":"Yan","email":"rocyan98@gmail.com","commits":6}]},"readingTime":{"minutes":3.56,"words":1067},"filePathRelative":"posts/PAT/data-structure.md","localizedDate":"2023年8月3日","excerpt":"<h1> PAT 数据结构</h1>\\n<h2> <a href=\\"https://github.com/RocYan98/PAT\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PAT甲级题目整理</a></h2>\\n<h2> 链表</h2>\\n<ul>\\n<li>做题时一般使用静态链表</li>\\n</ul>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">Node</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> data<span class=\\"token punctuation\\">;</span>\\n    Node<span class=\\"token operator\\">*</span> next<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//静态链表</span>\\n<span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">Node</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> data<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> next<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span> node<span class=\\"token punctuation\\">[</span>MAX<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\nNode<span class=\\"token operator\\">*</span> <span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> arr<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    Node<span class=\\"token operator\\">*</span> p<span class=\\"token punctuation\\">,</span> head<span class=\\"token punctuation\\">,</span> pre<span class=\\"token punctuation\\">;</span>\\n    head <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> Node<span class=\\"token punctuation\\">;</span>\\n    head<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">;</span>\\n    pre <span class=\\"token operator\\">=</span> head<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">++</span>i<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        p <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> Node<span class=\\"token punctuation\\">;</span>\\n        p<span class=\\"token operator\\">-&gt;</span>data <span class=\\"token operator\\">=</span> arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        p<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">;</span>\\n        pre<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">;</span>\\n        pre <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> head<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
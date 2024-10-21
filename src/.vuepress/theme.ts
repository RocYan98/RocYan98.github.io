import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const host = "https://rocyan.top"

export default hopeTheme({
  hostname: host,

  author: {
    name: "Roc Yan",
    url: host,
    email: "qpyan23@m.fudan.edu.cn"
  },

  iconAssets: "//at.alicdn.com/t/c/font_4208645_izpnrybc15.css",

  logo: "/logo.png",

  // repo: "RocYan98/RocYan98.github.io",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  toc: true,

  footer: "<img src='https://rocyan.oss-cn-hangzhou.aliyuncs.com/blog/202406261201976.png' height='20' width='20'> <a href='https://beian.mps.gov.cn/#/query/webSearch?code=31011302007506'>沪公网安备31011302007506号</a>  <br> <a href='https://beian.miit.gov.cn'>浙ICP备2023046172号-1</a>",

  copyright: "Copyright © 2023-至今 Roc Yan <br> Total View Times: <span class=\"waline-pageview-count\" data-path=\"/\" />",

  displayFooter: true,

  pageInfo: ["Author", "Date", "PageView", "Word", "ReadingTime", "Category", "Tag"],

  blog: {
    avatar: "/logo.svg",
    name: "Roc Yan",
    description: "废物研究生",
    intro: "/intro.html",
    timeline: "未来已来，将至已至",
    articleInfo: ["Date", "Category", "Tag"],
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      GitHub: "https://github.com/RocYan98",
      Email: "mailto:qpyan23@m.fudan.edu.cn",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // Gitlab: "https://example.com",
      Gmail: "mailto:rocyan98@gmail.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  // 加密
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },
  editLink: false,
  contributors: false,

  // fullscreen: true,

  plugins: {
    blog: true,

    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://comment.rocyan.top",
      // requiredMeta: ['nick'],
      wordLimit: 200,
      // @ts-ignore
      search: false,
      emoji: [
          "https://unpkg.com/@waline/emojis@1.2.0/qq",
          "https://unpkg.com/@waline/emojis@1.2.0/tw",
      ],
      locale: {
        // @ts-ignore
        placeholder: "欢迎留言。",
        nick: "昵称（可匿名）",
        mail: "邮箱（可选）",
        link: "网址（可选）",
      },
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      // align: true,
      attrs: true,
      // chart: true,
      card: true,
      codetabs: true,
      container: true,
      // demo: true,
      // echarts: true,
      figure: true,
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      // mark: true,
      // mermaid: true,
      // playground: {
      //   presets: ['ts', 'vue']
      // },
      // presentation: {
      //   plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      // },
      // stylize: [
      //   {
      //     matcher: 'Recommended',
      //     replacer: ({ tag }) => {
      //       if (tag === 'em')
      //         return {
      //           tag: 'Badge',
      //           attrs: { type: 'tip' },
      //           content: 'Recommended'
      //         }
      //     }
      //   }
      // ],
      // sub: true,
      // sup: true,
      // tabs: true,
      tasklist: true,
      // vPre: true,
      // vuePlayground: true
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},
    {custom: true}
);
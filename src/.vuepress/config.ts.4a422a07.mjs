// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { getDirname, path } from "@vuepress/utils";
import { containerPlugin } from "@vuepress/plugin-container";

// src/.vuepress/containers/projects.ts
import yaml from "js-yaml";
var renderProjects = (tokens, idx) => {
  const { nesting: tokenNesting, info: tokenInfo } = tokens[idx];
  if (tokenNesting === 1) {
    let yamlStr = "";
    for (let i = idx; i < tokens.length; i++) {
      const { type, content, info } = tokens[i];
      if (type === "container_projects_close")
        break;
      if (!content)
        continue;
      if (type === "fence" && info === "yaml") {
        yamlStr = content;
      }
    }
    if (yamlStr) {
      const dataObj = yaml.load(yamlStr);
      let dataList = [];
      if (dataObj) {
        if (Array.isArray(dataObj)) {
          dataList = dataObj;
        }
      }
      if (dataList && dataList.length) {
        const getProjectItem = (project, index, type2) => {
          const isFriends = type2 === "friends";
          return `
              <a class="vp-project-card project${index % 9}"
                href="${project.link}"
                ${isFriends ? "" : 'rel="noopener noreferrer"'}
                target="_blank">
                <img src="${project.icon}"
                  alt="${project.name}" class="vp-project-image" />
                <div class="vp-project-name ${project.desc ? "" : "no-desc"}">
                  ${project.name}
                </div>
                ${project.desc ? `<div class="vp-project-desc">${project.desc}</div>` : ""}
              </a>
            `;
        };
        const getProjects = (projects, type2) => {
          let projectsStr = "";
          projects.map((project, index) => {
            projectsStr += getProjectItem(project, index, type2);
          });
          return projectsStr;
        };
        const type = tokenInfo.split(" ").pop();
        return `<div class="vp-project-panel">${getProjects(dataList, type)}`;
      }
    }
  } else {
    return "</div>";
  }
  return "";
};

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  // "/",
  // "/demo/",
  {
    text: "\u4E3B\u9875",
    icon: "home",
    link: "/"
  },
  {
    text: "\u65F6\u95F4\u8F74",
    icon: "time",
    link: "/timeline"
  },
  {
    text: "\u5206\u7C7B",
    icon: "categoryselected",
    prefix: "/posts/",
    children: [
      {
        text: "Python",
        icon: "python",
        link: "python/"
      },
      {
        text: "PyTorch",
        icon: "pytorch",
        link: "pytorch/"
      },
      {
        text: "\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66",
        icon: "threeD",
        link: "CG/"
      },
      {
        text: "\u8BBA\u6587",
        icon: "paper",
        link: "paper/"
      },
      {
        text: "PAT",
        icon: "code",
        link: "PAT/"
      },
      {
        text: "Linux",
        icon: "linux",
        link: "linux/"
      },
      {
        text: "\u5DE5\u5177",
        icon: "tool",
        link: "tool/"
      },
      {
        text: "\u5176\u4ED6",
        icon: "others",
        link: "others/"
      }
    ]
  },
  {
    text: "\u6807\u7B7E",
    icon: "tag",
    link: "/tag"
  },
  {
    text: "\u94FE\u63A5",
    icon: "link",
    link: "/links"
  },
  {
    text: "\u4E2A\u4EBA\u7B80\u4ECB",
    icon: "people",
    link: "/intro"
  }
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": [
    "",
    {
      text: "\u6587\u7AE0",
      icon: "article",
      prefix: "posts/",
      collapsible: true,
      children: [
        {
          text: "Python",
          icon: "python",
          prefix: "python/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "PyTorch",
          icon: "pytorch",
          prefix: "pytorch/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66",
          icon: "threeD",
          prefix: "CG/",
          collapsible: true,
          children: [
            {
              text: "GAMES101: \u73B0\u4EE3\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66\u5165\u95E8",
              prefix: "GAMES101/",
              collapsible: true,
              children: "structure"
            }
          ]
        },
        {
          text: "\u8BBA\u6587",
          icon: "paper",
          prefix: "paper/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "PAT",
          icon: "code",
          prefix: "PAT/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Linux",
          icon: "linux",
          prefix: "linux/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "\u5DE5\u5177",
          icon: "tool",
          prefix: "tool/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "\u5176\u4ED6",
          icon: "others",
          prefix: "others/",
          collapsible: true,
          children: "structure"
        }
      ]
    }
  ]
});

// src/.vuepress/theme.ts
var host = "https://rocyan.top";
var theme_default = hopeTheme(
  {
    hostname: host,
    author: {
      name: "Roc Yan",
      url: host,
      email: "qpyan23@m.fudan.edu.cn"
    },
    iconAssets: "//at.alicdn.com/t/c/font_4208645_4hed1h93oiq.css",
    logo: "/logo.png",
    // repo: "RocYan98/RocYan98.github.io",
    docsDir: "src",
    // navbar
    navbar: navbar_default,
    // sidebar
    sidebar: sidebar_default,
    toc: true,
    footer: "<img src='http://img.rocyan.cn/blog/2024/04/661355f2e3c78.png' height='20' width='20'> <a href='https://beian.mps.gov.cn/#/query/webSearch?code=31011302007506'>\u6CAA\u516C\u7F51\u5B89\u590731011302007506\u53F7</a>  <br> <a href='https://beian.miit.gov.cn'>\u6D59ICP\u59072023046172\u53F7-1</a>",
    copyright: 'Copyright \xA9 2023-\u81F3\u4ECA Roc Yan <br> Total View Times: <span class="waline-pageview-count" data-path="/" />',
    displayFooter: true,
    pageInfo: ["Author", "Date", "PageView", "Word", "ReadingTime", "Category", "Tag"],
    blog: {
      avatar: "/logo.svg",
      name: "Roc Yan",
      description: "\u5E9F\u7269\u7814\u7A76\u751F",
      intro: "/intro.html",
      timeline: "\u672A\u6765\u5DF2\u6765\uFF0C\u5C06\u81F3\u5DF2\u81F3",
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
        Gmail: "mailto:rocyan98@gmail.com"
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
      }
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
          "https://unpkg.com/@waline/emojis@1.2.0/tw"
        ],
        locale: {
          // @ts-ignore
          placeholder: "\u6B22\u8FCE\u7559\u8A00\u3002",
          nick: "\u6635\u79F0\uFF08\u53EF\u533F\u540D\uFF09",
          mail: "\u90AE\u7BB1\uFF08\u53EF\u9009\uFF09",
          link: "\u7F51\u5740\uFF08\u53EF\u9009\uFF09"
        }
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
        tasklist: true
        // vPre: true,
        // vuePlayground: true
      }
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
    }
  },
  { custom: true }
);

// src/.vuepress/config.ts
var __vite_injected_original_import_meta_url = "file:///Users/Yan/Desktop/vuepress/src/.vuepress/config.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Roc Yan's Blog",
  // title: "小严学习日记",
  description: "Roc Yan \u7684\u535A\u5BA2",
  head: [
    [
      "meta",
      { name: "baidu-site-verification", content: "codeva-hm7fDCFP6N" }
    ]
  ],
  plugins: [
    // 自定义容器插件
    containerPlugin({
      type: "projects",
      render: (tokens, idx) => {
        return renderProjects(tokens, idx);
      }
    }),
    docsearchPlugin({
      appId: "9LT4YWB8AI",
      apiKey: "233c7a1be8cbd53ef87fcfa105a4668d",
      indexName: "vuepress",
      locales: {
        "/": {
          placeholder: "\u641C\u7D22\u6587\u6863",
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                cancelButtonText: "\u53D6\u6D88",
                cancelButtonAriaLabel: "\u53D6\u6D88"
              },
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
                favoriteSearchesTitle: "\u6536\u85CF",
                removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED",
                searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2"
              }
            }
          }
        }
      }
    })
  ],
  theme: theme_default,
  alias: {
    "@theme-hope/modules/blog/components/InfoPanel": path.resolve(__dirname, "./components/InfoPanel.vue")
  }
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy9jb250YWluZXJzL3Byb2plY3RzLnRzIiwgInNyYy8udnVlcHJlc3MvdGhlbWUudHMiLCAic3JjLy52dWVwcmVzcy9uYXZiYXIudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2hcIjtcbmltcG9ydCB7IGdldERpcm5hbWUsIHBhdGggfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XG5pbXBvcnQgeyBjb250YWluZXJQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWNvbnRhaW5lcidcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9jb250YWluZXJzL3Byb2plY3RzJ1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbi8vIEB0cy1pZ25vcmVcbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJSb2MgWWFuJ3MgQmxvZ1wiLFxuICAvLyB0aXRsZTogXCJcdTVDMEZcdTRFMjVcdTVCNjZcdTRFNjBcdTY1RTVcdThCQjBcIixcbiAgZGVzY3JpcHRpb246IFwiUm9jIFlhbiBcdTc2ODRcdTUzNUFcdTVCQTJcIixcblxuICBoZWFkOiBbXG4gICAgW1xuICAgICAgJ21ldGEnLCB7bmFtZTogXCJiYWlkdS1zaXRlLXZlcmlmaWNhdGlvblwiLCBjb250ZW50OiBcImNvZGV2YS1obTdmRENGUDZOXCJ9LFxuICAgIF0sXG4gIF0sXG5cbiAgcGx1Z2luczogW1xuICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUJCOVx1NTY2OFx1NjNEMlx1NEVGNlxuICAgIGNvbnRhaW5lclBsdWdpbih7XG4gICAgICB0eXBlOiAncHJvamVjdHMnLFxuICAgICAgcmVuZGVyOiAodG9rZW5zLCBpZHgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlbmRlclByb2plY3RzKHRva2VucywgaWR4KVxuICAgICAgfVxuICAgIH0pLFxuICAgIGRvY3NlYXJjaFBsdWdpbih7XG4gICAgICBhcHBJZDogXCI5TFQ0WVdCOEFJXCIsXG4gICAgICBhcGlLZXk6IFwiMjMzYzdhMWJlOGNiZDUzZWY4N2ZjZmExMDVhNDY2OGRcIixcbiAgICAgIGluZGV4TmFtZTogXCJ2dWVwcmVzc1wiLFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICBcIi9cIjoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiXHU1M0Q2XHU2RDg4XCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiBcIlx1NTNENlx1NkQ4OFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6IFwiXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6IFwiXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogXCJcdTY1MzZcdTg1Q0ZcIixcbiAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogXCJcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogXCJcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiXHU1MjA3XHU2MzYyXCIsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGV4dDogXCJcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogXCJcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6IFwiXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHRoZW1lLFxuXG4gIGFsaWFzOiB7XG4gICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL2Jsb2cvY29tcG9uZW50cy9JbmZvUGFuZWxcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2NvbXBvbmVudHMvSW5mb1BhbmVsLnZ1ZVwiKSxcbiAgfVxuXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3MvY29udGFpbmVyc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3MvY29udGFpbmVycy9wcm9qZWN0cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9jb250YWluZXJzL3Byb2plY3RzLnRzXCI7Ly8gQHRzLWlnbm9yZVxuaW1wb3J0IHlhbWwgZnJvbSAnanMteWFtbCdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB0eXBlIFRva2VuIGZyb20gJ21hcmtkb3duLWl0L2xpYi90b2tlbi5qcydcblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcbiAgICBpY29uOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkZXNjOiBzdHJpbmdcbiAgICBsaW5rOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBcdTZFMzJcdTY3RDNcdTVCQjlcdTU2NjhcdTUyMTdcdTg4NjhcbiAqIEBwYXJhbSB0b2tlbnNcbiAqIEBwYXJhbSBpZHhcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0cyA9ICh0b2tlbnM6IFRva2VuW10sIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBuZXN0aW5nOiB0b2tlbk5lc3RpbmcsIGluZm86IHRva2VuSW5mbyB9ID0gdG9rZW5zW2lkeF1cbiAgICAvLyBcdTZFMzJcdTY3RDNcdTVGMDBcdTU5MzRcdTc2ODQgJzo6OicgXHU2ODA3XHU4QkIwXG4gICAgaWYgKHRva2VuTmVzdGluZyA9PT0gMSkge1xuICAgICAgICBsZXQgeWFtbFN0ciA9ICcnXG4gICAgICAgIGZvciAobGV0IGkgPSBpZHg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCwgaW5mbyB9ID0gdG9rZW5zW2ldXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcl9wcm9qZWN0c19jbG9zZScpIGJyZWFrXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZlbmNlJyAmJiBpbmZvID09PSAneWFtbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBcdTY2MkZcdTRFRTNcdTc4MDFcdTU3NTdcdTdDN0JcdTU3OEJcdUZGMENcdTVFNzZcdTRFMTRcdTY2MkZ5YW1sXHU0RUUzXHU3ODAxXG4gICAgICAgICAgICAgICAgeWFtbFN0ciA9IGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoeWFtbFN0cikge1xuICAgICAgICAgICAgY29uc3QgZGF0YU9iaiA9IHlhbWwubG9hZCh5YW1sU3RyKSAvLyBcdTVDMDZ5YW1sXHU1QjU3XHU3QjI2XHU0RTMyXHU4OUUzXHU2NzkwXHU2MjEwanNcdTVCRjlcdThDNjFcbiAgICAgICAgICAgIGxldCBkYXRhTGlzdDogUHJvamVjdFtdID0gW11cbiAgICAgICAgICAgIGlmIChkYXRhT2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gXHU2QjYzXHU3ODZFXHU4OUUzXHU2NzkwXHU1MUZBXHU2NTcwXHU2MzZFXHU1QkY5XHU4QzYxXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YU9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxpc3QgPSBkYXRhT2JqXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gXHU1MjI0XHU2NUFEXHU2NjJGXHU1NDI2XHU2NzA5XHU2NTcwXHU2MzZFXG4gICAgICAgICAgICBpZiAoZGF0YUxpc3QgJiYgZGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0UHJvamVjdEl0ZW0gPSAoXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IFByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU/OiBzdHJpbmdcbiAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGcmllbmRzID0gdHlwZSA9PT0gJ2ZyaWVuZHMnXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwidnAtcHJvamVjdC1jYXJkIHByb2plY3Qke2luZGV4ICUgOX1cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIke3Byb2plY3QubGlua31cIlxuICAgICAgICAgICAgICAgICR7aXNGcmllbmRzID8gJycgOiAncmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiJ31cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvamVjdC5pY29ufVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCIke3Byb2plY3QubmFtZX1cIiBjbGFzcz1cInZwLXByb2plY3QtaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2cC1wcm9qZWN0LW5hbWUgJHtwcm9qZWN0LmRlc2MgPyAnJyA6ICduby1kZXNjJ31cIj5cbiAgICAgICAgICAgICAgICAgICR7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmRlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwidnAtcHJvamVjdC1kZXNjXCI+JHtwcm9qZWN0LmRlc2N9PC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGdldFByb2plY3RzID0gKHByb2plY3RzOiBQcm9qZWN0W10sIHR5cGU/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RzU3RyID0gJydcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNTdHIgKz0gZ2V0UHJvamVjdEl0ZW0ocHJvamVjdCwgaW5kZXgsIHR5cGUpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c1N0clxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdG9rZW5JbmZvLnNwbGl0KCcgJykucG9wKClcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ2cC1wcm9qZWN0LXBhbmVsXCI+JHtnZXRQcm9qZWN0cyhkYXRhTGlzdCwgdHlwZSl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU2RTMyXHU2N0QzJzo6OicgXHU3RUQzXHU1QzNFXG4gICAgICAgIHJldHVybiAnPC9kaXY+J1xuICAgIH1cbiAgICByZXR1cm4gJydcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuXG5jb25zdCBob3N0ID0gXCJodHRwczovL3JvY3lhbi50b3BcIlxuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogaG9zdCxcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIlJvYyBZYW5cIixcbiAgICB1cmw6IGhvc3QsXG4gICAgZW1haWw6IFwicXB5YW4yM0BtLmZ1ZGFuLmVkdS5jblwiXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogXCIvL2F0LmFsaWNkbi5jb20vdC9jL2ZvbnRfNDIwODY0NV80aGVkMWg5M29pcS5jc3NcIixcblxuICBsb2dvOiBcIi9sb2dvLnBuZ1wiLFxuXG4gIC8vIHJlcG86IFwiUm9jWWFuOTgvUm9jWWFuOTguZ2l0aHViLmlvXCIsXG5cbiAgZG9jc0RpcjogXCJzcmNcIixcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyLFxuXG4gIC8vIHNpZGViYXJcbiAgc2lkZWJhcixcblxuICB0b2M6IHRydWUsXG5cbiAgZm9vdGVyOiBcIjxpbWcgc3JjPSdodHRwOi8vaW1nLnJvY3lhbi5jbi9ibG9nLzIwMjQvMDQvNjYxMzU1ZjJlM2M3OC5wbmcnIGhlaWdodD0nMjAnIHdpZHRoPScyMCc+IDxhIGhyZWY9J2h0dHBzOi8vYmVpYW4ubXBzLmdvdi5jbi8jL3F1ZXJ5L3dlYlNlYXJjaD9jb2RlPTMxMDExMzAyMDA3NTA2Jz5cdTZDQUFcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDczMTAxMTMwMjAwNzUwNlx1NTNGNzwvYT4gIDxicj4gPGEgaHJlZj0naHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbic+XHU2RDU5SUNQXHU1OTA3MjAyMzA0NjE3Mlx1NTNGNy0xPC9hPlwiLFxuXG4gIGNvcHlyaWdodDogXCJDb3B5cmlnaHQgXHUwMEE5IDIwMjMtXHU4MUYzXHU0RUNBIFJvYyBZYW4gPGJyPiBUb3RhbCBWaWV3IFRpbWVzOiA8c3BhbiBjbGFzcz1cXFwid2FsaW5lLXBhZ2V2aWV3LWNvdW50XFxcIiBkYXRhLXBhdGg9XFxcIi9cXFwiIC8+XCIsXG5cbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICBwYWdlSW5mbzogW1wiQXV0aG9yXCIsIFwiRGF0ZVwiLCBcIlBhZ2VWaWV3XCIsIFwiV29yZFwiLCBcIlJlYWRpbmdUaW1lXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUYWdcIl0sXG5cbiAgYmxvZzoge1xuICAgIGF2YXRhcjogXCIvbG9nby5zdmdcIixcbiAgICBuYW1lOiBcIlJvYyBZYW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJcdTVFOUZcdTcyNjlcdTc4MTRcdTdBNzZcdTc1MUZcIixcbiAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxuICAgIHRpbWVsaW5lOiBcIlx1NjcyQVx1Njc2NVx1NURGMlx1Njc2NVx1RkYwQ1x1NUMwNlx1ODFGM1x1NURGMlx1ODFGM1wiLFxuICAgIGFydGljbGVJbmZvOiBbXCJEYXRlXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUYWdcIl0sXG4gICAgbWVkaWFzOiB7XG4gICAgICAvLyBCYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBCaWxpQmlsaTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL1JvY1lhbjk4XCIsXG4gICAgICBFbWFpbDogXCJtYWlsdG86cXB5YW4yM0BtLmZ1ZGFuLmVkdS5jblwiLFxuICAgICAgLy8gRXZlcm5vdGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRmFjZWJvb2s6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEdpdGVlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEdpdGxhYjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86cm9jeWFuOThAZ21haWwuY29tXCIsXG4gICAgICAvLyBJbnN0YWdyYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGFyazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBMaW5lczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBMaW5rZWRpbjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBQaW50ZXJlc3Q6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUG9ja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFFROiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFF6b25lOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFJlZGRpdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBSc3M6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gU3RlYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gVHdpdHRlcjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBXZWNoYXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gV2VpYm86IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gV2hhdHNhcHA6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gWW91dHViZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBaaGlodTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgfSxcbiAgfSxcblxuICAvLyBcdTUyQTBcdTVCQzZcbiAgLy8gZW5jcnlwdDoge1xuICAvLyAgIGNvbmZpZzoge1xuICAvLyAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgLy8gICB9LFxuICAvLyB9LFxuXG4gIC8vIHBhZ2UgbWV0YVxuICAvLyBtZXRhTG9jYWxlczoge1xuICAvLyAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gIC8vIH0sXG4gIGVkaXRMaW5rOiBmYWxzZSxcbiAgY29udHJpYnV0b3JzOiBmYWxzZSxcblxuICAvLyBmdWxsc2NyZWVuOiB0cnVlLFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuXG4gICAgY29tbWVudDoge1xuICAgICAgLy8gWW91IHNob3VsZCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZVxuICAgICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXG4gICAgICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly9jb21tZW50LnJvY3lhbi50b3BcIixcbiAgICAgIC8vIHJlcXVpcmVkTWV0YTogWyduaWNrJ10sXG4gICAgICB3b3JkTGltaXQ6IDIwMCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHNlYXJjaDogZmFsc2UsXG4gICAgICBlbW9qaTogW1xuICAgICAgICAgIFwiaHR0cHM6Ly91bnBrZy5jb20vQHdhbGluZS9lbW9qaXNAMS4yLjAvcXFcIixcbiAgICAgICAgICBcImh0dHBzOi8vdW5wa2cuY29tL0B3YWxpbmUvZW1vamlzQDEuMi4wL3R3XCIsXG4gICAgICBdLFxuICAgICAgbG9jYWxlOiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2QjIyXHU4RkNFXHU3NTU5XHU4QTAwXHUzMDAyXCIsXG4gICAgICAgIG5pY2s6IFwiXHU2NjM1XHU3OUYwXHVGRjA4XHU1M0VGXHU1MzNGXHU1NDBEXHVGRjA5XCIsXG4gICAgICAgIG1haWw6IFwiXHU5MEFFXHU3QkIxXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5XCIsXG4gICAgICAgIGxpbms6IFwiXHU3RjUxXHU1NzQwXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5XCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBhbGwgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgLy8gYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuICAgICAgY2FyZDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgLy8gZGVtbzogdHJ1ZSxcbiAgICAgIC8vIGVjaGFydHM6IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICAvLyBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICAvLyBtYXJrOiB0cnVlLFxuICAgICAgLy8gbWVybWFpZDogdHJ1ZSxcbiAgICAgIC8vIHBsYXlncm91bmQ6IHtcbiAgICAgIC8vICAgcHJlc2V0czogWyd0cycsICd2dWUnXVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHByZXNlbnRhdGlvbjoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbJ2hpZ2hsaWdodCcsICdtYXRoJywgJ3NlYXJjaCcsICdub3RlcycsICd6b29tJ11cbiAgICAgIC8vIH0sXG4gICAgICAvLyBzdHlsaXplOiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBtYXRjaGVyOiAnUmVjb21tZW5kZWQnLFxuICAgICAgLy8gICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgLy8gICAgICAgaWYgKHRhZyA9PT0gJ2VtJylcbiAgICAgIC8vICAgICAgICAgcmV0dXJuIHtcbiAgICAgIC8vICAgICAgICAgICB0YWc6ICdCYWRnZScsXG4gICAgICAvLyAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogJ3RpcCcgfSxcbiAgICAgIC8vICAgICAgICAgICBjb250ZW50OiAnUmVjb21tZW5kZWQnXG4gICAgICAvLyAgICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF0sXG4gICAgICAvLyBzdWI6IHRydWUsXG4gICAgICAvLyBzdXA6IHRydWUsXG4gICAgICAvLyB0YWJzOiB0cnVlLFxuICAgICAgdGFza2xpc3Q6IHRydWUsXG4gICAgICAvLyB2UHJlOiB0cnVlLFxuICAgICAgLy8gdnVlUGxheWdyb3VuZDogdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBQV0FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSxcbiAgICB7Y3VzdG9tOiB0cnVlfVxuKTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcbiAgLy8gXCIvXCIsXG4gIC8vIFwiL2RlbW8vXCIsXG4gIHtcbiAgICB0ZXh0OiBcIlx1NEUzQlx1OTg3NVwiLFxuICAgIGljb246IFwiaG9tZVwiLFxuICAgIGxpbms6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTY1RjZcdTk1RjRcdThGNzRcIixcbiAgICBpY29uOiBcInRpbWVcIixcbiAgICBsaW5rOiBcIi90aW1lbGluZVwiXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTIwNlx1N0M3QlwiLFxuICAgIGljb246IFwiY2F0ZWdvcnlzZWxlY3RlZFwiLFxuICAgIHByZWZpeDogXCIvcG9zdHMvXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJQeXRob25cIixcbiAgICAgICAgaWNvbjogXCJweXRob25cIixcbiAgICAgICAgbGluazogXCJweXRob24vXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlB5VG9yY2hcIixcbiAgICAgICAgaWNvbjogXCJweXRvcmNoXCIsXG4gICAgICAgIGxpbms6IFwicHl0b3JjaC9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU1NkZFXHU1RjYyXHU1QjY2XCIsXG4gICAgICAgIGljb246IFwidGhyZWVEXCIsXG4gICAgICAgIGxpbms6IFwiQ0cvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1OEJCQVx1NjU4N1wiLFxuICAgICAgICBpY29uOiBcInBhcGVyXCIsXG4gICAgICAgIGxpbms6IFwicGFwZXIvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlBBVFwiLFxuICAgICAgICBpY29uOiBcImNvZGVcIixcbiAgICAgICAgbGluazogXCJQQVQvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkxpbnV4XCIsXG4gICAgICAgIGljb246IFwibGludXhcIixcbiAgICAgICAgbGluazogXCJsaW51eC9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1REU1XHU1MTc3XCIsXG4gICAgICAgIGljb246IFwidG9vbFwiLFxuICAgICAgICBsaW5rOiBcInRvb2wvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTE3Nlx1NEVENlwiLFxuICAgICAgICBpY29uOiBcIm90aGVyc1wiLFxuICAgICAgICBsaW5rOiBcIm90aGVycy9cIixcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTY4MDdcdTdCN0VcIixcbiAgICBpY29uOiBcInRhZ1wiLFxuICAgIGxpbms6IFwiL3RhZ1wiXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1OTRGRVx1NjNBNVwiLFxuICAgIGljb246IFwibGlua1wiLFxuICAgIGxpbms6IFwiL2xpbmtzXCJcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU0RTJBXHU0RUJBXHU3QjgwXHU0RUNCXCIsXG4gICAgaWNvbjogXCJwZW9wbGVcIixcbiAgICBsaW5rOiBcIi9pbnRyb1wiXG4gIH1cbiAgLy8ge1xuICAvLyAgIHRleHQ6IFwiXHU1MzVBXHU2NTg3XCIsXG4gIC8vICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgcHJlZml4OiBcIi9wb3N0cy9cIixcbiAgLy8gICBjaGlsZHJlbjogW1xuICAvLyAgICAge1xuICAvLyAgICAgICB0ZXh0OiBcIlx1ODJGOVx1Njc5Q1wiLFxuICAvLyAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgLy8gICAgICAgcHJlZml4OiBcImFwcGxlL1wiLFxuICAvLyAgICAgICBjaGlsZHJlbjogW1xuICAvLyAgICAgICAgIHsgdGV4dDogXCJcdTgyRjlcdTY3OUMxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxuICAvLyAgICAgICAgIHsgdGV4dDogXCJcdTgyRjlcdTY3OUMyXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjJcIiB9LFxuICAvLyAgICAgICAgIFwiM1wiLFxuICAvLyAgICAgICAgIFwiNFwiLFxuICAvLyAgICAgICBdLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdGV4dDogXCJcdTk5OTlcdTg1NDlcIixcbiAgLy8gICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgICAgIHByZWZpeDogXCJiYW5hbmEvXCIsXG4gIC8vICAgICAgIGNoaWxkcmVuOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgdGV4dDogXCJcdTk5OTlcdTg1NDkgMVwiLFxuICAvLyAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgICAgICAgICBsaW5rOiBcIjFcIixcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5IDJcIixcbiAgLy8gICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAvLyAgICAgICAgICAgbGluazogXCIyXCIsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBcIjNcIixcbiAgLy8gICAgICAgICBcIjRcIixcbiAgLy8gICAgICAgXSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7IHRleHQ6IFwiXHU2QTMxXHU2ODQzXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImNoZXJyeVwiIH0sXG4gIC8vICAgICB7IHRleHQ6IFwiXHU3MDZCXHU5Rjk5XHU2NzlDXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcbiAgLy8gICAgIFwidG9tYXRvXCIsXG4gIC8vICAgICBcInN0cmF3YmVycnlcIixcbiAgLy8gICBdLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGV4dDogXCJWMiBcdTY1ODdcdTY4NjNcIixcbiAgLy8gICBpY29uOiBcImJvb2tcIixcbiAgLy8gICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy96aC9cIixcbiAgLy8gfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHtzaWRlYmFyfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHthcnJheVNpZGViYXJ9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIoe1xuICAgIFwiL1wiOiBbXG4gICAgICAgIFwiXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXG4gICAgICAgICAgICBpY29uOiBcImFydGljbGVcIixcbiAgICAgICAgICAgIHByZWZpeDogXCJwb3N0cy9cIixcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHl0aG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwicHl0aG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJweXRob24vXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlB5VG9yY2hcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJweXRvcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJweXRvcmNoL1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTU2RkVcdTVGNjJcdTVCNjZcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ0aHJlZURcIixcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkNHL1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkdBTUVTMTAxOiBcdTczQjBcdTRFRTNcdThCQTFcdTdCOTdcdTY3M0FcdTU2RkVcdTVGNjJcdTVCNjZcdTUxNjVcdTk1RThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiR0FNRVMxMDEvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OEJCQVx1NjU4N1wiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcInBhcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJwYXBlci9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUEFUXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiUEFUL1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJMaW51eFwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImxpbnV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJsaW51eC9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1REU1XHU1MTc3XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwidG9vbFwiLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwidG9vbC9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1MTc2XHU0RUQ2XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwib3RoZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJvdGhlcnMvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVMsU0FBUyx3QkFBd0I7QUFDcFUsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxZQUFZLFlBQVk7QUFDakMsU0FBUyx1QkFBdUI7OztBQ0ZoQyxPQUFPLFVBQVU7QUFpQlYsSUFBTSxpQkFBaUIsQ0FBQyxRQUFpQixRQUFnQjtBQUM1RCxRQUFNLEVBQUUsU0FBUyxjQUFjLE1BQU0sVUFBVSxJQUFJLE9BQU8sR0FBRztBQUU3RCxNQUFJLGlCQUFpQixHQUFHO0FBQ3BCLFFBQUksVUFBVTtBQUNkLGFBQVMsSUFBSSxLQUFLLElBQUksT0FBTyxRQUFRLEtBQUs7QUFDdEMsWUFBTSxFQUFFLE1BQU0sU0FBUyxLQUFLLElBQUksT0FBTyxDQUFDO0FBQ3hDLFVBQUksU0FBUztBQUE0QjtBQUN6QyxVQUFJLENBQUM7QUFBUztBQUNkLFVBQUksU0FBUyxXQUFXLFNBQVMsUUFBUTtBQUVyQyxrQkFBVTtBQUFBLE1BQ2Q7QUFBQSxJQUNKO0FBQ0EsUUFBSSxTQUFTO0FBQ1QsWUFBTSxVQUFVLEtBQUssS0FBSyxPQUFPO0FBQ2pDLFVBQUksV0FBc0IsQ0FBQztBQUMzQixVQUFJLFNBQVM7QUFFVCxZQUFJLE1BQU0sUUFBUSxPQUFPLEdBQUc7QUFDeEIscUJBQVc7QUFBQSxRQUNmO0FBQUEsTUFDSjtBQUVBLFVBQUksWUFBWSxTQUFTLFFBQVE7QUFDN0IsY0FBTSxpQkFBaUIsQ0FDbkIsU0FDQSxPQUNBQSxVQUNDO0FBQ0QsZ0JBQU0sWUFBWUEsVUFBUztBQUMzQixpQkFBTztBQUFBLGlEQUNzQixRQUFRLENBQUM7QUFBQSx3QkFDbEMsUUFBUSxJQUFJO0FBQUEsa0JBQ2xCLFlBQVksS0FBSywyQkFBMkI7QUFBQTtBQUFBLDRCQUVsQyxRQUFRLElBQUk7QUFBQSx5QkFDZixRQUFRLElBQUk7QUFBQSw4Q0FDUyxRQUFRLE9BQU8sS0FBSyxTQUFTO0FBQUEsb0JBQ3ZELFFBQVEsSUFBSTtBQUFBO0FBQUEsa0JBR1IsUUFBUSxPQUNGLGdDQUFnQyxRQUFRLElBQUksV0FDNUMsRUFDVjtBQUFBO0FBQUE7QUFBQSxRQUdKO0FBQ0EsY0FBTSxjQUFjLENBQUMsVUFBcUJBLFVBQWtCO0FBQ3hELGNBQUksY0FBYztBQUNsQixtQkFBUyxJQUFJLENBQUMsU0FBUyxVQUFVO0FBQzdCLDJCQUFlLGVBQWUsU0FBUyxPQUFPQSxLQUFJO0FBQUEsVUFDdEQsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDWDtBQUNBLGNBQU0sT0FBTyxVQUFVLE1BQU0sR0FBRyxFQUFFLElBQUk7QUFDdEMsZUFBTyxpQ0FBaUMsWUFBWSxVQUFVLElBQUksQ0FBQztBQUFBLE1BQ3ZFO0FBQUEsSUFDSjtBQUFBLEVBQ0osT0FBTztBQUVILFdBQU87QUFBQSxFQUNYO0FBQ0EsU0FBTztBQUNYOzs7QUNuRmlTLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRTFULElBQU8saUJBQVEsT0FBTztBQUFBO0FBQUE7QUFBQSxFQUdwQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtB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

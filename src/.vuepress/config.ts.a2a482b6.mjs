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
          children: [
            {
              text: "NeRF",
              prefix: "NeRF/",
              collapsible: true,
              children: "structure"
            }
          ]
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
    // footer: "默认页脚",
    copyright: 'Copyright \xA9 2023-\u81F3\u4ECA Roc Yan <br> Total View Times: <span class="waline-pageview-count" data-path="/" /> <br> \u6D59ICP\u59072023046172\u53F7-1',
    displayFooter: true,
    pageInfo: ["Author", "Date", "PageView", "Word", "ReadingTime", "Category", "Tag"],
    blog: {
      avatar: "/logo.svg",
      name: "Roc Yan",
      description: "\u590D\u65E6\u5927\u5B66IPASS\u5B9E\u9A8C\u5BA4\u7814\u7A76\u751F",
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
  description: "Roc Yan \u7684\u535A\u5BA2",
  head: [
    [
      "meta",
      { name: "baidu-site-verification", content: "codeva-zvAJUNXpbz" }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy9jb250YWluZXJzL3Byb2plY3RzLnRzIiwgInNyYy8udnVlcHJlc3MvdGhlbWUudHMiLCAic3JjLy52dWVwcmVzcy9uYXZiYXIudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2hcIjtcbmltcG9ydCB7IGdldERpcm5hbWUsIHBhdGggfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XG5pbXBvcnQgeyBjb250YWluZXJQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWNvbnRhaW5lcidcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9jb250YWluZXJzL3Byb2plY3RzJ1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbi8vIEB0cy1pZ25vcmVcbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJSb2MgWWFuJ3MgQmxvZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJSb2MgWWFuIFx1NzY4NFx1NTM1QVx1NUJBMlwiLFxuXG4gIGhlYWQ6IFtcbiAgICBbXG4gICAgICAnbWV0YScsIHtuYW1lOiBcImJhaWR1LXNpdGUtdmVyaWZpY2F0aW9uXCIsIGNvbnRlbnQ6IFwiY29kZXZhLXp2QUpVTlhwYnpcIn0sXG4gICAgXSxcbiAgXSxcblxuICBwbHVnaW5zOiBbXG4gICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU1QkI5XHU1NjY4XHU2M0QyXHU0RUY2XG4gICAgY29udGFpbmVyUGx1Z2luKHtcbiAgICAgIHR5cGU6ICdwcm9qZWN0cycsXG4gICAgICByZW5kZXI6ICh0b2tlbnMsIGlkeCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVyUHJvamVjdHModG9rZW5zLCBpZHgpXG4gICAgICB9XG4gICAgfSksXG4gICAgZG9jc2VhcmNoUGx1Z2luKHtcbiAgICAgIGFwcElkOiBcIjlMVDRZV0I4QUlcIixcbiAgICAgIGFwaUtleTogXCIyMzNjN2ExYmU4Y2JkNTNlZjg3ZmNmYTEwNWE0NjY4ZFwiLFxuICAgICAgaW5kZXhOYW1lOiBcInZ1ZXByZXNzXCIsXG4gICAgICBsb2NhbGVzOiB7XG4gICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGFsOiB7XG4gICAgICAgICAgICAgIHNlYXJjaEJveDoge1xuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6IFwiXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2XCIsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6IFwiXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2XCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJcdTUzRDZcdTZEODhcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6IFwiXHU1M0Q2XHU2RDg4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXJ0U2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogXCJcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcbiAgICAgICAgICAgICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogXCJcdTZDQTFcdTY3MDlcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcbiAgICAgICAgICAgICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RkREXHU1QjU4XHU4MUYzXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RUNFXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXHU0RTJEXHU3OUZCXHU5NjY0XCIsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiBcIlx1NjUzNlx1ODVDRlwiLFxuICAgICAgICAgICAgICAgIHJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0OiBcIlx1NjVFMFx1NkNENVx1ODNCN1x1NTNENlx1N0VEM1x1Njc5Q1wiLFxuICAgICAgICAgICAgICAgIGhlbHBUZXh0OiBcIlx1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiBcIlx1OTAwOVx1NjJFOVwiLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogXCJcdTUyMDdcdTYzNjJcIixcbiAgICAgICAgICAgICAgICBjbG9zZVRleHQ6IFwiXHU1MTczXHU5NUVEXCIsXG4gICAgICAgICAgICAgICAgc2VhcmNoQnlUZXh0OiBcIlx1NjQxQ1x1N0QyMlx1NjNEMFx1NEY5Qlx1ODAwNVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlx1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5Q1wiLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZFF1ZXJ5VGV4dDogXCJcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgdGhlbWUsXG5cbiAgYWxpYXM6IHtcbiAgICBcIkB0aGVtZS1ob3BlL21vZHVsZXMvYmxvZy9jb21wb25lbnRzL0luZm9QYW5lbFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vY29tcG9uZW50cy9JbmZvUGFuZWwudnVlXCIpLFxuICB9XG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9jb250YWluZXJzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzcy9jb250YWluZXJzL3Byb2plY3RzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL2NvbnRhaW5lcnMvcHJvamVjdHMudHNcIjsvLyBAdHMtaWdub3JlXG5pbXBvcnQgeWFtbCBmcm9tICdqcy15YW1sJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHR5cGUgVG9rZW4gZnJvbSAnbWFya2Rvd24taXQvbGliL3Rva2VuLmpzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xuICAgIGljb246IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGRlc2M6IHN0cmluZ1xuICAgIGxpbms6IHN0cmluZ1xufVxuXG4vKipcbiAqIFx1NkUzMlx1NjdEM1x1NUJCOVx1NTY2OFx1NTIxN1x1ODg2OFxuICogQHBhcmFtIHRva2Vuc1xuICogQHBhcmFtIGlkeFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlclByb2plY3RzID0gKHRva2VuczogVG9rZW5bXSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IG5lc3Rpbmc6IHRva2VuTmVzdGluZywgaW5mbzogdG9rZW5JbmZvIH0gPSB0b2tlbnNbaWR4XVxuICAgIC8vIFx1NkUzMlx1NjdEM1x1NUYwMFx1NTkzNFx1NzY4NCAnOjo6JyBcdTY4MDdcdThCQjBcbiAgICBpZiAodG9rZW5OZXN0aW5nID09PSAxKSB7XG4gICAgICAgIGxldCB5YW1sU3RyID0gJydcbiAgICAgICAgZm9yIChsZXQgaSA9IGlkeDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50LCBpbmZvIH0gPSB0b2tlbnNbaV1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnY29udGFpbmVyX3Byb2plY3RzX2Nsb3NlJykgYnJlYWtcbiAgICAgICAgICAgIGlmICghY29udGVudCkgY29udGludWVcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZmVuY2UnICYmIGluZm8gPT09ICd5YW1sJykge1xuICAgICAgICAgICAgICAgIC8vIFx1NjYyRlx1NEVFM1x1NzgwMVx1NTc1N1x1N0M3Qlx1NTc4Qlx1RkYwQ1x1NUU3Nlx1NEUxNFx1NjYyRnlhbWxcdTRFRTNcdTc4MDFcbiAgICAgICAgICAgICAgICB5YW1sU3RyID0gY29udGVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh5YW1sU3RyKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhT2JqID0geWFtbC5sb2FkKHlhbWxTdHIpIC8vIFx1NUMwNnlhbWxcdTVCNTdcdTdCMjZcdTRFMzJcdTg5RTNcdTY3OTBcdTYyMTBqc1x1NUJGOVx1OEM2MVxuICAgICAgICAgICAgbGV0IGRhdGFMaXN0OiBQcm9qZWN0W10gPSBbXVxuICAgICAgICAgICAgaWYgKGRhdGFPYmopIHtcbiAgICAgICAgICAgICAgICAvLyBcdTZCNjNcdTc4NkVcdTg5RTNcdTY3OTBcdTUxRkFcdTY1NzBcdTYzNkVcdTVCRjlcdThDNjFcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhT2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhTGlzdCA9IGRhdGFPYmpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBcdTUyMjRcdTY1QURcdTY2MkZcdTU0MjZcdTY3MDlcdTY1NzBcdTYzNkVcbiAgICAgICAgICAgIGlmIChkYXRhTGlzdCAmJiBkYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRQcm9qZWN0SXRlbSA9IChcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogUHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdHlwZT86IHN0cmluZ1xuICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ZyaWVuZHMgPSB0eXBlID09PSAnZnJpZW5kcydcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ2cC1wcm9qZWN0LWNhcmQgcHJvamVjdCR7aW5kZXggJSA5fVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiR7cHJvamVjdC5saW5rfVwiXG4gICAgICAgICAgICAgICAgJHtpc0ZyaWVuZHMgPyAnJyA6ICdyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCInfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9qZWN0Lmljb259XCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIiR7cHJvamVjdC5uYW1lfVwiIGNsYXNzPVwidnAtcHJvamVjdC1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZwLXByb2plY3QtbmFtZSAke3Byb2plY3QuZGVzYyA/ICcnIDogJ25vLWRlc2MnfVwiPlxuICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuZGVzY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJ2cC1wcm9qZWN0LWRlc2NcIj4ke3Byb2plY3QuZGVzY308L2Rpdj5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0UHJvamVjdHMgPSAocHJvamVjdHM6IFByb2plY3RbXSwgdHlwZT86IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdHNTdHIgPSAnJ1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1N0ciArPSBnZXRQcm9qZWN0SXRlbShwcm9qZWN0LCBpbmRleCwgdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzU3RyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0b2tlbkluZm8uc3BsaXQoJyAnKS5wb3AoKVxuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInZwLXByb2plY3QtcGFuZWxcIj4ke2dldFByb2plY3RzKGRhdGFMaXN0LCB0eXBlKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTZFMzJcdTY3RDMnOjo6JyBcdTdFRDNcdTVDM0VcbiAgICAgICAgcmV0dXJuICc8L2Rpdj4nXG4gICAgfVxuICAgIHJldHVybiAnJ1xufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5cbmNvbnN0IGhvc3QgPSBcImh0dHBzOi8vcm9jeWFuLnRvcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBob3N0LFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiUm9jIFlhblwiLFxuICAgIHVybDogaG9zdCxcbiAgICBlbWFpbDogXCJxcHlhbjIzQG0uZnVkYW4uZWR1LmNuXCJcbiAgfSxcblxuICBpY29uQXNzZXRzOiBcIi8vYXQuYWxpY2RuLmNvbS90L2MvZm9udF80MjA4NjQ1XzRoZWQxaDkzb2lxLmNzc1wiLFxuXG4gIGxvZ286IFwiL2xvZ28ucG5nXCIsXG5cbiAgLy8gcmVwbzogXCJSb2NZYW45OC9Sb2NZYW45OC5naXRodWIuaW9cIixcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIC8vIG5hdmJhclxuICBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICBzaWRlYmFyLFxuXG4gIHRvYzogdHJ1ZSxcblxuICAvLyBmb290ZXI6IFwiXHU5RUQ4XHU4QkE0XHU5ODc1XHU4MTFBXCIsXG5cbiAgY29weXJpZ2h0OiBcIkNvcHlyaWdodCBcdTAwQTkgMjAyMy1cdTgxRjNcdTRFQ0EgUm9jIFlhbiA8YnI+IFRvdGFsIFZpZXcgVGltZXM6IDxzcGFuIGNsYXNzPVxcXCJ3YWxpbmUtcGFnZXZpZXctY291bnRcXFwiIGRhdGEtcGF0aD1cXFwiL1xcXCIgLz4gPGJyPiBcdTZENTlJQ1BcdTU5MDcyMDIzMDQ2MTcyXHU1M0Y3LTFcIixcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIHBhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJEYXRlXCIsIFwiUGFnZVZpZXdcIiwgXCJXb3JkXCIsIFwiUmVhZGluZ1RpbWVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiXSxcblxuICBibG9nOiB7XG4gICAgYXZhdGFyOiBcIi9sb2dvLnN2Z1wiLFxuICAgIG5hbWU6IFwiUm9jIFlhblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlx1NTkwRFx1NjVFNlx1NTkyN1x1NUI2NklQQVNTXHU1QjlFXHU5QThDXHU1QkE0XHU3ODE0XHU3QTc2XHU3NTFGXCIsXG4gICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcbiAgICB0aW1lbGluZTogXCJcdTY3MkFcdTY3NjVcdTVERjJcdTY3NjVcdUZGMENcdTVDMDZcdTgxRjNcdTVERjJcdTgxRjNcIixcbiAgICBhcnRpY2xlSW5mbzogW1wiRGF0ZVwiLCBcIkNhdGVnb3J5XCIsIFwiVGFnXCJdLFxuICAgIG1lZGlhczoge1xuICAgICAgLy8gQmFpZHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gQml0YnVja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIERpbmdkaW5nOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIERpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRHJpYmJibGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Sb2NZYW45OFwiLFxuICAgICAgRW1haWw6IFwibWFpbHRvOnFweWFuMjNAbS5mdWRhbi5lZHUuY25cIixcbiAgICAgIC8vIEV2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEZsaXBib2FyZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBHaXRlZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBHaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR21haWw6IFwibWFpbHRvOnJvY3lhbjk4QGdtYWlsLmNvbVwiLFxuICAgICAgLy8gSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExhcms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGluZXM6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFBvY2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBSZWRkaXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUnNzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gXHU1MkEwXHU1QkM2XG4gIC8vIGVuY3J5cHQ6IHtcbiAgLy8gICBjb25maWc6IHtcbiAgLy8gICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gIC8vICAgfSxcbiAgLy8gfSxcblxuICAvLyBwYWdlIG1ldGFcbiAgLy8gbWV0YUxvY2FsZXM6IHtcbiAgLy8gICBlZGl0TGluazogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuICAvLyB9LFxuICBlZGl0TGluazogZmFsc2UsXG4gIGNvbnRyaWJ1dG9yczogZmFsc2UsXG5cbiAgLy8gZnVsbHNjcmVlbjogdHJ1ZSxcblxuICBwbHVnaW5zOiB7XG4gICAgYmxvZzogdHJ1ZSxcblxuICAgIGNvbW1lbnQ6IHtcbiAgICAgIC8vIFlvdSBzaG91bGQgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2VcbiAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgICAgc2VydmVyVVJMOiBcImh0dHBzOi8vY29tbWVudC5yb2N5YW4udG9wXCIsXG4gICAgICAvLyByZXF1aXJlZE1ldGE6IFsnbmljayddLFxuICAgICAgd29yZExpbWl0OiAyMDAsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZWFyY2g6IGZhbHNlLFxuICAgICAgZW1vamk6IFtcbiAgICAgICAgICBcImh0dHBzOi8vdW5wa2cuY29tL0B3YWxpbmUvZW1vamlzQDEuMi4wL3FxXCIsXG4gICAgICAgICAgXCJodHRwczovL3VucGtnLmNvbS9Ad2FsaW5lL2Vtb2ppc0AxLjIuMC90d1wiLFxuICAgICAgXSxcbiAgICAgIGxvY2FsZToge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NkIyMlx1OEZDRVx1NzU1OVx1OEEwMFx1MzAwMlwiLFxuICAgICAgICBuaWNrOiBcIlx1NjYzNVx1NzlGMFx1RkYwOFx1NTNFRlx1NTMzRlx1NTQwRFx1RkYwOVwiLFxuICAgICAgICBtYWlsOiBcIlx1OTBBRVx1N0JCMVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVwiLFxuICAgICAgICBsaW5rOiBcIlx1N0Y1MVx1NTc0MFx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIC8vIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICAvLyBjaGFydDogdHJ1ZSxcbiAgICAgIGNhcmQ6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgIC8vIGRlbW86IHRydWUsXG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxuICAgICAgZmlndXJlOiB0cnVlLFxuICAgICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIGthdGV4OiB0cnVlLFxuICAgICAgLy8gbWFyazogdHJ1ZSxcbiAgICAgIC8vIG1lcm1haWQ6IHRydWUsXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFsndHMnLCAndnVlJ11cbiAgICAgIC8vIH0sXG4gICAgICAvLyBwcmVzZW50YXRpb246IHtcbiAgICAgIC8vICAgcGx1Z2luczogWydoaWdobGlnaHQnLCAnbWF0aCcsICdzZWFyY2gnLCAnbm90ZXMnLCAnem9vbSddXG4gICAgICAvLyB9LFxuICAgICAgLy8gc3R5bGl6ZTogW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbWF0Y2hlcjogJ1JlY29tbWVuZGVkJyxcbiAgICAgIC8vICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgIC8vICAgICAgIGlmICh0YWcgPT09ICdlbScpXG4gICAgICAvLyAgICAgICAgIHJldHVybiB7XG4gICAgICAvLyAgICAgICAgICAgdGFnOiAnQmFkZ2UnLFxuICAgICAgLy8gICAgICAgICAgIGF0dHJzOiB7IHR5cGU6ICd0aXAnIH0sXG4gICAgICAvLyAgICAgICAgICAgY29udGVudDogJ1JlY29tbWVuZGVkJ1xuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyBdLFxuICAgICAgLy8gc3ViOiB0cnVlLFxuICAgICAgLy8gc3VwOiB0cnVlLFxuICAgICAgLy8gdGFiczogdHJ1ZSxcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxuICAgICAgLy8gdlByZTogdHJ1ZSxcbiAgICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWVcbiAgICB9LFxuXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVQaWM6IHRydWUsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vICAgYXBwbGU6IHtcbiAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbXNUaWxlOiB7XG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAvLyAgICAgICAgIGljb25zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbn0sXG4gICAge2N1c3RvbTogdHJ1ZX1cbik7IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvWWFuL0Rlc2t0b3AvdnVlcHJlc3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIC8vIFwiL1wiLFxuICAvLyBcIi9kZW1vL1wiLFxuICB7XG4gICAgdGV4dDogXCJcdTRFM0JcdTk4NzVcIixcbiAgICBpY29uOiBcImhvbWVcIixcbiAgICBsaW5rOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU2NUY2XHU5NUY0XHU4Rjc0XCIsXG4gICAgaWNvbjogXCJ0aW1lXCIsXG4gICAgbGluazogXCIvdGltZWxpbmVcIlxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTUyMDZcdTdDN0JcIixcbiAgICBpY29uOiBcImNhdGVnb3J5c2VsZWN0ZWRcIixcbiAgICBwcmVmaXg6IFwiL3Bvc3RzL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUHl0aG9uXCIsXG4gICAgICAgIGljb246IFwicHl0aG9uXCIsXG4gICAgICAgIGxpbms6IFwicHl0aG9uL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJQeVRvcmNoXCIsXG4gICAgICAgIGljb246IFwicHl0b3JjaFwiLFxuICAgICAgICBsaW5rOiBcInB5dG9yY2gvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NTZGRVx1NUY2Mlx1NUI2NlwiLFxuICAgICAgICBpY29uOiBcInRocmVlRFwiLFxuICAgICAgICBsaW5rOiBcIkNHL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdThCQkFcdTY1ODdcIixcbiAgICAgICAgaWNvbjogXCJwYXBlclwiLFxuICAgICAgICBsaW5rOiBcInBhcGVyL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJQQVRcIixcbiAgICAgICAgaWNvbjogXCJjb2RlXCIsXG4gICAgICAgIGxpbms6IFwiUEFUL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJMaW51eFwiLFxuICAgICAgICBpY29uOiBcImxpbnV4XCIsXG4gICAgICAgIGxpbms6IFwibGludXgvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NURFNVx1NTE3N1wiLFxuICAgICAgICBpY29uOiBcInRvb2xcIixcbiAgICAgICAgbGluazogXCJ0b29sL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTUxNzZcdTRFRDZcIixcbiAgICAgICAgaWNvbjogXCJvdGhlcnNcIixcbiAgICAgICAgbGluazogXCJvdGhlcnMvXCIsXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU2ODA3XHU3QjdFXCIsXG4gICAgaWNvbjogXCJ0YWdcIixcbiAgICBsaW5rOiBcIi90YWdcIlxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTk0RkVcdTYzQTVcIixcbiAgICBpY29uOiBcImxpbmtcIixcbiAgICBsaW5rOiBcIi9saW5rc1wiXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NEUyQVx1NEVCQVx1N0I4MFx1NEVDQlwiLFxuICAgIGljb246IFwicGVvcGxlXCIsXG4gICAgbGluazogXCIvaW50cm9cIlxuICB9XG4gIC8vIHtcbiAgLy8gICB0ZXh0OiBcIlx1NTM1QVx1NjU4N1wiLFxuICAvLyAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAvLyAgIHByZWZpeDogXCIvcG9zdHMvXCIsXG4gIC8vICAgY2hpbGRyZW46IFtcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdGV4dDogXCJcdTgyRjlcdTY3OUNcIixcbiAgLy8gICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgLy8gICAgICAgY2hpbGRyZW46IFtcbiAgLy8gICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIxXCIgfSxcbiAgLy8gICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcbiAgLy8gICAgICAgICBcIjNcIixcbiAgLy8gICAgICAgICBcIjRcIixcbiAgLy8gICAgICAgXSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5XCIsXG4gIC8vICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAvLyAgICAgICBwcmVmaXg6IFwiYmFuYW5hL1wiLFxuICAvLyAgICAgICBjaGlsZHJlbjogW1xuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5IDFcIixcbiAgLy8gICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAvLyAgICAgICAgICAgbGluazogXCIxXCIsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICB7XG4gIC8vICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAyXCIsXG4gIC8vICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgLy8gICAgICAgICAgIGxpbms6IFwiMlwiLFxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgXCIzXCIsXG4gIC8vICAgICAgICAgXCI0XCIsXG4gIC8vICAgICAgIF0sXG4gIC8vICAgICB9LFxuICAvLyAgICAgeyB0ZXh0OiBcIlx1NkEzMVx1Njg0M1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxuICAvLyAgICAgeyB0ZXh0OiBcIlx1NzA2Qlx1OUY5OVx1Njc5Q1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJkcmFnb25mcnVpdFwiIH0sXG4gIC8vICAgICBcInRvbWF0b1wiLFxuICAvLyAgICAgXCJzdHJhd2JlcnJ5XCIsXG4gIC8vICAgXSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRleHQ6IFwiVjIgXHU2NTg3XHU2ODYzXCIsXG4gIC8vICAgaWNvbjogXCJib29rXCIsXG4gIC8vICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvemgvXCIsXG4gIC8vIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ZYW4vRGVza3RvcC92dWVwcmVzcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL1lhbi9EZXNrdG9wL3Z1ZXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7c2lkZWJhcn0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCB7YXJyYXlTaWRlYmFyfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyKHtcbiAgICBcIi9cIjogW1xuICAgICAgICBcIlwiLFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxuICAgICAgICAgICAgaWNvbjogXCJhcnRpY2xlXCIsXG4gICAgICAgICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlB5dGhvblwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcInB5dGhvblwiLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwicHl0aG9uL1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQeVRvcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwicHl0b3JjaFwiLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwicHl0b3JjaC9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU1NkZFXHU1RjYyXHU1QjY2XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwidGhyZWVEXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJDRy9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJHQU1FUzEwMTogXHU3M0IwXHU0RUUzXHU4QkExXHU3Qjk3XHU2NzNBXHU1NkZFXHU1RjYyXHU1QjY2XHU1MTY1XHU5NUU4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkdBTUVTMTAxL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdThCQkFcdTY1ODdcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJwYXBlclwiLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwicGFwZXIvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmVSRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJOZVJGL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQQVRcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJQQVQvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkxpbnV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwibGludXhcIixcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImxpbnV4L1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTVERTVcdTUxNzdcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ0b29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJ0b29sL1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTUxNzZcdTRFRDZcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJvdGhlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIm90aGVycy9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLHdCQUF3QjtBQUNwVSxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLFlBQVksWUFBWTtBQUNqQyxTQUFTLHVCQUF1Qjs7O0FDRmhDLE9BQU8sVUFBVTtBQWlCVixJQUFNLGlCQUFpQixDQUFDLFFBQWlCLFFBQWdCO0FBQzVELFFBQU0sRUFBRSxTQUFTLGNBQWMsTUFBTSxVQUFVLElBQUksT0FBTyxHQUFHO0FBRTdELE1BQUksaUJBQWlCLEdBQUc7QUFDcEIsUUFBSSxVQUFVO0FBQ2QsYUFBUyxJQUFJLEtBQUssSUFBSSxPQUFPLFFBQVEsS0FBSztBQUN0QyxZQUFNLEVBQUUsTUFBTSxTQUFTLEtBQUssSUFBSSxPQUFPLENBQUM7QUFDeEMsVUFBSSxTQUFTO0FBQTRCO0FBQ3pDLFVBQUksQ0FBQztBQUFTO0FBQ2QsVUFBSSxTQUFTLFdBQVcsU0FBUyxRQUFRO0FBRXJDLGtCQUFVO0FBQUEsTUFDZDtBQUFBLElBQ0o7QUFDQSxRQUFJLFNBQVM7QUFDVCxZQUFNLFVBQVUsS0FBSyxLQUFLLE9BQU87QUFDakMsVUFBSSxXQUFzQixDQUFDO0FBQzNCLFVBQUksU0FBUztBQUVULFlBQUksTUFBTSxRQUFRLE9BQU8sR0FBRztBQUN4QixxQkFBVztBQUFBLFFBQ2Y7QUFBQSxNQUNKO0FBRUEsVUFBSSxZQUFZLFNBQVMsUUFBUTtBQUM3QixjQUFNLGlCQUFpQixDQUNuQixTQUNBLE9BQ0FBLFVBQ0M7QUFDRCxnQkFBTSxZQUFZQSxVQUFTO0FBQzNCLGlCQUFPO0FBQUEsaURBQ3NCLFFBQVEsQ0FBQztBQUFBLHdCQUNsQyxRQUFRLElBQUk7QUFBQSxrQkFDbEIsWUFBWSxLQUFLLDJCQUEyQjtBQUFBO0FBQUEsNEJBRWxDLFFBQVEsSUFBSTtBQUFBLHlCQUNmLFFBQVEsSUFBSTtBQUFBLDhDQUNTLFFBQVEsT0FBTyxLQUFLLFNBQVM7QUFBQSxvQkFDdkQsUUFBUSxJQUFJO0FBQUE7QUFBQSxrQkFHUixRQUFRLE9BQ0YsZ0NBQWdDLFFBQVEsSUFBSSxXQUM1QyxFQUNWO0FBQUE7QUFBQTtBQUFBLFFBR0o7QUFDQSxjQUFNLGNBQWMsQ0FBQyxVQUFxQkEsVUFBa0I7QUFDeEQsY0FBSSxjQUFjO0FBQ2xCLG1CQUFTLElBQUksQ0FBQyxTQUFTLFVBQVU7QUFDN0IsMkJBQWUsZUFBZSxTQUFTLE9BQU9BLEtBQUk7QUFBQSxVQUN0RCxDQUFDO0FBQ0QsaUJBQU87QUFBQSxRQUNYO0FBQ0EsY0FBTSxPQUFPLFVBQVUsTUFBTSxHQUFHLEVBQUUsSUFBSTtBQUN0QyxlQUFPLGlDQUFpQyxZQUFZLFVBQVUsSUFBSSxDQUFDO0FBQUEsTUFDdkU7QUFBQSxJQUNKO0FBQUEsRUFDSixPQUFPO0FBRUgsV0FBTztBQUFBLEVBQ1g7QUFDQSxTQUFPO0FBQ1g7OztBQ25GaVMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFMVQsSUFBTyxpQkFBUSxPQUFPO0FBQUE7QUFBQTtBQUFBLEVBR3BCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEs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

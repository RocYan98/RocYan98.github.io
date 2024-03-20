import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { getDirname, path } from "@vuepress/utils";
import { containerPlugin } from '@vuepress/plugin-container'
import { renderProjects } from './containers/projects'

import theme from "./theme.js";
// @ts-ignore
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  // title: "Roc Yan's Blog",
  title: "小严学习日记",
  description: "Roc Yan 的博客",

  head: [
    [
      'meta', {name: "baidu-site-verification", content: "codeva-hm7fDCFP6N"},
    ],
  ],

  plugins: [
    // 自定义容器插件
    containerPlugin({
      type: 'projects',
      render: (tokens, idx) => {
        return renderProjects(tokens, idx)
      }
    }),
    docsearchPlugin({
      appId: "9LT4YWB8AI",
      apiKey: "233c7a1be8cbd53ef87fcfa105a4668d",
      indexName: "vuepress",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
              },
            },
          },
        },
      },
    }),
  ],

  theme,

  alias: {
    "@theme-hope/modules/blog/components/InfoPanel": path.resolve(__dirname, "./components/InfoPanel.vue"),
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});

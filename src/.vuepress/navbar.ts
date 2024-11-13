import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "时间轴",
    icon: "time",
    link: "/timeline"
  },
  {
    text: "分类",
    icon: "categoryselected",
    prefix: "/posts/",
    children: [
      {
        text: "Python",
        icon: "python",
        link: "python/",
      },
      {
        text: "PyTorch",
        icon: "pytorch",
        link: "pytorch/",
      },
      {
        text: "学习笔记",
        icon: "threeD",
        link: "notes/",
      },
      {
        text: "论文",
        icon: "paper",
        link: "paper/",
      },
      {
        text: "PAT",
        icon: "code",
        link: "PAT/",
      },
      {
        text: "Linux",
        icon: "linux",
        link: "linux/",
      },
      // {
      //   text: "工具",
      //   icon: "tool",
      //   link: "tool/",
      // },
      {
        text: "其他",
        icon: "others",
        link: "others/",
      },
    ]
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag"
  },
  {
    text: "链接",
    icon: "link",
    link: "/links"
  },
  {
    text: "个人简介",
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

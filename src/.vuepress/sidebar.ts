import {sidebar} from "vuepress-theme-hope";
import {arraySidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "文章",
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
                    text: "计算机图形学",
                    icon: "threeD",
                    prefix: "CG/",
                    collapsible: true,
                    children: [
                        {
                            text: "GAMES101: 现代计算机图形学入门",
                            prefix: "GAMES101/",
                            collapsible: true,
                            children: "structure"
                        }
                    ]
                },
                {
                    text: "论文",
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
                    text: "工具",
                    icon: "tool",
                    prefix: "tool/",
                    collapsible: true,
                    children: "structure"
                },
                {
                    text: "其他",
                    icon: "others",
                    prefix: "others/",
                    collapsible: true,
                    children: "structure"
                },
            ]
        }
    ]
});

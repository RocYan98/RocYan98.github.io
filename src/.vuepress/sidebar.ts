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
                    text: "学习笔记",
                    icon: "threeD",
                    prefix: "notes/",
                    collapsible: true,
                    children: [
                        {
                            text: "GAMES101",
                            icon: "GAMES",
                            prefix: "GAMES101/",
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
                },
                {
                    text: "论文",
                    icon: "paper",
                    prefix: "paper/",
                    collapsible: true,
                    children: [
                        {
                            text: "表示方式",
                            icon: "representation",
                            prefix: "representation/",
                            collapsible: true,
                            children: "structure"
                        },
                        {
                            text: "数字人",
                            icon: "avatar",
                            prefix: "avatar/",
                            collapsible: true,
                            children: "structure"
                        },
                        {
                            text: "仿真",
                            icon: "animation",
                            prefix: "animation/",
                            collapsible: true,
                            children: "structure"
                        },
                        {
                            text: "AIGC",
                            icon: "AIGC",
                            prefix: "AIGC/",
                            collapsible: true,
                            children: "structure"
                        },
                        {
                            text: "分割",
                            icon: "segmentation",
                            prefix: "segmentation/",
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
                        // 'coordinate.md'
                    ]
                },
                // {
                //     text: "论文",
                //     icon: "paper",
                //     prefix: "paper/",
                //     collapsible: true,
                //     children: "structure"
                // },
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
                // {
                //     text: "工具",
                //     icon: "tool",
                //     prefix: "tool/",
                //     collapsible: true,
                //     children: "structure"
                // },
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

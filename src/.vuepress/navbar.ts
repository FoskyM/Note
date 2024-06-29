import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "软件开发",
        icon: "code",
        link: "/software/",
      },
      {
        text: "硬件",
        icon: "memory",
        link: "/hardware/",
      },
      {
        text: "搞机",
        icon: "mobile-android",
        link: "/phone/",
      },
      {
        text: "工具",
        icon: "laptop-code",
        link: "/tools/",
      },
      {
        text: "全部",
        icon: "list",
        link: "/guide.html",
      },
    ],
  },
  {
    text: "关于我",
    icon: "circle-info",
    link: "https://fosky.top",
  },
  // {
  //   text: "友链",
  //   icon: "link",
  //   link: "/friend",
  // },
]);

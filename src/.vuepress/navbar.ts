import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "前端",
        icon: "cloud",
        link: "/frontend/",
      },
      {
        text: "后端",
        icon: "server",
        link: "/backend/",
      },
      {
        text: "数据库",
        icon: "database",
        link: "/database/",
      },
      {
        text: "其他",
        icon: "list",
        link: "/other/",
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

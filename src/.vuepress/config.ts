import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "傅四霁的笔记",
  description: "傅四霁的笔记",

  theme,
  
  markdown: {
    headers: {
      level: [1,2,3,4]
    }
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

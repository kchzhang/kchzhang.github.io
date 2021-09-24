const argv = require("minimist")(process.argv.slice(2));
const build = argv._[0] || false;
const base = build ? "/" : "/";
module.exports = {
  title: "J4Tools",
  description: "J4Tools,JavaScript,tools,js",
  base,
  dest: "dist",
  head: [],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: "Last Updated", // string | boolean
    search: true,
    smoothScroll: true,
    navbar: true,
    sidebar: {
      "/tools/": [
        {
          title: "快速上手",
          path: "/tools/",
        },
        {
          title: "数据",
          path: "data",
          // children: [{ title: "基础数据", path: "data" }],
          // children: [{ title: "基础数据", path: "data" }],
          // children: [{ title: "基础数据", path: "data" }],
        },
        {
          title: "正则校验",
          path: "regExp",
        },
        {
          title: "时间格式",
          path: "date",
        },
        {
          title: "下载",
          path: "down",
        },
        {
          title: "cookies",
          path: "cookies",
        },
      ],

      // ["", "data", "regExp", "date"],
      // "/snippets/": ["", "array", "broswer", "regular", "date"],
    },
    // 顶部右边栏
    nav: [
      { text: "文档", link: "/tools/" },
      // { text: "Snippets", link: "/snippets/" },
      { text: "GitHub", link: "https://github.com/kchzhang/j4Tools" },
    ],
  },
  // 插件
  plugins: [
    "@vuepress/pwa",
    "@vuepress/back-to-top",
    ["vuepress-plugin-code-copy", true],
  ],
};

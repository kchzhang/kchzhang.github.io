const argv = require("minimist")(process.argv.slice(2));
const build = argv._[0] || false;
const base = build ? "/doc/" : "/doc/";
module.exports = {
  title: "J4Tools",
  description: "",
  base, // 项目的根路径
  dest: "public",
  head: [
    // 设置 描述 和 关键词
  ],
  themeConfig: {
    lastUpdated: "Last Updated", // string | boolean
    search: true,
    smoothScroll: true,
    navbar: true,
    sidebar: {
      "/tools/": ["", "data", "regExp", "date"],
      "/snippets/": ["", "array", "broswer", "regular", "date"],
    },
    // 顶部右边栏
    nav: [
      { text: "文档", link: "/tools/" },
      // { text: "Snippets", link: "/snippets/" },
      { text: "GitHub", link: "https://github.com/kchzhang/j4Tools" },
    ],
  },
  // 插件
  plugins: [["vuepress-plugin-code-copy", true]],
};

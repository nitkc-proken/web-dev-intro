import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";
import rlc from "remark-link-card";
// https://astro.build/config
export default defineConfig({
  site: "https://nitkc-proken.github.io",
  base: "/web-dev-intro",
  markdown:{
    remarkPlugins: [[
      rlc,{
        shortenUrl:true,
      }
    ]],
  },
  integrations: [
    starlight({
      title: "Web開発入門",
      editLink: {
        baseUrl: "https://github.com/naotiki/web-dev-intro/edit/main/",
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      social: {
        github: "https://github.com/naotiki/web-dev-intro",
      },
      sidebar: [
        {
          label: "Webの基礎",
          autogenerate: { directory: "basics" },
        },
        {
          label: "このサイトについて",
          autogenerate: { directory: "about" },
        },
        {
          label: "ツール・環境構築",
          autogenerate: { directory: "tools" },
        }
      ],
      customCss:[
        "./src/styles/linkcard.css"
      ]
    }),
  ],
  
});

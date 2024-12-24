import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";
import rlc from "remark-link-card";
import remarkBreaks from "remark-breaks";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://nitkc-proken.github.io",
  trailingSlash: "always",
  base: "/web-dev-intro",
  markdown: {
    remarkPlugins: [
      [
        rlc,
        {
          shortenUrl: true,
        },
      ],
      remarkBreaks,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
  integrations: [
    starlight({
      title: "Web開発入門",
      editLink: {
        baseUrl: "https://github.com/nitkc-proken/web-dev-intro/edit/main/",
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      social: {
        github: "https://github.com/nitkc-proken/web-dev-intro",
        twitter: "https://twitter.com/NITKiC_pro",
        "x.com": "https://x.com/NITKiC_pro",
      },
      sidebar: [
        {
          label: "Webの基礎",
          autogenerate: { directory: "basics" },
        },
        {
          label: "ツール・環境構築",
          autogenerate: { directory: "tools" },
        },
        {
          label: "このサイトについて",
          autogenerate: { directory: "about" },
        },
      ],
      customCss: ["./src/styles/linkcard.css"],
    }),
  ],
});

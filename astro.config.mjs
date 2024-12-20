import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nitkc-proken.github.io",
  base: "/web-dev-intro",
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
      ],
    }),
  ],
});

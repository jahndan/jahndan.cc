import { defineConfig, passthroughImageService } from "astro/config";

// TODO click to copy code blocks?
// TODO click to copy underlying LaTeX expression for these
import remarkMath from "remark-math";
import rehypeMath from "@daiji256/rehype-mathml";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jahndan.cc",
  integrations: [sitemap()],

  image: {
    // `sharp` doesn't support animated AVIF
    service: passthroughImageService(),

    // https://v6.docs.astro.build/en/reference/configuration-reference/#imageresponsivestyles
    // https://v6.docs.astro.build/en/reference/configuration-reference/#imagelayout
    // https://v6.docs.astro.build/en/reference/configuration-reference/#imageobjectfit
    // https://v6.docs.astro.build/en/reference/configuration-reference/#imageobjectposition
  },

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMath],
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "kanagawa-lotus",
        dark: "kanagawa-wave",
      },
      defaultColor: false,
    },
  },
});

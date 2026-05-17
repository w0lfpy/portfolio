// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  ],

  adapter: cloudflare()
});
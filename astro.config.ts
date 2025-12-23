import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';



// https://astro.build/config
const config = defineConfig({
  site: 'https://longle0125.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Vinjr',
      openGraph: {
        home: {
          title: "Who's Vinjr?",
          description: 'My personal space for sharing my knowledge, thoughts, and interests.'
        },
        blog: {
          title: 'Blog',
          description: 'An archive for cryptography, mathematics problems'
        },
        projects: {
          title: 'Showing my personal projects'
        }
      },
      giscus: {
        repository: "longle0125/longle0125.github.io",
        repositoryId: "R_kgDOQrvBjw",
        category: "Announcements",
        categoryId: "DIC_kwDOQrvBj84C0I4h",
        mapping: "pathname",
        strict: false,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: "en",
      }
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});

export default config;

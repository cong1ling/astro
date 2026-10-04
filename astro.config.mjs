// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// 正式域名（用于 canonical / sitemap / RSS 的绝对链接）
const SITE_URL = 'https://weiwo.de5.net';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  adapter: cloudflare(),
  integrations: [sitemap()],
  image: {
    domains: ['images.cloudflare.com', 'cdn.jsdelivr.net'],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});
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
    // 使用 passthrough 服务，不优化远程图片，避免图片引用解析错误
    service: { entrypoint: 'astro/assets/services/passthrough' },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});
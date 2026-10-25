/**
 * Astro 内容层远程图片健壮性补丁
 *
 * 问题：内容集合 Markdown 中的远程图片（如 cdn.jsdelivr.net）在构建时会被
 * Astro 无条件抓取以推断尺寸（inferSize）。国内网络访问 jsdelivr 不稳定，
 * 一旦抓取失败，整个 `astro build` 直接失败，导致本地 wrangler 部署链路不可用。
 *
 * 补丁：远程图片抓取失败时，降级为保留原始 URL 的普通 <img> 标签（懒加载），
 * 仅打印警告，不中断构建。本地图片路径不受影响，仍然正常处理。
 *
 * 本脚本幂等：已打过补丁则跳过。通过 package.json 的 postinstall 钩子
 * 在每次 npm install 后自动重新应用。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const MARKER = '[astro-image-fallback]';
const FILE = resolve('node_modules/astro/dist/content/runtime.js');

const CATCH_RE =
  /\} catch \{\n(\s*)throw new Error\(`Failed to parse image reference: \$\{imagePath\}`\);\n\s*\}/;

const PATCHED = `} catch (e) {
      // ${MARKER} 远程图片抓取失败时降级为原始 URL，不让构建失败
      try {
        const decoded = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
        if (decoded && typeof decoded.src === "string" && URL.canParse(decoded.src)) {
          console.warn('[astro-image-fallback] 无法获取远程图片尺寸，保留原始 URL: ' + decoded.src);
          imageObjects.set(imagePath, {
            src: decoded.src,
            attributes: { alt: decoded.alt ?? "", index: decoded.index ?? 0, loading: "lazy" },
            srcSet: { attribute: "", values: [] }
          });
          continue;
        }
      } catch {}
      throw new Error(\`Failed to parse image reference: \${imagePath}\`);
    }`;

let content;
try {
  content = readFileSync(FILE, 'utf-8');
} catch {
  console.error('[patch-astro-image] 未找到 astro 运行时文件，跳过补丁');
  process.exit(0);
}

if (content.includes(MARKER)) {
  // 修复历史版本补丁中误引用 ${MARKER} 变量的问题（该变量在运行时不存在）
  if (content.includes('`${MARKER} ')) {
    content = content.replaceAll('`${MARKER} ', "'[astro-image-fallback] ' + ");
    writeFileSync(FILE, content);
    console.log('[patch-astro-image] 🔧 已修复补丁中的变量引用错误');
  } else {
    console.log('[patch-astro-image] 补丁已存在，跳过');
  }
  process.exit(0);
}

if (!CATCH_RE.test(content)) {
  console.error('[patch-astro-image] 未匹配到目标代码（astro 版本可能已变更），跳过补丁');
  process.exit(0);
}

content = content.replace(CATCH_RE, PATCHED);
writeFileSync(FILE, content);
console.log('[patch-astro-image] ✅ 已应用补丁：远程图片抓取失败时降级而非中断构建');

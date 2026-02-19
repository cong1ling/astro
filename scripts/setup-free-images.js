#!/usr/bin/env node

/**
 * 免费图片托管配置脚本
 * 使用 GitHub + jsDelivr
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log('🚀 免费图片托管配置（GitHub + jsDelivr）\n');

  // 获取用户输入
  const githubUser = await ask('请输入你的 GitHub 用户名: ');
  const repoName = await ask('请输入图片仓库名 (默认: yanxizaomu-images): ') || 'yanxizaomu-images';
  const branch = await ask('请输入分支名 (默认: main): ') || 'main';

  console.log('\n📋 配置信息:');
  console.log(`   GitHub 用户: ${githubUser}`);
  console.log(`   仓库名: ${repoName}`);
  console.log(`   分支: ${branch}`);

  // 生成 jsDelivr 链接
  const baseurl = `https://cdn.jsdelivr.net/gh/${githubUser}/${repoName}@${branch}`;

  const images = [
    '霓虹都市里的蕾塞.png',
    '望云少女_铁道道口.jpg',
    '樱花刀姬_水畔剪影.png',
  ];

  console.log('\n📝 图片链接:');
  for (const image of images) {
    console.log(`   ${image}: ${baseurl}/${image}`);
  }

  // 询问是否更新代码
  const updateCode = await ask('\n是否更新代码中的图片链接? (y/n): ');

  if (updateCode.toLowerCase() === 'y') {
    const files = [
      'src/pages/index.astro',
      'src/pages/blog.astro',
      'src/pages/about.astro',
    ];

    for (const file of files) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let changed = false;

        for (const image of images) {
          const oldPattern = new RegExp(`["'](/images/${image.replace('.', '\\.')})["']`, 'g');
          const newUrl = `"${baseurl}/${image}"`;

          if (oldPattern.test(content)) {
            content = content.replace(oldPattern, newUrl);
            changed = true;
          }
        }

        if (changed) {
          fs.writeFileSync(filePath, content);
          console.log(`✅ 更新: ${file}`);
        } else {
          console.log(`⚠️  跳过: ${file} (未找到图片链接)`);
        }
      } else {
        console.log(`⚠️  文件不存在: ${file}`);
      }
    }

    console.log('\n✅ 代码更新完成！');
  }

  // 询问是否创建配置文件
  const createConfig = await ask('\n是否创建配置文件? (y/n): ');

  if (createConfig.toLowerCase() === 'y') {
    const config = {
      githubUser,
      repoName,
      branch,
      baseurl,
      images: images.map(img => ({
        name: img,
        url: `${baseurl}/${img}`,
      })),
    };

    fs.writeFileSync(
      path.join(process.cwd(), 'image-config.json'),
      JSON.stringify(config, null, 2)
    );
    console.log('✅ 创建: image-config.json');
  }

  console.log('\n📝 下一步:');
  console.log(`   1. 访问 https://github.com/new 创建仓库: ${repoName}`);
  console.log('   2. 上传图片到仓库');
  console.log('   3. 运行: npm run build');
  console.log('   4. 部署到 Netlify');

  rl.close();
}

main().catch(console.error);

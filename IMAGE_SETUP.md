# 免费图片托管配置

## 🎯 推荐方案：GitHub + jsDelivr

### 为什么选择这个方案？

| 特性 | 说明 |
|------|------|
| **完全免费** | GitHub + jsDelivr 都免费 |
| **无需支付** | 不需要绑定信用卡 |
| **稳定可靠** | GitHub 基础设施 |
| **全球 CDN** | jsDelivr 全球加速 |
| **简单易用** | 只需要 GitHub 账号 |

## 🚀 快速配置（3 分钟）

### 步骤 1：运行配置脚本

```bash
cd astro
npm run setup-images
```

脚本会引导你输入：
- GitHub 用户名
- 仓库名（默认：yanxizaomu-images）
- 分支名（默认：main）

### 步骤 2：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`yanxizaomu-images`（或你输入的名字）
3. 公开仓库（Public）
4. 不要初始化 README
5. 点击 "Create repository"

### 步骤 3：上传图片

1. 进入仓库
2. 点击 "Add file" → "Upload files"
3. 拖拽你的图片：
   - 霓虹都市里的蕾塞.png
   - 望云少女_铁道道口.jpg
   - 樱花刀姬_水畔剪影.png
4. 点击 "Commit changes"

### 步骤 4：完成！

脚本会自动更新代码中的图片链接，然后运行：

```bash
npm run build
```

## 📝 手动配置（如果脚本失败）

### 1. 创建仓库
```bash
# 访问 https://github.com/new
# 仓库名: yanxizaomu-images
# 公开
```

### 2. 上传图片
- 使用 Web 界面上传图片
- 或使用命令行

### 3. 获取链接
```html
https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/霓虹都市里的蕾塞.png
```

### 4. 更新代码
```astro
---
// src/pages/index.astro
---

<img 
  src="https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/霓虹都市里的蕾塞.png" 
  alt="描述"
  loading="lazy"
/>
```

## 🎨 使用示例

### 在 Astro 中使用
```astro
---
// src/pages/index.astro
---

<img 
  src="https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/霓虹都市里的蕾塞.png" 
  alt="言西早木的头像"
  width={400}
  height={400}
  loading="lazy"
/>
```

### 在 Markdown 中使用
```markdown
![描述](https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/image.png)
```

### 响应式图片
```html
<picture>
  <source 
    srcset="https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/image.png" 
    media="(min-width: 1200px)" 
  />
  <img 
    src="https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/image.png" 
    alt="描述"
    loading="lazy"
  />
</picture>
```

## 📊 限制和注意事项

### GitHub 限制
- 单文件最大 100MB
- 仓库总大小建议不超过 1GB
- 每小时 API 请求限制

### jsDelivr 限制
- 免费 CDN，有流量限制
- 适合个人博客（完全够用）

### 你的使用情况
- 3 张图片 ≈ 2-3MB
- 每月 1000 次访问 ≈ 10-20MB 流量

**结论**：完全免费，完全够用！

## 💡 最佳实践

### 1. 使用短链接
```bash
# 创建短链接（可选）
https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@main/
```

### 2. 指定版本
```html
<!-- 使用具体版本号，更稳定 -->
https://cdn.jsdelivr.net/gh/your-username/yanxizaomu-images@v1.0.0/image.png
```

### 3. 懒加载
```html
<img src="..." loading="lazy" />
```

### 4. 响应式
```html
<picture>
  <source srcset="...?w=1200" media="(min-width: 1200px)" />
  <img src="...?w=800" loading="lazy" />
</picture>
```

## 🔄 迁移本地图片

### 1. 上传所有图片到 GitHub
```bash
git clone https://github.com/your-username/yanxizaomu-images.git
cd yanxizaomu-images
cp ../astro/public/images/* ./
git add .
git commit -m "Add all blog images"
git push
```

### 2. 运行批量替换脚本
```bash
node scripts/setup-free-images.js
```

### 3. 删除本地图片（可选）
```bash
rm -rf public/images/*
```

### 4. 重新部署
```bash
npm run build
```

## 📚 其他免费图床

### 1. SM.MS
- 免费图床
- 无需注册
- 限制：单文件 5MB，总空间 500MB

### 2. 图虫
- 免费图床
- 需要注册
- 限制：单文件 10MB

### 3. 阿里图床
- 免费图床
- 需要注册
- 稳定可靠

## ✨ 总结

GitHub + jsDelivr 方案的优势：
1. ✅ 完全免费，无需支付
2. ✅ 无需注册额外服务
3. ✅ 稳定可靠（GitHub 基础设施）
4. ✅ 全球 CDN 加速
5. ✅ 适合个人博客

**推荐指数**：⭐⭐⭐⭐⭐

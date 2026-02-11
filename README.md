# 个人博客

一个使用 Astro 构建的个人技术博客，分享编程心得、学习笔记和生活感悟。

## ✨ 功能特点

- **现代科技风格**：透明材质 + 磨砂效果，简约而不简单
- **响应式设计**：完美适配桌面、平板和移动设备
- **深色模式支持**：自动切换浅色/深色主题
- **智能阅读体验**：文章标题根据滚动方向自动显示/隐藏
- **文章分享功能**：一键分享到社交媒体
- **友好的404页面**：智能推荐可能想访问的页面
- **静态生成**：快速加载，优秀的SEO表现

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```
访问 `http://localhost:4321` 查看效果

### 构建生产版本
```bash
npm run build
```
构建产物将生成到 `dist` 目录

### 本地预览构建结果
```bash
npm run preview
```

## 📁 项目结构

```text
/
├── public/           # 静态资源
├── src/
│   ├── components/   # 组件
│   ├── layouts/      # 布局
│   ├── pages/        # 页面
│   │   ├── posts/    # 文章
│   │   ├── index.astro    # 首页
│   │   ├── blog.astro     # 文章列表
│   │   ├── about.astro    # 关于我
│   │   ├── friends.astro  # 友链
│   │   ├── guestbook.astro # 留言板
│   │   └── 404.astro      # 404页面
│   └── content/      # 内容
│       └── posts/    # Markdown文章
├── astro.config.mjs  # Astro配置
└── package.json      # 项目配置
```

## 🎨 技术栈

- **前端框架**：Astro
- **样式**：原生CSS + CSS变量
- **部署**：可部署到任何静态托管服务（GitHub Pages、Vercel、Netlify等）

## 📝 发布文章

1. 在 `src/content/posts/` 目录创建新的 Markdown 文件
2. 添加必要的 Frontmatter 元数据
3. 编写文章内容
4. 运行 `npm run build` 构建静态网站
5. 部署 `dist` 目录到托管服务

## 📄 Frontmatter 示例

```yaml
---
title: "文章标题"
pubDate: 2026-02-11
description: "文章简短描述"
author: "言西早木"
tags: ["标签1", "标签2"]
---
```

## 🌟 特色功能

- **透明材质设计**：使用 `backdrop-filter` 实现毛玻璃效果
- **智能标题控制**：文章页面标题根据滚动方向自动显示/隐藏
- **简约现代风格**：干净的布局，适当的留白，突出内容
- **完全自定义主题**：基于CSS变量的设计系统，便于后续扩展

## � 联系方式

- **GitHub**：[cong1ling](https://github.com/cong1ling)
- **邮箱**：tanshujian@linux.do

---

感谢使用！欢迎提出建议和反馈 🎉

---
title: '探索 Astro 的内容集合'
pubDate: 2026-02-10
description: '深入了解 Astro 的内容集合功能'
author: '言西早木'
image:
    url: 'https://docs.astro.build/assets/rays.webp'
    alt: 'Astro Rays'
tags: ["astro", "内容管理", "进阶"]
---

# 探索 Astro 的内容集合

发表于：2024-02-10

今天我们来深入探讨 Astro 的内容集合（Content Collections）功能。

## 什么是内容集合？

内容集合是 Astro 提供的一种强大的内容管理方式，它可以：

- ✅ 类型安全的内容查询
- ✅ 自动生成 TypeScript 类型
- ✅ 统一的 frontmatter 验证
- ✅ 更好的开发体验

## 配置内容集合

在 `src/content/config.ts` 中定义你的集合结构：

```typescript
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { posts };
```

## 查询内容

使用 `getCollection` 函数轻松获取所有文章：

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');
```

## 实践建议

1. 始终定义清晰的 schema
2. 使用 TypeScript 获得更好的类型提示
3. 合理组织内容目录结构
4. 利用 frontmatter 进行内容分类

内容集合让博客管理变得更加简单高效！

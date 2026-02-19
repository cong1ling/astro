# 图片使用说明

## 图片资源

博客中使用了三张高质量的动漫风格图片作为装饰元素：

### 1. 霓虹都市里的蕾塞.png
- **位置**: `/images/霓虹都市里的蕾塞.png`
- **使用场景**:
  - 博客列表页第一篇精选文章的封面
  - 首页卡片区域的装饰背景（右上角）
  - 关于页面的个人头像
- **风格**: 霓虹都市风格，色彩鲜艳

### 2. 望云少女_铁道道口.jpg
- **位置**: `/images/望云少女_铁道道口.jpg`
- **使用场景**:
  - 博客列表页 Hero 区域的背景图
  - 博客列表页第二篇精选文章的封面
  - 关于页面引用卡片的背景
- **风格**: 铁道风格，温馨宁静

### 3. 樱花刀姬_水畔剪影.png
- **位置**: `/images/樱花刀姬_水畔剪影.png`
- **使用场景**:
  - 首页 Hero 区域的背景图（带动画效果）
  - 博客列表页第三篇精选文章的封面
  - 关于页面的装饰元素（右上角）
- **风格**: 樱花剪影风格，优雅唯美

## 图片优化技巧

### 1. 背景图片
```css
/* 作为背景使用，带透明度 */
background: url('/images/图片名.png') center/cover no-repeat;
opacity: 0.15; /* 浅色模式 */
opacity: 0.1;  /* 深色模式 */
```

### 2. 封面图片
```html
<!-- 作为封面使用，带懒加载 -->
<img 
  src="/images/图片名.png" 
  alt="描述文字"
  loading="lazy"
/>
```

### 3. 装饰元素
```css
/* 作为装饰元素，绝对定位 */
.decoration {
  position: absolute;
  background: url('/images/图片名.png') center/contain no-repeat;
  opacity: 0.08;
  pointer-events: none;
}
```

## 图片效果

### 1. 缩放动画
```css
@keyframes subtle-zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

.hero-image {
  animation: subtle-zoom 20s ease-in-out infinite alternate;
}
```

### 2. 悬停效果
```css
.featured-card:hover .featured-image img {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}
```

### 3. 渐变叠加
```css
.featured-overlay {
  background: linear-gradient(
    to bottom, 
    transparent 0%, 
    rgba(0, 0, 0, 0.3) 100%
  );
}
```

## 响应式处理

### 移动端优化
```css
@media (max-width: 768px) {
  /* 减小装饰图片尺寸 */
  .hero-decoration {
    width: 200px;
    height: 200px;
  }
  
  /* 降低背景图片透明度 */
  .hero-image {
    opacity: 0.1;
  }
}
```

## 性能优化

### 1. 懒加载
所有非首屏图片都使用 `loading="lazy"` 属性：
```html
<img src="/images/图片名.png" alt="描述" loading="lazy" />
```

### 2. 图片格式
- PNG: 适用于需要透明背景的图片
- JPG: 适用于照片类图片，文件更小

### 3. 图片压缩
建议使用工具压缩图片：
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (macOS)

## 添加新图片

### 1. 放置位置
将图片放在 `public/images/` 目录下

### 2. 引用方式
```html
<!-- HTML 中 -->
<img src="/images/新图片.png" alt="描述" />

<!-- CSS 中 -->
background: url('/images/新图片.png');
```

### 3. 命名规范
- 使用有意义的中文或英文名称
- 避免使用空格，使用下划线或连字符
- 示例: `樱花刀姬_水畔剪影.png` 或 `sakura-silhouette.png`

## 图片使用最佳实践

### 1. 始终提供 alt 文本
```html
<img src="/images/图片.png" alt="图片的详细描述" />
```

### 2. 控制透明度
- 装饰性背景: 0.05 - 0.15
- 内容背景: 0.2 - 0.4
- 叠加层: 0.3 - 0.8

### 3. 使用 CSS 变量
```css
:root {
  --bg-image-opacity-light: 0.15;
  --bg-image-opacity-dark: 0.1;
}

.hero-image {
  opacity: var(--bg-image-opacity-light);
}

html[data-theme='dark'] .hero-image {
  opacity: var(--bg-image-opacity-dark);
}
```

### 4. 避免影响性能
- 不要在同一页面使用过多大图
- 使用 CSS `will-change` 优化动画
- 考虑使用 `object-fit` 控制图片显示

## 深色模式适配

### 降低亮度
```css
html[data-theme='dark'] .hero-image {
  opacity: 0.1; /* 比浅色模式更低 */
  filter: brightness(0.8); /* 可选：降低亮度 */
}
```

### 调整叠加层
```css
html[data-theme='dark'] .hero-overlay {
  background: linear-gradient(
    135deg, 
    rgba(99, 102, 241, 0.9),  /* 更深的叠加 */
    rgba(236, 72, 153, 0.9)
  );
}
```

## 常见问题

### Q: 图片加载慢怎么办？
A: 
1. 压缩图片文件大小
2. 使用 `loading="lazy"` 懒加载
3. 考虑使用 WebP 格式
4. 添加占位符或骨架屏

### Q: 图片在移动端显示不正常？
A: 
1. 使用 `object-fit: cover` 保持比例
2. 设置合适的 `max-width` 和 `height`
3. 测试不同屏幕尺寸

### Q: 如何平衡美观和性能？
A:
1. 装饰性图片使用低透明度
2. 关键图片优先加载
3. 非关键图片懒加载
4. 使用 CSS 渐变代替部分图片

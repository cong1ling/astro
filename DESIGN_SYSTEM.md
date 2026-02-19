# 设计系统文档

## 概述

这是一个现代化、专业的博客设计系统，采用极简风格和微妙的玻璃态效果。

## 设计理念

- **现代极简**：干净、清晰的布局，减少视觉噪音
- **专业优雅**：精致的排版和间距系统
- **流畅交互**：自然的动画和过渡效果
- **响应式设计**：完美适配各种屏幕尺寸
- **深色模式**：完整的深色主题支持

## 配色方案

### 浅色模式
- **主色调**: Indigo (#6366f1) - 专业、可信赖
- **次要色**: Pink (#ec4899) - 活力、创意
- **强调色**: Purple (#8b5cf6) - 优雅、神秘
- **文本色**: Slate 900 (#0f172a) - 高对比度
- **次要文本**: Slate 600 (#475569) - 适中对比度
- **辅助文本**: Slate 500 (#64748b) - 低对比度

### 深色模式
- **主色调**: Indigo 400 (#818cf8) - 柔和明亮
- **次要色**: Pink 400 (#f472b6) - 温暖活泼
- **强调色**: Purple 400 (#a78bfa) - 梦幻优雅
- **文本色**: Slate 100 (#f1f5f9) - 高可读性
- **次要文本**: Slate 300 (#cbd5e1) - 适中可读性
- **辅助文本**: Slate 400 (#94a3b8) - 低对比度

## 排版系统

### 字体家族
- **基础字体**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', sans-serif
- **展示字体**: 'Inter', 'Noto Sans SC', sans-serif
- **特殊字体**: 'Zhi Mang Xing', cursive (用于装饰性标题)

### 字体大小
```css
--font-size-xs: 0.75rem    /* 12px */
--font-size-sm: 0.875rem   /* 14px */
--font-size-base: 1rem     /* 16px */
--font-size-lg: 1.125rem   /* 18px */
--font-size-xl: 1.25rem    /* 20px */
--font-size-2xl: 1.5rem    /* 24px */
--font-size-3xl: 1.875rem  /* 30px */
--font-size-4xl: 2.25rem   /* 36px */
--font-size-5xl: 3rem      /* 48px */
```

## 间距系统

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 0.75rem   /* 12px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
```

## 圆角系统

```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 20px
--radius-2xl: 24px
--radius-full: 9999px
```

## 阴影系统

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

## 组件设计

### 卡片 (Card)
- **背景**: 半透明白色/深色，带毛玻璃效果
- **边框**: 1px 实线，使用 card-border 颜色
- **圆角**: 20px (--radius-xl)
- **阴影**: 中等阴影 (--shadow-md)
- **悬停效果**: 
  - 向上移动 4px
  - 增强阴影至 --shadow-xl
  - 边框颜色变为主色调
  - 顶部渐变线条从左到右展开

### 按钮 (Button)
- **主按钮**: 
  - 渐变背景 (primary → secondary)
  - 白色文字
  - 圆角 9999px (完全圆角)
  - 悬停时向上移动 2px
- **次要按钮**:
  - 表面颜色背景
  - 文本颜色文字
  - 边框 1px
  - 悬停时背景变为卡片背景色

### 导航栏 (Navigation)
- **背景**: 半透明白色/深色，带毛玻璃效果
- **位置**: 粘性定位在顶部
- **高度**: 自适应内容
- **链接样式**:
  - 默认: 次要文本颜色
  - 悬停: 主色调，背景变为表面颜色
  - 圆角: 完全圆角

### 页脚 (Footer)
- **背景**: 半透明白色/深色，带毛玻璃效果
- **边框**: 顶部 1px 实线
- **内容**: 居中对齐
- **链接**: 悬停时变为主色调

## 动画原则

### 过渡时间
- **快速**: 0.2s - 用于小元素和即时反馈
- **标准**: 0.3s - 用于大多数交互
- **缓慢**: 0.4s+ - 用于复杂动画

### 缓动函数
- **ease**: 默认，适用于大多数情况
- **ease-in-out**: 用于平滑的开始和结束
- **cubic-bezier**: 用于自定义动画曲线

### 动画效果
- **悬停**: translateY(-2px 到 -4px)
- **点击**: scale(0.98)
- **渐变**: opacity 和 transform 结合
- **展开**: scaleX 或 scaleY

## 响应式断点

```css
/* 移动设备 */
@media (max-width: 768px) {
  /* 单列布局 */
  /* 减小字体大小 */
  /* 隐藏非必要元素 */
}

/* 平板设备 */
@media (min-width: 769px) and (max-width: 1024px) {
  /* 2列布局 */
}

/* 桌面设备 */
@media (min-width: 1025px) {
  /* 3-4列布局 */
  /* 完整功能 */
}
```

## 可访问性

- **对比度**: 所有文本至少达到 WCAG AA 标准 (4.5:1)
- **焦点状态**: 所有交互元素都有清晰的焦点指示
- **键盘导航**: 支持完整的键盘操作
- **语义化**: 使用正确的 HTML 标签
- **ARIA**: 在必要时添加 ARIA 属性

## 性能优化

- **CSS 变量**: 使用 CSS 自定义属性实现主题切换
- **GPU 加速**: transform 和 opacity 动画
- **懒加载**: 图片和非关键资源
- **代码分割**: 按需加载组件
- **压缩**: 生产环境压缩所有资源

## 浏览器支持

- Chrome/Edge: 最新 2 个版本
- Firefox: 最新 2 个版本
- Safari: 最新 2 个版本
- iOS Safari: iOS 13+
- Android Chrome: Android 8+

## 设计资源

- **图标**: 使用 SVG 图标，避免使用 emoji
- **字体**: Google Fonts (Inter, Noto Sans SC)
- **图片**: 优化后的 WebP 格式
- **插图**: 简约风格，与整体设计协调

## 未来改进

- [ ] 添加更多微交互
- [ ] 实现骨架屏加载
- [ ] 添加页面过渡动画
- [ ] 优化移动端体验
- [ ] 添加更多主题选项

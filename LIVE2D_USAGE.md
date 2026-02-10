# Live2D 看板娘使用说明

## 🎯 快速开始

### 当前配置（默认）
你的博客已经集成了基础的 Live2D 看板娘，使用的是自动加载方式。

### 启用自定义配置

#### 方法 1：使用自定义 JavaScript 配置（推荐）

在 `src/layouts/Layout.astro` 的 `</body>` 标签前添加：

```html
<!-- 在 Live2D Widget 脚本之后添加 -->
<script src="/live2d-custom-config.js"></script>
```

这将启用以下功能：
- ✅ 根据时间显示不同的欢迎消息
- ✅ 页面特定的提示消息
- ✅ 节日祝福
- ✅ 访问次数统计
- ✅ 导航链接悬停提示
- ✅ 主题切换提示
- ✅ 复制内容提示
- ✅ 滚动进度提示

#### 方法 2：使用自定义对话配置

替换 Layout.astro 中的 Live2D 加载代码：

```html
<!-- 替换原来的 autoload.js -->
<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/waifu.css"/>
<script src="https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/waifu-tips.js"></script>

<script>
  initWidget({
    waifuPath: '/waifu-tips-custom.json',  // 使用自定义对话配置
    cdnPath: 'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/',
    modelId: 1,              // 模型 ID (0-6)
    modelTexturesId: 0,      // 材质 ID
    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
    drag: true,              // 允许拖动
    logLevel: 'error'
  });
</script>

<!-- 然后加载自定义配置 -->
<script src="/live2d-custom-config.js"></script>
```

---

## 🎨 自定义选项

### 更换模型

修改 `modelId` 参数（0-6）：

```javascript
initWidget({
  modelId: 2,  // 尝试不同的模型
  // ...
});
```

可用模型：
- 0: Pio (默认)
- 1: Tia
- 2: 其他模型...

### 更换材质/服装

修改 `modelTexturesId` 参数：

```javascript
initWidget({
  modelId: 1,
  modelTexturesId: 2,  // 更换服装
  // ...
});
```

### 自定义工具按钮

```javascript
initWidget({
  tools: [
    'hitokoto',        // 一言
    'asteroids',       // 网页彩蛋
    'switch-model',    // 切换模型
    'switch-texture',  // 切换材质
    'photo',           // 拍照
    'info',            // 关于
    'quit'             // 隐藏
  ],
  // ...
});
```

---

## 📝 添加自定义消息

### 在代码中添加

编辑 `public/live2d-custom-config.js`，在相应函数中添加：

```javascript
// 添加页面消息
function showPageMessage() {
  const pageTips = {
    '/': '欢迎来到首页！',
    '/blog': '来看看文章吧~',
    '/your-page': '你的自定义消息',  // 添加新页面
  };
  // ...
}

// 添加节日
function checkHoliday() {
  const holidays = {
    '1-1': '新年快乐！',
    '6-18': '你的生日快乐！',  // 添加新节日
  };
  // ...
}
```

### 在配置文件中添加

编辑 `public/waifu-tips-custom.json`：

```json
{
  "mouseover": [
    {
      "selector": ".your-element",
      "text": ["你的提示消息"]
    }
  ]
}
```

---

## 🔧 高级定制

### 1. 添加自定义按钮

在 `live2d-custom-config.js` 中添加：

```javascript
function addCustomButton() {
  const tools = document.querySelector('.waifu-tool');
  if (!tools) return;
  
  const btn = document.createElement('span');
  btn.innerHTML = '🎵';
  btn.title = '播放音乐';
  btn.onclick = () => {
    window.showMessage('开始播放音乐~', 3000);
    // 你的功能代码
  };
  
  tools.appendChild(btn);
}

// 在 initCustomLive2D 函数中调用
function initCustomLive2D() {
  // ...
  addCustomButton();
}
```

### 2. 监听自定义事件

```javascript
// 监听表单提交
document.querySelector('form')?.addEventListener('submit', () => {
  if (window.showMessage) {
    window.showMessage('正在提交...', 3000);
  }
});

// 监听按钮点击
document.querySelector('.your-button')?.addEventListener('click', () => {
  if (window.showMessage) {
    window.showMessage('按钮被点击了！', 3000);
  }
});
```

### 3. 根据用户行为显示消息

```javascript
// 检测用户停留时间
setTimeout(() => {
  if (window.showMessage) {
    window.showMessage('看了这么久，要不要休息一下？', 5000);
  }
}, 60000); // 1分钟后

// 检测鼠标离开页面
document.addEventListener('mouseleave', () => {
  if (window.showMessage) {
    window.showMessage('要离开了吗？', 3000);
  }
});
```

---

## 🎭 更换模型资源

### 使用其他模型库

```javascript
initWidget({
  cdnPath: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/',
  // 或使用其他模型库
  // cdnPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/',
  // ...
});
```

### 使用本地模型

1. 下载模型文件到 `public/live2d-models/`
2. 修改配置：

```javascript
initWidget({
  cdnPath: '/live2d-models/',
  // ...
});
```

---

## 📱 响应式设置

### 在移动端隐藏（已默认配置）

```css
@media (max-width: 768px) {
  #waifu {
    display: none !important;
  }
}
```

### 在移动端缩小

```css
@media (max-width: 768px) {
  #waifu {
    transform: scale(0.6);
    bottom: 10px;
    left: 10px;
  }
}
```

---

## 🐛 常见问题

### Q: 看板娘不显示？
A: 检查：
1. 网络连接是否正常
2. CDN 是否可访问
3. 浏览器控制台是否有错误

### Q: 如何禁用看板娘？
A: 删除或注释掉 Layout.astro 中的 Live2D 相关代码

### Q: 如何更改看板娘位置？
A: 在 Layout.astro 的样式中修改：

```css
#waifu {
  bottom: 20px;
  left: 20px;    /* 改为 right: 20px 可以放到右边 */
}
```

### Q: 消息显示时间太短？
A: 修改 `showMessage` 的第二个参数（毫秒）：

```javascript
window.showMessage('消息内容', 10000);  // 显示10秒
```

---

## 📚 参考资源

- **官方文档**: https://github.com/stevenjoezhang/live2d-widget
- **模型资源**: https://github.com/zenghongtu/live2d-model-assets
- **详细配置**: 查看 `LIVE2D_CUSTOMIZATION.md`

---

## 💡 提示

1. 修改配置后需要刷新页面才能生效
2. 自定义配置文件在 `public/` 目录下
3. 可以通过浏览器控制台查看 Live2D 的日志
4. 建议先在本地测试，确认无误后再部署

---

**祝你玩得开心！有问题随时问我~ 💖**

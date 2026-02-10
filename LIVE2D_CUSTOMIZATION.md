# Live2D 看板娘自定义指南

## 📋 目录
1. [基础配置](#基础配置)
2. [更换模型](#更换模型)
3. [自定义对话](#自定义对话)
4. [自定义功能](#自定义功能)
5. [高级定制](#高级定制)

---

## 1. 基础配置

### 当前使用方式（最简单）
```html
<script src="https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
```

### 自定义配置方式
替换为以下代码以获得更多控制：

```html
<!-- 先加载样式和核心脚本 -->
<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/waifu.css"/>
<script src="https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/waifu-tips.js"></script>

<script>
  // 自定义配置
  initWidget({
    waifuPath: 'https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/waifu-tips.json',
    cdnPath: 'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/',
    
    // 模型配置
    modelId: 1,              // 默认模型 ID (0-6)
    modelTexturesId: 0,      // 默认材质 ID
    
    // 功能配置
    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
    drag: true,              // 允许拖动
    
    // 日志级别
    logLevel: 'error'        // error, warn, info, trace
  });
</script>
```

---

## 2. 更换模型

### 方法一：使用现有模型库
修改 `modelId` 参数（0-6）：

```javascript
initWidget({
  modelId: 2,  // 更换为不同的模型
  // ...其他配置
});
```

### 方法二：使用自定义模型库
```javascript
initWidget({
  cdnPath: 'https://你的CDN地址/live2d_api/',
  modelId: 0,
  // ...其他配置
});
```

### 常用模型仓库
- **fghrsh 的模型库**（默认）：https://github.com/fghrsh/live2d_api
- **更多模型**：https://github.com/zenghongtu/live2d-model-assets
- **模型集合**：https://github.com/xiazeyu/live2d-widget-models

### 本地部署模型
1. 下载模型文件到 `public/live2d-models/` 目录
2. 确保目录结构：
   ```
   public/
   └── live2d-models/
       ├── model_list.json
       └── 模型名称/
           ├── index.json
           └── textures/
   ```
3. 修改配置：
   ```javascript
   initWidget({
     cdnPath: '/live2d-models/',
     // ...
   });
   ```

---

## 3. 自定义对话

### 方法一：修改 waifu-tips.json
创建自己的 `waifu-tips.json` 文件：

```json
{
  "mouseover": [
    {
      "selector": ".nav-links a",
      "text": ["想去看看 {text} 吗？"]
    },
    {
      "selector": "#theme-toggle",
      "text": ["要切换主题吗？", "换个心情吧~"]
    }
  ],
  "click": [
    {
      "selector": "#waifu",
      "text": ["不要戳我啦！", "再戳就生气了！", "你想干嘛呀？"]
    }
  ],
  "seasons": [
    {
      "date": "01/01",
      "text": ["新年快乐！<br>今年也要一起加油哦~"]
    },
    {
      "date": "02/14",
      "text": ["情人节快乐！要来一起过吗？"]
    }
  ]
}
```

### 方法二：在代码中动态添加
```javascript
// 在 Layout.astro 的 script 中添加
if (window.showMessage) {
  // 根据时间显示不同消息
  const hour = new Date().getHours();
  if (hour < 6) {
    window.showMessage('这么晚还不睡吗？要注意身体哦！', 6000);
  } else if (hour < 12) {
    window.showMessage('早上好！今天也要元气满满哦~', 6000);
  } else if (hour < 18) {
    window.showMessage('下午好！要不要休息一下？', 6000);
  } else {
    window.showMessage('晚上好！今天过得怎么样？', 6000);
  }
}
```

---

## 4. 自定义功能

### 添加自定义按钮
```javascript
// 在 waifu-tips.js 加载后
document.addEventListener('DOMContentLoaded', () => {
  const tools = document.querySelector('.waifu-tool');
  
  // 添加自定义按钮
  const customBtn = document.createElement('span');
  customBtn.innerHTML = '🎵';
  customBtn.title = '播放音乐';
  customBtn.onclick = () => {
    window.showMessage('开始播放音乐~', 3000);
    // 你的自定义功能
  };
  
  tools.appendChild(customBtn);
});
```

### 与页面元素交互
```javascript
// 监听页面事件
document.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
  if (scrollPercent > 80 && window.showMessage) {
    window.showMessage('已经到底部啦~', 3000);
  }
});

// 监听表单提交
document.querySelector('form')?.addEventListener('submit', () => {
  if (window.showMessage) {
    window.showMessage('正在提交中...请稍等~', 3000);
  }
});
```

---

## 5. 高级定制

### Fork 仓库进行深度定制

1. **Fork 仓库**
   ```bash
   git clone https://github.com/你的用户名/live2d-widget.git
   cd live2d-widget
   npm install
   ```

2. **修改源代码**
   - `src/` 目录包含 TypeScript 源代码
   - `dist/waifu-tips.json` 修改对话内容
   - `dist/waifu.css` 修改样式

3. **构建**
   ```bash
   npm run build
   ```

4. **部署到 CDN**
   - 推送到 GitHub
   - 使用 jsDelivr CDN：
     ```html
     <script src="https://fastly.jsdelivr.net/gh/你的用户名/live2d-widget@latest/dist/autoload.js"></script>
     ```

### 本地部署完整版本

1. **下载完整项目**
   ```bash
   # 在你的 astro 项目中
   cd public
   git clone https://github.com/stevenjoezhang/live2d-widget.git
   ```

2. **修改 Layout.astro**
   ```html
   <link rel="stylesheet" href="/live2d-widget/dist/waifu.css"/>
   <script src="/live2d-widget/dist/waifu-tips.js"></script>
   <script>
     initWidget({
       waifuPath: '/live2d-widget/dist/waifu-tips.json',
       // ...其他配置
     });
   </script>
   ```

---

## 📝 实用示例

### 示例 1：根据页面显示不同消息
```javascript
const pageTips = {
  '/': '欢迎来到首页！',
  '/blog': '来看看有什么新文章吧~',
  '/about': '想了解更多关于我的事情吗？',
  '/guestbook': '留下你的足迹吧！'
};

const currentPath = window.location.pathname;
if (window.showMessage && pageTips[currentPath]) {
  window.showMessage(pageTips[currentPath], 5000);
}
```

### 示例 2：节日祝福
```javascript
function checkHoliday() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  
  const holidays = {
    '1-1': '新年快乐！🎉',
    '2-14': '情人节快乐！💕',
    '5-1': '劳动节快乐！',
    '10-1': '国庆节快乐！🇨🇳',
    '12-25': '圣诞快乐！🎄'
  };
  
  const key = `${month}-${day}`;
  if (holidays[key] && window.showMessage) {
    window.showMessage(holidays[key], 8000);
  }
}

checkHoliday();
```

### 示例 3：访问统计提示
```javascript
// 记录访问次数
let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
visitCount++;
localStorage.setItem('visitCount', visitCount.toString());

if (window.showMessage) {
  if (visitCount === 1) {
    window.showMessage('第一次见面，请多关照！', 6000);
  } else {
    window.showMessage(`这是你第 ${visitCount} 次来访哦~`, 6000);
  }
}
```

---

## 🎨 样式定制技巧

### 修改看板娘位置
```css
#waifu {
  bottom: 20px;
  left: 20px;    /* 改为 right: 20px 可以放到右边 */
}
```

### 修改提示框样式
```css
#waifu-tips {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border-radius: 20px !important;
  padding: 15px 20px !important;
}
```

### 响应式调整
```css
@media (max-width: 768px) {
  #waifu {
    transform: scale(0.8);  /* 缩小尺寸 */
  }
}
```

---

## 🔗 相关资源

- **官方仓库**：https://github.com/stevenjoezhang/live2d-widget
- **模型资源**：https://github.com/zenghongtu/live2d-model-assets
- **Live2D 官网**：https://www.live2d.com/
- **在线演示**：https://www.fghrsh.net/post/123.html

---

## ⚠️ 注意事项

1. **版权问题**：使用的模型需遵守原作者的版权协议
2. **性能影响**：看板娘会增加页面加载时间，建议在移动端隐藏
3. **CDN 稳定性**：建议使用多个 CDN 源作为备份
4. **浏览器兼容**：部分旧浏览器可能不支持

---

**祝你玩得开心！如有问题欢迎提问~ 💖**

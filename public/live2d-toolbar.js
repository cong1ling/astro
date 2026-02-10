// 独立的 Live2D 工具栏
console.log('Live2D 工具栏脚本加载');

// 等待页面加载
window.addEventListener('load', () => {
  setTimeout(createCustomToolbar, 3000);
});

function createCustomToolbar() {
  console.log('开始创建自定义工具栏');
  
  const waifu = document.getElementById('waifu');
  if (!waifu) {
    console.log('看板娘元素未找到');
    return;
  }

  // 查找原有的工具栏
  let originalToolbar = waifu.querySelector('.waifu-tool');
  
  // 如果原有工具栏不存在，创建一个
  if (!originalToolbar) {
    console.log('原工具栏不存在，创建新的');
    originalToolbar = document.createElement('div');
    originalToolbar.className = 'waifu-tool';
    waifu.appendChild(originalToolbar);
  }

  // 检查是否已添加自定义按钮
  if (originalToolbar.querySelector('.custom-btn')) {
    console.log('自定义按钮已存在');
    return;
  }

  console.log('添加自定义按钮到工具栏');

  // 按钮数据 - 使用简洁的图标
  const buttons = [
    {
      icon: '↑',  // 简洁的向上箭头
      title: '回到顶部',
      message: '咻~ 回到顶部啦！',
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      icon: '⚡',  // 闪电图标代表随机
      title: '随机访问',
      message: '让我带你去一个随机的地方~',
      onClick: () => {
        const pages = ['/', '/blog', '/about', '/guestbook'];
        const current = window.location.pathname;
        const others = pages.filter(p => p !== current);
        const random = others[Math.floor(Math.random() * others.length)];
        setTimeout(() => window.location.href = random, 1000);
      }
    },
    {
      icon: '↗',  // 转发箭头图标
      title: '复制链接',
      message: '链接已复制到剪贴板！',
      onClick: () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showTip('链接已复制到剪贴板！');
        }).catch(() => {
          // 如果复制失败，使用备用方法
          const textarea = document.createElement('textarea');
          textarea.value = window.location.href;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showTip('链接已复制！');
        });
      }
    },
    {
      icon: '☾',  // 月亮图标代表主题
      title: '切换主题',
      message: '切换主题模式~',
      onClick: () => {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) toggle.click();
      }
    },
    {
      icon: '≡',  // 排行榜图标（三条横线）
      title: '访问统计',
      message: '',
      onClick: () => {
        const count = localStorage.getItem('visitCount') || '0';
        const first = localStorage.getItem('firstVisit') || '未知';
        const message = `访问次数: ${count} 次<br>首次访问: ${first}`;
        showTip(message);
      }
    }
  ];

  // 创建按钮并添加到工具栏
  buttons.forEach(btn => {
    const button = document.createElement('span');
    button.className = 'custom-btn';
    button.innerHTML = btn.icon;
    button.title = btn.title;
    
    button.addEventListener('click', () => {
      if (btn.message) {
        showTip(btn.message);
      }
      if (btn.onClick) {
        btn.onClick();
      }
    });
    
    originalToolbar.appendChild(button);
  });

  console.log('自定义工具栏创建完成！');
}

// 显示提示消息（使用原有的对话框）
function showTip(message) {
  console.log('显示提示:', message);
  
  // 优先使用 Live2D 自带的 showMessage
  if (window.showMessage) {
    console.log('使用 window.showMessage');
    window.showMessage(message, 4000);
    return;
  }

  // 如果不可用，使用原有的 waifu-tips 元素
  const waifu = document.getElementById('waifu');
  if (!waifu) {
    console.log('waifu 元素未找到');
    return;
  }

  let tipDiv = waifu.querySelector('.waifu-tips');
  if (!tipDiv) {
    // 如果原有的也不存在，查找其他可能的提示框
    tipDiv = waifu.querySelector('[class*="tips"]');
  }

  if (tipDiv) {
    console.log('找到提示框元素，显示消息');
    tipDiv.innerHTML = message;
    tipDiv.style.opacity = '1';
    tipDiv.style.display = 'block';
    
    setTimeout(() => {
      tipDiv.style.opacity = '0';
      setTimeout(() => {
        tipDiv.style.display = 'none';
      }, 300);
    }, 4000);
  } else {
    console.log('未找到提示框元素');
    // 不使用 alert，静默失败
  }
}

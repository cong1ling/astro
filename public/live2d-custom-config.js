// Live2D 看板娘自定义配置
// 使用方法：在 Layout.astro 中引入此文件

console.log('Live2D 自定义配置脚本已加载');

// 等待 Live2D 加载完成
window.addEventListener('load', () => {
  console.log('页面加载完成，准备初始化自定义配置');
  
  // 延迟执行，确保 showMessage 函数已加载
  setTimeout(() => {
    console.log('开始初始化 Live2D 自定义配置');
    initCustomLive2D();
  }, 3000);
});

function initCustomLive2D() {
  console.log('initCustomLive2D 被调用');
  console.log('window.showMessage 是否存在:', typeof window.showMessage);
  
  if (!window.showMessage) {
    console.log('Live2D 未加载，跳过自定义配置');
    return;
  }

  console.log('Live2D 已加载，开始配置');

  // 1. 欢迎消息（根据时间）
  showWelcomeMessage();

  // 2. 页面特定消息
  showPageMessage();

  // 3. 节日祝福
  checkHoliday();

  // 4. 访问统计
  showVisitCount();

  // 5. 添加自定义交互
  addCustomInteractions();

  // 6. 滚动提示
  addScrollTips();

  // 7. 添加自定义按钮
  addCustomButtons();
}

// 欢迎消息
function showWelcomeMessage() {
  const hour = new Date().getHours();
  let message = '';

  if (hour < 6) {
    message = '这么晚还不睡吗？要注意身体哦！';
  } else if (hour < 9) {
    message = '早上好！新的一天开始啦~';
  } else if (hour < 12) {
    message = '上午好！今天也要元气满满哦~';
  } else if (hour < 14) {
    message = '中午了，记得吃午饭哦！';
  } else if (hour < 18) {
    message = '下午好！要不要休息一下？';
  } else if (hour < 22) {
    message = '晚上好！今天过得怎么样？';
  } else {
    message = '夜深了，早点休息吧~';
  }

  window.showMessage(message, 6000);
}

// 页面特定消息
function showPageMessage() {
  const pageTips = {
    '/': '欢迎来到首页！随便看看吧~',
    '/blog': '来看看有什么新文章吧~',
    '/about': '想了解更多关于我的事情吗？',
    '/guestbook': '留下你的足迹吧！'
  };

  const currentPath = window.location.pathname;
  const message = pageTips[currentPath];
  
  if (message) {
    setTimeout(() => {
      window.showMessage(message, 5000);
    }, 8000);
  }
}

// 节日祝福
function checkHoliday() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  
  const holidays = {
    '1-1': '新年快乐！🎉 祝你新的一年万事如意！',
    '2-14': '情人节快乐！💕 要和喜欢的人一起度过吗？',
    '3-8': '妇女节快乐！👩 向所有女性致敬！',
    '4-1': '愚人节快乐！😄 小心被骗哦~',
    '5-1': '劳动节快乐！💪 辛苦工作，好好休息！',
    '6-1': '儿童节快乐！🎈 保持童心，永远年轻！',
    '9-10': '教师节快乐！👨‍🏫 感谢所有老师的付出！',
    '10-1': '国庆节快乐！🇨🇳 祝祖国繁荣昌盛！',
    '12-24': '平安夜快乐！🎄 要吃苹果吗？',
    '12-25': '圣诞快乐！🎅 圣诞老人会来哦~'
  };
  
  const key = `${month}-${day}`;
  if (holidays[key]) {
    setTimeout(() => {
      window.showMessage(holidays[key], 8000);
    }, 15000);
  }
}

// 访问统计
function showVisitCount() {
  try {
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());

    let message = '';
    if (visitCount === 1) {
      message = '第一次见面，请多关照！💖';
    } else if (visitCount === 2) {
      message = '又见面了！欢迎回来~';
    } else if (visitCount === 10) {
      message = '第10次访问了！感谢你的支持！🎉';
    } else if (visitCount % 50 === 0) {
      message = `哇！这已经是第 ${visitCount} 次访问了！你真是忠实粉丝呢~`;
    } else if (visitCount > 100) {
      message = `欢迎回来！这是你第 ${visitCount} 次访问~`;
    } else {
      message = `这是你第 ${visitCount} 次来访哦~`;
    }

    setTimeout(() => {
      window.showMessage(message, 6000);
    }, 12000);
  } catch (e) {
    console.log('无法访问 localStorage');
  }
}

// 自定义交互
function addCustomInteractions() {
  // 监听导航链接悬停
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      const text = this.textContent;
      const messages = {
        '首页': '回到首页看看吧~',
        '文章': '去看看有什么新文章~',
        '留言': '留下你的想法吧！',
        '关于': '想了解更多吗？'
      };
      if (messages[text] && window.showMessage) {
        window.showMessage(messages[text], 3000);
      }
    });
  });

  // 监听主题切换按钮
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTimeout(() => {
        const isDark = document.documentElement.classList.contains('dark');
        const message = isDark ? '夜间模式，保护眼睛~🌙' : '白天模式，清爽明亮~☀️';
        if (window.showMessage) {
          window.showMessage(message, 3000);
        }
      }, 100);
    });
  }

  // 监听复制事件
  document.addEventListener('copy', () => {
    if (window.showMessage) {
      window.showMessage('复制成功！记得注明出处哦~', 3000);
    }
  });

  // 监听页面可见性变化
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && window.showMessage) {
      window.showMessage('欢迎回来！我一直在等你哦~', 3000);
    }
  });
}

// 滚动提示
function addScrollTips() {
  let hasShownScrollTip = false;
  let hasShownBottomTip = false;

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // 滚动到50%时提示
    if (scrollPercent > 50 && !hasShownScrollTip && window.showMessage) {
      window.showMessage('已经看了一半了，继续加油！', 3000);
      hasShownScrollTip = true;
    }
    
    // 滚动到底部时提示
    if (scrollPercent > 95 && !hasShownBottomTip && window.showMessage) {
      window.showMessage('已经到底部啦~要不要回到顶部？', 4000);
      hasShownBottomTip = true;
      
      // 重置标志，以便下次滚动时再次提示
      setTimeout(() => {
        hasShownBottomTip = false;
      }, 10000);
    }
    
    // 回到顶部时重置
    if (scrollPercent < 10) {
      hasShownScrollTip = false;
    }
  });
}

// 导出配置（如果需要在其他地方使用）
window.live2dCustomConfig = {
  showWelcomeMessage,
  showPageMessage,
  checkHoliday,
  showVisitCount,
  addCustomInteractions,
  addScrollTips
};

console.log('Live2D 自定义配置已加载！');


// 添加自定义按钮
function addCustomButtons() {
  console.log('addCustomButtons 被调用');
  
  // 等待工具栏加载，增加延迟时间
  setTimeout(() => {
    console.log('开始查找工具栏');
    const toolsContainer = document.querySelector('.waifu-tool');
    console.log('工具栏元素:', toolsContainer);
    
    if (!toolsContainer) {
      console.log('工具栏未找到，5秒后重试');
      // 如果没找到，再等5秒重试
      setTimeout(addCustomButtons, 5000);
      return;
    }

    console.log('工具栏找到了，开始添加按钮');

    // 清空现有按钮（可选）
    // toolsContainer.innerHTML = '';

    // 1. 回到顶部按钮
    addButton(toolsContainer, {
      icon: '⬆️',
      title: '回到顶部',
      message: '咻~ 回到顶部啦！',
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // 2. 随机跳转按钮
    addButton(toolsContainer, {
      icon: '🎲',
      title: '随机访问',
      message: '让我带你去一个随机的地方~',
      onClick: () => {
        const pages = ['/', '/blog', '/about', '/guestbook'];
        const currentPath = window.location.pathname;
        const otherPages = pages.filter(p => p !== currentPath);
        const randomPage = otherPages[Math.floor(Math.random() * otherPages.length)];
        setTimeout(() => {
          window.location.href = randomPage;
        }, 1000);
      }
    });

    // 3. 分享按钮
    addButton(toolsContainer, {
      icon: '📤',
      title: '分享页面',
      message: '分享给你的朋友吧~',
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: document.title,
            url: window.location.href
          }).catch(() => {});
        } else {
          // 复制链接到剪贴板
          navigator.clipboard.writeText(window.location.href).then(() => {
            window.showMessage('链接已复制到剪贴板！', 3000);
          });
        }
      }
    });

    // 4. 音乐播放按钮（示例）
    let isPlaying = false;
    const musicBtn = addButton(toolsContainer, {
      icon: '🎵',
      title: '播放音乐',
      message: '开始播放音乐~',
      onClick: () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
          musicBtn.innerHTML = '🎶';
          musicBtn.title = '暂停音乐';
          window.showMessage('音乐播放中~ ♪', 3000);
          // 这里可以添加实际的音乐播放逻辑
        } else {
          musicBtn.innerHTML = '🎵';
          musicBtn.title = '播放音乐';
          window.showMessage('音乐已暂停', 3000);
        }
      }
    });

    // 5. 夜间模式快捷切换
    addButton(toolsContainer, {
      icon: '🌓',
      title: '切换主题',
      message: '切换主题模式~',
      onClick: () => {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
          themeToggle.click();
        }
      }
    });

    // 6. 截图按钮（增强版）
    addButton(toolsContainer, {
      icon: '📸',
      title: '截图保存',
      message: '咔嚓~ 照片拍好了！',
      onClick: () => {
        // 触发原有的截图功能
        const photoBtn = document.querySelector('.waifu-tool [title*="照"]');
        if (photoBtn && photoBtn !== event.target) {
          photoBtn.click();
        }
      }
    });

    // 7. 显示统计信息
    addButton(toolsContainer, {
      icon: '📊',
      title: '访问统计',
      message: '',
      onClick: () => {
        const visitCount = localStorage.getItem('visitCount') || '0';
        const firstVisit = localStorage.getItem('firstVisit') || new Date().toLocaleDateString();
        const message = `访问次数: ${visitCount} 次<br>首次访问: ${firstVisit}`;
        window.showMessage(message, 6000);
      }
    });

    // 8. 打开控制台（开发者工具）
    addButton(toolsContainer, {
      icon: '🔧',
      title: '开发者工具',
      message: '打开控制台看看吧~',
      onClick: () => {
        console.log('%c欢迎来到控制台！', 'color: #38b6ff; font-size: 20px; font-weight: bold;');
        console.log('%c这里是看板娘的秘密基地~', 'color: #ff6b95; font-size: 14px;');
        console.log('访问次数:', localStorage.getItem('visitCount'));
        console.log('当前主题:', document.documentElement.getAttribute('data-theme'));
      }
    });

    // 9. 清除缓存
    addButton(toolsContainer, {
      icon: '🗑️',
      title: '清除缓存',
      message: '缓存已清除！',
      onClick: () => {
        if (confirm('确定要清除所有缓存数据吗？')) {
          localStorage.clear();
          window.showMessage('缓存已清除，刷新页面生效~', 4000);
        }
      }
    });

    // 10. 显示快捷键帮助
    addButton(toolsContainer, {
      icon: '❓',
      title: '帮助',
      message: '',
      onClick: () => {
        const helpText = `
          <strong>快捷键：</strong><br>
          • 点击我可以互动哦~<br>
          • 拖动我可以移动位置<br>
          • 悬停导航可以看提示<br>
          • 滚动页面有惊喜~
        `;
        window.showMessage(helpText, 8000);
      }
    });

    console.log('自定义按钮已添加！');
  }, 5000); // 增加到5秒
}

// 辅助函数：添加按钮
function addButton(container, options) {
  const btn = document.createElement('span');
  btn.innerHTML = options.icon;
  btn.title = options.title;
  btn.style.cursor = 'pointer';
  
  btn.onclick = (e) => {
    e.preventDefault();
    if (options.message && window.showMessage) {
      window.showMessage(options.message, 3000);
    }
    if (options.onClick) {
      options.onClick();
    }
  };
  
  container.appendChild(btn);
  return btn;
}

// 记录首次访问时间
if (!localStorage.getItem('firstVisit')) {
  localStorage.setItem('firstVisit', new Date().toLocaleDateString('zh-CN'));
}

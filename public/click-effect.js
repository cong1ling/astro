// 鼠标点击特效
console.log('鼠标点击特效已加载');

// 可选的文字数组 - 使用优雅的符号替代 emoji
const texts = ['♥', '★', '✦', '✧', '◆', '◇', '●', '○', '▪', '▫', '■', '□'];

// 创建点击特效
function createClickEffect(e) {
  // 创建容器
  const effect = document.createElement('div');
  effect.className = 'click-effect';
  
  // 随机选择一个文字或使用爱心
  const text = texts[Math.floor(Math.random() * texts.length)];
  effect.textContent = text;
  
  // 设置位置
  effect.style.left = e.pageX + 'px';
  effect.style.top = e.pageY + 'px';
  
  // 随机颜色（从主题色中选择）
  const colors = [
    'linear-gradient(135deg, #38b6ff, #ff6b95)',
    'linear-gradient(135deg, #a855f7, #ff6b95)',
    'linear-gradient(135deg, #38b6ff, #a855f7)',
    'linear-gradient(135deg, #ff6b95, #ffd700)',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  effect.style.background = randomColor;
  effect.style.webkitBackgroundClip = 'text';
  effect.style.webkitTextFillColor = 'transparent';
  effect.style.backgroundClip = 'text';
  
  // 添加到页面
  document.body.appendChild(effect);
  
  // 动画结束后移除
  setTimeout(() => {
    effect.remove();
  }, 1000);
}

// 监听点击事件
document.addEventListener('click', createClickEffect);

// 添加样式
const style = document.createElement('style');
style.textContent = `
  .click-effect {
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    pointer-events: none;
    z-index: 9999;
    user-select: none;
    animation: click-effect-animation 1s ease-out forwards;
  }
  
  @keyframes click-effect-animation {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -80px) scale(1.2) rotate(10deg);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -120px) scale(0.8) rotate(-10deg);
    }
  }
`;
document.head.appendChild(style);

// 可选：添加涟漪效果
function createRipple(e) {
  const ripple = document.createElement('div');
  ripple.className = 'click-ripple';
  
  ripple.style.left = e.pageX + 'px';
  ripple.style.top = e.pageY + 'px';
  
  document.body.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// 同时添加涟漪效果
document.addEventListener('click', createRipple);

// 涟漪样式
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .click-ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(56, 182, 255, 0.6);
    pointer-events: none;
    z-index: 9998;
    animation: ripple-animation 0.6s ease-out forwards;
    transform: translate(-50%, -50%);
  }
  
  @keyframes ripple-animation {
    0% {
      width: 20px;
      height: 20px;
      opacity: 1;
      border-width: 2px;
    }
    100% {
      width: 80px;
      height: 80px;
      opacity: 0;
      border-width: 1px;
    }
  }
  
  html[data-theme='dark'] .click-ripple {
    border-color: rgba(168, 85, 247, 0.6);
  }
`;
document.head.appendChild(rippleStyle);

console.log('鼠标点击特效初始化完成');

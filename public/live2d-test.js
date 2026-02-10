// 测试脚本 - 用于调试 Live2D 按钮
console.log('=== Live2D 测试脚本开始 ===');

// 检查 Live2D 是否加载
function checkLive2D() {
  console.log('检查 Live2D 状态:');
  console.log('- window.showMessage:', typeof window.showMessage);
  console.log('- .waifu 元素:', document.querySelector('#waifu'));
  console.log('- .waifu-tool 元素:', document.querySelector('.waifu-tool'));
  
  const toolsContainer = document.querySelector('.waifu-tool');
  if (toolsContainer) {
    console.log('- 工具栏子元素数量:', toolsContainer.children.length);
    console.log('- 工具栏 HTML:', toolsContainer.innerHTML.substring(0, 200));
  }
}

// 立即检查
checkLive2D();

// 3秒后检查
setTimeout(() => {
  console.log('=== 3秒后检查 ===');
  checkLive2D();
}, 3000);

// 5秒后检查
setTimeout(() => {
  console.log('=== 5秒后检查 ===');
  checkLive2D();
  
  // 尝试添加一个测试按钮
  const toolsContainer = document.querySelector('.waifu-tool');
  if (toolsContainer) {
    console.log('尝试添加测试按钮...');
    const testBtn = document.createElement('span');
    testBtn.innerHTML = '🧪';
    testBtn.title = '测试按钮';
    testBtn.style.cursor = 'pointer';
    testBtn.onclick = () => {
      console.log('测试按钮被点击！');
      if (window.showMessage) {
        window.showMessage('测试按钮工作正常！', 3000);
      } else {
        alert('测试按钮工作正常！');
      }
    };
    toolsContainer.appendChild(testBtn);
    console.log('测试按钮已添加！');
  } else {
    console.log('工具栏仍未找到');
  }
}, 5000);

// 10秒后最终检查
setTimeout(() => {
  console.log('=== 10秒后最终检查 ===');
  checkLive2D();
}, 10000);

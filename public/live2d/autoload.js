(function() {
    console.log('Live2D 本地加载脚本启动');
    
    var script = document.createElement('script');
    script.src = 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js';
    script.onload = function() {
        console.log('Live2D 核心库加载完成');
        initKoharu();
    };
    document.body.appendChild(script);
    
    function initKoharu() {
        var waifu = document.createElement('div');
        waifu.id = 'waifu';
        waifu.style.cssText = 'position: fixed; bottom: 0; left: 0; z-index: 999;';
        
        var canvas = document.createElement('canvas');
        canvas.id = 'live2d';
        canvas.width = 280;
        canvas.height = 250;
        canvas.style.cssText = 'pointer-events: auto;';
        
        waifu.appendChild(canvas);
        document.body.appendChild(waifu);
        
        var modelUrl = 'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json';
        
        if (typeof loadlive2d === 'function') {
            loadlive2d('live2d', modelUrl);
            console.log('Koharu 模型加载中...');
        } else {
            console.error('loadlive2d 函数未找到');
        }
        
        canvas.addEventListener('click', function() {
            var messages = [
                '你好呀~',
                '今天也要加油哦！',
                '有什么我可以帮你的吗？',
                '点击我干嘛~',
                '嘿嘿~'
            ];
            if (window.showMessage) {
                window.showMessage(messages[Math.floor(Math.random() * messages.length)], 3000);
            }
        });
    }
})();

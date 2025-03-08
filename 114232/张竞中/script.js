// 这里可以添加一些交互功能，例如音频播放控制等
const audio = document.getElementById('xinyang-audio');

// 示例：当页面加载完成后自动播放音频
window.addEventListener('load', function () {
    audio.play().catch(function (error) {
        console.log('音频播放失败:', error);
    });
});
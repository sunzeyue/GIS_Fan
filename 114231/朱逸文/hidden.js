// 获取header元素
const header = document.getElementById('header');

// 获取body元素
const body = document.body;

// 设置5秒后自动添加hidden类，触发滑动消失的效果
setTimeout(() => {
    header.classList.add('hidden');  // 隐藏header
    body.classList.add('header-hidden');  // 让页面内容向上移动
}, 3000); // 5000毫秒（即5秒）后关闭

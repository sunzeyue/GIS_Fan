const quotes = [
    "生活就像一盒巧克力，你永远不知道你会得到什么。",
    "成功的秘诀在于坚持自己的目标和信念。",
    "不要等待机会，而要创造机会。",
    "失败是成功之母。",
    "知识就是力量。",
    "行动是治愈恐惧的良药。",
    "梦想还是要有的，万一实现了呢？",
    "今天的努力，是为了明天的自由。",
    "人生没有彩排，每一天都是现场直播。",
    "只有不断找寻机会的人才会及时把握机会。"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomIndex];
}

// 页面加载时显示一条随机名言
window.onload = generateQuote;
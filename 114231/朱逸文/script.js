let currentIndex = 0;
const newsItems = document.querySelectorAll('.news-item');
const totalNews = newsItems.length;

// 显示下一条新闻
function showNextNews() {
    // 隐藏当前的新闻项
    newsItems[currentIndex].style.display = 'none';

    // 更新索引，循环到下一个新闻项
    currentIndex = (currentIndex + 1) % totalNews;

    // 显示下一个新闻项
    newsItems[currentIndex].style.display = 'block';
}

// 初始化：显示第一条新闻
newsItems[currentIndex].style.display = 'block';
setInterval(showNextNews, 3000);
// 监听“下一条新闻”按钮的点击事件
document.getElementById('next-btn').addEventListener('click', showNextNews);


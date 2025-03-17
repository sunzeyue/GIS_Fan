src="https://cdn.jsdelivr.net/npm/chart.js"
function scrollToSection(id) {
    var element = document.getElementById(id);
    if (element) {
        var offset = document.querySelector(".navbar").offsetHeight; 
        var targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        document.querySelectorAll(".navbar a").forEach(link => link.classList.remove("active"));
        document.querySelector(`.navbar a[href="javascript:void(0)"][onclick="scrollToSection('${id}')"]`).classList.add("active");
        }
    }
    document.addEventListener("scroll", function () 
    {
    var sections = ["intro", "map","food", "scenery","music","economy" ];
    var scrollPosition = window.scrollY + document.querySelector(".navbar").offsetHeight + 10; 

    sections.forEach(id => {
        var section = document.getElementById(id);
        if (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll(".navbar a").forEach(link => link.classList.remove("active"));
                document.querySelector(`.navbar a[href="javascript:void(0)"][onclick="scrollToSection('${id}')"]`).classList.add("active");
                }
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
    console.log("页面加载完成，开始初始化 JavaScript");
    // 轮播图片功能 
    var images = document.querySelectorAll("#imageList li");
    var dots = document.querySelectorAll("#dots li");
    var currentIndex = 0;
    var totalImages = images.length;
    var intervalTime = 3000;
    var timer;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? 1 : 0;
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function startAutoSlide() {
        timer = setInterval(nextImage, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(timer);
    }

    // 初始化轮播
    if (images.length > 0) {
        images[currentIndex].style.opacity = 1;
        startAutoSlide();
    } else {
        console.warn("找不到轮播图片，请检查 #imageList 结构");
    }

    // 绑定鼠标悬停事件，停止或继续轮播
    var content = document.querySelector(".content");
    if (content) {
        content.addEventListener("mouseover", stopAutoSlide);
        content.addEventListener("mouseout", startAutoSlide);
    } else {
        console.warn("找不到 .content 区域");
    }

    // 绑定小圆点点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // 美食图片切换 
    function changeFood(imageSrc) {
        var foodImage = document.getElementById("foodImage");
        if (foodImage) {
            foodImage.src = imageSrc;
        } else {
            console.warn("找不到 foodImage 图片元素");
        }
    }

    window.changeFood = changeFood;  

    // 浙江地图绘制 
    var canvas = document.getElementById("myCanvas");
    if (canvas) {
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = "image/Zhejiang_in_China.png";
        img.onload = function () {
            ctx.drawImage(img, 10, 10);
        };

        ctx.fillStyle = "#66cc66";
        ctx.fillRect(50, 50, 200, 100);

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(150, 100, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "16px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("杭州", 160, 105);
    } else {
        console.warn("找不到浙江地图的 Canvas（myCanvas）");
    }

    });
    window.onload = function () {
    console.log("页面完全加载，开始初始化 GDP 折线图");

    // 确保 Chart.js 加载成功
    if (typeof Chart === "undefined") {
        console.error("Chart.js 未正确加载，请检查 script 引入路径");
        return;
    }

    // 获取 GDP 折线图的 Canvas
    var gdpCanvas = document.getElementById('gdpChart');
    if (!gdpCanvas) {
        console.error("找不到 gdpChart 画布，请检查 HTML 代码");
        return;
    }

    var gdpCtx = gdpCanvas.getContext('2d');

    // GDP 数据
    var gdpYears = ['2022年', '2023年', '2024年'];
    var gdpValues = [77715, 82553, 90100]; 

    // **计算 Y 轴合理的最小值和最大值**
    var minGdp = Math.min(...gdpValues);
    var maxGdp = Math.max(...gdpValues);

    // 计算合理的 Y 轴范围，防止拉伸
    var yAxisMin = minGdp - 2000;  
    var yAxisMax = maxGdp + 2000; 

    // 计算合适的刻度步长
    var stepSize = Math.ceil((yAxisMax - yAxisMin) / 6 / 1000) * 1000; 

    // 生成 GDP 折线图
    var gdpChart = new Chart(gdpCtx, {
        type: 'line',
        data: {
            labels: gdpYears,
            datasets: [{
                label: '地区生产总值（GDP，亿元）',
                data: gdpValues,
                borderColor: 'rgba(0, 123, 204, 1)',
                backgroundColor: 'rgba(0, 123, 204, 0.1)',
                fill: true,
                tension: 0.3,
                pointRadius: 6,
                pointBackgroundColor: 'rgba(0, 123, 204, 1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,  
            aspectRatio: 2,  
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '年份',
                        color: '#333',
                        font: { size: 16, weight: 'bold' }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'GDP（亿元）',
                        color: '#333',
                        font: { size: 16, weight: 'bold' }
                    },
                    beginAtZero: false,  
                    suggestedMin: yAxisMin,
                    suggestedMax: yAxisMax,
                    ticks: {
                        stepSize: stepSize,  
                        callback: function(value) {
                            return value.toLocaleString() + ' 亿';
                        }
                    }
                }
            }
        }
    });
    console.log("GDP 折线图成功加载");
    function togglePanel() {
            var panel = document.getElementById("infoPanel");
            var btn = document.getElementById("toggleBtn");
            
            panel.classList.toggle("open");
            
            btn.innerHTML = panel.classList.contains("open") ? "❮" : "❯";
        }
};
function togglePanel() 
        {
            var panel = document.getElementById("infoPanel");
            var btn = document.getElementById("toggleBtn");
            
            panel.classList.toggle("open");
            
            btn.innerHTML = panel.classList.contains("open") ? "❮" : "❯";
        }

        document.getElementById("toggleBtn").addEventListener("click", togglePanel);

        // 切换图片
function changeScenery(imageSrc) {
    var sceneryImage = document.getElementById("sceneryImage");

    console.log("点击了:", imageSrc); // 调试

    if (!sceneryImage) {
        console.error("错误: sceneryImage 图片标签未找到");
        return;
    }

    sceneryImage.src = imageSrc;

    // 检查图片是否更改
    setTimeout(function () {
        console.log("当前图片路径:", sceneryImage.src);
    }, 500);
}
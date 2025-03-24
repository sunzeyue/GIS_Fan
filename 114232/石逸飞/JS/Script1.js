< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>优化后的绘图与表单处理</title>
                    <style>
        /* 可根据需要添加样式 */
                        .section-container {
                            margin - bottom: 20px;
        }

                        .message-section form input,
                        .message-section form textarea {
                            display: block;
                        margin-bottom: 10px;
        }
                    </style>
                </head>

                <body>
                    <!-- Canvas 元素 -->
                    <canvas id="myCanvas" width="800" height="600"></canvas>

                    <!-- 可切换内容的部分 -->
                    <div class="section-container">
                        <h2 onclick="toggleContent('content1')">点击切换内容 1</h2>
                        <div id="content1" style="display: none;">
                            这是内容 1 的详细信息。
                        </div>
                    </div>

                    <!-- 表单部分 -->
                    <div class="message-section">
                        <form>
                            <input type="text" id="name" placeholder="姓名" required>
                                <input type="email" id="email" placeholder="邮箱" required>
                                    <textarea id="message" placeholder="留言" required></textarea>
                                    <input type="submit" value="提交">
                                    </form>
                                </div>

                                <script>
                                    window.onload = function () {
                                        // 初始化绘图和交互功能
                                        initDrawing();
                                    initContentToggle();
                                    initFormValidation();
        };

                                    // 初始化绘图功能
                                    function initDrawing() {
            try {
                // 获取 canvas 元素
                const canvas = document.getElementById('myCanvas');
                                    if (!canvas) {
                                        console.error('未找到 canvas 元素');
                                    return;
                }
                                    // 获取 2D 绘图上下文
                                    const ctx = canvas.getContext('2d');
                                    if (!ctx) {
                                        console.error('无法获取 2D 绘图上下文');
                                    return;
                }

                                    // 太阳的配置对象
                                    const sunConfig = {
                                        x: 200,
                                    y: 150,
                                    radius: 80,
                                    fillColor: 'yellow',
                                    rayCount: 20,
                                    rayLength: 100,
                                    rayColor: 'orange',
                                    rayWidth: 3
                };

                                    // 绘制太阳
                                    function drawSun() {
                                        ctx.beginPath();
                                    // 绘制太阳的圆形
                                    ctx.arc(sunConfig.x, sunConfig.y, sunConfig.radius, 0, 2 * Math.PI);
                                    // 设置填充颜色
                                    ctx.fillStyle = sunConfig.fillColor;
                                    ctx.fill();

                                    for (let i = 0; i < sunConfig.rayCount; i++) {
                        const angle = (i * (2 * Math.PI / sunConfig.rayCount));
                                    const x1 = sunConfig.x;
                                    const y1 = sunConfig.y;
                                    const x2 = x1 + sunConfig.rayLength * Math.cos(angle);
                                    const y2 = y1 + sunConfig.rayLength * Math.sin(angle);
                                    ctx.beginPath();
                                    ctx.moveTo(x1, y1);
                                    ctx.lineTo(x2, y2);
                                    // 设置线条颜色
                                    ctx.strokeStyle = sunConfig.rayColor;
                                    ctx.lineWidth = sunConfig.rayWidth;
                                    ctx.stroke();
                    }
                }

                                    // 云朵的配置对象
                                    const cloudConfig = {
                                        radius: 30,
                                    fillColor: 'white',
                                    strokeColor: 'gray',
                                    strokeWidth: 2
                };

                                    // 绘制云朵
                                    function drawCloud(x, y) {
                                        ctx.beginPath();
                                    for (let i = 0; i < 5; i++) {
                        const cloudX = x + i * 50;
                                    const cloudY = y + Math.random() * 30;
                                    ctx.arc(cloudX, cloudY, cloudConfig.radius, 0, 2 * Math.PI);
                    }
                                    // 设置填充颜色
                                    ctx.fillStyle = cloudConfig.fillColor;
                                    ctx.fill();
                                    // 设置描边颜色
                                    ctx.strokeStyle = cloudConfig.strokeColor;
                                    ctx.lineWidth = cloudConfig.strokeWidth;
                                    ctx.stroke();
                }

                                    // 绘制场景
                                    function drawScene() {
                                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    drawSun();
                                    drawCloud(400, 250);
                                    drawCloud(600, 200);
                }

                                    drawScene();
            } catch (error) {
                                        console.error('绘图过程中出现错误:', error);
            }
        }

                                    // 初始化内容切换功能
                                    function initContentToggle() {
                                        // 切换内容显示
                                        function toggleContent(id) {
                                            const content = document.getElementById(id);
                                            if (content) {
                                                content.style.display = content.style.display === 'block' ? 'none' : 'block';
                                            }
                                        }

            const sectionHeaders = document.querySelectorAll('.section-container h2');
            sectionHeaders.forEach(header => {
                                        header.addEventListener('click', function () {
                                            const id = this.getAttribute('onclick').match(/toggleContent\('(.*)'\)/)[1];
                                            toggleContent(id);
                                        });
            });
        }

                                    // 初始化表单验证功能
                                    function initFormValidation() {
                                        // 表单验证
                                        function validateForm() {
                                            const name = document.getElementById('name').value;
                                            const email = document.getElementById('email').value;
                                            const message = document.getElementById('message').value;

                                            if (!name || !email || !message) {
                                                alert('请填写所有必填字段');
                                                return false;
                                            }

                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                            if (!emailRegex.test(email)) {
                                                alert('请输入有效的邮箱地址');
                                                return false;
                                            }

                                            return true;
                                        }

            const form = document.querySelector('.message-section form');
                                    if (form) {
                                        form.addEventListener('submit', function (e) {
                                            if (!validateForm()) {
                                                e.preventDefault();
                                            }
                                        });
            }
        }
                                </script>
                            </body>

                        </html>

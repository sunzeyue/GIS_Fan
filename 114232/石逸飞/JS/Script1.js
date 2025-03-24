< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>�Ż���Ļ�ͼ�������</title>
                    <style>
        /* �ɸ�����Ҫ�����ʽ */
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
                    <!-- Canvas Ԫ�� -->
                    <canvas id="myCanvas" width="800" height="600"></canvas>

                    <!-- ���л����ݵĲ��� -->
                    <div class="section-container">
                        <h2 onclick="toggleContent('content1')">����л����� 1</h2>
                        <div id="content1" style="display: none;">
                            �������� 1 ����ϸ��Ϣ��
                        </div>
                    </div>

                    <!-- ������ -->
                    <div class="message-section">
                        <form>
                            <input type="text" id="name" placeholder="����" required>
                                <input type="email" id="email" placeholder="����" required>
                                    <textarea id="message" placeholder="����" required></textarea>
                                    <input type="submit" value="�ύ">
                                    </form>
                                </div>

                                <script>
                                    window.onload = function () {
                                        // ��ʼ����ͼ�ͽ�������
                                        initDrawing();
                                    initContentToggle();
                                    initFormValidation();
        };

                                    // ��ʼ����ͼ����
                                    function initDrawing() {
            try {
                // ��ȡ canvas Ԫ��
                const canvas = document.getElementById('myCanvas');
                                    if (!canvas) {
                                        console.error('δ�ҵ� canvas Ԫ��');
                                    return;
                }
                                    // ��ȡ 2D ��ͼ������
                                    const ctx = canvas.getContext('2d');
                                    if (!ctx) {
                                        console.error('�޷���ȡ 2D ��ͼ������');
                                    return;
                }

                                    // ̫�������ö���
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

                                    // ����̫��
                                    function drawSun() {
                                        ctx.beginPath();
                                    // ����̫����Բ��
                                    ctx.arc(sunConfig.x, sunConfig.y, sunConfig.radius, 0, 2 * Math.PI);
                                    // ���������ɫ
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
                                    // ����������ɫ
                                    ctx.strokeStyle = sunConfig.rayColor;
                                    ctx.lineWidth = sunConfig.rayWidth;
                                    ctx.stroke();
                    }
                }

                                    // �ƶ�����ö���
                                    const cloudConfig = {
                                        radius: 30,
                                    fillColor: 'white',
                                    strokeColor: 'gray',
                                    strokeWidth: 2
                };

                                    // �����ƶ�
                                    function drawCloud(x, y) {
                                        ctx.beginPath();
                                    for (let i = 0; i < 5; i++) {
                        const cloudX = x + i * 50;
                                    const cloudY = y + Math.random() * 30;
                                    ctx.arc(cloudX, cloudY, cloudConfig.radius, 0, 2 * Math.PI);
                    }
                                    // ���������ɫ
                                    ctx.fillStyle = cloudConfig.fillColor;
                                    ctx.fill();
                                    // ���������ɫ
                                    ctx.strokeStyle = cloudConfig.strokeColor;
                                    ctx.lineWidth = cloudConfig.strokeWidth;
                                    ctx.stroke();
                }

                                    // ���Ƴ���
                                    function drawScene() {
                                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    drawSun();
                                    drawCloud(400, 250);
                                    drawCloud(600, 200);
                }

                                    drawScene();
            } catch (error) {
                                        console.error('��ͼ�����г��ִ���:', error);
            }
        }

                                    // ��ʼ�������л�����
                                    function initContentToggle() {
                                        // �л�������ʾ
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

                                    // ��ʼ������֤����
                                    function initFormValidation() {
                                        // ����֤
                                        function validateForm() {
                                            const name = document.getElementById('name').value;
                                            const email = document.getElementById('email').value;
                                            const message = document.getElementById('message').value;

                                            if (!name || !email || !message) {
                                                alert('����д���б����ֶ�');
                                                return false;
                                            }

                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                            if (!emailRegex.test(email)) {
                                                alert('��������Ч�������ַ');
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

// 创建二进制雨
        function createBinaryRain() {
            const container = document.getElementById('binary-rain');
            const digitCount = 50;
            
            for (let i = 0; i < digitCount; i++) {
                const digit = document.createElement('div');
                digit.classList.add('binary-digit');
                digit.textContent = Math.random() > 0.5 ? '1' : '0';
                
                // 随机位置
                digit.style.left = `${Math.random() * 100}%`;
                
                // 随机动画延迟和持续时间
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 4;
                
                digit.style.animation = `fall ${duration}s linear ${delay}s infinite`;
                digit.style.animationDuration = `${duration}s`;
                
                container.appendChild(digit);
            }
        }
        
        // 创建代码行
        function createCodeLines() {
            const screen = document.querySelector('.screen');
            for (let i = 0; i < 8; i++) {
                const line = document.createElement('div');
                line.classList.add('code-line');
                line.style.top = `${i * 6}px`;
                line.style.animationDelay = `${i * 0.4}s`;
                screen.appendChild(line);
            }
        }
        
        // 入场动画控制
        document.getElementById('enter-btn').addEventListener('click', function() {
            const introScreen = document.getElementById('intro-screen');
            const mainContent = document.getElementById('main-content');
            
            // 添加淡出类
            introScreen.classList.add('fade-out');
            
            // 淡出动画完成后显示主内容
            setTimeout(function() {
                mainContent.style.display = 'block';
                // 平滑滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1000);
        });
        
        // 暗色模式切换
        document.getElementById('theme-toggle').addEventListener('click', function() {
            const body = document.body;
            const button = document.getElementById('theme-toggle');
            
            body.classList.toggle('dark-mode');
            
            updateThemeButton();
        });

// 页面加载完成后初始化
        window.addEventListener('DOMContentLoaded', function() {
            createBinaryRain();
            createCodeLines();
            initializeLanguageSwitcher();
        });
        
        // 平滑滚动到锚点
        document.addEventListener('click', function(e) {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                
                const targetId = e.target.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });

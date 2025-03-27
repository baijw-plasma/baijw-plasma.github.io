// 代码打字机动画效果
document.addEventListener('DOMContentLoaded', function() {
    const codeElement = document.getElementById('typing-code');
    const codeSnippets = [
        `// 欢迎来到码上蹚平\nfunction welcome() {\n  console.log("专业的编程教育服务");\n}`,
        `# 计算机硬件解决方案\nclass HardwareSolution:\n  def __init__(self):\n    self.service = "专业硬件支持"`,
        `/* 创新科技服务 */\nconst service = {\n  name: "码上蹚平",\n  category: ["编程教育", "硬件支持"]\n};`
    ];
    
    let currentSnippet = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeCode() {
        const snippet = codeSnippets[currentSnippet];
        
        if (isDeleting) {
            codeElement.textContent = snippet.substring(0, currentChar - 1);
            currentChar--;
            typingSpeed = 50;
        } else {
            codeElement.textContent = snippet.substring(0, currentChar + 1);
            currentChar++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentChar === snippet.length) {
            isDeleting = true;
            typingSpeed = 1500; // 暂停一下
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentSnippet = (currentSnippet + 1) % codeSnippets.length;
            typingSpeed = 500; // 切换代码前的暂停
        }
        
        setTimeout(typeCode, typingSpeed);
    }
    
    // 启动动画
    setTimeout(typeCode, 1000);

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 联系表单处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 表单验证
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('请填写所有必填字段');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('请输入有效的电子邮箱地址');
                return;
            }
            
            // 模拟表单提交
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.disabled = true;
            submitButton.textContent = '发送中...';
            
            // 这里应该是实际的AJAX请求
            setTimeout(() => {
                alert('感谢您的留言！我们会尽快与您联系。');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = '发送消息';
            }, 1500);
        });
    }
});

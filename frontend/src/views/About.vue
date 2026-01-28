<template>
  <div class="about">
    <!-- 飘雪效果 -->
    <AsyncSnowfall :icon-type="1" />

    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">关于我们</h1>
        <p class="hero-subtitle">了解新年惊喜项目的背景和团队</p>
      </div>
    </section>

    <!-- 项目介绍 -->
    <section class="project-section">
      <div class="section-header">
        <h2 class="section-title">项目介绍</h2>
        <p class="section-description">了解新年惊喜项目</p>
      </div>

      <div class="project-content">
        <div class="project-image">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20Chinese%20New%20Year%20project%20with%20traditional%20cultural%20elements%2C%20festive%20atmosphere%2C%20high%20quality%20digital%20art&image_size=landscape_16_9"
            alt="项目介绍"
          />
        </div>
        <div class="project-text">
          <p class="project-paragraph">
            新年惊喜项目是一个个人使用的在线平台，融合了安徽、河南地区的新年文化元素，通过现代数字技术展示传统地域文化的魅力，为用户带来独特的新年体验。
          </p>
          <p class="project-paragraph">我们的目标是：</p>
          <ul class="project-goals">
            <li>传承和弘扬安徽、河南地区的优秀传统文化</li>
            <li>通过现代数字技术创新传统文化的展示方式</li>
            <li>为用户提供丰富多样的新年互动体验</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="tech-section">
      <div class="section-header">
        <h2 class="section-title">技术栈</h2>
        <p class="section-description">项目使用的技术和工具</p>
      </div>

      <div class="tech-grid">
        <div v-for="(tech, index) in techStack" :key="index" class="tech-card">
          <div class="tech-icon">
            {{ tech.icon }}
          </div>
          <h3 class="tech-name">
            {{ tech.name }}
          </h3>
          <p class="tech-description">
            {{ tech.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-text">新年惊喜</span>
            <span class="logo-icon">🎊</span>
          </div>
          <p class="footer-description">为您带来最美好的新年体验，让科技为传统节日增添光彩。</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2026 新年惊喜. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AsyncSnowfall from '../components/AsyncSnowfall.vue'

// 技术栈数据
const techStack = ref([
  {
    name: 'Vue 3',
    description: '前端框架，使用Composition API构建响应式界面',
    icon: '⚡'
  },
  {
    name: 'Spring Boot',
    description: '后端框架，构建RESTful API',
    icon: '☕'
  },
  {
    name: 'Vite',
    description: '前端构建工具，提供快速的开发体验',
    icon: '🚀'
  },
  {
    name: 'Pinia',
    description: '状态管理库，替代Vuex的轻量级方案',
    icon: '📦'
  },
  {
    name: 'Firebase',
    description: '后端服务，提供实时数据库和认证功能',
    icon: '🔥'
  },
  {
    name: 'Three.js',
    description: '3D库，创建沉浸式的3D体验',
    icon: '🎨'
  }
])
</script>

<style scoped>
/* 全局样式 */
:root {
  --primary-color: #c91f37;
  --secondary-color: #8a0707;
  --accent-color: #d4af37;
  --gold-color: #d4af37;
  --bg-color: #f5f5dc;
  --text-color: #333;
  --card-bg: #ffffff;
  --spacing-sm: 10px;
  --spacing-md: 20px;
  --spacing-lg: 30px;
  --spacing-xl: 48px;
  --border-radius: 18px;
  --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.about {
  min-height: 100vh;
  background: var(--bg-color);
  position: relative;
}

/* 英雄区域 */
.hero {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 50%,
    var(--accent-color) 100%
  );
  color: white;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: bounceIn 1s ease;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.95;
  margin-bottom: 32px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease 0.3s both;
}

/* 章节样式 */
.project-section,
.team-section,
.tech-section,
.contact-section,
.disclaimer-section {
  padding: 100px 0;
  position: relative;
}

.project-section {
  background: var(--card-bg);
}

.team-section {
  background: var(--bg-color);
}

.tech-section {
  background: var(--card-bg);
}

.contact-section {
  background: var(--bg-color);
}

.disclaimer-section {
  background: var(--card-bg);
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.section-description {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* 项目内容 */
.project-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 64px;
  align-items: center;
  flex-wrap: wrap;
}

.project-image {
  flex: 1;
  min-width: 300px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.project-image img {
  width: 100%;
  height: auto;
}

.project-text {
  flex: 1;
  min-width: 300px;
}

.project-paragraph {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.project-goals {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-goals li {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
  position: relative;
  padding-left: 24px;
}

.project-goals li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

/* 技术栈网格 */
.tech-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

/* 技术卡片 */
.tech-card {
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tech-icon {
  font-size: 48px;
  margin-bottom: 24px;
  animation: bounce 2s ease-in-out infinite;
}

.tech-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.tech-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 按钮样式 */
.primary-btn {
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(201, 31, 55, 0.3);
}

.primary-btn:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(201, 31, 55, 0.4);
}

/* 页脚 */
.footer {
  background: var(--primary-color);
  color: white;
  padding: 80px 0 32px;
  margin-top: 100px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  margin-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.footer-description {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.6;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer-links li a:hover {
  color: white;
  transform: translateX(4px);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-icon {
  font-size: 16px;
}

.contact-value {
  font-size: 14px;
  opacity: 0.9;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.copyright {
  font-size: 14px;
  opacity: 0.8;
}

/* 动画效果 */
@keyframes bounceIn {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
    padding: 0 16px;
  }

  .project-content {
    flex-direction: column;
    padding: 0 16px;
    gap: 32px;
  }

  .project-image,
  .project-text {
    flex: 1;
    width: 100%;
  }

  .tech-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  }

  .tech-card {
    padding: 24px 16px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 80px 0;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .project-section,
  .tech-section {
    padding: 60px 0;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .project-content {
    padding: 0 16px;
  }

  .tech-card {
    padding: 24px 16px;
  }

  .tech-icon {
    font-size: 40px;
  }

  .tech-name {
    font-size: 18px;
  }

  .tech-description {
    font-size: 14px;
  }
}

/* 桌面端大屏幕优化 */
@media (min-width: 1400px) {
  .project-content,
  .tech-grid,
  .footer-content {
    max-width: 1400px;
  }

  .project-content {
    gap: 80px;
  }

  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 64px;
  }

  .hero-content {
    max-width: 900px;
  }

  .hero-title {
    font-size: 56px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .section-title {
    font-size: 40px;
  }

  .section-description {
    font-size: 20px;
    max-width: 700px;
  }

  .tech-card {
    padding: 40px 32px;
  }

  .tech-icon {
    font-size: 56px;
  }

  .tech-name {
    font-size: 24px;
  }

  .tech-description {
    font-size: 16px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .primary-btn,
  .tech-card {
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
  }

  .primary-btn:active {
    transform: scale(0.95);
  }

  .tech-card:active {
    transform: translateY(-2px);
  }
}
</style>

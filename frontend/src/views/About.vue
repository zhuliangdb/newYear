<template>
  <div class="about">
    <!-- 背景装饰 -->
    <div class="background-decor" />

    <!-- 新年装饰 -->
    <div class="new-year-decorations">
      <div class="lantern" style="left: 10%; top: 10%; animation-delay: 0s">🏮</div>
      <div class="lantern" style="right: 10%; top: 15%; animation-delay: 1s">🏮</div>
      <div class="chinese-knot" style="left: 5%; top: 40%">🧧</div>
      <div class="chinese-knot" style="right: 5%; top: 45%">🧧</div>
    </div>

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
        <p class="section-description">了解新年惊喜项目的初衷和目标</p>
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
            新年惊喜项目是一个融合安徽、河南地区特有新年文化元素的在线平台，旨在通过现代数字技术展示传统地域文化的魅力，为用户带来独特的新年体验。
          </p>
          <p class="project-paragraph">我们的目标是：</p>
          <ul class="project-goals">
            <li>传承和弘扬安徽、河南地区的优秀传统文化</li>
            <li>通过现代数字技术创新传统文化的展示方式</li>
            <li>为用户提供丰富多样的新年互动体验</li>
            <li>促进地域文化的交流和传播</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-section">
      <div class="section-header">
        <h2 class="section-title">团队介绍</h2>
        <p class="section-description">认识我们的核心团队成员</p>
      </div>

      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
          <div class="team-avatar">
            <img :src="member.avatar" :alt="member.name" />
          </div>
          <h3 class="team-name">
            {{ member.name }}
          </h3>
          <p class="team-role">
            {{ member.role }}
          </p>
          <p class="team-description">
            {{ member.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="tech-section">
      <div class="section-header">
        <h2 class="section-title">技术栈</h2>
        <p class="section-description">了解我们使用的技术和工具</p>
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

    <!-- 联系方式 -->
    <section class="contact-section">
      <div class="section-header">
        <h2 class="section-title">联系方式</h2>
        <p class="section-description">与我们取得联系</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h4 class="contact-title">邮箱</h4>
              <p class="contact-value">contact@newyearsurprise.com</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div class="contact-details">
              <h4 class="contact-title">电话</h4>
              <p class="contact-value">+86 123 4567 8910</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">🌐</div>
            <div class="contact-details">
              <h4 class="contact-title">网站</h4>
              <p class="contact-value">www.newyearsurprise.com</p>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <h3 class="form-title">发送消息</h3>
          <form class="message-form">
            <div class="form-group">
              <label for="name">姓名</label>
              <input id="name" type="text" placeholder="请输入您的姓名" />
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input id="email" type="email" placeholder="请输入您的邮箱" />
            </div>
            <div class="form-group">
              <label for="message">消息</label>
              <textarea id="message" rows="4" placeholder="请输入您的消息" />
            </div>
            <button type="submit" class="primary-btn">发送消息</button>
          </form>
        </div>
      </div>
    </section>

    <!-- 免责声明 -->
    <section class="disclaimer-section">
      <div class="section-header">
        <h2 class="section-title">免责声明</h2>
        <p class="section-description">了解项目的法律信息</p>
      </div>

      <div class="disclaimer-content">
        <p class="disclaimer-text">
          本项目仅用于展示和传播安徽、河南地区的新年文化，所有内容仅供参考。如有任何问题或建议，欢迎联系我们。
        </p>
        <p class="disclaimer-text">© 2026 新年惊喜项目. 保留所有权利。</p>
      </div>
    </section>

    <!-- 音乐播放器 -->
    <div class="music-player">
      <meting-js
        server="tencent"
        type="playlist"
        id="8205467723"
        fixed="true"
        mini="true"
        autoplay="false"
        theme="#c91f37"
        loop="all"
        order="random"
        preload="auto"
        volume="0.3"
        mutex="true"
        listFolded="true"
        listMaxHeight="340"
        lrcType="1"
      />
    </div>

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
        <div class="footer-section">
          <h4 class="footer-title">快速链接</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/"> 首页 </router-link>
            </li>
            <li>
              <router-link to="/new-year-surprise"> 新年惊喜 </router-link>
            </li>
            <li>
              <router-link to="/cultural-features"> 文化特色 </router-link>
            </li>
            <li>
              <router-link to="/activities"> 活动 </router-link>
            </li>
            <li>
              <router-link to="/about"> 关于我们 </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">联系我们</h4>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-value">contact@newyearsurprise.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span class="contact-value">+86 123 4567 8910</span>
            </div>
          </div>
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

// 团队成员数据
const teamMembers = ref([
  {
    name: '张三',
    role: '项目负责人',
    description: '负责项目的整体规划和协调，拥有丰富的文化项目管理经验',
    avatar:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20project%20manager%2C%20business%20attire%2C%20friendly%20smile%2C%20high%20quality%20professional%20portrait&image_size=square'
  },
  {
    name: '李四',
    role: '前端开发',
    description: '负责项目的前端开发，精通Vue.js和现代前端技术',
    avatar:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20frontend%20developer%2C%20casual%20attire%2C%20friendly%20smile%2C%20high%20quality%20professional%20portrait&image_size=square'
  },
  {
    name: '王五',
    role: '后端开发',
    description: '负责项目的后端开发，精通Java和Spring Boot框架',
    avatar:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20male%20backend%20developer%2C%20casual%20attire%2C%20friendly%20smile%2C%20high%20quality%20professional%20portrait&image_size=square'
  },
  {
    name: '赵六',
    role: 'UI设计师',
    description: '负责项目的UI设计，擅长将传统元素与现代设计相结合',
    avatar:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20female%20UI%20designer%2C%20creative%20attire%2C%20friendly%20smile%2C%20high%20quality%20professional%20portrait&image_size=square'
  }
])

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

/* 背景装饰 */
.background-decor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(201, 31, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
  z-index: -1;
  opacity: 0.4;
}

/* 新年装饰 */
.new-year-decorations {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1100;
}

/* 灯笼 */
.lantern {
  position: absolute;
  font-size: 48px;
  animation: lanternSwing 3s ease-in-out infinite;
  transform-origin: center top;
}

@keyframes lanternSwing {
  0%,
  100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
}

/* 中国结 */
.chinese-knot {
  position: absolute;
  font-size: 36px;
  animation: float 4s ease-in-out infinite;
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

/* 团队网格 */
.team-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

/* 团队卡片 */
.team-card {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.team-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.team-role {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.team-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
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

/* 联系内容 */
.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.contact-form {
  flex: 1;
  min-width: 300px;
  background: var(--card-bg);
  padding: 32px;
  border-radius: 24px;
  box-shadow: var(--box-shadow);
}

.contact-item {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: flex-start;
}

.contact-icon {
  font-size: 32px;
  color: var(--primary-color);
}

.contact-details h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.contact-details p {
  font-size: 14px;
  color: #666;
}

.form-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 24px;
  text-align: center;
}

.message-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(201, 31, 55, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* 免责声明内容 */
.disclaimer-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 32px;
  border-radius: 24px;
  text-align: center;
  box-shadow: var(--box-shadow);
}

.disclaimer-text {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
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

/* 音乐播放器样式 */
.music-player {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 600px;
}

/* 调整APlayer样式以匹配主题 */
:deep(.aplayer) {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

:deep(.aplayer-lrc-contents p.aplayer-lrc-current) {
  color: var(--primary-color);
}

:deep(.aplayer .aplayer-list ol li.aplayer-list-light) {
  color: var(--primary-color);
}

:deep(.aplayer .aplayer-button.aplayer-play .aplayer-icon) {
  color: var(--primary-color);
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
  }

  .project-content,
  .contact-content {
    flex-direction: column;
  }

  .project-image,
  .project-text,
  .contact-info,
  .contact-form {
    flex: 1;
    width: 100%;
  }

  .team-grid,
  .tech-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
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
  .team-section,
  .tech-section,
  .contact-section,
  .disclaimer-section {
    padding: 60px 0;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .project-content,
  .contact-content {
    padding: 0 16px;
  }

  .team-card,
  .tech-card,
  .contact-form {
    padding: 24px;
  }
}
</style>

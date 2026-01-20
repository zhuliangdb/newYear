<template>
  <div class="home">
    
    <!-- 简化的新年装饰 -->
    <div class="new-year-decorations">
      <!-- 春联 -->
      <div class="couplet" style="left: 5%; top: 20%;">一帆风顺年年好</div>
      <div class="couplet" style="right: 5%; top: 20%;">万事如意步步高</div>
      
      <!-- 鞭炮 -->
      <div class="firecracker" style="left: 8%; top: 30%; animation-delay: 2s;">🧨</div>
      <div class="firecracker" style="right: 8%; top: 30%; animation-delay: 3s;">🧨</div>
    </div>
    
    <!-- 使用雪花组件 - 减少雪花生成间隔并限制最大数量以优化首页性能 -->
    <Snowflake :interval="150" :maxCount="80" />
    
    <!-- 页面内容 -->
    <div class="home-content">
      <div class="cover">
        <h1 class="cover-title">🎉 新年到来 🎉</h1>
        <p class="cover-subtitle">欢迎来到2026新年主题页面</p>
        <div class="countdown">
          <span class="countdown-text">距离春节还有</span>
          <div class="countdown-time">
            <div class="countdown-item">
              <span class="countdown-number">{{ countdown.days }}</span>
              <span class="countdown-label">天</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="greeting-card">
        <h2 class="section-title">🎊 新年问候</h2>
        <p class="simple-greeting">愿你在新的一年里，所有美好都如期而至！</p>
      </div>
      
      <div class="action-section">
        <h2 class="section-title">✨ 探索更多</h2>
        <div class="action-buttons">
          <router-link to="/new-year-surprise" class="action-btn primary">
            🎁 查看完整新年惊喜
          </router-link>
        </div>
      </div>
      
      <!-- 新增：新年主题特色介绍 -->
      <div class="features-section">
        <h2 class="section-title">🎯 主题特色</h2>
        <div class="features-list">
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <div class="feature-content">
              <h3>精美装饰</h3>
              <p>丰富的新年元素，营造浓厚节日氛围</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎮</div>
            <div class="feature-content">
              <h3>互动体验</h3>
              <p>多种互动小游戏，增添节日乐趣</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💌</div>
            <div class="feature-content">
              <h3>温馨祝福</h3>
              <p>个性化祝福语，传递新年心意</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import Snowflake from '../components/Snowflake.vue';

// 响应式数据
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});
let countdownTimer = null; // 倒计时定时器

// 计算倒计时（天、时、分、秒）
const calculateCountdown = () => {
  // 计算距离2026年春节（2月17日）的时间差
  const now = new Date();
  const springFestival = new Date('2026-02-17');
  const diffTime = Math.abs(springFestival - now);
  
  // 计算天、时、分、秒
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  
  countdown.value = {
    days,
    hours,
    minutes,
    seconds
  };
};

// 生命周期钩子
onMounted(() => {
  calculateCountdown();
  
  // 设置每秒更新一次倒计时
  countdownTimer = setInterval(() => {
    calculateCountdown();
  }, 1000);
});

onBeforeUnmount(() => {
  // 清除倒计时定时器
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
});
</script>

<style scoped>
/* 全局样式 */
.home {
  position: relative;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f7f9fc 0%, #e8f0fe 100%);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-family: '微软雅黑', 'Microsoft YaHei', sans-serif;
}

.home-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}



/* 新年装饰 */
.new-year-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1100;
}

/* 春联 */
.couplet {
  position: absolute;
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: coupletFloat 4s ease-in-out infinite;
  writing-mode: vertical-rl;
  padding: 20px 10px;
  background: linear-gradient(180deg, #e74c3c 0%, #c0392b 100%);
  border-radius: 8px;
  height: 300px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 鞭炮 */
.firecracker {
  position: absolute;
  font-size: 48px;
  animation: firecrackerSparkle 2s ease-in-out infinite;
}

/* 动画效果 */
@keyframes coupletFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes firecrackerSparkle {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* 烟花效果容器 */
.fireworks-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
}



/* 封面样式 */
.cover {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 50%, #ff6b6b 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: slideInUp 1s ease;
}

.cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.cover > * {
  position: relative;
  z-index: 2;
}

.cover-title {
  font-size: 36px;
  margin-bottom: 15px;
  animation: bounceIn 1s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-weight: bold;
}

.cover-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease 0.3s both;
  color: #fff;
}

.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  animation: fadeInUp 1s ease 0.6s both;
}

.countdown-text {
  font-size: 18px;
  opacity: 0.95;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
}

.countdown-time {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.15);
  padding: 15px 25px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 70px;
  height: 60px;
}

.countdown-number {
  font-size: 42px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  font-family: 'Arial', sans-serif;
  width: 100%;
  text-align: center;
  line-height: 60px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.countdown-label {
  font-size: 14px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  margin: 5px 0 0 0;
  padding: 0;
  letter-spacing: 1px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3),
                0 0 30px rgba(255, 215, 0, 0.2) inset;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4),
                0 0 40px rgba(255, 215, 0, 0.3) inset;
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
                 3px 3px 6px rgba(0, 0, 0, 0.5);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 215, 0, 1),
                 0 0 40px rgba(255, 215, 0, 0.8),
                 3px 3px 6px rgba(0, 0, 0, 0.5);
  }
}

/* 问候卡片 */
.greeting-card {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: slideInUp 1s ease 0.2s both;
}

.section-title {
  color: #6e48aa;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  border-radius: 2px;
}

/* 新年祝福列表 */
.wishes-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.wish-item {
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  text-align: center;
  transition: all 0.3s ease;
}

.wish-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 100%);
}

/* 操作区域 */
.action-section {
  margin-bottom: 30px;
  animation: slideInUp 1s ease 0.4s both;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
}

.action-btn {
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(135deg, #6e48aa, #9d50bb);
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(110, 72, 170, 0.3);
  border: none;
  min-width: 200px;
  text-align: center;
}

.action-btn.primary {
  background: linear-gradient(135deg, #6e48aa, #9d50bb, #ff6b6b);
  box-shadow: 0 4px 12px rgba(110, 72, 170, 0.3);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(110, 72, 170, 0.4);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(110, 72, 170, 0.4);
}

/* 新年主题特色介绍 */
.features-section {
  margin-bottom: 30px;
  animation: slideInUp 1s ease 0.6s both;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 40px;
  margin-top: 5px;
  flex-shrink: 0;
}

.feature-content h3 {
  margin: 0 0 10px 0;
  color: #6e48aa;
  font-size: 20px;
  font-weight: bold;
}

.feature-content p {
  margin: 0;
  color: #555;
  font-size: 16px;
  line-height: 1.6;
}

/* 简化问候语样式 */
.simple-greeting {
  text-align: center;
  font-size: 16px;
  color: #533f03;
  line-height: 1.6;
  margin: 0;
  padding: 15px 0;
  font-weight: bold;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .cover-title {
    font-size: 28px;
  }
  
  .countdown-text {
    font-size: 16px;
  }
  
  .countdown-number {
    font-size: 48px;
  }
  
  .countdown-label {
    font-size: 14px;
  }
  
  .countdown-time {
    padding: 20px 30px;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  /* 调整春联样式适应手机端 */
  .new-year-decorations {
    display: block;
  }
  
  .couplet {
    font-size: 18px;
    height: 200px;
    padding: 10px 5px;
  }
  
  .firecracker {
    font-size: 32px;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  /* 保持特色卡片纵向布局 */
  .feature-item {
    flex-direction: column;
    text-align: center;
  }
  
  .feature-icon {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .countdown-number {
    font-size: 36px;
  }
  
  .countdown-label {
    font-size: 12px;
  }
  
  .countdown-time {
    padding: 15px 25px;
    border-radius: 30px;
  }
  
  .countdown-text {
    font-size: 14px;
  }
  
  /* 修复小屏幕特色卡片布局 */
  .feature-item {
    flex-direction: column;
    text-align: center;
  }
  
  .feature-icon {
    margin-bottom: 10px;
  }
}
</style>
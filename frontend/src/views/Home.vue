<template>
  <div class="home">
    <!-- 背景装饰 -->
    <div class="background-decor"></div>
    
    <!-- 简化的新年装饰 -->
    <div class="new-year-decorations">
      <!-- 福字 -->
      <div class="fu-character" style="top: 10%; left: 50%; transform: translateX(-50%); animation-delay: 2s;">福</div>
      
      <!-- 鞭炮 -->
      <div class="firecracker" style="left: 8%; top: 30%; animation-delay: 2s;">🧨</div>
      <div class="firecracker" style="right: 8%; top: 30%; animation-delay: 3s;">🧨</div>
    </div>
    
    <!-- 简化的飘雪动画 - 减少雪花数量 -->
    <div class="snow-container">
      <div 
        v-for="(snowflake, index) in snowflakes" 
        :key="index"
        class="snowflake"
        :style="{
          left: snowflake.x + 'px',
          top: snowflake.y + 'px',
          width: snowflake.size + 'px',
          height: snowflake.size + 'px',
          opacity: snowflake.opacity,
          transform: `rotate(${snowflake.rotation}deg)`,
          animation: `sway ${snowflake.swayDuration}s infinite ease-in-out alternate`
        }"
      </div>
    </div>
    
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

// 响应式数据
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});
let countdownTimer = null; // 倒计时定时器

// 雪花效果相关响应式数据 - 简化版，减少雪花数量
const snowflakes = ref([]);
// 根据设备性能动态调整雪花数量
const snowflakeCount = ref(() => {
  // 检测设备性能
  const isLowPerformance = !('requestAnimationFrame' in window) || 
                        navigator.hardwareConcurrency < 4;
  return isLowPerformance ? 20 : 30; // 低性能设备20个雪花，高性能设备30个
});
let animationFrameId = null;

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

// 自定义实现简化版飘雪效果
const initSnow = () => {
  // 清空现有雪花
  snowflakes.value = [];
  
  // 生成新雪花 - 减少数量
  for (let i = 0; i < snowflakeCount.value; i++) {
    snowflakes.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 8 + 2, // 2-10px，减小雪花尺寸
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4，降低透明度
      rotation: Math.random() * 360,
      speed: Math.random() * 1.5 + 0.5, // 0.5-2px/s，降低下落速度
      swayDuration: Math.random() * 4 + 3, // 3-7s，增加摇摆周期
      swayAmount: Math.random() * 6 + 2, // 2-8px，减小摇摆幅度
      windSpeed: Math.random() * 0.2 - 0.1 // -0.1 to 0.1px/s，减小风力
    });
  }
  
  // 开始动画循环
  animateSnow();
};

// 雪花动画循环 - 优化性能
let lastTime = 0;
const animateSnow = (currentTime = 0) => {
  // 控制动画帧率，每16ms执行一次（约60fps）
  const deltaTime = currentTime - lastTime;
  if (deltaTime < 16) {
    animationFrameId = requestAnimationFrame(animateSnow);
    return;
  }
  lastTime = currentTime;
  
  // 使用forEach代替map，减少内存分配
  snowflakes.value.forEach((snowflake, index) => {
    // 更新位置
    let newY = snowflake.y + snowflake.speed;
    let newX = snowflake.x + snowflake.windSpeed;
    let newRotation = snowflake.rotation + 0.3; // 减慢旋转速度
    
    // 雪花超出屏幕底部，重置到顶部
    if (newY > window.innerHeight) {
      newY = -snowflake.size;
      newX = Math.random() * window.innerWidth;
    }
    
    // 雪花超出屏幕左右，重置位置
    if (newX > window.innerWidth) {
      newX = 0;
    } else if (newX < 0) {
      newX = window.innerWidth;
    }
    
    // 直接修改数组元素，减少内存分配
    snowflakes.value[index] = {
      ...snowflake,
      y: newY,
      x: newX,
      rotation: newRotation
    };
  });
  
  // 继续动画循环
  animationFrameId = requestAnimationFrame(animateSnow);
};

// 生命周期钩子
onMounted(() => {
  calculateCountdown();
  initSnow();
  
  // 设置每秒更新一次倒计时
  countdownTimer = setInterval(() => {
    calculateCountdown();
  }, 1000);
});

onBeforeUnmount(() => {
  // 取消雪花动画
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  
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
  background: linear-gradient(135deg, #fff8e1 0%, #ffe0b2 100%);
  overflow-x: hidden;
}

.home-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

/* 背景装饰 */
.background-decor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(157, 80, 187, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(110, 72, 170, 0.1) 0%, transparent 50%);
  z-index: -1;
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

/* 春联 */
.couplet {
  position: absolute;
  font-size: 24px;
  color: #ff0000;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: coupletFloat 4s ease-in-out infinite;
  writing-mode: vertical-rl;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  height: 250px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
}

/* 福字 */
.fu-character {
  position: absolute;
  font-size: 64px;
  color: #ff0000;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  animation: rotate 6s linear infinite;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 100%);
  padding: 20px;
  border-radius: 50%;
}

/* 鞭炮 */
.firecracker {
  position: absolute;
  font-size: 48px;
  animation: firecrackerSparkle 2s ease-in-out infinite;
}

/* 窗花 */
.paper-cut {
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 140, 0, 0.6) 100%);
  border-radius: 50%;
  animation: paperCutRotate 5s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

@keyframes paperCutRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

/* 飘雪效果 */
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 70%, transparent 100%);
  border-radius: 50%;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.6), inset 0 0 3px rgba(255, 255, 255, 0.8);
  will-change: transform, opacity;
}

/* 雪花摇摆动画 */
@keyframes sway {
  from {
    transform: translateX(-10px) rotate(0deg);
  }
  to {
    transform: translateX(10px) rotate(360deg);
  }
}

/* 封面样式 */
.cover {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa07a 50%, #ffd700 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
  animation: slideInUp 1s ease;
}

.cover-title {
  font-size: 36px;
  margin-bottom: 15px;
  animation: bounceIn 1s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.cover-subtitle {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease 0.3s both;
}

.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  animation: fadeInUp 1s ease 0.6s both;
}

.countdown-text {
  font-size: 20px;
  opacity: 0.95;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  letter-spacing: 1px;
}

.countdown-time {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
  padding: 25px 40px;
  border-radius: 50px;
  backdrop-filter: blur(15px);
  border: 3px solid rgba(255, 215, 0, 0.4);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3),
              0 0 30px rgba(255, 215, 0, 0.2) inset;
  animation: pulse 2s ease-in-out infinite;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.countdown-number {
  font-size: 64px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
               3px 3px 6px rgba(0, 0, 0, 0.5);
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  animation: glow 1.5s ease-in-out infinite alternate;
}

.countdown-label {
  font-size: 18px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  margin: 10px 0 0 0;
  padding: 0;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #ff6b6b, #ffa07a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: slideInUp 1s ease 0.2s both;
  border-left: 5px solid #ff6b6b;
}

.section-title {
  color: #ff6b6b;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #ffa07a);
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
  gap: 15px;
  margin-top: 20px;
}

.action-btn {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #6e48aa, #9d50bb);
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(110, 72, 170, 0.3);
}

.action-btn.primary {
  background: linear-gradient(135deg, #ff6b6b, #ffa07a);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

.action-btn.primary:hover {
  background: linear-gradient(135deg, #ffa07a, #ffb347);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
}

.action-btn:hover {
  background: linear-gradient(135deg, #9d50bb, #b86bff);
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #ff6b6b;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%);
}

.feature-icon {
  font-size: 32px;
  margin-top: 5px;
  flex-shrink: 0;
}

.feature-content h3 {
  margin: 0 0 10px 0;
  color: #ff6b6b;
  font-size: 18px;
}

.feature-content p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* 简化问候语样式 */
.simple-greeting {
  text-align: center;
  font-size: 18px;
  color: #533f03;
  line-height: 1.8;
  margin: 0;
  padding: 10px 0;
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
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
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
}
</style>
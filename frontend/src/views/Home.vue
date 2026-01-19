<template>
  <div class="home">
    <!-- 背景装饰 -->
    <div class="background-decor"></div>
    
    <!-- 新年装饰 -->
    <div class="new-year-decorations">
      <!-- 春联 -->
      <div class="couplet" style="left: 5%; top: 15%; animation-delay: 0s;">一帆风顺吉星到</div>
      <div class="couplet" style="right: 5%; top: 15%; animation-delay: 1s;">万事如意福临门</div>
      
      <!-- 福字 -->
      <div class="fu-character" style="top: 10%; left: 50%; transform: translateX(-50%); animation-delay: 2s;">福</div>
      
      <!-- 鞭炮 -->
      <div class="firecracker" style="left: 8%; top: 30%; animation-delay: 2s;">🧨</div>
      <div class="firecracker" style="right: 8%; top: 30%; animation-delay: 3s;">🧨</div>
      
      <!-- 窗花 -->
      <div class="paper-cut" style="left: 12%; top: 50%; animation-delay: 1.5s;">春</div>
      <div class="paper-cut" style="right: 12%; top: 50%; animation-delay: 2.5s;">喜</div>
    </div>
    
    <!-- 烟花效果 -->
    <div class="fireworks-container"></div>
    
    <!-- 飘雪动画 - 基于Vue3响应式数据实现 -->
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
      ></div>
    </div>
    
    <!-- 页面内容 -->
    <div class="home-content">
      <div class="cover">
        <h1 class="cover-title">🎉 新年快乐 🎉</h1>
        <p class="cover-subtitle">愿新的一年万事如意，心想事成</p>
        <div class="countdown">
          <span class="countdown-text">距离新年还有</span>
          <span class="countdown-number">{{ countdown }}</span>
          <span class="countdown-text">天</span>
        </div>
      </div>
      
      <div class="greeting-card">
        <h2 class="section-title">🎊 新年祝福</h2>
        <p>在这新年到来之际，愿你：</p>
        <div class="wishes-list">
          <div class="wish-item">✨ 身体健康，万事如意</div>
          <div class="wish-item">✨ 事业有成，步步高升</div>
          <div class="wish-item">✨ 家庭幸福，阖家欢乐</div>
          <div class="wish-item">✨ 财源广进，心想事成</div>
        </div>
      </div>
      
      <div class="action-section">
        <h2 class="section-title">✨ 快速开始</h2>
        <div class="action-buttons">
          <router-link to="/new-year-surprise" class="action-btn">
            🎁 查看新年惊喜
          </router-link>
        </div>
      </div>
      
      
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

// 响应式数据
const countdown = ref(0);
let fireworksInterval = null;

// 雪花效果相关响应式数据
const snowflakes = ref([]);
const snowflakeCount = ref(100); // 雪花数量
let animationFrameId = null;

// 计算倒计时
const calculateCountdown = () => {
  // 计算距离2026年春节（2月17日）的天数
  const now = new Date();
  const springFestival = new Date('2026-02-17');
  const diffTime = Math.abs(springFestival - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  countdown.value = diffDays;
};

// 自定义实现飘雪效果
const initSnow = () => {
  // 清空现有雪花
  snowflakes.value = [];
  
  // 生成新雪花
  for (let i = 0; i < snowflakeCount.value; i++) {
    snowflakes.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 15 + 5, // 5-20px，增大雪花尺寸
      opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
      rotation: Math.random() * 360,
      speed: Math.random() * 3 + 2, // 2-5px/s
      swayDuration: Math.random() * 2 + 1, // 1-3s
      swayAmount: Math.random() * 10 + 5, // 5-15px
      windSpeed: Math.random() * 0.5 - 0.25 // -0.25 to 0.25px/s
    });
  }
  
  // 开始动画循环
  animateSnow();
};

// 雪花动画循环
const animateSnow = () => {
  snowflakes.value = snowflakes.value.map(snowflake => {
    // 更新位置
    let newY = snowflake.y + snowflake.speed;
    let newX = snowflake.x + snowflake.windSpeed;
    let newRotation = snowflake.rotation + 1;
    
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
    
    return {
      ...snowflake,
      y: newY,
      x: newX,
      rotation: newRotation
    };
  });
  
  // 继续动画循环
  animationFrameId = requestAnimationFrame(animateSnow);
};

// 使用 fireworks-js 库实现烟花效果
import { Fireworks } from 'fireworks-js';

let fireworks = null;

// 初始化烟花效果
const initFireworks = () => {
  console.log('Initializing fireworks-js fireworks...');
  
  // 获取烟花容器元素
  const container = document.querySelector('.fireworks-container');
  
  // 创建烟花实例
    fireworks = new Fireworks(container, {
      speed: 1.5, // 降低烟花速度
      acceleration: 1.03,
      friction: 0.97,
      gravity: 1.5,
      particles: 300,
      traceLength: 7,
      explosion: 5,
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 30,
        max: 60
      },
      rocketsPoint: { // 火箭发射点范围
        min: 0,
        max: container.clientWidth
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 2
        }
      },
      brightness: {
        min: 50,
        max: 80
      }
    });
  
  // 开始烟花效果
  fireworks.start();
  console.log('fireworks-js fireworks started!');
};

// 停止烟花效果
const stopFireworks = () => {
  if (fireworks) {
    fireworks.stop();
    fireworks = null;
  }
  console.log('fireworks-js fireworks stopped!');
};

// 生命周期钩子
onMounted(() => {
  calculateCountdown();
  initSnow();
  // 使用 nextTick 确保 DOM 完全渲染后再初始化烟花
  nextTick(() => {
    initFireworks();
  });
});

onBeforeUnmount(() => {
  stopFireworks();
  // 取消雪花动画
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
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
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  animation: fadeInUp 1s ease 0.6s both;
}

.countdown-text {
  font-size: 16px;
  opacity: 0.9;
}

.countdown-number {
  font-size: 32px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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

.action-btn:hover {
  background: linear-gradient(135deg, #9d50bb, #b86bff);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(110, 72, 170, 0.4);
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
  
  .tech-item {
    flex-direction: column;
    text-align: center;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
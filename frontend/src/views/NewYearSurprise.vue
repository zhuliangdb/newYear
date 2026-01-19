<template>
  <div class="container">
    <!-- 背景装饰 -->
    <div class="background-decor"></div>
    
    <!-- 新年装饰 -->
    <div class="new-year-decorations">
      <!-- 灯笼 -->
      <div class="lantern" style="left: 10%; top: 10%; animation-delay: 0s;">🏮</div>
      <div class="lantern" style="right: 10%; top: 15%; animation-delay: 1s;">🏮</div>
      <div class="lantern" style="left: 15%; top: 40%; animation-delay: 2s;">🏮</div>
      <div class="lantern" style="right: 15%; top: 45%; animation-delay: 3s;">🏮</div>
      
      <!-- 中国结 -->
      <div class="chinese-knot" style="left: 5%; top: 20%;">🧧</div>
      <div class="chinese-knot" style="right: 5%; top: 25%;">🧧</div>
    </div>
    
    <!-- 烟花效果 -->
    <div class="fireworks-container"></div>
    
    <!-- 封面 -->
    <div class="cover">
      <div class="cover-content">
        <h1 class="cover-title">致我的互联网搭子 🌟</h1>
        <p class="cover-subtitle">2026 新年快乐 | 这份惊喜只属于你</p>
        <div class="countdown" v-if="countdown > 0">
          <span class="countdown-text">距离新年还有</span>
          <span class="countdown-number">{{ countdown }}</span>
          <span class="countdown-text">天</span>
        </div>
      </div>
    </div>
    
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

    <!-- 新年祝福语 -->
    <div class="greeting-card">
      <div class="greeting-content">
        <h2 class="greeting-title">🎉 新年祝福 🎉</h2>
        <p class="greeting-text">愿你在新的一年里，所有的期待都能出现，所有的梦想都能实现，所有的希望都能如愿，所有的努力都能成功！</p>
      </div>
    </div>

    <!-- 时间轴回忆 -->
    <div class="timeline-section">
      <h2 class="section-title">📝 我们的回忆</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index" :style="{ animationDelay: `${index * 0.3}s` }">
          <div class="timeline-date">{{ item.date }}</div>
          <div class="timeline-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

    <!-- 新年运势卡片 -->
    <div class="fortune-card">
      <h2 class="section-title">🔮 你的新年运势</h2>
      <div class="fortune-content" @click="generateFortune">
        <div class="fortune-item" v-for="(item, index) in fortuneItems" :key="index">
          <div class="fortune-label">{{ item.label }}：</div>
          <div class="fortune-value">{{ item.value }}</div>
        </div>
        <div class="fortune-tip">点击刷新运势</div>
      </div>
    </div>

    <!-- 新年愿望墙 -->
    <div class="wish-wall">
      <h2 class="section-title">🎯 新年愿望墙</h2>
      <div class="wish-input-area">
        <textarea v-model="newWish" placeholder="写下你的新年愿望..." rows="3" class="wish-input"></textarea>
        <button class="secret-btn" @click="addWish" :disabled="!newWish.trim()">添加愿望</button>
      </div>
      <div class="wish-list">
        <div class="wish-item" v-for="(wish, index) in wishes" :key="index">
          <div class="wish-content">{{ wish }}</div>
          <div class="wish-icon">✨</div>
        </div>
      </div>
    </div>

    <!-- 互动小游戏 -->
    <div class="game-section">
      <h2 class="section-title">🎮 新年小游戏</h2>
      <div class="game-card" @click="playGame">
        <div class="game-content">
          <div class="game-icon">🎲</div>
          <div class="game-title">点击抽取新年签</div>
          <div class="game-result" v-if="gameResult">{{ gameResult }}</div>
        </div>
      </div>
    </div>

    <!-- 彩蛋互动 -->
    <div class="彩蛋-section">
      <h2 class="section-title">🎁 新年彩蛋</h2>
      <button class="secret-btn" @click="showSecretText" :class="{ active: showSecret }">
        {{ showSecret ? '彩蛋已解锁' : '点击解锁新年彩蛋' }}
      </button>
      <div id="secret-text" v-show="showSecret" class="secret-content">
        <strong>程序员专属彩蛋：</strong><br>
        我用 Java 和一点点前端，写了这个页面给你。<br>
        2026 年，我们要各自完成一件“有点怕但想试试”的事！<br>
        （你先说，我听着呢～）
      </div>
    </div>

    <!-- 语音祝福 -->
    <div class="audio-section">
      <h2 class="section-title">🔊 语音祝福</h2>
      <div class="audio-player">
        <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
        您的浏览器不支持音频元素。
        </audio>
        <p class="audio-hint">点击播放我的语音祝福（可替换为你自己的录音链接）</p>
      </div>
    </div>

    <!-- 手写风信件 -->
    <div class="letter-section">
      <h2 class="section-title">💌 给你的信</h2>
      <div class="handwritten">
        虽然没见过面，但谢谢你让我觉得<br>
        这世界还有人愿意认真听我说废话。<br>
        2026，愿你三餐温热，梦里常笑，聊天框永远有人秒回。<br>
        <div class="signature">—— 你的网友，[你的昵称]</div>
      </div>
    </div>

    <!-- 分享按钮 -->
    <div class="share-section">
      <button class="share-btn" @click="sharePage">📤 分享这个惊喜</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 响应式数据
const showSecret = ref(false);
const countdown = ref(0);
const newWish = ref('');
const wishes = ref([
  '希望今年能学会一门新技能',
  '愿家人身体健康，万事如意',
  '期待一次说走就走的旅行'
]);
const timelineItems = ref([
  {
    date: '📅 2025-03-12',
    content: '那天你说“加班到凌晨，但喝到了超甜的奶茶”，我偷偷记下了——原来幸福可以这么小。'
  },
  {
    date: '📅 2025-07-05',
    content: '亳州下雨没完没了，你回我“雨停那天，好运就来”。谢谢你总给我正能量。'
  },
  {
    date: '📅 2025-12-24',
    content: '平安夜我们聊了小时候的压岁钱怎么花——我想说，今年想和你一起规划“互联网新年愿望清单”。'
  }
]);
const fortuneItems = ref([
  { label: '事业运', value: '大吉' },
  { label: '财运', value: '中吉' },
  { label: '桃花运', value: '大吉' },
  { label: '健康运', value: '上上签' }
]);
const gameResult = ref('');
let fireworksInterval = null;

// 雪花效果相关响应式数据
const snowflakes = ref([]);
const snowflakeCount = ref(100); // 雪花数量
let animationFrameId = null;

// 固定数据
const fortuneOptions = {
  '事业运': ['大吉', '中吉', '小吉', '上上签', '吉星高照'],
  '财运': ['大吉', '中吉', '小吉', '财运亨通', '财源广进'],
  '桃花运': ['大吉', '中吉', '小吉', '桃花运旺', '缘分到来'],
  '健康运': ['大吉', '中吉', '小吉', '身体健康', '平安如意']
};

const gameOptions = [
  '🎊 恭喜发财，万事如意！',
  '🎉 新年快乐，心想事成！',
  '💰 财运亨通，财源广进！',
  '💝 爱情甜蜜，幸福美满！',
  '🏆 事业有成，步步高升！',
  '🍀 好运连连，一帆风顺！',
  '🎁 惊喜不断，快乐常在！',
  '🌟 星光璀璨，前程似锦！'
];

// 方法定义
const showSecretText = () => {
  showSecret.value = true;
};

// 初始化雪花
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
  console.log('Initializing fireworks-js fireworks in NewYearSurprise...');
  
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
  console.log('fireworks-js fireworks started in NewYearSurprise!');
};

// 停止烟花效果
const stopFireworks = () => {
  if (fireworks) {
    fireworks.stop();
    fireworks = null;
  }
  console.log('fireworks-js fireworks stopped in NewYearSurprise!');
};

const calculateCountdown = () => {
  // 计算距离2026年春节（2月17日）的天数
  const now = new Date();
  const springFestival = new Date('2026-02-17');
  const diffTime = Math.abs(springFestival - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  countdown.value = diffDays;
};

const addWish = () => {
  if (newWish.value.trim()) {
    wishes.value.unshift(newWish.value.trim());
    newWish.value = '';
  }
};

const generateFortune = () => {
  // 随机生成运势
  fortuneItems.value = fortuneItems.value.map(item => {
    const options = fortuneOptions[item.label];
    const randomValue = options[Math.floor(Math.random() * options.length)];
    return { ...item, value: randomValue };
  });
};

const playGame = () => {
  // 随机抽取新年签
  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  gameResult.value = gameOptions[randomIndex];
};

const sharePage = () => {
  if (navigator.share) {
    navigator.share({
      title: '致我的互联网搭子 | 2026新年惊喜',
      text: '快来看看我收到的新年惊喜！',
      url: window.location.href
    });
  } else {
    // 复制链接到剪贴板
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('链接已复制到剪贴板，可以分享给朋友啦！');
    });
  }
};

// 生命周期钩子
onMounted(() => {
  initSnow();
  initFireworks();
  calculateCountdown();
  // 添加页面加载动画
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
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
body {
  margin: 0;
  font-family: 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #f7f9fc 0%, #e8f0fe 100%);
  color: #333;
  overflow-x: hidden;
  transition: opacity 0.5s ease;
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
  0%, 100% {
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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
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

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
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
}

.cover-content {
  position: relative;
  z-index: 2;
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

/* 新年祝福语卡片 */
.greeting-card {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: slideInUp 1s ease;
}

.greeting-title {
  color: #856404;
  margin-bottom: 15px;
  font-size: 24px;
  text-align: center;
}

.greeting-text {
  color: #533f03;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}

/* 新年运势卡片 */
.fortune-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: slideInUp 1s ease 0.2s both;
}

.fortune-content {
  background: white;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fortune-content:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.fortune-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.fortune-item:last-child {
  border-bottom: none;
}

.fortune-label {
  font-weight: bold;
  color: #6e48aa;
  font-size: 16px;
}

.fortune-value {
  color: #ff6b6b;
  font-weight: bold;
  font-size: 18px;
  background: linear-gradient(135deg, #ff6b6b, #ffa07a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.fortune-tip {
  text-align: center;
  margin-top: 15px;
  color: #666;
  font-size: 14px;
  font-style: italic;
}

/* 互动小游戏 */
.game-section {
  margin-bottom: 40px;
  animation: slideInUp 1s ease 0.3s both;
}

.game-card {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
  transform: translateY(-5px) rotate(1deg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.game-icon {
  font-size: 48px;
  margin-bottom: 15px;
  animation: bounceIn 1s ease infinite alternate;
}

.game-title {
  font-size: 20px;
  color: #6e48aa;
  margin-bottom: 15px;
  font-weight: bold;
}

.game-result {
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #ff6b6b;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  animation: scaleIn 0.5s ease;
}

/* 时间轴样式 */
.timeline-section {
  margin-bottom: 40px;
}

.section-title {
  color: #6e48aa;
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
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  border-radius: 2px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #6e48aa, #9d50bb, #ff6b6b);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 60px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 28px;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: white;
  border: 3px solid #6e48aa;
  box-shadow: 0 0 0 3px rgba(110, 72, 170, 0.2);
  z-index: 2;
}

.timeline-date {
  color: #9d50bb;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
}

.timeline-content {
  background: white;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-size: 15px;
  line-height: 1.6;
  border-left: 4px solid #6e48aa;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

/* 愿望墙样式 */
.wish-wall {
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.wish-input-area {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.wish-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
}

.wish-input:focus {
  outline: none;
  border-color: #6e48aa;
  box-shadow: 0 0 0 3px rgba(110, 72, 170, 0.1);
}

.wish-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.wish-item {
  background: linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 100%);
  padding: 15px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: scaleIn 0.5s ease;
}

.wish-item:hover {
  transform: translateY(-3px) rotate(1deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.wish-content {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.wish-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  opacity: 0.7;
}

/* 彩蛋样式 */
.彩蛋-section {
  margin-bottom: 40px;
  text-align: center;
}

.secret-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #6e48aa, #9d50bb);
  color: white;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 12px rgba(110, 72, 170, 0.3);
}

.secret-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #9d50bb, #b86bff);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(110, 72, 170, 0.4);
}

.secret-btn:active:not(:disabled) {
  transform: translateY(0);
}

.secret-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  box-shadow: none;
}

.secret-btn.active {
  background: linear-gradient(135deg, #28a745, #20c997);
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
}

.secret-content {
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.6;
  animation: fadeIn 0.5s ease;
  text-align: left;
}

/* 音频播放器样式 */
.audio-section {
  margin-bottom: 40px;
  text-align: center;
}

.audio-player {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: inline-block;
}

.audio-player audio {
  width: 100%;
  max-width: 400px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.audio-hint {
  color: #666;
  font-size: 14px;
  margin: 0;
}

/* 手写信件样式 */
.letter-section {
  margin-bottom: 40px;
}

.handwritten {
  font-family: 'KaiTi', '华文行楷', sans-serif;
  font-size: 19px;
  line-height: 2.2;
  color: #555;
  background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: right;
  font-weight: bold;
  position: relative;
  overflow: hidden;
}

.handwritten::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: repeating-linear-gradient(
    transparent,
    transparent 28px,
    rgba(0, 0, 0, 0.05) 28px,
    rgba(0, 0, 0, 0.05) 29px
  );
  z-index: 0;
}

.handwritten > div {
  position: relative;
  z-index: 1;
}

.signature {
  text-align: right;
  margin-top: 20px;
  color: #9d50bb;
  font-style: italic;
  font-size: 18px;
}

/* 分享按钮 */
.share-section {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.share-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #1da1f2, #0d95e8);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
}

.share-btn:hover {
  background: linear-gradient(135deg, #0d95e8, #0a85d4);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(29, 161, 242, 0.4);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }
  
  .cover-title {
    font-size: 28px;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 50px;
  }
  
  .timeline-item::before {
    left: 18px;
  }
  
  .wish-list {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <div class="container">
    <!-- 飘雪效果 -->
    <Snowfall :icon-type="4" />
    <!-- 背景装饰 -->
    <div
      class="background-decor"
      aria-hidden="true"
    />

    <!-- 新年装饰 -->
    <div class="new-year-decorations">
      <!-- 灯笼 -->
      <div
        class="lantern lantern-1"
        aria-label="灯笼装饰"
      >
        🏮
      </div>
      <div
        class="lantern lantern-2"
        aria-label="灯笼装饰"
      >
        🏮
      </div>
      <div
        class="lantern lantern-3"
        aria-label="灯笼装饰"
      >
        🏮
      </div>
      <div
        class="lantern lantern-4"
        aria-label="灯笼装饰"
      >
        🏮
      </div>

      <!-- 中国结 -->
      <div
        class="chinese-knot chinese-knot-1"
        aria-label="中国结装饰"
      >
        🧧
      </div>
      <div
        class="chinese-knot chinese-knot-2"
        aria-label="中国结装饰"
      >
        🧧
      </div>
    </div>

    <!-- 烟花效果 -->
    <div
      class="fireworks-container"
      aria-hidden="true"
    />

    <!-- 封面 -->
    <div class="cover">
      <div class="cover-content">
        <h1 class="cover-title">
          致我的互联网搭子 🌟
        </h1>
        <p class="cover-subtitle">
          2026 新年快乐 | 这份惊喜只属于你
        </p>
        <div class="countdown">
          <span class="countdown-text">距离新年还有</span>
          <div class="countdown-time">
            <div class="countdown-item">
              <span class="countdown-number">{{
                String(counterStore.countdown.hours).padStart(2, '0')
              }}</span>
              <span class="countdown-label">时</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-item">
              <span class="countdown-number">{{
                String(counterStore.countdown.minutes).padStart(2, '0')
              }}</span>
              <span class="countdown-label">分</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-item">
              <span class="countdown-number">{{
                String(counterStore.countdown.seconds).padStart(2, '0')
              }}</span>
              <span class="countdown-label">秒</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 新年祝福语 -->
    <div class="greeting-card">
      <div class="greeting-content">
        <h2 class="greeting-title">
          🎉 新年祝福 🎉
        </h2>
        <p class="greeting-text">
          愿你在新的一年里，所有的期待都能出现，所有的梦想都能实现，所有的希望都能如愿，所有的努力都能成功！
        </p>
      </div>
    </div>

    <!-- 时间轴回忆 -->
    <div class="timeline-section">
      <h2 class="section-title">
        📝 我们的回忆
      </h2>
      <div class="timeline">
        <div
          v-for="(item, index) in timelineItems"
          :key="index"
          class="timeline-item"
          :class="`timeline-item-${index}`"
        >
          <div class="timeline-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

    <!-- 新年运势卡片 -->
    <div class="fortune-card">
      <h2 class="section-title">
        🔮 你的新年运势
      </h2>
      <div
        class="fortune-content"
        @click="fortuneStore.generateFortune"
      >
        <div class="fortune-grid">
          <div
            v-for="(item, index) in fortuneStore.fortuneItems"
            :key="index"
            class="fortune-item"
          >
            <div class="fortune-label">
              {{ item.label }}
            </div>
            <div class="fortune-value">
              {{ item.value }}
            </div>
          </div>
        </div>
        <div class="fortune-tip">
          点击刷新运势
        </div>
      </div>
    </div>

    <!-- 新年愿望墙 -->
    <div class="wish-wall">
      <h2 class="section-title">
        🎯 新年愿望墙
      </h2>

      <!-- 错误提示 -->
      <div
        v-if="wishesStore.error"
        class="error-message"
      >
        {{ wishesStore.error }}
      </div>

      <div class="wish-input-area">
        <textarea
          v-model="wishesStore.newWish"
          placeholder="写下你的新年愿望..."
          rows="3"
          class="wish-input"
          :class="{ 'input-focused': wishesStore.newWish.trim() }"
          :disabled="wishesStore.loading"
        />
        <button
          class="primary-btn"
          :disabled="!wishesStore.newWish.trim() || wishesStore.loading"
          aria-label="添加愿望"
          tabindex="0"
          @click="wishesStore.addWish"
        >
          <span
            v-if="wishesStore.loading"
            class="loading-spinner"
          />
          {{ wishesStore.loading ? '添加中...' : '添加愿望' }}
        </button>
      </div>

      <!-- 加载状态 -->
      <div
        v-if="wishesStore.loading"
        class="loading-state"
      >
        <div class="loading-spinner large" />
        <p class="loading-text">
          加载愿望中...
        </p>
      </div>

      <div
        v-else
        class="wish-list"
      >
        <div
          v-for="wish in wishesStore.wishes"
          :key="wish.id"
          class="wish-item"
        >
          <div class="wish-content">
            {{ wish.content }}
          </div>
          <div class="wish-actions">
            <button
              class="like-btn"
              :disabled="wishesStore.loading"
              @click="wishesStore.likeWish(wish.id)"
            >
              ❤️ {{ wish.likes || 0 }}
            </button>
          </div>
          <div class="wish-icon">
            ✨
          </div>
        </div>
        <div
          v-if="wishesStore.wishes.length === 0"
          class="wish-item empty-message"
        >
          <div class="empty-message-content">
            <div
              class="empty-icon"
              aria-label="愿望图标"
            >
              ✨
            </div>
            <p class="empty-text">
              还没有愿望，快来写下你的新年愿望吧！
            </p>
            <p class="empty-subtext">
              分享你的新年目标和梦想
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 互动小游戏 -->
    <div class="game-section">
      <h2 class="section-title">
        🎮 新年小游戏
      </h2>
      <div
        class="game-card"
        @click="gameStore.playGame"
      >
        <div class="game-content">
          <div
            class="game-icon"
            aria-label="骰子图标"
          >
            🎲
          </div>
          <div class="game-title">
            点击抽取新年签
          </div>
          <div
            v-if="gameStore.gameResult"
            class="game-result"
          >
            {{ gameStore.gameResult }}
          </div>
        </div>
      </div>
    </div>

    <!-- 彩蛋互动 -->
    <div class="surprise-section">
      <h2 class="section-title">
        🎁 新年彩蛋
      </h2>
      <button
        class="primary-btn"
        :class="{ active: showSecret }"
        @click="showSecretText"
      >
        {{ showSecret ? '彩蛋已解锁' : '点击解锁新年彩蛋' }}
      </button>
      <div
        v-show="showSecret"
        id="secret-text"
        class="secret-content"
      >
        <strong>程序员专属彩蛋：</strong><br>
        我用 Java 和一点点前端，写了这个页面给你。<br>
        2026 年，我们要各自完成一件"有点怕但想试试"的事！<br>
        （你先说，我听着呢～）
      </div>
    </div>

    <!-- 手写风信件 -->
    <div class="letter-section">
      <h2 class="section-title">
        💌 给你的信
      </h2>
      <div class="handwritten">
        虽然没见过面，但谢谢你让我觉得<br>
        这世界还有人愿意认真听我说废话。<br>
        2026，愿你三餐温热，梦里常笑，聊天框永远有人秒回。<br>
        <div class="signature">
          —— 你的网友弟弟，[完美谢幕]
        </div>
      </div>
    </div>

    <!-- 留言板 -->
    <div class="message-board">
      <h2 class="section-title">
        💬 留言板
      </h2>

      <!-- 错误提示 -->
      <div
        v-if="messagesStore.error"
        class="error-message"
      >
        {{ messagesStore.error }}
      </div>

      <div class="message-input-area">
        <textarea
          v-model="messagesStore.newMessage"
          placeholder="写下你的留言..."
          rows="4"
          class="message-input"
          :disabled="messagesStore.loading"
        />
        <button
          class="primary-btn"
          :disabled="!messagesStore.newMessage.trim() || messagesStore.loading"
          aria-label="发送留言"
          tabindex="0"
          @click="messagesStore.addMessage"
        >
          <span
            v-if="messagesStore.loading"
            class="loading-spinner"
          />
          {{ messagesStore.loading ? '发送中...' : '发送留言' }}
        </button>
      </div>

      <!-- 加载状态 -->
      <div
        v-if="messagesStore.loading"
        class="loading-state"
      >
        <div class="loading-spinner large" />
        <p class="loading-text">
          加载留言中...
        </p>
      </div>

      <div
        v-else
        class="message-list"
      >
        <div
          v-for="message in messagesStore.messages"
          :key="message.id"
          class="message-item"
        >
          <div class="message-header">
            <span class="message-time">{{ message.time }}</span>
          </div>
          <div class="message-content">
            {{ message.content }}
          </div>
        </div>
        <div
          v-if="messagesStore.messages.length === 0"
          class="message-item empty-message"
        >
          <div class="empty-message-content">
            <div
              class="empty-icon"
              aria-label="留言图标"
            >
              💭
            </div>
            <p class="empty-text">
              还没有留言，快来写下第一条留言吧！
            </p>
            <p class="empty-subtext">
              分享你的新年祝福或感想
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 地域特色内容展示区 -->
    <RegionalContentDisplay />

    <!-- 地域祝福弹窗 -->
    <RegionalBlessingPopup />

    <!-- 音乐播放器 -->
    <div class="music-player">
      <meting-js
        id="9515726248"
        server="tencent"
        type="playlist"
        fixed="true"
        mini="true"
        autoplay="false"
        theme="#c91f37"
        loop="all"
        order="random"
        preload="none"
        volume="0.5"
        mutex="true"
        list-folded="true"
        list-max-height="340"
        lrc-type="0"
      />
    </div>
  </div>
</template>

<script setup>
// Vue 内置 API
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

// 第三方库
import { Fireworks } from 'fireworks-js'

// 本地组件（懒加载）
import { defineAsyncComponent } from 'vue'
const RegionalContentDisplay = defineAsyncComponent(
  () => import('../components/new-year/RegionalContentDisplay.vue')
)
const RegionalBlessingPopup = defineAsyncComponent(
  () => import('../components/new-year/RegionalBlessingPopup.vue')
)

// 飘雪组件
import Snowfall from '../components/Snowfall.vue'



// Pinia stores
import { useCounterStore } from '../stores/counter'
import { useWishesStore } from '../stores/wishes'
import { useMessagesStore } from '../stores/messages'
import { useFortuneStore } from '../stores/fortune'
import { useGameStore } from '../stores/game'

// 初始化stores
const counterStore = useCounterStore()
const wishesStore = useWishesStore()
const messagesStore = useMessagesStore()
const fortuneStore = useFortuneStore()
const gameStore = useGameStore()

// 响应式数据
const showSecret = ref(false)
const windowWidth = ref(window.innerWidth)

// 时间轴回忆数据
const timelineItems = ref([
  {
    content:
      '我们一起讨论着窗外的雪，你说喜欢雪的纯粹，我说喜欢和你聊天时的温暖——原来简单的话题也能成为最珍贵的记忆。'
  },
  {
    content:
      '我减肥成功的那天，我们说好要一起吃顿好的，再配上一杯甜甜的奶茶——这份共同庆祝的喜悦，我想永远珍藏。'
  },
  {
    content: '那些日常的闲聊，从鸡毛蒜皮到人生理想，每一次对话都让我觉得，有你这样的朋友真好。'
  }
])

// 烟花实例
let fireworksInstance = null

// 监听窗口大小变化
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

// 显示彩蛋内容
const showSecretText = () => {
  showSecret.value = true
}

// 初始化烟花效果
const initFireworks = () => {
  try {
    console.log('Initializing fireworks-js fireworks in NewYearSurprise...')

    const container = document.querySelector('.fireworks-container')

    if (!container) {
      console.error('Fireworks container not found')
      return
    }

    fireworksInstance = new Fireworks(container, {
      speed: 1.2,
      acceleration: 1.03,
      friction: 0.97,
      gravity: 1.5,
      particles: 300,
      traceLength: 7,
      explosion: 5,
      colors: ['#C91F37', '#E63946', '#FFD700', '#4A90A4', '#9B5DE5', '#666666'],
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 100,
        max: 200
      },
      rocketsPoint: {
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
    })

    fireworksInstance.start()
    console.log('fireworks-js fireworks started in NewYearSurprise!')
  } catch (error) {
    console.error('Failed to initialize fireworks:', error)
  }
}

// 停止烟花效果
const stopFireworks = () => {
  try {
    if (fireworksInstance) {
      fireworksInstance.stop()
      fireworksInstance = null
    }
    console.log('fireworks-js fireworks stopped in NewYearSurprise!')
  } catch (error) {
    console.error('Failed to stop fireworks:', error)
  }
}

// 从Firebase加载数据
const loadFirebaseData = async () => {
  try {
    await Promise.all([messagesStore.loadMessages(), wishesStore.loadWishes()])
  } catch (error) {
    console.error('Failed to load Firebase data:', error)
  }
}

// 订阅实时更新
const subscribeToRealtimeUpdates = () => {
  try {
    messagesStore.subscribeToMessages()
    wishesStore.subscribeToWishes()
  } catch (error) {
    console.error('Failed to subscribe to realtime updates:', error)
  }
}

// 取消实时订阅
const unsubscribeFromRealtimeUpdates = () => {
  try {
    messagesStore.unsubscribeFromMessages()
    wishesStore.unsubscribeFromWishes()
  } catch (error) {
    console.error('Failed to unsubscribe from realtime updates:', error)
  }
}

// 添加页面加载动画
const addPageLoadAnimation = () => {
  try {
    document.body.style.opacity = '0'
    setTimeout(() => {
      document.body.style.opacity = '1'
    }, 100)
  } catch (error) {
    console.error('Failed to add page load animation:', error)
  }
}

// 生命周期钩子
onMounted(async () => {
  try {
    // 初始化烟花效果
    initFireworks()
    // 初始化倒计时
    counterStore.initialize()
    // 添加页面加载动画
    addPageLoadAnimation()
    // 加载Firebase数据
    await loadFirebaseData()
    // 订阅实时更新
    subscribeToRealtimeUpdates()
    // 添加窗口大小变化监听
    window.addEventListener('resize', handleResize)
  } catch (error) {
    console.error('Error during component mount:', error)
  }
})

onUnmounted(() => {
  try {
    // 移除窗口大小变化监听
    window.removeEventListener('resize', handleResize)
    // 清理烟花效果
    stopFireworks()
    // 取消实时更新订阅
    unsubscribeFromRealtimeUpdates()
  } catch (error) {
    console.error('Error during component unmount:', error)
  }
})

onBeforeUnmount(() => {
  try {
    // 清理烟花效果
    stopFireworks()
    // 取消实时更新订阅
    unsubscribeFromRealtimeUpdates()
  } catch (error) {
    console.error('Error during component before unmount:', error)
  }
})
</script>

<style scoped>
/* 新年装饰 */
.new-year-decorations {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1100;
  overflow: hidden;
}

/* 灯笼 */
.lantern {
  position: absolute;
  font-size: clamp(24px, 4vw, 48px);
  animation: lanternSwing 4s ease-in-out infinite;
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
  font-size: clamp(18px, 3vw, 36px);
  animation: float 4s ease-in-out infinite;
}

/* 灯笼位置和动画延迟 */
.lantern-1 {
  left: 10%;
  top: 10%;
  animation-delay: 0s;
}

.lantern-2 {
  right: 10%;
  top: 15%;
  animation-delay: 1s;
}

.lantern-3 {
  left: 15%;
  top: 40%;
  animation-delay: 2s;
}

.lantern-4 {
  right: 15%;
  top: 45%;
  animation-delay: 3s;
}

/* 中国结位置 */
.chinese-knot-1 {
  left: 5%;
  top: 20%;
}

.chinese-knot-2 {
  right: 5%;
  top: 25%;
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
  padding: var(--spacing-md);
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  max-width: calc(100vw - 30px);
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

/* 封面样式 */
.cover {
  text-align: center;
  padding: 60px 20px;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  position: relative;
  overflow: hidden;
  box-shadow: var(--box-shadow-lg);
}

.cover-content {
  position: relative;
  z-index: 2;
}

.cover-title {
  font-size: clamp(28px, 5vw, 36px);
  margin-bottom: var(--spacing-sm);
  animation: bounceIn 1s ease;
  text-shadow: var(--shadow-md);
  font-family: var(--font-title);
}

.cover-subtitle {
  font-size: clamp(14px, 2.5vw, 18px);
  opacity: 0.95;
  margin-bottom: var(--spacing-md);
  animation: fadeInUp 1s ease 0.3s both;
}

.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
  animation: fadeInUp 1s ease 0.6s both;
}

.countdown-text {
  font-size: clamp(14px, 2.5vw, 18px);
  opacity: 0.95;
  color: var(--text-light);
  text-shadow: var(--shadow-md);
}

.countdown-time {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.15);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-full);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--box-shadow-md);
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;
  position: relative;
}

.countdown-number {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: bold;
  color: var(--gold-color);
  text-shadow: var(--shadow-md);
  font-family: 'Inter', sans-serif;
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
  font-size: clamp(12px, 2vw, 14px);
  color: rgba(255, 255, 255, 0.9);
  text-shadow: var(--shadow-sm);
  margin-top: 2px;
  font-weight: 500;
}

.countdown-separator {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: bold;
  color: var(--gold-color);
  text-shadow: var(--shadow-sm);
  animation: blink 1s infinite;
  line-height: 60px;
  margin: 0 8px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

/* 统一卡片基础样式 */
.card-base {
  background: var(--card-bg);
  border-radius: 12px;
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--box-shadow-md);
  transition: all var(--transition-normal);
  animation: slideInUp 1s ease;
}

.card-base:hover {
  transform: translateY(-3px);
  box-shadow: var(--box-shadow-lg);
}

/* 新年祝福语卡片 */
.greeting-card {
  background: var(--card-bg);
  border-top: 4px solid var(--primary-color);
  border-radius: 12px;
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--box-shadow-md);
  animation: slideInUp 1s ease;
  transition: all var(--transition-normal);
}

.greeting-title {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
  font-size: clamp(20px, 4vw, 24px);
  text-align: center;
  padding-bottom: var(--spacing-sm);
  position: relative;
  font-family: var(--font-title);
}

.greeting-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
}

.greeting-text {
  color: var(--text-color);
  font-size: clamp(14px, 2.5vw, 16px);
  line-height: 1.6;
  text-align: center;
}

/* 新年运势卡片 */
.fortune-card {
  background: var(--card-bg);
  border-top: 4px solid #4a90a4;
  border-radius: 12px;
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--box-shadow-md);
  animation: slideInUp 1s ease 0.2s both;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all var(--transition-normal);
}

.fortune-content {
  background: var(--card-bg);
  border-radius: 12px;
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all var(--transition-normal);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--box-shadow-md);
}

.fortune-content:hover {
  transform: translateY(-3px);
  box-shadow: var(--box-shadow-md);
}

.fortune-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-sm);
  margin: 5px 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-sm);
  width: 45%;
  text-align: center;
  box-sizing: border-box;
}

.fortune-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
  width: 100%;
}

.fortune-label {
  font-weight: bold;
  color: var(--primary-color);
  font-size: clamp(12px, 2vw, 14px);
  width: 100%;
  margin-bottom: 5px;
  display: block;
}

.fortune-value {
  color: var(--accent-color);
  font-weight: bold;
  font-size: clamp(14px, 2.5vw, 16px);
  background: var(--gradient-nianhua);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: 100%;
  display: block;
}

.fortune-tip {
  text-align: center;
  margin-top: var(--spacing-sm);
  color: var(--text-muted);
  font-size: clamp(12px, 2vw, 14px);
  font-style: italic;
}

/* 主要按钮样式 */
.primary-btn {
  display: block;
  margin-top: var(--spacing-md);
  padding: 14px 32px;
  background: var(--primary-color);
  color: var(--text-light);
  border-radius: 12px;
  cursor: pointer;
  font-size: clamp(14px, 2.5vw, 16px);
  font-weight: 600;
  transition: all var(--transition-normal);
  border: none;
  box-shadow: var(--box-shadow-sm);
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 250px;
  align-self: center;
}

.primary-btn:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-md);
}

.primary-btn:active:not(:disabled) {
  transform: translateY(0);
}

.primary-btn:disabled {
  background: var(--text-muted);
  cursor: not-allowed;
  box-shadow: none;
}

/* 互动小游戏 */
.game-section {
  margin-bottom: var(--spacing-lg);
  animation: slideInUp 1s ease 0.3s both;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-card {
  background: var(--gradient-huangmei);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--box-shadow-md);
  width: 100%;
  max-width: 600px;
}

.game-card:hover {
  transform: translateY(-5px) rotate(1deg);
  box-shadow: var(--box-shadow-lg);
}

.game-icon {
  font-size: clamp(36px, 6vw, 48px);
  margin-bottom: var(--spacing-sm);
  animation: bounceIn 1s ease infinite alternate;
}

.game-title {
  font-size: clamp(16px, 3vw, 20px);
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
  font-weight: bold;
  font-family: var(--font-title);
}

.game-result {
  background: var(--card-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-md);
  font-size: clamp(16px, 3vw, 18px);
  font-weight: bold;
  color: var(--accent-color);
  box-shadow: var(--box-shadow-md);
  animation: scaleIn 0.5s ease;
  transition: all var(--transition-normal);
}

/* 时间轴样式 */
.timeline-section {
  margin-bottom: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  color: var(--primary-color);
  font-size: clamp(20px, 4vw, 24px);
  margin-bottom: var(--spacing-md);
  text-align: center;
  position: relative;
  padding-bottom: var(--spacing-sm);
  width: 100%;
  max-width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: var(--font-title);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
}

.timeline {
  position: relative;
  padding: var(--spacing-md) 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--gradient-primary);
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
  background: var(--card-bg);
  border: 3px solid var(--primary-color);
  box-shadow: 0 0 0 3px rgba(201, 31, 55, 0.2);
  z-index: 2;
}

.timeline-date {
  color: var(--secondary-color);
  font-weight: bold;
  margin-bottom: 8px;
  font-size: clamp(12px, 2vw, 14px);
}

.timeline-content {
  background: var(--card-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--box-shadow-sm);
  font-size: clamp(14px, 2.5vw, 15px);
  line-height: 1.6;
  border-left: 4px solid var(--primary-color);
  transition: all var(--transition-normal);
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-md);
}

/* 时间轴项目动画延迟 */
.timeline-item-0 {
  animation-delay: 0s;
}

.timeline-item-1 {
  animation-delay: 0.3s;
}

.timeline-item-2 {
  animation-delay: 0.6s;
}

/* 愿望墙样式 */
.wish-wall {
  background: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--box-shadow-md);
  transition: all var(--transition-normal);
}

.wish-input-area {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: center;
}

.wish-input {
  width: 100%;
  max-width: 600px;
  padding: var(--spacing-sm);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-size: clamp(14px, 2.5vw, 15px);
  resize: vertical;
  transition: all var(--transition-normal);
  font-family: inherit;
  background: var(--gradient-light);
  box-sizing: border-box;
}

.wish-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-focus);
  background: var(--card-bg);
}

.wish-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-sm);
}

.wish-item {
  background: var(--gradient-huizhou);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  position: relative;
  box-shadow: var(--box-shadow-md);
  transition: all var(--transition-normal);
  animation: scaleIn 0.5s ease;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wish-item:hover {
  transform: translateY(-5px) rotate(1deg);
  box-shadow: var(--box-shadow-lg);
}

.wish-content {
  font-size: clamp(14px, 2.5vw, 15px);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
  flex-grow: 1;
  color: var(--text-color);
}

.wish-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-xs);
}

.like-btn {
  background: var(--gradient-nianhua);
  color: white;
  border: none;
  border-radius: var(--border-radius-full);
  padding: 6px 12px;
  font-size: clamp(12px, 2vw, 14px);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: 5px;
}

.like-btn:hover {
  transform: scale(1.1);
  box-shadow: var(--box-shadow-sm);
}

.like-btn:active {
  transform: scale(0.95);
}

.wish-icon {
  position: absolute;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
  font-size: 20px;
  opacity: 0.8;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
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

/* 留言板样式 */
.message-board {
  background: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--box-shadow-md);
  animation: slideInUp 1s ease 0.8s both;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message-input-area {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: center;
}

.message-input {
  width: 100%;
  max-width: 600px;
  padding: var(--spacing-sm);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-size: clamp(14px, 2.5vw, 15px);
  resize: vertical;
  transition: all var(--transition-normal);
  font-family: inherit;
  background: var(--gradient-light);
  box-sizing: border-box;
}

.message-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-focus);
  background: var(--card-bg);
}

.message-author {
  width: 100%;
  max-width: 300px;
  padding: 10px var(--spacing-sm);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-size: clamp(12px, 2vw, 14px);
  transition: all var(--transition-normal);
  box-sizing: border-box;
}

.message-author:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-focus);
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
}

.message-list::-webkit-scrollbar {
  width: 6px;
}

.message-list::-webkit-scrollbar-track {
  background: var(--bg-color);
  border-radius: 3px;
}

.message-list::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 3px;
}

.message-list::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

.message-item {
  background: var(--gradient-success);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-md);
  animation: fadeInUp 0.5s ease;
  transition: all var(--transition-normal);
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: clamp(12px, 2vw, 14px);
}

.message-header .message-author {
  font-weight: bold;
  color: var(--primary-color);
  background: none;
  border: none;
  padding: 0;
}

.message-time {
  color: var(--text-muted);
  font-size: clamp(11px, 2vw, 12px);
}

.message-content {
  color: var(--text-color);
  line-height: 1.6;
  font-size: clamp(14px, 2.5vw, 15px);
}

/* 空留言状态样式 */
.empty-message {
  background: var(--gradient-light);
  border: 2px dashed var(--border-color);
  text-align: center;
  padding: 40px 20px;
  margin-top: var(--spacing-md);
}

.empty-message-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.empty-icon {
  font-size: 48px;
  animation: bounce 2s ease-in-out infinite;
}

.empty-text {
  font-size: clamp(16px, 3vw, 18px);
  font-weight: bold;
  color: var(--primary-color);
  margin: 0;
}

.empty-subtext {
  font-size: clamp(12px, 2vw, 14px);
  color: var(--text-muted);
  margin: 0;
}

/* 彩蛋样式 */
.surprise-section {
  margin: var(--spacing-lg) 0;
  text-align: center;
  position: relative;
  z-index: 2;
  width: 100%;
  clear: both;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.secret-btn {
  display: block;
  margin-top: var(--spacing-md);
  padding: 12px 30px;
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--border-radius-full);
  cursor: pointer;
  font-size: clamp(14px, 2.5vw, 16px);
  transition: all var(--transition-normal);
  border: none;
  box-shadow: var(--box-shadow-sm);
  position: relative;
  z-index: 3;
  width: auto;
  max-width: 250px;
}

.secret-btn:hover:not(:disabled) {
  background: var(--gradient-primary-light);
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-md);
}

.secret-btn:active:not(:disabled) {
  transform: translateY(0);
}

.secret-btn:disabled {
  background: var(--text-muted);
  cursor: not-allowed;
  box-shadow: none;
}

.secret-btn.active {
  background: var(--gradient-success);
  box-shadow: var(--box-shadow-sm);
}

.secret-content {
  margin: var(--spacing-lg) auto;
  padding: var(--spacing-lg);
  background: var(--gradient-huizhou);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-md);
  font-size: clamp(14px, 2.5vw, 16px);
  line-height: 1.8;
  animation: fadeIn 0.5s ease;
  text-align: left;
  position: relative;
  z-index: 3;
  max-width: 70%;
  clear: both;
  display: block;
  transition: all var(--transition-normal);
}

/* 手写信件样式 */
.letter-section {
  margin-bottom: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.handwritten {
  font-family: 'Inter', sans-serif;
  font-size: clamp(16px, 3vw, 19px);
  line-height: 2.2;
  color: var(--text-color);
  background: var(--gradient-warm);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-md);
  text-align: center;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.handwritten::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: repeating-linear-gradient(transparent,
      transparent 28px,
      rgba(0, 0, 0, 0.05) 28px,
      rgba(0, 0, 0, 0.05) 29px);
  z-index: 0;
}

.handwritten>div {
  position: relative;
  z-index: 1;
}

.signature {
  text-align: center;
  margin-top: var(--spacing-md);
  color: var(--secondary-color);
  font-style: italic;
  font-size: clamp(16px, 3vw, 18px);
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

/* 音乐播放器样式 */
.music-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  transform: none;
  z-index: 1000;
  width: 320px;
  max-width: 90vw;
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
  .container {
    padding: var(--spacing-md);
    max-width: calc(100vw - 20px);
    box-sizing: border-box;
    margin: 0 auto;
  }

  /* 新年装饰调整 */
  .new-year-decorations {
    position: relative;
    height: auto;
    overflow: hidden;
  }

  .lantern {
    font-size: 28px !important;
    position: absolute;
    top: auto;
    bottom: 10px;
  }

  .chinese-knot {
    font-size: 24px !important;
    position: absolute;
    top: auto;
    bottom: 20px;
  }

  /* 封面样式调整 */
  .cover {
    padding: 30px var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
    text-align: center;
    border-radius: var(--border-radius-md);
  }

  .cover-title {
    font-size: clamp(20px, 5vw, 26px);
    line-height: 1.3;
  }

  .cover-subtitle {
    font-size: clamp(12px, 2.5vw, 15px);
  }

  .countdown-number {
    font-size: clamp(16px, 3vw, 20px) !important;
    line-height: 35px !important;
    min-width: 30px !important;
    display: inline-block !important;
    text-align: center !important;
    color: var(--gold-color) !important;
    font-family: 'Inter', sans-serif !important;
    text-shadow: var(--shadow-md) !important;
    white-space: nowrap !important;
  }

  .countdown-separator {
    font-size: clamp(14px, 3vw, 18px) !important;
    line-height: 35px !important;
    margin: 0 3px !important;
    color: var(--gold-color) !important;
  }

  .countdown-item {
    height: 35px !important;
    width: 45px !important;
    min-width: 45px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  /* 卡片样式调整 */
  .greeting-card,
  .fortune-card,
  .game-section,
  .timeline-section,
  .wish-wall,
  .letter-section {
    margin-bottom: var(--spacing-lg);
    margin-top: 0;
  }

  .greeting-card,
  .fortune-card,
  .wish-wall,
  .message-board,
  .handwritten {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  /* 标题样式调整 */
  .section-title {
    font-size: clamp(16px, 3vw, 20px);
    margin-bottom: var(--spacing-md);
    text-align: center;
  }

  /* 时间轴样式调整 */
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 50px;
    margin-bottom: 30px;
  }

  .timeline-item::before {
    left: 18px;
  }

  .timeline-content {
    padding: var(--spacing-md);
    font-size: clamp(12px, 2.5vw, 14px);
    line-height: 1.6;
  }

  /* 愿望墙样式调整 */
  .wish-list {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .wish-input-area {
    margin-bottom: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: center;
  }

  /* 游戏卡片调整 */
  .game-card {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    margin-bottom: var(--spacing-lg);
  }

  .game-icon {
    font-size: clamp(28px, 5vw, 36px);
  }

  /* 手写信件调整 */
  .handwritten {
    font-size: clamp(12px, 2.5vw, 14px);
    padding: var(--spacing-md);
    line-height: 1.8;
    max-width: 100%;
    margin: 0 auto;
    border-radius: var(--border-radius-md);
  }

  /* 按钮样式调整 */
  .secret-btn,
  .primary-btn {
    padding: 14px 30px;
    font-size: clamp(14px, 2.5vw, 16px);
    width: 100%;
    margin: 8px 0;
    border-radius: var(--border-radius-full);
    min-height: 48px;
  }

  /* 输入框调整 */
  .wish-input,
  .message-input,
  .message-author {
    width: 100%;
    box-sizing: border-box;
    padding: 12px var(--spacing-sm);
    border-radius: var(--border-radius-sm);
  }

  /* 卡片式布局优化 */
  .fortune-content,
  .game-content {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-sm);
  }

  /* 输入区域对齐 */
  .wish-input-area,
  .message-input-area {
    align-items: center;
  }

  /* 输入框宽度调整 */
  .wish-input,
  .message-input {
    max-width: 100%;
  }

  .message-author {
    max-width: 100%;
  }
}

/* 小屏手机适配 (480px以下) */
@media (max-width: 480px) {

  /* 容器调整 */
  .container {
    padding: 15px;
    max-width: calc(100vw - 30px);
    box-sizing: border-box;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    /* 隐藏滚动条但保持滚动功能 */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* 确保整个页面不会水平溢出 */
  body,
  html {
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
    /* 隐藏滚动条但保持滚动功能 */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* 隐藏Chrome/Safari滚动条 */
  body::-webkit-scrollbar,
  html::-webkit-scrollbar,
  .container::-webkit-scrollbar {
    display: none;
  }

  /* 新年装饰调整 */
  .new-year-decorations {
    display: none;
  }

  /* 封面样式调整 */
  .cover {
    padding: 35px 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .cover-title {
    font-size: 24px;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .cover-subtitle {
    font-size: 14px;
    margin-bottom: 20px;
    opacity: 0.95;
  }

  .countdown {
    gap: 10px;
  }

  .countdown-number {
    font-size: 18px !important;
    font-weight: bold !important;
    min-width: 35px !important;
    display: inline-block !important;
    text-align: center !important;
    color: var(--gold-color) !important;
    font-family: 'Inter', sans-serif !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4) !important;
    white-space: nowrap !important;
    background: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .countdown-time {
    gap: 5px !important;
    padding: 10px 15px !important;
    background: rgba(255, 255, 255, 0.2) !important;
    backdrop-filter: blur(10px) !important;
    justify-content: center !important;
    flex-wrap: nowrap !important;
    width: auto !important;
    min-width: auto !important;
    max-width: 200px !important;
    margin: 0 auto !important;
    border-radius: 25px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
  }

  .countdown-separator {
    margin: 0 8px;
    font-size: 20px;
    line-height: 45px;
  }

  .countdown-item {
    width: 60px;
    height: 50px;
    min-width: 60px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 卡片样式调整 */
  .greeting-card,
  .fortune-card,
  .wish-wall {
    padding: 20px;
    border-radius: 18px;
    margin-bottom: 25px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  /* 统一标题样式 */
  .greeting-title,
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--primary-color);
    font-weight: bold;
    text-align: center;
    padding-bottom: 10px;
    position: relative;
  }

  .greeting-title::after,
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #c91f37, #e63946);
    border-radius: 2px;
  }

  /* 文字样式调整 */
  .greeting-text,
  .fortune-label,
  .fortune-value,
  .game-title,
  .game-result,
  .wish-content,
  .secret-content {
    font-size: 14px;
    line-height: 1.7;
  }

  /* 时间轴样式调整 */
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 50px;
    margin-bottom: 25px;
  }

  .timeline-item::before {
    left: 18px;
  }

  .timeline-date {
    font-size: 12px;
    font-weight: bold;
  }

  /* 游戏卡片调整 */
  .game-card {
    padding: 25px;
    border-radius: 18px;
    margin: 0 auto;
    max-width: 90%;
  }

  .game-icon {
    font-size: 40px;
    margin-bottom: 15px;
  }

  /* 手写信件调整 */
  .handwritten {
    font-size: 17px;
    padding: 25px;
    line-height: 2;
    text-align: center;
    border-radius: 18px;
  }

  /* 按钮样式调整 */
  .secret-btn {
    padding: 16px 35px;
    font-size: 16px;
    border-radius: 30px;
    width: 100%;
    margin: 10px 0;
    box-shadow: 0 6px 15px rgba(110, 72, 170, 0.3);
    min-height: 50px;
    font-weight: bold;
  }

  /* 输入框调整 */
  .wish-input,
  .message-input,
  .message-author {
    padding: 14px 18px;
    font-size: 15px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 15px;
    border: 2px solid #f5efe0;
    transition: all 0.3s ease;
  }

  .wish-input:focus,
  .message-input:focus,
  .message-author:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(110, 72, 170, 0.1);
  }

  /* 彩蛋内容调整 */
  .secret-content {
    padding: 25px;
    font-size: 15px;
    max-width: 100%;
    margin: 25px auto;
    border-radius: 18px;
    background: linear-gradient(135deg, #f5efe0 0%, #ffffff 100%);
  }

  /* 新年运势卡片调整 */
  .fortune-card {
    padding: 25px;
    background: linear-gradient(135deg, #4a90a4 0%, #f5efe0 100%);
  }

  .fortune-content {
    padding: 25px;
    text-align: center;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .fortune-item {
    display: block;
    text-align: center;
    padding: 15px 0;
    margin: 8px 0;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
  }

  .fortune-label {
    font-size: 15px;
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: var(--primary-color);
  }

  .fortune-value {
    font-size: 18px;
    display: block;
    font-weight: bold;
    background: linear-gradient(135deg, #c91f37, #e63946);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .fortune-tip {
    font-size: 14px;
    margin-top: 15px;
    color: var(--text-muted);
    font-style: italic;
  }

  .signature {
    font-size: 18px;
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
    color: var(--secondary-color);
  }

  /* 留言板调整 */
  .message-input-area {
    flex-direction: column;
    gap: 15px;
  }

  /* 愿望墙调整 */
  .wish-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .wish-item {
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  /* 分享按钮调整 */
  .share-section {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  /* 新年愿望墙优化 */
  .wish-input-area {
    margin-bottom: 25px;
  }

  /* 新年装饰元素移动端优化 */
  .new-year-decorations .lantern:nth-child(1),
  .new-year-decorations .lantern:nth-child(2) {
    top: 5%;
  }

  .new-year-decorations .lantern:nth-child(3),
  .new-year-decorations .lantern:nth-child(4) {
    display: none;
  }

  .new-year-decorations .chinese-knot {
    top: 15%;
  }

  /* 优化移动端滚动体验 */
  .container {
    padding: var(--spacing-sm);
  }

  /* 优化移动端按钮点击区域 */
  .primary-btn,
  .like-btn {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 优化移动端输入框体验 */
  textarea {
    min-height: 80px;
    resize: vertical;
  }
}

/* 平板设备优化 */
@media (min-width: 768px) and (max-width: 1199px) {
  .container {
    max-width: 700px;
  }

  .new-year-decorations .lantern {
    font-size: 36px;
  }

  .new-year-decorations .chinese-knot {
    font-size: 28px;
  }

  .fortune-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 大屏幕优化 */
@media (min-width: 1200px) {
  .container {
    max-width: 900px;
  }
}

/* 加载状态样式 */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl) 0;
  gap: var(--spacing-md);
}

.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
  margin-right: var(--spacing-sm);
}

.loading-spinner.large {
  width: 40px;
  height: 40px;
  border-width: 3px;
  margin-right: 0;
}

.loading-text {
  color: var(--text-muted);
  font-size: clamp(14px, 2.5vw, 16px);
  margin: 0;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* 错误提示样式 */
.error-message {
  background: var(--light-error);
  color: var(--error-color);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-md);
  border-left: 4px solid var(--error-color);
  font-size: clamp(12px, 2.5vw, 14px);
  animation: fadeIn 0.3s ease;
}

/* 表单输入样式增强 */
.wish-input:focus,
.message-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(201, 31, 55, 0.1);
  background: var(--card-bg);
  transform: translateY(-1px);
  transition: all var(--transition-normal);
}

.input-focused {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(201, 31, 55, 0.1);
  background: var(--card-bg);
}

.wish-input:disabled,
.message-input:disabled {
  background: var(--neutral-100);
  cursor: not-allowed;
  opacity: 0.7;
}

/* 按钮加载状态 */
.primary-btn:disabled {
  background: var(--text-muted);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  opacity: 0.7;
}

.primary-btn:disabled:hover {
  background: var(--text-muted);
  transform: none;
  box-shadow: none;
}

/* 点赞按钮交互反馈 */
.like-btn {
  transition: all var(--transition-normal);
}

.like-btn:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: var(--box-shadow-sm);
}

.like-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.like-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {

  /* 增加点击区域 */
  .secret-btn,
  .game-card,
  .fortune-content {
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 移除悬停效果，添加点击效果 */
  .secret-btn:active:not(:disabled),
  .game-card:active,
  .fortune-content:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
}
</style>

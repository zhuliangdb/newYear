import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 响应式状态
  const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  let countdownTimer: number | null = null

  // 计算属性
  const formattedCountdown = computed(() => {
    return {
      days: String(countdown.value.days).padStart(2, '0'),
      hours: String(countdown.value.hours).padStart(2, '0'),
      minutes: String(countdown.value.minutes).padStart(2, '0'),
      seconds: String(countdown.value.seconds).padStart(2, '0')
    }
  })

  // 方法
  const calculateCountdown = () => {
    // 计算距离2026年春节（2月17日）的时间差
    const now = new Date()
    const springFestival = new Date('2026-02-17')
    const diffTime = Math.abs(springFestival.getTime() - now.getTime())

    // 计算天、时、分、秒
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000)

    countdown.value = {
      days,
      hours,
      minutes,
      seconds
    }
  }

  const startCountdown = () => {
    if (countdownTimer) return

    calculateCountdown()
    countdownTimer = window.setInterval(() => {
      calculateCountdown()
    }, 1000)
  }

  const stopCountdown = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer)
      countdownTimer = null
    }
  }

  // 初始化方法（与startCountdown功能相同，保持API一致性）
  const initialize = () => {
    startCountdown()
  }

  // 生命周期钩子
  onMounted(() => {
    startCountdown()
  })

  onBeforeUnmount(() => {
    stopCountdown()
  })

  return {
    countdown,
    formattedCountdown,
    calculateCountdown,
    startCountdown,
    stopCountdown,
    initialize
  }
})

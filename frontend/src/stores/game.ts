import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  // 响应式状态
  const gameResult = ref('')

  // 固定数据
  const gameOptions = [
    '🎊 恭喜发财，万事如意！',
    '🎉 新年快乐，心想事成！',
    '💰 财运亨通，财源广进！',
    '💝 爱情甜蜜，幸福美满！',
    '🏆 事业有成，步步高升！',
    '🍀 好运连连，一帆风顺！',
    '🎁 惊喜不断，快乐常在！',
    '🌟 星光璀璨，前程似锦！'
  ]

  // 方法
  const playGame = () => {
    // 随机抽取新年签
    const randomIndex = Math.floor(Math.random() * gameOptions.length)
    gameResult.value = gameOptions[randomIndex]
  }

  const resetGame = () => {
    gameResult.value = ''
  }

  return {
    gameResult,
    playGame,
    resetGame
  }
})
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFortuneStore = defineStore('fortune', () => {
  // 响应式状态
  const fortuneItems = ref([
    { label: '事业运', value: '大吉' },
    { label: '财运', value: '中吉' },
    { label: '桃花运', value: '大吉' },
    { label: '健康运', value: '上上签' }
  ])

  // 固定数据
  const fortuneOptions: Record<string, string[]> = {
    事业运: ['大吉', '中吉', '小吉', '上上签', '吉星高照'],
    财运: ['大吉', '中吉', '小吉', '财运亨通', '财源广进'],
    桃花运: ['大吉', '中吉', '小吉', '桃花运旺', '缘分到来'],
    健康运: ['大吉', '中吉', '小吉', '身体健康', '平安如意']
  }

  // 方法
  const generateFortune = () => {
    // 随机生成运势
    fortuneItems.value = fortuneItems.value.map(item => {
      const options = fortuneOptions[item.label]
      const randomValue = options[Math.floor(Math.random() * options.length)]
      return { ...item, value: randomValue }
    })
  }

  return {
    fortuneItems,
    generateFortune
  }
})
<template>
  <div v-if="showPopup" class="blessing-popup" @click="closePopup">
    <div class="popup-content" @click.stop>
      <div class="popup-header">
        <h3 class="popup-title">🎊 新年祝福</h3>
        <button class="close-btn" @click="closePopup">×</button>
      </div>
      <div class="popup-body">
        <div class="blessing-text">
          {{ currentBlessing.text }}
        </div>
        <div class="blessing-region">{{ currentBlessing.region }}特色祝福</div>
        <div class="blessing-icon">
          {{ currentBlessing.icon }}
        </div>
      </div>
      <div class="popup-footer">
        <button class="primary-btn" @click="closePopup">收下祝福</button>
        <button class="secondary-btn" @click="nextBlessing">下一条</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 弹窗状态
const showPopup = ref(false)
const currentBlessing = ref(null)
const showTimeout = ref(null)
const clickCount = ref(0)

// 祝福数据
const blessings = [
  {
    text: '新年到，福气到，安徽黄山云海绕，祝你事业步步高！',
    region: '安徽',
    icon: '⛰️'
  },
  {
    text: '河南洛阳牡丹开，新年好运自然来，祝你生活乐开怀！',
    region: '河南',
    icon: '🌸'
  },
  {
    text: '徽州剪纸红似火，新年财运没得说，祝你财源滚滚来！',
    region: '安徽',
    icon: '✂️'
  },
  {
    text: '黄河之水天上来，新年福气装满怀，祝你万事如意发大财！',
    region: '河南',
    icon: '🌊'
  },
  {
    text: '黄梅戏唱新年好，安徽人民热情高，祝你家庭幸福乐陶陶！',
    region: '安徽',
    icon: '🎭'
  },
  {
    text: '少林寺里武功高，河南新年有妙招，祝你健康身体好！',
    region: '河南',
    icon: '🥋'
  },
  {
    text: '徽派建筑马头墙，新年好运长又长，祝你事事都顺畅！',
    region: '安徽',
    icon: '🏠'
  },
  {
    text: '龙门石窟佛光照，河南新年福运到，祝你天天开口笑！',
    region: '河南',
    icon: '🗿'
  },
  {
    text: '安徽茶香香千里，新年财运挡不住，祝你生意兴隆通四海！',
    region: '安徽',
    icon: '🍵'
  },
  {
    text: '河南烩面味道好，新年好运跟着跑，祝你生活质量高！',
    region: '河南',
    icon: '🍜'
  },
  // 安徽方言祝福
  {
    text: '乖乖隆地咚，新年到安徽，黄山云海美，祝你一年都顺遂！',
    region: '安徽',
    icon: '⛰️'
  },
  {
    text: '安徽老乡新年好，徽州文化宝中宝，祝你日子越过越红火！',
    region: '安徽',
    icon: '🎊'
  },
  {
    text: '毛豆腐、臭鳜鱼，安徽美食吃个够，新年财运不用愁！',
    region: '安徽',
    icon: '🍲'
  },
  {
    text: '安徽话讲新年好，祝你阖家欢乐，事业有成，一年更比一年好！',
    region: '安徽',
    icon: '🎉'
  },
  // 河南方言祝福
  {
    text: '中中中！河南新年就是得劲，祝你一年到头都顺风顺水！',
    region: '河南',
    icon: '👍'
  },
  {
    text: '河南烩面咥一碗，新年好运连成串，祝你生活比蜜甜！',
    region: '河南',
    icon: '🍜'
  },
  {
    text: '少林寺武功高强，河南人热情豪爽，祝你新年大吉大利！',
    region: '河南',
    icon: '🥋'
  },
  {
    text: '河南话：新年到，祝福到，祝你一家老小平平安安，红红火火！',
    region: '河南',
    icon: '🏮'
  }
]

// 随机显示祝福
const showRandomBlessing = () => {
  const randomIndex = Math.floor(Math.random() * blessings.length)
  currentBlessing.value = blessings[randomIndex]
  showPopup.value = true
}

// 关闭弹窗
const closePopup = () => {
  showPopup.value = false
}

// 下一条祝福
const nextBlessing = () => {
  let newIndex = Math.floor(Math.random() * blessings.length)
  // 确保不重复当前祝福
  while (newIndex === blessings.indexOf(currentBlessing.value)) {
    newIndex = Math.floor(Math.random() * blessings.length)
  }
  currentBlessing.value = blessings[newIndex]
}

// 处理点击事件
const handleClick = () => {
  clickCount.value++
  // 每点击5次有20%几率触发弹窗
  if (clickCount.value % 5 === 0 && Math.random() < 0.2) {
    showRandomBlessing()
  }
}

// 定时显示祝福
const scheduleBlessing = () => {
  // 每30-60秒随机显示一次祝福
  const randomInterval = Math.floor(Math.random() * 30000) + 30000
  showTimeout.value = setTimeout(() => {
    if (Math.random() < 0.3) {
      // 30%几率显示
      showRandomBlessing()
    }
    scheduleBlessing()
  }, randomInterval)
}

// 生命周期钩子
onMounted(() => {
  // 页面加载时随机显示祝福
  if (Math.random() < 0.5) {
    setTimeout(showRandomBlessing, 2000)
  }
  // 添加点击事件监听
  document.addEventListener('click', handleClick)
  // 定时显示祝福
  scheduleBlessing()
})

onBeforeUnmount(() => {
  // 清理定时器
  if (showTimeout.value) {
    clearTimeout(showTimeout.value)
  }
  // 移除事件监听
  document.removeEventListener('click', handleClick)
})
</script>

<style scoped>
.blessing-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideInUp 0.3s ease;
  border: 3px solid #ffd700;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.popup-title {
  color: #856404;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #856404;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(133, 100, 4, 0.1);
  transform: rotate(90deg);
}

.popup-body {
  text-align: center;
  margin-bottom: 30px;
}

.blessing-text {
  font-size: 18px;
  color: #533f03;
  line-height: 1.6;
  margin-bottom: 15px;
  font-weight: 500;
}

.blessing-region {
  font-size: 14px;
  color: #856404;
  margin-bottom: 20px;
  font-style: italic;
}

.blessing-icon {
  font-size: 64px;
  margin: 20px 0;
  animation: bounceIn 1s ease infinite alternate;
}

.popup-footer {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.primary-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
}

.primary-btn:hover {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(231, 76, 60, 0.4);
}

.secondary-btn {
  padding: 12px 24px;
  background: transparent;
  color: #856404;
  border: 2px solid #856404;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: #856404;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(133, 100, 4, 0.3);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .popup-content {
    padding: 20px;
    width: 95%;
  }

  .popup-title {
    font-size: 20px;
  }

  .blessing-text {
    font-size: 16px;
  }

  .blessing-icon {
    font-size: 48px;
  }

  .popup-footer {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>

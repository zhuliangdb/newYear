<template>
  <div class="snow-container">
    <!-- 雪花元素 -->
    <div 
      v-for="(snowflake, index) in snowflakes" 
      :key="index" 
      :style="snowflake.style" 
      class="snowflake">❄</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 组件属性配置
const props = defineProps({
  // 雪花生成间隔（毫秒）
  interval: {
    type: Number,
    default: 100
  },
  // 最大雪花数量
  maxCount: {
    type: Number,
    default: 100
  }
});

// 雪花数组
const snowflakes = ref([]);

// 定时生成雪花
let intervalId;

// 创建雪花
function createSnowflake() {
  // 检查当前雪花数量是否已达到最大值
  if (snowflakes.value.length >= props.maxCount) {
    return;
  }
  
  const snowflake = {
    style: {
      left: `${Math.random() * 100}%`, // 随机水平位置
      fontSize: `${Math.random() * 20 + 10}px`, // 随机大小（10px - 30px）
      animationDuration: `${Math.random() * 5 + 5}s`, // 随机动画时长（5s - 10s）
      animationDelay: `${Math.random() * 5}s`, // 随机动画延迟（0s - 5s）
      opacity: `${Math.random() * 0.5 + 0.5}` // 随机透明度（0.5 - 1.0）
    },
  };
  snowflakes.value.push(snowflake);

  // 雪花飘落后移除
  setTimeout(() => {
    snowflakes.value = snowflakes.value.filter((item) => item !== snowflake);
  }, parseFloat(snowflake.style.animationDuration) * 1000);
}

// 定时生成雪花
onMounted(() => {
  intervalId = setInterval(createSnowflake, props.interval);
});

// 组件卸载时清除定时器
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
}

.snowflake {
  position: absolute;
  top: -5%;
  color: #fff; /* 雪花颜色 */
  user-select: none; /* 禁止选中 */
  animation: fall linear infinite;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

@keyframes fall {
  to {
    transform: translateY(100vh); /* 雪花从顶部飘落到底部 */
  }
}
</style>
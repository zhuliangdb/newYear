<template>
  <div class="snowfall-container">
    <div
      ref="snowContainer"
      class="snow-container"
    />
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';
import { Snow } from 'jparticles';
let snowInstance: any = null;
const snowContainer = ref<HTMLElement | null>(null);

// 定义 props，支持指定雪花图标类型
const props = defineProps({
  // 雪花图标类型：1-5，对应 snow.png 到 snow5.png
  iconType: {
    type: Number,
    default: 0, // 0 表示随机使用所有图标
    validator: (value: number) => value >= 0 && value <= 5
  },
  // 是否在移动设备上禁用雪花效果
  disableOnMobile: {
    type: Boolean,
    default: true
  }
});

// 检查是否为移动设备
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// 预加载雪花图片
const preloadSnowImages = () => {
  const snowIcons = {
    1: new URL('@/assets/images/snow.png', import.meta.url).href,
    2: new URL('@/assets/images/snow1.png', import.meta.url).href,
    3: new URL('@/assets/images/snow2.png', import.meta.url).href,
    4: new URL('@/assets/images/snow4.png', import.meta.url).href,
    5: new URL('@/assets/images/snow5.png', import.meta.url).href
  };

  // 预加载图片
  Object.values(snowIcons).forEach(src => {
    const img = new Image();
    img.src = src;
  });

  return snowIcons;
};

onMounted(() => {
  // 在移动设备上禁用雪花效果以提高性能
  if (props.disableOnMobile && isMobile()) {
    return;
  }

  if (snowContainer.value) {
    // 预加载雪花图片
    const snowIcons = preloadSnowImages();

    // 根据 iconType 选择雪花图标
    let shape: string | string[];
    if (props.iconType === 0) {
      // 随机使用所有图标
      shape = Object.values(snowIcons);
    } else {
      // 使用指定类型的图标
      shape = snowIcons[props.iconType as keyof typeof snowIcons];
    }

    try {
      // 初始化雪花效果
      snowInstance = new Snow(snowContainer.value, {
        num: isMobile() ? 5 : 10, // 移动设备减少雪花数量
        maxR: isMobile() ? 12 : 15, // 移动设备减小雪花大小
        minR: isMobile() ? 6 : 8,
        maxSpeed: 0.5, // 增加雪花速度，使雪花更快地穿过屏幕
        minSpeed: 0.1,
        // 使用指定的雪花图标
        shape: shape,
        // 调整雪花效果的其他参数，使其更接近预期效果
        swing: true,
        swingInterval: 3000,
        swingProbability: 0.1,
        // 雪花轻微自旋
        spin: true,
        spinMaxSpeed: 1,
        spinMinSpeed: 0.1,
        // 调整雪花透明度，使其更融合页面
        opacity: 0.5
      } as any);
    } catch (error) {
      console.error('Error creating snow instance:', error);
    }
  }
});

onUnmounted(() => {
  // 销毁雪花实例
  if (snowInstance) {
    try {
      // 尝试停止雪花效果
      if (typeof snowInstance.stop === 'function') {
        snowInstance.stop();
      }
      // 清理实例引用
      snowInstance = null;
    } catch (error) {
      console.warn('销毁雪花实例时出错:', error);
      // 即使出错也要清理引用
      snowInstance = null;
    }
  }
});
</script>

<style scoped>
.snowfall-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  pointer-events: none;
}

.snow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* 添加金色和红色渐变效果 */
  filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.5)) drop-shadow(0 0 4px rgba(201, 31, 55, 0.3));
}

/* 为雪花添加额外的渐变效果 */
.snow-container img {
  /* 确保雪花图片显示为白色 */
  filter: grayscale(100%) brightness(2) contrast(1.2);
}
</style>
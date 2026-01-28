<template>
  <component :is="AsyncSnowfallComponent" v-bind="$attrs" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// 懒加载 Snowfall 组件
const AsyncSnowfallComponent = defineAsyncComponent({
  loader: () => import('./Snowfall.vue'),
  loadingComponent: {
    template: '<div class="snowfall-loading"></div>'
  },
  errorComponent: {
    template: '<div class="snowfall-error"></div>'
  },
  delay: 200,
  timeout: 3000
})
</script>

<style scoped>
.snowfall-loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}

.snowfall-error {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>

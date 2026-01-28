<template>
  <div v-if="modelValue" class="popup-overlay" @click="$emit('update:modelValue', false)">
    <div class="popup-content" @click.stop>
      <div class="popup-header">
        <slot name="header">
          <h3 class="popup-title">
            {{ title }}
          </h3>
        </slot>
        <button class="close-btn" @click="$emit('update:modelValue', false)">×</button>
      </div>

      <div class="popup-body">
        <slot />
      </div>

      <div class="popup-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 定义属性
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '弹窗标题'
  },
  width: {
    type: String,
    default: '90%'
  },
  maxWidth: {
    type: String,
    default: '500px'
  }
})

// 定义事件
defineEmits(['update:modelValue'])
</script>

<style scoped>
.popup-overlay {
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
  max-width: v-bind(maxWidth);
  width: v-bind(width);
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
  margin-bottom: 30px;
}

.popup-footer {
  display: flex;
  gap: 15px;
  justify-content: center;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .popup-content {
    padding: 20px;
    width: 95%;
  }

  .popup-title {
    font-size: 20px;
  }

  .popup-footer {
    flex-direction: column;
    align-items: center;
  }
}
</style>

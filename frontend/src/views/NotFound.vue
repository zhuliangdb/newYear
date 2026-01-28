<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">页面不存在</p>
      <p class="not-found-description">抱歉，您访问的页面不存在或已被移除</p>
      <el-button type="primary" @click="goHome"> 返回首页 </el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: var(--spacing-md);
  box-sizing: border-box;
}

.not-found-content {
  text-align: center;
  padding: var(--spacing-lg);
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  max-width: 400px;
  width: 100%;
  transition: all var(--transition-normal);
}

.not-found-title {
  font-size: clamp(60px, 15vw, 80px);
  font-weight: 700;
  color: #409eff;
  margin: 0 0 var(--spacing-md);
  line-height: 1;
}

.not-found-message {
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 600;
  color: #303133;
  margin: 0 0 var(--spacing-sm);
}

.not-found-description {
  font-size: clamp(12px, 2.5vw, 14px);
  color: #606266;
  margin: 0 0 var(--spacing-lg);
  line-height: 1.5;
}

.el-button {
  margin-top: var(--spacing-md);
  padding: clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 32px);
  font-size: clamp(14px, 2.5vw, 16px);
  min-height: 44px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .not-found-container {
    padding: var(--spacing-md);
  }

  .not-found-content {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    max-width: 90%;
  }

  .not-found-title {
    font-size: clamp(50px, 15vw, 70px);
    margin-bottom: var(--spacing-sm);
  }

  .not-found-message {
    font-size: clamp(16px, 4vw, 20px);
    margin-bottom: var(--spacing-xs);
  }

  .not-found-description {
    font-size: clamp(12px, 2.5vw, 14px);
    margin-bottom: var(--spacing-md);
  }

  .el-button {
    margin-top: var(--spacing-sm);
    width: 100%;
    max-width: 200px;
  }
}

/* 小屏手机适配 (480px以下) */
@media (max-width: 480px) {
  .not-found-container {
    padding: var(--spacing-sm);
  }

  .not-found-content {
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    max-width: 100%;
  }

  .not-found-title {
    font-size: clamp(40px, 15vw, 60px);
  }

  .not-found-message {
    font-size: clamp(14px, 4vw, 18px);
  }

  .not-found-description {
    font-size: clamp(12px, 2.5vw, 14px);
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .el-button {
    min-height: 44px;
    min-width: 44px;
  }

  .el-button:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
}
</style>

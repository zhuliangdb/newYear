<template>
  <nav class="navbar">
    <div class="navbar-content">
      <slot name="logo">
        <div class="navbar-logo">
          <span class="logo-icon">🏮</span>
          <span class="logo-text">新年惊喜</span>
        </div>
      </slot>

      <!-- 桌面端导航链接 -->
      <div class="navbar-links desktop">
        <slot name="desktop-links" />
      </div>

      <!-- 移动端汉堡菜单按钮 -->
      <div class="mobile-menu-button" @click="toggleMobileMenu">
        <span class="menu-icon" :class="{ open: mobileMenuOpen }" />
      </div>
    </div>

    <!-- 移动端导航菜单 -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <div class="mobile-menu-content">
        <slot name="mobile-links" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// 移动端菜单状态
const mobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// 暴露方法
defineExpose({
  closeMobileMenu
})
</script>

<style scoped>
/* 导航栏 */
.navbar {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 16px 0;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: var(--accent-color);
}

.logo-icon {
  font-size: 28px;
  color: var(--accent-color);
}

.logo-text {
  color: var(--accent-color);
}

/* 桌面端导航链接 */
.navbar-links.desktop {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* 移动端菜单按钮 */
.mobile-menu-button {
  display: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

.menu-icon.open {
  background-color: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  bottom: 0;
}

/* 移动端导航菜单 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1000;
  padding-top: 80px;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-content {
    padding: 0 16px;
  }

  .navbar-logo {
    font-size: 20px;
  }

  .logo-icon {
    font-size: 24px;
  }

  .navbar-links.desktop {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none;
  }
}
</style>

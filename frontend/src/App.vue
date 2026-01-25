<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-logo">
          <span class="logo-icon">🏮</span>
          <span class="logo-text">新年惊喜</span>
        </div>
        <!-- 桌面端导航链接 -->
        <div class="navbar-links desktop">
          <router-link
            to="/"
            class="navbar-link"
          >
            首页
          </router-link>
          <router-link
            to="/cultural-features"
            class="navbar-link"
          >
            文化特色
          </router-link>
          <router-link
            to="/activities"
            class="navbar-link"
          >
            活动
          </router-link>
          <router-link
            to="/new-year-surprise"
            class="navbar-link"
          >
            新年惊喜
          </router-link>
          <router-link
            to="/about"
            class="navbar-link"
          >
            关于我们
          </router-link>
        </div>
        <!-- 移动端汉堡菜单按钮 -->
        <div
          class="mobile-menu-button"
          @click="toggleMobileMenu"
        >
          <span
            class="menu-icon"
            :class="{ 'open': mobileMenuOpen }"
          />
        </div>
      </div>
      <!-- 移动端导航菜单 -->
      <div
        class="mobile-menu"
        :class="{ 'open': mobileMenuOpen }"
      >
        <div class="mobile-menu-content">
          <router-link
            to="/"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            首页
          </router-link>
          <router-link
            to="/cultural-features"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            文化特色
          </router-link>
          <router-link
            to="/activities"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            活动
          </router-link>
          <router-link
            to="/new-year-surprise"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            新年惊喜
          </router-link>
          <router-link
            to="/about"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            关于我们
          </router-link>
        </div>
      </div>
    </nav>
    <main>
      <transition
        name="page-transition"
        mode="out-in"
      >
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: '思源黑体', 'Source Han Sans', Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

#app {
  width: 100%;
  min-height: 100vh;
}

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

.navbar-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 16px;
  border-radius: 20px;
}

.navbar-link:hover {
  color: var(--accent-color);
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.navbar-link.router-link-active {
  color: var(--accent-color);
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: 600;
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

.mobile-nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: var(--accent-color);
  padding-left: 12px;
}

.mobile-nav-link.router-link-active {
  color: var(--accent-color);
  font-weight: 600;
  padding-left: 12px;
}

main {
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
}

/* 页面过渡动画 */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
}

.page-transition-enter-active {
  animation: pageEnter 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes pageEnter {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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

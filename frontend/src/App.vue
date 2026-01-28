<template>
  <div id="app">
    <Navbar ref="navbarRef">
      <template #desktop-links>
        <router-link to="/" class="navbar-link"> 首页 </router-link>
        <router-link to="/cultural-features" class="navbar-link"> 文化特色 </router-link>
        <router-link to="/activities" class="navbar-link"> 活动 </router-link>
        <router-link to="/new-year-surprise" class="navbar-link"> 新年惊喜 </router-link>
        <router-link to="/about" class="navbar-link"> 关于我们 </router-link>
      </template>
      <template #mobile-links>
        <router-link to="/" class="mobile-nav-link" @click="navbarRef?.closeMobileMenu()">
          首页
        </router-link>
        <router-link
          to="/cultural-features"
          class="mobile-nav-link"
          @click="navbarRef?.closeMobileMenu()"
        >
          文化特色
        </router-link>
        <router-link to="/activities" class="mobile-nav-link" @click="navbarRef?.closeMobileMenu()">
          活动
        </router-link>
        <router-link
          to="/new-year-surprise"
          class="mobile-nav-link"
          @click="navbarRef?.closeMobileMenu()"
        >
          新年惊喜
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="navbarRef?.closeMobileMenu()">
          关于我们
        </router-link>
      </template>
    </Navbar>
    <main>
      <transition name="page-transition" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

// 导航栏引用
const navbarRef = ref(null)
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

/* 导航链接样式 */
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

/* 移动端导航链接样式 */
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
</style>

<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-logo">
          <span class="logo-icon">🏮</span>
          <span class="logo-text">新年惊喜</span>
        </div>
        <div class="navbar-links">
          <router-link to="/" class="navbar-link"> 首页 </router-link>
          <router-link to="/cultural-features" class="navbar-link"> 文化特色 </router-link>
          <router-link to="/activities" class="navbar-link"> 活动 </router-link>
          <router-link to="/new-year-surprise" class="navbar-link"> 新年惊喜 </router-link>
          <router-link to="/about" class="navbar-link"> 关于我们 </router-link>
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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

.navbar-links {
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

main {
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
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

  .navbar-links {
    gap: 12px;
  }

  .navbar-link {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style>

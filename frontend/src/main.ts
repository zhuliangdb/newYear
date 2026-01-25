import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 引入全局CSS变量
import './assets/css/variables.css'
// 引入新年主题样式
import './assets/css/new-year-theme.css'
// 引入CSRF工具
import { generateCsrfToken } from './utils/csrf'

// PWA注册由Vite PWA插件自动处理，无需手动注册

// 初始化CSRF令牌
generateCsrfToken()

// 创建应用实例
const app = createApp(App)

// 创建Pinia实例
const pinia = createPinia()
// 使用持久化插件
pinia.use(piniaPluginPersistedstate)

// 使用插件
app.use(router)
app.use(pinia)

// 挂载应用
app.mount('#app')
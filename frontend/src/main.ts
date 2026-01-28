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
// 引入性能监控工具
import performanceMonitor, { monitorPageLoad, monitorResourceLoad } from './utils/performance'

// PWA注册由Vite PWA插件自动处理，无需手动注册

// 初始化CSRF令牌
generateCsrfToken()

// 启用性能监控
performanceMonitor.enable()

// 监控页面加载性能
monitorPageLoad()

// 监控资源加载性能
monitorResourceLoad()

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

// 报告初始性能指标
setTimeout(() => {
  performanceMonitor.report()
}, 1000)

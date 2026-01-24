import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
// 引入全局CSS变量
import './assets/variables.css'
// 引入新年主题样式
import './assets/new-year-theme.css'

// PWA注册由Vite PWA插件自动处理，无需手动注册

// 创建应用实例
const app = createApp(App)

// 创建Pinia实例
const pinia = createPinia()

// 使用插件
app.use(router)
app.use(ElementPlus)
app.use(pinia)

// 挂载应用
app.mount('#app')

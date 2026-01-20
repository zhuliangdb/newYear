import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';

// PWA注册 - 仅在生产环境下注册ServiceWorker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/newYear/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// 创建应用实例
const app = createApp(App);

// 创建Pinia实例
const pinia = createPinia();

// 使用插件
app.use(router);
app.use(ElementPlus);
app.use(pinia);

// 挂载应用
app.mount('#app');
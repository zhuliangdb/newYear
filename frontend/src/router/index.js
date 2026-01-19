import { createRouter, createWebHistory } from 'vue-router';

// 导入视图组件
import Home from '../views/Home.vue';

// 懒加载新年惊喜组件
const NewYearSurprise = () => import('../views/NewYearSurprise.vue');

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-year-surprise',
      name: 'newYearSurprise',
      component: NewYearSurprise
    }
  ]
});

export default router;
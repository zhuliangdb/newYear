import { createRouter, createWebHashHistory } from 'vue-router'

// 导入视图组件
import Home from '../views/Home.vue'

// 懒加载组件
const NewYearSurprise = () => import('../views/NewYearSurprise.vue')
const CulturalFeatures = () => import('../views/CulturalFeatures.vue')
const Activities = () => import('../views/Activities.vue')
const About = () => import('../views/About.vue')

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-year-surprise',
      name: 'new-year-surprise',
      component: NewYearSurprise
    },
    {
      path: '/cultural-features',
      name: 'cultural-features',
      component: CulturalFeatures
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router

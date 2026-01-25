import { createRouter, createWebHashHistory } from 'vue-router'

// 懒加载组件
const Home = () => import('../views/Home.vue')
const NewYearSurprise = () => import('../views/NewYearSurprise.vue')
const CulturalFeatures = () => import('../views/CulturalFeatures.vue')
const Activities = () => import('../views/Activities.vue')
const About = () => import('../views/About.vue')
const NotFound = () => import('../views/NotFound.vue')

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/new-year-surprise',
      name: 'new-year-surprise',
      component: NewYearSurprise,
      meta: {
        title: '新年惊喜'
      }
    },
    {
      path: '/cultural-features',
      name: 'cultural-features',
      component: CulturalFeatures,
      meta: {
        title: '文化特色'
      }
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities,
      meta: {
        title: '活动'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: {
        title: '404 - 页面不存在'
      }
    }
  ]
})

// 路由守卫 - 全局前置守卫
router.beforeEach((to, _from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title || '安徽春节文化展'} - 安徽春节文化展`
  
  // 权限控制示例
  // 这里可以根据实际需求添加权限检查逻辑
  // 例如：检查用户是否登录，是否有权限访问特定路由等
  
  // 继续导航
  next()
})

// 路由守卫 - 全局后置守卫
router.afterEach((to, _from) => {
  // 可以在这里添加页面访问统计、埋点等逻辑
  console.log(`导航到 ${to.path} 成功`)
})

export default router
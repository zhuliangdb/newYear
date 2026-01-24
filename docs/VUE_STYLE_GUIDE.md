# Vue 项目编码规范

## 1. 概述

本文档旨在为新年主题网站项目的Vue开发提供一套统一的编码规范和最佳实践，确保代码质量和一致性，提高开发效率和可维护性。

## 2. 基础规范

### 2.1 文件结构

```
src/
├── assets/            # 静态资源
│   ├── css/           # 样式文件
│   ├── images/        # 图片文件
│   └── fonts/         # 字体文件
├── components/        # 组件
│   ├── common/        # 通用组件
│   └── new-year/      # 新年主题组件
├── views/             # 页面
├── router/            # 路由配置
├── stores/            # 状态管理
├── utils/             # 工具函数
├── App.vue            # 根组件
└── main.js            # 入口文件
```

### 2.2 文件命名

| 文件类型 | 命名规范 | 示例 |
|---------|---------|------|
| 组件文件 | PascalCase.vue | Home.vue, RegionalContentDisplay.vue |
| 视图文件 | PascalCase.vue | CulturalFeatures.vue, NewYearSurprise.vue |
| 工具文件 | kebab-case.js | firebase.js, date-utils.js |
| 样式文件 | kebab-case.css | new-year-theme.css, variables.css |
| 状态管理文件 | kebab-case.js | counter.js, wishes.js |
| 路由文件 | index.js | index.js |

### 2.3 命名约定

| 项目 | 命名规范 | 示例 |
|------|---------|------|
| 组件名 | PascalCase | Home, RegionalContentDisplay |
| 变量名 | camelCase | userName, isLoading |
| 常量名 | UPPER_CASE | MAX_COUNT, API_URL |
| 函数名 | camelCase | getUserInfo, handleClick |
| 方法名 | camelCase | computed, watch |
| 事件名 | kebab-case | update:modelValue, custom-event |
| prop名 | camelCase (定义) / kebab-case (使用) | userName (定义) / user-name (使用) |
| ref名 | camelCase | formRef, dialogRef |

## 3. 组件规范

### 3.1 组件设计原则

- **单一职责**：每个组件只负责一个功能
- **可复用性**：设计通用组件，提高复用率
- **可维护性**：代码结构清晰，易于理解和维护
- **性能优化**：避免不必要的渲染，合理使用缓存

### 3.2 组件结构

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup>
// 组合式API
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Props
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

// Emits
const emit = defineEmits(['update:title'])

// 响应式数据
const count = ref(0)

// 计算属性
const doubledCount = computed(() => count.value * 2)

// 方法
const handleClick = () => {
  count.value++
  emit('update:title', `Count: ${count.value}`)
}

// 生命周期
onMounted(() => {
  console.log('Component mounted')
})
</script>

<style scoped>
/* 组件样式 */
</style>
```

### 3.3 组件通信

| 通信方式 | 适用场景 | 示例 |
|---------|---------|------|
| Props | 父组件向子组件传递数据 | `:title="pageTitle"` |
| Emits | 子组件向父组件传递事件 | `@update:title="handleTitleUpdate"` |
| provide/inject | 跨层级组件通信 | `provide('theme', 'dark')` / `inject('theme')` |
| Pinia | 全局状态管理 | `useWishesStore()` |
| 事件总线 | 非父子组件通信 | `mitt` 库 |

### 3.4 组件最佳实践

- 使用 `<script setup>` 语法糖
- 优先使用组合式API
- 合理使用 `defineProps` 和 `defineEmits`
- 使用 `ref` 和 `computed` 管理响应式数据
- 避免在模板中使用复杂表达式
- 合理使用 `v-if` 和 `v-show`
- 使用 `key` 属性优化列表渲染
- 避免直接操作DOM

## 4. 模板规范

### 4.1 模板语法

- 使用双大括号 `{{}}` 进行文本插值
- 使用 `v-bind:` 或简写 `:` 进行属性绑定
- 使用 `v-on:` 或简写 `@` 进行事件绑定
- 使用 `v-model` 进行双向数据绑定
- 使用 `v-for` 进行列表渲染
- 使用 `v-if` / `v-else-if` / `v-else` 进行条件渲染
- 使用 `v-show` 进行条件显示

### 4.2 模板结构

- 模板根节点尽量简洁
- 合理使用 `<template>` 标签进行逻辑分组
- 使用语义化HTML标签
- 避免嵌套过深（建议不超过4层）
- 合理使用注释

### 4.3 模板最佳实践

- 避免在模板中使用复杂表达式
- 合理使用计算属性替代模板中的复杂逻辑
- 使用 `v-for` 时必须添加 `key` 属性
- 避免在 `v-for` 中使用 `v-if`
- 使用 `v-model` 时注意修饰符的使用
- 合理使用 `:class` 和 `:style` 进行动态样式绑定

## 5. 脚本规范

### 5.1 脚本结构

- 导入语句按顺序排列：
  1. 第三方库
  2. Vue内置API
  3. 本地组件
  4. 本地工具
  5. 样式文件

- 响应式数据定义
- 计算属性定义
- 方法定义
- 生命周期钩子

### 5.2 脚本最佳实践

- 使用ES6+语法
- 避免使用var声明变量
- 合理使用const和let
- 函数参数不宜过多（建议不超过4个）
- 函数体不宜过长（建议不超过50行）
- 合理使用解构赋值
- 合理使用箭头函数
- 避免使用eval
- 避免使用with

### 5.3 异步操作

- 使用async/await处理异步操作
- 合理使用try/catch捕获错误
- 避免回调地狱
- 合理使用Promise.all处理并行请求

## 6. 样式规范

### 6.1 样式文件结构

- 全局样式：`src/assets/css/variables.css`
- 主题样式：`src/assets/css/new-year-theme.css`
- 组件样式：组件内 `<style scoped>`

### 6.2 样式命名

- 使用BEM命名规范：
  ```css
  .block {
  }
  
  .block__element {
  }
  
  .block--modifier {
  }
  ```

- 组件样式使用 `scoped` 修饰符
- 避免使用ID选择器
- 避免使用!important

### 6.3 样式最佳实践

- 使用CSS变量定义主题色
- 合理使用Flexbox和Grid布局
- 避免使用内联样式
- 合理使用媒体查询
- 优化CSS选择器
- 避免冗余样式
- 合理使用动画和过渡效果

## 7. 状态管理规范

### 7.1 Pinia使用规范

- 每个模块创建单独的store文件
- 使用 `defineStore` 定义store
- 合理使用 `state`、`getters`、`actions`
- 异步操作放在 `actions` 中
- 避免在组件中直接修改state，通过actions修改

### 7.2 状态管理最佳实践

- 只存储必要的全局状态
- 避免过度使用全局状态
- 合理使用本地状态
- 状态命名清晰，易于理解
- 状态结构设计合理，避免嵌套过深

## 8. 路由规范

### 8.1 路由配置

- 使用Vue Router 4的新语法
- 合理使用路由懒加载
- 配置路由meta信息
- 合理使用路由守卫

### 8.2 路由最佳实践

- 路由命名使用kebab-case
- 路由路径使用kebab-case
- 合理使用嵌套路由
- 避免路由参数过多
- 合理使用路由重定向

## 9. 性能优化

### 9.1 组件优化

- 使用 `v-memo` 缓存组件
- 合理使用 `v-once` 渲染静态内容
- 组件懒加载
- 合理使用 `keep-alive` 缓存组件

### 9.2 数据优化

- 合理使用 `computed` 缓存计算结果
- 避免在模板中进行复杂计算
- 合理使用 `watch` 监听数据变化
- 避免不必要的数据响应式

### 9.3 网络优化

- 合理使用HTTP缓存
- 资源压缩
- 图片优化
- 合理使用CDN

### 9.4 构建优化

- 代码分割
- 树摇优化
- 合理使用预加载
- 构建分析

## 10. 代码质量

### 10.1 ESLint配置

- 使用Vue官方推荐的ESLint配置
- 集成Prettier进行代码格式化
- 配置husky进行git commit前的代码检查

### 10.2 代码审查

- 定期进行代码审查
- 关注代码质量和性能
- 及时修复潜在问题
- 分享最佳实践

### 10.3 测试

- 单元测试
- 组件测试
- E2E测试
- 性能测试

## 11. 最佳实践

### 11.1 开发工具

- VS Code
- Volar插件
- ESLint插件
- Prettier插件

### 11.2 开发流程

- 本地开发：`npm run dev`
- 代码检查：`npm run lint`
- 构建测试：`npm run build`
- 预览构建：`npm run preview`

### 11.3 调试技巧

- 使用Vue DevTools
- 合理使用console.log
- 断点调试
- 性能分析

## 12. 示例代码

### 12.1 组件示例

```vue
<template>
  <div class="regional-content">
    <h2 class="regional-content__title">{{ title }}</h2>
    <div class="regional-content__body">
      <slot></slot>
    </div>
    <button 
      class="regional-content__button" 
      @click="handleButtonClick"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '区域内容'
  },
  buttonText: {
    type: String,
    default: '点击查看'
  }
})

const emit = defineEmits(['button-click'])

const handleButtonClick = () => {
  emit('button-click')
}
</script>

<style scoped>
.regional-content {
  background-color: var(--huizhou-white);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  box-shadow: var(--box-shadow-md);
  transition: var(--transition);
}

.regional-content:hover {
  transform: translateY(-4px);
  box-shadow: var(--box-shadow-lg);
}

.regional-content__title {
  font-size: 24px;
  font-weight: 600;
  color: var(--huizhou-red);
  margin-bottom: 16px;
}

.regional-content__body {
  margin-bottom: 24px;
  line-height: 1.6;
  color: #666;
}

.regional-content__button {
  background: var(--huizhou-gradient);
  color: var(--huizhou-white);
  border: none;
  border-radius: var(--border-radius-md);
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.regional-content__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 31, 55, 0.3);
}
</style>
```

### 12.2 状态管理示例

```javascript
// src/stores/wishes.js
import { defineStore } from 'pinia'

export const useWishesStore = defineStore('wishes', {
  state: () => ({
    wishes: [],
    isLoading: false,
    error: null
  }),

  getters: {
    wishCount: (state) => state.wishes.length,
    recentWishes: (state) => {
      return state.wishes.slice(0, 5)
    }
  },

  actions: {
    async fetchWishes() {
      this.isLoading = true
      this.error = null
      
      try {
        // 模拟API请求
        const response = await fetch('/api/wishes')
        const data = await response.json()
        this.wishes = data
      } catch (error) {
        this.error = error.message
        console.error('Failed to fetch wishes:', error)
      } finally {
        this.isLoading = false
      }
    },

    async addWish(wish) {
      this.isLoading = true
      this.error = null
      
      try {
        // 模拟API请求
        const response = await fetch('/api/wishes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(wish)
        })
        
        const data = await response.json()
        this.wishes.unshift(data)
        return data
      } catch (error) {
        this.error = error.message
        console.error('Failed to add wish:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
```

### 12.3 路由配置示例

```javascript
// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页 - 新年惊喜'
    }
  },
  {
    path: '/cultural-features',
    name: 'cultural-features',
    component: () => import('../views/CulturalFeatures.vue'),
    meta: {
      title: '文化特色 - 新年惊喜'
    }
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/Activities.vue'),
    meta: {
      title: '新年活动 - 新年惊喜'
    }
  },
  {
    path: '/new-year-surprise',
    name: 'new-year-surprise',
    component: () => import('../views/NewYearSurprise.vue'),
    meta: {
      title: '新年惊喜 - 新年惊喜'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我们 - 新年惊喜'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || '新年惊喜'
  next()
})

export default router
```

## 13. 总结

本文档提供了一套完整的Vue项目编码规范和最佳实践，旨在帮助开发团队编写高质量、一致性的代码。在实际开发过程中，应根据项目的具体情况灵活应用这些规范，并不断总结和优化，以适应项目的发展需求。

通过遵循这些规范，可以提高代码的可读性、可维护性和性能，减少错误和bug，提高开发效率，确保项目的顺利进行和成功交付。

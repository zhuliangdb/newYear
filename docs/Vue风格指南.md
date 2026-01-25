# Vue 风格指南

本文档详细描述了项目中Vue代码的风格规范和最佳实践，确保代码的一致性和可维护性。

## 项目使用场景

### 目标用户

- 本项目主要针对1-2人在电脑或平板设备上使用

### 开发考虑因素

- **设备优化**：优先考虑桌面端和平板设备的体验，确保在这些设备上获得最佳效果
- **性能平衡**：由于是1-2人使用，可适当平衡性能和功能，不必过度优化并发性能
- **交互设计**：以鼠标和触摸板操作为主，兼顾平板设备的触摸操作
- **代码复杂度**：考虑到是小团队开发，保持代码的简洁性和可维护性，避免过度设计

## 代码风格

### 1. 缩进

- 使用2个空格进行缩进
- 避免使用制表符
- 保持缩进的一致性

### 2. 换行

- 每行代码长度不超过100个字符
- 适当使用换行提高代码可读性
- 保持代码块的整洁和清晰

### 3. 命名规范

#### 3.1 组件命名

- 使用 PascalCase 命名组件（例如：`CulturalCard.vue`）
- 组件文件名与组件名称保持一致
- 对于复合单词，使用驼峰命名法

#### 3.2 变量命名

- 使用 camelCase 命名变量（例如：`userName`）
- 常量使用 UPPER_CASE 命名（例如：`MAX_COUNT`）
- 避免使用下划线和连字符

#### 3.3 方法命名

- 使用 camelCase 命名方法（例如：`getUserData`）
- 方法名应清晰表达其功能
- 使用动词开头的方法名（例如：`fetchData`、`updateUser`）

#### 3.4 计算属性命名

- 使用 camelCase 命名计算属性（例如：`fullName`）
- 计算属性名应清晰表达其返回值
- 避免使用动词开头的计算属性名

### 4. 注释

- 使用中文注释
- 为复杂逻辑添加详细注释
- 为组件、方法和重要变量添加注释
- 注释应清晰、简洁、准确

## 组件设计

### 1. 组件结构

#### 1.1 单文件组件结构

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup>
// 脚本内容
</script>

<style scoped>
/* 样式内容 */
</style>
```

#### 1.2 组件拆分

- 按照功能和职责拆分组件
- 组件应保持小巧、专注
- 避免创建过于复杂的组件

### 2. 模板规范

#### 2.1 模板语法

- 使用简写语法（例如：`v-bind` 简写为 `:`，`v-on` 简写为 `@`）
- 避免在模板中使用复杂的表达式
- 使用计算属性替代复杂的模板表达式

#### 2.2 条件渲染

- 使用 `v-if`/`v-else-if`/`v-else` 进行条件渲染
- 对于频繁切换的元素，使用 `v-show`
- 避免在同一元素上同时使用 `v-if` 和 `v-for`

#### 2.3 列表渲染

- 使用 `v-for` 进行列表渲染
- 为 `v-for` 元素添加唯一的 `key` 属性
- 避免在 `v-for` 中使用复杂的表达式

### 3. 脚本规范

#### 3.1 脚本风格

- 使用 Composition API（`setup` 语法糖）
- 按照逻辑相关性组织代码
- 合理使用 `ref` 和 `reactive`

#### 3.2 导入规范

- 按照以下顺序导入：
  1. Vue 核心 API
  2. 第三方库
  3. 本地组件
  4. 本地工具函数
  5. 本地样式

#### 3.3 响应式数据

- 使用 `ref` 定义简单响应式数据
- 使用 `reactive` 定义复杂响应式数据
- 合理使用 `computed` 和 `watch`

#### 3.4 生命周期

- 使用 Composition API 中的生命周期钩子
- 合理使用生命周期钩子，避免过度使用
- 清理副作用，避免内存泄漏

### 4. 样式规范

#### 4.1 样式组织

- 使用 `scoped` 样式
- 避免使用全局样式覆盖
- 合理使用 CSS 变量

#### 4.2 CSS 规范

- 使用 kebab-case 命名 CSS 类（例如：`cultural-card`）
- 避免使用 ID 选择器
- 合理使用 BEM 命名规范
- 保持 CSS 选择器的简洁性

#### 4.3 响应式设计

- 使用媒体查询实现响应式设计
- 合理使用弹性布局和网格布局
- 避免使用固定像素值，优先使用相对单位

## 最佳实践

### 1. 性能优化

#### 1.1 组件优化

- 使用 `v-memo` 缓存组件渲染
- 合理使用 `v-once` 避免重复渲染
- 实现组件的懒加载

#### 1.2 数据优化

- 合理使用 `shallowRef` 和 `shallowReactive`
- 避免在模板中进行复杂计算
- 使用 `toRefs` 保持响应式

#### 1.3 事件优化

- 实现事件的防抖和节流
- 合理使用事件委托
- 清理事件监听器，避免内存泄漏

### 2. 代码组织

#### 2.1 目录结构

- 按照功能组织代码目录
- 保持目录结构的清晰和一致
- 合理使用子目录拆分功能

#### 2.2 文件组织

- 每个组件一个文件
- 相关组件放在同一目录下
- 合理使用工具函数和常量文件

### 3. 错误处理

- 合理使用 try/catch 捕获错误
- 实现全局错误处理
- 为用户提供友好的错误提示

### 4. 测试

- 为组件和工具函数编写测试
- 测试应覆盖主要功能和边界情况
- 保持测试的简洁和可维护性

## 工具配置

### 1. ESLint

- 使用 ESLint 检查代码质量
- 配置适合项目的 ESLint 规则
- 集成 ESLint 到开发流程中

### 2. Prettier

- 使用 Prettier 格式化代码
- 配置适合项目的 Prettier 规则
- 集成 Prettier 到开发流程中

### 3. EditorConfig

- 使用 EditorConfig 统一编辑器配置
- 确保不同编辑器的代码风格一致

## 命名约定

### 1. 目录命名

- 使用 kebab-case 命名目录（例如：`cultural-features`）
- 目录名应清晰表达其功能
- 避免使用复数形式的目录名

### 2. 文件命名

#### 2.1 组件文件

- 使用 PascalCase 命名组件文件（例如：`CulturalCard.vue`）
- 组件文件名应清晰表达其功能

#### 2.2 脚本文件

- 使用 kebab-case 命名脚本文件（例如：`firebase-utils.js`）
- 脚本文件名应清晰表达其功能

#### 2.3 样式文件

- 使用 kebab-case 命名样式文件（例如：`new-year-theme.css`）
- 样式文件名应清晰表达其用途

### 3. 路由命名

- 使用 kebab-case 命名路由路径（例如：`/cultural-features`）
- 路由名应清晰表达其指向的页面
- 避免使用嵌套过深的路由

## 示例代码

### 1. 组件示例

```vue
<template>
  <div class="cultural-card">
    <h3 class="cultural-title">{{ title }}</h3>
    <p class="cultural-description">{{ description }}</p>
    <button class="interaction-btn" @click="handleClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 组件属性
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "了解更多",
  },
});

// 组件事件
const emit = defineEmits(["click"]);

// 响应式数据
const isLoading = ref(false);

// 方法
const handleClick = () => {
  emit("click");
};
</script>

<style scoped>
.cultural-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
}

.cultural-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cultural-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.cultural-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.interaction-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.interaction-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 31, 55, 0.3);
}
</style>
```

### 2. 工具函数示例

```javascript
/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串
 */
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * 生成随机ID
 * @returns {string} 随机ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
```

## 结论

本风格指南旨在确保项目中Vue代码的一致性、可读性和可维护性。通过遵循这些规范和最佳实践，我们可以提高代码质量，减少错误，提高开发效率。

在实际开发中，应根据具体情况灵活运用这些规范，确保代码的质量和可维护性。

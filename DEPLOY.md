# 新年主题网站 - GitHub Pages部署指南

## 项目介绍

这是一个基于Vue 3 + Vite构建的新年主题网站，用于向朋友发送新年祝福和惊喜。网站包含首页和新年惊喜页面，支持雪花动画、烟花效果、倒计时、愿望墙、留言板等功能。

## 部署前准备

### 1. 环境要求

- Node.js >= 20.0.0
- npm >= 9.0.0
- Git

### 2. 项目结构

```
springboot-vue-demo/
├── frontend/          # 前端Vue项目
├── backend/           # 后端SpringBoot项目
├── .github/workflows/ # GitHub Actions工作流
└── DEPLOY.md          # 部署文档
```

## 部署步骤

### 1. 克隆仓库

```bash
git clone <repository-url>
cd springboot-vue-demo
```

### 2. 配置环境变量

在`frontend`目录下创建`.env`文件，配置Firebase相关信息：

```env
# Firebase配置
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_DATABASE_URL=your-database-url
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 3. 本地构建测试

```bash
cd frontend
npm install
npm run build
```

构建完成后，检查`dist`目录是否生成了正确的静态资源。

### 4. 部署到GitHub Pages

本项目使用GitHub Actions自动部署，当代码推送到`master`分支时，会自动构建并部署到`gh-pages`分支。

#### 4.1 配置GitHub Pages

1. 登录GitHub，进入项目仓库
2. 点击"Settings" -> "Pages"
3. 在"Build and deployment"部分，选择：
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
4. 点击"Save"

#### 4.2 推送代码到master分支

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin master
```

#### 4.3 查看部署状态

1. 进入项目仓库的"Actions"标签页
2. 查看"Deploy to GitHub Pages"工作流的运行状态
3. 部署成功后，访问 `https://<username>.github.io/<repository-name>/newYear/` 查看网站

## 自定义域名配置

### 1. 添加CNAME记录

在域名解析服务商处添加以下CNAME记录：

| 类型 | 主机记录 | 记录值 | TTL |
|------|----------|--------|-----|
| CNAME | your-subdomain | <username>.github.io. | 10分钟 |

### 2. 配置GitHub Pages

1. 进入项目仓库的"Settings" -> "Pages"
2. 在"Custom domain"部分，输入你的自定义域名
3. 点击"Save"

### 3. 等待DNS生效

DNS记录生效后，访问你的自定义域名即可查看网站。

## 常见问题及解决方案

### 1. 页面404错误

- 确保Vue Router使用的是Hash模式（已在项目中配置）
- 检查GitHub Pages的部署分支和目录是否正确
- 等待DNS记录生效

### 2. 资源加载失败

- 检查`vite.config.js`中的`base`配置是否正确
- 确保构建时使用了正确的base URL
- 检查资源路径是否正确

### 3. Firebase连接失败

- 检查`.env`文件中的Firebase配置是否正确
- 确保Firebase项目已启用实时数据库
- 检查Firebase安全规则是否允许访问

### 4. 构建失败

- 检查Node.js版本是否符合要求
- 确保所有依赖已正确安装
- 检查代码中是否有语法错误

## 性能优化建议

1. **图片优化**：使用WebP格式，压缩图片大小
2. **代码分割**：使用动态导入，减小初始加载体积
3. **缓存策略**：合理配置PWA缓存，提升重复访问速度
4. **懒加载**：实现图片和组件的懒加载
5. **CDN加速**：使用CDN加载第三方库

## 项目维护

### 1. 更新依赖

```bash
cd frontend
npm update
```

### 2. 运行开发服务器

```bash
cd frontend
npm run dev
```

访问 `http://localhost:8081/newYear/` 查看开发服务器。

### 3. 查看构建分析

```bash
cd frontend
npm run build -- --report
```

构建完成后，会生成`dist/stats.html`文件，可查看构建分析报告。

## 技术栈

- **前端**：Vue 3 + Vite + Vue Router + Vuex
- **后端**：SpringBoot
- **数据库**：Firebase Realtime Database
- **构建工具**：Vite
- **部署平台**：GitHub Pages

## 许可证

MIT

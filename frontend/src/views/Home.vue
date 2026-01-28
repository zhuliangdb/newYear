<template>
  <div class="home-container">
    <!-- 飘雪效果 -->
    <AsyncSnowfall :icon-type="5" />
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-gradient" />
      <div class="hero-content">
        <div class="hero-badge">2026 新年特别版</div>
        <h1 class="hero-title">安徽·河南<br />新年文化盛宴</h1>
        <p class="hero-subtitle">
          融合安徽、河南地域文化特色的新年祝福与惊喜体验，<br />让传统与现代碰撞出不一样的火花
        </p>
        <div class="hero-buttons">
          <button class="primary-btn large" @click="navigateToNewYear">开始探索</button>
          <button class="secondary-btn large" @click="navigateToCulturalFeatures">文化之旅</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">1000+</span>
            <span class="stat-label">用户参与</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">文化活动</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10000+</span>
            <span class="stat-label">新年愿望</span>
          </div>
        </div>
      </div>
      <div class="hero-visuals">
        <!-- 动态装饰元素 -->
        <div class="hero-decorations">
          <div class="lantern lantern-1">
            <div class="lantern-string" />
            <div class="lantern-body">🏮</div>
          </div>
          <div class="lantern lantern-2">
            <div class="lantern-string" />
            <div class="lantern-body">🏮</div>
          </div>
          <div class="paper-cut paper-cut-1" />
          <div class="paper-cut paper-cut-2" />
          <div class="mask mask-1" />
          <div class="mask mask-2" />
        </div>
        <!-- 背景图片 -->
        <div class="hero-background">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20new%20year%20festival%20with%20anhui%20paper%20cutting%20and%20henan%20opera%20masks%2C%20festive%20atmosphere%2C%20vibrant%20colors%2C%20modern%20digital%20art&image_size=landscape_16_9"
            alt="新年文化背景"
          />
        </div>
      </div>
    </section>

    <!-- 文化特色预览 -->
    <section class="cultural-preview">
      <div class="cultural-preview-content">
        <h2 class="section-title">地域文化特色</h2>
        <p class="section-description">
          深入了解安徽、河南地区的传统新年文化，感受不一样的地域风情
        </p>
        <div class="cultural-grid">
          <div class="cultural-card anhui">
            <div class="cultural-icon">🎭</div>
            <h3 class="cultural-title">安徽黄梅戏</h3>
            <p class="cultural-description">体验黄梅戏角色换装，感受传统戏曲的魅力</p>
            <div class="cultural-bg" />
          </div>
          <div class="cultural-card henan">
            <div class="cultural-icon">🎨</div>
            <h3 class="cultural-title">河南豫剧脸谱</h3>
            <p class="cultural-description">DIY属于你的豫剧脸谱，体验传统工艺</p>
            <div class="cultural-bg" />
          </div>
          <div class="cultural-card anhui">
            <div class="cultural-icon">✂️</div>
            <h3 class="cultural-title">徽州剪纸</h3>
            <p class="cultural-description">欣赏精美的徽州剪纸艺术，感受传统文化的精髓</p>
            <div class="cultural-bg" />
          </div>
          <div class="cultural-card henan">
            <div class="cultural-icon">🖼️</div>
            <h3 class="cultural-title">朱仙镇年画</h3>
            <p class="cultural-description">了解朱仙镇年画的历史，欣赏传统年画的魅力</p>
            <div class="cultural-bg" />
          </div>
        </div>
        <button class="primary-btn" @click="navigateToCulturalFeatures">探索更多文化特色</button>
      </div>
    </section>

    <!-- 特色功能 -->
    <section class="features">
      <div class="features-content">
        <h2 class="section-title">核心功能</h2>
        <p class="section-description">我们为您打造了一系列精彩的功能，让您的新年更加难忘</p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⏰</div>
            <h3 class="feature-title">新年倒计时</h3>
            <p class="feature-description">实时倒计时，迎接新年的到来，不错过每一刻的惊喜</p>
            <div class="feature-glow" />
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔮</div>
            <h3 class="feature-title">新年运势</h3>
            <p class="feature-description">智能生成个性化新年运势，为新的一年带来好运</p>
            <div class="feature-glow" />
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">愿望墙</h3>
            <p class="feature-description">写下你的新年愿望，与朋友分享，一起实现梦想</p>
            <div class="feature-glow" />
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3 class="feature-title">互动游戏</h3>
            <p class="feature-description">有趣的新年主题小游戏，增添节日氛围</p>
            <div class="feature-glow" />
          </div>
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3 class="feature-title">留言板</h3>
            <p class="feature-description">与朋友交流，分享新年的喜悦和祝福</p>
            <div class="feature-glow" />
          </div>
          <div class="feature-card">
            <div class="feature-icon">📤</div>
            <h3 class="feature-title">分享功能</h3>
            <p class="feature-description">一键分享你的新年惊喜，传递快乐给更多人</p>
            <div class="feature-glow" />
          </div>
        </div>
      </div>
    </section>

    <!-- 活动预览 -->
    <section class="activities-preview">
      <div class="activities-preview-content">
        <h2 class="section-title">新年活动</h2>
        <p class="section-description">参与丰富多彩的新年活动，感受浓厚的节日氛围</p>
        <div class="activities-grid">
          <div class="activity-card">
            <div class="activity-image">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20new%20year%20activity%20with%20dragon%20dance%2C%20festive%20atmosphere%2C%20vibrant%20colors&image_size=landscape_4_3"
                alt="舞龙表演"
              />
            </div>
            <div class="activity-info">
              <div class="activity-date">2026.01.20</div>
              <h3 class="activity-title">传统舞龙表演</h3>
              <p class="activity-description">欣赏精彩的传统舞龙表演，感受浓厚的节日氛围</p>
              <div class="activity-location">📍 安徽合肥</div>
            </div>
          </div>
          <div class="activity-card">
            <div class="activity-image">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20opera%20performance%20with%20traditional%20costumes%2C%20festive%20atmosphere%2C%20vibrant%20colors&image_size=landscape_4_3"
                alt="戏曲表演"
              />
            </div>
            <div class="activity-info">
              <div class="activity-date">2026.01.25</div>
              <h3 class="activity-title">黄梅戏专场演出</h3>
              <p class="activity-description">欣赏正宗的黄梅戏表演，感受传统戏曲的魅力</p>
              <div class="activity-location">📍 安徽安庆</div>
            </div>
          </div>
          <div class="activity-card">
            <div class="activity-image">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20paper%20cutting%20workshop%2C%20traditional%20craft%2C%20festive%20atmosphere&image_size=landscape_4_3"
                alt="剪纸 workshop"
              />
            </div>
            <div class="activity-info">
              <div class="activity-date">2026.02.01</div>
              <h3 class="activity-title">剪纸艺术 workshop</h3>
              <p class="activity-description">学习传统剪纸技艺，制作属于自己的新年装饰品</p>
              <div class="activity-location">📍 河南郑州</div>
            </div>
          </div>
        </div>
        <button class="primary-btn" @click="navigateToActivities">查看全部活动</button>
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="testimonials">
      <div class="testimonials-content">
        <h2 class="section-title">用户评价</h2>
        <p class="section-description">听听我们的用户怎么说</p>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-avatar">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20woman%20portrait%2C%20natural%20smile%2C%20professional%20photo&image_size=square"
                alt="用户头像"
              />
            </div>
            <div class="testimonial-content">
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "这个新年惊喜平台真的很棒！不仅界面设计美观，还融入了很多安徽、河南的文化元素，让我感受到了不一样的新年氛围。特别是黄梅戏角色换装功能，非常有趣！"
              </p>
              <div class="testimonial-author">
                <span class="author-name">张小姐</span>
                <span class="author-location">安徽合肥</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-avatar">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20man%20portrait%2C%20natural%20smile%2C%20professional%20photo&image_size=square"
                alt="用户头像"
              />
            </div>
            <div class="testimonial-content">
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "我很喜欢豫剧脸谱DIY功能，可以根据自己的喜好创建独特的脸谱。平台的整体设计很现代化，同时又保留了传统文化的精髓，给人一种很舒服的感觉。"
              </p>
              <div class="testimonial-author">
                <span class="author-name">李先生</span>
                <span class="author-location">河南郑州</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-avatar">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20young%20woman%20portrait%2C%20natural%20smile%2C%20professional%20photo&image_size=square"
                alt="用户头像"
              />
            </div>
            <div class="testimonial-content">
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "愿望墙功能很温馨，可以看到全国各地用户的新年愿望，感觉很有意义。平台的动效设计也很流畅，给人一种很高级的感觉。强烈推荐给大家！"
              </p>
              <div class="testimonial-author">
                <span class="author-name">王女士</span>
                <span class="author-location">江苏南京</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 音乐播放器 -->
    <div class="music-player">
      <meting-js
        id="9515726248"
        server="tencent"
        type="playlist"
        fixed="true"
        mini="true"
        autoplay="false"
        theme="#c91f37"
        loop="all"
        order="random"
        preload="none"
        volume="0.5"
        mutex="true"
        list-folded="true"
        list-max-height="340"
        lrc-type="0"
      />
    </div>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🎊</span>
            <span class="logo-text">新年惊喜</span>
          </div>
          <p class="footer-description">
            为您带来最美好的新年体验，让科技为传统节日增添光彩。融合安徽、河南地域文化特色，打造独特的新年盛宴。
          </p>
          <div class="social-links">
            <a href="#" class="social-link">微信</a>
            <a href="#" class="social-link">微博</a>
            <a href="#" class="social-link">QQ</a>
          </div>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">快速链接</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/"> 首页 </router-link>
            </li>
            <li>
              <router-link to="/cultural-features"> 文化特色 </router-link>
            </li>
            <li>
              <router-link to="/activities"> 活动 </router-link>
            </li>
            <li>
              <router-link to="/new-year-surprise"> 新年惊喜 </router-link>
            </li>
            <li>
              <router-link to="/about"> 关于我们 </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">联系我们</h4>
          <ul class="footer-links">
            <li class="footer-link-item">
              <span class="link-icon">📧</span>
              <span class="link-text">contact@newyearsurprise.com</span>
            </li>
            <li class="footer-link-item">
              <span class="link-icon">📱</span>
              <span class="link-text">+86 123 4567 8910</span>
            </li>
            <li class="footer-link-item">
              <span class="link-icon">📍</span>
              <span class="link-text">安徽省合肥市蜀山区</span>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">法律信息</h4>
          <ul class="footer-links">
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">服务条款</a></li>
            <li><a href="#">Cookie政策</a></li>
            <li><a href="#">免责声明</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2026 新年惊喜. 保留所有权利. 融合安徽、河南地域文化特色</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import AsyncSnowfall from '../components/AsyncSnowfall.vue'

const router = useRouter()

// 导航方法
const navigateToNewYear = () => {
  router.push('/new-year-surprise')
}

const navigateToCulturalFeatures = () => {
  router.push('/cultural-features')
}

const navigateToActivities = () => {
  router.push('/activities')
}

// 页面加载动画
onMounted(() => {
  // 添加页面加载动画
  if (document && document.body) {
    document.body.classList.add('loaded')
  }
})
</script>

<style scoped>
/* 基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-container {
  font-family: 'Inter', '思源黑体', 'Source Han Sans', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

/* 英雄区域 */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--new-year-gradient);
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(201, 31, 55, 0.8), rgba(230, 57, 70, 0.8));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 600px;
  padding: 0 24px;
  margin-left: 10%;
  color: var(--huizhou-white);
}

.hero-badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 1s ease;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: bounceIn 1s ease 0.3s both;
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  animation: fadeInUp 1s ease 0.9s both;
}

.hero-stats {
  display: flex;
  gap: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 1s ease 1.2s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: var(--nianhua-yellow);
  margin-bottom: 4px;
}

.stat-label {
  display: block;
  font-size: 14px;
  opacity: 0.9;
}

.hero-visuals {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 2;
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

.hero-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.lantern {
  position: absolute;
  animation: lanternSwing 4s ease-in-out infinite;
}

.lantern-1 {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.lantern-2 {
  top: 30%;
  right: 20%;
  animation-delay: 1s;
}

.lantern-string {
  width: 2px;
  height: 50px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 auto 8px;
}

.lantern-body {
  font-size: 48px;
  animation: lanternGlow 2s ease-in-out infinite;
}

.paper-cut {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.paper-cut-1 {
  top: 40%;
  right: 15%;
  animation-delay: 0s;
  transform: rotate(45deg);
}

.paper-cut-2 {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
  transform: rotate(90deg);
}

.mask {
  position: absolute;
  width: 80px;
  height: 100px;
  background: var(--peony-purple);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: float 8s ease-in-out infinite;
}

.mask-1 {
  top: 50%;
  right: 25%;
  animation-delay: 1s;
}

.mask-2 {
  top: 70%;
  right: 15%;
  animation-delay: 3s;
  background: var(--ceramic-cyan);
}

/* 文化特色预览 */
.cultural-preview {
  padding: 120px 0;
  background: var(--xuan-paper-yellow);
  position: relative;
}

.cultural-preview-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.cultural-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin: 48px 0;
}

.cultural-card {
  position: relative;
  background: var(--huizhou-white);
  border-radius: var(--border-radius-lg);
  padding: 40px 32px;
  box-shadow: var(--box-shadow-md);
  transition: var(--transition);
  overflow: hidden;
  text-align: center;
}

.cultural-card:hover {
  transform: translateY(-12px);
  box-shadow: var(--box-shadow-lg);
}

.cultural-card.anhui {
  border-top: 4px solid var(--huizhou-red);
}

.cultural-card.henan {
  border-top: 4px solid var(--nianhua-red);
}

.cultural-icon {
  font-size: 64px;
  margin-bottom: 24px;
  animation: bounce 2s ease-in-out infinite;
}

.cultural-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--huizhou-red);
}

.cultural-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.cultural-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  opacity: 0.05;
  z-index: 1;
}

.cultural-card.anhui .cultural-bg {
  background: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20huangmei%20opera%20pattern%2C%20traditional%20chinese%20design%2C%20red%20and%20gold%20colors&image_size=square')
    no-repeat center center;
  background-size: cover;
}

.cultural-card.henan .cultural-bg {
  background: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20yu%20opera%20mask%20pattern%2C%20traditional%20chinese%20design%2C%20red%20and%20gold%20colors&image_size=square')
    no-repeat center center;
  background-size: cover;
}

/* 特色功能 */
.features {
  padding: 120px 0;
  background: var(--huizhou-white);
}

.features-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin: 48px 0;
}

.feature-card {
  position: relative;
  background: var(--huizhou-white);
  border-radius: var(--border-radius-lg);
  padding: 40px 32px;
  box-shadow: var(--box-shadow-md);
  transition: var(--transition);
  text-align: center;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: var(--box-shadow-lg);
}

.feature-icon {
  font-size: 64px;
  margin-bottom: 24px;
  animation: bounce 2s ease-in-out infinite;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--huizhou-red);
}

.feature-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.feature-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(201, 31, 55, 0.05), transparent);
  z-index: 1;
  opacity: 0;
  transition: var(--transition);
}

.feature-card:hover .feature-glow {
  opacity: 1;
}

/* 活动预览 */
.activities-preview {
  padding: 120px 0;
  background: var(--xuan-paper-yellow);
}

.activities-preview-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin: 48px 0;
}

.activity-card {
  background: var(--huizhou-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--box-shadow-md);
  transition: var(--transition);
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--box-shadow-lg);
}

.activity-image {
  height: 200px;
  overflow: hidden;
}

.activity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.activity-card:hover .activity-image img {
  transform: scale(1.05);
}

.activity-info {
  padding: 24px;
}

.activity-date {
  display: inline-block;
  padding: 4px 12px;
  background: var(--huizhou-red);
  color: var(--huizhou-white);
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
}

.activity-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--huizhou-red);
}

.activity-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.activity-location {
  font-size: 14px;
  color: var(--huizhou-gray);
}

/* 用户评价 */
.testimonials {
  padding: 120px 0;
  background: var(--huizhou-white);
}

.testimonials-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin: 48px 0;
}

.testimonial-card {
  background: var(--huizhou-white);
  border-radius: var(--border-radius-lg);
  padding: 32px;
  box-shadow: var(--box-shadow-md);
  transition: var(--transition);
  text-align: center;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--box-shadow-lg);
}

.testimonial-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 24px;
  border: 4px solid var(--xuan-paper-yellow);
}

.testimonial-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-rating {
  font-size: 18px;
  color: var(--nianhua-yellow);
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--huizhou-red);
}

.author-location {
  font-size: 14px;
  color: #999;
}

/* 页脚 */
.footer {
  background: var(--huizhou-gradient);
  color: var(--huizhou-white);
  padding: 80px 0 32px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--nianhua-yellow);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 48px;
  margin-bottom: 48px;
  position: relative;
  z-index: 2;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--nianhua-yellow);
}

.footer-description {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  color: var(--huizhou-white);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: var(--transition);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: var(--nianhua-yellow);
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--nianhua-yellow);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links li a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 14px;
  transition: var(--transition);
  padding: 4px 0;
}

.footer-links li a:hover {
  color: var(--nianhua-yellow);
  transform: translateX(4px);
}

.footer-link-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  opacity: 0.9;
}

.link-icon {
  font-size: 16px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  position: relative;
  z-index: 2;
}

.copyright {
  font-size: 14px;
  opacity: 0.8;
}

/* 通用组件样式 */
.section-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--huizhou-red);
  text-align: center;
  margin-bottom: 16px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--huizhou-gradient);
  border-radius: 2px;
}

.section-description {
  font-size: 18px;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

/* 按钮样式 */
.primary-btn {
  display: inline-block;
  padding: 14px 32px;
  background: var(--huizhou-gradient);
  color: var(--huizhou-white);
  border: none;
  border-radius: var(--border-radius-xl);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 15px rgba(201, 31, 55, 0.3);
  text-decoration: none;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shine 3s infinite;
}

.primary-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 8px 25px rgba(201, 31, 55, 0.5),
    0 0 20px rgba(201, 31, 55, 0.3);
  background: linear-gradient(135deg, #8a0707, #c91f37);
}

.primary-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 4px 10px rgba(201, 31, 55, 0.3);
  transition: all var(--transition-fast);
}

.primary-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(30deg);
  }

  100% {
    transform: translateX(100%) rotate(30deg);
  }
}

.primary-btn.large {
  padding: 16px 40px;
  font-size: 18px;
  border-radius: var(--border-radius-xl);
}

.primary-btn.small {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: var(--border-radius-md);
}

.secondary-btn {
  display: inline-block;
  padding: 14px 32px;
  background: transparent;
  border: 2px solid var(--huizhou-white);
  color: var(--huizhou-white);
  border-radius: var(--border-radius-xl);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.secondary-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shine 3s infinite;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 8px 25px rgba(255, 255, 255, 0.3),
    0 0 20px rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.8);
}

.secondary-btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  transition: all var(--transition-fast);
  background: rgba(255, 255, 255, 0.2);
}

.secondary-btn:disabled {
  border-color: #ccc;
  color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  background: transparent;
  opacity: 0.6;
}

.secondary-btn.large {
  padding: 16px 40px;
  font-size: 18px;
  border-radius: var(--border-radius-xl);
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes lanternSwing {
  0%,
  100% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }
}

@keyframes lanternGlow {
  0%,
  100% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.2);
  }
}

@keyframes slideIn {
  from {
    width: 0;
    left: 50%;
  }

  to {
    width: 100%;
    left: 0;
  }
}

/* 音乐播放器样式 */
.music-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  transform: none;
  z-index: 1000;
  width: 320px;
  max-width: 90vw;
}

/* 调整APlayer样式以匹配主题 */
:deep(.aplayer) {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

:deep(.aplayer-lrc-contents p.aplayer-lrc-current) {
  color: var(--primary-color);
}

:deep(.aplayer .aplayer-list ol li.aplayer-list-light) {
  color: var(--primary-color);
}

:deep(.aplayer .aplayer-button.aplayer-play .aplayer-icon) {
  color: var(--primary-color);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    margin: 0 auto;
    padding: 0 24px;
    max-width: 80%;
  }

  .hero-visuals {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 16px;
    max-width: 95%;
  }

  .hero-title {
    font-size: 36px;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 18px;
    line-height: 1.5;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .primary-btn.large,
  .secondary-btn.large {
    width: 100%;
    max-width: 300px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
    padding: 0 16px;
  }

  .cultural-grid,
  .features-grid,
  .activities-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .cultural-preview,
  .features,
  .activities-preview,
  .testimonials {
    padding: 80px 0;
  }

  .cultural-card,
  .feature-card,
  .activity-card,
  .testimonial-card {
    padding: 24px 16px;
  }

  .activity-image {
    height: 160px;
  }

  .footer-content {
    padding: 0 16px;
    gap: 32px;
  }

  .music-player {
    width: 280px;
    bottom: 10px;
    right: 10px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 16px;
  }

  .stat-item {
    margin-bottom: 8px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-description {
    font-size: 14px;
  }

  .cultural-preview,
  .features,
  .activities-preview,
  .testimonials {
    padding: 60px 0;
  }

  .cultural-icon,
  .feature-icon {
    font-size: 48px;
  }

  .cultural-title,
  .feature-title {
    font-size: 20px;
  }

  .cultural-description,
  .feature-description {
    font-size: 14px;
  }

  .primary-btn {
    padding: 12px 24px;
    font-size: 14px;
  }

  .footer-content {
    gap: 24px;
  }

  .footer-section {
    margin-bottom: 16px;
  }

  .music-player {
    width: 240px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .navbar-link,
  .mobile-nav-link,
  .primary-btn,
  .secondary-btn,
  .activity-card,
  .cultural-card,
  .feature-card,
  .testimonial-card {
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
  }

  .primary-btn:active,
  .secondary-btn:active {
    transform: scale(0.95);
  }

  .cultural-card:active,
  .feature-card:active,
  .activity-card:active,
  .testimonial-card:active {
    transform: translateY(-2px);
  }
}

/* 桌面端大屏幕优化 */
@media (min-width: 1400px) {
  .cultural-preview-content,
  .features-content,
  .activities-preview-content,
  .testimonials-content,
  .footer-content {
    max-width: 1400px;
  }

  .cultural-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }

  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .activities-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 64px;
  }

  .hero-content {
    max-width: 700px;
    margin-left: 15%;
  }

  .hero-title {
    font-size: 72px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .section-title {
    font-size: 40px;
  }

  .section-description {
    font-size: 20px;
    max-width: 900px;
  }

  .cultural-card,
  .feature-card,
  .activity-card,
  .testimonial-card {
    padding: 48px 36px;
  }

  .activity-image {
    height: 240px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .cultural-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .activities-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .cultural-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 页面加载动画 */
@keyframes pageLoad {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.home-container {
  animation: pageLoad 0.8s ease-out;
}
</style>

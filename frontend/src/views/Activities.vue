<template>
  <div class="activities">
    <!-- 背景装饰 -->
    <div class="background-decor" />

    <!-- 新年装饰 -->
    <div class="new-year-decorations">
      <div class="lantern" style="left: 10%; top: 10%; animation-delay: 0s">🏮</div>
      <div class="lantern" style="right: 10%; top: 15%; animation-delay: 1s">🏮</div>
      <div class="chinese-knot" style="left: 5%; top: 40%">🧧</div>
      <div class="chinese-knot" style="right: 5%; top: 45%">🧧</div>
    </div>

    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">新年活动</h1>
        <p class="hero-subtitle">参与丰富多彩的新年活动，感受安徽、河南地区的节日氛围</p>
      </div>
    </section>

    <!-- 活动筛选 -->
    <section class="filter-section">
      <div class="filter-content">
        <div class="filter-buttons">
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'all' }"
            @click="activeFilter = 'all'"
          >
            全部活动
          </button>
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'anhui' }"
            @click="activeFilter = 'anhui'"
          >
            安徽活动
          </button>
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'henan' }"
            @click="activeFilter = 'henan'"
          >
            河南活动
          </button>
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'online' }"
            @click="activeFilter = 'online'"
          >
            线上活动
          </button>
        </div>
      </div>
    </section>

    <!-- 活动列表 -->
    <section class="activities-section">
      <div class="section-header">
        <h2 class="section-title">活动列表</h2>
        <p class="section-description">浏览并参与精彩的新年活动</p>
      </div>

      <div class="activities-grid">
        <div
          v-for="(activity, index) in filteredActivities"
          :key="index"
          class="activity-card"
          @click="showActivityDetail(activity)"
        >
          <div class="activity-image">
            <img :src="activity.image" :alt="activity.title" />
          </div>
          <div class="activity-content">
            <div class="activity-tag" :class="activity.region">
              {{ getRegionName(activity.region) }}
            </div>
            <h3 class="activity-title">
              {{ activity.title }}
            </h3>
            <p class="activity-date">
              {{ activity.date }}
            </p>
            <p class="activity-description">
              {{ activity.description }}
            </p>
            <div class="activity-footer">
              <span class="activity-location">{{ activity.location }}</span>
              <button class="activity-btn">查看更多</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 活动日历 -->
    <section class="calendar-section">
      <div class="section-header">
        <h2 class="section-title">活动日历</h2>
        <p class="section-description">查看全年的活动安排</p>
      </div>

      <div class="calendar-container">
        <div class="calendar-header">
          <button class="calendar-nav" @click="prevMonth">‹</button>
          <h3 class="calendar-title">
            {{ currentMonthYear }}
          </h3>
          <button class="calendar-nav" @click="nextMonth">›</button>
        </div>
        <div class="calendar-grid">
          <div class="calendar-day header">日</div>
          <div class="calendar-day header">一</div>
          <div class="calendar-day header">二</div>
          <div class="calendar-day header">三</div>
          <div class="calendar-day header">四</div>
          <div class="calendar-day header">五</div>
          <div class="calendar-day header">六</div>

          <!-- 空白单元格 -->
          <div v-for="i in startDay" :key="'empty-' + i" class="calendar-day empty" />

          <!-- 日期单元格 -->
          <div
            v-for="day in daysInMonth"
            :key="day"
            class="calendar-day"
            :class="{ active: hasActivity(day) }"
          >
            {{ day }}
            <div v-if="hasActivity(day)" class="activity-indicator" />
          </div>
        </div>
      </div>
    </section>

    <!-- 热门活动 -->
    <section class="popular-section">
      <div class="section-header">
        <h2 class="section-title">热门活动</h2>
        <p class="section-description">最受欢迎的新年活动</p>
      </div>

      <div class="popular-grid">
        <div
          v-for="(activity, index) in popularActivities"
          :key="index"
          class="popular-card"
          @click="showActivityDetail(activity)"
        >
          <div class="popular-rank">
            {{ index + 1 }}
          </div>
          <div class="popular-content">
            <h3 class="popular-title">
              {{ activity.title }}
            </h3>
            <p class="popular-date">
              {{ activity.date }}
            </p>
            <p class="popular-description">
              {{ activity.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 音乐播放器 -->
    <div class="music-player">
      <meting-js
        server="tencent"
        type="playlist"
        id="8205467723"
        fixed="true"
        mini="true"
        autoplay="false"
        theme="#c91f37"
        loop="all"
        order="random"
        preload="auto"
        volume="0.3"
        mutex="true"
        listFolded="true"
        listMaxHeight="340"
        lrcType="1"
      />
    </div>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-text">新年惊喜</span>
            <span class="logo-icon">🎊</span>
          </div>
          <p class="footer-description">为您带来最美好的新年体验，让科技为传统节日增添光彩。</p>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">快速链接</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/"> 首页 </router-link>
            </li>
            <li>
              <router-link to="/new-year-surprise"> 新年惊喜 </router-link>
            </li>
            <li>
              <router-link to="/cultural-features"> 文化特色 </router-link>
            </li>
            <li>
              <router-link to="/activities"> 活动 </router-link>
            </li>
            <li>
              <router-link to="/about"> 关于我们 </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">联系我们</h4>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-value">contact@newyearsurprise.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span class="contact-value">+86 123 4567 8910</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2026 新年惊喜. 保留所有权利.</p>
      </div>
    </footer>

    <!-- 活动详情模态框 -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-header">
          <h3 class="modal-title">
            {{ selectedActivity.title }}
          </h3>
        </div>
        <div class="modal-body">
          <div class="modal-media">
            <div v-if="selectedActivity.video" class="modal-video">
              <iframe :src="selectedActivity.video" frameborder="0" allowfullscreen />
            </div>
            <div v-else class="modal-image">
              <img :src="selectedActivity.image" :alt="selectedActivity.title" />
            </div>
          </div>
          <div class="modal-info">
            <p class="modal-date">
              {{ selectedActivity.date }}
            </p>
            <p class="modal-location">
              {{ selectedActivity.location }}
            </p>
            <p class="modal-full-description">
              {{ selectedActivity.fullDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 活动数据
const activities = ref([
  {
    id: 1,
    title: '徽州剪纸体验活动',
    description: '学习徽州剪纸的基本技巧，亲手制作精美的剪纸作品',
    fullDescription:
      '徽州剪纸是安徽省的传统民间艺术，以其精细的刀工和独特的艺术风格闻名。在本次活动中，您将学习徽州剪纸的基本技巧，在专业老师的指导下，亲手制作精美的剪纸作品，感受传统艺术的魅力。',
    date: '2026年1月20日',
    location: '安徽省黄山市徽州文化博物馆',
    region: 'anhui',
    type: 'offline',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huizhou%20paper%20cutting%20workshop%20with%20people%20learning%20traditional%20Chinese%20paper%20cutting%20art%2C%20festive%20atmosphere%2C%20high%20quality%20photography&image_size=square',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: '黄梅戏表演欣赏',
    description: '欣赏正宗的黄梅戏表演，感受安徽传统戏曲的魅力',
    fullDescription:
      '黄梅戏是安徽省的传统戏曲剧种，以其委婉动听的唱腔和生动活泼的表演风格深受人们喜爱。在本次活动中，您将欣赏到正宗的黄梅戏表演，包括经典剧目《天仙配》、《女驸马》等选段，感受安徽传统戏曲的独特魅力。',
    date: '2026年1月25日',
    location: '安徽省安庆市黄梅戏艺术中心',
    region: 'anhui',
    type: 'offline',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huangmei%20Opera%20performance%20on%20stage%20with%20traditional%20costumes%2C%20colorful%20stage%20setting%2C%20audience%20watching%2C%20high%20quality%20photography&image_size=square',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: '豫剧脸谱DIY活动',
    description: '学习豫剧脸谱的绘制技巧，亲手制作属于自己的脸谱',
    fullDescription:
      '豫剧是河南省的传统戏曲剧种，以其铿锵有力的唱腔和丰富多彩的脸谱艺术著称。在本次活动中，您将学习豫剧脸谱的基本绘制技巧，了解不同脸谱代表的人物性格，亲手制作属于自己的豫剧脸谱，感受传统艺术的魅力。',
    date: '2026年1月22日',
    location: '河南省郑州市豫剧艺术中心',
    region: 'henan',
    type: 'offline',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yu%20Opera%20facial%20makeup%20workshop%20with%20people%20painting%20traditional%20Chinese%20opera%20masks%2C%20colorful%20art%20supplies%2C%20high%20quality%20photography&image_size=square',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: '朱仙镇年画制作体验',
    description: '学习朱仙镇年画的制作工艺，亲手印制年画',
    fullDescription:
      '朱仙镇年画是中国四大年画之一，以其鲜艳的色彩、粗犷的线条和浓郁的乡土气息闻名。在本次活动中，您将学习朱仙镇年画的传统制作工艺，在专业老师的指导下，亲手印制属于自己的年画作品，感受传统民间艺术的魅力。',
    date: '2026年1月28日',
    location: '河南省开封市朱仙镇年画博物馆',
    region: 'henan',
    type: 'offline',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhuxianzhen%20New%20Year%20painting%20workshop%20with%20people%20printing%20traditional%20Chinese%20woodblock%20paintings%2C%20festive%20atmosphere%2C%20high%20quality%20photography&image_size=square',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: '线上新年文化知识竞赛',
    description: '参与线上知识竞赛，了解安徽、河南的新年文化',
    fullDescription:
      '通过线上知识竞赛的形式，了解安徽、河南地区的新年文化传统。竞赛内容包括徽州文化、黄梅戏、豫剧、朱仙镇年画等多个方面的知识，参与者有机会赢取精美奖品。',
    date: '2026年1月15日-2月15日',
    location: '线上活动',
    region: 'online',
    type: 'online',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Online%20cultural%20knowledge%20competition%20interface%20with%20Chinese%20New%20Year%20themes%2C%20festive%20design%2C%20high%20quality%20digital%20art&image_size=square',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: '洛阳牡丹灯会',
    description: '欣赏绚丽多彩的牡丹灯会，感受洛阳的夜晚魅力',
    fullDescription:
      '洛阳牡丹灯会是河南省洛阳市的传统节庆活动，每年春节期间举办。灯会以牡丹为主题，结合现代灯光技术，打造出绚丽多彩的灯光景观，吸引了众多游客前来观赏。',
    date: '2026年2月1日-2月20日',
    location: '河南省洛阳市牡丹公园',
    region: 'henan',
    type: 'offline',
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Luoyang%20Peony%20Lantern%20Festival%20with%20colorful%20lanterns%20in%20traditional%20Chinese%20styles%2C%20night%20scene%2C%20festive%20atmosphere%2C%20high%20quality%20photography&image_size=square',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
])

// 热门活动
const popularActivities = ref([
  {
    id: 1,
    title: '徽州剪纸体验活动',
    description: '学习徽州剪纸的基本技巧，亲手制作精美的剪纸作品',
    date: '2026年1月20日',
    location: '安徽省黄山市徽州文化博物馆',
    region: 'anhui'
  },
  {
    id: 3,
    title: '豫剧脸谱DIY活动',
    description: '学习豫剧脸谱的绘制技巧，亲手制作属于自己的脸谱',
    date: '2026年1月22日',
    location: '河南省郑州市豫剧艺术中心',
    region: 'henan'
  },
  {
    id: 6,
    title: '洛阳牡丹灯会',
    description: '欣赏绚丽多彩的牡丹灯会，感受洛阳的夜晚魅力',
    date: '2026年2月1日-2月20日',
    location: '河南省洛阳市牡丹公园',
    region: 'henan'
  }
])

// 筛选状态
const activeFilter = ref('all')

// 模态框状态
const showModal = ref(false)
const selectedActivity = ref({
  title: '',
  image: '',
  date: '',
  location: '',
  fullDescription: ''
})

// 日历状态
const currentDate = ref(new Date())
const currentMonth = ref(currentDate.value.getMonth())
const currentYear = ref(currentDate.value.getFullYear())

// 计算过滤后的活动
const filteredActivities = computed(() => {
  if (activeFilter.value === 'all') {
    return activities.value
  } else {
    return activities.value.filter(activity => activity.region === activeFilter.value)
  }
})

// 计算当前月份的天数
const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

// 计算当前月份第一天是星期几
const startDay = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

// 计算当前月份和年份的显示
const currentMonthYear = computed(() => {
  const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ]
  return `${currentYear.value}年${months[currentMonth.value]}`
})

// 检查某一天是否有活动
const hasActivity = day => {
  // 简化处理，实际应该根据具体日期判断
  return [15, 20, 22, 25, 28].includes(day)
}

// 切换到上个月
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

// 切换到下个月
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

// 获取区域名称
const getRegionName = region => {
  const regionMap = {
    anhui: '安徽',
    henan: '河南',
    online: '线上'
  }
  return regionMap[region] || region
}

// 显示活动详情
const showActivityDetail = activity => {
  selectedActivity.value = activity
  showModal.value = true
}

// 关闭模态框
const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
/* 全局样式 */
:root {
  --primary-color: #c91f37;
  --secondary-color: #8a0707;
  --accent-color: #d4af37;
  --gold-color: #d4af37;
  --bg-color: #f5f5dc;
  --text-color: #333;
  --card-bg: #ffffff;
  --spacing-sm: 10px;
  --spacing-md: 20px;
  --spacing-lg: 30px;
  --spacing-xl: 48px;
  --border-radius: 18px;
  --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.activities {
  min-height: 100vh;
  background: var(--bg-color);
  position: relative;
}

/* 背景装饰 */
.background-decor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(201, 31, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
  z-index: -1;
  opacity: 0.4;
}

/* 新年装饰 */
.new-year-decorations {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1100;
}

/* 灯笼 */
.lantern {
  position: absolute;
  font-size: 48px;
  animation: lanternSwing 3s ease-in-out infinite;
  transform-origin: center top;
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

/* 中国结 */
.chinese-knot {
  position: absolute;
  font-size: 36px;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* 英雄区域 */
.hero {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 50%,
    var(--accent-color) 100%
  );
  color: white;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: bounceIn 1s ease;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.95;
  margin-bottom: 32px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease 0.3s both;
}

/* 筛选区域 */
.filter-section {
  background: var(--card-bg);
  padding: 24px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.filter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.filter-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: #e0e0e0;
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

/* 章节样式 */
.activities-section,
.calendar-section,
.popular-section {
  padding: 100px 0;
  position: relative;
}

.activities-section {
  background: var(--card-bg);
}

.calendar-section {
  background: var(--bg-color);
}

.popular-section {
  background: var(--card-bg);
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.section-description {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* 活动网格 */
.activities-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

/* 活动卡片 */
.activity-card {
  background: var(--card-bg);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  cursor: pointer;
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.activity-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.activity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.activity-card:hover .activity-image img {
  transform: scale(1.05);
}

.activity-content {
  padding: 24px;
  position: relative;
}

.activity-tag {
  position: absolute;
  top: -10px;
  left: 24px;
  padding: 6px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: white;
}

.activity-tag.anhui {
  background: linear-gradient(135deg, #ffb6c1, #ff69b4);
}

.activity-tag.henan {
  background: linear-gradient(135deg, #4cc9f0, #4361ee);
}

.activity-tag.online {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
}

.activity-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
  margin-top: 8px;
}

.activity-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.activity-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.activity-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.activity-location {
  font-size: 14px;
  color: #666;
}

.activity-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.activity-btn:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  transform: translateY(-2px);
}

/* 日历容器 */
.calendar-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  background: var(--card-bg);
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--box-shadow);
}

/* 日历头部 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.calendar-nav {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.calendar-nav:hover {
  transform: scale(1.1);
}

.calendar-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

/* 日历网格 */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.calendar-day:hover {
  background: #f0f0f0;
}

.calendar-day.header {
  font-weight: 600;
  color: var(--primary-color);
  cursor: default;
}

.calendar-day.header:hover {
  background: none;
}

.calendar-day.empty {
  background: none;
  cursor: default;
}

.calendar-day.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.activity-indicator {
  position: absolute;
  bottom: 4px;
  width: 4px;
  height: 4px;
  background: var(--accent-color);
  border-radius: 50%;
}

/* 热门活动网格 */
.popular-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* 热门活动卡片 */
.popular-card {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.popular-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.popular-rank {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 0 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
}

.popular-content {
  padding-right: 40px;
}

.popular-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.popular-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.popular-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 按钮样式 */
.primary-btn {
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(201, 31, 55, 0.3);
  width: 100%;
}

.primary-btn:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(201, 31, 55, 0.4);
}

/* 页脚 */
.footer {
  background: var(--primary-color);
  color: white;
  padding: 80px 0 32px;
  margin-top: 100px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  margin-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.footer-description {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.6;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
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
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer-links li a:hover {
  color: white;
  transform: translateX(4px);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-icon {
  font-size: 16px;
}

.contact-value {
  font-size: 14px;
  opacity: 0.9;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.copyright {
  font-size: 14px;
  opacity: 0.8;
}

/* 模态框 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 32px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: scaleIn 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
}

.modal-close:hover {
  color: var(--primary-color);
  transform: rotate(90deg);
}

.modal-header {
  margin-bottom: 24px;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  text-align: center;
}

.modal-media {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 24px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-video {
  width: 100%;
  height: 300px;
  position: relative;
}

.modal-video iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  margin-bottom: 32px;
}

.modal-date,
.modal-location {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
}

.modal-full-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.register-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 24px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
}

.form-group input {
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(201, 31, 55, 0.1);
}

/* 动画效果 */
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

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 音乐播放器样式 */
.music-player {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 600px;
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
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .activities-grid,
  .popular-grid {
    grid-template-columns: 1fr;
  }

  .activity-card,
  .popular-card {
    margin-bottom: 24px;
  }

  .filter-buttons {
    justify-content: center;
  }

  .calendar-container {
    padding: 24px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 80px 0;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .activities-section,
  .calendar-section,
  .popular-section {
    padding: 60px 0;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .activity-content,
  .popular-card {
    padding: 20px;
  }

  .modal-content {
    padding: 24px;
    width: 95%;
  }

  .modal-media {
    height: 200px;
  }

  .modal-image,
  .modal-video {
    height: 100%;
  }
}
</style>

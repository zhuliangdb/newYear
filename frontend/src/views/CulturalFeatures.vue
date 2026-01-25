<template>
  <div class="cultural-features">
    <!-- 飘雪效果 -->
    <Snowfall :icon-type="3" />
    <!-- 背景装饰 -->
    <div class="background-decor" />

    <!-- 新年装饰 -->
    <div class="new-year-decorations">
      <div
        class="lantern"
        style="left: 10%; top: 10%; animation-delay: 0s"
      >
        🏮
      </div>
      <div
        class="lantern"
        style="right: 10%; top: 15%; animation-delay: 1s"
      >
        🏮
      </div>
      <div
        class="chinese-knot"
        style="left: 5%; top: 40%"
      >
        🧧
      </div>
      <div
        class="chinese-knot"
        style="right: 5%; top: 45%"
      >
        🧧
      </div>
    </div>

    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          地域文化特色
        </h1>
        <p class="hero-subtitle">
          探索安徽、河南地区的新年文化精髓
        </p>
      </div>
    </section>

    <!-- 安徽文化区 -->
    <section class="anhui-section">
      <div class="section-header">
        <h2 class="section-title">
          安徽文化
        </h2>
        <p class="section-description">
          感受徽州文化的独特魅力
        </p>
      </div>

      <div class="cultural-grid">
        <!-- 徽州剪纸 -->
        <div class="cultural-card paper-cutting">
          <div class="cultural-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huizhou%20paper%20cutting%20art%20with%20red%20paper%20and%20traditional%20Chinese%20patterns%2C%20festive%20atmosphere%2C%20high%20quality%20photography&image_size=square"
              alt="徽州剪纸"
            >
          </div>
          <div class="cultural-content">
            <h3 class="cultural-title">
              徽州剪纸
            </h3>
            <p class="cultural-text">
              徽州剪纸是安徽省的传统民间艺术，以其精细的刀工和独特的艺术风格闻名。剪纸内容多以吉祥图案、花鸟鱼虫为主，象征着对美好生活的向往。
            </p>
            <div class="cultural-interaction">
              <button
                class="interaction-btn"
                @click="showPaperCuttingDetail"
              >
                了解更多
              </button>
            </div>
          </div>
        </div>

        <!-- 黄梅戏 -->
        <div class="cultural-card huangmei-opera">
          <div class="cultural-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huangmei%20Opera%20performance%20with%20traditional%20costumes%2C%20colorful%20stage%20setting%2C%20Chinese%20traditional%20theater%2C%20high%20quality%20photography&image_size=square"
              alt="黄梅戏"
            >
          </div>
          <div class="cultural-content">
            <h3 class="cultural-title">
              黄梅戏
            </h3>
            <p class="cultural-text">
              黄梅戏是安徽省的传统戏曲剧种，以其委婉动听的唱腔和生动活泼的表演风格深受人们喜爱。代表剧目有《天仙配》、《女驸马》等。
            </p>
            <div class="cultural-interaction">
              <button
                class="interaction-btn"
                @click="showHuangmeiOperaDetail"
              >
                角色换装
              </button>
            </div>
          </div>
        </div>

        <!-- 徽州建筑 -->
        <div class="cultural-card huizhou-architecture">
          <div class="cultural-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huizhou%20ancient%20architecture%20with%20white%20walls%20and%20black%20tiles%2C%20traditional%20Chinese%20courtyard%20houses%2C%20high%20quality%20photography&image_size=square"
              alt="徽州建筑"
            >
          </div>
          <div class="cultural-content">
            <h3 class="cultural-title">
              徽州建筑
            </h3>
            <p class="cultural-text">
              徽州建筑是中国传统建筑的重要流派之一，以其独特的"白墙黑瓦"风格和精美的木雕、砖雕、石雕艺术闻名于世。
            </p>
            <div class="cultural-interaction">
              <button
                class="interaction-btn"
                @click="showHuizhouArchitectureDetail"
              >
                欣赏建筑
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 河南文化区 -->
    <section class="henan-section">
      <div class="section-header">
        <h2 class="section-title">
          河南文化
        </h2>
        <p class="section-description">
          体验中原文化的博大精深
        </p>
      </div>

      <div class="cultural-grid">
        <!-- 豫剧 -->
        <div class="cultural-card yu-opera">
          <div class="cultural-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yu%20Opera%20performance%20with%20traditional%20face%20paint%20and%20costumes%2C%20Chinese%20traditional%20theater%2C%20high%20quality%20photography&image_size=square"
              alt="豫剧"
            >
          </div>
          <div class="cultural-content">
            <h3 class="cultural-title">
              豫剧
            </h3>
            <p class="cultural-text">
              豫剧是河南省的传统戏曲剧种，是中国最大的地方剧种之一。豫剧以其铿锵有力的唱腔和丰富多彩的脸谱艺术著称。
            </p>
            <div class="cultural-interaction">
              <button
                class="interaction-btn"
                @click="showYuOperaDetail"
              >
                脸谱DIY
              </button>
            </div>
          </div>
        </div>

        <!-- 朱仙镇年画 -->
        <div class="cultural-card new-year-painting">
          <div class="cultural-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhuxianzhen%20New%20Year%20paintings%20with%20traditional%20Chinese%20patterns%20and%20bright%20colors%2C%20festive%20atmosphere%2C%20high%20quality%20photography&image_size=square"
              alt="朱仙镇年画"
            >
          </div>
          <div class="cultural-content">
            <h3 class="cultural-title">
              朱仙镇年画
            </h3>
            <p class="cultural-text">
              朱仙镇年画是中国四大年画之一，以其鲜艳的色彩、粗犷的线条和浓郁的乡土气息闻名，是河南省的传统民间艺术瑰宝。
            </p>
            <div class="cultural-interaction">
              <button
                class="interaction-btn"
                @click="showNewYearPaintingDetail"
              >
                欣赏年画
              </button>
            </div>
          </div>
        </div>

        <!-- 洛阳牡丹 -->
        <div class="cultural-card peony">
          <div class="cultural-image">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Luoyang%20peony%20flowers%20in%20full%20bloom%2C%20vibrant%20colors%2C%20traditional%20Chinese%20garden%20setting%2C%20high%20quality%20photography&image_size=square"
              alt="洛阳牡丹"
            >
          </div>
          <div class="cultural-content">
            <h3 class="cultural-title">
              洛阳牡丹
            </h3>
            <p class="cultural-text">
              洛阳牡丹是河南省的特产，以其花大色艳、雍容华贵而闻名于世，被誉为"花中之王"，是中国传统名花之一。
            </p>
            <div class="cultural-interaction">
              <button
                class="interaction-btn"
                @click="showPeonyDetail"
              >
                欣赏牡丹
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 互动体验区 -->
    <section class="interactive-section">
      <div class="section-header">
        <h2 class="section-title">
          互动体验
        </h2>
        <p class="section-description">
          沉浸式感受地域文化魅力
        </p>
      </div>

      <div class="interactive-grid">
        <!-- 黄梅戏角色换装 -->
        <div class="interactive-card huangmei-dress-up">
          <div class="interactive-icon">
            👗
          </div>
          <h3 class="interactive-title">
            黄梅戏角色换装
          </h3>
          <p class="interactive-description">
            选择不同的黄梅戏角色服装，体验传统戏曲的魅力
          </p>
          <button
            class="primary-btn"
            @click="startHuangmeiDressUp"
          >
            开始体验
          </button>
        </div>

        <!-- 豫剧脸谱DIY -->
        <div class="interactive-card facial-makeup">
          <div class="interactive-icon">
            🎭
          </div>
          <h3 class="interactive-title">
            豫剧脸谱DIY
          </h3>
          <p class="interactive-description">
            亲手设计属于自己的豫剧脸谱，感受传统艺术的魅力
          </p>
          <button
            class="primary-btn"
            @click="startFacialMakeup"
          >
            开始体验
          </button>
        </div>

        <!-- 文化知识 quiz -->
        <div class="interactive-card cultural-quiz">
          <div class="interactive-icon">
            🧠
          </div>
          <h3 class="interactive-title">
            文化知识问答
          </h3>
          <p class="interactive-description">
            测试你对安徽、河南文化的了解，赢取新年礼物
          </p>
          <button
            class="primary-btn"
            @click="startCulturalQuiz"
          >
            开始答题
          </button>
        </div>
      </div>
    </section>

    <!-- 文化知识区 -->
    <section class="knowledge-section">
      <div class="section-header">
        <h2 class="section-title">
          文化知识
        </h2>
        <p class="section-description">
          了解更多关于安徽、河南的文化知识
        </p>
      </div>

      <div class="knowledge-grid">
        <div
          v-for="(item, index) in knowledgeItems"
          :key="index"
          class="knowledge-card"
        >
          <h3 class="knowledge-title">
            {{ item.title }}
          </h3>
          <p class="knowledge-text">
            {{ item.content }}
          </p>
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
            <span class="logo-text">新年惊喜</span>
            <span class="logo-icon">🎊</span>
          </div>
          <p class="footer-description">
            为您带来最美好的新年体验，让科技为传统节日增添光彩。
          </p>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">
            快速链接
          </h4>
          <ul class="footer-links">
            <li>
              <router-link to="/">
                首页
              </router-link>
            </li>
            <li>
              <router-link to="/new-year-surprise">
                新年惊喜
              </router-link>
            </li>
            <li>
              <router-link to="/cultural-features">
                文化特色
              </router-link>
            </li>
            <li>
              <router-link to="/activities">
                活动
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                关于我们
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">
            联系我们
          </h4>
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
        <p class="copyright">
          © 2026 新年惊喜. 保留所有权利.
        </p>
      </div>
    </footer>

    <!-- 模态框 -->
    <div
      v-if="showModal"
      class="modal"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <button
          class="modal-close"
          @click="closeModal"
        >
          ×
        </button>
        <div class="modal-header">
          <h3 class="modal-title">
            {{ modalTitle }}
          </h3>
        </div>
        <div class="modal-body">
          <!-- 文本内容 -->
          <div
            v-if="modalType === 'text'"
            class="modal-text-content"
          >
            {{ modalText }}
          </div>

          <!-- 黄梅戏角色换装 -->
          <div
            v-else-if="modalType === 'huangmei-dressup'"
            class="huangmei-dressup-content"
          >
            <div class="character-selection">
              <h4>选择角色</h4>
              <div class="character-options">
                <div class="character-option">
                  <div class="character-image">
                    🧚‍♀️
                  </div>
                  <div class="character-name">
                    七仙女
                  </div>
                </div>
                <div class="character-option">
                  <div class="character-image">
                    👸
                  </div>
                  <div class="character-name">
                    公主
                  </div>
                </div>
                <div class="character-option">
                  <div class="character-image">
                    🤵
                  </div>
                  <div class="character-name">
                    书生
                  </div>
                </div>
              </div>
            </div>
            <div class="costume-selection">
              <h4>选择服装</h4>
              <div class="costume-options">
                <div class="costume-option">
                  <div class="costume-image">
                    👗
                  </div>
                  <div class="costume-name">
                    红色戏服
                  </div>
                </div>
                <div class="costume-option">
                  <div class="costume-image">
                    👗
                  </div>
                  <div class="costume-name">
                    蓝色戏服
                  </div>
                </div>
                <div class="costume-option">
                  <div class="costume-image">
                    👗
                  </div>
                  <div class="costume-name">
                    绿色戏服
                  </div>
                </div>
              </div>
            </div>
            <div class="preview-section">
              <h4>预览效果</h4>
              <div class="preview-container">
                <div class="preview-character">
                  🧚‍♀️
                </div>
                <div class="preview-costume">
                  👗
                </div>
                <div class="preview-text">
                  七仙女 - 红色戏服
                </div>
              </div>
            </div>
          </div>

          <!-- 豫剧脸谱DIY -->
          <div
            v-else-if="modalType === 'facial-makeup'"
            class="facial-makeup-content"
          >
            <div class="face-shape-selection">
              <h4>选择脸型</h4>
              <div class="face-options">
                <div class="face-option">
                  <div class="face-image">
                    😀
                  </div>
                  <div class="face-name">
                    圆形脸
                  </div>
                </div>
                <div class="face-option">
                  <div class="face-image">
                    😐
                  </div>
                  <div class="face-name">
                    方形脸
                  </div>
                </div>
                <div class="face-option">
                  <div class="face-image">
                    😊
                  </div>
                  <div class="face-name">
                    瓜子脸
                  </div>
                </div>
              </div>
            </div>
            <div class="color-selection">
              <h4>选择颜色</h4>
              <div class="color-options">
                <div
                  class="color-option"
                  style="background-color: #e63946"
                >
                  红色
                </div>
                <div
                  class="color-option"
                  style="background-color: #1d3557"
                >
                  蓝色
                </div>
                <div
                  class="color-option"
                  style="background-color: #2a9d8f"
                >
                  绿色
                </div>
                <div
                  class="color-option"
                  style="background-color: #ffd700"
                >
                  黄色
                </div>
              </div>
            </div>
            <div class="pattern-selection">
              <h4>选择图案</h4>
              <div class="pattern-options">
                <div class="pattern-option">
                  <div class="pattern-image">
                    ⚡
                  </div>
                  <div class="pattern-name">
                    闪电纹
                  </div>
                </div>
                <div class="pattern-option">
                  <div class="pattern-image">
                    🔥
                  </div>
                  <div class="pattern-name">
                    火焰纹
                  </div>
                </div>
                <div class="pattern-option">
                  <div class="pattern-image">
                    🌊
                  </div>
                  <div class="pattern-name">
                    波浪纹
                  </div>
                </div>
              </div>
            </div>
            <div class="preview-section">
              <h4>预览效果</h4>
              <div class="preview-container">
                <div class="preview-face">
                  😀
                </div>
                <div class="preview-text">
                  圆形脸 - 红色 - 闪电纹
                </div>
              </div>
            </div>
          </div>

          <!-- 文化知识问答 -->
          <div
            v-else-if="modalType === 'cultural-quiz'"
            class="cultural-quiz-content"
          >
            <div class="quiz-progress">
              <div class="progress-bar">
                <div
                  class="progress-fill"
                  style="width: 25%"
                />
              </div>
              <div class="progress-text">
                问题 1/4
              </div>
            </div>
            <div class="quiz-question">
              <h4>1. 徽州剪纸是哪个省份的传统民间艺术？</h4>
              <div class="quiz-options">
                <div class="quiz-option">
                  <input
                    id="q1-a"
                    type="radio"
                    name="q1"
                  >
                  <label for="q1-a">安徽省</label>
                </div>
                <div class="quiz-option">
                  <input
                    id="q1-b"
                    type="radio"
                    name="q1"
                  >
                  <label for="q1-b">河南省</label>
                </div>
                <div class="quiz-option">
                  <input
                    id="q1-c"
                    type="radio"
                    name="q1"
                  >
                  <label for="q1-c">江苏省</label>
                </div>
                <div class="quiz-option">
                  <input
                    id="q1-d"
                    type="radio"
                    name="q1"
                  >
                  <label for="q1-d">浙江省</label>
                </div>
              </div>
            </div>
            <div class="quiz-navigation">
              <button class="secondary-btn">
                上一题
              </button>
              <button class="primary-btn">
                下一题
              </button>
            </div>
            <div class="quiz-rules">
              <h5>游戏规则</h5>
              <ul>
                <li>共4道题目，每题25分</li>
                <li>答对题目可获得新年礼物</li>
                <li>全部答对可获得神秘大奖</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="primary-btn"
            @click="closeModal"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Snowfall from '../components/Snowfall.vue'

// 模态框状态
const showModal = ref(false)
const modalTitle = ref('')
const modalType = ref('') // 'text', 'huangmei-dressup', 'facial-makeup', 'cultural-quiz'
const modalText = ref('')

// 知识卡片数据
const knowledgeItems = ref([
  {
    title: '徽州文化的起源',
    content:
      '徽州文化起源于北宋时期，历经宋、元、明、清四个朝代的发展，形成了独特的文化体系，包括徽商、徽剧、徽菜、徽派建筑等多个方面。'
  },
  {
    title: '豫剧的发展历史',
    content:
      '豫剧起源于明末清初，是在河南梆子的基础上发展起来的。经过数百年的演变，豫剧已经成为中国最大的地方剧种之一，深受广大观众喜爱。'
  },
  {
    title: '朱仙镇年画的特点',
    content:
      '朱仙镇年画是中国四大年画之一，以其鲜艳的色彩、粗犷的线条和浓郁的乡土气息闻名。年画内容多以吉祥喜庆、驱邪纳福为主题。'
  },
  {
    title: '洛阳牡丹的历史',
    content:
      '洛阳牡丹栽培历史悠久，始于隋，盛于唐，甲天下于宋。洛阳牡丹以其花大色艳、雍容华贵而闻名于世，被誉为"花中之王"。'
  }
])

// 显示模态框
const showModalDialog = (title, content) => {
  modalTitle.value = title
  modalType.value = 'text'
  modalText.value = content
  showModal.value = true
}

// 关闭模态框
const closeModal = () => {
  showModal.value = false
}

// 文化卡片点击事件
const showPaperCuttingDetail = () => {
  showModalDialog(
    '徽州剪纸',
    '徽州剪纸是安徽省的传统民间艺术，以其精细的刀工和独特的艺术风格闻名。剪纸内容多以吉祥图案、花鸟鱼虫为主，象征着对美好生活的向往。'
  )
}

const showHuangmeiOperaDetail = () => {
  showModalDialog(
    '黄梅戏',
    '黄梅戏是安徽省的传统戏曲剧种，以其委婉动听的唱腔和生动活泼的表演风格深受人们喜爱。代表剧目有《天仙配》、《女驸马》等。'
  )
}

const showHuizhouArchitectureDetail = () => {
  showModalDialog(
    '徽州建筑',
    '徽州建筑是中国传统建筑的重要流派之一，以其独特的"白墙黑瓦"风格和精美的木雕、砖雕、石雕艺术闻名于世。'
  )
}

const showYuOperaDetail = () => {
  showModalDialog(
    '豫剧',
    '豫剧是河南省的传统戏曲剧种，是中国最大的地方剧种之一。豫剧以其铿锵有力的唱腔和丰富多彩的脸谱艺术著称。'
  )
}

const showNewYearPaintingDetail = () => {
  showModalDialog(
    '朱仙镇年画',
    '朱仙镇年画是中国四大年画之一，以其鲜艳的色彩、粗犷的线条和浓郁的乡土气息闻名，是河南省的传统民间艺术瑰宝。'
  )
}

const showPeonyDetail = () => {
  showModalDialog(
    '洛阳牡丹',
    '洛阳牡丹是河南省的特产，以其花大色艳、雍容华贵而闻名于世，被誉为"花中之王"，是中国传统名花之一。'
  )
}

// 互动体验事件
const startHuangmeiDressUp = () => {
  modalTitle.value = '黄梅戏角色换装'
  modalType.value = 'huangmei-dressup'
  showModal.value = true
}

const startFacialMakeup = () => {
  modalTitle.value = '豫剧脸谱DIY'
  modalType.value = 'facial-makeup'
  showModal.value = true
}

const startCulturalQuiz = () => {
  modalTitle.value = '文化知识问答'
  modalType.value = 'cultural-quiz'
  showModal.value = true
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

.cultural-features {
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

/* 章节样式 */
.anhui-section,
.henan-section,
.interactive-section,
.knowledge-section {
  padding: 100px 0;
  position: relative;
}

.anhui-section {
  background: var(--card-bg);
}

.henan-section {
  background: var(--bg-color);
}

.interactive-section {
  background: var(--card-bg);
}

.knowledge-section {
  background: var(--bg-color);
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

/* 文化网格 */
.cultural-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

/* 文化卡片 */
.cultural-card {
  background: var(--card-bg);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.cultural-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cultural-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.cultural-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.cultural-card:hover .cultural-image img {
  transform: scale(1.05);
}

.cultural-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cultural-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 16px;
  text-align: center;
}

.cultural-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  flex: 1;
}

.cultural-interaction {
  margin-top: auto;
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
  box-shadow: 0 4px 12px rgba(201, 31, 55, 0.3);
}

.interaction-btn:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(201, 31, 55, 0.4);
}

/* 互动网格 */
.interactive-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

/* 互动卡片 */
.interactive-card {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.interactive-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.interactive-icon {
  font-size: 64px;
  margin-bottom: 24px;
  animation: bounce 2s ease-in-out infinite;
}

.interactive-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 16px;
  text-align: center;
}

.interactive-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  flex: 1;
}

/* 知识网格 */
.knowledge-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* 知识卡片 */
.knowledge-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
}

.knowledge-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.knowledge-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
  text-align: center;
}

.knowledge-text {
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
  max-width: 200px;
}

.primary-btn:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(201, 31, 55, 0.4);
}

.secondary-btn {
  padding: 14px 32px;
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
}

.secondary-btn:hover {
  background: rgba(201, 31, 55, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 31, 55, 0.2);
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
  text-align: center;
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
  max-width: 500px;
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
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  text-align: center;
}

.modal-body {
  margin-bottom: 32px;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

/* 黄梅戏角色换装样式 */
.huangmei-dressup-content {
  .character-selection,
  .costume-selection,
  .preview-section {
    margin-bottom: 24px;
  }

  h4 {
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  .character-options,
  .costume-options {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .character-option,
  .costume-option {
    flex: 1;
    min-width: 100px;
    text-align: center;
    padding: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .character-option:hover,
  .costume-option:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  .character-image,
  .costume-image {
    font-size: 32px;
    margin-bottom: 8px;
  }

  .character-name,
  .costume-name {
    font-size: 14px;
    font-weight: 500;
  }

  .preview-container {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
  }

  .preview-character {
    font-size: 48px;
  }

  .preview-costume {
    font-size: 32px;
  }

  .preview-text {
    font-size: 16px;
    font-weight: 500;
  }
}

/* 豫剧脸谱DIY样式 */
.facial-makeup-content {
  .face-shape-selection,
  .color-selection,
  .pattern-selection,
  .preview-section {
    margin-bottom: 24px;
  }

  h4 {
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  .face-options,
  .color-options,
  .pattern-options {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .face-option,
  .color-option,
  .pattern-option {
    flex: 1;
    min-width: 80px;
    text-align: center;
    padding: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .face-option:hover,
  .color-option:hover,
  .pattern-option:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  .face-image,
  .pattern-image {
    font-size: 32px;
    margin-bottom: 8px;
  }

  .face-name,
  .pattern-name {
    font-size: 14px;
    font-weight: 500;
  }

  .color-option {
    color: white;
    font-weight: 500;
  }

  .preview-container {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
  }

  .preview-face {
    font-size: 48px;
  }

  .preview-text {
    font-size: 16px;
    font-weight: 500;
  }
}

/* 文化知识问答样式 */
.cultural-quiz-content {
  .quiz-progress {
    margin-bottom: 24px;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: var(--huizhou-gradient);
    border-radius: 4px;
  }

  .progress-text {
    font-size: 14px;
    text-align: center;
  }

  .quiz-question {
    margin-bottom: 24px;
  }

  .quiz-question h4 {
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  .quiz-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .quiz-option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .quiz-option:hover {
    border-color: var(--primary-color);
    background: rgba(201, 31, 55, 0.05);
  }

  .quiz-navigation {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 24px;
  }

  .quiz-rules {
    padding: 16px;
    background: #f9f9f9;
    border-radius: 8px;
  }

  .quiz-rules h5 {
    color: var(--primary-color);
    margin-bottom: 8px;
  }

  .quiz-rules ul {
    list-style: none;
    padding: 0;
  }

  .quiz-rules li {
    margin-bottom: 4px;
    font-size: 14px;
  }
}

.modal-footer {
  display: flex;
  justify-content: center;
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
    transform: translateY(-20px);
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
    padding: 0 16px;
  }

  .cultural-grid,
  .interactive-grid,
  .knowledge-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  }

  .cultural-card,
  .interactive-card,
  .knowledge-card {
    margin-bottom: 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 0 16px;
  }

  .cultural-image {
    height: 200px;
  }

  .interactive-icon {
    font-size: 56px;
  }

  .music-player {
    width: 280px;
    bottom: 10px;
    right: 10px;
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

  .anhui-section,
  .henan-section,
  .interactive-section,
  .knowledge-section {
    padding: 60px 0;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .cultural-content,
  .interactive-card,
  .knowledge-card {
    padding: 20px;
  }

  .modal-content {
    padding: 24px;
    width: 95%;
  }

  .cultural-image {
    height: 160px;
  }

  .cultural-title,
  .interactive-title,
  .knowledge-title {
    font-size: 18px;
  }

  .cultural-text,
  .interactive-description,
  .knowledge-text {
    font-size: 14px;
  }

  .interactive-icon {
    font-size: 48px;
  }

  .interaction-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .primary-btn {
    padding: 12px 24px;
    font-size: 14px;
  }
}

/* 桌面端大屏幕优化 */
@media (min-width: 1400px) {
  .cultural-grid,
  .interactive-grid,
  .knowledge-grid,
  .footer-content {
    max-width: 1400px;
  }

  .cultural-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .interactive-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .knowledge-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 64px;
  }

  .hero-content {
    max-width: 900px;
  }

  .hero-title {
    font-size: 56px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .section-title {
    font-size: 40px;
  }

  .section-description {
    font-size: 20px;
    max-width: 700px;
  }

  .cultural-card {
    padding: 32px;
  }

  .cultural-image {
    height: 280px;
  }

  .cultural-title,
  .interactive-title,
  .knowledge-title {
    font-size: 24px;
  }

  .cultural-text,
  .interactive-description,
  .knowledge-text {
    font-size: 16px;
  }

  .interactive-card {
    padding: 40px 32px;
  }

  .interactive-icon {
    font-size: 72px;
  }

  .knowledge-card {
    padding: 28px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .cultural-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .interactive-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .knowledge-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .cultural-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .interactive-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .knowledge-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .interaction-btn,
  .primary-btn,
  .secondary-btn,
  .modal-close,
  .character-option,
  .costume-option,
  .face-option,
  .color-option,
  .pattern-option,
  .quiz-option {
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
  }

  .interaction-btn:active,
  .primary-btn:active,
  .secondary-btn:active {
    transform: scale(0.95);
  }

  .cultural-card:active,
  .interactive-card:active,
  .knowledge-card:active {
    transform: translateY(-2px);
  }

  .character-option:active,
  .costume-option:active,
  .face-option:active,
  .color-option:active,
  .pattern-option:active,
  .quiz-option:active {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
}
</style>

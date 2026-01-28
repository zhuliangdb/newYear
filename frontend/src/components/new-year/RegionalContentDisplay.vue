<template>
  <div class="regional-content">
    <h2 class="section-title">🏮 地域特色展示</h2>

    <!-- 地区选择标签 -->
    <div class="region-tabs">
      <button
        v-for="region in regions"
        :key="region.id"
        class="region-tab"
        :class="{ active: activeRegion === region.id }"
        @click="switchRegion(region.id)"
      >
        {{ region.name }}
      </button>
    </div>

    <!-- 内容分类标签 -->
    <div class="content-tabs">
      <button
        v-for="tab in contentTabs"
        :key="tab.id"
        class="content-tab"
        :class="{ active: activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        {{ tab.icon }} {{ tab.name }}
      </button>
    </div>

    <!-- 内容展示区 -->
    <div class="content-display">
      <!-- 安徽内容 -->
      <div v-if="activeRegion === 'anhui'">
        <!-- 新年习俗 -->
        <div v-if="activeTab === 'customs'" class="customs-content">
          <h3 class="content-title">安徽新年习俗</h3>
          <div class="customs-grid">
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20new%20year%20customs%20traditional%20chinese%20spring%20festival%20celebration%20with%20red%20lanterns%20and%20couplets&image_size=square"
                  alt="贴春联"
                />
              </div>
              <h4 class="customs-title">贴春联</h4>
              <p class="customs-desc">
                安徽人在新年到来前，会在门上贴上红红的春联和福字，祈求新的一年吉祥如意。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20traditional%20food%20spring%20festival%20reunion%20dinner%20chinese%20cuisine&image_size=square"
                  alt="年夜饭"
                />
              </div>
              <h4 class="customs-title">年夜饭</h4>
              <p class="customs-desc">
                除夕夜，安徽家庭会团聚在一起吃年夜饭，桌上摆满各种美食，象征团圆和富足。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20new%20year%20fireworks%20celebration%20night%20sky%20with%20colorful%20explosions&image_size=square"
                  alt="放鞭炮"
                />
              </div>
              <h4 class="customs-title">放鞭炮</h4>
              <p class="customs-desc">新年零点，安徽人会放鞭炮辞旧迎新，驱走晦气，迎来好运。</p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20new%20year%20visiting%20relatives%20traditional%20greetings%20spring%20festival&image_size=square"
                  alt="拜年"
                />
              </div>
              <h4 class="customs-title">拜年</h4>
              <p class="customs-desc">
                大年初一，安徽人会穿上新衣服，走亲访友，互相拜年，祝福新年快乐。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20new%20year%20customs%20giving%20red%20envelopes%20traditional%20chinese%20spring%20festival&image_size=square"
                  alt="发红包"
                />
              </div>
              <h4 class="customs-title">发红包</h4>
              <p class="customs-desc">
                安徽长辈会在新年给晚辈发红包，里面装着压岁钱，寓意着祝福和好运。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20new%20year%20customs%20dragon%20dance%20traditional%20chinese%20spring%20festival&image_size=square"
                  alt="舞龙灯"
                />
              </div>
              <h4 class="customs-title">舞龙灯</h4>
              <p class="customs-desc">
                安徽一些地区有舞龙灯的习俗，长长的龙灯在街头巷尾穿梭，寓意着风调雨顺。
              </p>
            </div>
          </div>
        </div>

        <!-- 特色美食 -->
        <div v-else-if="activeTab === 'food'" class="food-content">
          <h3 class="content-title">安徽特色美食</h3>
          <div class="food-grid">
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20hairy%20taro%20stew%20traditional%20chinese%20cuisine&image_size=square"
                  alt="毛豆腐"
                />
              </div>
              <h4 class="food-title">毛豆腐</h4>
              <p class="food-desc">
                毛豆腐是安徽徽州地区的传统名菜，以豆腐发酵后表面生长的白色绒毛为特色，口感独特。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>将豆腐切块，放置发酵至表面长白毛，然后煎至金黄，蘸上特制酱料食用。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20braised%20fish%20head%20traditional%20chinese%20cuisine&image_size=square"
                  alt="臭鳜鱼"
                />
              </div>
              <h4 class="food-title">臭鳜鱼</h4>
              <p class="food-desc">
                臭鳜鱼是安徽徽州地区的传统名菜，闻起来臭，吃起来香，肉质鲜嫩，风味独特。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>将鳜鱼用盐腌制发酵，然后用热油煎至金黄，加入调味料焖煮而成。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20ham%20stew%20traditional%20chinese%20cuisine&image_size=square"
                  alt="徽州火腿"
                />
              </div>
              <h4 class="food-title">徽州火腿</h4>
              <p class="food-desc">
                徽州火腿是安徽徽州地区的传统特产，以其色泽鲜艳、香气浓郁、味道鲜美而闻名。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>选用当地优质猪后腿，用盐腌制后挂起风干，经过长时间发酵而成。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20huizhou%20biscuit%20traditional%20chinese%20baked%20food&image_size=square"
                  alt="徽州烧饼"
                />
              </div>
              <h4 class="food-title">徽州烧饼</h4>
              <p class="food-desc">
                徽州烧饼是安徽徽州地区的传统小吃，外皮酥脆，内馅香甜，是当地人喜爱的点心。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>用面粉和油制作酥皮，包入芝麻糖馅，烘烤至金黄酥脆即可。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20wuhu%20shrimp%20noodles%20traditional%20chinese%20cuisine&image_size=square"
                  alt="芜湖虾子面"
                />
              </div>
              <h4 class="food-title">芜湖虾子面</h4>
              <p class="food-desc">
                芜湖虾子面是安徽芜湖的传统名吃，面条筋道，汤头鲜美，虾子鲜香浓郁。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>用面粉制作细面条，煮熟后加入用虾子熬制的高汤，配上葱花和香菜。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anhui%20huangshan%20biscuit%20traditional%20chinese%20baked%20food&image_size=square"
                  alt="黄山烧饼"
                />
              </div>
              <h4 class="food-title">黄山烧饼</h4>
              <p class="food-desc">
                黄山烧饼是安徽黄山地区的传统小吃，外皮酥脆，内馅丰富，是游客必尝的美食。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>用面粉制作酥皮，包入梅干菜肉馅，烘烤至金黄酥脆。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 文化景点 -->
        <div v-else-if="activeTab === 'attractions'" class="attractions-content">
          <h3 class="content-title">安徽文化景点</h3>
          <div class="attractions-grid">
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=huangshan%20mountain%20anhui%20china%20云海%20scenic%20landscape%20with%20peaks%20and%20clouds&image_size=square"
                  alt="黄山"
                />
              </div>
              <h4 class="attraction-title">黄山</h4>
              <p class="attraction-desc">
                黄山是安徽最著名的景点，以奇松、怪石、云海、温泉、冬雪"五绝"著称于世，被誉为"天下第一奇山"。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hongcun%20ancient%20village%20anhui%20china%20traditional%20huizhou%20architecture&image_size=square"
                  alt="宏村"
                />
              </div>
              <h4 class="attraction-title">宏村</h4>
              <p class="attraction-desc">
                宏村是安徽徽州地区的一座古村落，以其独特的徽派建筑风格和优美的水乡风光闻名于世。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=xidi%20ancient%20village%20anhui%20china%20traditional%20huizhou%20architecture&image_size=square"
                  alt="西递"
                />
              </div>
              <h4 class="attraction-title">西递</h4>
              <p class="attraction-desc">
                西递是安徽徽州地区的另一座古村落，与宏村一起被列为世界文化遗产，保存完好的徽派建筑令人叹为观止。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jiuhuashan%20mountain%20anhui%20china%20buddhist%20holy%20mountain%20temple%20scenery&image_size=square"
                  alt="九华山"
                />
              </div>
              <h4 class="attraction-title">九华山</h4>
              <p class="attraction-desc">
                九华山是中国四大佛教名山之一，以其深厚的佛教文化和壮丽的自然风光吸引着众多游客。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tianzhu%20mountain%20anhui%20china%20scenic%20mountain%20landscape&image_size=square"
                  alt="天柱山"
                />
              </div>
              <h4 class="attraction-title">天柱山</h4>
              <p class="attraction-desc">
                天柱山位于安徽潜山，以奇峰怪石、古松云海著称，是国家级风景名胜区。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chao%20lake%20anhui%20china%20scenic%20lake%20landscape&image_size=square"
                  alt="巢湖"
                />
              </div>
              <h4 class="attraction-title">巢湖</h4>
              <p class="attraction-desc">
                巢湖是中国五大淡水湖之一，湖光山色美不胜收，是安徽重要的旅游胜地和生态保护区。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 河南内容 -->
      <div v-else-if="activeRegion === 'henan'">
        <!-- 新年习俗 -->
        <div v-if="activeTab === 'customs'" class="customs-content">
          <h3 class="content-title">河南新年习俗</h3>
          <div class="customs-grid">
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20new%20year%20customs%20traditional%20chinese%20spring%20festival%20with%20lion%20dance&image_size=square"
                  alt="舞狮"
                />
              </div>
              <h4 class="customs-title">舞狮</h4>
              <p class="customs-desc">河南人在新年期间会举行舞狮表演，象征着吉祥如意，驱邪避灾。</p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20new%20year%20food%20traditional%20chinese%20spring%20festival%20dumplings&image_size=square"
                  alt="包饺子"
                />
              </div>
              <h4 class="customs-title">包饺子</h4>
              <p class="customs-desc">
                河南人在除夕夜会包饺子，象征着团圆和财富，有的饺子里还会包上硬币，吃到的人会有好运。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20new%20year%20temple%20fair%20traditional%20chinese%20spring%20festival%20celebration&image_size=square"
                  alt="逛庙会"
                />
              </div>
              <h4 class="customs-title">逛庙会</h4>
              <p class="customs-desc">
                河南各地在新年期间会举办庙会，有各种传统表演和小吃，热闹非凡。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20new%20year%20firecrackers%20traditional%20chinese%20spring%20festival%20celebration&image_size=square"
                  alt="放鞭炮"
                />
              </div>
              <h4 class="customs-title">放鞭炮</h4>
              <p class="customs-desc">河南人在新年零点会放鞭炮辞旧迎新，驱走晦气，迎来好运。</p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20new%20year%20customs%20giving%20red%20envelopes%20traditional%20chinese%20spring%20festival&image_size=square"
                  alt="发红包"
                />
              </div>
              <h4 class="customs-title">发红包</h4>
              <p class="customs-desc">
                河南长辈会在新年给晚辈发红包，里面装着压岁钱，寓意着祝福和好运。
              </p>
            </div>
            <div class="customs-item">
              <div class="customs-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20new%20year%20customs%20dragon%20dance%20traditional%20chinese%20spring%20festival&image_size=square"
                  alt="舞龙灯"
                />
              </div>
              <h4 class="customs-title">舞龙灯</h4>
              <p class="customs-desc">
                河南一些地区有舞龙灯的习俗，长长的龙灯在街头巷尾穿梭，寓意着风调雨顺。
              </p>
            </div>
          </div>
        </div>

        <!-- 特色美食 -->
        <div v-else-if="activeTab === 'food'" class="food-content">
          <h3 class="content-title">河南特色美食</h3>
          <div class="food-grid">
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20braised%20noodles%20traditional%20chinese%20cuisine&image_size=square"
                  alt="河南烩面"
                />
              </div>
              <h4 class="food-title">河南烩面</h4>
              <p class="food-desc">
                河南烩面是河南最著名的传统面食，以其鲜美的汤头和筋道的面条闻名于世。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>用面粉和盐揉成面团，醒发后拉成面条，煮熟后加入羊肉汤、羊肉片和各种配料。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20steamed%20buns%20traditional%20chinese%20cuisine&image_size=square"
                  alt="开封小笼包"
                />
              </div>
              <h4 class="food-title">开封小笼包</h4>
              <p class="food-desc">
                开封小笼包是河南开封的传统名吃，以其皮薄馅多、汤汁丰富而闻名。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>用面粉和水揉成面团，擀成薄皮，包入肉馅和皮冻，蒸熟后即可食用。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20fried%20dumplings%20traditional%20chinese%20cuisine&image_size=square"
                  alt="水煎包"
                />
              </div>
              <h4 class="food-title">水煎包</h4>
              <p class="food-desc">
                水煎包是河南的传统名吃，底部焦脆，上部松软，馅料鲜美，深受人们喜爱。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>
                  用面粉和水揉成面团，包入馅料，放入锅中煎至底部金黄，然后加入适量的水，加盖焖熟。
                </p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20luoyang%20water%20banquet%20traditional%20chinese%20cuisine&image_size=square"
                  alt="洛阳水席"
                />
              </div>
              <h4 class="food-title">洛阳水席</h4>
              <p class="food-desc">
                洛阳水席是河南洛阳的传统名宴，以汤水见长，菜品丰富，是洛阳饮食文化的代表。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>选用各种食材，制作成汤菜，上菜时一道接一道，汤汤水水，连绵不断。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20kaifeng%20peony%20swallow%20cake%20traditional%20chinese%20food&image_size=square"
                  alt="牡丹燕菜"
                />
              </div>
              <h4 class="food-title">牡丹燕菜</h4>
              <p class="food-desc">
                牡丹燕菜是河南洛阳的传统名菜，造型美观，口感鲜美，是洛阳水席的头菜。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>选用白萝卜，切成细丝，用开水焯熟，摆成牡丹花形状，配上各种配料和调料。</p>
              </div>
            </div>
            <div class="food-item">
              <div class="food-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=henan%20anyang%20flatbread%20traditional%20chinese%20food&image_size=square"
                  alt="安阳扁粉菜"
                />
              </div>
              <h4 class="food-title">安阳扁粉菜</h4>
              <p class="food-desc">
                安阳扁粉菜是河南安阳的特色小吃，粉条爽滑，汤汁鲜美，是当地人喜爱的早餐。
              </p>
              <div class="food-method">
                <h5>制作方法：</h5>
                <p>用红薯粉制作扁粉条，煮熟后加入用骨头熬制的高汤，配上青菜和调料。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 文化景点 -->
        <div v-else-if="activeTab === 'attractions'" class="attractions-content">
          <h3 class="content-title">河南文化景点</h3>
          <div class="attractions-grid">
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=longmen%20grottoes%20luoyang%20henan%20china%20buddhist%20statues%20ancient%20carvings&image_size=square"
                  alt="龙门石窟"
                />
              </div>
              <h4 class="attraction-title">龙门石窟</h4>
              <p class="attraction-desc">
                龙门石窟位于河南洛阳，是中国四大石窟之一，被列为世界文化遗产，保存有大量精美的佛教造像。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shaolin%20temple%20henan%20china%20buddhist%20temple%20martial%20arts%20traditional%20chinese%20architecture&image_size=square"
                  alt="少林寺"
                />
              </div>
              <h4 class="attraction-title">少林寺</h4>
              <p class="attraction-desc">
                少林寺位于河南嵩山，是中国佛教禅宗祖庭和武术发源地，少林武术闻名世界。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yin%20xu%20anyang%20henan%20china%20ancient%20shang%20dynasty%20ruins%20historical%20site&image_size=square"
                  alt="殷墟"
                />
              </div>
              <h4 class="attraction-title">殷墟</h4>
              <p class="attraction-desc">
                殷墟位于河南安阳，是中国商朝晚期的都城遗址，出土了大量甲骨文和青铜器，被列为世界文化遗产。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=white%20horse%20temple%20luoyang%20henan%20china%20buddhist%20temple%20ancient%20architecture&image_size=square"
                  alt="白马寺"
                />
              </div>
              <h4 class="attraction-title">白马寺</h4>
              <p class="attraction-desc">
                白马寺位于河南洛阳，是中国第一古刹，被誉为"中国佛教的祖庭"，历史悠久，文化底蕴深厚。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kaifeng%20iron%20pagoda%20henan%20china%11%20story%20pagoda%20ancient%20architecture&image_size=square"
                  alt="开封铁塔"
                />
              </div>
              <h4 class="attraction-title">开封铁塔</h4>
              <p class="attraction-desc">
                开封铁塔是河南开封的标志性建筑，建于北宋时期，因其琉璃砖色如铁而得名，工艺精湛。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
            <div class="attraction-item">
              <div class="attraction-image">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shaolin%20mountain%20songshan%20henan%20china%20scenic%20mountain%20landscape&image_size=square"
                  alt="嵩山"
                />
              </div>
              <h4 class="attraction-title">嵩山</h4>
              <p class="attraction-desc">
                嵩山位于河南登封，是中国五岳之一的中岳，以雄伟的山势和深厚的文化底蕴闻名。
              </p>
              <button class="ar-preview-btn">AR预览</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 地区数据
const regions = [
  { id: 'anhui', name: '安徽' },
  { id: 'henan', name: '河南' }
]

// 内容标签
const contentTabs = [
  { id: 'customs', name: '新年习俗', icon: '🎎' },
  { id: 'food', name: '特色美食', icon: '🍜' },
  { id: 'attractions', name: '文化景点', icon: '🏯' }
]

// 激活状态
const activeRegion = ref('anhui')
const activeTab = ref('customs')

// 切换地区
const switchRegion = regionId => {
  activeRegion.value = regionId
}

// 切换标签
const switchTab = tabId => {
  activeTab.value = tabId
}
</script>

<style scoped>
.regional-content {
  padding: 30px 0;
}

.section-title {
  color: #6e48aa;
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}

/* 地区标签 */
.region-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.region-tab {
  padding: 12px 30px;
  background: #f8f9fa;
  border: 2px solid #6e48aa;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6e48aa;
}

.region-tab:hover {
  background: #6e48aa;
  color: white;
  transform: translateY(-2px);
}

.region-tab.active {
  background: #6e48aa;
  color: white;
  box-shadow: 0 4px 12px rgba(110, 72, 170, 0.3);
}

/* 内容标签 */
.content-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.content-tab {
  padding: 10px 20px;
  background: #f8f9fa;
  border: 2px solid #9d50bb;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #9d50bb;
  display: flex;
  align-items: center;
  gap: 5px;
}

.content-tab:hover {
  background: #9d50bb;
  color: white;
  transform: translateY(-2px);
}

.content-tab.active {
  background: #9d50bb;
  color: white;
  box-shadow: 0 4px 12px rgba(157, 80, 187, 0.3);
}

/* 内容展示区 */
.content-display {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.content-title {
  color: #6e48aa;
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
}

/* 习俗内容 */
.customs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.customs-item {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.customs-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.customs-image {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.customs-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.customs-item:hover .customs-image img {
  transform: scale(1.1);
}

.customs-title {
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
}

.customs-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.4;
}

/* 美食内容 */
.food-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.food-item {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
}

.food-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.food-image {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.food-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.food-item:hover .food-image img {
  transform: scale(1.1);
}

.food-title {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.food-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 15px;
}

.food-method {
  background: rgba(110, 72, 170, 0.1);
  padding: 15px;
  border-radius: 10px;
}

.food-method h5 {
  color: #6e48aa;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: bold;
}

.food-method p {
  color: #666;
  font-size: 13px;
  line-height: 1.4;
  margin: 0;
}

/* 景点内容 */
.attractions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.attraction-item {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
}

.attraction-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.attraction-image {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.attraction-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.attraction-item:hover .attraction-image img {
  transform: scale(1.1);
}

.attraction-title {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.attraction-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 20px;
}

.ar-preview-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.ar-preview-btn:hover {
  background: linear-gradient(135deg, #ff8e8e, #ff6b6b);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .regional-content {
    padding: 20px 0;
  }

  .content-display {
    padding: 20px;
  }

  .region-tabs {
    flex-direction: column;
    align-items: center;
  }

  .region-tab {
    width: 80%;
    max-width: 200px;
  }

  .content-tabs {
    gap: 10px;
  }

  .content-tab {
    font-size: 12px;
    padding: 8px 16px;
  }

  .customs-grid,
  .food-grid,
  .attractions-grid {
    grid-template-columns: 1fr;
  }
}
</style>

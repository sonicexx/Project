- 依赖包
  `npm i --save axios qs better-scroll vue-awesome-swiper vuex`

- 准备文件

  - **views**: 主要页面，路由切换

    - Index.vue：主页
    - Search.vue：搜索页
    - Detail.vue：详情页
    - List.vue：列表页
    - City.vue：城市选择页

  - **store**: vuex 管理

    - index.js: vuex 入口文件
    - state.js: 状态管理文件
    - mutations.js: mutations 方法管理文件

  - **assets**：一些初始化文件、fastclick、resets.css、border.css、缓冲中 icon 图片、按钮数据、字体图标

  - **models**：组织管理数据、请求数据、数据缓存

    - index.js: 主页数据管理
    - search.js：搜索页
    - detail.js：详情页
    - list.js：列表页

  - **utils**: 全局方法管理

    - config.js
    - http.js: axios 封装
    - tools.js: 工具函数

  - **配置 vue.config.js**
    - 配置别名

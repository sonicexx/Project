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

  - **assets**：一些初始化文件、resets.css、border.css、缓冲中 icon 图片、按钮数据、字体图标

  - **models**：组织管理数据、请求数据、数据缓存

    - index.js: 主页数据管理
    - search.js：搜索页
    - detail.js：详情页
    - list.js：列表页

  - **utils**: 全局方法管理

    - config.js
    - http.js: axios 封装
    - tools.js: 工具函数

- 基本配置
  - **配置 vue.config.js / webpack.base.js 的别名**
    - 配置别名
  - **导入初始化文件**
  - **入口 html 文件取消用户缩放**：防止 300ms 延迟
  - **配置 iconfont 字体文件**
  - **样式文件准备**：mixin.scss-复用混入的样式管理文件、variable.scss-样式变量的管理文件
  - **配置主页面的路由对象**
  - **配置后端 API 数据请求**
    - 配置 API 接口地址管理文件：config.js
    - 配置封装 axios 的文件：http.js-`封装一个可被继承的 HTTP 类，后期继承直接调用数据请求方法`
    - 配置每个页面数据管理的文件：model/
      主要使用类的继承，继承封装出来的 http 类，后期直接在文件中使用 **this.axiosPost({...})** 调用请求数据方法

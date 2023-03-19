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

- 文件目录部署

```
|——comp-AllToOne-web：根目录
      |——build：项目打包配置
           |-webpack.base.js：webpack 基本配置文件 webpack-merge
      |——node_modules：库
      |——src：项目主要文件
            |——assets：一些静态资源和预设
                  |——data
                      |-cities.js
                      |-fields.js
                  |——imgs
                      |-loading.png
                  |——js
                      |-commont.js：设置 rem、取消多指点击默认事件
                  |——styles
                      |—— onts：字体文件
                      |-iconfont.css：字体图标
                      |-resets.css：样式重置
                      |-border.css：border 显示
                      |-common.scss：通用
                      |-mixin.scss：复用样式管理
                      |-variable.scss：样式变量管理
            |——components：页面内使用的组件
                |——
            |——model：各页面数据管理：继承 HTTP 类发送请求、收集组织数据、为页面提供数据
                |-index.js
                |-list.js
                |-search.js
                |-detail.js
            |——utils：全局配置&工具方法
                |-http.js：封装一个 axios 发送请求的类 HTTP，后期使用的地方 继承 -> this 就能使用
            |——router：路由管理
                |-index.js
            |——store：vuex
                |-index.js：出口
                |-state.js
                |-mutations.js
            |——views：通过路由切换的主页面
                |-Index.vue
                |-List.vue
                |-City.vue
                |-Search.vue
                |-Detail.vue
            |-App.vue：应用实例
            |-index.html：模板
            |-mian.js：总入口文件-注册 vue
      |-.babelrc：babel 配置
      |-package.json
      |-vue.config.js vue-cli-service 运行项目配置文件
      |-webpack.dev.js：开发环境
      |-webpack.prod.js：生产环境
```

- 组件结构部署

```
|——Header
      |——sub
          |-Backward.vue：返回按钮
          |-CitySelector.vue：城市选择按钮
          |-FalseInput.vue：假输入框-跳转至搜索页
      |-Home.vue：主页 header——使用：CitySelector、FalseInput 组件
      |-Common.vue：其他页面通用 header——使用 Backward 组件
```

## <center>项目说明</center>

##### - 前置知识

- HTML、CSS、SASS、flex 布局
- ECMAScript、DOM、AJAX
- ES6、JS Object-oriented
- jQuery / Zepto
- HTML5 LocalStory
- Webpack

##### - 技术点

- 项目工程化 & 前端架构 —- 不同版本对应的不同 loader
- 功能模块化 & 项目组件化
- 数据处理方案 & 技巧
- 前端数据缓存池技术 & 高级应用
- 面向对象的模型层
- 数据的传递、存储、使用

##### - 课程大纲

- Webpack 项目工程化环境搭建与配置
- 项目架构解析 & 结构搭建
- 真机调试设置
- 首页布局技巧 & 组件多模板配置
- 数据分析处理
- 前端数据缓存池机制
- 前端原生 JS 模板渲染方法
- 首页&详情页数据传递机制
- 详情页收藏功能&数据更新
- 收藏页组件复用机制

##### - 提升指南

- 企业级项目工程化
- 企业级前端项目架构
- 独立完成项目的能力
- 前端数据相关多技术提升
- 企业级模块化、组件化开发————易读、易维护、易产品迭代
- 企业级编码规范与经验

## <center>技术点</center>

##### - tpl 模板渲染

Header 组件为例

1. 创建 Header 组件的文件：components/Header/index.js + index.scss + index.tpl
2. 写 index.tpl 组件内 html 结构 [Header/index.tpl](./src/components/Header/index.tpl)
3. 创建一个全局方法，将 tpl 的模板数据替换并返回 [libs/utils.js](./src/libs/utils.js)
4. 写 Header 中的 [index.js](./src/components/Header/index.js) 文件的逻辑
   - 导入样式 index.scss
   - 导入模板 index.tpl
   - 导入模板数据替换方法 tplReplace ( libs/utils.js )
   - export default 出去自身组件对象：name、tpl 方法（获取替换数据、返回 tplReplace 方法的执行数据）
5. 项目 [index.js](./src/js/index.js) 入口文件
   - 获取 app 主节点
   - 导入 Header/index.js
   - 调用 Header/index.js 中的 tpl 方法，存储返回值
   - 将返回的模板值赋予 app 主节点的 innerHTML

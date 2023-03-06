import './imports.js';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList/index.js';

import { NEWS_TYPE } from '../data';

import services from '../services/index.js';

// 入口文件 一般使用匿名自执行函数包起来，证明是一个整体
// 注意：为区分上边代码,括号前要有分号分割： ;(()=>{})()
(doc => {
  const oApp = doc.getElementById('app');

  // 请求配置
  const config = {
    type: 'tiyu',
    count: 10,
    pageNum: 0,
  };

  // 存储请求数据
  const newsData = {};

  let oListWrapper = null; //用来存放 news-List 元素

  const init = async () => {
    render();

    await setNewsList();

    bindEvent();
  };

  function bindEvent() {
    NavBar.bindEvent(setType);
  }

  function render() {
    const headerTpl = Header.tpl({
      title: '新闻头条',
      url: '/',
      showLeftIcon: false,
      showRightIcon: true,
    });

    const navBarTpl = NavBar.tpl(NEWS_TYPE);

    const newsWrapperTpl = NewsList.wrapperTpl(82);

    oApp.innerHTML += headerTpl + navBarTpl + newsWrapperTpl;

    oListWrapper = oApp.querySelector('.news-list');
  }

  function renderList(data) {
    const { pageNum } = config;

    const newsListTpl = NewsList.tpl({ data, pageNum });

    oListWrapper.innerHTML = newsListTpl;

    NewsList.imgShow();
  }

  function setType(type) {
    config.type = type;
    setNewsList();
  }

  async function setNewsList() {
    const { type, count, pageNum } = config;

    if (newsData[type]) return;
    newsData[type] = await services.getNewsList(type, count);

    // console.log(newsData[type][pageNum]);
    // newsData[type] = [[...],[...],[...]]  --- newsData[type][pageNum] 前十个数据
    renderList(newsData[type][pageNum]);
  }

  init();
})(document);

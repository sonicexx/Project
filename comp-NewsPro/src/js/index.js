import './imports.js';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList/index.js';
import PageLoading from '../components/PageLoading/index.js';
import MoreLoading from '../components/MoreLoading/index.js';
import NoDataTip from '../components/NoDataTip/index.js';

import { NEWS_TYPE } from '../data';
import services from '../services/index.js';
import { scrollToBottom } from '../libs/utils.js';

// 入口文件 一般使用匿名自执行函数包起来，证明是一个整体
// 注意：为区分上边代码,括号前要有分号分割： ;(()=>{})()
(doc => {
  const oApp = doc.getElementById('app');

  // 请求配置
  const config = {
    type: 'top',
    count: 10,
    pageNum: 0,
    isloading: true,
  };

  // 存储请求数据
  const newsData = {};

  let oListWrapper = null; //用来存放 news-List 元素

  let t = null;

  const init = async () => {
    render();
    await setNewsList();
    bindEvent();
  };

  function bindEvent() {
    NavBar.bindEvent(setType);
    NewsList.bindEvent(oListWrapper, setCurrentNews);
    window.addEventListener(
      'scroll',
      scrollToBottom.bind(null, getMoreList),
      false
    );
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

    MoreLoading.remove(oListWrapper); // 渲染新列表之前，删除 loading 组件

    oListWrapper.innerHTML += newsListTpl;

    config.isloading = false; // 每次列表渲染完成后，loading = false

    NewsList.imgShow();
  }

  function setType(type) {
    config.type = type;

    // 初始化配置值
    config.pageNum = 0;
    oListWrapper.innerHTML = '';

    setNewsList();
  }

  async function setNewsList() {
    const { type, count, pageNum } = config;

    // 有数据直接使用数据，不在发送请求
    if (newsData[type]) {
      console.log('------------ pool');
      renderList(newsData[type][pageNum]); // 如果缓存池中有直接渲染，没有再往下执行，使用获取来的数据
      return;
    }

    // 没有数据再请求数据
    config.isloading = true; // 开始请求数据，设置 isloading 状态

    oListWrapper.innerHTML = PageLoading.tpl();
    const res = await services.getNewsList(type, count);

    if (res.status === 404) {
      oListWrapper.innerHTML = '';
      NoDataTip.add(oListWrapper, res.msg);
      return;
    }

    newsData[type] = res.data;

    console.log(newsData);

    // console.log(newsData[type][pageNum]);
    // newsData[type] = [[...],[...],[...]]  --- newsData[type][pageNum] 前十个数据
    console.log('------------ request');
    setTimeout(() => {
      oListWrapper.innerHTML = '';
      renderList(newsData[type][pageNum]);
    }, 1500);
  }

  // 获取更多
  function getMoreList() {
    // 判断是否在加载中
    if (!config.isloading) {
      clearTimeout(t); // 防抖

      config.pageNum++; // 加载下一页也买你
      const { type, pageNum } = config;

      // 判断当前请求值，是否超过总长度
      if (pageNum >= newsData[type].length) {
        // 超过，加载 没有更多了 的 loading 组件
        MoreLoading.add(oListWrapper, false);
      } else {
        // 没有超过，加载 loading 组件，获取数据
        config.isloading = true; // 设置 loading 为加载中
        MoreLoading.add(oListWrapper, true); //加载 loading 组件

        // 防抖参数
        t = setTimeout(() => {
          setNewsList(); //获取数据
        }, 1000);
      }
    }
  }

  function setCurrentNews(options) {
    const { idx, pageNum } = options;
    localStorage.setItem(
      'currentNews',
      JSON.stringify(newsData[config.type][pageNum][idx])
    );
  }

  init();
})(document);

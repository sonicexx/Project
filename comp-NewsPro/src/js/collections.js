import './imports.js';
import { getUrlQueryValue } from '../libs/utils.js';
import Header from '../components/Header/index.js';
import NewsList from '../components/NewsList/index';
import NoDataTip from '../components/NoDataTip/index';

(doc => {
  const oApp = doc.getElementById('app');
  const path = getUrlQueryValue('path');
  const followedList = JSON.parse(localStorage.getItem('followedList'));
  let oListWrapper = null;

  const init = () => {
    render();
    bindEvent();
  };

  function bindEvent() {
    NewsList.bindEvent(oListWrapper, setCurrentNews);
  }

  function render() {
    const headerTpl = Header.tpl({
      title: '我的收藏',
      url: path,
      showLeftIcon: true,
      showRightIcon: false,
    });

    const newsListTpl = NewsList.wrapperTpl();
    if (!followedList.length) {
      const noDataTipTpl = NoDataTip._tpl('还没有收藏数据');
      oApp.innerHTML += headerTpl + noDataTipTpl;
      return;
    }
    oApp.innerHTML += headerTpl + newsListTpl;
    oListWrapper = doc.querySelector('.news-list');
    renderList();
  }
  function renderList() {
    oListWrapper.innerHTML = NewsList.tpl({
      data: followedList,
      pageNum: 0,
    });

    NewsList.imgShow();
  }

  function setCurrentNews(options) {
    const { idx } = options;
    localStorage.setItem('currentNews', JSON.stringify(followedList[idx]));
  }

  init();
})(document);

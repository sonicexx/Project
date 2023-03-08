import './imports.js';

import Header from '../components/Header/index.js';
import Iframe from '../components/Iframe/index.js';
import { getUrlQueryValue } from '../libs/utils.js';
import Follow from '../components/Follow/index.js';

(doc => {
  const oApp = doc.getElementById('app');

  const targetNews = JSON.parse(localStorage.getItem('currentNews'));
  let followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

  const path = getUrlQueryValue('path');

  const init = () => {
    render();

    bindEvent();
  };

  function render() {
    const headerTpl = Header.tpl({
      title: '新闻详情',
      url: path,
      showLeftIcon: true,
      showRightIcon: false,
    });
    const iframeTpl = Iframe.tpl(targetNews.url);
    const followTpl = createFollowTpl();
    oApp.innerHTML += headerTpl + iframeTpl + followTpl;
  }

  function createFollowTpl() {
    return followedList.find(item => item.uniquekey === targetNews.uniquekey)
      ? Follow.tpl('star')
      : Follow.tpl('star-o');
  }

  function bindEvent() {
    Follow.bindEvent(setFollow);
  }

  function setFollow(followed) {
    if (followed) {
      followedList.push(targetNews);
    } else {
      followedList = followedList.filter(
        item => item.uniquekey !== targetNews.uniquekey
      );
    }

    localStorage.setItem('followedList', JSON.stringify(followedList));
  }

  init();
})(document);

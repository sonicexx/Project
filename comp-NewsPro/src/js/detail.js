import './imports.js';

import Header from '../components/Header/index.js';
import Iframe from '../components/Iframe/index.js';
import { getUrlQueryValue } from '../libs/utils.js';

(doc => {
  const oApp = doc.getElementById('app');

  const targetNews = JSON.parse(localStorage.getItem('currentNews'));
  console.log(targetNews);

  const path = getUrlQueryValue('path');

  const init = () => {
    render();
  };

  function render() {
    const headerTpl = Header.tpl({
      title: '新闻详情',
      url: path,
      showLeftIcon: true,
      showRightIcon: false,
    });

    const iframeTpl = Iframe.tpl(targetNews.url);

    oApp.innerHTML += headerTpl + iframeTpl;
  }

  init();
})(document);

import './imports.js';

import Header from '../components/Header/index.js';

(doc => {
  const oApp = doc.getElementById('app');

  const init = () => {
    render();
  };

  function render() {
    const headerTpl = Header.tpl({
      title: '新闻详情',
      url: '/',
      showLeftIcon: true,
      showRightIcon: false,
    });

    oApp.innerHTML += headerTpl;
  }

  init();
})(document);

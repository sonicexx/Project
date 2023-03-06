import Header from '../components/Header/index.js';
import './imports.js';

(doc => {
  const oApp = doc.getElementById('app');
  const init = () => {
    render();
  };
  function render() {
    const headerTpl = Header.tpl({
      title: '我的新闻',
      url: '/',
      showLeftIcon: true,
      showRightIcon: false,
    });

    oApp.innerHTML += headerTpl;
  }

  init();
})(document);

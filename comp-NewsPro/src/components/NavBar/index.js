import './index.scss';
import wrapperTpl from './tpl/index.tpl';
import itemTpl from './tpl/item.tpl';

import { scrollToTop, tplReplace } from '../../libs/utils';

export default {
  name: 'NavBar',
  _curIdx: 0, // 记录被点击元素的 index
  tpl(data) {
    let itemList = '';

    data.map(({ type, title }, index) => {
      itemList += tplReplace(itemTpl, {
        isCurrent: !index ? 'current' : '',
        title,
        type,
      });
    });

    return tplReplace(wrapperTpl, {
      itemList,
      wrapperW: 0.6 * data.length,
    });
  },

  bindEvent(setType) {
    const oNavBar = document.querySelector('.nav');
    const oNavItem = document.querySelectorAll('.item');

    // 点击事件的回调函数的 this 是指向元素本身的
    // 但这里不需要元素，而是要指向当前对象，获取当前对象设置的 currentIndex
    oNavBar.addEventListener(
      'click',
      this._setNav.bind(this, oNavItem, setType),
      false
    );
  },

  _setNav(items, setType) {
    const tar = arguments[2].target; // 取出 e.target，用于锁定当前 item 的 index 值
    const className = tar.className.trim();

    setType(tar.dataset.type); // 返回给 index.js 入口文件当前点击的 item 的 data-type 的值
    // 然后请求数据，然后重置滚动条位置
    scrollToTop();

    if (className === 'item') {
      items[this._curIdx].className = 'item';

      // 获取被点击对象的 index 值
      this._curIdx = [].indexOf.call(items, tar); // 利用 call 改变 this 指向使用数组 indexOf 方法
      items[this._curIdx].classList.add('current');
    }
  },
};

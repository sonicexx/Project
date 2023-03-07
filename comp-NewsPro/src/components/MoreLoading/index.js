import { tplReplace } from '../../libs/utils';
import './index.scss';

import loadingTpl from './index.tpl';

export default {
  name: 'MoreLoading',
  _tpl(isloading) {
    return tplReplace(loadingTpl, {
      isloading: isloading ? 'loading' : '',
      text: isloading ? ' 正在加载...' : '没有更多了',
    });
  },

  remove(oList) {
    const oMoreLoading = oList.querySelector('.more-loading');
    oMoreLoading && oMoreLoading.remove();
  },

  add(oList, isloading) {
    const oMoreLoading = oList.querySelector('.more-loading');
    if (!oMoreLoading) {
      oList.innerHTML += this._tpl(isloading);
    }
  },
};

import { tplReplace } from '../../libs/utils';
import './index.scss';
import follow from './index.tpl';

export default {
  name: 'Follow',
  tpl: star => tplReplace(follow, { star }),

  bindEvent(doFollow) {
    const oFollw = document.querySelector('.follow');
    oFollw.addEventListener(
      'click',
      this._setFollow.bind(this, oFollw, doFollow),
      false
    );
  },

  _setFollow(oFollow, doFollow) {
    const className = [...oFollow.classList].filter(item =>
      item.includes('star')
    )[0];
    oFollow.className = 'follow iconfont icon-';

    if (className === 'icon-star') {
      oFollow.className += 'star-o';
      doFollow(false);
    } else {
      oFollow.className += 'star';
      doFollow(true);
    }
  },
};

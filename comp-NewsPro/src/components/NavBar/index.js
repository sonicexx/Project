import './index.scss';
import wrapperTpl from './tpl/index.tpl';
import itemTpl from './tpl/item.tpl';

import { tplReplace } from '../../libs/utils';

export default {
  name: 'NavBar',
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
};

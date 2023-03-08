import './index.scss';
import noDataTip from './index.tpl';
import { tplReplace } from '../../libs/utils';

export default {
  name: 'NoDataTip',
  _tpl: text => tplReplace(noDataTip, { text }),
  add(oList, text) {
    oList.innerHTML = this._tpl(text);
  },
  remove(oList) {
    oList.querySelector('.no-data-tip').remove();
  },
};

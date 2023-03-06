import tpl from './index.tpl'; // tpl 文件导入是一个函数，执行后内部数据才会 return 出来
import './index.scss';

import { tplReplace } from '../../libs/utils';

export default {
  name: 'Header',
  tpl(options) {
    const { title, url, showLeftIcon, showRightIcon } = options;

    // 替换模板中的 {{}}
    return tplReplace(tpl, {
      title,
      url,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none',
    });
  },
};

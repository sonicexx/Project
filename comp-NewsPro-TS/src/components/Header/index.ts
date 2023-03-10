import '@/components/Header/index.scss';
import header from '@/components/Header/indexTpl.tpl';

import { tplReplace } from '@/libs/utils';
import { IComponentBase, ITplObj } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  tpl: (data: ITplObj) => string;
}

export default <IComponent>{
  name: 'Header',
  tpl: ({ url, title, showLeftIcon, showRightIcon }: ITplObj): string => {
    return tplReplace(header, {
      url,
      title,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none',
    });
  },
};

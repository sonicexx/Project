import '@/components/NavBar/index.scss';
import navWrapper from '@/components/NavBar/tpl/index.tpl';
import navItem from '@/components/NavBar/tpl/item.tpl';

import { scrollToTop, tplReplace } from '@/libs/utils';
import { INavBarItem } from '@/typings/dataTypes';
import { IComponentBase, ITplObj } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  _curIdx: number;
  _wrapperTpl: (data: ITplObj) => string;
  tpl: (data: INavBarItem[]) => string;
  bindEvent: (setType: Function) => void;
  getType: (setType: Function, oNavItems: NodeListOf<Element>) => void;
}

export default <IComponent>{
  name: 'NavBar',
  _curIdx: 0,

  _wrapperTpl: ({ wrapperW, itemList }: ITplObj): string => {
    return tplReplace(navWrapper, {
      wrapperW,
      itemList,
    });
  },

  tpl(data: INavBarItem[]): string {
    let itemList: string = '';
    data.forEach((item: INavBarItem, index: number) => {
      itemList += tplReplace(navItem, {
        isCurrent: !index ? 'current' : '',
        url: item.type,
        navItemName: item.title,
      });
    });
    return this._wrapperTpl({
      wrapperW: 0.6 * data.length,
      itemList,
    });
  },

  bindEvent(setType: Function) {
    const oNavWrapper: HTMLElement = document.querySelector('.nav-wrapper')!;
    const oNavItems: NodeListOf<Element> =
      oNavWrapper.querySelectorAll('.item');

    oNavWrapper.addEventListener(
      'click',
      this.getType.bind(this, setType, oNavItems),
      false
    );
  },
  getType(setType: Function, oNavItems: NodeListOf<Element>) {
    scrollToTop();
    console.log(document.documentElement.scrollTop);

    const tar: HTMLElement = arguments[2].target!;
    oNavItems[this._curIdx].className = 'item';
    this._curIdx = [].indexOf.call(oNavItems, tar as never);
    oNavItems[this._curIdx].classList.add('current');

    setType(tar.dataset.type);
  },
};

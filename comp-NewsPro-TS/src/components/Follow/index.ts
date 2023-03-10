import '@/components/Follow/index.scss';
import follow from '@/components/Follow/indexTpl.tpl';
import { tplReplace } from '@/libs/utils';
import { IComponentBase } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  tpl: (isFollowed: boolean) => string;
  bindEvent: (setFollow: Function) => void;
  doFollow: (oFollow: HTMLElement, setFollow: Function) => void;
}

export default <IComponent>{
  name: 'Follow',
  tpl: (isFollowed: boolean) =>
    tplReplace(follow, {
      star: isFollowed ? 'star' : 'star-o',
    }),
  bindEvent(setFollow: Function) {
    const oFollow: HTMLElement = document.querySelector('.follow')!;
    oFollow?.addEventListener(
      'click',
      this.doFollow.bind(this, oFollow, setFollow),
      false
    );
  },
  doFollow(oFollow: HTMLElement, setFollow: Function) {
    const className = oFollow.classList[2];
    oFollow.className = 'follow iconfont icon-';
    switch (className) {
      case 'icon-star-o':
        oFollow.className += 'star';
        setFollow(true);
        break;
      case 'icon-star':
        setFollow(false);
        oFollow.className += 'star-o';
        break;
      default:
        break;
    }
  },
};

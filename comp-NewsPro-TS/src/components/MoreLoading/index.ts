import '@/components/MoreLoading/index.scss';
import moreLoading from '@/components/MoreLoading/indexTpl.tpl';
import { tplReplace } from '@/libs/utils';
import { IComponentBase } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  _tpl: (loading: boolean) => string;
  add: (oList: HTMLElement, loading: boolean) => void;
  remove: (oList: HTMLElement) => void;
}

export default <IComponent>{
  name: 'MoreLoading',
  _tpl: (loading: boolean) =>
    tplReplace(moreLoading, {
      loading: loading ? 'loading' : '',
      text: loading ? '正在加载...' : '没有更多了',
    }),
  add(oList: HTMLElement, loading: boolean) {
    const oMoreLoading: HTMLElement | null =
      oList.querySelector('.more-loading');
    !oMoreLoading && (oList.innerHTML += this._tpl(loading));
  },
  remove(oList: HTMLElement) {
    const oMoreLoading: HTMLElement = oList.querySelector('.more-loading')!;
    oMoreLoading && oMoreLoading.remove();
  },
};

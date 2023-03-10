import '@/components/PageLoading/index.scss';
import pageLoading from '@/components/PageLoading/indexTpl.tpl';
import { tplReplace } from '@/libs/utils';
import { IComponentBase } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  _tpl: () => string;
  add: (oList: HTMLElement) => void;
  remove: (oList: HTMLElement) => void;
}

export default <IComponent>{
  name: 'PageLoading',
  _tpl: () => tplReplace(pageLoading, {}),
  add(oList: HTMLElement) {
    const oLoadingImg: HTMLElement = oList.querySelector('.page-loading')!;
    !oLoadingImg && (oList.innerHTML = this._tpl());
  },
  remove: () => {
    const oLoadingImg: HTMLElement = document.querySelector('.page-loading')!;
    oLoadingImg && oLoadingImg.remove();
  },
};

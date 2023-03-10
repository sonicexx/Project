import '@/components/NoDataTip/index.scss';
import noDataTip from '@/components/NoDataTip/indexTpl.tpl';
import { tplReplace } from '@/libs/utils';
import { IComponentBase } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  tpl: (oList: HTMLElement, text: string) => void;
}

export default <IComponent>{
  name: 'NoDataTip',
  tpl: (oList: HTMLElement, text: string) => {
    const oNoData = oList.querySelector('.no-data-tip');
    !oNoData && (oList.innerHTML += tplReplace(noDataTip, { text }));
  },
};

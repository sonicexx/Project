import '@/components/Iframe/index.scss';
import iframe from '@/components/Iframe/indexTpl.tpl';
import { tplReplace } from '@/libs/utils';
import { IComponentBase } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  tpl: (url: string) => string;
}

export default <IComponent>{
  name: 'IFrame',
  tpl: (url: string) => tplReplace(iframe, { url }),
};

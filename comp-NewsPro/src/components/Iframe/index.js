import { tplReplace } from '../../libs/utils';
import './index.scss';
import iframe from './index.tpl';

export default {
  name: 'Iframe',
  tpl: url => tplReplace(iframe, { url }),
};

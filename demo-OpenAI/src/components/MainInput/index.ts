import './index.scss';
import { tplReplace } from '@/utils/tools';
import MainInput from './index.tpl';

export default {
  name: 'MainInput',
  tpl: (data: Object) => tplReplace(MainInput, data),

  bindEvent(fn: Function) {
    const oInput: HTMLInputElement = document.querySelector('.chat-content')!;
    const oBtn: HTMLButtonElement = document.querySelector('.send-chat')!;

    oBtn.addEventListener('click', this.sendChat.bind(oInput, fn), false);
  },
  sendChat(fn: Function) {
    fn((this as any).value);
    (this as any).value = '';
  },
};

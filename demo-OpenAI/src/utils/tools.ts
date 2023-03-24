import { ILocalStory, IMsgBoxPara, ISendMag } from '@/typings/commonTypings';

export function tplReplace(tpl: Function, tplObject: Object) {
  return tpl().replace(/\{\{(.*?)\}\}/g, (node: string, key: string) => {
    return tplObject[key.trim() as keyof Object];
  });
}

export function sendMsgFix(content: string) {
  return <ISendMag>{
    time: new Date().getTime(),
    content,
  };
}

export function createMsgBox({ msgWrapper, className, msgObj }: IMsgBoxPara) {
  const oItem = document.createElement('div');
  oItem.className = 'chat-message';
  oItem.classList.add(className);
  const oContent = document.createElement('div');
  oContent.className = 'message-text';
  oContent.textContent = msgObj.content;
  const oTime = document.createElement('div');
  oTime.className = 'message-time';
  const date = new Date(msgObj.time);
  oTime.textContent = `${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${
    (date.getMinutes() + '').length === 1
      ? '0' + date.getMinutes()
      : date.getMinutes()
  }`;
  oItem.append(oContent, oTime);
  msgWrapper.appendChild(oItem);
  msgWrapper.scrollTop = msgWrapper.scrollHeight;
}

export function HistoryInit(this: any) {
  const { UID, list }: ILocalStory = JSON.parse(
    localStorage.getItem('msgHistory') || '[]'
  );
  this.UID = UID;
  this.list = list;
}

HistoryInit.prototype = {
  render(msgWrapper: HTMLElement) {
    this.list.forEach((item: any) => {
      createMsgBox({
        msgWrapper,
        className: item.msgType,
        msgObj: item.msgObj,
      });
    });
  },
};

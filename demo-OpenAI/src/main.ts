import './index.scss';
import './utils/imports';

import IndexModel from './model/index';
import { createMsgBox, HistoryInit, sendMsgFix } from './utils/tools';
import { ILocalStory, ISendMag } from './typings/commonTypings';

(doc => {
  const historyInit: ILocalStory = new (HistoryInit as any)();
  const UID: string = historyInit.UID || new Date().getTime() + '';
  const oAI: HTMLElement = doc.querySelector('.a-idiot')!; //用来开启右上角头像的加载动画
  let msgBox: HTMLElement = doc.querySelector('.chat-messages')!;
  const oInpu: HTMLElement = doc.querySelector('.input')!;
  const PLACEHOLDER: string = '...';
  const oBtn: HTMLElement = doc.getElementById('send-btn')!;
  const oBtnOpenNew: HTMLElement = doc.getElementById('open-new')!;

  const msgHistoryList: ILocalStory = {
    UID: UID,
    list: historyInit.list ? historyInit.list : [],
  };

  const init = (): void => {
    render();
    bindEvnet();
  };

  // 页面初始化渲染
  function render() {
    msgBox = doc.querySelector('.chat-messages')!;
    oInpu.textContent = PLACEHOLDER;
    historyInit.list && historyInit.render!(msgBox);
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  // 事件绑定
  function bindEvnet(this: any) {
    oBtn.addEventListener('click', sendChat, false);
    oInpu.addEventListener('click', editMsg.bind(this), false);
    oBtnOpenNew.addEventListener('click', openNew, false);
  }

  // 发送信息
  async function sendChat() {
    const sendMsg: string = oInpu.textContent?.replace(/^\s+|\s+$/g, '')!;
    if (!sendMsg || sendMsg === PLACEHOLDER) return;

    initMsgBox(); // 初始化输入框
    const msgObj: ISendMag = sendMsgFix(sendMsg);

    oAI.classList.add('active');

    createMsgBox({
      msgWrapper: msgBox,
      className: 'sent',
      msgObj,
    });
    msgHistoryList.list.push({
      msgType: 'sent',
      msgObj,
    });

    const indexModle = new IndexModel(UID);
    const res: any = await indexModle.getCurrentChat(sendMsg);

    if (!(res.code === 200)) {
      alert('网络错误，请稍后重试');
      location.reload();
      return;
    }

    createMsgBox({
      msgWrapper: msgBox,
      className: 'received',
      msgObj: {
        content: res.data,
        time: res.timestamp,
      },
    });
    oAI.classList.remove('active');

    // 保存当前聊天的信息：UID、信息:[ { className: sent, msgObj } ]
    msgHistoryList.list.push({
      msgType: 'received',
      msgObj: {
        time: res.timestamp,
        content: res.data,
      },
    });

    localStorage.setItem('msgHistory', JSON.stringify(msgHistoryList));
  }

  // 编辑信息
  function editMsg({ target }: any) {
    target.classList.add('active');
    if (target.textContent === PLACEHOLDER) {
      target.textContent = '';
    } else {
      target.textContent = target.textContent;
    }
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  // 初始化信息编辑框
  function initMsgBox() {
    oInpu.textContent = PLACEHOLDER;
    oInpu.classList.remove('active');
  }

  // 开启新聊天
  function openNew() {
    localStorage.removeItem('msgHistory');
    location.reload();
  }

  init();
})(document);

/**
 * 去除前后空格
 * 冻结对象属性
 *
 * get-element-by-id => getElementById
 *
 * arr => string
 *
 * 强缓存 & 协商缓存
 *
 * 大数据处理
 */

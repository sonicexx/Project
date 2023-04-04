// 创建右回复对话框

import heighlight from 'highlight.js';
heighlight.configure({
  ignoreUnescapedHTML: true,
});
import { marked } from 'marked';

export function MsgBoxRe(opt) {
  this.el = document.querySelector(opt.el);
  this.textDelay = opt.textDelay || 200;
  this.tag = opt.ContentTag || 'p';
  this.className = opt.className || 'msg-box';
}
MsgBoxRe.prototype = {
  render(opt) {
    const contentObj = this._init(opt.str);
    const oBox = document.createElement('div');
    oBox.className = this.className;
    const oContent = document.createElement('div');
    oContent.className = 'content';
    const oCreated = document.createElement('p');
    oCreated.className = 'created';

    oCreated.textContent = getTime();
    oBox.appendChild(oContent);
    oBox.appendChild(oCreated);
    this.el.appendChild(oBox);
    this._appendIt(contentObj, oContent);
    const time =
      contentObj
        .filter(item => !item.isScri)
        .map(item => item.content)
        .join().length * this.textDelay;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  },
  _init(str) {
    const nSplit = str.split('```');
    let len = [0];
    const contentObj = nSplit.map((item, index) => {
      const flag = index % 2 !== 0; //是代码
      const content = flag ? '```' + item + '```' : item.replace(/\n\n/g, '');
      len.push(flag ? len[index] : len[index] + item.length);

      return {
        isScri: flag,
        content,
        currentLen: len[index],
      };
    });

    return contentObj;
  },
  _appendIt(obj, oBox) {
    obj.forEach(item => {
      if (item.isScri) {
        const oScribox = document.createElement('p');
        oScribox.className = 'script-box';
        oScribox.style.cssText = 'white-space:pre;';
        const str = marked.parse(item.content);
        oScribox.innerHTML = str;
        heighlight.highlightElement(oScribox);

        setTimeout(() => {
          oBox.appendChild(oScribox);
        }, item.currentLen * this.textDelay);
      } else {
        const temp = item.currentLen * this.textDelay;
        this._printIt({
          el: oBox,
          text: item.content,
          appendDelay: temp,
        });
      }
    });
  },
  _printIt(opt) {
    const { el, text, appendDelay = 0 } = opt;
    let i = 0;
    setTimeout(() => {
      const obox = document.createElement(this.tag);
      const interval = setInterval(() => {
        obox.textContent = obox.textContent.slice(0, i++) + text[i - 1] + '_';
        if (i >= text.length) {
          clearInterval(interval);
          obox.textContent = obox.textContent.slice(0, -1);
        }
      }, this.textDelay);
      el.appendChild(obox);
    }, appendDelay);
  },
};

// 动态滚动
export function DOMObserver(el) {
  this.el = el;
  this.timer = null;
}

DOMObserver.prototype = {
  start() {
    const _this = this;
    this.timer = requestAnimationFrame(function scroll() {
      console.log('dom resize observer');
      _this.el.scrollBy({
        top: _this.el.offsetHeight,
      });
      _this.timer = requestAnimationFrame(scroll);
    });
  },
  stop() {
    console.log('observer stop');
    cancelAnimationFrame(this.timer);
  },
};

// 复制内容
export function copyIt(el) {
  getSelection().selectAllChildren(el);
  return document.execCommand('Copy');
}

// 时间获取
export function getTime() {
  const date = new Date();
  const hour =
    (date.getHours() + '').length <= 1
      ? '0' + date.getHours()
      : date.getHours();
  const minus =
    (date.getMinutes() + '').length <= 1
      ? '0' + date.getMinutes()
      : date.getMinutes();
  return `${date.getMonth() + 1}/${date.getDate()} ${hour}:${minus}`;
}

// 滚动到底部
export function scrollToBtm(el, delay = 0) {
  setTimeout(() => {
    el.scrollBy({
      top: el.scrollHeight,
      behavior: 'smooth',
    });
  }, delay);
}

// 设置 localStroage
export function setStorage(name, obj, type = 'local') {
  if (type === 'local') {
    localStorage.setItem(name, JSON.stringify(obj));
  } else {
    sessionStorage.setItem(name, JSON.stringify(obj));
  }
}

// 找到指定父节点
export function findParentNode(tar, tagName) {
  while ((tar = tar.parentNode)) {
    if (tar.tagName === tagName) {
      return tar;
    }
  }
}

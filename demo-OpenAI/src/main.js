import 'highlight.js/styles/github-dark.css';
import './main.scss';
import './media.scss';
import './asset/js/common';
import Model from './utils/model';
import {
  DOMObserver,
  MsgBoxRe,
  copyIt,
  findParentNode,
  getTime,
  scrollToBtm,
  setStorage,
} from './utils/tools';

(async () => {
  const oApp = document.getElementById('app');
  const oMsaWrapper = document.querySelector('.msg-wrapper');
  scrollToBtm(oMsaWrapper, 100);
  const oMenu = document.querySelector('.menu-cover');
  const oSendContent = document.querySelector('.send-content');
  const oAI = document.querySelector('.ai');
  const oContextList = document.querySelector('.menu-cover .list');
  const oAddContext = document.querySelector('.search-wrapper input');

  const model = new Model();
  let contextList = JSON.parse(
    localStorage.getItem('openai-context-list') || '[]'
  );
  let currentContext = 'default';
  let currentContextId = 0;
  let isLoading = false;

  const init = () => {
    render();
    bindEvent();
  };

  function render() {
    if (contextList.length) {
      const acitve = contextList.filter(item => item.isActive);
      !acitve.length && (contextList[0].isActive = true);

      setStorage('openai-context-list', contextList, 'local');

      currentContext = contextList.find(item => item.isActive).contextName;
      currentContextId = contextList.find(item => item.isActive).id;
    }
    renderHistory();

    oContextList.innerHTML = contextList
      .map(
        item => `
      <li data-id ='${item.id}' class='${item.isActive ? 'active' : ''}'>${
          item.nodeName
        }
      <button id="remove-context-btn">×</button>
      </li>
    `
      )
      .join('');
  }

  function renderHistory() {
    let historyList = '';
    historyList = JSON.parse(
      localStorage.getItem('openai-history-html') || '[]'
    );

    if (!historyList.length) return;

    if (!historyList.find(item => item.currentContext === currentContext)) {
      oMsaWrapper.innerHTML = '';
      return;
    }

    oMsaWrapper.innerHTML = historyList.find(
      item => item.currentContext === currentContext
    ).html;
  }

  function bindEvent() {
    oApp.addEventListener('click', eventDispatch.bind(this), false);

    oAI.addEventListener('click', blink.bind(this), false);
  }

  function blink() {
    oAI.classList.add('active');
    setTimeout(() => {
      oAI.classList.remove('active');
    }, 1000);
  }

  function eventDispatch(...arg) {
    const tar = arg[0].target;
    const tagName = arg[0].target.tagName;
    switch (tagName) {
      case 'BUTTON':
        btnEvent[tar.id](tar);
        break;
      case 'TEXTAREA':
        scrollToBtm(oMsaWrapper, 100);
        break;
      case 'LI':
        toggleActive(tar);
        break;
      default:
        if (tar.className.includes('script-box')) {
          if (copyIt(tar)) {
            tar.classList.add('copyed');
          } else {
            alert('复制失败，请手动复制');
          }
        }
        break;
    }
  }

  function toggleActive(tar) {
    if (currentContextId === +tar.dataset.id) return;
    currentContextId = +tar.dataset.id;
    const oList = document.querySelectorAll('.list li');
    oList.forEach(item => item.classList.remove('active'));
    tar.classList.add('active');

    oMenu.classList.toggle('show');

    contextList = contextList.map(item => {
      item.isActive = false;
      if (+item.id === +tar.dataset.id) {
        currentContext = item.contextName;
        item.isActive = true;
      }
      return item;
    });

    setStorage('openai-context-list', contextList, 'local');
    renderHistory();
    scrollToBtm(oMsaWrapper, 100);
  }

  const btnEvent = {
    ['hide-btn']: () => {
      oMenu.classList.toggle('show');
    },
    ['remove-history-btn']: () => {
      setStorage(currentContext, []);
      let crrentHisoryHTMLList = JSON.parse(
        localStorage.getItem('openai-history-html') || '[]'
      );
      crrentHisoryHTMLList = crrentHisoryHTMLList.map(item => {
        if (item.currentContext === currentContext) {
          item.html = '';
        }
        return item;
      });
      setStorage('openai-history-html', crrentHisoryHTMLList);
      renderHistory();
    },
    ['remove-context-btn']: tar => {
      const target = findParentNode(tar, 'LI');
      const id = target.dataset.id;
      target.remove();
      localStorage.removeItem(currentContext);
      let contentList = JSON.parse(
        localStorage.getItem('openai-context-list') || '[]'
      );
      contentList = contentList.filter(item => item.id !== +id);
      setStorage('openai-context-list', contentList);
      let historyHTMLList = JSON.parse(
        localStorage.getItem('openai-history-html') || '[]'
      );
      historyHTMLList = historyHTMLList.filter(
        item => item.currentContext !== currentContext
      );
      setStorage('openai-history-html', historyHTMLList);

      oMsaWrapper.innerHTML = '';
    },
    ['send-btn']: async () => {
      if (isLoading) return;

      const value = oSendContent.value.trim();
      if (value.length) {
        isLoading = true;
        oAI.classList.add('active');
        oSendContent.value = '';
        msgBoxSe(value);
        let completion = await model.sentChat({
          msg: value,
          context: currentContext,
        });
        oAI.classList.remove('active');
        if (completion.status === 200) {
          sendChat(completion.message);
        } else {
          alert('请求失败');
        }
      }
    },
    ['add-btn']: () => {
      const val = oAddContext.value.trim();
      let valSave = 'openai-';
      oAddContext.value = '';
      if (!val.length) return;
      contextList = JSON.parse(
        localStorage.getItem('openai-context-list') || '[]'
      );

      if (val.charCodeAt() > 255) {
        valSave += val.charCodeAt();
      } else {
        valSave = val;
      }
      if (
        contextList.find(
          item => item.contextName === val || item.contextName === valSave
        )
      ) {
        console.log('命名重复');
        return;
      }

      const contextObj = {
        nodeName: val,
        contextName: valSave.replace(/\s+/g, '-'),
        isActive: contextList.length ? false : true,
        id: new Date().getTime() * Math.floor(Math.random() * 1000),
      };
      appendContextList({
        contextName: val,
        id: contextObj.id,
        isActive: contextObj.isActive,
      });
      contextList.push(contextObj);
      localStorage.setItem('openai-context-list', JSON.stringify(contextList));
    },
  };

  function appendContextList({ contextName, id, isActive }) {
    const oLi = document.createElement('li');
    oLi.className = isActive ? 'active' : '';
    oLi.dataset.id = id;
    oLi.innerHTML = `${contextName}<button id="remove-context-btn">×</button>`;
    oContextList.appendChild(oLi);
  }

  function msgBoxSe(msg) {
    const oMsgBox = document.createElement('div');
    oMsgBox.className = 'send msg-box';
    const oContent = document.createElement('div');
    oContent.className = 'content';
    oContent.textContent = msg;
    const oCreated = document.createElement('p');
    oCreated.className = 'created';
    oCreated.textContent = getTime();
    oMsgBox.appendChild(oContent);
    oMsgBox.appendChild(oCreated);

    oMsaWrapper.appendChild(oMsgBox);
    scrollToBtm(oMsaWrapper);
  }

  init();

  async function sendChat(str) {
    const scroller = new DOMObserver(oMsaWrapper);

    scroller.start();
    const printer = new MsgBoxRe({
      el: '.msg-wrapper',
      textDelay: 150,
      className: 'recieve msg-box',
    });
    let res = await printer.render({ str });
    scroller.stop();

    saveHTML();

    isLoading = false;
  }

  function saveHTML() {
    let historyHTML = JSON.parse(
      localStorage.getItem('openai-history-html') || '[]'
    );
    if (!historyHTML.find(item => item.currentContext === currentContext)) {
      historyHTML.push({
        currentContext,
        html: oMsaWrapper.innerHTML + '',
      });
    } else {
      historyHTML = historyHTML.map(item => {
        if (item.currentContext === currentContext) {
          item.html += oMsaWrapper.innerHTML + '';
        }
        return item;
      });
    }
    setStorage('openai-history-html', historyHTML);
  }
})();

// const str =
//   'AI: 是的，这是一个基本的HTML按钮的代码示例：\n\n```html\n<button type="button">Click me!</button>\n```\n\n该代码将创建一个按钮，当用户单击该按钮时，将出现“Click me！”文本。可以使用CSS样式来修改按钮的外观和位置。是的，这是一个基本的HTML按钮的代码示例：\n\n```html\n<button type="button">Click me!</button>\n```\n\n该代码将创建一个按钮，当用户单击该按钮时，将出现“Click me！”文本。可以使用CSS样式来修改按钮的外观和位置。是的，这是一个基本的HTML按钮的代码示例：\n\n```html\n<button type="button">Click me!</button>\n```\n\n该代码将创建一个按钮，当用户单击该按钮时，将出现“Click me！”文本。可以使用CSS样式来修改按钮的外观和位置。';

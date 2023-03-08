// 取出 tpl 的值，替换数据，返回
// 两个参数：tpl 模板、替换的数据对象
export function tplReplace(template, templateObj) {
  // 利用 replace 方法和正则表达式，在回调函数中替换数据
  return template().replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return templateObj[key.trim()];
  });
}

export function scrollToTop() {
  // 考虑需要在请求完数据再设置滚动条
  // 利用宏任务执行前提条件是微任务都执行完的特性，执行 window.scrollTo
  // 等数据请求完成再执行
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
}

// 为了做页面数据懒加载，将后台返回的数据做进一步处理
// 数据修正方法：将 [ 30条 ] 改成 [ [10条]，[10条], [10条] ]
// data：总数据、count：分割的长度
export function setPageData(data, count) {
  const len = data.length;
  let index = 0;

  let pageData = [];
  while (index < len) {
    pageData.push(data.slice(index, (index += count)));
  }

  return pageData;
}

// 取出请求数据中的图片参数
export function getKeys(data, keyword) {
  // 遍历列表
  data = data.map(item => {
    let keysData = {}; // 存储匹配的值

    let count = 0; // 计数

    // 遍历每个列表项里的对象
    for (let key in item) {
      // key 包含关键字 && 内容不为空
      if (key.includes(keyword) && item[key]) {
        count++; // 计数 + 1
        keysData[key] = item[key]; // 存储当前 key 值
      }
    }

    return { count, keysData };
  });

  return data;
}

// 判断是否滚动到底部，到底部就执行回调函数
export function scrollToBottom(fn) {
  if (_getScrollTop() + _getWindowHeight() >= _getScrollHeight() - 30) fn();
}

export function getItemNode(tar) {
  while ((tar = tar.parentNode)) {
    if (tar.classList[0] === 'news-item') {
      return tar;
    }
  }
}

export function getUrlQueryValue(key) {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  const res = location.search.slice(1).match(reg);

  return res ? decodeURIComponent(res[2]) : '/';
}

// ******** 内部方法 ******** /;

const _getScrollTop = () =>
  window.pageYOffset || //用于FF
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0;

const _getWindowHeight = () =>
  document.documentElement.clientHeight || document.body.clientHeight || 0;

const _getScrollHeight = () =>
  document.documentElement.scrollHeight || document.body.scrollHeight || 0;

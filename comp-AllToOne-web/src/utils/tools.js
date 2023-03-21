// 将 keyword 数据数组化
export function formatJSON(array, key) {
  if (!Object.prototype.toString.call(array).includes('Array')) return;
  return array.filter(item => {
    console.log(item);
    if (item[key]) {
      try {
        item[key] = item[key].split(',');
      } catch (err) {}
    }
    return item;
  });
}

// home 页复制数据
export function homeDataCopy(tar, ori) {
  for (let k in ori) {
    if (!ori.hasOwnProperty(k)) return;
    tar[k] = formatJSON(ori[k], 'keyword');
  }
}

// 后台数据预处理
export function jsonToArr(str) {
  return JSON.parse(str || '[]');
}
export function strToArr(str) {
  return str.split(',');
}
export function replaceToSpace(str) {
  return str.replace(/,/g, ' ');
}

// 去空格
export function trimSpace(str) {
  return str.replace(/\s+/g, '');
}

export function throttle(fn, delay) {
  let t = null;

  return function () {
    clearTimeout(t);
    const _self = this,
      args = arguments;
    t = setTimeout(() => {
      fn.apply(_self, args);
    }, delay);
  };
}

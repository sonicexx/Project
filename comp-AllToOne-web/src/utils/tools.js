// 将 keyword 数据数组化
export function formatJSON(array, key) {
  return array.filter(item => {
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

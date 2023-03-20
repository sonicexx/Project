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

export function homeDataCopy(tar, ori) {
  for (let k in ori) {
    if (!ori.hasOwnProperty(k)) return;
    tar[k] = formatJSON(ori[k], 'keyword');
  }
}

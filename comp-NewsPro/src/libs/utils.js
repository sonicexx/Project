// 取出 tpl 的值，替换数据，返回
// 两个参数：tpl 模板、替换的数据对象
export function tplReplace(template, templateObj) {
  // 利用 replace 方法和正则表达式，在回调函数中替换数据
  return template().replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return templateObj[key.trim()];
  });
}

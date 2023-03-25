import { ITplObj } from '@/typings/utilsType';
export function tplReplace(tpl: Function, tplObj: ITplObj): string {
  return tpl().replace(
    /\{\{(.*?)\}\}/g,
    (node: string, key: string): string => {
      return tplObj[key.trim()];
    }
  );
}

export function scrollToTop() {
  document.documentElement.scrollTo(0, 0);
}

export function findItemNode(
  tar: HTMLElement,
  className: string
): HTMLElement | undefined {
  if (tar.className.split(' ')[0] === className) return tar;
  while ((tar = tar.parentNode as HTMLElement)) {
    if (!tar.className) return;
    if (tar.className.split(' ')[0] === className) return tar;
  }
}

export function getPageList(data: any, count: number) {
  const len: number = data.length;
  let pageList: any = [];
  let index: number = 0;
  while (index < len) {
    pageList.push(data.slice(index, (index += count)));
  }
  return pageList;
}

export function ToBottom(fn: Function) {
  if (_getScrollTop() + _getWindowHeight() >= _getScrollHeight() - 20) {
    fn();
  }
}

export function getUrlQueryValue(key: string) {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  const res = location.search.slice(1).match(reg);

  return res ? decodeURIComponent(res[2]) : '/';
}

//-------------- 内部方法 -----------------//
const _getWindowHeight: () => number = () =>
  document.body.clientHeight || document.documentElement.clientHeight || 0;
const _getScrollTop: () => number = () =>
  document.body.scrollTop || document.documentElement.scrollTop || 0;
const _getScrollHeight: () => number = () =>
  document.documentElement.scrollHeight || document.body.scrollHeight || 0;

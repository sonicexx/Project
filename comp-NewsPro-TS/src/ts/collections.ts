import '@/ts/imports';

import Header from '@/components/Header';
import { HEADER_TITLE } from '@/typings/utilsType';
import { getUrlQueryValue } from '@/libs/utils';
import { STORAGE_NAME, STORAGE_NAME_FOLLOWED } from '@/typings/dataTypes';
import NewsList from '@/components/NewsList';
import NoDataTip from '@/components/NoDataTip';

((doc: Document) => {
  const oApp: HTMLElement = doc.getElementById('app')!;
  let oListWrapper: HTMLElement;

  const path = getUrlQueryValue('path');
  let followedNewsList = JSON.parse(
    localStorage.getItem(STORAGE_NAME_FOLLOWED) || '[]'
  );

  const init = (): void => {
    render();
    renderList();

    bindEvent();
  };

  function render(): void {
    const headerTpl: string = Header.tpl({
      url: 'https://sonicexx.github.io/news-pro-online/',
      title: HEADER_TITLE.collections,
      showLeftIcon: true,
      showRightIcon: false,
    });
    const listWrapperTpl: string = NewsList.listWrapper(44);

    oApp.innerHTML += headerTpl + listWrapperTpl;

    oListWrapper = doc.querySelector('.news-list')!;
  }

  function renderList() {
    if (!followedNewsList.length) {
      NoDataTip.tpl(oListWrapper, '还没有收藏');
      return;
    }

    NewsList.tpl(oListWrapper, followedNewsList, 1);

    NewsList.imgShow();
  }

  function bindEvent() {
    NewsList.bindEvent(oListWrapper, toDetail);
  }

  function toDetail({ pageNum, idx }: { idx: number; pageNum: number }) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(followedNewsList[idx]));
  }
  init();
})(document);

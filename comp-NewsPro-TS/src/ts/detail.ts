import '@/ts/imports';

import Header from '@/components/Header';
import { HEADER_TITLE } from '@/typings/utilsType';
import { getUrlQueryValue } from '@/libs/utils';
import Iframe from '@/components/Iframe';
import { STORAGE_NAME, STORAGE_NAME_FOLLOWED } from '@/typings/dataTypes';
import Follow from '@/components/Follow';

((doc: Document) => {
  const oApp: HTMLElement = doc.getElementById('app')!;
  const path = getUrlQueryValue('path');
  const targetNews = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]');
  let followedNewsList = JSON.parse(
    localStorage.getItem(STORAGE_NAME_FOLLOWED) || '[]'
  );

  const init = (): void => {
    render();
    bindEvent();
  };

  function render(): void {
    const headerTpl: string = Header.tpl({
      url: path,
      title: HEADER_TITLE.detail,
      showLeftIcon: true,
      showRightIcon: false,
    });
    const iframeTpl: string = Iframe.tpl(targetNews.url);
    const followTpl: string = Follow.tpl(
      followedNewsList.find((item: { uniquekey: any }) =>
        item.uniquekey === targetNews.uniquekey ? true : false
      )
    );
    oApp.innerHTML += headerTpl + iframeTpl + followTpl;
  }

  function bindEvent() {
    Follow.bindEvent(setFollow);
  }

  function setFollow(isFollowed: boolean) {
    isFollowed
      ? followedNewsList.push(targetNews)
      : (followedNewsList = followedNewsList.filter(
          (item: any) => item.uniquekey !== targetNews.uniquekey
        ));
    localStorage.setItem(
      STORAGE_NAME_FOLLOWED,
      JSON.stringify(followedNewsList)
    );
  }

  init();
})(document);

import '@/ts/imports';

import Header from '@/components/Header';
import { HEADER_TITLE, IConfig } from '@/typings/utilsType';
import NavBar from '@/components/NavBar';
import { NEWS_TYPE } from '@/data';
import service from '@/services/service';
import { IDataBase, STORAGE_NAME } from '@/typings/dataTypes';
import { getPageList, ToBottom } from '@/libs/utils';
import NewsList from '@/components/NewsList';
import PageLoading from '@/components/PageLoading';
import MoreLoading from '@/components/MoreLoading';
import NoDataTip from '@/components/NoDataTip';

type IDataBaseKey = keyof IDataBase;

((doc: Document) => {
  const oApp: HTMLElement = doc.getElementById('app')!;
  const config: IConfig = {
    type: 'top',
    pageNum: 0,
    isLoading: false,
  };
  const NewsDataPool: Partial<IDataBase> = {};
  let oListWrapper: HTMLElement;
  let t: any;

  const init = async () => {
    render();
    await setNewsList();
    bindEvent();
  };

  function render(): void {
    const headerTpl: string = Header.tpl({
      url: '/',
      title: HEADER_TITLE.TOP,
      showLeftIcon: false,
      showRightIcon: true,
    });
    const navBarTpl = NavBar.tpl(NEWS_TYPE);
    const newsListTpl = NewsList.listWrapper(82);
    oApp.innerHTML += headerTpl + navBarTpl + newsListTpl;
    oListWrapper = doc.querySelector('.news-list')!;
  }

  function renderList(data: any) {
    NewsList.tpl(oListWrapper, data, config.pageNum);
    MoreLoading.remove(oListWrapper);
    NewsList.imgShow();
    config.isLoading = false;
  }

  function bindEvent(): void {
    NavBar.bindEvent(setType);
    window.addEventListener('scroll', ToBottom.bind(null, getMoreList), false);
    NewsList.bindEvent(oListWrapper, toDetail);
  }

  function setType(type: string): void {
    clearTimeout(t);
    oListWrapper.innerHTML = '';
    config.pageNum = 0;
    config.type = type;
    console.log(type);
    setNewsList();
  }

  async function setNewsList() {
    const { type, pageNum } = config;
    if (NewsDataPool[type as IDataBaseKey]) {
      console.log('------------ pool');
      renderList(NewsDataPool[type as IDataBaseKey][pageNum]);
      return;
    }

    // config.isLoading = true;
    console.log('------------ request start');
    PageLoading.add(oListWrapper);

    const data: any = await service.getList(type, 1000);
    if (data.status === 404) {
      NoDataTip.tpl(oListWrapper, data.msg);
      PageLoading.remove(oListWrapper);
      return;
    }
    NewsDataPool[type as IDataBaseKey] = getPageList(data.data.result.data, 10);

    // config.isLoading = false;
    PageLoading.remove(oListWrapper);
    renderList(NewsDataPool[type as IDataBaseKey][pageNum]);
    console.log('------------ request end');
  }

  function getMoreList(): void {
    if (!config.isLoading) {
      clearTimeout(t);
      config.isLoading = true;
      MoreLoading.add(oListWrapper, true);
      t = setTimeout(() => {
        config.pageNum++;
        const { pageNum, type } = config;
        if (pageNum >= NewsDataPool[type as IDataBaseKey].length) {
          MoreLoading.remove(oListWrapper);
          MoreLoading.add(oListWrapper, false);
          return;
        } else {
          console.log('get more list');
          setNewsList();
        }
      }, 1000);
    }
  }

  function toDetail({ pageNum, idx }: { idx: number; pageNum: number }) {
    localStorage.setItem(
      STORAGE_NAME,
      JSON.stringify(NewsDataPool[config.type as IDataBaseKey][pageNum][idx])
    );
  }

  init();
})(document);

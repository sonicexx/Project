export interface IComponentBase {
  name: string;
}

interface ITplObjOrg {
  url: string;
  title: HEADER_TITLE;
  showLeftIcon: string | boolean;
  showRightIcon: string | boolean;
  wrapperW: number;
  itemList: string;
  isCurrent: string | boolean;
  navItemName: string;
  top: number;
  pageNum: number;
  index: number;
  thumbnail_pic_s: string;
  thumbnail_pic_s02: string;
  thumbnail_pic_s03: string;
  author: string;
  date: string;
  uniquekey: string;
  loading: string;
  text: string;
  [key: string]: any;
}

export enum HEADER_TITLE {
  'TOP' = '新闻头条',
  'detail' = '新闻详情',
  'collections' = '我的收藏',
}

export type ITplObj = Partial<ITplObjOrg>;

export interface IConfig {
  type: string;
  pageNum: number;
  isLoading: boolean;
}

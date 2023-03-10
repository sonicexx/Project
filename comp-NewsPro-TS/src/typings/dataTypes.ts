export const STORAGE_NAME = 'targetNews';
export const STORAGE_NAME_FOLLOWED = 'followedNewsList';

export interface INavBarItem {
  type: string;
  title: string;
}

export interface IDataBase {
  top: any;
  yule: any;
  tiyu: any;
  caijing: any;
  guoji: any;
  guonei: any;
  junshi: any;
  keji: any;
  shehui: any;
  shishang: any;
}

export interface IServiceData {
  status: 200 | 404;
  msg: '没有收到数据' | '成功返回数据';
  data: any;
}

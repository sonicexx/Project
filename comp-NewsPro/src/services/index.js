// 存放数据请求的方法

import HTTP from '../libs/http';
import { setPageData } from '../libs/utils';

import datas from '../data/back/top';

class Service extends HTTP {
  getNewsList(type, count) {
    return new Promise((resolve, reject) => {
      // console.log(datas[type]);
      setTimeout(() => {
        resolve(setPageData(datas[type].result.data, count));
      }, 1000);
    });
  }
}

export default new Service(); //导出实例化，导入直接用，不用再实例化

// 存放数据请求的方法

import HTTP from '../libs/http';
import { setPageData } from '../libs/utils';

class Service extends HTTP {
  getNewsList(type, count) {
    return new Promise((resolve, reject) => {
      this.ajax({
        url: 'Juhe/getNewsList',
        type: 'POST',
        dataType: 'JSON',
        data: {
          field: type,
        },
        success(data) {
          const pageData = setPageData(data.result.data, count);
          resolve(pageData);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }
}

export default new Service(); //导出实例化，导入直接用，不用再实例化

import { HTTP } from 'utils/http';
import config from 'utils/config';

// 继承 HTTP 获取后端数据的类，可直接调用里面的方法
class SearchModel extends HTTP {
  searchAction(keyword, cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.SEARCH_ACTION,
        data: {
          keyword,
          cityId,
        },
        success(data) {
          resolve({
            status: 0,
            data,
          });
        },
        error(err) {
          resolve({
            status: -1,
            err,
          });
        },
      });
    });
  }
}

export { SearchModel };

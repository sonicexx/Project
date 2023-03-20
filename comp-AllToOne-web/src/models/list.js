import { HTTP } from 'utils/http';
import config from 'utils/config';

// 继承 HTTP 获取后端数据的类，可直接调用里面的方法
class ListModel extends HTTP {
  getListDatas(field, cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATAS,
        data: {
          field,
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
          });
        },
      });
    });
  }
}

export { ListModel };

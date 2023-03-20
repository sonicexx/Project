import { HTTP } from 'utils/http';
import config from 'utils/config';

// 继承 HTTP 获取后端数据的类，可直接调用里面的方法
class DetailModel extends HTTP {
  getDetailDatas(field, id) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id,
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

export { DetailModel };

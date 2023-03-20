import { HTTP } from 'utils/http';
import config from 'utils/config';

// 继承 HTTP 获取后端数据的类，可直接调用里面的方法
class IndexModel extends HTTP {
  getHomeDatas(cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_HOME_DATAS,
        data: {
          cityId,
        },
        success(data) {
          resolve({
            data,
            status: 0,
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

export { IndexModel };

import { HTTP } from 'utils/http';
import config from 'utils/config';

// 继承 HTTP 获取后端数据的类，可直接调用里面的方法
class IndexModel extends HTTP {
  getHomeData() {
    this.axiosPost({
      // options
    });
  }
}

export { IndexModel };

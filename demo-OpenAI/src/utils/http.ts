import { IAxiosParams, IHttp } from '@/typings/commonTypings';

import axios from 'axios';
import API from './config';

class HTTP implements IHttp {
  axiosPost(opt: IAxiosParams<string>) {
    axios({
      method: 'post',
      url: API.SEND_CHAT,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        apiKey: API.API_KEY, // openai 网站上的 personal api key
        sessionId: opt.data.sessionId, // 后端会根据这个 id 进行上下文分析，最好使用 crypto.randomUUID()
        content: opt.data.content,
      }),
    })
      .then(({ data }) => {
        opt.success(data);
      })
      .catch(err => {
        opt.error(err);
      });
  }
}

export default HTTP;

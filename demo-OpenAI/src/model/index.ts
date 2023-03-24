import { IAxiosParams } from '@/typings/commonTypings';
import HTTP from '@/utils/http';

class IndexModel extends HTTP {
  id: string;
  constructor(id: string) {
    super();
    this.id = id;
  }
  getCurrentChat(content: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.axiosPost({
        data: {
          sessionId: this.id,
          content,
        },
        success(data) {
          resolve(data as any);
        },
        error(err) {
          resolve(err as any);
        },
      });
    });
  }
}

export default IndexModel;

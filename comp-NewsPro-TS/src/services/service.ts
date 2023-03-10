import DATA_BASE from '@/data/back';
import { IDataBase, IServiceData } from '@/typings/dataTypes';

class Services {
  public getList(type: string, delay: number = 1000) {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(<IServiceData>{
          status: 200,
          msg: '成功返回数据',
          data: DATA_BASE[type as keyof IDataBase],
        });
      }, delay);
    });
  }
}

export default new Services();

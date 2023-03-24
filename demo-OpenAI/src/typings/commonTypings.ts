export interface IHttp {
  axiosPost: (opt: IAxiosParams<string>) => any;
}

export interface IConfig {
  SEND_CHAT: CONFIG_API;
  API_KEY: CONFIG_API;
}

export enum CONFIG_API {
  SEND_CHAT = 'api/v1/chat/completions',
  API_KEY = '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',
}

export interface IAxiosParams<T> {
  data: {
    sessionId: T;
    content: T;
  };
  success: (data: Object) => void;
  error: (err: Object) => void;
}

export interface ISendMag {
  time: number;
  content: string;
}

export interface IMsgBoxPara {
  msgWrapper: HTMLElement;
  className: string;
  msgObj: ISendMag;
}

export interface ILocalStory {
  UID: string;
  list: Array<{
    msgType: string;
    msgObj: ISendMag;
  }>;
  render?: Function;
}

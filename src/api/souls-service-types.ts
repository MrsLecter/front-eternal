export interface ISoulsResponse {
  // souls: ISoulInfo[];
  status: number;
  message: {
    history: boolean;
    questioinsamount: string | number;
  };
}

export interface ISoulInfo {
  id: number;
  name: string;
  about: string;
  photo: string;
}

export interface ISendMessageResponse {
  message: { questioinsamount: string };
  status: number;
}

export interface IChatHistoryResponse {
  status: number;
  message: {
    user: number;
    soul: number;
    chathistory: { [key: string]: string }[];
  };
}

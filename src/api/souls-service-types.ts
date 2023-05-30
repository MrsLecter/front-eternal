export interface ISoulsResponse {
  souls: ISoulInfo[];
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

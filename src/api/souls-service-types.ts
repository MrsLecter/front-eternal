export interface ISoulsResponse {
  souls: ISoulInfo[];
}

export interface ISoulInfo {
  id: number;
  name: string;
  about: string;
  photo: string;
}

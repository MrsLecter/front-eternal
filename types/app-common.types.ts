export interface ISoulsData {
  id: number;
  name: string;
  about: string;
  image: string;
  background: string;
  placeholder: string;
}

export interface IUserData {
  id: number;
  email: string;
  name: string | null;
  phone: string | null;
  nextPayment?: Date | string;
  questionsAmount: number | string;
  readAbout: boolean;
  shareLink: boolean;
  accessToken?: string;
  refreshToken?: string;
}

export interface ILocalStorageData {
  id: number;
  email: string;
  name: string | null;
  phone: string | null;
  nextpayment: string | null | Date;
  questionsamount: number | string;
  readabout: boolean;
  accessToken: string;
  expiresIn?: Date | null;
  refreshToken: string;
  shareLink: boolean;
  isGoogleAuth: boolean;
}

export type TUserQuestion = "qone" | "qtwo" | "qthree" | "intro";

export interface IIndividualsData {
  id: number;
  name: string;
  about: string;
  image: string;
  background: string;
}

export interface IUserData {
  id: number;
  email: string;
  name?: string;
  phone?: string;
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
  refreshToken: string;
  shareLink: string;
}

export type TUserQuestion = "qone" | "qtwo" | "qthree" | "intro";

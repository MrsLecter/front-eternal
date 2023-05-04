export interface IIndividualsData {
  id: number;
  name: string;
  about: string;
  image: string;
  background: string;
}

export interface IUserData {
  id?: number;
  email: string;
  name?: string;
  phone?: string;
  nextPayment?: string;
  questionsAmount: number;
  smsAvailable: boolean;
  readAbout: boolean;
}

export interface ISignupResponse {
  message: {
    accesstoken: string;
    email: string;
    id: number;
    refreshtoken: string;
  };
  status: number;
}

export interface IResetPasswordResponse {
  status: number;
  message:
    | {
        email: string;
        emailcodesend: boolean;
      }
    | string;
}

export interface ISendNewPasswordResponse {
  status: number;
  message: string;
}

export interface ISigninResponse {
  status: number;
  message: {
    id: number;
    name: string | null;
    accesstoken: string;
    refreshtoken: string;
    email: string;
    nextpayment: null | string;
    phone: null | string;
    questionsamount: number;
    readabout: boolean;
  };
}

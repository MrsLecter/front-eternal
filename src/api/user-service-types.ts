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
  response?: {
    status: number;
  };
}

export interface ISigninResponse {
  status: number;
  message: {
    id: number;
    name: string | null;
    accesstoken: string;
    refreshtoken: string;
    email: string;
    nextpayment: Date;
    phone: null | string;
    questionsamount: number | string;
    readabout: boolean;
    sharelink: boolean;
  };
  response?:{
    status: number;
  }

}

export interface ISigninErrorResponse {
  response?: {
    status: number;
  };
}

export interface IReadaboutResponse {
  message: {
    id: number;
    readabout: number;
  };
  status: number;
}

export interface IChangeDetailsResponse {
  message: {
    email: string;
    id: string;
    name: string;
    phone: string;
  };
  status: number;
}

export interface IGoogleAuthResponse {
  status: number;
  message: {
    accesstoken: string;
    email: string;
    id: number;
    name?: string | null;
    nextpayment?: string | Date;
    phone?: string | null;
    questionsamount?: string | number;
    readabout?: number;
    sharelink?: boolean;
    refreshtoken: string;
  };
}

export interface ISetProPlanResponse {
  message: {
    subscription: string;
    iserid: number;
  };
  status: number;
}

export interface ISetFreePlanResponse {
  message: {
    id: number;
    questions: number;
  };
  status: number;
}

export interface ICancellSubscriptionResponse {
  message: {
    subscription: string;
    userid: number;
  };
  status: number;
}

export interface IChangePasswordResponse {
  status: number;
  message: string;
}

export interface IUpdateSubscriptionResponse {
  status: number;
  message: {
    subscription: string;
    userid: number;
  };
}

export interface IRefreshRequestResponse {
  status: number;
  message: {
    accesstoken: string;
    refreshtoken: string;
  };
}

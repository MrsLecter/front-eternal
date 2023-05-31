import { gql } from "@apollo/client";
import client from "./apollo-client";
import axios, { AxiosResponse } from "axios";
import {
  REGISTRATION_URL,
  REFRESH_URL,
  REQUEST_HEADERS_POST,
  PROFILE_DETAILS_URL,
  LOGIN_URL,
  RESET_PASSWORD_URL,
  SET_NEW_PASSWORD,
  SET_READABOUT_URL,
  SET_PRO_SUBSCRIPTION,
  GOOGLE_AUTH_URL,
  CANCEL_SUBSCRIPTION_URL,
  UPDATE_SUBSCRIPTION_URL,
  SET_FREE_SUBSCRIPTION,
  CHANGE_PASSWORD,
} from "@/constants/common";
import localStorageHandler from "@/utils/local-storage-hendler";
import axiosInstance from "./custom-axios-instance";
import {
  ISignupResponse,
  ISigninResponse,
  IResetPasswordResponse,
  ISendNewPasswordResponse,
  IReadaboutResponse,
  IChangeDetailsResponse,
  IGoogleAuthResponse,
  ICancellSubscriptionResponse,
  ISetProPlanResponse,
  ISetFreePlanResponse,
  IChangePasswordResponse,
  IUpdateSubscriptionResponse,
  IRefreshRequestResponse,
} from "./user-service-types";

class UserService {
  public async makeRefreshRequest(): Promise<IRefreshRequestResponse> {
    try {
      const refreshToken = localStorageHandler.getRefreshToken();
      const instance = axios.create({
        baseURL: REFRESH_URL,
        headers: { Authorization: "Bearer " + refreshToken },
      });
      return await instance.post("/");
    } catch (err: any) {
      console.error("An error occured in post photos request: ", err);
      return err;
    }
  }

  public async signup({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const response = await axios.post<ISignupResponse>(
        REGISTRATION_URL,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async googleAuth(idToken: string) {
    try {
      const response = await axios.post<IGoogleAuthResponse>(
        GOOGLE_AUTH_URL,
        {
          idToken,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async signin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const response = await axios.post<ISigninResponse>(
        LOGIN_URL,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async resetPassword({ email }: { email: string }) {
    try {
      const response = await axiosInstance().post<IResetPasswordResponse>(
        RESET_PASSWORD_URL,
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async restoreForgottenPassword({
    code,
    newpassword,
  }: {
    code: string;
    newpassword: string;
  }) {
    try {
      const response = await axios.post<ISendNewPasswordResponse>(
        SET_NEW_PASSWORD,
        {
          code,
          newpassword,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async changePassword({
    passwordOld,
    passwordNew,
  }: {
    passwordOld: string;
    passwordNew: string;
  }) {
    try {
      const response = await axiosInstance().post<IChangePasswordResponse>(
        CHANGE_PASSWORD,
        {
          password: passwordOld,
          newpassword: passwordNew,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );

      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async about() {
    try {
      const response = await axiosInstance().post<IReadaboutResponse>(
        SET_READABOUT_URL,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async addProfileDetails({
    name,
    email,
    phone,
  }: {
    name: string;
    email: string;
    phone: string;
  }) {
    try {
      const response = await axiosInstance().post<IChangeDetailsResponse>(
        PROFILE_DETAILS_URL,
        {
          name,
          email,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async setProPlan(cardEncrypted: string) {
    try {
      const response = await axiosInstance().post<ISetProPlanResponse>(
        SET_PRO_SUBSCRIPTION,
        {
          codedCard: cardEncrypted,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async setFreePlan() {
    try {
      const response = await axiosInstance().post<ISetFreePlanResponse>(
        SET_FREE_SUBSCRIPTION,
        {},
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async cancelSubscription() {
    try {
      const response = await axiosInstance().post<ICancellSubscriptionResponse>(
        CANCEL_SUBSCRIPTION_URL,
        {},
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async updateSubscription(cardEncrypted: string) {
    try {
      const response = (
        await axiosInstance().post
      )<IUpdateSubscriptionResponse>(
        UPDATE_SUBSCRIPTION_URL,
        {
          codedCard: cardEncrypted,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }
}

const userService = new UserService();
export default userService;
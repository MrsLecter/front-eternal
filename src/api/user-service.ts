import axios from "axios";
import {
  REGISTRATION_URL,
  REFRESH_URL,
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
} from "@/constants/routes-api";
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
      const refreshToken: IRefreshRequestResponse =
        localStorageHandler.getRefreshToken();
      const instance = axios.create({
        baseURL: REFRESH_URL,
        headers: { Authorization: "Bearer " + refreshToken },
      });
      return await instance.post("/");
    } catch (err: any) {
      console.error("An error occured in makeRefreshRequest: ", err);
      return err;
    }
  }

  public async signup({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<ISignupResponse> {
    try {
      const response: ISignupResponse = await axios.post(
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
      console.error("An error occured in signup request: ", err);
      return err;
    }
  }

  public async googleAuth(idToken: string): Promise<IGoogleAuthResponse> {
    try {
      const response: IGoogleAuthResponse = await axios.post(
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
      console.error("An error occured in googleAuth request: ", err);

      return err;
    }
  }

  public async signin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<ISigninResponse> {
    try {
      const response: ISigninResponse = await axios.post(
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
      console.error("An error occured in signin request: ", err);
      return err;
    }
  }

  public async resetPassword({
    email,
  }: {
    email: string;
  }): Promise<IResetPasswordResponse> {
    try {
      const response: IResetPasswordResponse = await axiosInstance().post(
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
      console.error("An error occured in resetPassword request: ", err);
      return err;
    }
  }

  public async restoreForgottenPassword({
    code,
    newpassword,
  }: {
    code: string;
    newpassword: string;
  }): Promise<ISendNewPasswordResponse> {
    try {
      const response: ISendNewPasswordResponse = await axios.post(
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
      console.error(
        "An error occured in restoreForgottenPassword request: ",
        err
      );
      return err;
    }
  }

  public async changePassword({
    passwordOld,
    passwordNew,
  }: {
    passwordOld: string;
    passwordNew: string;
  }): Promise<IChangePasswordResponse> {
    try {
      const response: IChangePasswordResponse = await axiosInstance().post(
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
      console.error("An error occured in changePassword request: ", err);
      return err;
    }
  }

  public async about(): Promise<IReadaboutResponse> {
    try {
      const response: IReadaboutResponse = await axiosInstance().post(
        SET_READABOUT_URL,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in about request: ", err);
      return err;
    }
  }

  public async addProfileDetails({
    name,
    email,
    phone,
  }: {
    name: string | null;
    email: string;
    phone: string;
  }): Promise<IChangeDetailsResponse> {
    try {
      const response: IChangeDetailsResponse = await axiosInstance().post(
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
      console.error("An error occured in addProfileDetails request: ", err);
      return err;
    }
  }

  public async setProPlan(cardEncrypted: string): Promise<ISetProPlanResponse> {
    try {
      const response: ISetProPlanResponse = await axiosInstance().post(
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
      console.error("An error occured in setProPlan request: ", err);
      return err;
    }
  }

  public async setFreePlan(): Promise<ISetFreePlanResponse> {
    try {
      const response: ISetFreePlanResponse = await axiosInstance().post(
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
      console.error("An error occured in setFreePlan request: ", err);
      return err;
    }
  }

  public async cancelSubscription(): Promise<ICancellSubscriptionResponse> {
    try {
      const response: ICancellSubscriptionResponse = await axiosInstance().post(
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
      console.error("An error occured in cancelSubscription request: ", err);
      return err;
    }
  }

  public async updateSubscription(
    cardEncrypted: string
  ): Promise<IUpdateSubscriptionResponse> {
    try {
      const response: IUpdateSubscriptionResponse = await axiosInstance().post(
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
      console.error("An error occured in updateSubscription request: ", err);
      return err;
    }
  }
}

const userService = new UserService();
export default userService;

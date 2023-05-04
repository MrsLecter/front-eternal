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
} from "@/constants/common";
import localStorageHandler from "@/utils/local-storage-hendler";
import axiosInstance from "./custom-axios-instance";
import {
  ISignupResponse,
  ISigninResponse,
  IResetPasswordResponse,
  ISendNewPasswordResponse,
} from "./user-service-types";

class UserService {
  public async makeRefreshRequest() {
    try {
      const response = await axios({
        method: "post",
        url: REFRESH_URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageHandler.getRefreshToken()}`,
        },
      });
      return response;
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
            // ...REQUEST_HEADERS_POST,
          },
        }
      );
      // console.log("signup response", response);
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
            // ...REQUEST_HEADERS_POST,
          },
        }
      );
      // console.log("signup response", response);
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
            // ...REQUEST_HEADERS_POST,
          },
        }
      );
      // console.log("signup response", response);
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }

  public async setNewPassword({
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
            // ...REQUEST_HEADERS_POST,
          },
        }
      );
      // console.log("signup response", response);
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
      const response = await axiosInstance().post(
        PROFILE_DETAILS_URL,
        {
          name,
          email,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            // ...REQUEST_HEADERS_POST,
          },
        }
      );
      // console.log("signup response", response);
      return response;
    } catch (err: any) {
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }
}

const userService = new UserService();
export default userService;

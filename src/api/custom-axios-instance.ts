import localStorageHandler from "@/utils/local-storage-hendler";
import axios, { AxiosResponse } from "axios";
import userService from "./user-service";
import { APP_ROUTES } from "@/constants/common";

const axiosInstance = () => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use((config) => {
    config.headers["Authorization"] = localStorageHandler.getAccessToken();
    return config;
  });

  const onSuccess = (response: AxiosResponse) => response.data;

  const onError = async (error: any) => {
    if (error.response.status === 404) {
      alert("Error: there is no such user! Try to register first");
    }
    if (error.response.status === 401) {
      localStorageHandler.deleteUsersData();
      window.location.replace(APP_ROUTES.Signin);
    }
    if (error.response.status === 403) {
      const newTokens = await userService.makeRefreshRequest();
      if (newTokens.status === 200) {
        localStorageHandler.updateTokens({
          accessToken: newTokens.data.accesstoken,
          refreshToken: newTokens.data.refreshtoken,
        });
        return axiosInstance(error.config);
      } else {
        localStorageHandler.deleteUsersData();
        window.location.replace(APP_ROUTES.Home);
      }
    } else {
      return error.response;
    }
  };
  axiosInstance.interceptors.response.use(onSuccess, onError);
  return axiosInstance;
};

export default axiosInstance;

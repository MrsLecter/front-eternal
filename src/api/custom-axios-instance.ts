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
      alert("Error: no data available!");
    }
    if (error.response.status === 406) {
      console.error("Error: An  error occured! Try again");
    }
    if (error.response.status === 403 || error.response.status === 401) {
      const newTokens = await userService.makeRefreshRequest();

      if (newTokens.status === 201) {
        localStorageHandler.updateTokens({
          accessToken: newTokens.data.message.accesstoken,
          refreshToken: newTokens.data.message.refreshtoken,
        });
        return axiosInstance(error.config);
      } else {
        if (localStorageHandler.getGoogleAuth()) {
          localStorageHandler.deleteUsersData();
          window.location.replace(APP_ROUTES.Home);
        }
      }
    } else {
      alert("Error! Try again");
      return error.response;
    }
  };
  axiosInstance.interceptors.response.use(onSuccess, onError);
  return axiosInstance;
};

export default axiosInstance;

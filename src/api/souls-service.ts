import { APP_ROUTES, ASK_QUESTION, GET_HISTORY_URL } from "@/constants/common";
import { IChatHistoryResponse, ISoulsResponse } from "./souls-service-types";
import axios, { AxiosResponse } from "axios";
import axiosInstance from "./custom-axios-instance";
import localStorageHandler from "@/utils/local-storage-hendler";

class SoulsService {
  public async sendQuestion({
    question,
    soulid,
  }: {
    question: string;
    soulid: string;
  }): Promise<ISoulsResponse> {
    try {
      const response: ISoulsResponse = await axiosInstance().post(
        ASK_QUESTION,
        {
          question,
          soulid,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in sendQuestion request: ", err);
      return err;
    }
  }

  public async getHistory({
    page,
    soulid,
  }: {
    page: number;
    soulid: string;
  }): Promise<IChatHistoryResponse> {
    try {
      const response: IChatHistoryResponse = await axiosInstance().post(
        GET_HISTORY_URL + `/${page}`,
        {
          soulid,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      return response;
    } catch (err: any) {
      console.error("An error occured in getHistory request: ", err);
      localStorageHandler.deleteUsersData();
      window.location.replace(APP_ROUTES.Home);
      return err;
    }
  }
}

const soulsService = new SoulsService();
export default soulsService;

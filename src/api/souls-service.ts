import {  ASK_QUESTION, GET_HISTORY_URL } from "@/constants/common";
import { IChatHistoryResponse, ISoulsResponse } from "./souls-service-types";
import axiosInstance from "./custom-axios-instance";

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
    soulid,
  }: {
    soulid: string;
  }): Promise<IChatHistoryResponse> {
    try {
      const response: IChatHistoryResponse = await axiosInstance().post(
        GET_HISTORY_URL,
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
      return err;
    }
  }
}

const soulsService = new SoulsService();
export default soulsService;

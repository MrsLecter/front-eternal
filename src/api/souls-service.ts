import { ASK_QUESTION } from "@/constants/common";
import { ISoulsResponse } from "./souls-service-types";
import axios from "axios";
import axiosInstance from "./custom-axios-instance";

class SoulsService {
  public async sendQuestion({
    question,
    soulid,
  }: {
    question: string;
    soulid: string;
  }) {
    try {
      const response = await axiosInstance().post<ISoulsResponse>(
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
      console.error("An error occured in registration request: ", err);
      return err;
    }
  }
}

const soulsService = new SoulsService();
export default soulsService;

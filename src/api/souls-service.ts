import { gql } from "@apollo/client";
import client from "./apollo-client";
import { ApolloQueryResult } from "@apollo/client";
import { ISoulsResponse } from "./souls-service-types";
import axiosInstance from "./custom-axios-instance";
import { ASK_QUESTION } from "@/constants/common";

// const getAllSoulsQuery = gql`
//   query getAllSouls {
//     souls {
//       id
//       name
//       about
//       photo
//     }
//   }
// `;

// const soulsQuery = {
//   getAllSouls: getAllSoulsQuery,
// };

// export default soulsQuery;

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

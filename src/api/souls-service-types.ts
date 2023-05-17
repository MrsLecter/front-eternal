import { gql } from "@apollo/client/core";

export interface ISoulsResponse {
  souls: ISoulInfo[];
}

export interface ISoulInfo {
  id: number;
  name: string;
  about: string;
  photo: string;
}

export interface ISendMessageResponse {
  message: { questioinsamount: string };
  status: number;
}

// export const getGreeting = (individual: string) => {
//   const GET_GREETING = gql`
//     query GetLocations {
//       souls(name: "${individual}") {
//         name
//         about
//         qone
//       }
//     }
//   `;
//   return GET_GREETING;
// };

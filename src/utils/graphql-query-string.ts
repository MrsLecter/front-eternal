import { gql } from "@apollo/client";
import { DocumentNode } from "graphql";

export const getFreeAnswerQueryString = ({
  questionType,
}: {
  questionType: "intro" | "qone" | "qtwo" | "qthree";
}): DocumentNode => {
  return gql`
    query getAnswer($input: Int) {
      souls(id: $input) {
         ${questionType}
      }
    }
  `;
};

import { gql } from "@apollo/client";
import client from "./apollo-client";
import { ApolloQueryResult } from "@apollo/client";
import { ISoulsResponse } from "./souls-service-types";

const getAllSoulsQuery = gql`
  query getAllSouls {
    souls {
      id
      name
      about
      photo
    }
  }
`;

const soulsQuery = {
  getAllSouls: getAllSoulsQuery,
};

export default soulsQuery;

import { API_URL } from "@/constants/routes-api";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { baseURL } from "./contant";

export const apolloClient = new ApolloClient({
    uri: baseURL,
    cache: new InMemoryCache(),
  });
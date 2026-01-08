import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

const link = new HttpLink({
  uri: "http://localhost:4000/",
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

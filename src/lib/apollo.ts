import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHCMS_CONTENT_API,
  cache: new InMemoryCache(),
});

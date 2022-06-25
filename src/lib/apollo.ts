import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHCMS_CONTENT_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_GRAPHCMS_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

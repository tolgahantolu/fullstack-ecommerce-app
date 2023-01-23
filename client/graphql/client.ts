import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_BACKEND_API,
    }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined",
  });
};

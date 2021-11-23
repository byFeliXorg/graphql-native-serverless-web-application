import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
 uri: "https://graphql.fauna.com/graphql",
 headers: {
   authorization: `Bearer fnAEBUAm-mACB7_ajbQfrCG0RxIWs_NTgTZlX1EQ`,
 },
 cache: new InMemoryCache(),
});
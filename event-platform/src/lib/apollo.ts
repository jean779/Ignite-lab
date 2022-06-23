import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cliente = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qabftb3gc201xx1luc5ehx/master',
    cache: new InMemoryCache()
})
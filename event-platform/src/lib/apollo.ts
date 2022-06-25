import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cliente = new ApolloClient({
    uri: import.meta.env.VITE_MASTER_URL,
    headers:{
        'Autorization' : `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
    },
    cache: new InMemoryCache()
})
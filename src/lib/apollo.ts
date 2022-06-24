import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qc4lu63kql01xx3r005mj8/master',
  cache: new InMemoryCache(),
});

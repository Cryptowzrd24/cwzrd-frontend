import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// interface QueryParamsType {
//   coinId: string | undefined;
//   range?: string;
// }

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const nftDetailsApi = createApi({
  reducerPath: 'nftDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    fetchNftTrendingData: builder.query({
      query: ({ period }) => {
        const url = `/api/nft/trending?platformAlias=polygon&contract=0xa28640d322019217ecd27ebf90cd27b1978c6038&period=${period}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
    fetchNftScatterData: builder.query({
      query: ({ period }) => {
        const url = `/api/nft/scatter?platformAlias=polygon&contract=0xa28640d322019217ecd27ebf90cd27b1978c6038&period=${period}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
  }),
});
export const { useFetchNftTrendingDataQuery, useFetchNftScatterDataQuery } =
  nftDetailsApi;

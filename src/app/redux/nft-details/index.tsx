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
      query: ({ period, alias, contract_id }) => {
        const url = `/api/nft/trending?platformAlias=${alias}&contract=${contract_id}&period=${period}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
    fetchNftScatterData: builder.query({
      query: ({ period, alias, contract_id }) => {
        const url = `/api/nft/scatter?platformAlias=${alias}&contract=${contract_id}&period=${period}`;
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

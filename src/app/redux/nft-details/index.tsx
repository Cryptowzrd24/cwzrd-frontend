import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QueryParamsType {
  period?: number;
  alias?: string;
  contract_id: string;
  tokenId?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const nftDetailsApi = createApi({
  reducerPath: 'nftDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    fetchNftTrendingData: builder.query({
      query: ({ period, alias, contract_id }: QueryParamsType) => {
        const url = `/api/nft/trending?platformAlias=${alias}&contract=${contract_id}&period=${period}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
    fetchNftScatterData: builder.query({
      query: ({ period, alias, contract_id }: QueryParamsType) => {
        const url = `/api/nft/scatter?platformAlias=${alias}&contract=${contract_id}&period=${period}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
    fetchNftDetails: builder.mutation({
      query: ({ tokenId, alias, contract_id }: QueryParamsType) => {
        const url = `api/nft/item-details/`;
        return {
          url,
          method: 'POST',
          body: {
            contract: contract_id,
            platformAlias: alias,
            tokenIds: [tokenId],
          },
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
});
export const {
  useFetchNftTrendingDataQuery,
  useFetchNftScatterDataQuery,
  useFetchNftDetailsMutation,
} = nftDetailsApi;

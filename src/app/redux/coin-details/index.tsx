import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QueryParamsType {
  coinId: string | undefined;
  range?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const coinDetailsApi = createApi({
  reducerPath: 'coinDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    fetchCoinDetailsData: builder.query({
      query: ({ coinId }: QueryParamsType) => {
        const url = `/detail/coin/?coin_id=${coinId}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
    fetchCoinDetailsGraphData: builder.query({
      query: ({ coinId, range }: QueryParamsType) => {
        const url = `detail/chart/?id=${coinId}&range=${range}`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
    fetchLiveMarketCoinData: builder.query({
      query: () => {
        const url = `detail/related/`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
  }),
});
export const {
  useFetchCoinDetailsDataQuery,
  useFetchCoinDetailsGraphDataQuery,
  useFetchLiveMarketCoinDataQuery,
} = coinDetailsApi;

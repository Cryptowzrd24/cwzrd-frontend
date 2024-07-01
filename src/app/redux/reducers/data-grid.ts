import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QueryParamsType {
  start: number;
  pageSize: number;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/coins/?offset=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchHighestVolumeCoinsData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/highest-volume/?offset=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchNewCoinData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/new?start=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchMostVisitedData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/most-visited?start=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchTrendingData: builder.query({
      query: () => {
        return {
          url: `/trending/latest`,
          method: 'GET',
        };
      },
    }),
    fetchGainersLosersData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/gainers-losers/?start=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
  }),
});
export const {
  useFetchCoinDataQuery,
  useFetchHighestVolumeCoinsDataQuery,
  useFetchNewCoinDataQuery,
  useFetchMostVisitedDataQuery,
  useFetchTrendingDataQuery,
  useFetchGainersLosersDataQuery,
} = dataGridApi;

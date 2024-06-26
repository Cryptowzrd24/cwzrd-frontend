import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Key } from './apiKey';

interface QueryParamsType {
  start: number;
  pageSize: number;
}

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${pageSize}`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
    fetchNewCoinData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/new?start=${start}&limit=${pageSize}`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
    fetchMostVisitedData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/most-visited?start=${start}&limit=${pageSize}`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
    fetchTrendingData: builder.query({
      query: () => {
        return {
          url: `/trending/latest`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
    fetchGainersLosersData: builder.query({
      query: (sortOrder: string) => {
        return {
          url: `/trending/gainers-losers?sort_dir=${sortOrder}`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
  }),
});
export const {
  useFetchCoinDataQuery,
  useFetchNewCoinDataQuery,
  useFetchMostVisitedDataQuery,
  useFetchTrendingDataQuery,
  useFetchGainersLosersDataQuery,
} = dataGridApi;

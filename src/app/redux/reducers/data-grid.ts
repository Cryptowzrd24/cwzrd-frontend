import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Key } from './apiKey';

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: () => {
        return {
          url: `/listings/latest`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
    fetchNewCoinData: builder.query({
      query: () => {
        return {
          url: `/listings/new`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
    fetchMostVisitedData: builder.query({
      query: () => {
        return {
          url: `/trending/most-visited`,
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
  }),
});
export const {
  useFetchCoinDataQuery,
  useFetchNewCoinDataQuery,
  useFetchMostVisitedDataQuery,
  useFetchTrendingDataQuery,
} = dataGridApi;

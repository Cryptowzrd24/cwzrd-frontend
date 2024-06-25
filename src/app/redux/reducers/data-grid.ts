import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Key } from './apiKey';

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://aa48-39-58-109-113.ngrok-free.app/api',
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: ({ start, pageSize }: { start: number; pageSize: number }) => {
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
      query: ({ start, pageSize }: { start: number; pageSize: number }) => {
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
      query: ({ start, pageSize }: { start: number; pageSize: number }) => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/most-visited?start=${start}&limit=${pageSize}`,
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
} = dataGridApi;

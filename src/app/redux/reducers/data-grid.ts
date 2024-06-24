import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Key } from './apiKey';

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://aa48-39-58-109-113.ngrok-free.app/api',
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: () => {
        return {
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
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
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/new`,
          method: 'GET',
          headers: {
            'X-CMC_PRO_API_KEY': Key,
          },
        };
      },
    }),
  }),
});
export const { useFetchCoinDataQuery, useFetchNewCoinDataQuery } = dataGridApi;

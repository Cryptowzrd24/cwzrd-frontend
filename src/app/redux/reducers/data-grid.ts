import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QueryParamsType {
  start: number;
  pageSize: number;
  filters?: { [key: string]: string };
  time_period?: string; // Add this line to include volume in the type
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: ({ start, pageSize, filters }: QueryParamsType) => {
        const queryString = new URLSearchParams({
          offset: start.toString(),
          limit: pageSize.toString(),
          ...filters,
        }).toString();
        return {
          url: `/api/coins/?${queryString}`,
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
          url: `/api/new-coins/?offset=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchSpotlightData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/spotlight/?offset=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchDefiCoinsData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/defi/?offset=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchMostVisitedData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/most-visited/?offset=${start}&limit=${pageSize}`,
          method: 'GET',
        };
      },
    }),
    fetchTrendingData: builder.query({
      query: ({ start, pageSize, time_period }: QueryParamsType) => {
        return {
          url: `/api/trending/?offset=${start}&limit=${pageSize}&time_period=${time_period}`,
          method: 'GET',
        };
      },
    }),
    fetchGainersLosersData: builder.query({
      query: ({ start, pageSize }: QueryParamsType) => {
        return {
          url: `/api/gainers-losers/?offset=${start}&limit=${pageSize}`,
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
  useFetchSpotlightDataQuery,
  useFetchDefiCoinsDataQuery,
  useFetchMostVisitedDataQuery,
  useFetchTrendingDataQuery,
  useFetchGainersLosersDataQuery,
} = dataGridApi;

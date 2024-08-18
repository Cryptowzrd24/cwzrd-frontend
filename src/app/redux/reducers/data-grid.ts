import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QueryParamsType {
  start: number;
  pageSize: number;
  filters?: { [key: string]: string };
  time_period?: string;
  searchString?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const dataGridApi = createApi({
  reducerPath: 'dataGridApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    fetchCoinData: builder.query({
      query: ({ start, pageSize, filters, searchString }: QueryParamsType) => {
        const queryString = new URLSearchParams({
          offset: start.toString(),
          limit: pageSize.toString(),
          ...filters,
        }).toString();
        const url = `/api/coins/?${queryString}${searchString ? `&name=${searchString}` : ''}`;
        return {
          url,
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
    fetchFavoritesData: builder.query({
      query: ({ id }: { id: string }) => {
        console.log(id);
        return {
          url: `/api/coins-by-ids/?coin_ids=${id}`,
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
      query: ({ start, pageSize, searchString }: QueryParamsType) => {
        return {
          url: `/api/defi/?offset=${start}&limit=${pageSize}${searchString ? `&name=${searchString}` : ''}`,
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
    fetchChainData: builder.query({
      query: ({ start, pageSize, searchString }: QueryParamsType) => {
        return {
          url: `/api/chains/?offset=${start}&limit=${pageSize}${searchString ? `&name=${searchString}` : ''}`,
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
    fetchExchangesData: builder.query({
      query: ({ start, pageSize, searchString }: QueryParamsType) => {
        return {
          url: `/api/exchanges/?offset=${start}&limit=${pageSize}${searchString ? `&name=${searchString}` : ''}`,
          method: 'GET',
        };
      },
    }),
    fetchMarketDataCoinDetails: builder.query({
      query: ({ coinName, filter }: any) => {
        return {
          url: `detail/markets/?slug=${coinName}&category=${filter}`,
          method: 'GET',
        };
      },
    }),
    fetchHistoricalCoinDataDetails: builder.query({
      query: ({ coinId, timeStart, interval }) => {
        return {
          url: `detail/historical/?id=${coinId}&timeStart=${timeStart}&interval=${interval}&convertId=2781`,
          method: 'GET',
        };
      },
    }),
    fetchStatsData: builder.query({
      query: () => ({
        url: '/api/stats/',
        method: 'GET',
      }),
    }),
    fetchTickerData: builder.query({
      query: () => ({
        url: '/api/tickers/',
        method: 'GET',
      }),
    }),
    addWatchlist: builder.mutation({
      query: ({
        email,
        collection_name,
        main,
        ids,
      }: {
        email: string | undefined;
        collection_name: string;
        main: boolean;
        ids: string[];
      }) => {
        return {
          url: `/api/favorites/`,
          method: 'POST',
          body: { email, collection_name, main, ids },
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
  useFetchChainDataQuery,
  useFetchStatsDataQuery,
  useFetchTickerDataQuery,
  useFetchExchangesDataQuery,
  useFetchFavoritesDataQuery,
  useFetchMarketDataCoinDetailsQuery,
  useFetchHistoricalCoinDataDetailsQuery,
  useAddWatchlistMutation,
} = dataGridApi;

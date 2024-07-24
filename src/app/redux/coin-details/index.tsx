import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QueryParamsType {
  coinId: string | undefined;
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
  }),
});
export const { useFetchCoinDetailsDataQuery } = coinDetailsApi;

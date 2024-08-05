import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './market/index';

import { dataGridApi } from './reducers/data-grid';
import filterReducer from './reducers/filters';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { coinDetailsApi } from './coin-details';

export const makeStore = () => {
  return configureStore({
    reducer: {
      market: marketReducer,
      [dataGridApi.reducerPath]: dataGridApi.reducer,
      [coinDetailsApi.reducerPath]: coinDetailsApi.reducer,
      filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(dataGridApi.middleware)
        .concat(coinDetailsApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
// export const useAppStore = useStore.withTypes<AppStore>();

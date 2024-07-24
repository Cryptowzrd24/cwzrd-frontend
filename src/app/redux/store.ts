import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './market/index';

import { dataGridApi } from './reducers/data-grid';
import filterReducer from './reducers/filters';
import { useDispatch, useSelector } from 'react-redux';
import { coinDetailsApi } from './coin-details';

export const store = configureStore({
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

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppStore = useStore.withTypes<AppStore>();

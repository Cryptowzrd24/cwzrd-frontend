import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch, useSelector, useStore } from 'react-redux';
import { dataGridApi } from './reducers/data-grid';
import filterReducer from './reducers/filters';

export const store = configureStore({
  reducer: {
    [dataGridApi.reducerPath]: dataGridApi.reducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataGridApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
// export type AppStore = ReturnType<typeof store>;
// type RootState = ReturnType<AppStore['getState']>;
// type AppDispatch = AppStore['dispatch'];

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppStore = useStore.withTypes<AppStore>();

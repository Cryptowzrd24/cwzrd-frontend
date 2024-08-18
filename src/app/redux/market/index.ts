import { createSlice } from '@reduxjs/toolkit';

export interface MarketState {
  showStats: boolean;
  favorites: any[];
  selectedWatchListName: string;
  selectedWatchListMain: boolean;
}

const initialState: MarketState = {
  showStats: true,
  favorites: [],
  selectedWatchListName: '',
  selectedWatchListMain: false,
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    hideToggleStats: (state) => {
      state.showStats = false;
    },
    showToggleStats: (state) => {
      state.showStats = true;
    },
    updateFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    updateSelectedWatchListName: (state, action) => {
      state.selectedWatchListName = action.payload;
    },
    updateSelectedWatchListMain: (state, action) => {
      state.selectedWatchListMain = action.payload;
    },
  },
});

export const {
  hideToggleStats,
  showToggleStats,
  updateFavorites,
  updateSelectedWatchListName,
  updateSelectedWatchListMain,
} = marketSlice.actions;

export default marketSlice.reducer;

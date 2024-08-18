import { createSlice } from '@reduxjs/toolkit';

export interface MarketState {
  showStats: boolean;
  favorites: any[];
}

const initialState: MarketState = {
  showStats: true,
  favorites: [],
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
  },
});

export const { hideToggleStats, showToggleStats, updateFavorites } =
  marketSlice.actions;

export default marketSlice.reducer;

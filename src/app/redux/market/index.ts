import { createSlice } from '@reduxjs/toolkit';

export interface MarketState {
  showStats: boolean;
}

const initialState: MarketState = {
  showStats: true,
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
  },
});

export const { hideToggleStats, showToggleStats } = marketSlice.actions;

export default marketSlice.reducer;

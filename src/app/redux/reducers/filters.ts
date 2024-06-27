import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    category: null,
    algorithm: null,
    platform: null,
    industry: null,
  },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: initialState,
  reducers: {
    selectCategoryFilter: (state, action) => {
      const { id, label } = action.payload;
      state.filters[label] = id;
    },
  },
});

export const { selectCategoryFilter } = filterSlice.actions;

export default filterSlice.reducer;

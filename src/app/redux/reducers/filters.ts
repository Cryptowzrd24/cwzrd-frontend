import { Filters } from '@/app/constants/filters';
import { Filters as FiltersType } from '@/app/models/filters';
import { RangeFilterKeys } from '@/app/models/range-filter-keys';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const toggleFilter = ['mineable', 'audited'] as const;

type ToggleKey = (typeof toggleFilter)[number];

type RangeKey = (typeof RangeFilterKeys)[number];

type FilterKey = keyof typeof Filters;
interface InitialState {
  filters: FiltersType;
}

const initialState: InitialState = {
  filters: {
    cryptoCurrency: null,
    category: null,
    algorithm: null,
    platform: null,
    industry: null,
    price: { min: null, max: null },
    market: { min: null, max: null },
    volume: { min: null, max: null },
    circulatingSupply: { min: null, max: null },
    percentChange: { min: null, max: null },
    mineable: false,
    audited: false,
  },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: initialState,
  reducers: {
    selectFilter: (state, action) => {
      const { id, label } = action.payload;
      state.filters[label as FilterKey] = id;
    },
    clearAllFilters: (state) => {
      state.filters = initialState.filters;
    },
    clearSelectedFilter: (state, action) => {
      const { label } = action.payload;
      state.filters[label as FilterKey] = null;
    },
    selectRangeFilter: (
      state,
      action: PayloadAction<{
        label: RangeKey;
        min: number | null;
        max: number | null;
      }>,
    ) => {
      const { label, min, max } = action.payload;
      state.filters[label] = { min, max };
    },
    selectSwitchFilter: (
      state,
      action: PayloadAction<{
        label: ToggleKey;
        isActive: boolean;
      }>,
    ) => {
      const { label, isActive } = action.payload;
      state.filters[label] = isActive;
    },
    selectCurrencyTypeFilter: (state, action) => {
      state.filters.cryptoCurrency = action.payload;
    },
  },
});

export const {
  selectFilter,
  clearAllFilters,
  clearSelectedFilter,
  selectRangeFilter,
  selectSwitchFilter,
  selectCurrencyTypeFilter,
} = filterSlice.actions;

export default filterSlice.reducer;

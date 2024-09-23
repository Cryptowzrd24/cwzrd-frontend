import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

export interface FavoriteItem {
  id: string;
  collection_name: string;
  main: boolean;
  // Add other relevant fields as needed
}

interface MarketState {
  showStats: boolean;
  favorites: string[];
  selectedWatchListName: string;
  selectedWatchListMain: boolean;
  mainWatchFavorites: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MarketState = {
  showStats: true,
  favorites: [],
  selectedWatchListName: '',
  selectedWatchListMain: false,
  mainWatchFavorites: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching the watchlist
export const fetchWatchlist = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>('market/fetchWatchlist', async (_, { rejectWithValue }) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const authToken = Cookie.get('authToken');

    const response = await fetch(`${baseUrl}/api/favorites`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorResponse = await response.json();
      return rejectWithValue(
        errorResponse.error || 'Failed to fetch watchlist',
      );
    }
  } catch (error) {
    return rejectWithValue('Failed to fetch watchlist');
  }
});

export const addWatchlist = createAsyncThunk<
  any,
  { collection_name: string; main: boolean; ids: any[] },
  { rejectValue: string }
>(
  'market/addWatchlist',
  async ({ collection_name, main, ids }, { rejectWithValue }) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const authToken = Cookie.get('authToken');

      const response = await fetch(`${baseUrl}/api/favorites`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collection_name,
          main,
          ids,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorResponse = await response.json();
        return rejectWithValue(
          errorResponse.error || 'Failed to add watchlist',
        );
      }
    } catch (error) {
      return rejectWithValue('Failed to add watchlist');
    }
  },
);

// Async thunk to delete a watchlist
export const deleteWatchlist = createAsyncThunk<
  any,
  { collection_name: string },
  { rejectValue: string }
>(
  'market/deleteWatchlist',
  async ({ collection_name }, { rejectWithValue }) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const authToken = Cookie.get('authToken');

      const response = await fetch(
        `${baseUrl}/api/favorites/?collection_name=${collection_name}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      if (response.ok) {
        return { collection_name };
      } else {
        const errorResponse = await response.json();
        return rejectWithValue(
          errorResponse.error || 'Failed to delete watchlist',
        );
      }
    } catch (error) {
      return rejectWithValue('Failed to delete watchlist');
    }
  },
);

// Async thunk to update a watchlist
export const updateWatchlist = createAsyncThunk<
  any,
  { collection_name: string; main: boolean },
  { rejectValue: string }
>(
  'market/updateWatchlist',
  async ({ collection_name, main }, { rejectWithValue }) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const authToken = Cookie.get('authToken');

      const response = await fetch(
        `${baseUrl}/api/favorites/?collection_name=${collection_name}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ main }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorResponse = await response.json();
        return rejectWithValue(
          errorResponse.error || 'Failed to update watchlist',
        );
      }
    } catch (error) {
      return rejectWithValue('Failed to update watchlist');
    }
  },
);

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
    setMainWatchFavorites: (state, action) => {
      state.mainWatchFavorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchWatchlist actions
      .addCase(fetchWatchlist.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWatchlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const data = action.payload;

        // Assuming data.collections is an array
        state.favorites = data.collections;

        // Find the main collection
        const mainCollection = data.collections.find(
          (collection: any) => collection?.main === true,
        );

        if (mainCollection) {
          state.selectedWatchListName = mainCollection.collection_name;
          state.selectedWatchListMain = mainCollection.main;
        }
      })
      .addCase(fetchWatchlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch watchlist';
      })
      // Handle addWatchlist actions
      .addCase(addWatchlist.fulfilled, (state, action) => {
        // Add the new watchlist to the favorites
        state.favorites.push(action.payload);
      })
      // Handle deleteWatchlist actions
      .addCase(deleteWatchlist.fulfilled, (state, action) => {
        // Remove the deleted watchlist from the favorites
        state.favorites = state.favorites.filter(
          (collection) =>
            //@ts-expect-error:expect anything
            collection.collection_name !== action.payload.collection_name,
        );
      })
      // Handle updateWatchlist actions
      .addCase(updateWatchlist.fulfilled, (state, action) => {
        // Update the watchlist in favorites
        const index = state.favorites.findIndex(
          (collection) =>
            //@ts-expect-error:expect anything
            collection.collection_name === action.payload.collection_name,
        );
        if (index !== -1) {
          state.favorites[index] = action.payload;
        }
      });
  },
});

export const {
  hideToggleStats,
  showToggleStats,
  updateFavorites,
  updateSelectedWatchListName,
  updateSelectedWatchListMain,
  setMainWatchFavorites,
} = marketSlice.actions;

export default marketSlice.reducer;

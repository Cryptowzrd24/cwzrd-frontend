import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';
import { fetchWatchlist } from '../market';

// Interface definitions
interface UserState {
  email: string;
  name: string;
  token: string | null;
  isFirstLogin: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// The payload returned after a successful login
interface LoginPayload {
  email: string;
  name: string;
  token: string;
  isFirstLogin: boolean;
}

// Function to get user data from localStorage
const getUserFromLocalStorage = (): UserState => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('user');
    const authToken = Cookie.get('authToken');
    if (userData && authToken) {
      return {
        ...JSON.parse(userData),
        token: authToken,
        status: 'succeeded',
        error: null,
      };
    }
  }
  return {
    email: '',
    name: '',
    token: null,
    isFirstLogin: false,
    status: 'idle',
    error: null,
  };
};

// Initial state
const initialState: UserState = getUserFromLocalStorage();

export const loginUser = createAsyncThunk<
  LoginPayload,
  { email: string; password: string },
  { rejectValue: string }
>(
  'user/loginUser',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        return rejectWithValue(errorResponse.error || 'Login failed');
      }

      const data = await response.json();

      // Extract token and first_attempt from the response
      const { token, first_attempt } = data;

      // Set isFirstLogin based on first_attempt
      const isFirstLogin = first_attempt !== undefined ? first_attempt : false;

      // Save token to cookies
      Cookie.set('authToken', token);

      // Fetch user profile to get email and name
      const userProfile = await fetchUserProfile(token);

      // Prepare the login payload
      const loginPayload: LoginPayload = {
        email: userProfile.email,
        name: userProfile.name,
        token,
        isFirstLogin,
      };
      if (!isFirstLogin) {
        dispatch(fetchWatchlist());
      }

      // Return the login payload
      return loginPayload;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Login failed');
    }
  },
);

// ...

// Function to fetch user profile
const fetchUserProfile = async (
  token: string,
): Promise<{
  email: string;
  name: string;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Failed to fetch user profile');
    }

    const data = await response.json();

    return {
      email: data.email,
      name: data.name,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch user profile');
  }
};

// ...

// Adjust extraReducers to handle isFirstLogin
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = '';
      state.name = '';
      state.token = null;
      state.isFirstLogin = false;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('user');
      Cookie.remove('authToken');
    },
    clearError: (state) => {
      state.error = null;
    },
    setFirstLoginToFalse: (state) => {
      state.isFirstLogin = false;
      // Update localStorage if you're persisting isFirstLogin
      const userData = {
        email: state.email,
        name: state.name,
        isFirstLogin: state.isFirstLogin,
        token: state.token,
      };
      localStorage.setItem('user', JSON.stringify(userData));
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle loginUser actions
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginPayload>) => {
          state.status = 'succeeded';
          state.email = action.payload.email;
          state.name = action.payload.name;
          state.token = action.payload.token;
          state.isFirstLogin = action.payload.isFirstLogin;

          // Save user data to localStorage
          localStorage.setItem(
            'user',
            JSON.stringify({
              email: state.email,
              name: state.name,
              isFirstLogin: state.isFirstLogin,
            }),
          );
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
      });
  },
});

export const { logout, clearError, setFirstLoginToFalse } = userSlice.actions;
export default userSlice.reducer;

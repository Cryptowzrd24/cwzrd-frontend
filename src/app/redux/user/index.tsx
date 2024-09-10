// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the user data type
interface UserState {
  email: string;
  name: string;
  token: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the type for the login action payload
interface LoginPayload {
  email: string;
  name: string;
  token: string;
}

// Initial state
const initialState: UserState = {
  email: '',
  name: '',
  token: '',
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => {
      state.status = 'succeeded';
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;

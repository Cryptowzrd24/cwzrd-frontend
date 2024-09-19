import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

interface UserState {
  email: string;
  name: string;
  token: string;
  isFirstLogin: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface LoginPayload {
  email: string;
  name: string;
  token: string;
  isFirstLogin: boolean;
}

const getUserFromLocalStorage = (): UserState => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('user');
    const authToken = Cookie.get('authToken');
    if (userData && authToken) {
      return JSON.parse(userData as string);
    }
  }
  return {
    email: '',
    name: '',
    token: '',
    isFirstLogin: false,
    status: 'idle',
    error: null,
  };
};

const initialState: UserState = getUserFromLocalStorage();

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
      state.isFirstLogin = action.payload.isFirstLogin;

      localStorage.setItem('user', JSON.stringify(state));
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
      state.isFirstLogin = false;
      localStorage.removeItem('user');
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;

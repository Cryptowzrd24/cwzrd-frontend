import { RootState } from '@/app/redux/store';
import { createSelector } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number;
}

const selectUser = (state: RootState) => state.user;

export const selectToken = createSelector([selectUser], (user) => user.token);

export const selectIsTokenExpired = createSelector([selectToken], (token) => {
  if (!token) return true;

  try {
    const decodedToken = jwtDecode<JwtPayload>(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true;
  }
});

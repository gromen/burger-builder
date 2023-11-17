'use client';
import { createSlice } from '@reduxjs/toolkit';
// import { clearLogoutTimer } from '@/utils/helpers';

export interface LoginResponse {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

const initialState: Partial<LoginResponse> = {};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login(state, { payload }) {
      const idTokenInfo = localStorage.getItem('token');

      if (idTokenInfo == null) {
        localStorage.setItem('token', payload);
      }

      return {
        isLoggedIn: true,
        idToken: payload,
        expiresIn: state.expiresIn
      };
    },
    logout() {
      localStorage.removeItem('token');

      // clearLogoutTimer();

      return {
        isLoggedIn: false,
        idToken: '',
        expiresIn: ''
      };
    }
  }
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;

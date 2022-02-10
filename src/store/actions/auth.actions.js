import { authActionTypes } from './auth.actionTypes';

let logoutTimer;

const calculateTimeToLogout = expirationTime => {
  const currentTime = new Date().getTime();
  const calculatedExpirationTime = new Date(expirationTime).getTime();

  return calculatedExpirationTime - currentTime;
};

export const runLogoutTimer = (dispatch, expirationTime) => {
  const remainingTime = calculateTimeToLogout(expirationTime);

  logoutTimer = setTimeout(() => dispatch(logout()), remainingTime);
};

export const logout = () => {
  localStorage.removeItem('token');

  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }

  return {
    type: authActionTypes.ON_LOGOUT_REQUEST,
  };
};

export const login = idToken => {
  const idTokenInfo = localStorage.getItem('token');

  if (!idTokenInfo) {
    localStorage.setItem('token', idToken);
  }

  return {
    type: authActionTypes.ON_LOGIN_SUCCESS,
  };
};

import { userAuthActions } from '../store/ducks/user/slice';

let logoutTimer;

const calculateTimeToLogout = expirationTime => {
  const currentTime = new Date().getTime();
  const calculatedExpirationTime = new Date(expirationTime).getTime();

  return calculatedExpirationTime - currentTime;
};

export const runLogoutTimer = (dispatch, expirationTime) => {
  const remainingTime = calculateTimeToLogout(expirationTime);

  logoutTimer = setTimeout(() => dispatch(userAuthActions.logout()), remainingTime);
};

export const clearLogoutTimer = () => clearTimeout(logoutTimer);

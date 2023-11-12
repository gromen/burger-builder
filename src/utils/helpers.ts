import { userAuthActions } from '../store/ducks/user/slice';

let logoutTimer: NodeJS.Timeout;

const calculateTimeToLogout = (expirationTime: number): number => {
  const currentTime = new Date().getTime();
  const calculatedExpirationTime = new Date(expirationTime).getTime();

  return calculatedExpirationTime - currentTime;
};

export const runLogoutTimer = (
  dispatch: (action: any) => void,
  expirationTime: number
): void => {
  const remainingTime: number = calculateTimeToLogout(expirationTime);

  logoutTimer = setTimeout((): void => {
    dispatch(userAuthActions.logout());
  }, remainingTime);
};

export const clearLogoutTimer = (): void => {
  clearTimeout(logoutTimer);
};

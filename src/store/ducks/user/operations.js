import { login, logout, runLogoutTimer } from './actions';

const onLoginSuccess = login;
const onLogoutRequest = logout;

export default {
  onLoginSuccess,
  onLogoutRequest,
  runLogoutTimer
};

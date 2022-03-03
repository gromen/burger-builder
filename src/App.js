import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import LoginPage from './containers/LoginPage/LoginPage';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import UserProfilePage from './containers/UserProfilePage/UserProfilePage';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';
import { userAuthActions } from './store/ducks/user/slice';

function App() {
  const isLoggedIn = useSelector(state => state.userAuthState.isLoggedIn);

  const tokenInfo = localStorage.getItem('token');
  const dispatch = useDispatch();

  if (tokenInfo) {
    dispatch(userAuthActions.login(tokenInfo));
  }

  return (
    <Layout>
      <Switch>
        {!isLoggedIn && (
        <Route path="/login">
          <LoginPage />
        </Route>
				)}
        {isLoggedIn && (
        <>
          <Route path="/userProfile">
            <UserProfilePage />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <BurgerBuilder />
          </Route>
        </>
				)}
        <Route path="*" render={() => <Redirect to="/login" />} />
      </Switch>
    </Layout>
  );
}

export default App;

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
import { login } from './store/actions/auth.actions';

function App() {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  const tokenInfo = localStorage.getItem('token');
  const dispatch = useDispatch();

  if (tokenInfo) {
    dispatch(login());
  }

  return (
    <Layout>
      <Switch>
        {!isLoggedIn && <Route component={LoginPage} path="/login" />}
        {isLoggedIn && (
        <>
          <Route component={UserProfilePage} path="/userProfile" />
          <Route component={Orders} path="/orders" />
          <Route component={Checkout} path="/checkout" />
          <Route exact component={BurgerBuilder} path="/" />
        </>
				)}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

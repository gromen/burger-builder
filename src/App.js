import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';
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
      <Routes>
        {!isLoggedIn && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
				)}
        {isLoggedIn && (
        <>
          <Route path="/userProfile" element={<UserProfilePage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<BurgerBuilder />} />
        </>
				)}
      </Routes>
    </Layout>
  );
}

export default App;

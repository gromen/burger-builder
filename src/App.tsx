import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

import './App.module.css'
import LoginPage from './containers/LoginPage/LoginPage'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import UserProfilePage from './containers/UserProfilePage/UserProfilePage'
import Layout from './hoc/Layout/Layout'
import Orders from './containers/Orders/Orders'
import { userAuthActions } from './store/ducks/user/slice'
import { useAppDispatch, useAppSelector } from './hooks/redux-toolkit'

function App(): JSX.Element {
  const isLoggedIn = useAppSelector((state) => state.userAuthState.isLoggedIn)

  const tokenInfo = localStorage.getItem('token')
  const dispatch = useAppDispatch()

  if (tokenInfo != null) {
    dispatch(userAuthActions.login(tokenInfo))
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
        )}
      </Routes>
    </Layout>
  )
}

export default App

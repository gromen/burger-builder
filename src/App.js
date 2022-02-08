import './App.module.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LoginPage from './components/forms/Login/LoginPage';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <Layout>
      <Switch>
        <Route component={LoginPage} path="/login" />
        <Route component={Orders} path="/orders" />
        <Route exact component={BurgerBuilder} path="/" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </Layout>
  );
}

export default App;

import './App.module.css';
import { Route, Switch } from 'react-router-dom';
import React, { useContext } from 'react';
import Login from './components/Login/Login';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Layout>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Orders} path="/orders" />
        {/* eslint-disable-next-line react/no-children-prop */}
        <PrivateRoute path="/" children={<BurgerBuilder />} redirectTo="/login" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </Layout>
  );
}

export default App;

import './App.module.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import AuthContext from './store/auth-context';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout>
      <Switch>
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
          <Route exact component={BurgerBuilder} path="/" />
          <Route component={Checkout} path="/checkout" />
          <Route component={Orders} path="/orders" />
        </AuthContext.Provider>
      </Switch>
    </Layout>
  );
}

export default App;

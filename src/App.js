import './App.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import React, { useContext } from 'react';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Orders} path="/orders" />
        {/* eslint-disable-next-line react/no-children-prop */}
        <Route children={() => (isLoggedIn ? <BurgerBuilder /> : <Redirect to="/login" />)} path="/" />
        <Route component={Checkout} path="/checkout" />
        <Route path="/" render={() => (!isLoggedIn ? <Redirect to="/login" /> : <Redirect to="/" />)} />
      </Switch>
    </Layout>
  );
}

export default App;

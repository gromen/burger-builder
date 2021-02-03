import React from "react";
import { Route, Switch } from "react-router-dom";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./hoc/Layout/Layout";
import Orders from "./containers/Orders/Orders";

import "./App.module.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
      </Switch>
    </Layout>
  );
}

export default App;

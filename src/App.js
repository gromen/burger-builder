import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./hoc/Layout/Layout";

import "./App.module.css";
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

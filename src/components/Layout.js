import React, { Component } from "react";

import Aux from "../hoc/Aux";
import Header from "./Navigation/Header/Header";
import SideDrawer from "./Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    isVisibleSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { isVisibleSideDrawer: !prevState.isVisibleSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Header clickedLogo={this.sideDrawerToggleHandler} openedSideDrawer={this.state.isVisibleSideDrawer} />
        <SideDrawer opened={this.state.isVisibleSideDrawer} closed={this.sideDrawerToggleHandler} />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

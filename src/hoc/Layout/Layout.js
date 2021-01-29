import React, { Component } from "react";

import Aux from "../Aux/Aux";
import Header from "../../components/Navigation/Header/Header";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

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
        <main style={{ marginTop: "56px" }}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

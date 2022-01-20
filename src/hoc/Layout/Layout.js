import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Aux from '../Aux/Aux';
import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleSideDrawer: false,
    };
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ isVisibleSideDrawer: !prevState.isVisibleSideDrawer }));
  };

  render() {
    const { children } = this.props;
    const { isVisibleSideDrawer = false } = this.state;

    return (
      <Aux>
        <Header clickedLogo={this.sideDrawerToggleHandler} openedSideDrawer={isVisibleSideDrawer} />
        <SideDrawer closed={this.sideDrawerToggleHandler} opened={isVisibleSideDrawer} />
        <main style={{ marginTop: '56px' }}>{children}</main>
      </Aux>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

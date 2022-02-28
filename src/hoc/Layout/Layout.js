import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => {
  const [isVisibleSideDrawer, setIsVisibleSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setIsVisibleSideDrawer(prevState => !prevState);
  };

  return (
    <>
      <Header clickedLogo={sideDrawerToggleHandler} openedSideDrawer={isVisibleSideDrawer} />
      <SideDrawer closed={sideDrawerToggleHandler} opened={isVisibleSideDrawer} />
      <main style={{ marginTop: '56px' }}>{children}</main>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

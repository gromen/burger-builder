import React, { type ReactChildren, type ReactElement, useState } from 'react';

import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface PropsLayout {
  children: ReactChildren | ReactElement;
}

const Layout = ({ children }: PropsLayout): JSX.Element => {
  const [isVisibleSideDrawer, setIsVisibleSideDrawer] = useState(false);

  const sideDrawerToggleHandler = (): void => {
    setIsVisibleSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Header
        clickedLogo={sideDrawerToggleHandler}
        openedSideDrawer={isVisibleSideDrawer}
      />
      <SideDrawer
        closed={sideDrawerToggleHandler}
        opened={isVisibleSideDrawer}
      />
      <main style={{ marginTop: '56px' }}>{children}</main>
    </>
  );
};

export default Layout;

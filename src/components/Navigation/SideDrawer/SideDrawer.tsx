import React from 'react';
import Navigation from '../Navigation';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';

interface PropsSideDrawer {
  opened: boolean;
  closed: () => void;
}

function sideDrawer({ opened, closed }: PropsSideDrawer): JSX.Element {
  return (
    <>
      <Backdrop clicked={closed} show={opened} />
      <div
        className={`${classes.SideDrawer as string} ${
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          opened ? classes.Open : classes.Close
        }`}
      >
        <div className={classes.Logo}>
          <Logo openedSideDrawer={opened} />
        </div>
        <Navigation />
      </div>
    </>
  );
}

export default sideDrawer;

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
  // TODO fix below
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const classesSideDrawer = `${classes.SideDrawer} ${
    // TODO fix below
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    opened ? classes.Open : classes.Close
  }`;

  return (
    <>
      <Backdrop clicked={closed} show={opened} />
      <div className={classesSideDrawer}>
        <div className={classes.Logo}>
          <Logo openedSideDrawer={opened} />
        </div>
        <Navigation />
      </div>
    </>
  );
}

export default sideDrawer;

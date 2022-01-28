import React from 'react';
import Navigation from '../Navigation';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import Backdrop from '../../Backdrop/Backdrop';

function sideDrawer({ opened, closed }) {
  return (
    <>
      <Backdrop clicked={closed} show={opened} />
      <div className={`${classes.SideDrawer} ${opened ? classes.Open : classes.Close}`}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <Navigation />
      </div>
    </>
  );
}

export default sideDrawer;

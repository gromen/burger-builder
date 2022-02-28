import React from 'react';
import classes from './Header.module.css';
import Navigation from '../Navigation';
import Logo from '../../Logo/Logo';

function toolbar({ clickedLogo, openedSideDrawer }) {
  return (
    <header className={classes.Header}>
      <button type="button" className={classes.ButtonToggler} onClick={clickedLogo}>
        Menu
      </button>
      <div className={classes.Logo}>
        <Logo openedSideDrawer={openedSideDrawer} />
      </div>
      <Navigation />
    </header>
  );
}

export default toolbar;

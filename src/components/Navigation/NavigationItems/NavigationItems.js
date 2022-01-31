import React, { useContext } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';
import AuthContext from '../../../store/auth-context';

const NavigationItems = () => {
  const { onLogout } = useContext(AuthContext);

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/">BurgerBuilder</NavigationItem>
      <NavigationItem link="/orders/">Orders</NavigationItem>
      <NavigationItem link="/checkout/">Checkout</NavigationItem>
      {/*
      TODO unify Logout button styles
      */}
      <button type="button" onClick={onLogout}>Logout</button>
    </ul>
  );
};

export default NavigationItems;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <button type="button" onClick={onLogout}>Logout</button>
    </ul>
  );
};

export default NavigationItems;

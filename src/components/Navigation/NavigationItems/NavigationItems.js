import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link="/">BurgerBuilder</NavigationItem>
    <NavigationItem link="/orders/">Orders</NavigationItem>
    <NavigationItem link="/checkout/">Checkout</NavigationItem>
    <NavigationItem link="/login/">Log in</NavigationItem>
    <NavigationItem link="/userProfile/">UserProfile</NavigationItem>
    <NavigationItem link="/logout/">Log out</NavigationItem>

  </ul>
);

export default NavigationItems;

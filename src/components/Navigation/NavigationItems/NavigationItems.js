import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

function navigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/">
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/orders/">Orders</NavigationItem>
      {/* <NavigationItem link='/checkout/'>Checkout</NavigationItem> */}
    </ul>
  );
}

export default navigationItems;

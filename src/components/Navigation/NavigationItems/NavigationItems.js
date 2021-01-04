import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active='true'>
      BurgerBuilder
    </NavigationItem>
    <NavigationItem>Checkout</NavigationItem>
  </ul>
);

export default navigationItems;

import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

function navigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        BurgerBuilder
      </NavigationItem>

      <NavigationItem link='/orders/'>Orders</NavigationItem>

      <NavigationItem link='/checkout/'>Checkout</NavigationItem>
    </ul>
  );
}

export default navigationItems;

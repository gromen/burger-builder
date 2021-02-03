import { NavLink } from "react-router-dom";

import classes from "./NavigationItems.module.css";
import classesNavItem from "./../NavigationItems/NavigationItem/NavigationItem.module.css";

function navigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <li className={classesNavItem.NavigationItem}>
        <NavLink exact to='/'>
          BurgerBuilder
        </NavLink>
      </li>
      <li className={classesNavItem.NavigationItem}>
        <NavLink to='/orders/'>Orders</NavLink>
      </li>
      <li className={classesNavItem.NavigationItem}>
        <NavLink to='/checkout/'>Checkout</NavLink>
      </li>
    </ul>
  );
}

export default navigationItems;

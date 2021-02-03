import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

function navigationItem({ link, children, exact }) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={link} activeClassName={classes.active} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
}

export default navigationItem;

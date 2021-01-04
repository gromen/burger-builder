import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = ({ active, link, children }) => (
  <li className={classes.NavigationItem}>
    <a className={active ? classes.active : null} href={link}>
      {children}
    </a>
  </li>
);

export default navigationItem;

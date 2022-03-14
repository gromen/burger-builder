import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

function navigationItem({ link, children, end }) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink className={({ isActive }) => (isActive ? `${classes.active}` : '')} end={end} to={link}>
        {children}
      </NavLink>
    </li>
  );
}

export default navigationItem;

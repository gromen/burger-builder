import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/actions/auth.actions';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  const onLogout = () => dispatch(logout());

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/">BurgerBuilder</NavigationItem>
      {isLoggedIn && (
      <>
        <NavigationItem link="/orders/">Orders</NavigationItem>
        <NavigationItem link="/checkout/">Checkout</NavigationItem>
        <NavigationItem link="/userProfile/">UserProfile</NavigationItem>
        <button type="button" onClick={onLogout}>Log out</button>
      </>
			)}
      {!isLoggedIn && <NavigationItem link="/login/">Log in</NavigationItem>}
    </ul>
  );
};

export default NavigationItems;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthOperations } from '../../../store/ducks/user';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.userAuthState.userAuth.isLoggedIn);

  const onLogout = () => dispatch(userAuthOperations.onLogoutRequest());

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

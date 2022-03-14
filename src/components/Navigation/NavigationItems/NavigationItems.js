import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthActions } from '../../../store/ducks/user/slice';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.userAuthState.isLoggedIn);

  const onLogout = () => dispatch(userAuthActions.logout());

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      {isLoggedIn && (
      <>
        <NavigationItem link="/orders/">Orders</NavigationItem>
        <NavigationItem link="/userProfile/">UserProfile</NavigationItem>
        <button type="button" onClick={onLogout}>Log out</button>
      </>
			)}
      {!isLoggedIn && <NavigationItem link="/login/">Log in</NavigationItem>}
    </ul>
  );
};

export default NavigationItems;

import React from 'react';
import { Button } from 'react-bootstrap';
import { userAuthActions } from '../../../store/ducks/user/slice';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-toolkit';
import { type AppDispatch } from '../../../store';

const NavigationItems = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userAuthState.isLoggedIn);

  // @ts-expect-error to fix
  const onLogout = (): AppDispatch => dispatch(userAuthActions.logout());

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      {isLoggedIn && (
        <>
          <NavigationItem link="/orders/">Orders</NavigationItem>
          <NavigationItem link="/userProfile/">UserProfile</NavigationItem>
          <Button variant="secondary" onClick={onLogout}>
            Log out
          </Button>
        </>
      )}
      {!isLoggedIn && <NavigationItem link="/login/">Log in</NavigationItem>}
    </ul>
  );
};

export default NavigationItems;

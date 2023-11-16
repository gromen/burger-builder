'use client';
import { type AppDispatch } from '@/store';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import { userAuthActions } from '@/store/ducks/user/slice';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import { useEffect } from 'react';

const NavigationItems = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userAuthState.isLoggedIn);
  const isClient = typeof window !== undefined;
  const router = useRouter();
  useEffect(() => {
    let token;

    if (isClient) {
      token = localStorage.getItem('token');
    }
    if (token != null) {
      dispatch(userAuthActions.login(token));
    }
  }, []);

  // @ts-expect-error to fix
  const onLogout = (): AppDispatch => {
    dispatch(userAuthActions.logout());
    router.push('/login');
  };

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      {isLoggedIn && (
        <>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link="/userProfile">UserProfile</NavigationItem>
          <Button variant="secondary" onClick={onLogout}>
            Log out
          </Button>
        </>
      )}
      {!isLoggedIn && <NavigationItem link="/login">Log in</NavigationItem>}
    </ul>
  );
};

export default NavigationItems;

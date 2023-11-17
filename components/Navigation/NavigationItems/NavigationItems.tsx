'use client';
import { type AppDispatch } from '@/store';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import { login } from '@/store/ducks/user/slice';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';

const NavigationItems = (): JSX.Element => {
  const dispatch = useAppDispatch();
  // const isLoggedIn = useAppSelector((state) => state.userAuthState.isLoggedIn);
  const isClient = typeof window !== undefined;
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    let token;

    if (isClient) {
      token = localStorage.getItem('token');
    }
    if (token != null) {
      dispatch(login(token));
    }
  }, []);

  // @ts-expect-error to fix
  const onLogout = (): AppDispatch => {
    signOut();
    router.push('/login');
  };

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      {session?.user && (
        <>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link="/userProfile">UserProfile</NavigationItem>
          <Button variant="secondary" onClick={onLogout}>
            {session?.user ? 'Log out' : 'Sign in'}
          </Button>
        </>
      )}
      {!session?.user && <NavigationItem link="/login">Log in</NavigationItem>}
    </ul>
  );
};

export default NavigationItems;

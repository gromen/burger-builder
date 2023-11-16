'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder';
import { userAuthActions } from '../store/ducks/user/slice';
import { useAppDispatch } from '../hooks/redux-toolkit';
import '@/app/App.module.css';

function HomePage(): JSX.Element {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenCached = localStorage.getItem('token');
    if (tokenCached != null) {
      setToken(tokenCached);
      dispatch(userAuthActions.login(tokenCached));
    } else {
      router.push('/login');
    }
  }, []);

  return <>{token && <BurgerBuilder />}</>;
}

export default HomePage;

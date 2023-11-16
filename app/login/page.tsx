'use client';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useAppDispatch } from '@/hooks/redux-toolkit';
import { userAuthActions } from '@/store/ducks/user/slice';
import { useEffect, useState } from 'react';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenCached = localStorage.getItem('token');
    if (tokenCached != null) {
      setToken(tokenCached);
      dispatch(userAuthActions.login(tokenCached));
    }
  }, []);

  return <>{!token && <LoginForm />}</>;
};

export default Login;

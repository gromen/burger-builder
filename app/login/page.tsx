'use client';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = (): JSX.Element => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      return router.push('/');
    }
  }, [session]);

  return <LoginForm />;
};

export default LoginPage;

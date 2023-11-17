'use client';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = (): JSX.Element => {
  const { data: session } = useSession();
  const router = useRouter();

  return <>{session?.user ? router.push('/') : <LoginForm />}</>;
};

export default LoginPage;

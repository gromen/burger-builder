'use client';

import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder';
import '@/app/App.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

function HomePage(): JSX.Element | null {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      return router.push('/login');
    }
  }, [session]);

  return <BurgerBuilder />;
}

export default HomePage;

'use client';

import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder';
import '@/app/App.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function HomePage(): JSX.Element {
  const { data: session } = useSession();
  const router = useRouter();

  return <>{session?.user ? <BurgerBuilder /> : router.push('/login')}</>;
}

export default HomePage;

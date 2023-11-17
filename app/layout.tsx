'use client';
import '@/app/globals.scss';
import Header from '@/components/Navigation/Header/Header';
import SideDrawer from '@/components/Navigation/SideDrawer/SideDrawer';
import Providers from '@/components/Providers';
import { Open_Sans } from 'next/font/google';
import { useState } from 'react';

const openSans = Open_Sans({ subsets: ['latin'] });
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isVisibleSideDrawer, setIsVisibleSideDrawer] = useState(false);

  const sideDrawerToggleHandler = (): void => {
    setIsVisibleSideDrawer((prevState) => !prevState);
  };

  return (
    <html lang="en" className="relative">
      <body className={openSans.className}>
        <Providers>
          <Header
            clickedLogo={sideDrawerToggleHandler}
            openedSideDrawer={isVisibleSideDrawer}
          />
          <SideDrawer
            closed={sideDrawerToggleHandler}
            opened={isVisibleSideDrawer}
          />
          <main style={{ marginTop: '56px' }}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

import * as React from 'react';

import Footer from '@/components/layout/Footer/Footer';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

import { useAppSelector } from '@/store/store-hooks';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isAuth = useAppSelector((state) => state.global.isAuth);
  return (
    <>
      {isAuth && <Sidebar />}
      {children}
      {isAuth && <Footer />}
    </>
  );
}

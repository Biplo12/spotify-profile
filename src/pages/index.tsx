import * as React from 'react';

import useCheckAuthState from '@/hooks/useCheckAuthState';
import useGetUserDetails from '@/hooks/useGetUserDetails';
import useRenderTab from '@/hooks/useRenderTab';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const isAuth = useCheckAuthState();
  const renderedTab = useRenderTab();
  useGetUserDetails();
  return (
    <Layout>
      <Seo />
      <main className='bg-spotify-grey text-spotify-white mxsm:pb-[10rem] mxsm:px-[3.5rem] mxsm:py-12 flex min-h-screen flex-col items-center justify-center pl-[10rem] pr-[3.5rem] pt-24'>
        {!isAuth && <Auth />}
        {isAuth && renderedTab}
      </main>
    </Layout>
  );
}

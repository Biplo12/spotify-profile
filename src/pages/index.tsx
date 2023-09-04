/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useEffect } from 'react';

import useCheckAuthState from '@/hooks/useCheckAuthState';
import useGetUserDetails from '@/hooks/useGetUserDetails';
import useRenderTab from '@/hooks/useRenderTab';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useAppSelector } from '@/store/store-hooks';

export default function HomePage() {
  useCheckAuthState();
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const renderedTab = useRenderTab();
  const handleFetchUserPlaylists = useGetUserDetails();

  useEffect(() => {
    if (isAuth) {
      handleFetchUserPlaylists();
    }
  }, [isAuth]);
  return (
    <Layout>
      <Seo />
      <main
        className={`bg-spotify-grey text-spotify-white flex min-h-screen flex-col items-center justify-center ${
          isAuth
            ? 'mxsm:pb-[4rem] mxsm:px-[2rem] mxsm:py-12 pb-12 pl-[10rem] pr-[3.5rem] pt-24'
            : ''
        }`}
      >
        {!isAuth && <Auth />}
        {isAuth && renderedTab}
      </main>
    </Layout>
  );
}

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useCheckAuthState from '@/hooks/useCheckAuthState';
import useGetTrackById from '@/hooks/useGetTrackById';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';
const TrackDetailsPage: React.FC = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { TrackId } = router.query;
  useGetTrackById(TrackId as string);
  useCheckAuthState();
  const isAuth = useAppSelector((state) => state.global.isAuth);
  // const track = useAppSelector((state) => state.global.trackDetails);

  useEffect(() => {
    dispatch(selectTab(''));
  }, [dispatch]);
  return (
    <Layout>
      <Seo />
      <main
        className={`bg-spotify-grey text-spotify-white flex min-h-screen flex-col items-center justify-center ${
          isAuth
            ? 'mxsm:pb-[10rem] mxsm:px-[3.5rem] mxsm:py-12 pl-[10rem] pr-[3.5rem] pt-24'
            : ''
        }`}
      >
        {!isAuth && <Auth />}
        {/* {isAuth && track && <TrackDetails track={track} />} */}
      </main>
    </Layout>
  );
};
export default TrackDetailsPage;

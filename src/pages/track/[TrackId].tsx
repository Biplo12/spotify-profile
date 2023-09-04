/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useCheckAuthState from '@/hooks/useCheckAuthState';
import useGetTrackById from '@/hooks/useGetTrackById';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TrackDetails from '@/components/TrackDetails/TrackDetials';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';
const TrackDetailsPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useCheckAuthState();
  const { TrackId } = router.query;
  const handleFetchTrackById = useGetTrackById(TrackId as string);
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const track = useAppSelector((state) => state.global.trackDetails);

  useEffect(() => {
    if (TrackId) {
      handleFetchTrackById();
    }
  }, [TrackId]);

  useEffect(() => {
    dispatch(selectTab(''));
  }, [dispatch]);

  return (
    <Layout>
      <Seo />
      <main
        className={`bg-spotify-grey text-spotify-white flex min-h-screen flex-col items-center justify-center ${
          isAuth
            ? 'mxsm:pb-[10rem] mxsm:px-[2rem] mxsm:py-12 pl-[10rem] pr-[3.5rem] pt-24'
            : ''
        }`}
      >
        {!isAuth && <Auth />}
        {isAuth && track && <TrackDetails />}
      </main>
    </Layout>
  );
};
export default TrackDetailsPage;

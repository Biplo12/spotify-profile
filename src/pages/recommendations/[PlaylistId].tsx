/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useCheckAuthState from '@/hooks/useCheckAuthState';
import useGetPlaylistById from '@/hooks/useGetPlaylistById';
import useGetRecommendations from '@/hooks/useGetRecommendations';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/layout/Layout';
import Recommendations from '@/components/Recommendations/Recommendations';
import Seo from '@/components/Seo';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';
const PlaylistDetailsPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useCheckAuthState();
  const { PlaylistId } = router.query;
  const handleFetchPlaylistDetails = useGetPlaylistById(PlaylistId as string);
  const handleFetchRecommendations = useGetRecommendations(
    PlaylistId as string
  );
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const playlist = useAppSelector((state) => state.global.playlistDetails);

  useEffect(() => {
    if (PlaylistId) {
      handleFetchPlaylistDetails();
    }
  }, [PlaylistId]);

  useEffect(() => {
    if (PlaylistId && isAuth && playlist) {
      handleFetchRecommendations();
    }
  }, [PlaylistId, isAuth, playlist]);

  useEffect(() => {
    dispatch(selectTab(''));
  }, [dispatch]);
  return (
    <Layout>
      <Seo />
      <main
        className={`bg-spotify-grey text-spotify-white flex min-h-screen flex-col items-center justify-center ${
          isAuth
            ? 'mxsm:pb-[10rem] mxsm:px-[2rem] mxsm:py-12 pb-12 pl-[10rem] pr-[3.5rem] pt-24'
            : ''
        }`}
      >
        {!isAuth && <Auth />}
        {isAuth && playlist && <Recommendations />}
      </main>
    </Layout>
  );
};
export default PlaylistDetailsPage;

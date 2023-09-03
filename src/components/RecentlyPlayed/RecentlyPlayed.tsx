import React from 'react';

import useGetRecentlyPlayed from '@/hooks/useGetRecentlyPlayed';

import TracksTabList from '@/components/Tracks/Partials/TracksTabList';

import { useAppSelector } from '@/store/store-hooks';
const RecentlyPlayed: React.FC = (): JSX.Element => {
  useGetRecentlyPlayed();
  const recentlyPlayed = useAppSelector((state) => state.global.recentlyPlayed);
  return (
    <div className='flex w-full max-w-[1200px] flex-col items-start justify-start gap-8'>
      <h1 className='text-center text-2xl font-bold'>
        Recently Played Trackss
      </h1>
      <TracksTabList tracks={recentlyPlayed} />
    </div>
  );
};
export default RecentlyPlayed;

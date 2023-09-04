import React from 'react';

import SeeMoreButton from '@/components/common/SeeMoreButton';
import TracksList from '@/components/Profile/Tracks/Partials/TracksList';

import { useAppDispatch } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';
const Tracks: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSeeMoreTracks = () => {
    dispatch(selectTab('tracks'));
  };
  return (
    <div className='flex w-full max-w-[600px] flex-col items-start justify-start gap-8'>
      <div className='flex w-full flex-wrap items-center justify-between gap-4'>
        <h1 className='text-xl font-bold'>Top Tracks of All Time</h1>
        <SeeMoreButton onClick={handleSeeMoreTracks} />
      </div>
      <TracksList />
    </div>
  );
};
export default Tracks;

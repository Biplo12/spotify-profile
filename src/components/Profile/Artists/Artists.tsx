import React from 'react';

import SeeMoreButton from '@/components/common/SeeMoreButton';
import ArtistsList from '@/components/Profile/Artists/Partials/ArtistsList';

import { useAppDispatch } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';
const Artists: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSeeMoreArtists = () => {
    dispatch(selectTab('artists'));
  };

  return (
    <div className='flex min-h-screen w-full max-w-[600px] flex-col items-start justify-start gap-8'>
      <div className='flex w-full items-center justify-between gap-4'>
        <h1 className='text-xl font-bold'>Top Artists of All Time</h1>
        <SeeMoreButton onClick={handleSeeMoreArtists} />
      </div>
      <ArtistsList />
    </div>
  );
};
export default Artists;

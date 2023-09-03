import React from 'react';

import ArtistItem from '@/components/Profile/Artists/Partials/ArtistItem';

import { useAppSelector } from '@/store/store-hooks';
const ArtistsList: React.FC = (): JSX.Element => {
  const artists = useAppSelector(
    (state) => state.global.artists
  ).long_term.slice(0, 10);
  return (
    <div className='flex min-h-screen flex-col items-start justify-start gap-8'>
      {artists?.map((artist, index) => (
        <ArtistItem artist={artist} index={index} key={index} />
      ))}
    </div>
  );
};
export default ArtistsList;

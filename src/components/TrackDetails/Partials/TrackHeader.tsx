/* eslint-disable @next/next/no-img-element */
import React from 'react';

import PlayOnSpotifyButton from '@/components/common/PlayOnSpotifyButton';

import { useAppSelector } from '@/store/store-hooks';

const TrackHeader: React.FC = (): JSX.Element => {
  const track = useAppSelector((state) => state.global.trackDetails);
  const realeaseYear = new Date(track.album.release_date).getFullYear();
  return (
    <div className='mxxsm:items-center mxxsm:flex-col flex items-start justify-center gap-8'>
      <div className='flex items-center justify-center'>
        <img
          src={track.image}
          alt={track.name}
          className='h-full max-h-[250px] w-full max-w-[250px] object-cover'
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-2'>
        <h1 className='mxsm:text-center text-5xl font-bold'>{track.name}</h1>{' '}
        <h2 className='mxsm:text-center text-2xl font-bold opacity-75'>
          {track.artists.map((artist) => artist.name).join(', ')}
        </h2>
        <h3 className='mxsm:text-center opacity-50'>
          {track.album.name} - {realeaseYear}
        </h3>
        <div className='mxsm:w-full mt-8 flex items-center justify-center'>
          <PlayOnSpotifyButton uri={track.uri} />
        </div>
      </div>
    </div>
  );
};
export default TrackHeader;

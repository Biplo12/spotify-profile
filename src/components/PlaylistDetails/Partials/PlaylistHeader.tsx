/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const PlaylistHeader: React.FC = (): JSX.Element => {
  const playlist = useAppSelector((state) => state.global.playlistDetails);
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <img
        src={playlist.image}
        alt={playlist.name}
        className='h-full max-h-[250px] w-full max-w-[250px] object-cover'
      />
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='max-w-[300px] text-xl font-bold'>{playlist.name}</h1>{' '}
        <h3 className='opacity-50'>By {playlist.owner}</h3>
        <h3>{playlist.tracks.total} tracks</h3>
      </div>
    </div>
  );
};
export default PlaylistHeader;

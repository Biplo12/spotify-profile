/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import { IPlaylist } from '@/interfaces/IGlobalReducerInterface';

interface IPlaylistTabItemProps {
  playlist: IPlaylist;
}

const PlaylistTabItem: React.FC<IPlaylistTabItemProps> = ({
  playlist,
}): JSX.Element => {
  return (
    <Link
      className='flex flex-col items-center justify-center gap-2'
      href={`/playlist/${playlist.id}`}
    >
      <img
        src={playlist.image}
        alt={playlist.name}
        className='h-full w-full transition-all duration-150 ease-linear hover:opacity-25'
      />
      <h1 className='text-center text-sm font-bold text-white'>
        {playlist.name}
      </h1>
      <div className='flex items-center justify-center gap-1 opacity-75'>
        <span className='text-xs uppercase tracking-[2px] opacity-75'>
          {playlist.tracks.total}
        </span>
        <p className='text-xs uppercase tracking-[2px] opacity-75'>Tracks</p>
      </div>
    </Link>
  );
};
export default PlaylistTabItem;

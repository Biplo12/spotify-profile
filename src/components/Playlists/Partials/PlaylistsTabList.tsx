import React from 'react';

import PlaylistTabItem from '@/components/Playlists/Partials/PlaylistTabItem';

import { useAppSelector } from '@/store/store-hooks';
const PlaylistsTabList: React.FC = (): JSX.Element => {
  const playlists = useAppSelector((state) => state.global.playlists);
  return (
    <div className='grid-container w-full'>
      {playlists?.map((playlist, index) => (
        <PlaylistTabItem key={index} playlist={playlist} />
      ))}
    </div>
  );
};
export default PlaylistsTabList;

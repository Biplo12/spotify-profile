import React from 'react';

import PlaylistsTabList from '@/components/Playlists/Partials/PlaylistsTabList';
const Playlists: React.FC = (): JSX.Element => {
  return (
    <div className='mxsm:items-center flex w-full max-w-[1200px] flex-col items-start justify-start gap-16'>
      <h1 className='text-center text-2xl font-bold'>Your Playlists</h1>
      <PlaylistsTabList />
    </div>
  );
};
export default Playlists;

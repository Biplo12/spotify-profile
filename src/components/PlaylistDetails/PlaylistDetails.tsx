import React from 'react';

import GetRecommendationsButton from '@/components/PlaylistDetails/Partials/GetRecommendationsButton';
import PlaylistHeader from '@/components/PlaylistDetails/Partials/PlaylistHeader';
import TracksTabList from '@/components/Tracks/Partials/TracksTabList';

import { useAppSelector } from '@/store/store-hooks';
const PlaylistDetails: React.FC = (): JSX.Element => {
  const playlistTracks = useAppSelector(
    (state) => state.global.playlistDetails
  ).tracks.items.map((item) => item.track);
  return (
    <div className='mxsm:flex-col mxsm:items-center flex w-full max-w-[1350px] items-start justify-center gap-16'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <PlaylistHeader />
        <GetRecommendationsButton />
      </div>
      <TracksTabList tracks={playlistTracks} />
    </div>
  );
};
export default PlaylistDetails;

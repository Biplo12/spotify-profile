import React from 'react';

import TrackItem from '@/components/Profile/Tracks/Partials/TrackItem';

import { ITrack } from '@/interfaces/IGlobalReducerInterface';

interface ITracksTabListProps {
  tracks: ITrack[];
}

const TracksTabList: React.FC<ITracksTabListProps> = ({
  tracks,
}): JSX.Element => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center gap-8'>
      {tracks?.map((track, index) => (
        <TrackItem key={index} track={track} index={index} />
      ))}
    </div>
  );
};
export default TracksTabList;

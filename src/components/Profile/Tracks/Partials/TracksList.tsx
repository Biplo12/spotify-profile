import React from 'react';

import TrackItem from '@/components/Profile/Tracks/Partials/TrackItem';

import { useAppSelector } from '@/store/store-hooks';
const TracksList: React.FC = (): JSX.Element => {
  const tracks = useAppSelector((state) => state.global.tracks).long_term.slice(
    0,
    10
  );

  return (
    <div className='flex w-full flex-col items-start justify-start gap-8'>
      {tracks?.map((track, index) => (
        <TrackItem track={track} index={index} key={index} />
      ))}
    </div>
  );
};
export default TracksList;

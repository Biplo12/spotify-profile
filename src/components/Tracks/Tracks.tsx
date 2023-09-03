import React, { useState } from 'react';

import TracksTabList from '@/components/Tracks/Partials/TracksTabList';
import TracksTabSortPanel from '@/components/Tracks/Partials/TracksTabSortPanel';

import { useAppSelector } from '@/store/store-hooks';
const Tracks: React.FC = (): JSX.Element => {
  const [timeRange, setTimeRange] = useState('long_term');
  const tracks = useAppSelector((state) => state.global.tracks)[
    timeRange as 'long_term' | 'medium_term' | 'short_term'
  ];
  return (
    <div className='flex w-full max-w-[1200px] flex-col items-start justify-start gap-8'>
      <TracksTabSortPanel timeRange={timeRange} setTimeRange={setTimeRange} />
      <TracksTabList tracks={tracks} />
    </div>
  );
};
export default Tracks;

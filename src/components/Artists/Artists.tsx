import React, { useState } from 'react';

import ArtistsTabList from '@/components/Artists/Partials/ArtistsTabList';
import ArtistsTabSortPanel from '@/components/Artists/Partials/ArtistsTabSortPanel';

import { useAppSelector } from '@/store/store-hooks';
const Artists: React.FC = (): JSX.Element => {
  const [timeRange, setTimeRange] = useState('long_term');
  const artists = useAppSelector((state) => state.global.artists)[
    timeRange as 'long_term' | 'medium_term' | 'short_term'
  ];
  return (
    <div className='flex w-full max-w-[1200px] flex-col items-start justify-start gap-8'>
      <ArtistsTabSortPanel timeRange={timeRange} setTimeRange={setTimeRange} />
      <ArtistsTabList artists={artists} />
    </div>
  );
};
export default Artists;

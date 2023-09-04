import React from 'react';

import RecommendationsHeader from '@/components/Recommendations/Partials/RecommendationsHeader';
import TracksTabList from '@/components/Tracks/Partials/TracksTabList';

import { useAppSelector } from '@/store/store-hooks';
const Recommendations: React.FC = (): JSX.Element => {
  const recommendationsTracks = useAppSelector(
    (state) => state.global.recommendations
  ).tracks;
  return (
    <div className='mxsm:items-center flex w-full max-w-[1200px] flex-col items-start justify-center gap-16'>
      <div className='flex w-full items-center justify-between gap-4'>
        <RecommendationsHeader />
        {/* <SaveToSpotifyButton /> */}
      </div>
      <TracksTabList tracks={recommendationsTracks} />
    </div>
  );
};
export default Recommendations;

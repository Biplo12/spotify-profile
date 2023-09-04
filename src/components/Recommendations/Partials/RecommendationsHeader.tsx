import Link from 'next/link';
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const RecommendationsHeader: React.FC = (): JSX.Element => {
  const recommendations = useAppSelector(
    (state) => state.global.recommendations
  );
  return (
    <div className='mxsm:text-center flex flex-col items-start justify-center space-y-2'>
      <h1 className='text-2xl font-bold'>Recommended Tracks Based On</h1>
      <Link
        href={`/playlist/${recommendations.playlistId}`}
        className='hover:text-spotify-green text-xl duration-200 ease-linear'
      >
        {recommendations.playlistName}
      </Link>
    </div>
  );
};
export default RecommendationsHeader;

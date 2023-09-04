import Link from 'next/link';
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const RecommendationsHeader: React.FC = (): JSX.Element => {
  const recommendations = useAppSelector(
    (state) => state.global.recommendations
  );
  return (
    <div>
      <h1 className='text-2xl font-bold'>Recommended Tracks Based On</h1>
      <Link
        href={`/playlist/${recommendations.playlistId}`}
        className='hover:text-spotify-green text-xl font-bold duration-200 ease-linear'
      >
        {recommendations.playlistName}
      </Link>
    </div>
  );
};
export default RecommendationsHeader;

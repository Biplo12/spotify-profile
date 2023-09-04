import Link from 'next/link';
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const GetRecommendationsButton: React.FC = (): JSX.Element => {
  const playlist = useAppSelector((state) => state.global.playlistDetails);
  return (
    <Link
      href={`/recommendations/${playlist.id}`}
      className='bg-spotify-green text-spotify-white rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[2px] duration-150 ease-linear hover:brightness-110'
    >
      Get Recommendations
    </Link>
  );
};
export default GetRecommendationsButton;

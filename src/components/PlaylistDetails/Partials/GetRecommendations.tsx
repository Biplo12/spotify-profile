import Link from 'next/link';
import React from 'react';
const GetRecommendations: React.FC = (): JSX.Element => {
  return (
    <Link
      href=''
      target='_blank'
      rel='noopener noreferrer'
      className='bg-spotify-green text-spotify-white rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[2px] duration-150 ease-linear hover:brightness-110'
    >
      Get Recommendations
    </Link>
  );
};
export default GetRecommendations;

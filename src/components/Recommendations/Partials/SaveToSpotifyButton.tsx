import Link from 'next/link';
import React from 'react';

const SaveToSpotifyButton: React.FC = (): JSX.Element => {
  return (
    <Link
      href=''
      className='bg-spotify-green text-spotify-white rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[2px] duration-150 ease-linear hover:brightness-110'
    >
      Open in Spotify
    </Link>
  );
};
export default SaveToSpotifyButton;

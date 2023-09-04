import Link from 'next/link';
import React from 'react';

interface IPlayOnSpotifyButtonProps {
  uri: string;
}

const PlayOnSpotifyButton: React.FC<IPlayOnSpotifyButtonProps> = ({
  uri,
}): JSX.Element => {
  return (
    <Link
      href={uri}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-spotify-green text-spotify-white rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[2px] duration-150 ease-linear hover:brightness-110'
    >
      Play on Spotify
    </Link>
  );
};
export default PlayOnSpotifyButton;

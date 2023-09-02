import React from 'react';
const SpotifyAuthButton: React.FC = (): JSX.Element => {
  return (
    <button className='bg-spotify-green text-spotify-white rounded-full px-6 py-3 font-semibold uppercase tracking-[2px] duration-150 ease-linear hover:brightness-110'>
      Log in to Spotify
    </button>
  );
};
export default SpotifyAuthButton;

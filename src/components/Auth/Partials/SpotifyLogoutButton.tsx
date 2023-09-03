import React from 'react';
const SpotifyLogoutButton: React.FC = (): JSX.Element => {
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('spotify_token_timestamp');
    window.location.reload();
  };
  return (
    <button
      className='text-spotify-white hover:bg-spotify-white hover:text-spotify-black border-spotify-white rounded-full border bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[2px] duration-150 ease-linear'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
export default SpotifyLogoutButton;

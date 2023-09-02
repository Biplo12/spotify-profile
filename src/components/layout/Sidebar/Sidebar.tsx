import React from 'react';

import GithubLogo from '@/components/common/GithubLogo';
import SpotifyLogo from '@/components/common/SpotifyLogo';
import SidebarLinks from '@/components/layout/Sidebar/Partials/SidebarLinks';
const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className='bg-spotify-black fixed left-0 top-0 z-10 flex h-screen w-[6.5rem] flex-col items-center justify-between py-8 shadow-lg'>
      <SpotifyLogo />
      <SidebarLinks />
      <GithubLogo />
    </div>
  );
};
export default Sidebar;

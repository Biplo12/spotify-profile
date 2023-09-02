import Link from 'next/link';
import React from 'react';

import GithubLogo from '@/components/common/GithubLogo';
import SpotifyLogo from '@/components/common/SpotifyLogo';
import SidebarLinks from '@/components/layout/Sidebar/Partials/SidebarLinks';

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className='bg-spotify-black mxsm:bottom-0 mxsm:flex-row mxsm:w-full mxsm:h-20 fixed left-0 z-10 flex h-screen w-[6.5rem] flex-col items-center justify-between py-8 shadow-lg'>
      <Link className='mxsm:hidden' href='/'>
        <SpotifyLogo />
      </Link>
      <SidebarLinks />
      <GithubLogo />
    </div>
  );
};

export default Sidebar;

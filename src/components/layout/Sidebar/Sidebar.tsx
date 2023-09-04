import React from 'react';

import GithubLogo from '@/components/common/GithubLogo';
import SpotifyLogo from '@/components/common/SpotifyLogo';
import SidebarLinks from '@/components/layout/Sidebar/Partials/SidebarLinks';

import { useAppDispatch } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';

const Sidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleChangeToProfile = () => {
    dispatch(selectTab('profile'));
  };

  return (
    <div className='bg-spotify-black mxsm:bottom-0 mxsm:flex-row mxsm:w-full mxsm:h-20 fixed left-0 z-10 flex h-screen w-[6.5rem] flex-col items-center justify-between py-8 shadow-lg'>
      <button className='mxsm:hidden' onClick={handleChangeToProfile}>
        <SpotifyLogo />
      </button>
      <SidebarLinks />
      <GithubLogo />
    </div>
  );
};

export default Sidebar;

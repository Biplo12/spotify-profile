import React from 'react';

import SidebarLink from '@/components/layout/Sidebar/Partials/SidebarLink';

import MicIcon from '~/svg/mic-icon.svg';
import NoteIcon from '~/svg/note-icon.svg';
import PlaylistIcon from '~/svg/playlist-icon.svg';
import RecentIcon from '~/svg/recent-icon.svg';
import UserIcon from '~/svg/user-icon.svg';

const SidebarLinks: React.FC = (): JSX.Element => {
  const sidebarLinks = [
    {
      icon: <UserIcon />,
      text: 'Profile',
    },
    {
      icon: <MicIcon />,
      text: 'Artists',
    },
    {
      icon: <NoteIcon />,
      text: 'Tracks',
    },
    {
      icon: <RecentIcon />,
      text: 'Recent',
    },
    {
      icon: <PlaylistIcon />,
      text: 'Playlists',
    },
  ];
  return (
    <div className='mxsm:flex-row flex w-full flex-col items-center justify-center'>
      {sidebarLinks.map((link, index) => {
        return <SidebarLink key={index} link={link} />;
      })}
    </div>
  );
};
export default SidebarLinks;

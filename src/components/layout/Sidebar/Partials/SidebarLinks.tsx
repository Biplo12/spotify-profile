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
      link: '/profile',
    },
    {
      icon: <MicIcon />,
      text: 'Top Artists',
      link: '/artists',
    },
    {
      icon: <NoteIcon />,
      text: 'Top Tracks',
      link: '/songs',
    },
    {
      icon: <RecentIcon />,
      text: 'Recent',
      link: '/recent',
    },
    {
      icon: <PlaylistIcon />,
      text: 'Playlists',
      link: '/playlists',
    },
  ];
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      {sidebarLinks.map((link, index) => {
        return <SidebarLink key={index} link={link} />;
      })}
    </div>
  );
};
export default SidebarLinks;

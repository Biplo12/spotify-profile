import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const UserStats: React.FC = (): JSX.Element => {
  const user = useAppSelector((state) => state.global.user);
  const playlistsNumber = useAppSelector(
    (state) => state.global.playlists
  )?.length;
  const stats = [
    {
      name: 'Followers',
      value: user?.followers,
    },
    {
      name: 'Following',
      value: user?.following,
    },
    {
      name: 'Playlists',
      value: playlistsNumber,
    },
  ];
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {stats.map((stat, index) => (
          <div
            className='flex flex-col items-center justify-center'
            key={index}
          >
            <span className='text-spotify-green text-xl font-bold'>
              {stat.value}
            </span>
            <p className='text-xs uppercase tracking-[2px] opacity-75'>
              {stat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserStats;

/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SpotifyLogoutButton from '@/components/Auth/Partials/SpotifyLogoutButton';
import UserStats from '@/components/Profile/UserDetails/Partials/UserStats';

import { useAppSelector } from '@/store/store-hooks';
const UserDetails: React.FC = (): JSX.Element => {
  const user = useAppSelector((state) => state.global.user);
  return (
    <div className='flex w-full flex-col items-center justify-center gap-8'>
      <img src={user?.image} alt='avatar' className='h-32 w-32 rounded-full' />
      <h1 className='text-center text-5xl font-bold'>{user?.name}</h1>
      <UserStats />
      <SpotifyLogoutButton />
    </div>
  );
};
export default UserDetails;

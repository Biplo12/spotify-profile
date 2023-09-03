import React from 'react';

import Artists from '@/components/Profile/Artists/Artists';
import Tracks from '@/components/Profile/Tracks/Tracks';
import UserDetails from '@/components/Profile/UserDetails/UserDetails';
const Profile: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-between gap-24'>
      <UserDetails />
      <div className='mxsm:flex-col flex w-full items-start justify-center gap-24'>
        <Artists />
        <Tracks />
      </div>
    </div>
  );
};
export default Profile;

import React from 'react';

import AuthHeader from '@/components/Auth/Partials/AuthHeader';
import SpotifyAuthButton from '@/components/Auth/Partials/SpotifyAuthButton';
const Auth: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 text-center'>
      <AuthHeader />
      <SpotifyAuthButton />
    </div>
  );
};
export default Auth;

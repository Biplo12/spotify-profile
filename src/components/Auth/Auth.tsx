import React from 'react';

import AuthHeader from '@/components/Auth/Partials/AuthHeader';
import SpotifyAuthButton from '@/components/Auth/Partials/SpotifyAuthButton';
import SpotifyLogo from '@/components/common/SpotifyLogo';
const Auth: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 text-center'>
      <SpotifyLogo />
      <AuthHeader />
      <SpotifyAuthButton />
    </div>
  );
};
export default Auth;

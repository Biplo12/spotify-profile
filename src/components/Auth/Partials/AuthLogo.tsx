import React from 'react';

import SpotifyLogo from '@/components/common/SpotifyLogo';
const AuthLogo: React.FC = (): JSX.Element => {
  return (
    <div className='absolute left-0 top-0 z-10'>
      <SpotifyLogo />
    </div>
  );
};
export default AuthLogo;

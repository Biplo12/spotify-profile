import React from 'react';
const AuthHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-3 text-center'>
      <h1 className='text-4xl font-bold'>Spotify Profile</h1>
      <p>Login with Spotify to view your profile data.</p>
    </div>
  );
};
export default AuthHeader;

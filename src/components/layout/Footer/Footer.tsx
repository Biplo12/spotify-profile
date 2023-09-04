import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='bg-spotify-grey mxsm:mb-[78px] flex w-full flex-col items-center justify-center pb-4'>
      <h3 className='text-spotify-white text-center text-xs'>
        Build by <span className='text-spotify-green'>Robert Sinski</span>
      </h3>
      <h3 className='text-spotify-white text-center text-xs'>
        Design heavily inspired by{' '}
        <span className='text-spotify-green'>Brittany Chiang</span>
      </h3>
    </footer>
  );
};
export default Footer;

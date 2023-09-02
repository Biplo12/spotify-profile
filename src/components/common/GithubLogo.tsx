import Link from 'next/link';
import React from 'react';

import GithubLogoIcon from '~/svg/github-icon.svg';

const REPOSITORY_URL = 'https://github.com/Biplo12/spotify-profile';

const GithubLogo: React.FC = (): JSX.Element => {
  return (
    <Link
      href={REPOSITORY_URL}
      target='_blank'
      rel='noopener noreferrer'
      className='mxsm:hidden'
    >
      <GithubLogoIcon
        className='h-10 w-10'
        style={{ '--fill-icon': '#fff' }}
        onMouseEnter={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
          e.currentTarget.style.setProperty('--fill-icon', '#1DB954');
        }}
        onMouseLeave={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
          e.currentTarget.style.setProperty('--fill-icon', '#fff');
        }}
      />
    </Link>
  );
};

export default GithubLogo;

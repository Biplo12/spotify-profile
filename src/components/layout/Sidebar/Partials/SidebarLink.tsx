import Link from 'next/link';
import React, { useState } from 'react';

interface ISidebarLinkProps {
  link: {
    icon: JSX.Element;
    text: string;
    link: string;
  };
}

interface CustomCSSProperties extends React.CSSProperties {
  '--fill-icon'?: string;
}

const SidebarLink: React.FC<ISidebarLinkProps> = ({ link }): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Link
      href={link.link}
      className='relative flex h-full w-full flex-col items-center justify-center gap-2 py-4'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-spotify-white absolute left-0 top-0 h-full w-full duration-200 ease-linear ${
          isHovered ? 'opacity-10' : 'opacity-0'
        }`}
      />
      <div
        className={`bg-spotify-green mxsm:w-full mxsm:h-1 absolute left-0 top-0 h-full w-1 duration-200 ease-linear ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        style={
          {
            '--fill-icon': `${
              isHovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)'
            }`,
          } as CustomCSSProperties
        }
        className='sidebar-link-icon'
      >
        {link.icon}
      </div>
      <p
        className={`text-[0.75rem] ${
          isHovered ? 'text-spotify-white ' : 'text-white opacity-50'
        }`}
      >
        {link.text}
      </p>
    </Link>
  );
};

export default SidebarLink;

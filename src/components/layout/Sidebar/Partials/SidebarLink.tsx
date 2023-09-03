import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectTab } from '@/state/globalSlice';

interface ISidebarLinkProps {
  link: {
    icon: JSX.Element;
    text: string;
  };
}

interface CustomCSSProperties extends React.CSSProperties {
  '--fill-icon'?: string;
}

const SidebarLink: React.FC<ISidebarLinkProps> = ({ link }): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();
  const selectedTab = useAppSelector((state) => state.global.selectedTab);
  const isSelected = selectedTab === link.text.toLowerCase();
  const dispatch = useAppDispatch();
  const handleSelectTab = () => {
    if (router.pathname !== '/') {
      router.push('/');
    }
    dispatch(selectTab(link.text.toLowerCase()));
  };
  return (
    <button
      className='relative flex h-full w-full flex-col items-center justify-center gap-2 py-4'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleSelectTab}
    >
      <div
        className={`bg-spotify-white absolute left-0 top-0 h-full w-full duration-200 ease-linear ${
          isHovered || isSelected ? 'opacity-10' : 'opacity-0'
        }`}
      />
      <div
        className={`bg-spotify-green mxsm:w-full mxsm:h-1 absolute left-0 top-0 h-full w-1 duration-200 ease-linear ${
          isHovered || isSelected ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        style={
          {
            '--fill-icon': `${
              isHovered || isSelected
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.5)'
            }`,
          } as CustomCSSProperties
        }
        className='sidebar-link-icon'
      >
        {link.icon}
      </div>
      <p
        className={`text-[0.75rem] ${
          isHovered || isSelected
            ? 'text-spotify-white '
            : 'text-white opacity-50'
        }`}
      >
        {link.text}
      </p>
    </button>
  );
};

export default SidebarLink;

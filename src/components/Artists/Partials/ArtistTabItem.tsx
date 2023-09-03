/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';

import InfoLabel from '@/components/common/InfoLabel';

interface IArtistTabItemProps {
  image: string;
  name: string;
  id: string;
  index: number;
}

const ArtistTabItem: React.FC<IArtistTabItemProps> = ({
  image,
  name,
  id,
  index,
}): JSX.Element => {
  const [isHovered, setIsHovered] = useState({
    state: false,
    index: 0,
  });
  return (
    <Link
      href={`/artist/${id}`}
      className='flex w-full flex-col items-center justify-start gap-4'
    >
      <div className='relative'>
        <img
          className={`h-40 w-40 duration-150 ease-linear ${
            isHovered.index === index && isHovered.state ? 'opacity-30' : ''
          } rounded-full`}
          onMouseEnter={() => setIsHovered({ state: true, index })}
          onMouseLeave={() => setIsHovered({ state: false, index })}
          src={image}
          alt={name}
        />

        <div
          className={`transform' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-150 ease-linear ${
            isHovered.index === index && isHovered.state
              ? 'opacity-100'
              : 'opacity-0'
          } `}
        >
          <InfoLabel />
        </div>
      </div>
      <h1 className='hover:border-spotify-white focus:border-spotify-white border-b border-transparent duration-150 ease-in-out'>
        {name}
      </h1>
    </Link>
  );
};
export default ArtistTabItem;

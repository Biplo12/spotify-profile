/* eslint-disable @next/next/no-img-element */
import React from 'react';

import InfoLabel from '@/components/common/InfoLabel';

interface IInfoImageProps {
  url: string;
  alt: string;
  index: number;
  isHovered: {
    state: boolean;
    index: number;
  };
  isRounded?: boolean;
}

const InfoImage: React.FC<IInfoImageProps> = ({
  url,
  alt,
  index,
  isHovered,
  isRounded,
}): JSX.Element => {
  return (
    <div className='relative'>
      <img
        className={`h-full max-h-[50px] w-full max-w-[50px] duration-150 ease-linear ${
          isHovered.index === index && isHovered.state ? 'opacity-30' : ''
        } ${isRounded ? 'rounded-full' : ''}`}
        src={url}
        alt={alt}
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
  );
};
export default InfoImage;

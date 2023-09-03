import Link from 'next/link';
import React, { useState } from 'react';

import InfoImage from '@/components/common/InfoImage';
import ArtistDetails from '@/components/Profile/Artists/Partials/ArtistDetails';

interface IAristItemProps {
  artist: {
    id: string;
    name: string;
    image: string;
  };
  index: number;
}

const ArtistItem: React.FC<IAristItemProps> = ({
  artist,
  index,
}): JSX.Element => {
  const [isHovered, setIsHovered] = useState({
    state: false,
    index: 0,
  });
  return (
    <Link
      href={`/artist/${artist?.id}`}
      className='flex items-center justify-center gap-4'
      key={index}
      onMouseEnter={() => setIsHovered({ state: true, index })}
      onMouseLeave={() => setIsHovered({ state: false, index })}
    >
      <InfoImage
        url={artist?.image}
        alt={artist?.name}
        index={index}
        isHovered={isHovered}
        isRounded={true}
      />
      <ArtistDetails name={artist?.name} index={index} isHovered={isHovered} />
    </Link>
  );
};
export default ArtistItem;

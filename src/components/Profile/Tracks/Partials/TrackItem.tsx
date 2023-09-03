import Link from 'next/link';
import React, { useState } from 'react';

import InfoImage from '@/components/common/InfoImage';
import TrackDetails from '@/components/Profile/Tracks/Partials/TrackDetails';
import TrackDuration from '@/components/Profile/Tracks/Partials/TrackDuration';

interface ITrackItemProps {
  track: {
    id: string;
    name: string;
    image: string;
    artists: {
      id: string;
      name: string;
    }[];
    album: {
      id: string;
      name: string;
    };
    duration: number;
    explicit: boolean;
    popularity: number;
    uri: string;
  };
  index: number;
}

const TrackItem: React.FC<ITrackItemProps> = ({
  track,
  index,
}): JSX.Element => {
  const [isHovered, setIsHovered] = useState({
    state: false,
    index: 0,
  });

  return (
    <Link
      href={`/track/${track?.id}`}
      className='flex w-full items-center gap-4'
      key={index}
      onMouseEnter={() => setIsHovered({ state: true, index })}
      onMouseLeave={() => setIsHovered({ state: false, index })}
    >
      <InfoImage
        url={track?.image}
        alt={track?.name}
        index={index}
        isHovered={isHovered}
        isRounded={false}
      />
      <div className='flex w-full items-center justify-between gap-4'>
        <TrackDetails
          name={track?.name}
          artists={track?.artists}
          album={track?.album}
          index={index}
          isHovered={isHovered}
        />
        <TrackDuration duration={track?.duration} />
      </div>
    </Link>
  );
};
export default TrackItem;

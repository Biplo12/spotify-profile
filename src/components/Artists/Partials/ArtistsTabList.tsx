import React from 'react';

import ArtistTabItem from '@/components/Artists/Partials/ArtistTabItem';

import { IArtist } from '@/interfaces/IGlobalReducerInterface';

interface IArtistsTabListProps {
  artists: IArtist[];
}

const ArtistsTabList: React.FC<IArtistsTabListProps> = ({
  artists,
}): JSX.Element => {
  return (
    <div className='grid-container mxsm:justify-center mxsm:items-center min-h-screen w-full items-start justify-start'>
      {artists?.map((artist, index) => (
        <ArtistTabItem
          image={artist.image}
          name={artist.name}
          id={artist.id}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};
export default ArtistsTabList;

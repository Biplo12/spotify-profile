import React from 'react';

interface IArtistDetailsProps {
  name: string;
  index: number;
  isHovered: {
    state: boolean;
    index: number;
  };
}

const ArtistDetails: React.FC<IArtistDetailsProps> = ({
  name,
  index,
  isHovered,
}): JSX.Element => {
  return (
    <h1
      className={`text-spotify-white ${
        isHovered.index === index && isHovered.state
          ? 'border-spotify-green border-b'
          : ''
      }`}
    >
      {name}
    </h1>
  );
};
export default ArtistDetails;

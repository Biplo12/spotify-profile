import React, { Fragment, useEffect, useState } from 'react';

interface ITrackDetailsProps {
  name: string;
  artists: {
    name: string;
  }[];
  album: {
    name: string;
  };
  index: number;
  isHovered: {
    index: number;
    state: boolean;
  };
}

const TrackDetails: React.FC<ITrackDetailsProps> = ({
  name,
  artists,
  album,
  index,
  isHovered,
}): JSX.Element => {
  const [slicedEnd, setSlicedEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const calculatedSlicedEnd = windowWidth / 65;
      if (windowWidth > 768) setSlicedEnd(30);
      if (windowWidth <= 640) {
        setSlicedEnd(100);
        return;
      }
      setSlicedEnd(calculatedSlicedEnd);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [name, artists, album]);

  const slicedName = name?.slice(0, slicedEnd);
  const slicedAlbumName = album?.name.slice(0, slicedEnd);

  return (
    <div className='flex flex-col items-start justify-start gap-2'>
      <h1
        className={`text-spotify-white border-b ${
          isHovered.index === index && isHovered.state
            ? 'border-spotify-green '
            : 'border-transparent'
        }`}
      >
        {slicedName}
        {slicedName.length < name.length && '...'}
      </h1>
      <h2 className='flex items-center justify-center gap-2 text-xs opacity-75'>
        {artists.map((artist, index) => (
          <Fragment key={index}>
            {index > 1 ? (
              '...'
            ) : (
              <span className='flex items-center justify-center'>
                {artist.name} {slicedName.length < name.length && '...'}
              </span>
            )}
          </Fragment>
        ))}
        <span className='text-[0.3rem]'>&#8226;</span>
        <span>
          {slicedAlbumName}
          {slicedAlbumName.length < album.name.length && '...'}
        </span>
      </h2>
    </div>
  );
};

export default TrackDetails;

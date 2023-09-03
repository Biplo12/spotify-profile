import React from 'react';

interface ITrackDurationProps {
  duration: number;
}

const TrackDuration: React.FC<ITrackDurationProps> = ({
  duration,
}): JSX.Element => {
  return (
    <p className='text-spotify-white opacity-75'>
      {new Date(duration)
        .toLocaleTimeString([], {
          minute: '2-digit',
          second: '2-digit',
        })
        .replace(/^0/, '')}
    </p>
  );
};
export default TrackDuration;

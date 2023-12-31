import React from 'react';

import useGetUserArtistsByRange from '@/hooks/useGetUserArtistsByRange';

interface IArtistsTabSortPanelProps {
  setTimeRange: React.Dispatch<React.SetStateAction<string>>;
  timeRange: string;
}

const ArtistsTabSortPanel: React.FC<IArtistsTabSortPanelProps> = ({
  setTimeRange,
  timeRange,
}): JSX.Element => {
  const handleTimeRange = (timeRange: string) => {
    setTimeRange(timeRange);
  };
  useGetUserArtistsByRange(timeRange);

  const timeRanges = [
    { name: 'All Time', value: 'long_term' },
    { name: 'Last 6 Months', value: 'medium_term' },
    { name: 'Last 4 Weeks', value: 'short_term' },
  ];

  return (
    <div className='mxsm:justify-center flex w-full flex-wrap items-center justify-between gap-8'>
      <h1 className='text-center text-2xl font-bold'>Top Artists</h1>
      <div className='flex items-center justify-center gap-4'>
        {timeRanges.map((timeRangeItem, index) => (
          <button
            key={index}
            onClick={() => handleTimeRange(timeRangeItem.value)}
            className={`border-b ${
              timeRange === timeRangeItem.value
                ? ' border-spotify-white opacity-100'
                : 'border-transparent opacity-50'
            } mxsm:text-sm duration-300 ease-in-out hover:opacity-100 focus:opacity-100`}
          >
            {timeRangeItem.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ArtistsTabSortPanel;

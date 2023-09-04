import React from 'react';

import { useAppSelector } from '@/store/store-hooks';

const TrackStatsTable: React.FC = (): JSX.Element => {
  const pitchNotationMap = {
    0: 'C',
    1: 'D♭',
    2: 'D',
    3: 'E♭',
    4: 'E',
    5: 'F',
    6: 'F#',
    7: 'G',
    8: 'G♭',
    9: 'A',
    10: 'A♭',
    11: 'B',
  };
  const modalityMap = {
    0: 'Minor',
    1: 'Major',
  };
  const trackStats = useAppSelector((state) => state.global.trackDetails.stats);
  const trackStatsArray = Object.entries(trackStats).map(([key, value]) => ({
    name:
      key === 'timeSignature'
        ? 'Time Signature'
        : key.charAt(0).toUpperCase() + key.slice(1),
    value:
      key === 'duration'
        ? new Date(value)
            .toLocaleTimeString([], {
              minute: '2-digit',
              second: '2-digit',
            })
            .replace(/^0/, '')
        : key === 'popularity'
        ? `${value}%`
        : key === 'key'
        ? pitchNotationMap[value as keyof typeof pitchNotationMap]
        : key === 'modality'
        ? modalityMap[value as keyof typeof modalityMap]
        : value,
  }));

  const columns = 5;

  return (
    <div className='border-spotify-white w-full border'>
      <table className='w-full'>
        <tbody className='divide-spotify-white divide-y'>
          {Array.from({
            length: Math.ceil(trackStatsArray.length / columns),
          }).map((_, rowIndex) => (
            <tr
              key={rowIndex}
              className='mxxsm:divide-y mxxsm:w-full mxxsm:grid-cols-1 grid grid-cols-5 divide-x'
            >
              {trackStatsArray
                .slice(rowIndex * columns, (rowIndex + 1) * columns)
                .map((stat) => (
                  <td
                    key={stat.name}
                    className='mxxsm:px-0 flex flex-col items-center justify-center px-8 py-4'
                  >
                    <h1 className='mxxsm:w-full text-center text-2xl font-bold'>
                      {typeof stat.value === 'number'
                        ? stat.value.toFixed(0)
                        : stat.value}
                    </h1>
                    <h2 className='mxxsm:w-full text-center text-xs opacity-50'>
                      {stat.name}
                    </h2>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackStatsTable;

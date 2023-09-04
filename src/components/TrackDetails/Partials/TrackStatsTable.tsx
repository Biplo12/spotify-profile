import React from 'react';

import { useAppSelector } from '@/store/store-hooks';

const TrackStatsTable: React.FC = (): JSX.Element => {
  const trackStats = useAppSelector((state) => state.global.trackDetails.stats);
  const trackStatsArray = Object.entries(trackStats).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value:
      key === 'duration'
        ? new Date(value)
            .toLocaleTimeString([], {
              minute: '2-digit',
              second: '2-digit',
            })
            .replace(/^0/, '')
        : value,
  }));

  const columns = 5;

  return (
    <div className='rounded border border-gray-300'>
      <table className='w-full'>
        <tbody className='divide-y divide-gray-300'>
          {Array.from({
            length: Math.ceil(trackStatsArray.length / columns),
          }).map((_, rowIndex) => (
            <tr key={rowIndex} className='grid grid-cols-5 divide-x'>
              {trackStatsArray
                .slice(rowIndex * columns, (rowIndex + 1) * columns)
                .map((stat) => (
                  <td
                    key={stat.name}
                    className='flex flex-col items-center justify-center px-8 py-4'
                  >
                    <h1 className='text-center text-2xl font-bold'>
                      {typeof stat.value === 'number'
                        ? stat.value.toFixed(0)
                        : stat.value}
                    </h1>
                    <h2 className='text-center text-xs opacity-50'>
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

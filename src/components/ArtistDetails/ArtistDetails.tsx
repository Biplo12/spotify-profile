/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';

const ArtistDetails: React.FC = (): JSX.Element => {
  const artist = useAppSelector((state) => state.global.artistDetails);
  const genresArray = artist.genres.map((genre) =>
    genre
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );

  const artistStats = [
    {
      name: 'Followers',
      value: artist.followers.toLocaleString(),
    },
    {
      name: 'Genres',
      value: genresArray.map((genre, index) => (
        <div key={index}>
          <span>{genre}</span>
        </div>
      )),
    },
    {
      name: 'Popularity',
      value: `${artist.popularity}%`,
    },
  ];
  return (
    <div className='flex w-full max-w-[1350px] flex-col items-center justify-center gap-16'>
      <img
        src={artist.image}
        alt={artist.name}
        className='h-full max-h-[300px] w-full max-w-[300px] rounded-full object-cover'
      />
      <h1 className='text-center text-6xl font-bold'>{artist.name}</h1>
      <div className='flex flex-wrap items-start justify-center gap-8'>
        {artistStats.map((stat, index) => (
          <div
            className='flex flex-col items-center justify-center'
            key={index}
          >
            <span className='text-spotify-green text-center text-2xl font-bold'>
              {stat.value}
            </span>
            <p className='text-xs uppercase tracking-[2px] opacity-75'>
              {stat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArtistDetails;

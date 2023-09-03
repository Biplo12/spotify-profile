/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setArtists } from '@/state/globalSlice';

interface IArtist {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  followers: {
    total: number;
  };
  popularity: number;
  genres: string[];
}

const useGetUserArtistsByRange = (range: string) => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const artistsSelector = useAppSelector((state) => state.global.artists);
  const { refetch: fetchArtistsByRange, data: artists } = useQuery({
    queryKey: ['getUserArtists'],
    queryFn: async () =>
      await axios.get(
        `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${range}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ),
    enabled: false,
  });

  useEffect(() => {
    if (artistsSelector?.[range as keyof typeof artistsSelector]?.length)
      return;
    fetchArtistsByRange();
    if (artists) {
      if (!artists) return;
      const artistsData = artists?.data?.items?.map((artist: IArtist) => ({
        id: artist.id,
        name: artist.name,
        image: artist.images?.[0]?.url,
        followers: artist.followers.total,
        popularity: artist.popularity,
        genres: artist.genres,
      }));
      dispatch(
        setArtists({
          data: artistsData,
          range,
        })
      );
    }
  }, [dispatch, fetchArtistsByRange, range]);
};

export default useGetUserArtistsByRange;

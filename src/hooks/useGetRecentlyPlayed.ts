import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setRecentlyPlayed } from '@/state/globalSlice';

interface ITrack {
  track: {
    id: string;
    name: string;
    album: {
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
    duration_ms: number;
    explicit: boolean;
    popularity: number;
    uri: string;
  };
}

const useGetRecentlyPlayed = () => {
  const access_token = getFromLocalStorage('access_token');
  const selectedTab = useAppSelector((state) => state.global.selectedTab);
  const dispatch = useAppDispatch();
  const { refetch: fetchRecentlyPlayed } = useQuery({
    queryKey: ['getRecentlyPlayed'],
    queryFn: async () =>
      await axios.get(
        `https://api.spotify.com/v1/me/player/recently-played?limit=50`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ),
    enabled: false,
  });

  useEffect(() => {
    const hanldeFetchRecentlyPlayed = async () => {
      if (selectedTab.toLocaleLowerCase() !== 'recent') return;
      if (!access_token) return;
      const { data: recentlyPlayed } = await fetchRecentlyPlayed();
      if (!recentlyPlayed) return;
      const recentlyPlayedData = recentlyPlayed?.data?.items?.map(
        (track: ITrack) => ({
          id: track.track.id,
          name: track.track.name,
          image: track.track.album.images[0].url,
          artists: track.track.artists,
          album: track.track.album,
          duration: track.track.duration_ms,
          explicit: track.track.explicit,
          popularity: track.track.popularity,
          uri: track.track.uri,
        })
      );
      dispatch(setRecentlyPlayed(recentlyPlayedData));
    };
    hanldeFetchRecentlyPlayed();
  }, [dispatch, fetchRecentlyPlayed, selectedTab, access_token]);
};

export default useGetRecentlyPlayed;

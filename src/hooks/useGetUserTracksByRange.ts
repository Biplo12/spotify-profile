import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setTracks } from '@/state/globalSlice';

interface ITrack {
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
}

const useGetUserTracksByRange = (range: string) => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const tracksSelector = useAppSelector((state) => state.global.tracks);
  const { refetch: fetchTracksByRange, data: tracks } = useQuery({
    queryKey: [`getUserTracksByRange`, range],
    queryFn: async () =>
      await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${range}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ),
    enabled: false,
  });

  useEffect(() => {
    const hanldeFetchTracksByRange = async () => {
      if (tracksSelector?.[range as keyof typeof tracksSelector]?.length > 0)
        return;
      const { data: tracks } = await fetchTracksByRange();
      if (!tracks) return;
      const tracksData = tracks?.data?.items?.map((track: ITrack) => ({
        id: track.id,
        name: track.name,
        image: track.album.images[0].url,
        artists: track.artists,
        album: track.album,
        duration: track.duration_ms,
        explicit: track.explicit,
        popularity: track.popularity,
        uri: track.uri,
      }));
      dispatch(
        setTracks({
          data: tracksData,
          range,
        })
      );
    };
    hanldeFetchTracksByRange();
  }, [dispatch, fetchTracksByRange, range, tracks, tracksSelector]);
};

export default useGetUserTracksByRange;

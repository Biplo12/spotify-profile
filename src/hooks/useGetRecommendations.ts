import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setRecommendations } from '@/state/globalSlice';

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

const useGetRecommendations = (id: string) => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const playlist = useAppSelector((state) => state.global.playlistDetails);
  const playlistTracksIds = playlist?.tracks?.items
    ?.map((item) => item?.track?.id)
    .slice(0, 5)
    .join(',');

  const { refetch: fetchRecommendations } = useQuery({
    queryKey: ['getRecommendations', id],
    queryFn: async () =>
      await axios.get(
        `https://api.spotify.com/v1/recommendations?seed_tracks=${playlistTracksIds}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ),
    enabled: !!access_token && !!id,
  });

  const handleFetchRecommendations = async () => {
    if (!access_token) return;
    const { data: recommendations } = await fetchRecommendations();
    if (!recommendations) return;
    const recommendationsData = recommendations?.data?.tracks?.map(
      (track: ITrack) => ({
        id: track.id,
        name: track.name,
        image: track.album.images[0].url,
        artists: track.artists,
        album: track.album,
        duration: track.duration_ms,
        explicit: track.explicit,
        popularity: track.popularity,
        uri: track.uri,
      })
    );
    dispatch(
      setRecommendations({
        tracks: recommendationsData,
        playlistName: playlist?.name,
        playlistId: playlist?.id,
      })
    );
  };
  return handleFetchRecommendations;
};

export default useGetRecommendations;

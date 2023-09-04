import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch } from '@/store/store-hooks';

import { setPlaylistDetails } from '@/state/globalSlice';

interface ITrack {
  id: string;
  name: string;
  image: string;
  artists: {
    id: string;
    name: string;
  }[];
  album: {
    id: string;
    name: string;
    images: {
      url: string;
    }[];
  };
  duration_ms: number;
  explicit: boolean;
  popularity: number;
  uri: string;
}

interface IArtist {
  id: string;
  name: string;
}

const useGetPlaylistById = (id: string) => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const { refetch: fetchPlaylistById } = useQuery({
    queryKey: ['getPlaylistById', id],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token && !!id,
  });

  const handleFetchPlaylistById = async () => {
    if (!access_token) return;
    const { data: playlist } = await fetchPlaylistById();
    if (!playlist) return;
    const playlistDetails = playlist?.data;
    const playlistData = {
      id: playlistDetails.id,
      name: playlistDetails.name,
      image: playlistDetails.images[0].url,
      owner: playlistDetails.owner.display_name,
      description: playlistDetails.description,
      followers: playlistDetails.followers.total,
      tracks: {
        total: playlistDetails.tracks.total,
        items: playlistDetails.tracks.items.map((item: { track: ITrack }) => {
          const track = item.track;
          return {
            track: {
              id: track.id,
              name: track.name,
              image: track.album.images[0].url,
              artists: track.artists.map((artist: IArtist) => {
                return {
                  id: artist.id,
                  name: artist.name,
                };
              }),
              album: {
                id: track.album.id,
                name: track.album.name,
              },
              duration: track.duration_ms,
              explicit: track.explicit,
              popularity: track.popularity,
              uri: track.uri,
            },
          };
        }),
      },
    };
    dispatch(setPlaylistDetails(playlistData));
  };
  return handleFetchPlaylistById;
};

export default useGetPlaylistById;

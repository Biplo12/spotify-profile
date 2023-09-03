import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch } from '@/store/store-hooks';

import { setArtists, setPlaylists, setTracks } from '@/state/globalSlice';

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
interface IPlaylist {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  owner: {
    display_name: string;
  };
  description: string;
  tracks: {
    total: number;
  };
  uri: string;
}

const useGetUserDetails = () => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const { data: playlists } = useQuery({
    queryKey: ['getUserPlaylists'],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
  });
  const { data: artists } = useQuery({
    queryKey: ['getUserArtists'],
    queryFn: async () =>
      await axios.get(
        `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ),
  });
  const { data: tracks } = useQuery({
    queryKey: ['getUserTracks'],
    queryFn: async () =>
      await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ),
  });
  useEffect(() => {
    if (!playlists) return;
    const playlistsData = playlists?.data?.items?.map(
      (playlist: IPlaylist) => ({
        id: playlist.id,
        name: playlist.name,
        image: playlist.images?.[0]?.url,
        description: playlist.description,
        owner: playlist.owner,
        tracks: playlist.tracks,
        uri: playlist.uri,
      })
    );
    dispatch(setPlaylists(playlistsData));
  }, [playlists, dispatch]);

  useEffect(() => {
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
        range: 'long_term',
      })
    );
  }, [artists, dispatch]);

  useEffect(() => {
    const tracksData = tracks?.data?.items?.map((track: ITrack) => ({
      id: track.id,
      name: track.name,
      image: track.album.images?.[0]?.url,
      artists: track.artists,
      album: track.album,
      duration: track.duration_ms,
      explicit: track.explicit,
      popularity: track.popularity,
      uri: track.uri,
    }));
    if (!tracks) return;
    dispatch(
      setTracks({
        data: tracksData,
        range: 'long_term',
      })
    );
  }, [tracks, dispatch]);
};

export default useGetUserDetails;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setArtists, setTracks, setUser } from '@/state/globalSlice';

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

const useGetUserDetails = () => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.global.user);
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
    dispatch(
      setUser({
        ...user,
        playlists: playlists?.data?.items?.length,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!tracks) return;
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
    dispatch(
      setTracks({
        data: tracksData,
        range: 'long_term',
      })
    );
  }, [tracks, dispatch]);
};

export default useGetUserDetails;

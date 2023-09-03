import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch } from '@/store/store-hooks';

import { setArtistDetails } from '@/state/globalSlice';

const useGetArtistById = (id: string) => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const { refetch: fetchArtistById } = useQuery({
    queryKey: ['getArtistById', id],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token && !!id,
  });

  useEffect(() => {
    const hanldeFetchArtistByRange = async () => {
      if (!access_token) return;
      const { data: artist } = await fetchArtistById();
      if (!artist) return;
      const artistDetails = artist?.data;
      const artistData = {
        name: artistDetails.name,
        image: artistDetails.images?.[0]?.url,
        followers: artistDetails.followers.total,
        popularity: artistDetails.popularity,
        genres: artistDetails.genres,
      };
      dispatch(setArtistDetails(artistData));
    };
    hanldeFetchArtistByRange();
  }, [dispatch, access_token, fetchArtistById]);
};

export default useGetArtistById;

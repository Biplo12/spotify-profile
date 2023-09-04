/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch } from '@/store/store-hooks';

import { IArtist } from '@/interfaces/IGlobalReducerInterface';
import { setTrackDetails } from '@/state/globalSlice';

const useGetTrackById = (id: string) => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();

  const { refetch: fetchTrackById } = useQuery({
    queryKey: ['getTrackById', id],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token && !!id,
  });
  const { refetch: fetchTrackStatsById } = useQuery({
    queryKey: ['getTrackStatsId', id],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token && !!id,
  });

  const handleFetchTrackById = async () => {
    if (!access_token) return;
    const { data: track } = await fetchTrackById();
    if (!track) return;
    const trackDetails = track?.data;
    const trackData = {
      name: trackDetails.name,
      image: trackDetails.album.images[0].url,
      artists: trackDetails.artists.map((artist: IArtist) => ({
        id: artist.id,
        name: artist.name,
      })),
      album: {
        id: trackDetails.album.id,
        name: trackDetails.album.name,
        release_date: trackDetails.album.release_date,
      },
      year: trackDetails.album.release_date.split('-')[0],
      uri: trackDetails.uri,
    };

    const { data: trackStats } = await fetchTrackStatsById();
    if (!trackStats) return;
    const trackStatsDetails = trackStats?.data;
    const trackStatsData = {
      duration: trackStatsDetails.duration_ms,
      key: trackStatsDetails.key,
      modality: trackStatsDetails.mode,
      timeSignature: trackStatsDetails.time_signature,
      tempo: trackStatsDetails.tempo,
      popularity: trackStatsDetails.popularity,
      bars: trackStatsDetails.bars,
      beats: trackStatsDetails.beats,
      sections: trackStatsDetails.sections,
      segments: trackStatsDetails.segments,
    };

    dispatch(
      setTrackDetails({
        ...trackData,
        stats: trackStatsData,
      })
    );
  };
  return handleFetchTrackById;
};

export default useGetTrackById;

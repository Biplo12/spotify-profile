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
  const { refetch: fetchTrackFeaturesById } = useQuery({
    queryKey: ['getTrackFeaturesId', id],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token && !!id,
  });
  const { refetch: fetchTrackAnalysisById } = useQuery({
    queryKey: ['getTrackFeaturesId', id],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/audio-analysis/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token && !!id,
  });

  const handleFetchTrackById = async () => {
    if (!access_token) return;
    const { data: track } = await fetchTrackById();
    const { data: trackFeatures } = await fetchTrackFeaturesById();
    const { data: trackAnalysis } = await fetchTrackAnalysisById();
    if (!trackFeatures || !track || !trackAnalysis) return;
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

    const trackFeaturesDetails = trackFeatures?.data;
    const trackAnalysisDetails = trackAnalysis?.data;
    const trackFeaturesData = {
      duration: trackFeaturesDetails.duration_ms,
      key: trackFeaturesDetails.key,
      modality: trackFeaturesDetails.mode,
      timeSignature: trackFeaturesDetails.time_signature,
      tempo: trackFeaturesDetails.tempo,
      popularity: trackDetails.popularity,
      bars: trackAnalysisDetails.bars.length,
      beats: trackAnalysisDetails.beats.length,
      sections: trackAnalysisDetails.sections.length,
      segments: trackAnalysisDetails.segments.length,
    };

    dispatch(
      setTrackDetails({
        ...trackData,
        stats: trackFeaturesData,
      })
    );
  };
  return handleFetchTrackById;
};

export default useGetTrackById;

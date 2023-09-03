import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SPOTIFY_LOGIN_URL = '/api/spotify/spotifyAuth';

const useLoginToSpotify = () => {
  const router = useRouter();
  const handleLogin = async () => {
    window.location.href = SPOTIFY_LOGIN_URL;
  };
  const { access_token, refresh_token, spotify_token_timestamp } = router.query;

  useEffect(() => {
    if (access_token && refresh_token) {
      localStorage.setItem('access_token', access_token as string);
      localStorage.setItem('refresh_token', refresh_token as string);
      localStorage.setItem(
        'spotify_token_timestamp',
        spotify_token_timestamp as string
      );
      router.push('/');
    }
  }, [access_token, refresh_token, router, spotify_token_timestamp]);
  return { handleLogin };
};

export default useLoginToSpotify;

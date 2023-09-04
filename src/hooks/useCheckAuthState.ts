/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

import { getFromLocalStorage } from '@/lib/helper';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setAuth, setUser } from '@/state/globalSlice';

const useCheckAuthState = () => {
  const access_token = getFromLocalStorage('access_token');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.global.user);
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const { refetch: chechAuthState } = useQuery({
    queryKey: ['checkAuthState'],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: false,
  });

  useEffect(() => {
    const handleCheckAuthState = async () => {
      if (access_token && !isAuth) {
        const { data } = await chechAuthState();
        if (data) {
          dispatch(
            setUser({
              ...user,
              name: data.data.display_name,
              image: data.data.images?.[0].url,
              followers: data.data.followers.total,
            })
          );
          dispatch(setAuth(true));
        }
      }
    };
    handleCheckAuthState();
  }, [access_token, chechAuthState, dispatch]);
};

export default useCheckAuthState;

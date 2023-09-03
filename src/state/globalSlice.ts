import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import { IGlobalReducerInterface } from '@/interfaces';

const initialState: IGlobalReducerInterface = {
  isAuth: false,
  selectedTab: 'profile',
  user: {
    name: '',
    image: '',
    followers: 0,
    following: 0,
    playlists: 0,
  },
  artists: [],
  tracks: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setArtists: (state, action) => {
      state.artists = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

const { actions, reducer } = globalSlice;
export const { selectTab, setAuth, setUser, setArtists, setTracks } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;

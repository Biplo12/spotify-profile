import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import { IGlobalReducerInterface } from '@/interfaces';
import { IArtist, ITrack } from '@/interfaces/IGlobalReducerInterface';

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
  artists: {
    short_term: [],
    medium_term: [],
    long_term: [],
  },
  tracks: {
    short_term: [],
    medium_term: [],
    long_term: [],
  },
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
    setArtists: (
      state,
      action: PayloadAction<{ data: IArtist[]; range: string }>
    ) => {
      state.artists[action.payload.range as 'long_term'] = action.payload.data;
    },
    setTracks: (
      state,
      action: PayloadAction<{ data: ITrack[]; range: string }>
    ) => {
      state.tracks[action.payload.range as 'long_term'] = action.payload.data;
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

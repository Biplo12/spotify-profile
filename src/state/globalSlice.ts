import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import { IGlobalReducerInterface } from '@/interfaces';
import { IArtist, ITrack } from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  isAuth: false,
  selectedTab: 'profile',
  user: {
    id: '',
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
  recentlyPlayed: [],
  playlists: [],
  artistDetails: {
    id: '',
    name: '',
    image: '',
    followers: 0,
    genres: [],
    popularity: 0,
  },
  trackDetails: {
    id: '',
    name: '',
    image: '',
    artists: [],
    album: {
      id: '',
      name: '',
      release_date: '',
    },
    year: 0,
    uri: '',
    stats: {
      duration: 0,
      key: '',
      modality: '',
      timeSignature: 0,
      tempo: 0,
      popularity: 0,
      bars: 0,
      beats: 0,
      sections: 0,
      segments: 0,
    },
  },
  playlistDetails: {
    id: '',
    name: '',
    image: '',
    owner: '',
    description: '',
    followers: 0,
    tracks: {
      total: 0,
      items: [],
    },
  },
  recommendations: {
    tracks: [],
    playlistName: '',
    playlistId: '',
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
    setRecentlyPlayed: (state, action) => {
      state.recentlyPlayed = action.payload;
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
    setArtistDetails: (state, action) => {
      state.artistDetails = action.payload;
    },
    setTrackDetails: (state, action) => {
      state.trackDetails = action.payload;
    },
    setPlaylistDetails: (state, action) => {
      state.playlistDetails = action.payload;
    },
    setRecommendations: (state, action) => {
      state.recommendations = action.payload;
    },
  },
});

const { actions, reducer } = globalSlice;
export const {
  selectTab,
  setAuth,
  setUser,
  setArtists,
  setTracks,
  setRecentlyPlayed,
  setPlaylists,
  setArtistDetails,
  setTrackDetails,
  setPlaylistDetails,
  setRecommendations,
} = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;

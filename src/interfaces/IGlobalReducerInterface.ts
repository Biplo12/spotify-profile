export interface IArtist {
  id: string;
  name: string;
  image: string;
  followers: number;
  popularity: number;
  genres: string[];
}

export interface ITrack {
  id: string;
  name: string;
  image: string;
  artists: {
    id: string;
    name: string;
  }[];
  album: {
    id: string;
    name: string;
  };
  duration: number;
  explicit: boolean;
  popularity: number;
  uri: string;
}

export interface ITrackDetails {
  name: string;
  image: string;
  artists: {
    id: string;
    name: string;
  }[];
  album: {
    id: string;
    name: string;
    release_date: string;
  };
  year: number;
  uri: string;
  stats: {
    duration: number;
    key: string;
    modality: string;
    timeSignature: number;
    tempo: number;
    popularity: number;
    bars: number;
    beats: number;
    sections: number;
    segments: number;
  };
}

export interface IPlaylist {
  id: string;
  name: string;
  image: string;
  owner: string;
  description: string;
  tracks: {
    total: number;
  };
  uri: string;
}

export default interface IGlobalReducerInterface {
  isAuth: boolean;
  selectedTab: string;
  user: {
    name: string;
    image: string;
    followers: number;
    following: number;
    playlists: number;
  };
  artists: {
    short_term: IArtist[];
    medium_term: IArtist[];
    long_term: IArtist[];
  };
  tracks: {
    short_term: ITrack[];
    medium_term: ITrack[];
    long_term: ITrack[];
  };
  recentlyPlayed: ITrack[];
  playlists: IPlaylist[];
  artistDetails: IArtist;
  trackDetails: ITrackDetails;
}

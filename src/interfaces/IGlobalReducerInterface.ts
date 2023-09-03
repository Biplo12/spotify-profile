export interface IArtist {
  name: string;
  image: string;
  followers: number;
  popularity: number;
  genres: string[];
}

export interface ITrack {
  name: string;
  image: string;
  artists: string[];
  duration: number;
  explicit: boolean;
  popularity: number;
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
  artists: IArtist[];
  tracks: ITrack[];
}

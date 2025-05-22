
export interface PodcastPreview {
    id: string;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
  }
  
  export interface Show {
    id: string;
    title: string;
    description: string;
    seasons: Season[];
    image: string;
    genres: number[];
    updated: string;
  }
  
  export interface Season {
    season: number;
    title: string;
    image: string;
    episodes: Episode[];
  }
  
  export interface Episode {
    title: string;
    description: string;
    episode: number;
    file: string;
  }
  
  export interface FavoriteEpisode {
    showId: string;
    showTitle: string;
    seasonNumber: number;
    seasonTitle: string;
    episode: Episode;
    addedAt: string;
  }
  
  export interface ListenedEpisode {
    showId: string;
    seasonNumber: number;
    episodeNumber: number;
    listenedAt: string;
  }
  
  export type SortOption = 
    | 'a-z' 
    | 'z-a' 
    | 'newest' 
    | 'oldest';
  
  export interface GenreMap {
    [key: number]: string;
  }
  
  export const GENRES: GenreMap = {
    1: 'Personal Growth',
    2: 'Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family'
  };
  
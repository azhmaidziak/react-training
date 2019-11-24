export enum SearchBy {
  TITLE,
  GENRES
}

export enum SortBy {
  REALIZE_DATE,
  RATING
}

export type SearchPaneModel = {
  query: string;
  searchBy: SearchBy;
};

export type Movie = {
  id: number;
  title: string;
  tagline: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: Date;
  posterPath: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: Set<string>;
};

export type Page = {
  title: string;
  top: SearchQuery | Movie;
  movies: Movie[];
};

export type Film = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
};

export type SearchQuery = {
  query: string;
};

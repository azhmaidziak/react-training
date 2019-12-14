import { Film, Movie } from "../models";

const MovieMapper = function(film: Film): Movie {
  return {
    id: film.id,
    title: film.title,
    tagline: film.tagline,
    voteAverage: film.vote_average,
    voteCount: film.vote_count,
    releaseDate: new Date(film.release_date),
    posterPath: film.poster_path,
    overview: film.overview,
    budget: film.budget,
    revenue: film.revenue,
    runtime: film.runtime,
    genres: film.genres
  };
};

export default MovieMapper;

import { Movie, SortBy } from "../models";

export default class MoviesComparatorFactory {
  static getComparator(
    sortBy: SortBy
  ): (first: Movie, second: Movie) => number {
    switch (sortBy) {
      case SortBy.RATING:
        return (first, second): number =>
          first.voteAverage - second.voteAverage;
      case SortBy.REALIZE_DATE:
        return (first, second): number =>
          first.releaseDate.getTime() - second.releaseDate.getTime();
      default:
        return (first, second): number => first.id - second.id;
    }
  }
}

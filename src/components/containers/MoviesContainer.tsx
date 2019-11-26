import * as React from "react";
import { connect } from "react-redux";
import { Movie, Page, SortBy } from "../../models";
import {MoviesResultPane, ResultSummaryBar} from "../renders";

import { sortedBy } from "./options.json";

function map(state: Page): { movies: Movie[] } {
  const { movies } = state;
  return { movies: movies };
}

function getComparator(sortBy: SortBy): (one: Movie, two: Movie) => number {
  switch (sortBy) {
    case SortBy.RATING:
      return (one, two): number => one.voteAverage - two.voteAverage;
    case SortBy.REALIZE_DATE:
      return (one, two): number =>
        one.releaseDate.getTime() - two.releaseDate.getTime();
    default:
      return (one, two): number => two.id - one.id;
  }
}

class MoviesContainer extends React.Component<
  { movies: Movie[] },
  { sortBy: SortBy }
> {
  constructor(props: { movies: Movie[] }) {
    super(props);
    this.state = { sortBy: SortBy.REALIZE_DATE };
    this.onClickToChoose = this.onClickToChoose.bind(this);
  }

  onClickToChoose(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({ sortBy: Number.parseInt(event.currentTarget.value) });
  }

  render(): React.ReactNode {
    const movies = this.props.movies.sort(getComparator(this.state.sortBy));
    return (
      <React.Fragment>
        <ResultSummaryBar
          options={sortedBy}
          count={movies.length}
          onClickToChoose={this.onClickToChoose}
        />
        <MoviesResultPane movies={movies} />
      </React.Fragment>
    );
  }
}

export default connect(map)(MoviesContainer);

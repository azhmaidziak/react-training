import * as React from "react";
import { connect } from "react-redux";
import { Movie, Page, SortBy } from "../../models";
import { MoviesComparatorFactory } from "../../functions";
import { MoviesResultPane, ResultSummaryBar } from "../renders";

import { sortedBy } from "./options.json";

function map({ movies }: Page): { movies: Movie[] } {
  return { movies: movies };
}

class MoviesContainer extends React.Component<
  { movies: Movie[] },
  { sortBy: SortBy }
> {
  constructor(props: { movies: Movie[] }) {
    super(props);
    this.state = { sortBy: SortBy.REALIZE_DATE };
  }

  onClickToChoose = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ sortBy: Number.parseInt(event.currentTarget.value) });
  };

  render(): React.ReactNode {
    const movies = this.props.movies;
    return (
      <React.Fragment>
        <ResultSummaryBar
          options={sortedBy}
          count={movies.length}
          onClickToChoose={this.onClickToChoose}
        />
        <MoviesResultPane
          movies={movies.sort(
            MoviesComparatorFactory.getComparator(this.state.sortBy)
          )}
        />
      </React.Fragment>
    );
  }
}

export default connect(map)(MoviesContainer);

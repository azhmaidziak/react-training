import * as React from "react";
import {connect} from "react-redux";
import {Movie, Page, SearchBy, SortBy, View} from "../../models";
import {MoviesComparatorFactory} from "../../functions";
import {MoviesResultPane, ResultSummaryBar} from "../renders";

import {sortedBy} from "./options.json";
import {Dispatch} from "redux";
import {showMovieDetails} from "../../functions/store/actions";
import {MouseEvent} from "react";


class MoviesContainer extends React.Component<
        { movies: Movie[], onTileClick: (movie: Movie) => void },
        { sortBy: SortBy }> {
    constructor(props: { movies: Movie[], onTileClick: (movie: Movie) => void}) {
        super(props);
        this.state = {sortBy: SortBy.REALIZE_DATE};
    }

    onClickToChoose = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({sortBy: Number.parseInt(event.currentTarget.value)});
    };

    onTileClick = (event: MouseEvent, movie:Movie): void =>{
        this.props.onTileClick(movie)
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
                            onTileClick={this.onTileClick}
                    />
                </React.Fragment>
        );
    }
}

function dispatchToProps(dispatch: Dispatch) {
    return {
        onTileClick: (request: Movie) => dispatch(showMovieDetails(request))
    }
}
function map({movies}: Page): { movies: Movie[] } {
    return {movies: movies};
}


export default connect(map, dispatchToProps)(MoviesContainer);

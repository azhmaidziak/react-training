import * as React from "react";
import {Movie, Page, SearchBy} from "../../models";
import MoviesDetailPane from "../renders/MoviesDetailPane";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {showSearch} from "../../functions/store/actions";

class MoviesDetailContainer extends React.Component<{movie: Movie, onClickToSearch: () => void}> {
    onClickToSearch = (): void => {
        this.props.onClickToSearch();
    };
    render(): React.ReactElement {
        return <MoviesDetailPane movie={this.props.movie} onTileClick={this.onClickToSearch}/>;
    }
}

function map(state: Page): { movie: Movie } {
    return { movie: state.top.movie };
}

function dispatchToProps(dispatch:  Dispatch) {
    return {
        onClickToSearch: ()=> dispatch(showSearch())
    }
}

export default connect(map, dispatchToProps)(MoviesDetailContainer);

import {Movie} from "../../models";
import * as React from "react";
import * as styles from "./MoviesDetailPane.module.sass";
import MovieDetail from "./elements/MoviesDetail";

const MoviesDetailPane = (props: {movie: Movie, onTileClick: (e: React.MouseEvent) => void}): React.ReactElement => (
        <div className={styles.movies_details_pane}>
            <MovieDetail movie={props.movie} onClick={props.onTileClick}/>
        </div>
);

export default MoviesDetailPane;
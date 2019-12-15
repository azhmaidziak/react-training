import * as React from "react";
import {Movie} from "../../../models";
import * as styles from "./MovieTile.module.sass";

const MovieTile = (props: { movie: Movie, onClick: (e: React.MouseEvent, movie:Movie) => void }): React.ReactElement => {
    const {id, title, posterPath, genres, releaseDate} = props.movie;
    return (
            <div id={id} className={styles.MovieTile} onClick={((e)=>props.onClick(e, props.movie))}>
                <img src={posterPath} alt={title}/>
                <p>
                    <span>{title}</span> <span>{releaseDate.getDate()}</span>
                </p>
                <p>{genres.join(" & ")}</p>
            </div>
    );
};

export default MovieTile;

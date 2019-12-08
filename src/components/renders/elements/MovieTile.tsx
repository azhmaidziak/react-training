import * as React from "react";
import { Movie } from "../../../models";
import * as styles from "./MovieTile.module.sass";

const MovieTile = (props: { movie: Movie }): React.ReactElement => {
  const { title, posterPath, genres, releaseDate } = props.movie;
  return (
    <div className={styles.MovieTile}>
      <img src={posterPath} alt={title} />
      <p>
        <span>{title}</span> <span>{releaseDate.getDate()}</span>
      </p>
      <p>{genres.join(" & ")}</p>
    </div>
  );
};

export default MovieTile;

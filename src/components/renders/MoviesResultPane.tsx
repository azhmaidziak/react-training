import * as React from "react";
import { Movie } from "../../models";
import MovieTile from "./elements/MovieTile";
import * as styles from "./MoviesResultPane.module.sass";

const MoviesResultPane = (props: { movies: Movie[] }): React.ReactElement => {
  const movies: Movie[] = props.movies;

  return (
    <div className={styles.MoviesResultPane}>
      {Array.from(movies.values()).map(elem => (
        <MovieTile key={elem.id} movie={elem} />
      ))}
    </div>
  );
};

export default MoviesResultPane;

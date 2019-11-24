import * as React from "react";
import { Movie } from "../../models";

const MovieTile = (props: { movie: Movie }): React.ReactElement => {
  const { title, posterPath, genres, releaseDate } = props.movie;
  return (
    <React.Fragment>
      <img src={posterPath} alt={title} />
      <p>
        <span>{title}</span> <span>{releaseDate.getDate()}</span>
      </p>
      <p>{genres}</p>
    </React.Fragment>
  );
};

export default MovieTile;

import React from "react";
import { useMovie } from "../context/MovieStore";

const MovieInfo = ({ pagesVisited, moviesPerPage }) => {
  const [state] = useMovie();
  const { movies } = state;

  const showMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <div>
          <h3>{movie.title}</h3>
          <h3>{movie.synopsis}</h3>
        </div>
      );
    });
  return (
    <div>
      <h1>This is dummy movieInfo</h1>
      {showMovies}
    </div>
  );
};

export default MovieInfo;

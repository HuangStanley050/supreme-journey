import React from "react";
import { useMovie } from "../context/MovieStore";
import MovieCard from "./MovieCard";

const MovieInfo = ({ pagesVisited, moviesPerPage }) => {
  const [state] = useMovie();
  const { movies } = state;

  const showMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      const { media, movieId } = movie;
      const image = media[0].url;
      return (
        <MovieCard
          key={movieId}
          title={movie.title}
          summary={movie.synopsis}
          image={image}
          movieId={movie.movieId}
          rating={movie.rating}
        />
      );
    });

  return <div data-testid="movieCards">{showMovies}</div>;
};

export default MovieInfo;

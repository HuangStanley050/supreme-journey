import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import { useMovie } from "../context/MovieStore";

jest.mock("../context/MovieStore", () => ({
  useMovie: () => [
    {
      movies: [
        { movieId: 1, media: "dummyPic" },
        { movieId: 2, media: "dummyPic" },
        { movieId: 3, media: "dummyPic" },
        { movieId: 4, media: "dummyPic" },
        { movieId: 5, media: "dummyPic" },
      ],
    },
  ],
}));
test("Movie Info component should display the correct number of movie cards", () => {
  render(
    <BrowserRouter>
      <MovieInfo pagesVisited={0} moviesPerPage={4} />
    </BrowserRouter>
  );
  const movieCards = screen.getByTestId("movieCards");
  expect(movieCards.children.length).toBe(4);
});

import { render, screen } from "@testing-library/react";
import Paginate from "../components/Paginate";

jest.mock("../context/MovieStore", () => ({
  useMovie: () => [
    {
      movies: [
        { movieId: 1, media: "dummyPic" },
        { movieId: 2, media: "dummyPic" },
        { movieId: 3, media: "dummyPic" },
        { movieId: 4, media: "dummyPic" },
        { movieId: 5, media: "dummyPic" },
        { movieId: 6, media: "dummyPic" },
        { movieId: 7, media: "dummyPic" },
        { movieId: 8, media: "dummyPic" },
      ],
    },
  ],
}));

test("Paginate component should render the correct number of pages", () => {
  const setPageNumber = jest.fn();
  render(<Paginate moviesPerPage={4} setPageNumber={setPageNumber} />);
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.queryByText("3")).toBeNull();
});

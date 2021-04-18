import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SessionDetail from "../components/SessionDetail";

// jest.mock("react-router-dom", () => ({
//   useParams: () => ({ movieId: "007" }),
// }));
jest.mock("../context/MovieStore", () => ({
  useMovie: () => [
    {
      movies: [
        { movieId: 1, media: "dummyPic", title: "Demon Slayer", sessions: [] },
        { movieId: 2, media: "dummyPic", title: "Naruto", sessions: [] },
        {
          movieId: 3,
          media: "dummyPic",
          title: "Ghost in the Shell",
          sessions: [
            {
              sessionId: "444",
              id: "blah",
              showDateTime: "2021-04-28T19:30:00",
              sessionTime: "07:30PM",
            },
          ],
        },
        { movieId: 4, media: "dummyPic", title: "Doramon", sessions: [] },
        { movieId: 5, media: "dummyPic", title: "Evangelion", sessions: [] },
      ],
    },
  ],
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    movieId: 3,
  }),
}));

test("Session component should display a test with movie session info", () => {
  render(
    <BrowserRouter>
      <SessionDetail />
    </BrowserRouter>
  );
  expect(screen.getByText("Ghost in the Shell")).toBeInTheDocument();
  expect(screen.getByText("Session ID")).toBeInTheDocument();
  expect(screen.getByText("Session Time")).toBeInTheDocument();
  expect(screen.getByText("Session Date")).toBeInTheDocument();
  expect(screen.getByText("07:30PM")).toBeInTheDocument();
  expect(screen.getByText("2021-04-28")).toBeInTheDocument();
});

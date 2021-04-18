import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

test("Movie Card component should display title,summary,image", () => {
  //screen.innerWidth(700, 500);
  window.matchMedia = createMatchMedia(900);
  render(
    <BrowserRouter>
      <MovieCard
        title="Demon Slayer"
        summary="dummy summary"
        image="dummyimage_url"
      />
    </BrowserRouter>
  );
  const image = screen.getByAltText("movie picture");

  //expect(image.src).toContain("the_url");
  expect(screen.getByText("Demon Slayer")).toBeInTheDocument();
  expect(image.src).toBe("http://localhost/dummyimage_url");
});

import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import Rating from "../components/Rating";

test("Rating component should display various movie ratings", () => {
  render(<Rating rating="MA15" />);
  expect(screen.getByText("MA15")).toBeInTheDocument();
});

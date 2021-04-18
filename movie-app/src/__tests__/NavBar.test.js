import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppBar from "../components/NavBar";

test("Navbar should render with icon and a caption", () => {
  render(
    <BrowserRouter>
      <AppBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/movies/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { label: "home" })).toBeInTheDocument();
});

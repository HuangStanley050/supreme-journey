import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  LOAD_MOVIES_FAIL,
  LOAD_MOVIES_OK,
  LOAD_MOVIES_START,
} from "./context/Types";
import { useMovie } from "./context/MovieStore";
import axios from "axios";

export default function App() {
  const [state, dispatch] = useMovie();
  const fetchMovieData = async () => {
    dispatch({ type: LOAD_MOVIES_START });
    try {
      const response = await axios.get("http://localhost:8000/movies");
      dispatch({ type: LOAD_MOVIES_OK, payload: response.data });
    } catch (err) {
      dispatch({ type: LOAD_MOVIES_FAIL });
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100vh",
          }}
        />
      </Container>
    </React.Fragment>
  );
}

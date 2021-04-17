import React, { useEffect, useState } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import {
  LOAD_MOVIES_FAIL,
  LOAD_MOVIES_OK,
  LOAD_MOVIES_START,
} from "./context/Types";
import { useMovie } from "./context/MovieStore";
import AppBar from "./components/AppBar";
import MovieInfo from "./components/MovieInfo";
import Paginate from "./components/Paginate";
import SessionDetail from "./components/SessionDetail";
import axios from "axios";

export default function App() {
  const [state, dispatch] = useMovie();
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 4;
  const pagesVisited = pageNumber * moviesPerPage;

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
        <AppBar />
        <Switch>
          <Route exact path="/">
            <MovieInfo
              pagesVisited={pagesVisited}
              moviesPerPage={moviesPerPage}
            />
            <Paginate
              moviesPerPage={moviesPerPage}
              setPageNumber={setPageNumber}
            />
          </Route>
          <Route path="/test">
            <h1>Test</h1>
          </Route>
          <Route path="/:movieId" children={<SessionDetail />} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

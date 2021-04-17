import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import { useMovie } from "../context/MovieStore";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SessionDetail = () => {
  let { movieId } = useParams();
  const classes = useStyles();
  const [state] = useMovie();
  const { movies } = state;
  const movieDetail = movies.find((movie) => movie.movieId === movieId);
  if (!movieDetail) {
    return <Redirect to="/" />;
  }

  const { sessions = [], title } = movieDetail;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="session table">
        <TableHead>
          <TableRow>
            <TableCell align="left">{title}</TableCell>
            <TableCell align="right">Session ID</TableCell>
            <TableCell align="right">Session Time</TableCell>
            <TableCell align="right">Session Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{session.sessionId}</TableCell>
              <TableCell align="right">{session.sessionTime}</TableCell>
              <TableCell align="right">
                {session.showDateTime.split("T")[0]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SessionDetail;

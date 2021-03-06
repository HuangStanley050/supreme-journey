import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import InfoButton from "./InfoButton";
import Rating from "./Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: "dodgerBlue",
  },

  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  summary: {
    color: "white",
  },
  title: {
    color: "yellow",
    marginBottom: "1rem",
  },
}));

const MovieCard = ({ title, summary, image, movieId, rating }) => {
  const classes = useStyles();

  const matches = useMediaQuery("(min-width:700px)");

  return (
    <Card className={classes.root}>
      <Avatar alt="movie picture" src={image} className={classes.bigAvatar} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          {matches ? (
            <Typography component="p" className={classes.summary}>
              {summary}
            </Typography>
          ) : null}
        </CardContent>
      </div>
      <InfoButton movieId={movieId} />
      <Rating rating={rating} />
    </Card>
  );
};

export default MovieCard;

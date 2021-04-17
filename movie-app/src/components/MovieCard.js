import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: "dodgerBlue",
  },
  avatar: {
    margin: 10,
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
  },
}));

const MovieCard = ({ title, summary, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Avatar alt="movie picture" src={image} className={classes.bigAvatar} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1" className={classes.summary}>
            {summary}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default MovieCard;

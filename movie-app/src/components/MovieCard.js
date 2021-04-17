import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "90%",
  },
}));

const MovieCard = ({ title, summary, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={image} title="move image" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {summary}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default MovieCard;

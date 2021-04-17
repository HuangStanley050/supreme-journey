import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.75rem",
    },
  },
}));

const Rating = ({ rating }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip label={`${rating}`} color="secondary" />
    </div>
  );
};

export default Rating;

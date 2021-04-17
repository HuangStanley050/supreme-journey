import React from "react";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const InfoButton = ({ movieId }) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        component={RouterLink}
        to={`/${movieId}`}
        startIcon={<ScheduleIcon />}
      >
        Info
      </Button>
    </div>
  );
};

export default InfoButton;

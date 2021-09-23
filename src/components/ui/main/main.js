import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LeftColumn from './left-column/left-column';
import RightColumn from './right-column/right-column';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={8} lg={4}>
            <LeftColumn />
        </Grid>
        <Grid item xs={8} lg={8}>
            <RightColumn />
        </Grid>
      </Grid>
    </div>
  );
}

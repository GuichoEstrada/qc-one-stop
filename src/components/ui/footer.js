import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: '124px',
    backgroundColor: '#26516F',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="footer-container"></div>
  );
}
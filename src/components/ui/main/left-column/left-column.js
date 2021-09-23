import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import './left-column.styles.scss';
import '../../../../assets/styles/responsive.styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  left_fieldset: {
    border: '4px',
    borderStyle: 'solid',
    borderColor: '#26516F',
    borderRadius: '50px',
    margin: '20px'
  }
}));

export default function LeftColumn() {
  const classes = useStyles();

  return (
    <fieldset className={classes.left_fieldset} id="left-fieldset">
      <div className={classes.root} id="left-options-container">
        <ul className="left-options">
            <li>Home</li>
            <li>New Transaction</li>
            <li>Existing Transaction</li>
            <li>Contact Us</li>
            <li>Frequently Asked Questions (FAQs)</li>
            <li>Virtual Map</li>
        </ul>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h5 className="application-title">Application Status Verification</h5>
              <input placeholder="eg. BA2001-00001" />
              <button>VERIFY</button>
            </Paper>
          </Grid>
        </Grid>
      
        <Grid container spacing={2}>
          <Grid item xs={4} lg={12}>
            <iframe id="fb-page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FQCdepartmentofbuildingofficial%2F&tabs=timeline&width=390&height=470&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="390" height="500" style={{display:"flex" ,border:"none", margin:"0 auto", overflow:"hidden", scrolling:"no", frameborder:"0", allowfullscreen:"true", allow:"autoplay"}} clipboard-write="true" encrypted-media="true" picture-in-picture="true" web-share="true" title="fb-page"></iframe>
          </Grid>
        </Grid>
      </div>
    </fieldset>
  );
}

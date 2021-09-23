import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CustomButton from '../../../custom-button/custom-button.component';
import IntroData from './dbo-intro.data';

import './right-column.styles.scss'
import '../../../../assets/styles/responsive.styles.scss';
import Logo from './dbo_logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'center',
    color: '#26516F',
  },
  right_nav: {
    width: '100%',
    display: 'flex'
  },
  right_content: {
    width: '100%',
    display: 'flex'
  },
  intro_left: {
    textAlign: 'justify',
    letterSpacing: '1px',
    fontWeight: '400',
    margin: '20px',
    padding: '20px 0'
  },
  options_container: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '20px'
  },
  dbo_logo: {
    width: '150px',
    height: '150px',
    margin: '30px auto',
    display: 'flex'
  },
  right_fieldset: {
    border: '4px',
    borderStyle: 'solid',
    borderColor: '#26516F',
    borderRadius: '50px',
    margin: '10px 20px'
  }, 
  legend: {
    color: '#26516F',
    fontSize: '1.3em',
    marginLeft: '30px',
    padding: '0 10px'
  }
}));

export default function RightColumn() {
  const classes = useStyles();

  return (
    <fieldset className={classes.right_fieldset} id="right-fieldset">
      <legend className={classes.legend} id="right-legend">QC Building Permit One Stop Shop Online Application</legend>
      <div className={classes.root}>
        <div className={classes.right_nav} id="right-nav">
            
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className={classes.dbo_logo} id="dbo-logo" src={Logo} alt='dbo-logo' />
                    <h2>QUEZON CITY<br/>DEPARTMENT OF BUILDING OFFICIAL</h2>
                    <h5>DBO</h5>
                </Grid>
            </Grid>
            
            <Grid container spacing={2}>
              <Grid item xs={12} lg={12} className={classes.options_container} id="options-container">
                <ul>
                  <li><CustomButton>Building Permit Application</CustomButton></li>
                  <li><CustomButton>Occupancy Permit Application</CustomButton></li>
                  <li><CustomButton>Apply for Electricity</CustomButton></li>
                  <li><CustomButton>Demolition Permit Application</CustomButton></li>
                </ul>
              </Grid>
            </Grid>
        </div>

        <hr/>

        <div className={classes.right_content} id="right-content">

          <Grid container spacing={2}>
            <h4 className={classes.intro_left}>
              {IntroData[0]}
              <hr/>
            </h4>
          </Grid>
          
          <Grid container spacing={2}>
            <div className="vision-container">
              <h3>VISION</h3>
              <h4>{IntroData[1]}</h4>
              <h3>MISSION</h3>
              <h4>{IntroData[2]}</h4>
            </div>
          </Grid>

        </div>

      </div>
    </fieldset>
  );
}

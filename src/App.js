import React from 'react';
import './App.css';
import Home from './containers/Home';
import $ from 'jquery';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(6, 0),
  }
}))


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Home/>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
        <Typography align='center'>
          <Link
            color="inherit"
            noWrap
            underline='always'
            variant="body2"
            onClick={() => $('html,body').animate({scrollTop:0},500)}
            style={{fontFamily: 'Roboto Mono, monospace'}}
          >
            back to top
          </Link>
        </Typography>
        </Container>
      </footer>
    </React.Fragment>

  );
}

export default App;

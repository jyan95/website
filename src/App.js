import React from 'react';
import './App.css';
import Home from './containers/Home';
import Footer from './components/Footer';
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
      <Footer/>
    </React.Fragment>

  );
}

export default App;

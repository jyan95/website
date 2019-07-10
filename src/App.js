import React from 'react';
import './App.css';
import Home from './containers/Home';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
          <Typography variant="h6" align="center" gutterBottom>

          </Typography>
          <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
            Designed and Built by Joshua Yan
          </Typography>
        </Container>
      </footer>
    </React.Fragment>

  );
}

export default App;

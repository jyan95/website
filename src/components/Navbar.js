import React from 'react';
import $ from 'jquery';

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flex: 1,
    overflowX: 'auto',
    justifyContent: 'right'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  {
    name: 'work',
  },
  {
    name: 'experience',
  },
  {
    name: 'resume',
    url: 'https://drive.google.com/file/d/1JXaUU60BelPoo6Kz2DIpdsfQk00NQam_/view?usp=sharing'
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
};

function scrollTo(section) {
  // console.log('scrolling to', section);
  $('html, body').animate({
    scrollTop: $(`#${section}`).offset().top
  }, 1000);
}

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color='default'>
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbar}
          >
            {sections.map(section => (
              section.name === 'resume' ?
              <Link
                color="inherit"
                noWrap
                underline='always'
                key={section.name}
                variant="body2"
                href={section.url}
                target='new'
                className={classes.toolbarLink}
                style={{fontFamily: 'Roboto Mono, monospace'}}
              >
                {section.name}
              </Link>
              :
              <Link
                color="inherit"
                noWrap
                key={section.name}
                variant="body2"
                onClick={() => scrollTo(section.name)}
                className={classes.toolbarLink}
                style={{fontFamily: 'Roboto Mono, monospace'}}
              >
                {section.name}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}

export default Navbar;

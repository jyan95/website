import React from 'react';
import $ from 'jquery';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(6, 0),
  }
}))

// const social = [
//   {
//     name: 'GitHub',
//     url: 'https://github.com/jyan95',
//     icon: GithubIcon
//   },
//   {
//     name: 'LinkedIn',
//     url: 'https://www.linkedin.com/in/jyan95',
//     icon: LinkedInIcon
//   },
//   {
//     name: 'Gmail',
//     url: 'mailto:jyan0602@gmail.com',
//     icon: MailIcon
//   },
//   {
//     name: 'Facebook',
//     url: 'https://www.facebook.com/jyan95',
//     icon: FacebookIcon
//   },
//   {
//     name: 'Instagram',
//     url: 'https://www.instagram.com/joshuayan_/',
//     icon: InstagramIcon
//   },
//
// ];

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="md">
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
          <br/>
          <br/>
          <Typography align='center' color='inherit' variant='caption'>
            Joshua Yan 2019
          </Typography>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer;

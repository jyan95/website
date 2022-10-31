/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    backgroundColor: "#24283b",
    color: theme.palette.common.white,
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    backgroundImage: "url(https://i.imgur.com/WBlNmxU.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  bannerContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  mainGrid: {
    marginTop: 0,
    color: "#b8b4d8",
    backgroundColor: "#24283b",
  },
  technologiesBox: {
    color: "#97c566",
    padding: theme.spacing(2),
    backgroundColor: "#282e42",
    borderRadius: "6px",
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    backgroundColor: "#24283b",
  },
  divider: {
    backgroundColor: "#97c566",
  },
}));

const about = (
  <p>
    I was born in Michigan, and moved to China when I was 10.
    <br />
    I attended international schools in Wuxi, Suzhou, and Shanghai.
    <br />
    I moved back to Michigan for undergrad, and to New York City shortly after.
    <br />
    I walked dogs and worked a !@#$ job for a bit, then took myself to a code
    camp.
    <br />
    I currently work at Kinetik as a Senior Engineer / Project Lead.
    <br />I spend most of my free time climbing, swimming, and learning about
    web3.
  </p>
);

const technologies = [
  "JS (Node, Express, React, Redux, Jest)",
  "AWS (SLS, SQS, SNS)",
  "MongoDB (Mongoose)",
];

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      {/* Start Banner */}

      <Paper className={classes.banner}>
        {
          <img
            style={{ display: "none" }}
            src="https://i.imgur.com/WBlNmxU.jpg"
            alt="background"
          />
        }
        <div className={classes.overlay} />
        <Container maxWidth="md">
          <div className={classes.bannerContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              style={{ fontFamily: "Roboto Mono, monospace" }}
              gutterBottom
            >
              <b>joshua yan</b>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              nyc based software engineer
            </Typography>
          </div>
        </Container>
      </Paper>
      {/* End banner */}
      <Container
        maxWidth="md"
        style={{ color: "#b8b4d8", backgroundColor: "#24283b" }}
      >
        <main>
          <div id="about">
            <Typography
              variant="h6"
              style={{
                paddingTop: "20px",
                fontFamily: "Roboto Mono, monospace",
              }}
              gutterBottom
            >
              <b style={{ color: "#73d9c8" }}>// about</b>
            </Typography>
            <Divider className={classes.divider} />
            <div style={{ padding: "16px 16px 0px 16px" }}>
              <Typography variant="subtitle1">{about}</Typography>
            </div>
          </div>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Experience and Education */}
            <Grid item xs={12} md={8}>
              <div id="experience">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                >
                  <b style={{ color: "#73d9c8" }}>// experience</b>
                </Typography>
                <Divider className={classes.divider} />
                <Experience />
              </div>
            </Grid>
            {/* Side Content */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.technologiesBox}>
                <Typography
                  variant="h6"
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                  gutterBottom
                >
                  techstack
                </Typography>
                <Typography variant="body2">
                  {technologies.map((t) => {
                    return (
                      <span key={t} style={{ color: "#b8b4d8" }}>
                        - {t}
                        <br />
                      </span>
                    );
                  })}
                </Typography>
                <br />
              </Paper>
            </Grid>
            {/* End Side Content */}
          </Grid>
        </main>
        <Typography
          variant="h6"
          style={{ fontFamily: "Roboto Mono, monospace" }}
          gutterBottom
        >
          <b style={{ color: "#73d9c8" }}>// education</b>
        </Typography>
        <Divider className={classes.divider} />
        <Education />
      </Container>
    </React.Fragment>
  );
};

export default Home;

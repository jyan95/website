/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: "48px",
    marginBottom: "4rem",
  },
  summary: {
    lineHeight: "1.4",
    fontSize: "calc(16px + 3vw)",
    fontWeight: 600,
    marginBottom: "4rem",
  },
  italics: {
    fontStyle: "italic",
    marginLeft: "56px",
    paddingRight: "16px",
  },
  focus: {
    fontWeight: 500,
    fontSize: "calc(16px + 2vw)",
    marginBottom: "4rem",
    marginLeft: "56px",
  },
  projects: {
    fontWeight: 500,
    fontSize: "calc(12px + 1.5vw)",
    marginBottom: "2rem",
    marginLeft: "56px",
  },
  philo: { lineHeight: 2, marginLeft: "56px" },
  line: {
    marginTop: "3rem",
    borderBottom: "1px solid #013220",
    width: "36px",
    marginBottom: "2rem",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid container>
          <Grid item xs={12} md={10}>
            <div style={{ padding: "56px 16px 16px 56px" }} id="title">
              <Typography
                style={{ fontSize: "calc(12px + 1.5vw)", fontWeight: 600 }}
              >
                Joshua Yan
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={10}>
            <div style={{ padding: "64px 16px 0px 56px" }} id="summary">
              <Typography className={classes.summary}>
                Builder, swimmer, pianist, climber.
                <br />
                Currently leading a team at Kinetik, designing and delivering
                software solutions for managed care transportation.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container className={classes.gridItem}>
          {/* Current areas of focus */}
          <Grid item xs={12} md={3}>
            <Typography className={classes.italics} gutterBottom>
              A few areas I work on
              <div className={classes.line} />
            </Typography>
          </Grid>
          <Grid item xs={10} md={8}>
            <Typography variant="h3" className={classes.focus} gutterBottom>
              Project management
            </Typography>
            <Typography variant="h3" className={classes.focus} gutterBottom>
              System Design
            </Typography>
            <Typography variant="h3" className={classes.focus} gutterBottom>
              Code Review
            </Typography>
            <Typography variant="h3" className={classes.focus} gutterBottom>
              UI/UX, QA
            </Typography>
          </Grid>
          <Grid container className={classes.gridItem}>
            {/* Current areas of focus */}
            {/* Projects */}
            <Grid item xs={12} md={3}>
              <Typography className={classes.italics} gutterBottom>
                Recent Projects
                <div className={classes.line} />
              </Typography>
            </Grid>
            <Grid item xs={10} md={7}>
              <Typography className={classes.projects} gutterBottom>
                A trip scheduling platform for health systems.
              </Typography>
              <Typography className={classes.projects} gutterBottom>
                A trip dispatch platform for transportation networks.
              </Typography>
              <Typography className={classes.projects} gutterBottom>
                A claims generation, attestation, and submission platform for
                transportation providers.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.gridItem}>
            <Grid item xs={12} md={3}>
              <Typography className={classes.italics} gutterBottom>
                Management Philosophy
                <div className={classes.line} />
              </Typography>
            </Grid>
            <Grid item xs={10} md={6}>
              <Typography className={classes.philo} gutterBottom>
                Embracing individuality and autonomy, personal growth lies at
                the forefront of my management philosophy. I empower team
                members to identify and leverage their unique strengths,
                cultivating ownership and initiative toward shared goals.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;

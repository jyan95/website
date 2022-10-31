import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 16,
    color: "#f5748d",
  },
  subtitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: "underline",
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <div>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          SENIOR ENGINEER / PROJECT LEAD
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.subtitle}
          component="h2"
        >
          <Link
            href="https://www.kinetik.care"
            color="inherit"
            target="new"
            className={classes.link}
          >
            Kinetik
          </Link>
          , New York City, 2019 - Current
        </Typography>
        <Typography variant="body2" color="inherit" component="h2">
          Responsible for the development and delivery of software projects for
          brokers, payers, and providers in the NEMT vertical. Currently
          managing 5 direct reports.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FREELANCE
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Various, Remote, 2019
        </Typography>
        <Typography variant="body2" color="inherit" component="h3">
          Working on frontend projects with exposure to core products using
          React and HTML libraries such as Semantic. Improving UI / UX, and
          building out new features.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          ASSOCIATE
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.subtitle}
          component="h2"
        >
          <Link
            href="https://www.colemanrg.com"
            color="inherit"
            target="new"
            className={classes.link}
          >
            Coleman Research
          </Link>
          , New York City, 2018 - 2019
        </Typography>
        <Typography variant="body2" color="inherit" component="h2">
          Identified industry trends and qualified experts to meet client
          specifications, responsible for over 33% of team sales. Improved
          business relations with Tiger Cubs and other investment management
          firms, grew book of business by ~10%. Consistent top performer,
          completed fast track to Associate, due for early promotion to Senior
          Associate.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          INTERN
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.subtitle}
          component="h2"
        >
          <Link
            href="https://www.occstrategy.com/en/"
            color="inherit"
            target="new"
            className={classes.link}
          >
            OC&C Strategy
          </Link>
          , New York City, 2017 - 2018
        </Typography>
        <Typography variant="body2" color="inherit" component="h2">
          Supported teams on various projects when needed through desk research,
          cold calling, and data compilation and synthesis; resulting in an
          average increase in critical findings ~30%, with regular contribution
          of ~20% of total data.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          INTERN
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.subtitle}
          component="h2"
        >
          <Link
            href="https://www.rolandberger.com/en/?country=US"
            target="new"
            color="inherit"
            className={classes.link}
          >
            Roland Berger
          </Link>
          , Shanghai, China, 2016
        </Typography>
        <Typography variant="body2" color="inherit" component="h2">
          Benchmarked key competitors through research and cold calls;
          identified financial figures to understand where competitors were
          lowering costs, and delivered cost reduction strategy to lower product
          prices by ~15%. Further researched competitor value chains to identify
          technology and logistic decisions; delivered plan prioritizing product
          lines to increase competitiveness. Managed multiple interns assisting
          in conducting research, compiling info, and building final deck.
        </Typography>
      </CardContent>
    </div>
  );
};

export default Experience;

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 16,
  },
  subtitle:{
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: 'underline'
  }
}));


const Experience = () => {
  const classes = useStyles();

  return (
    <div>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          CLIENT ASSOCIATE
        </Typography>
        <Typography className={classes.subtitle} component="h2">
          <Link href='https://www.colemanrg.com' color='inherit' target='new' className={classes.link}>
            Coleman Research
          </Link>
          , New York, NY, 2018 - 2019
         </Typography>
         <Typography variant='body2' color='inherit' component="h2">
         Identified industry trends and qualified experts to meet client specifications, responsible for over 33% of team sales.
         Improved business relations with Tiger Cubs and other investment management firms, grew book of business by ~10%.
         Consistent top performer, completed fast track to Associate, due for early promotion to Senior Associate
          </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          TEMP / CONTRACT
        </Typography>
        <Typography className={classes.subtitle} component="h2">
          <Link href='https://www.occstrategy.com/en/' color='inherit' target='new' className={classes.link}>
            OC&C Strategy
          </Link>
          , New York, NY, 2017 - 2018
        </Typography>
        <Typography variant='body2' color='secondary' component="h2">
           Supported teams on various projects when needed through desk research, cold calling, and data compilation and synthesis; resulting in an average increase in critical findings ~30%, with regular contribution of ~20% of total data
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          SUMMER ANALYST
        </Typography>
        <Typography className={classes.subtitle} component="h2">
          <Link href='https://www.rolandberger.com/en/?country=US' target='new' color='inherit' className={classes.link}>
            Roland Berger
          </Link>
          , Shanghai, CN, 2016 - 2016
        </Typography>
        <Typography variant='body2' color='secondary' component="h2">
           Benchmarked key competitors through research and cold calls; identified financial figures to understand where competitors were lowering costs, and delivered cost reduction strategy to lower product prices by ~15%. Further researched competitor value chains to identify technology and logistic decisions; delivered plan prioritizing product lines to increase competitiveness. Managed multiple interns assisting in conducting research, compiling info, and building final deck
        </Typography>
      </CardContent>
    </div>
  )
}

export default Experience;

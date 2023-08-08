import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#090909",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  subtitle2: {
    color: "#6c6cbd",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience and Education
      </Typography>
      <Box component="div" className={classes.timeLine}>

        # 2023

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Graduate Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Entelect Software
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Starting my career off as a Graduate Software Engineer at Entelect in January 2023. 
            I have attended the Bootcamp at the Joburg HQ and am now based in Cape Town. Currently 
            part of the FNZ OneX team.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle2}
          >
            Achievements and awards:<br></br>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle1}
          >
            Entelect Company Cup 3rd Place 2023<br></br>
          </Typography>
        </Box>


        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            BSc Honours Computer Science
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Stellenbosch University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I completed the course in the prescribed 1 year and obtained an overall average of 67%.
            Extracurricular activities included the House Committee of Huis Marais residence
            and reforming the Computer Science brand on Campus by redesigning the 
            hoodie. I was also an academic mentor throughout the year.

          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle2}
          >
            Achievements and awards:<br></br>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle1}
          >
            Entersekt Launchlab Hackathon 2nd Place 2022<br></br>
            Entelect University Hackathon 4th Place 2022<br></br>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            BCom Mathematical Science
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Stellenbosch University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I completed the course in the prescribed 3 years and obtained an overall average of 71%.
            Extracurricular activities included acapella, residence mentor, 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle2}
          >
            Achievements and awards:<br></br>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle1}
          >
            Entersekt Launchlab Hackathon Champions 2021<br></br>
            Optimus Programme (Top 5% Study Field) 2020<br></br>
            Golden Key Invitation 2020<br></br>
            Fintec Hackathon 2nd Place 2019<br></br>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            National Senior Certificate
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Hoërskool Zwartkop
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            90% Average (8 Distinctions)
            Subjects: Mathematics, Physical Sciences, Accounting, Alpha
            Mathematics, Afrikaans Home Language, English First Additional Language, Life Orientation.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle2}
          >
            Achievements and awards:<br></br>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            display="block"
            className={classes.subtitle1}
          >
            Top 20 Academic Ranking 2018<br></br>
            National Team Orators Champions 2016-2018<br></br>
            National IT Expo Gold 2018<br></br>
          </Typography>
        </Box>


        
        
      </Box>
    </Box>
  );
};

export default Resume;

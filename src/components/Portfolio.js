import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/connect4.png";
import project5 from "../images/chess.png";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Computer Science Hoodie",
    description: `Over the course of a year, I have lead the initiative of redesigning our faculty\
    hoodie for the purpose of creating more awareness of Computer Science on campus at\
    Stellenbosch University. This included countless emails, setting up contracts with our sponsor, AWS, and\
    facilitating orders made by the undergrad students.`,
    image: project1,
    button1: "Album",
    button2: "",
    link1: "https://imgur.com/a/PI0KLGa",
    link2: "https"
  },
  {
    name: "Honours Project",
    description: `For my Honours project in 2022, I developed an interactive Dashboard\
    using Plotly Dash. This dashboard visualized climate and phenological data collected\
    from various vineyards, with the purpose of using plant and environmental variables to predict\
    climate change.`,
    image: project2,
    button1: "Report",
    button2: "Presentation",
    link1: "https://github.com/swaggermaestro/Terraclim-Dash/blob/3edbf01a356999bac3cecc98afcea2b4d79dbc82/22546510HonoursProjectFinalReport.pdf/",
    link2: "https://github.com/swaggermaestro/Terraclim-Dash/blob/3edbf01a356999bac3cecc98afcea2b4d79dbc82/SimeonPresentationFinal.pdf/"
  },
  {
    name: "Particle Swarm Optimization",
    description: `The honours module, Artificial Intelligence, did not really cover the inner workings\
    of neural net and convolutional layers in depth, however the focus was on Particle Swarm Optimization. This is a\
    unique technique used to solve a variety of different functions, where many particles search for the global minima.\
    This was the first time I have used LaTeX, and I am quite proud of my reports.`,
    image: project3,
    button1: "Report 2",
    button2: "Report 3",
    link1: "https://github.com/swaggermaestro/Terraclim-Dash/blob/07a8d76f8df3018dbebd66fc2194ba3b352c5105/22546510assignment2.pdf",
    link2: "https://github.com/swaggermaestro/Terraclim-Dash/blob/07a8d76f8df3018dbebd66fc2194ba3b352c5105/22546510assignment3.pdf"
  },
  {
    name: "Connect 4 (Thor)",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project4,
    button1: "",
    button2: "",
    link1: "https://leekspin.com/",
    link2: "https"
  },
  {
    name: "Star Wars Chess",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
    button1: "",
    button2: "",
    link1: "https://leekspin.com/",
    link2: "https"
  },
  {
    name: "Functional Programming",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
    button1: "Assignment 1",
    button2: "Assignment 2",
    link1: "https://github.com/swaggermaestro/Terraclim-Dash/blob/07a8d76f8df3018dbebd66fc2194ba3b352c5105/22546510ReportAssignment1.pdf",
    link2: "https://github.com/swaggermaestro/Terraclim-Dash/blob/07a8d76f8df3018dbebd66fc2194ba3b352c5105/22546510ReportAssignment2.pdf"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href = {project.link1} target="_blank" rel="noopener noreferrer" size="small" color="primary">
                  {project.button1}
                </Button>
                <Button href = {project.link2} target="_blank" rel="noopener noreferrer" size="small" color="primary">
                  {project.button2}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

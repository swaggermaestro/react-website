import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import StarMatch from "./StarsDisplay";
// import Leaderboard from "./ShashiClicker/Leaderboard";

const useStyles = makeStyles((theme) => ({
    bigContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
    },
    sandboxContainer: {
      background: "#233",
      textAlign: "center",
      position: "relative",
      margin: "1rem",
      borderRadius: "10px",
      padding: "1rem",
      flex: "1 0 auto",
      minWidth: "40rem",
      maxWidth: "40rem",
    },
  }));
  
  const Sandbox = () => {
    const classes = useStyles();
    return (
      <Box component="div" className={classes.bigContainer}>
        <Box component="div" className={classes.sandboxContainer}>
          <StarMatch />
        </Box>
        {/* <Box component="div" className={classes.sandboxContainer}>
          <Leaderboard
            leaderboardData={[            { name: "Alice", score: 100 },            { name: "Bob", score: 80 },            { name: "Charlie", score: 60 },            { name: "David", score: 40 },            { name: "Eve", score: 20 },          ]}
          />
        </Box> */}
      </Box>
    );
  };
  
  
  export default Sandbox;
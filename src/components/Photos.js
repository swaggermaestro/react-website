import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Photo1 from "../photos/camps.png";
import Photo2 from "../photos/palms1.png";
import Photo3 from "../photos/paraglide1.png";
import Photo4 from "../photos/sunset1.png";
import Photo5 from "../photos/table1.png";

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

    imgStyle: {
        alignItems: "center",
        width: "90%",
        borderRadius: "10px",
        margin: "1rem",
      },

      captionStyle: {
        color: "tomato",
      }
}));

const Photos = () => {
    const classes = useStyles();
    return (
        <div className={classes.bigContainer}>
            <div className="box">
                <h1 className={classes.captionStyle}>Gallery</h1>
                <p>Some photography stuff to come in the future. But in the meanwhile, look at these pics:</p>
                <img className={classes.imgStyle} src={Photo5} alt="Table Mountain"/>
                <img className={classes.imgStyle} src={Photo4} alt="Sunset"/>
                <img className={classes.imgStyle} src={Photo1} alt="Camps Bay"/>
                <img className={classes.imgStyle} src={Photo2} alt="Palm Trees"/>
                <img className={classes.imgStyle} src={Photo3} alt="Paraglider"/>
                
            </div>
                

        </div>

    );
};

export default Photos;
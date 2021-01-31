import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CV from "./cv";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    backgroundColor: "lightgrey",
    
  },
  media: {
    height: 0,
    // paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Info = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActions disableSpacing>
        <div
          style={{
            fontSize: "18px",
            fontFamily: "Quicksand",
            color: "white",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* A solo project - duration 2 weeks using ReactJS, NodeJS, MongoDB,
          Material UI, Bootstrap and more...For more information about my
          project please {" "} */}
          <IconButton id='clickme'
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <span
              style={{
                fontSize: "16px",
                fontFamily: "Quicksand",
                // fontWeight: "bold",
                color: 'grey'
              }}
            >
              CLICK ME FOR MORE INFO
            </span>
          </IconButton>
        </div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            fontSize: "20px",
            fontFamily: "Quicksand",
            color: "white",
            textAlign: "justify",
          }}
        >
          This project was created by me in individual work within 2 weeks. The
          idea for my final project was to create a platform just for Junior
          Coders, where they can present themselves and their skills via short
          video, CV and other sources to prospective employers and to give
          employers an opportunity to just look for Junior Coders to give them a
          better chance to find a way into the industry. I used ReactJS, NodeJS,
          Express, Material UI, Flexbox, Bootstrap, MongoDB ... to create this
          project and work is still going on.
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Info;

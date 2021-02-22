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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

const Cards = () => {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "95%",
          // textAlign: "center",
          fontSize: "20px",
          // backgroundColor: "rgb(211, 211, 211, 0.4)",
          borderTop: "1px solid lightgrey",
          borderBottom: "1px solid lightgrey",
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'Quicksand'
          
        }}
      >
      <div style={{fontSize: '16px', color: 'lightgrey', marginLeft: '10px'}}>Location: WBS Coding School</div>
        <div style={{fontSize: '20px'}}>Junior Webdeveloper</div>
        <div style={{fontSize: '16px', color: 'lightgrey', marginRight: '10px'}}>31.08.2020 - 11.12.2020</div>
      </div>
      <div style={{width: '100%', fontSize: '16px', textAlign: 'center', marginTop: '20px', fontFamily: 'Quicksand'}}>Languages, Mehods and Tools I learned and used</div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "40px",
          fontFamily: 'Quicksand',
          backgroundColor: '#F7FBFC',
        }}
      >
        <div
          style={{
            backgroundColor: "#F7FBFC",
            width: "20%",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold", width: "100%" }}>
            Frontend
          </div>
          
          <li style={{ listStyleType: "none", fontSize: "16px" }}>HTML5</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>CSS3</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
            JavaScript
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>ReactJS</li>
          <hr style={{width: '40%', borderColor: 'blue'}}/>
        
          <div style={{ fontSize: "16px", fontWeight: "bold", marginTop: '10px' }}>
            Tools I used
          </div>
         
          <li style={{ listStyleType: "none", fontSize: "16px" }}>Git/GitHub</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
            Material UI
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>Bootstrap</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
            ReactSpring
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>Netlify</li>

      
        </div>
        <div
          style={{
            backgroundColor: "#F7FBFC",
            width: "20%",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>Backend</div>
          
          <li style={{ listStyleType: "none", fontSize: "16px" }}>NodeJS</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>NoSQL</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>SQL</li>

          <hr style={{width: '40%', borderColor: 'blue', marginTop: '36px'}}/>
         
          <div style={{ fontSize: "16px", fontWeight: "bold", }}>
            Tools I used
          </div>
          
          <li style={{ listStyleType: "none", fontSize: "16px" }}>Git/GitHub</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>Express</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>PostgreSQL</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>MongoDB</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>Heroku</li>
      
        </div>
        <div
          style={{
            backgroundColor: "#F7FBFC",
            width: "20%",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>Databases</div>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>PostgreSQL</li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>MongoDB</li>
        </div>
        {/* <div>
                <div style={{fontSize:'20px'}}>Hosting and Collabo</div>
                <ol style={{ listStyleType: "none", fontSize: '16px' }}>
                  <li>Git Hub</li>
                </ol>
              </div> */}
        <div
          style={{
            backgroundColor: "#F7FBFC",
            width: "max-content",
            textAlign: "center",
            marginRight: '60px'
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            Projectmanagement
          </div>
          {/* <ol style={{ listStyleType: "none", fontSize: '16px' }}> */}
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
            Agile Methods/Scrum
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
            First Experiences with:
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
          Jira
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
         Trello
          </li>
          <li style={{ listStyleType: "none", fontSize: "16px" }}>
         Discord
          </li>
          {/* </ol> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;

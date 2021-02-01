import React, { useState, useEffect } from "react";
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
import DvrIcon from "@material-ui/icons/Dvr";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import StorageIcon from "@material-ui/icons/Storage";
import GitHubIcon from "@material-ui/icons/GitHub";
import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 300,
//     height: 340,
//   },
//   media: {
//     height: 0,
//     paddingTop: "20%", // 16:9
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

// export default function CodingCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: "60%",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ width: "30%", marginLeft: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <DvrIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 FRONT-END
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>CSS3</li>
//               <li style={{ listStyleType: "none" }}>JavaScript</li>
//               <li style={{ listStyleType: "none" }}>ReactJS</li>
//               <hr style={{ border: "2px solid grey", width: "6%" }} />
//               <li style={{ listStyleType: "none" }}>Material UI</li>
//               <li style={{ listStyleType: "none" }}>Bootstrap</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginLeft: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <SettingsApplicationsIcon
//               color="disabled"
//               style={{ fontSize: "40px" }}
//             />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 BACK-END
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>NodeJS</li>
//               <li style={{ listStyleType: "none" }}>Express</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginLeft: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <StorageIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "calc(20px + 0.3vw)",
//                 }}
//               >
//                 DATABASES
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>PostgreSQL</li>
//               <li style={{ listStyleType: "none" }}>MongoDB</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginLeft: "4%", marginRight: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <GitHubIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 COLLABO
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>GitHub</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

////Second Version////

// export default function CodingCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: "100%",
//         justifyContent: 'space-between'
//       }}
//     >
//       <div style={{ width: "30%",}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <DvrIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 FRONT-END
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>CSS3</li>
//               <li style={{ listStyleType: "none" }}>JavaScript</li>
//               <li style={{ listStyleType: "none" }}>ReactJS</li>
//               <hr style={{ border: "2px solid grey", width: "6%" }} />
//               <li style={{ listStyleType: "none" }}>Material UI</li>
//               <li style={{ listStyleType: "none" }}>Bootstrap</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginTop: '10%'}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <SettingsApplicationsIcon
//               color="disabled"
//               style={{ fontSize: "40px" }}
//             />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 BACK-END
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>NodeJS</li>
//               <li style={{ listStyleType: "none" }}>Express</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginTop: '20%'}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <StorageIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "calc(20px + 0.3vw)",
//                 }}
//               >
//                 DATABASES
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>PostgreSQL</li>
//               <li style={{ listStyleType: "none" }}>MongoDB</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginTop: '30%'}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <GitHubIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 COLLABO
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>GitHub</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

////Third version/////

// export default function CodingCard() {
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//     return (
//       <div
//         style={{
//           display: "flex",
//         //   flexDirection: "column",
//           width: "100%",
//           alignItems: 'center',
//           marginTop: '100px'
//         }}
//       >
//         <div style={{ width: "30%", marginLeft: '8%'}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <DvrIcon color="disabled" style={{ fontSize: "40px" }} />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "26px",
//                   }}
//                 >
//                   FRONT-END
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>HTML5</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>CSS3</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>JavaScript</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>ReactJS</li>
//                 <hr style={{ border: "2px solid grey", width: "6%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>Material UI</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>Bootstrap</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/*  */}

//         <div style={{ width: "30%",}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <SettingsApplicationsIcon
//                 color="disabled"
//                 style={{ fontSize: "40px" }}
//               />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "26px",
//                   }}
//                 >
//                   BACK-END
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>HTML5</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>NodeJS</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>Express</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div style={{ width: "30%",}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <StorageIcon color="disabled" style={{ fontSize: "40px" }} />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "calc(20px + 0.3vw)",
//                   }}
//                 >
//                   DATABASES
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>PostgreSQL</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>MongoDB</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/*  */}

//         <div style={{ width: "30%",}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <GitHubIcon color="disabled" style={{ fontSize: "40px" }} />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "26px",
//                   }}
//                 >
//                   COLLABO
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>GitHub</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

////Fourth Version////

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 420,
  },
  media: {
    height: 0,
    paddingTop: "20%", // 16:9
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

export default function CodingCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [logo, setLogo] = useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const logos = [
  //   <DvrIcon style={{ color: "yellow", fontSize: "120px" }} />,
  //   <DiReact style={{ color: "yellow", fontSize: "120px" }} />,
  //   <SiJavascript style={{ color: "yellow", fontSize: "90px" }} />,
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLogo(logos[Math.floor(Math.random() * logos.length)]);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        //   flexDirection: "column",
        width: "100%",
        alignItems: "center",
        marginTop: "100px",
        justifyContent: "center"
      }}
    >
      <div
        data-aos="zoom-out-right"
        data-aos-offset="160"
        data-aos-duration="3000"
        style={{ width:'max-content',}}
      >
        <Card className={classes.root}>
          <CardMedia style={{ textAlign: "center" }} >
            {/* <DvrIcon color="disabled" style={{ fontSize: "40px" }} /> */}
          </CardMedia>
          <CardContent style={{}}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "Quicksand",
                alignItems: "center",
                // color: 'grey'
              }}
            >
              <div
                className="nice"
                style={{
                  listStyleType: "none",
                  fontWeight: "bold",
                  fontSize: "calc(60px + 3.2vw)",
                  // position: 'absolute',
                  display: "flex",
                  flexDirection: "column",
                  color: "lightgrey",
                }}
              >
                <span>FRONT</span>
                <span>
                  End <DvrIcon style={{ color: "yellow", fontSize: "120px" }} />
                 
                </span>
              </div>
              <hr style={{ border: "2px solid yellow", width: "40%" }} />
              {/* <div style={{width: '100%', display: "flex", alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'absolute'}}>
              <DiReact style={{fontSize: '50px', color: 'yellow'}}/>
              <SiJavascript style={{fontSize: '40px', color: 'yellow',}}/>
              </div>
              <div style={{width: '100%', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> */}
              {/* <li style={{listStyleType: "none",textAlign: 'center', fontWeight: 'bold', fontSize: '20px',}}>Languages</li> */}
              <li style={{ listStyleType: "none", fontSize: "20px" }}>HTML5</li>
              <li style={{ listStyleType: "none", fontSize: "20px" }}>CSS3</li>
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                JavaScript
              </li>
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                ReactJS
              </li>
              <hr style={{ border: "2px solid grey", width: "6%" }} />
              {/* <li style={{listStyleType: "none",textAlign: 'center', fontWeight: 'bold', fontSize: '20px',}}>Tools and Methods I used</li> */}
              <li style={{ listStyleType: "none", fontSize: "16px", textAlign: 'center', }}>
               Github | Material UI | Bootstrap | React Spring | Netlify | Agile Methods/Scrum
              </li>
              {/* <li style={{ listStyleType: "none", fontSize: "20px" }}>
                Bootstrap
              </li> */}
              {/* </div>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>

      {/*  */}

      <div
        data-aos="zoom-out-right"
        data-aos-offset="160"
        data-aos-duration="3000"
        style={{width:'max-content', marginLeft: '2%',}}
      >
        <Card className={classes.root}>
          <CardMedia style={{ textAlign: "center" }}>
            {/* <DvrIcon color="disabled" style={{ fontSize: "40px" }} /> */}
          </CardMedia>
          <CardContent style={{}}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "Quicksand",
                alignItems: "center",
              }}
            >
              <div
                className="nice"
                style={{
                  listStyleType: "none",
                  fontWeight: "bold",
                  fontSize: "calc(60px + 3.2vw)",
                  // position: 'absolute',
                  display: "flex",
                  flexDirection: "column",
                  color: "lightgrey",
                }}
              >
                <span>BACK</span>
                <span>
                  End{" "}
                  <SettingsApplicationsIcon
                    style={{ color: "yellow", fontSize: "120px" }}
                  />
                </span>
              </div>
              <hr style={{ border: "2px solid yellow", width: "40%" }} />
              {/* <li style={{listStyleType: "none",textAlign: 'center', fontWeight: 'bold', fontSize: '20px',}}>Languages</li> */}
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                NodeJS
              </li>
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                Express
              </li>
              <hr style={{ border: "2px solid grey", width: "6%", marginTop: '70px' }} />
              {/* <li style={{listStyleType: "none",textAlign: 'center', fontWeight: 'bold', fontSize: '20px',}}>Tools and Methods I used</li> */}
              <li style={{ listStyleType: "none", fontSize: "16px", textAlign: 'center',  width: '100%',}}>
               Github | Express | NoSQL | SQL | Heroku | Agile Methods/Scrum
              </li>
            </div>
          </CardContent>
        </Card>
      </div>

{/*  */}

      <div
        data-aos="zoom-out-right"
        data-aos-offset="160"
        data-aos-duration="3000"
        style={{ width:'max-content', marginLeft: '2%',}}
      >
        <Card className={classes.root}>
          <CardMedia style={{ textAlign: "center" }}>
            {/* <DvrIcon color="disabled" style={{ fontSize: "40px" }} /> */}
          </CardMedia>
          <CardContent style={{}}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "Quicksand",
                alignItems: "center",
              }}
            >
              <div
                className="nice"
                style={{
                  listStyleType: "none",
                  fontWeight: "bold",
                  fontSize: "calc(60px + 3.2vw)",
                  // position: 'absolute',
                  display: "flex",
                  flexDirection: "column",
                  color: "lightgrey",
                }}
              >
                <span>DATA</span>
                <span>
                  BASES{" "}
                  <StorageIcon style={{ color: "yellow", fontSize: "120px" }} />
                </span>
              </div>
              <hr style={{ border: "2px solid yellow", width: "40%" }} />
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                PostgreSQL
              </li>
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                MongoDB
              </li>
            </div>
          </CardContent>
        </Card>
      </div>

      {/*  */}

      {/* <div
        data-aos="zoom-out-right"
        data-aos-offset="160"
        data-aos-duration="3000"
        style={{ width: "30%", marginLeft: "2%" }}
      >
        <Card className={classes.root}>
          <CardMedia style={{ textAlign: "center" }}>
          
          </CardMedia>
          <CardContent style={{}}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "Quicksand",
                alignItems: "center",
              }}
            >
              <div
                className="nice"
                style={{
                  listStyleType: "none",
                  fontWeight: "bold",
                  fontSize: "calc(60px + 2.2vw)",
               
                  display: "flex",
                  flexDirection: "column",
                  color: "lightgrey",
                }}
              >
                <span>Hosting&</span>
                <span>
                  Collabo{" "}
                  <GitHubIcon style={{ color: "yellow", fontSize: "100px" }} />
                </span>
              </div>
              <hr style={{ border: "2px solid yellow", width: "40%" }} />
              <li style={{ listStyleType: "none", fontSize: "20px" }}>
                GitHub
              </li>
            </div>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}

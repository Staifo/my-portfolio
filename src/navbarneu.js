// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div className='navbarneue' style={{position:'sticky', top: '50%', display: 'flex', flexDirection:'column', alignItems: 'flex-start',}}>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

///2nd Version///

import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Navbarneu = ({
  handleExpandClick,
  button,
  codingSkills,
  projectsButton,
  aboutMeButton,
  contactMeButton,
  handleAboutMeSide,
  handleContactMeSide,
  handleProjectsSide,
  handleSkillsSide,
  handleTop,
  handleNav,
  changeNavbar,
  navbarNeuDivHidden,
  topButton,
  icons,
  navbarVisible,
  handleVisible,
}) => {
  return (
    <div
      className="navbarneuDiv"
      // style={{
      //   display: "flex",
      //   justifyContent: "flex-end",
      //   position: "fixed",
      //   top: "40%",
      //   height: "max-content",
      //   width: "100%",
      //   visibility: "hidden",
      // }}
    >
      <div
        className="navbarneuDiv1"
        // data-aos="zoom-out-left"
        // data-aos-delay="100"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-cubic"
        // style={{
        //   width: "10%",
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "flex-end",
        //   alignItems: "flex-end",
        //   zIndex: "10",
        //   height: "max-content",
        // }}
      >
        <div
          className="navbarneu"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "flex-end",
          //   alignItems: "flex-end",
          //   marginTop: "10px",
          //   marginRight: "20px",
          //   marginBottom: "10px",
          // }}
        >
          <div
            style={{
              position: "absolute",
              marginBottom: "160px",
              fontSize: "16px",
              visibility: "hidden",
              marginRight: "-20px",
              fontFamily: "Quicksand",
              border: "1px solid lightgrey",
              width: "40px",
              textAlign: "center",
              visibility: "hidden",
            }}
            className="toggleVisible"
            ref={navbarVisible}
            onClick={handleVisible}
            // variant="contained"
          >
            N<br />A<br />V<br />B<br />A<br />R <br />
            <br />H<br />E<br />R<br />E
          </div>
          <a href="#codingSkills" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2000"
              className="navbuttonneu"
              variant="contained"
              style={{
                fontSize: "1.4vw",
                backgroundColor: "rgb(245, 245, 245,0.2)",
              }}
              ref={codingSkills}
              onClick={handleSkillsSide}
            >
              My Coding Skills
            </Button>
          </a>
          <a href="#myProjects" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2200"
              className="navbuttonneu"
              variant="contained"
              style={{
                fontSize: "1.4vw",
                backgroundColor: "rgb(245, 245, 245,0.2)",
              }}
              ref={projectsButton}
              onClick={handleProjectsSide}
            >
              My Projects
            </Button>
          </a>
          <a href="#resume" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2400"
              className="navbuttonneu"
              variant="contained"
              onClick={handleExpandClick}
              style={{
                fontSize: "1.wvh",
                backgroundColor: "rgb(245, 245, 245,0.2)",
              }}
              ref={button}
            >
              Resume
            </Button>
          </a>
          <a href="#aboutMe" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2600"
              className="navbuttonneu"
              variant="contained"
              style={{
                fontSize: "1.4vw",
                backgroundColor: "rgb(245, 245, 245,0.2)",
              }}
              ref={aboutMeButton}
              onClick={handleAboutMeSide}
            >
              About me
            </Button>
          </a>
          <a href="#contactMe" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2600"
              className="navbuttonneu"
              variant="contained"
              style={{
                fontSize: "1.4vh",
                backgroundColor: "rgb(245, 245, 245,0.2)",
              }}
              ref={contactMeButton}
              onClick={handleContactMeSide}
            >
              Contact Me
            </Button>
          </a>
          <a href="#top" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              data-aos-duration="2600"
              className="navbuttonneu"
              variant="contained"
              style={{
                fontSize: "1.4vw",
                backgroundColor: "rgb(245, 245, 245,0.2)",
              }}
              onClick={handleTop}
              ref={topButton}
            >
              Top
            </Button>
          </a>
          <Button
            data-aos="fade-up"
            data-aos-duration="2600"
            className="navbuttonneu"
            variant="contained"
            style={{
              fontSize: "1.4vw",
              backgroundColor: "rgb(245, 245, 245,0.2)",
            }}
            onClick={handleNav}
            ref={changeNavbar}
          >
            NAVBAR TOP
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "160px",
            }}
            ref={icons}
          >
            <a
              href="https://www.linkedin.com/in/istayfo-ergun-a606a564/"
              target="_blanc"
              style={{ textDecoration: "none" }}
            >
              <LinkedInIcon
                data-aos="fade-up"
                data-aos-duration="2800"
                className="linkedin"
                id="linkedin"
                color="disabled"
                style={{ fontSize: "40px" }}
              />
            </a>
            <a
              href="https://github.com/Staifo"
              target="_blanc"
              style={{ textDecoration: "none" }}
            >
              <GitHubIcon
                data-aos="fade-up"
                data-aos-duration="3000"
                className="git"
                id="git"
                color="disabled"
                style={{ fontSize: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarneu;

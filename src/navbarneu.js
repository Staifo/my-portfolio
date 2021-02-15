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

const Navbarneu = ({handleExpandClick, button}) => {
  return (
    <div
      className="navbarneuDiv"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        position: "fixed",
        top: "40%",
        height: "max-content",
        width: "100%",
      }}
    >
      <div
        className="navbarneuDiv"
        // data-aos="zoom-out-left"
        // data-aos-delay="100"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-cubic"
        style={{
          // backgroundColor: "#343136",
          // backgroundColor: "white",
          width: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          // position: "sticky",
          // top: "0",
          zIndex: "10",
          height: "max-content",
          // marginLeft: '40%'
        }}
      >
        <div
          className="navbarneu"
          class
          style={{
            // width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
          <a href="#codingSkills" style={{ textDecoration: "none" }}>
            <Button
              className="navbuttonneu"
              variant="contained"
              style={{ fontSize: "1.4vh" }}
            >
              My Coding Skills
            </Button>
          </a>
          <a href="#myProjects" style={{ textDecoration: "none" }}>
            <Button
              className="navbuttonneu"
              variant="contained"
              color="disabled"
              style={{ fontSize: "1.4vh" }}
            >
              My Projects
            </Button>
          </a>
          <a href="#resume" style={{ textDecoration: "none" }}>
            <Button
              className="navbuttonneu"
              variant="contained"
              color="disabled"
              onClick={handleExpandClick}
              style={{ fontSize: "1.4vh" }}
              ref={button}
            >
              Resume
            </Button>
          </a>
          <a href="#contactMe" style={{ textDecoration: "none" }}>
            <Button
              className="navbuttonneu"
              variant="contained"
              color="disabled"
              style={{ fontSize: "1.4vh" }}
            >
              contact Me
            </Button>
          </a>
          <div style={{display: 'flex', justifyContent: 'space-around', width: '120px'}}>
          <a
            href="https://www.linkedin.com/in/istayfo-ergun-a606a564/"
            target="_blanc"
            style={{ textDecoration: "none" }}
          >
            <LinkedInIcon
              className="linkedin"
              id="linkedin"
              color="primary"
              style={{ fontSize: "3.4vh" }}
            />
          </a>
          <a
            href="https://github.com/Staifo"
            target="_blanc"
            style={{ textDecoration: "none" }}
          >
            <GitHubIcon
              className="git"
              id="git"
              color="primary"
              style={{ fontSize: "3.4vh" }}
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarneu;

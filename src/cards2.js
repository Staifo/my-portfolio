// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// const Cards2 = ({handleExpandClick, expanded, setExpanded}) => {
//   const classes = useStyles();
// //   const [expanded, setExpanded] = React.useState(false);

// //   const handleExpandClick = () => {
// //     setExpanded(!expanded);
// //   };

//   return (
//     <Card className={classes.root}>
//       <CardActions disableSpacing>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>
//           This project was created by me in individual work within 2 weeks. The idea for my final project was to create a platform just for Junior Coders, where they can present themselves 
//               and their skills via short video, CV and other sources to prospective employers and to give employers an opportunity to just look for Junior Coders to give them a better chance to find a way into the industry.
//               I used ReactJS, NodeJS, Express, Material UI, Flexbox, Bootstrap, MongoDB ... to create this project and work is still going on
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// export default Cards2
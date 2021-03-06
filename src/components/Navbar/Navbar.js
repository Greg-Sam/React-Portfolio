import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  MuiButtonBase: {
    margin: 5
  }
}));



const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Greg Samuelson
          </Typography>

          <Button variant="contained" color="default">
            <Link to='/react-portfolio'>Home</Link>
          </Button>
          <Button variant="contained" color="default" >
            <Link to='/react-portfolio/portfolio'>Portfolio</Link>
          </Button>
          <Button   variant="contained" color="default" >
            <Link to='/react-portfolio/contact'>Contact</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

  //   return (
  //     <>
  //       <Nvbr color="light" light expand="md">
  //         <NavbarBrand href="/">Greg Samuelson</NavbarBrand>
  //         <Nav className="mr-auto" navbar>
  //           <NavItem>
  //             <NavLink>
  //               <Link to="/">Home</Link>
  //             </NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink>
  //               <Link to="/Contact">Contact</Link>
  //             </NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink>
  //               <Link to="/Portfolio">Portfolio</Link>
  //             </NavLink>
  //           </NavItem>
  //         </Nav>
  //       </Nvbr>
  //     </>
  //   )
}

export default Navbar
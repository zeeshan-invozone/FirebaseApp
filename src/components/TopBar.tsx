import React from 'react';
import firebase from '../firebase/firebase_config';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { SIGNOUT } from '../firebase/firebase_api';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const TopBar = () => {
  const classes: any = useStyles();
  const history = useHistory();

  const handleSignOut = async (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    await SIGNOUT();
    history.push('/login');
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Profile
          </Typography>
          <Button color='inherit' onClick={handleSignOut}>
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;

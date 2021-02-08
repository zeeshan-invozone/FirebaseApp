import React, { useEffect, useRef, useState } from 'react';
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import firebase from '../firebase/firebase_config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 350,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: '16px',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridMain: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  control: {
    padding: theme.spacing(2),
  },
  editIcon: {
    cursor: 'pointer',
  },
  items: {
    paddingBottom: '2rem',
  },
}));

const Dashboard = () => {
  const [pData, setPdata] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const db = firebase.firestore();
    const user = await db.collection('users').get();
    user.forEach((doc) => {
      const profile = doc.data();
      setPdata(profile);
    });
  };
  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} className={classes.gridMain}>
          <Paper className={classes.paper} elevation={5}>
            <h1 className='mt-2 mb-3'> DashBoard </h1>
            <Grid container>
              {pData && (
                <>
                  <Grid item xs={12} className='mt-3 mb-5'>
                    <img
                      src={pData.imageUrl}
                      alt='profile-image'
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem}>
                    <Typography>
                      <strong>Name</strong>
                    </Typography>
                    <Typography>
                      <strong>{pData.name}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem}>
                    <Typography>
                      <strong>Age</strong>
                    </Typography>
                    <Typography>
                      <strong>{pData.age}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem}>
                    <Typography>
                      <strong>Address</strong>
                    </Typography>
                    <Typography>
                      <strong>{pData.address}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem}>
                    <Typography>
                      <strong>Company</strong>
                    </Typography>
                    <Typography>
                      <strong>{pData.company}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem}>
                    <Typography>
                      <strong>Designation</strong>
                    </Typography>
                    <Typography>
                      <strong>{pData.designation}</strong>
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

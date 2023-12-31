import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },

  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
    },
  },

  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

export const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext); //in order to access data from socketContext
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>

      {/* Our Own Video */}

      { stream && (
          <Paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
              </Grid>
          </Paper>
        )}

      

      {/* Users Video */}

      { callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      

    </Grid>
  )
}

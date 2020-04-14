import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

type Anchor = 'bottom';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}),
);

export default function AddStage() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const classes = useStyles();

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {(['bottom'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}>Add stage</Button>
          <Drawer anchor={anchor} open={state[anchor]} onKeyDown={toggleDrawer(anchor, true)}>
            <form  className={classes.root} noValidate autoComplete="off">
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="baseline"
              >
                <Typography variant="h6">
                  <strong>Name:</strong>
          </Typography>
                <TextField
                  id="name-textarea"
                />
                <Typography variant="h6">
                <strong> Serial number:</strong>
          </Typography>
                <TextField
                  id="number-textarea"
                />
                <Typography variant="h6">
                <strong> Start date:</strong>
          </Typography>
                <TextField
                  id="stDate-textarea"
                />
                <Typography variant="h6">
                <strong> Finish date:</strong>
          </Typography>
                <TextField
                  id="finDate-textarea"
                />
              </Grid>
            </form>
            <Button variant="contained" color="primary" onClick={toggleDrawer('bottom', false)}> Add </Button>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
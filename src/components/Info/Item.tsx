import React from "react";
import { Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

interface UnitInfo {
    unitName: string;
    unitNumber: number
}

export const InfoItem = (props: UnitInfo) => {
    
    return (
        <React.Fragment>
          <AppBar color="primary" position="static">
            <Toolbar>
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start">
            <Typography variant="h4">
                    {props.unitName}
                </Typography>
                <Typography variant="h6">
                    Serial number:{props.unitNumber}
                </Typography>
                </Grid>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )
}

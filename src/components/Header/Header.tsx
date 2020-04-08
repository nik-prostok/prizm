import React from "react";
import { Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface UnitInfo {
    unitName: string;
    unitNumber: number
}

export const Header = () => {

    return (
        <React.Fragment>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Typography variant="h4">
                            
                        </Typography>
                        <Typography variant="h6">
                            Serial number:
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

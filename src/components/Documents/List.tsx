import * as React from "react";
import { Typography } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';

export const DocumentsList = (props: string[]) => {
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center">
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <DescriptionIcon />
            <Typography>{props[0]}</Typography>
        </Grid>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <DescriptionIcon />
            <Typography>{props[1]}</Typography>
        </Grid>
        </Grid>
    )
}

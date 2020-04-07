import * as React from "react";
import { Typography } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';
import { docsList } from '../Steps/List'

export const DocumentsList = (props: docsList) => {
    if (Object.keys(props.docs).length !== 0) {
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start">
                Enable files:
                {props.docs.map((doc) => (
                    <React.Fragment>
                        <Grid key={doc.id}
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <DescriptionIcon fontSize ="small"/>
                            <Typography>{doc.link}</Typography>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        )
    }
    else {
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start">
                <React.Fragment>
                    Enable files:
                    No documents
                </React.Fragment>
            </Grid>)
    }
}

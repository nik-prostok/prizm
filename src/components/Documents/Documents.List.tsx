import * as React from "react";
import {Typography} from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';
import {Stage} from '../Product/Product.List'

export const DocumentsList = (props: Stage) => {
    if (props.documents.length !== 0) {
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start">
                Enable files:
                {props.documents.map((doc) => (
                    <Grid key={doc.id}
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center">
                        <DescriptionIcon fontSize="small"/>
                        <Typography>{doc.link}</Typography>
                    </Grid>
                ))}
            </Grid>
        )
    } else {
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

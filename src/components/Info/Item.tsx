import {Typography} from "@material-ui/core";
import React from "react";

export const InfoItem = () => {
    return (
        <React.Fragment>
            <Typography variant="body1" gutterBottom>
                Название изделия
            </Typography>
            <Typography variant="body1" gutterBottom>
                Номер изделия
            </Typography>
        </React.Fragment>
    )
}

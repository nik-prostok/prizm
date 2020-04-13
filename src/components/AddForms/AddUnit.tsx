import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { UnitsProps } from '../Product/Product.List'


type Anchor = 'bottom';

export default function AddUnit(props: UnitsProps) {
    const [state, setState] = React.useState({
        bottom: false,
    });

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
                    <Button variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}>Add unit</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onKeyDown={toggleDrawer(anchor, true)}>
                        <List>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="baseline"
                            >
                                <Typography variant="h6">
                                    Name:
                                 </Typography>
                                <TextField
                                    id="name-textarea"
                                    label="Name"
                                    placeholder="Name"
                                />
                                <Typography variant="h6">
                                    Serial number:
                                </Typography>
                                <TextField
                                    id="number-textarea"
                                    label="Serial number"
                                    placeholder="Number"
                                />
                            </Grid>
                        </List>
                        <Button variant="contained" color="primary" onClick={toggleDrawer('bottom', false)}> Add </Button>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
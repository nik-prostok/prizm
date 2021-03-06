import * as React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Stage} from '../Product/Product.List';

import {DocumentsList} from "../Documents/Documents.List";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
}));

interface StepsListProps {
    stages: Stage[];
}

export const StepsList = (props: StepsListProps) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Stages</strong></TableCell>
                        <TableCell align="right"><strong>Serial number</strong></TableCell>
                        <TableCell align="right"><strong>Start date</strong></TableCell>
                        <TableCell align="right"><strong>Finish date</strong></TableCell>
                        <TableCell align="right"><strong>Complete</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.stages.map((row) => (
                            <TableRow key={row.serialNumber}>
                                <TableCell  component="th" scope="row">
                                <strong>{row.title}</strong>
                                    <DocumentsList {...row} />
                                </TableCell>
                                <TableCell align="right">{row.serialNumber}</TableCell>
                                <TableCell align="right">{row.startDate}</TableCell>
                                <TableCell align="right">{row.finishDate}</TableCell>
                                <TableCell align="right">{row.complete}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


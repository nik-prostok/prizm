import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { DocumentsList } from "../Documents/List";
enum complete {
    Undone,
    Active,
    Done
}
export interface doc {
    id: number;
    link: string;
}

export interface docsList {
    docs: doc[];
}

interface Stage {
    serialNumber: number;
    title: String;
    startDate: string;
    finishDate: string;
    documents: docsList;
    complete: complete;
}

interface StageListProps {
    stages: Stage[];
}


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
}));

export const StepsList = (props: StageListProps) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Stages</strong></TableCell>
                        <TableCell align="right"><strong>serialNumber</strong></TableCell>
                        <TableCell align="right"><strong>startDate</strong></TableCell>
                        <TableCell align="right"><strong>finishDate</strong></TableCell>
                        <TableCell align="right"><strong>complete</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.stages.map((row) => (
                        <React.Fragment>
                            <TableRow key={row.serialNumber}>
                                <TableCell  component="th" scope="row">
                                <strong>{row.title}</strong>
                                    <DocumentsList {...row.documents} />
                                </TableCell>
                                <TableCell align="right">{row.serialNumber}</TableCell>
                                <TableCell align="right">{row.startDate}</TableCell>
                                <TableCell align="right">{row.finishDate}</TableCell>
                                <TableCell align="right">{row.complete}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


import * as React from "react";
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export interface doc {
    id: number;
    link: string;
}

export interface Stage {
    serialNumber: number;
    title: string;
    startDate: string;
    finishDate: string;
    documents: doc[];
    complete: boolean;
}
export interface UnitInfo {
    unitName: string;
    unitNumber: number;
}

export interface Unit {
    unitInfo: UnitInfo;
    stages: Stage[];
}

export interface UnitsProps {
    units: Unit[];
}

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
}));

const lastTrue = (props: Stage[]) => {
    let positiveArr: boolean[] = [];
    let lastTrue: number;
    positiveArr = props.map(function (number) {
        return number.complete === true
    })
    lastTrue = positiveArr.length - 1
    return (lastTrue)
}

export const UnitsList = (props: UnitsProps) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Units</strong></TableCell>
                        <TableCell align="right"><strong>Serial number</strong></TableCell>
                        <TableCell align="right"><strong>Present stage</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.units.map((row,index) => (
                        <TableRow key={row.unitInfo.unitNumber}>
                            <TableCell component="th" scope="row">
                                <strong><Link
                                    to={`/unit/${row.unitInfo.unitNumber}`}>{row.unitInfo.unitName}</Link></strong>
                                </TableCell>
                                <TableCell align="right">{row.unitInfo.unitNumber}</TableCell>
                                <TableCell align="right">{row.stages[lastTrue(row.stages)].title}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


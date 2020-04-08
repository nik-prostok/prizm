import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
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

export interface docsList {
    docs: doc[];
}

interface Stage {
    serialNumber: number;
    title: String;
    startDate: string;
    finishDate: string;
    documents: docsList;
    complete: boolean;
}

interface StageListProps {
    stages: Stage[];
}
interface UnitInfo {
    unitName: string;
    unitNumber: number;
}
interface Unit {
    unitInfo: UnitInfo;
    stageList: StageListProps;
}
interface Units {
    units: Unit[];
}

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
}));

const lastTrue = (props: Units) => {
    let positiveArr: Stage[] = [];
    let lastTrue: number;
    props.units.map((row) => (
        positiveArr = row.stageList.stages.filter(function (number) {
            return number.complete === true
        })
    ))
    lastTrue = positiveArr.length - 1
    return (lastTrue)
}

export const UnitsList = (props: Units) => {

    const lastTrueStage = lastTrue(props);
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Units</strong></TableCell>
                        <TableCell align="right"><strong>serialNumber</strong></TableCell>
                        <TableCell align="right"><strong>stage</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.units.map((row) => (
                        <React.Fragment>
                            <TableRow key={row.unitInfo.unitNumber}>
                                <TableCell component="th" scope="row">
                                    <strong>{row.unitInfo.unitName}</strong>
                                </TableCell>
                                <TableCell align="right">{row.unitInfo.unitNumber}</TableCell>
                                <TableCell align="right">{row.stageList.stages[lastTrueStage]}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


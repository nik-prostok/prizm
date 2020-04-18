import * as React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export interface User {
    email: string;
    firstName: string;
    id: number;
    lastName: string,
    userName: string;
}

export interface doc {
    id: number;
    path: string;
    title: string;
    user: User;
}

export interface Stage {
    index: number;
    title: string;
    startDate: string;
    finishDate: string;
    documents: doc[];
    status: string;
}

export interface Product {
    title: string;
    id: number;
    productNumber: number;
    status: string;
    stages: Stage[];
}

export interface ProductsProps {
    products: Product[];
}

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
}));

export const UnitsList = (props: ProductsProps) => {

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
                    {props.products.map((row, index) => (
                        <TableRow key={row.productNumber}>
                            <TableCell component="th" scope="row">
                                <strong><Link
                                    to={`/product/${row.productNumber}`}>{row.title}</Link></strong>
                            </TableCell>
                            <TableCell align="right">{row.productNumber}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


import React from "react";
import {Link} from 'react-router-dom'
import {Typography} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface HeaderProps {
    title: string;
}

export const HeaderInfo = (props: HeaderProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <React.Fragment>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Main</MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/products">Units</Link></MenuItem>
                    </Menu>
                        <Typography variant="h4">
                            {props.title}
                        </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

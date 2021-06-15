import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import colorStyles from '../Default/colorStyles';
import Drawer from '../Components/Drawer';
import { } from 'react-places-autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.secondary
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        display: 'block',
        color: colorStyles.defaultGreen,
        fontWeight: "bold",
        marginTop: 15
        // },
    },
    logo: {
        height: 60,
        width: 60,
        marginTop: 5
    },
    search: {
        position: 'relative',
        borderRadius: 25,
        backgroundColor: "#E5E5E54D",
        width: '90%',
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginLeft: "auto",
        marginRight: "auto",
        marginLeft: 10
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black
    },
    inputRoot: {
        color: theme.palette.common.black
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    locationBtn: {
        backgroundColor: "white",
        border: "0px",
        position: "absolute",
        right: 15,
        fontSize: 18,
        fontWeight: 600
    }
}));


export default function GeneralAppBar(props) {
    const classes = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <MenuIcon onClick={() => { setIsDrawerOpen(true) }} />
                    <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} history={props.history} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

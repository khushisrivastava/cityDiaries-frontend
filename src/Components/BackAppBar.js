import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function BackAppBar(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => {
                            props.history.goBack()
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

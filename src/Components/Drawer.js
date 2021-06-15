import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useAuthContext } from '../Context/AuthContext';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    drawerText: {
        color: '#219a53'
    },
    drawerHeading: {
        backgroundColor: '#219a53',
        color: 'white'
    },
    logo: {
        height: "40%",
        width: "40%",
        margin: 5 
    }
}))


export default function Drawer({ isDrawerOpen, setIsDrawerOpen, history }) {
    const classes = useStyles();
    const { token }  = useAuthContext();
    var state = "LogIn";
    if (token) {state = "LogOut"}
    
    return (
        <SwipeableDrawer
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            onOpen={() => setIsDrawerOpen(true)}>
            <div
                className={classes.list}
                role="presentation"
            >
                <img src={require('../assets/logo512.png')} alt="logo" className={classes.logo} ></img>
                <List>
                    <ListItem button divider onClick={() => {
                        localStorage.clear();
                        history.push('/login')
                    }}>
                        <ListItemText primary={state} className={classes.drawerText} />
                    </ListItem>
                </List>
                <div style={{ position: 'fixed', width: 250, bottom: 0 }}>
                    <List>
                        {/* <ListItem className={classes.drawerHeading}>
                        <ListItemText primary={"PARNARATE"} />
                    </ListItem> */}
                        <ListItem button divider component="a" href="/privacy-policy">
                            <ListItemText primary={"Privacy Policy"} className={classes.drawerText} />
                        </ListItem>
                        <ListItem button component="a" href="/terms-of-use">
                            <ListItemText primary={"Terms of Use"} className={classes.drawerText} />
                        </ListItem>
                    </List>
                </div>

            </div>
        </SwipeableDrawer>
    )


}
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import colorStyles from '../Default/colorStyles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
    },
}));

const styles = {
    root: {
        color: colorStyles.defaultGrey,
        "&$selected": {
            color: colorStyles.defaultGreen
        }
    },
    selected: {}
};

function BottomNavBar(props) {
    const classes = useStyles();
    const actionClasses = props.classes;
    const value = props.value;

    return (
        <BottomNavigation
            value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            showLabels
            className={classes.root}
            classes={actionClasses}
        >
            <BottomNavigationAction onClick={() => { props.history.push('/home') }} classes={actionClasses} icon={<HomeOutlinedIcon />} />
            <BottomNavigationAction onClick={() => { props.history.push('/my-rating') }} classes={actionClasses} icon={<GradeOutlinedIcon />} />
            <BottomNavigationAction onClick={() => { props.history.push('/favourites') }} classes={actionClasses} icon={<FavoriteBorderOutlinedIcon />} />
        </BottomNavigation>
    );
}

export default withStyles(styles)(BottomNavBar);

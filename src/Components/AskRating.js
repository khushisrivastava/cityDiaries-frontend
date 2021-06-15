import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import colorStyles from '../Default/colorStyles';

const useStyles = makeStyles((theme) => ({
    view: {
        margin: theme.spacing(3),
        // border: `1px solid ${colorStyles.defaultGreen}`,
        // padding: theme.spacing(4),
        // borderRadius: 20,
        // height: 200
    },
    name: {
        marginBottom: 20,
        textAlign: "center"
    },
}));

function AskRating(props) {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const { name, id, onRate } = props;

    const onRatePress = (newValue) => {
        setValue(newValue);
        onRate(id, newValue);
    }

    return (
        <Box key={id} className={classes.view}>
            <Typography className={classes.name} variant="h5" component="h6">
                {name}
            </Typography>
            <div style={{ textAlign: "center" }}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    className={classes.rating}
                    onChange={(event, newValue) => {
                        onRatePress(newValue);
                    }}
                />
            </div>
        </Box>
    )
}

export default AskRating;
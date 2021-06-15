import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    selectedPaper: {
        height: 35,
        width: 100,
        marginTop: theme.spacing(8),
        textAlign: "center",
        backgroundColor: "#000000",
        color: "white"
    },
    paper: {
        height: 35,
        width: 100,
        marginTop: theme.spacing(8),
        textAlign: "center",
        backgroundColor: "#E5E5E54D"
    },
    selectedPaper1: {
        height: 35,
        width: 100,
        marginTop: theme.spacing(8),
        textAlign: "center",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#000000",
        color: "white"
    },
    paper1: {
        height: 35,
        width: 100,
        marginTop: theme.spacing(8),
        textAlign: "center",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "#E5E5E54D"
    },
    selectedPaper2: {
        height: 35,
        width: 100,
        marginTop: theme.spacing(8),
        textAlign: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#000000",
        color: "white"
    },
    paper2: {
        height: 35,
        width: 100,
        marginTop: theme.spacing(8),
        textAlign: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#E5E5E54D",
        borderRadius: 0
    },
    grid: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    gridItem: {
        margin: 0
    }
}));

const styles = {
    cards: {
        marginBottom: "60px",
    }
}



function SelectTab(props) {
    const classes = useStyles();
    const { type, onTypeChange } = props;

    return (
        <div style={styles.view}>
            <Grid item>
                <Grid container justify="center" className={classes.grid}>
                    <Grid item className={classes.gridItem}>
                        <Paper className={type === "restaurant" ? classes.selectedPaper1 : classes.paper1} onClick={
                            () => {
                                onTypeChange("restaurant")
                            }}>
                            <Typography style={{ position: "relative", top: 8, fontSize: 13 }}>Restaurants</Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Paper className={type === "gym" ? classes.selectedPaper : classes.paper} onClick={
                            () => {
                                onTypeChange("gym")
                            }}>
                            <Typography style={{ position: "relative", top: 8, fontSize: 13 }}>Gyms</Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Paper className={type === "lodging" ? classes.selectedPaper2 : classes.paper2} onClick={
                            () => {
                                onTypeChange("lodging")
                            }
                        }>
                            <Typography style={{ position: "relative", top: 8, fontSize: 13 }}>Hotels</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default SelectTab;
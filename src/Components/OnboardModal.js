import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import OnBoardCarousal from './OnBoardCarousal';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: "none",
        width: "80%",
        margin: "auto",
        marginTop: theme.spacing(15),
        display: "flex",
        flexDirection: "row"
    },
    cross: {
        // position: "absolute",
        // right: 20,
        fontSize: 25,
        position: "relative",
        left: 15,
        top: -50
    }
}));

export default function OnBoardModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = React.useState(getModalStyle);
    const { open, handleClose } = props;

    const onCrossHandler = () => {
        localStorage.setItem("parnaFirst", false);
        handleClose();
    }


    const body = (
        <div className={classes.paper}>
            <OnBoardCarousal />
            <h5 className={classes.cross} onClick={onCrossHandler}>x</h5>
        </div>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    );
}

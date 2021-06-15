import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AskRating from './AskRating';
import colorStyles from '../Default/colorStyles';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Axios from 'axios';

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: colorStyles.defaultGreen,
        },
    },
    completed: {
        '& $line': {
            borderColor: colorStyles.defaultGreen,
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: colorStyles.defaultGrey,
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: colorStyles.defaultGreen,
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: colorStyles.defaultGreen,
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        backgroundColor: colorStyles.defaultGreen,
        color: "white",
        margin: 10
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));



export default function CustomizedSteppers(props) {
    const classes = useStyles();
    const [results, setResults] = useState({});
    const [nextActive, setNextActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [activeStep, setActiveStep] = React.useState(0);
    const mainLoading = useSelector(state => state.loading);
    const steps = questions;
    const { createReviewByUser, type } = props;

    useEffect(() => {
        Axios.get(`/questions?type=${type}`).then((results) => {
            setQuestions(results.data);
            // setActiveStep(results.data.length);
        })
    }, [type])

    const ratingHandler = (id, rating) => {
        const data = { ...results };
        data[id] = rating;
        setResults(data);
        setNextActive(true);
        setLoading(true);
        const timer = setTimeout(() => {
            handleNext();
            setLoading(false);
            setNextActive(false);
        }, 1000);
    }



    function getStepContent(step) {
        if (questions.length > 0) {
            return <AskRating onRate={ratingHandler} key={`q${step}`} id={`q${step + questions[0].id}`} name={questions[step].question} />
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleReset = () => {
    //     setResults([]);
    //     setActiveStep(0);
    // };

    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {questions.map((label, index) => (
                    <Step key={label.id}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{index + 1}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {/* <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper> */}
            <div>
                {activeStep === steps.length ? (
                    <div style={{ textAlign: "center" }}>
                        {mainLoading ?
                            <div style={{ textAlign: "center" }}>
                                <CircularProgress color="secondary" />
                            </div> :
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    // props.history.push('/login')
                                    createReviewByUser(results)
                                }}
                                className={classes.button}
                            >
                                Finish
                        </Button>}
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            {loading ?
                                <div style={{ textAlign: "center" }}>
                                    <CircularProgress color="secondary" />
                                </div>
                                :
                                <div style={{ textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}>
                                        Back
                                    </Button>
                                    {activeStep === steps.length - 1 ?
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                createReviewByUser(results);
                                            }}
                                            className={classes.button}
                                        >
                                            Finish
                                    </Button>
                                        :
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            disabled={!nextActive ? true : false}
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            Next
                                    </Button>
                                    }
                                </div>}
                        </div>
                    )}
            </div>
        </div>
    );
}

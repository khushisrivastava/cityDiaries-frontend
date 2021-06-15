import React, { useEffect, lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import colorStyles from '../Default/colorStyles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlace, createReview } from '../Redux/Thunks';

const ReviewPagination = lazy(() => import('../Components/ReviewPagination'));
const Footer = lazy(() => import('../Components/Footer'));
const BackAppBar = lazy(() => import('../Components/BackAppBar'));


const useStyles = makeStyles((theme) => ({
    name: {
        color: colorStyles.defaultGreen,
        fontWeight: 500,
        marginTop: theme.spacing(2),
        textAlign: "center"
    },
    box: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    }
}))

function RatingPage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.places.selected);

    useEffect(() => {
        dispatch(fetchPlace(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const createReviewByUser = (data) => {
        const params = {
            place_id: props.match.params.id,
            name: restaurant.name,
            icon: restaurant.icon,
            rating: restaurant.rating,
            address: restaurant.formatted_address,
            review: data,
            type: props.match.params.type
        }
        dispatch(createReview(params));
        const timer = setTimeout(() => {
            props.history.goBack();
        }, 2000);
    }

    return (
        <div>
            <Suspense>
                <BackAppBar {...props} title="Rating" />
            </Suspense>
            <Typography variant="h5" component="h6" className={classes.name}>
                {restaurant.name}
            </Typography>
            <Box borderColor="transparent" className={classes.box}>
                <Typography>{restaurant.formatted_address}</Typography>
            </Box>
            <Suspense>
                <ReviewPagination type={props.match.params.type} {...props} createReviewByUser={createReviewByUser} />
            </Suspense>
            <Suspense>
                {/* <Footer /> */}
            </Suspense>
        </div>
    )
}

export default RatingPage;
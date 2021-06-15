import {
    startLoading,
    finishLoading,
    setReviews,
    setReview
} from '../Slices/index';
import Axios from 'axios';

const fetchReviews = () => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await Axios.get(
            `/review/review_list/`
        )
        if (response.status === 200) {
            dispatch(setReviews(response.data.sort((a, b) => b.rating - a.rating)));
        }
        else {
            console.log(response.data);
        }
    }
    catch (err) {
        console.log(err);
    }
    dispatch(finishLoading());
}

const createReview = (params) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await Axios.post(
            `/review/rate_restaurant/`, params
        );
        if (response.status === 200) {
            // dispatch(setReview(params));
        }
        else {
            console.log(response.data);
        }
    } catch (err) {
        console.log(err);
    }
    dispatch(finishLoading());
}

export const ReviewThunk = {
    fetchReviews,
    createReview
}
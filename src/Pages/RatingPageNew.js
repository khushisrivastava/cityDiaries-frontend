import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlace, createReview } from '../Redux/Thunks';
import { apiUrl } from '../Default/apiUrl';

const ReviewPaginationNew = lazy(() => import('../Components/ReviewPaginationNew'));


function RatingPage(props) {
    const { type, id, setShowRatingModal } = props;
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.places.selected);

    // useEffect(() => {
    //     dispatch(fetchPlace(id));
    // }, [dispatch, id]);

    const createReviewByUser = (data) => {
        const params = {
            place_id: id,
            name: restaurant.name,
            icon: `${apiUrl}/maps/place_photos?maxwidth=1000&photoreference=${restaurant.icon}&key=AIzaSyBrtNUacoZ2l7VqPirFuWERg4iRVhwE15o`,
            rating: restaurant.rating,
            address: restaurant.formatted_address,
            review: data,
            type: type
        }
        dispatch(createReview(params));
        const timer = setTimeout(() => {
            setShowRatingModal(false);
            // props.history.goBack();
        }, 1000);
    }

    return (
        <div>
            <ReviewPaginationNew type={type} {...props} createReviewByUser={createReviewByUser} />
        </div>
    )
}

export default RatingPage;
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlace, createRemoveFavourite } from '../../Redux/Thunks';
import './RestaurantDetailPage.css';


import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { apiUrl } from '../../Default/apiUrl';
import RatingBottomSheet from '../RatingBottomSheet';

const Footer = lazy(() => import('../../Components/Footer'));

function RestaurantDetailsPage(props) {
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.places.selected);
    const favouriteMain = useSelector(state => state.places.selected.is_favourite);
    const loading = useSelector(state => state.loading);
    const [questions, setQuestions] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [favourite, setFavourite] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const { token } = useAuthContext();


    useEffect(() => {
        const { id, type } = props.match.params;
        dispatch(fetchPlace(id));
        Axios.get(`/questions?type=${type}`).then((results) => {
            setQuestions(results.data);
        });
        setFavourite(favouriteMain)
    }, [dispatch, props.match.params, favouriteMain]);

    const onFavouriteHandler = () => {
        const params = {
            place_id: props.match.params.id,
            name: restaurant.name,
            icon: restaurant.icon,
            rating: restaurant.rating,
            address: restaurant.formatted_address ? restaurant.formatted_address : restaurant.vicinity,
            type: props.match.params.type,
        }
        if (token) {
            dispatch(createRemoveFavourite(params));
            setFavourite(!favourite);
        }
        else {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
    }

    const handleShare = async () => {
        const { id, type } = props.match.params;
        const shareData = {
            title: restaurant.name,
            text: restaurant.address,
            url: `https://citydiaries-46605.firebaseapp.com/place/${type}/${id}`,
        }
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log("Something went wrong");
        }
    }


    const { geometry, photos, avg_ratings } = restaurant;
    return (
        !loading &&
        <div className="restaurant-detail">
            {/* <BackAppBar {...props} title={restaurant.name} /> */}
            <div className="topNavbar">
                <div className="left-icon">
                    <ArrowBackIcon className="icon" onClick={() => { props.history.goBack() }} />
                </div>
                <div className="right-icon" >
                    <ShareIcon style={{ marginRight: 10 }} onPress={handleShare} />
                    {favourite ? <FavoriteIcon className="icon" onClick={onFavouriteHandler} /> : <FavoriteBorderOutlinedIcon onClick={onFavouriteHandler} className="icon" />}
                </div>
            </div>
            <div className="restaurant-image">
                <img
                    className="restaurant-image"
                    alt="place"
                    src={`${apiUrl}/maps/place_photos?maxwidth=${1000}&photoreference=${restaurant.icon}`}
                />
            </div>

            <div className="main-info">
                <div className="essential">
                    <h6 className="type">{props.match.params.type === "lodging" ? "HOTEL" : props.match.params.type.toUpperCase()}</h6>
                    <h5 className="name">{restaurant.name}</h5>
                    <div style={{ width: '100%', height: 20 }}></div>
                </div>
                {/* <div className="mainRating">
                    <Box borderColor="transparent">
                        <Rating className={classes.rating} name="read-only" value={restaurant.rating ? restaurant.rating : null} readOnly precision={0.1} size="small" />
                        {restaurant.rating ?
                            <Typography className={classes.ratingValue}>
                                {`(${restaurant.user_ratings_total} reviews)`}
                            </Typography> : null}
                    </Box>
                </div> */}
            </div>
            <div className="mainContent">
                <div className="secondary-info">
                    <div className="address-view">
                        <h4 className="address-heading">Address</h4>
                        <h6 className="address">{restaurant.formatted_address ? restaurant.formatted_address : restaurant.address}</h6>
                    </div>
                    {geometry ?
                        <div className="navigation-view">
                            <a href={`https://www.google.com/maps/search/?api=1&query=${geometry.location.lat},${geometry.location.lng}&query_place_id=${props.match.params.id}`}>
                                <img src={require('../../assets/navigation@3x.png')} className="navigation" alt="navigation" />
                            </a>
                            <h6 className="direction-label">Get Directions</h6>
                        </div>
                        : null}
                </div>
                <Typography variant="h5" component="h4" className="rating-heading">Detailed Ratings</Typography>
                <div className="ratingsView">
                    {avg_ratings ? Object.entries(avg_ratings).map((item, index) => {
                        return <div className="ratingComp">
                            <Typography style={{ width: "50%" }}>
                                {questions.length > 0 && questions.filter(indi => {
                                    return item[0].toString() === indi.id.toString();
                                })[0].question}
                                {/* {questions.filter(indi => {
                                    return `q${indi.id}` === item[0]
                                })[0].question} */}
                            </Typography>
                            <Rating className="myrating" name="read-only" value={item[1]} readOnly precision={0.1} size="small" />
                        </div>
                    }) : null}
                </div>
                <button className="rate-button" onClick={() => {
                    // props.history.push(`/rate/${props.match.params.type}/${props.match.params.id}`)
                    if (token) {
                        setShowRatingModal(true)
                    }
                    else {
                        setRedirect(true)
                    }
                }}>
                    <span className="btncon">Rate</span>
                </button>
            </div>
            <Suspense>
                {/* <Footer /> */}
            </Suspense>
            {showRatingModal && <RatingBottomSheet
                setShowRatingModal={setShowRatingModal}
                type={props.match.params.type}
                id={props.match.params.id} />}
        </div >
    )
}

export default RestaurantDetailsPage;
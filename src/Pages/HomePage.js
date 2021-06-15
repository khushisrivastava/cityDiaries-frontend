import React, { useState, useEffect, lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces, fetchPlaceBySearch, fetchPlacesByTypeChange } from '../Redux/Thunks';
import _ from 'lodash';
import APIKEY from '../Default/mapApiKey';
import { apiUrl } from '../Default/apiUrl';

import { useLocationContext } from '../Context/LocationContext';
import colorStyles from '../Default/colorStyles';

const SearchAppBar = lazy(() => import('../Components/HomePageAppBar'));
const Footer = lazy(() => import('../Components/Footer'));
const SkeletonStructure = lazy(() => import('../Components/RestaurantSkeleton'));
const RestaurantCard = lazy(() => import('../Components/RestaurantCard'));
const BottomNavBar = lazy(() => import('../Components/BottomNavBar'));
const SelectTab = lazy(() => import('../Components/SelectTab'));



const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: 10,
        marginBottom: 5,
        textAlign: "center"
    },
    commenText: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 150,
        marginLeft: 15,
        marginRight: 15,
        color: colorStyles.defaultGrey,
        textAlign: "center"
    },
}))


function HomePage(props) {
    const classes = useStyles();
    const [filteredSearch, setFilteredSearch] = useState(false);
    const [type, setType] = useState("restaurant");
    const [typedAddress, setTypedAddress] = useState("");
    const { latitude, longitude, location } = useLocationContext();


    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.places.all);
    const loading = useSelector(state => state.loading);
    let filtered = useSelector(state => state.places.filtered);

    useEffect(() => {
        const params = {
            location: latitude && longitude ? `${latitude},${longitude}` : "",
            radius: 10000,
            types: "restaurant",
            name: ""
        }

        dispatch(fetchPlaces(params));
    }, [latitude, longitude, dispatch])

    const setSearchQueryResult = _.debounce((data) => {
        setFilteredSearch(true);
        getRestaurantsDataOnSearch(data);
    }, 1000);


    const getRestaurantsDataOnSearch = (query) => {
        if (query.length > 0) {
            const params = {
                location: latitude && longitude ? `${latitude},${longitude}` : "",
                types: type,
                name: query,
                radius: 10000,
            };
            dispatch(fetchPlaceBySearch(params));
        }
        else {
            getDataOnTypeChange(type);
            setFilteredSearch(false);
        }
    }


    const getDataOnTypeChange = (query) => {
        setType(query);
        const params = {
            location: latitude && longitude ? `${latitude},${longitude}` : "",
            types: query,
            name: "",
            radius: 10000,
        }
        dispatch(fetchPlacesByTypeChange(params));
        setTypedAddress("");
        setFilteredSearch(false);
    }

    const data = filteredSearch ? filtered : restaurants;

    return (
        <>
            <Suspense>
                <SearchAppBar {...props} setTypedAddress={setTypedAddress} typedAddress={typedAddress} setSearchQuery={setSearchQueryResult} />
            </Suspense>
            {latitude && longitude ?
                <>
                    <SelectTab type={type} onTypeChange={getDataOnTypeChange} />
                    {/* {!loading ? <Typography variant="h5" component="h4" className={classes.heading}>
                        {data.length} {type === "lodging" ? "hotels" : (type + "s")} found.
                    </Typography> : null} */}
                    <div style={styles.cards}>
                        {loading && <SkeletonStructure />}
                        {data.map((item) => {
                            return <Suspense>
                                <RestaurantCard
                                    {...props}
                                    key={item.place_id}
                                    place_id={item.place_id}
                                    image={item.photos ? `${apiUrl}/maps/place_photos?maxwidth=${1000}&photoreference=${item.photos[0].photo_reference}&key=${APIKEY}` : item.icon}
                                    name={item.name}
                                    address={item.vicinity}
                                    value={item.avg_ratings}
                                    avg_rating={item.avg_ratings}
                                    icon={item.icon}
                                    photos={item.photos}
                                    type={item.type}
                                    is_favourite={item.is_favourite}
                                    favPage={false}
                                />
                            </Suspense>
                        })}
                        {!data.length && restaurants.length > 0 && <h5 style={{ textAlign: "center", width: "85%", color: "grey", marginLeft: "auto", marginRight: "auto" }}>Your current location is set to {location}. Consider changing it to look for hygienic places nearby</h5>}
                        <Suspense>
                            {/* <Footer /> */}
                        </Suspense>
                    </div>
                </> :
                <>
                    <Typography className={classes.commenText}>
                        Oh ho! Please either allow your location or select your location to proceed
                    </Typography>
                    <Suspense>
                        {/* <Footer /> */}
                    </Suspense>
                </>
            }
            <Suspense>
                <BottomNavBar {...props} value={0} />
            </Suspense>
        </>
    )
}

const styles = {
    cards: {
        marginBottom: "60px",
    }
}

export default HomePage;
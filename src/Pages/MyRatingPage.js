import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SelectTab from '../Components/SelectTab';
import { fetchReviews } from '../Redux/Thunks';
import Typography from '@material-ui/core/Typography';

const RestaurantCard = lazy(() => import('../Components/RestaurantCard'));
const AppBar = lazy(() => import('../Components/AppBar'));
const Footer = lazy(() => import('../Components/Footer'));
const BottomNavBar = lazy(() => import('../Components/BottomNavBar'));


function MyRatingPage(props) {
    const [type, setType] = useState("restaurant");
    const [filter, setFilter] = useState([]);
    const dispatch = useDispatch();
    const reviewed = useSelector(state => state.places.reviews);
    const loading = useSelector(state => state.loading);


    useEffect(() => {
        if (reviewed.length === 0) {
            dispatch(fetchReviews());
        }
        const data = type === "restaurant" ? reviewed.filter(item => item.place.type === "restaurant") : filter;
        setFilter(data);
    }, [dispatch, reviewed]);

    const getFavsOnTypeChange = (query) => {
        setType(query);
        const data = reviewed.filter(item => item.place.type === query);
        setFilter(data);
    }
    let content;

    if (loading) {
        content = <div style={{ textAlign: "center", marginTop: 20, marginBootom: 10 }}>
            <CircularProgress color={"#2d2d2d"} />
        </div>
    }


    const searchFilterHandler = (event) => {
        const data = reviewed.filter(item => item.place.type === type);
        let currentList = [];
        let newList = [];
        if (event.target.value !== "") {
            currentList = data;
            newList = currentList.filter(item => {
                const lc = item.place.name.toLowerCase();
                const val = event.target.value.toLowerCase();
                return lc.includes(val);
            });
        } else {
            newList = data;
        }
        setFilter(newList);
    }

    return (
        <>
            <Suspense>
                <AppBar {...props} title="Detailed Ratings" searchFilterHandler={searchFilterHandler} />
            </Suspense>
            <SelectTab type={type} onTypeChange={getFavsOnTypeChange} />
            {/* {!loading && <Typography variant="h6" component="h6" className={classes.heading}>
                {reviewed.length} Rated Restaurants.
            </Typography>} */}
            <div style={styles.cards}>
                {/* {loading && content} */}
                {filter.length > 0 ? filter.map(item => {
                    return <Suspense>
                        <RestaurantCard
                            {...props}
                            id={item.id}
                            place_id={item.place.place_id}
                            name={item.place.name}
                            address={item.place.address}
                            value={item.place.rating}
                            image={item.place.icon}
                            icon={item.place.icon}
                            type={item.place.type}
                            favPage={false}
                        />
                    </Suspense>
                }) : <Typography style={{ marginTop: 10, color: "grey", textAlign: "center" }}>No rated {type + "s"}</Typography>}
                {/* <Footer /> */}
            </div>
            <Suspense>
                <BottomNavBar {...props} value={1} />
            </Suspense>
        </>
    )
}

const styles = {
    cards: {
        marginBottom: "60px"
    }
}

export default MyRatingPage;
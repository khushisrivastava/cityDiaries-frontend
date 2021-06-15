import React, { useEffect, lazy, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../Redux/Thunks';
import Typography from '@material-ui/core/Typography';


// const Footer = lazy(() => import('../Components/Footer'));
const RestaurantCard = lazy(() => import('../Components/RestaurantCard'));
const BottomNavBar = lazy(() => import('../Components/BottomNavBar'));
const AppBar = lazy(() => import('../Components/AppBar'));
const SelectTab = lazy(() => import('../Components/SelectTab'));


function FavouritesPage(props) {
    const [type, setType] = useState("restaurant");

    const dispatch = useDispatch();
    const favourites = useSelector(state => state.places.favourites);
    const [filter, setFilter] = useState([]);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        if (favourites.length == 0) {
            dispatch(fetchFavorites());
        }
        const data = type === "restaurant" ? favourites.filter(item => item.type === "restaurant") : filter;
        setFilter(data);
    }, [dispatch, favourites]);


    const getFavsOnTypeChange = (query) => {
        setType(query);
        const data = favourites.filter(item => item.type === query);
        setFilter(data);
    }

    let content;

    if (loading) {
        content = <div style={{ textAlign: "center", marginTop: 20, marginBootom: 10 }}>
            <CircularProgress color={"#2d2d2d"} />
        </div>
    }


    const searchFilterHandler = (event) => {
        const data = favourites.filter(item => item.type === type);
        let currentList = [];
        let newList = [];
        if (event.target.value !== "") {
            currentList = data;
            newList = currentList.filter(item => {
                const lc = item.name.toLowerCase();
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
            <AppBar {...props} title="Favourites" fav={true} searchFilterHandler={searchFilterHandler} />
            <SelectTab type={type} onTypeChange={getFavsOnTypeChange} />
            <div style={styles.cards}>
                {/* {loading && content} */}
                {filter.length > 0 ? filter.map((item, index) => {
                    return <RestaurantCard
                        {...props}
                        key={index}
                        id={item.place_id}
                        place_id={item.place_id}
                        name={item.name}
                        address={item.address}
                        value={item.rating}
                        image={item.icon}
                        icon={item.icon}
                        type={item.type}
                        is_favourite={item.is_favourite}
                        favPage={true}
                    />
                }) : <Typography style={{ marginTop: 10, color: "grey", textAlign: "center" }}>No Favourite {type + "s"}</Typography>}
                {/* <Footer /> */}
            </div>
            <BottomNavBar {...props} value={2} />
        </>
    )
};

const styles = {
    cards: {
        marginBottom: "60px"
    }
}

export default FavouritesPage;
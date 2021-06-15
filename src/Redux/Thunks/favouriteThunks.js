import {
    setFavourites,
    startLoading,
    finishLoading,
    setFavourite,
    // setFavourite
} from '../Slices/index';
import Axios from 'axios';

const fetchFavorites = () => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await Axios.get(
            `/place/fav_places`
        )
        if (response.status === 200) {
            const data = response.data.sort((a, b) => b.rating - a.rating);
            const mainData = data.map(item => {
                return { ...item, is_favourite: true };
            })
            dispatch(setFavourites(mainData));
        }
        else {
            console.log(response.data);
        }
    }
    catch (err) {
        console.log(err);
    }
    dispatch(finishLoading());
};

const createRemoveFavourite = (params) => async (dispatch, getState) => {
    // dispatch(startLoading());
    try {
        const state = getState();
        const data = [...state.places.favourites];
        const response = await Axios.post(
            `/place/toggle_fav/`, params
        )
        const filtered = data.filter(item => item.place_id === params.place_id);
        if (!params.is_favourite) {
            params = { ...params, is_favourite: true }
            dispatch(setFavourite(params));
        }
        if (filtered.length > 0) {
            let idx = data.findIndex(item => item.place_id === params.place_id);
            data.splice(idx, 1);
            const mainData = data.map(item => {
                return { ...item, is_favourite: true };
            })
            dispatch(setFavourites(mainData));
        }
        else {
            if (response.status === 200) {
                // dispatch(setFavourite(params));
            }
            else {
                console.log(response.data);
            }
        }
        // dispatch(finishLoading());
    }
    catch (err) {
        console.log(err);
    }
}

export const FavouritesThunk = {
    fetchFavorites,
    createRemoveFavourite
}
import {
    setPlaces,
    setPlace,
    startLoading,
    finishLoading,
    setPlacesBySearch
} from '../Slices/index';
import Axios from 'axios';

const fetchPlaces = (params) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await Axios.get(`/maps/places_nearby/?location=${params.location}&types=${params.types}&name=${params.name}&radius=${params.radius}`)
        if (response.status === 200) {
            dispatch(setPlaces(response.data.results.sort((a, b) => b.rating - a.rating)));
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

const fetchPlaceBySearch = (params) => async (dispatch, getState) => {
    dispatch(startLoading());
    try {
        const state = getState();
        let query = params.name;
        const filteredTemp = state.places.all.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase())
        });
        if (filteredTemp.length > 0) {
            dispatch(setPlacesBySearch(filteredTemp.sort((a, b) => b.rating - a.rating)));
        }
        else {
            const response = await Axios.get(`/maps/places_nearby/?location=${params.location}&types=${params.types}&name=${params.name}&radius=${params.radius}`)
            if (response.status === 200) {
                dispatch(setPlacesBySearch(response.data.results.sort((a, b) => b.rating - a.rating)));
            }
            else {
                console.log(response.data);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
    dispatch(finishLoading());
}

const fetchPlace = (id) => async (dispatch, getState) => {
    dispatch(startLoading());
    try {
        //     const state = getState();
        //     const filteredTemp = state.places.all.filter(item => item.place_id === id);
        //     if (filteredTemp.length > 0) {
        //         dispatch(setPlace(filteredTemp[0]));
        //     }
        // else {
        const params = {
            place_id: id
        }
        const response = await Axios.get(`/maps/details/?place_id=${params.place_id}`)
        if (response.status === 200) {
            dispatch(setPlace(response.data.result));
        }
        else {
            console.log(response.data);
        }
        // }
    }
    catch (error) {
        console.log(error);
    }
    dispatch(finishLoading());
}

const fetchPlacesByTypeChange = (params) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await Axios.get(`/maps/places_nearby/?location=${params.location}&types=${params.types}&name=&radius=${params.radius}`)
        if (response.status === 200) {
            dispatch(setPlaces(response.data.results.sort((a, b) => b.rating - a.rating)));
        }
        else {
            console.log(response.data);
        }
    }
    catch (error) {
        console.log(error);
    }
    dispatch(finishLoading());
}

export const PlacesThunk = {
    fetchPlaces,
    fetchPlaceBySearch,
    fetchPlacesByTypeChange,
    fetchPlace,
}
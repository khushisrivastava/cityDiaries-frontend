import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const placesSlice = createSlice({
    name: "places",
    initialState: { all: [], selected: {}, filtered: [], favourites: [], reviews: [] },
    reducers: {
        setPlaces: (state, action) => {
            state.all = action.payload;
        },
        setPlacesBySearch: (state, action) => {
            state.filtered = action.payload;
        },
        setPlace: (state, action) => {
            state.selected = _.cloneDeep(action.payload);
        },
        setFavourites: (state, action) => {
            state.favourites = action.payload;
        },
        setFavourite: (state, action) => {
            state.favourites = [...state.favourites, action.payload];
        },
        setReviews: (state, action) => {
            state.reviews = action.payload;
        },
        setReview: (state, action) => {
            state.reviews = [...state.reviews, action.payload];
        }
    }
});

export const {
    setPlaces,
    setPlace,
    setPlacesBySearch,
    setFavourites,
    setFavourite,
    setReviews,
    setReview
} = placesSlice.actions;

export default placesSlice.reducer;
import { combineReducers } from 'redux';

import placesReducer from '../Slices/placesSlices';
import loadingReducer from '../Slices/loadingSlice';

const rootReducer = combineReducers({
    places: placesReducer,
    loading: loadingReducer
});

export default rootReducer;
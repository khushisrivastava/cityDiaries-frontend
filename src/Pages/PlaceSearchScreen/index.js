import React, { lazy } from 'react';
import './index.css';

const LocationSearchInput = lazy(() => import('../../Components/PlacesAutoComplete'));

function PlaceSearchScreen(props) {
    return (
        <div className="splash-view">
            <h4 className="heading">CityDiaries</h4>
            <h6 className="content">Find the most hygienic places near you</h6>
            <LocationSearchInput {...props} />
        </div>
    )
}

export default PlaceSearchScreen;
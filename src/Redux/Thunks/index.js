import { PlacesThunk } from './placesThunks';
import { FavouritesThunk } from './favouriteThunks';
import { ReviewThunk } from './reviewThunk';

const { fetchPlaces, fetchPlaceBySearch, fetchPlacesByTypeChange, fetchPlace } = PlacesThunk;
const { fetchFavorites, createRemoveFavourite } = FavouritesThunk;
const { fetchReviews, createReview } = ReviewThunk;

export { fetchPlaces, fetchPlaceBySearch, fetchPlacesByTypeChange, fetchPlace, fetchFavorites, createRemoveFavourite, fetchReviews, createReview };
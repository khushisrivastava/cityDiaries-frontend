import React, { lazy, useEffect, useState, Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
// import OnBoardModal from './Components/OnboardModal';
import { LocationContext } from './Context/LocationContext';

import { AuthContext } from './Context/AuthContext';
import PrivateRoute from './PrivateRoutes';
import { Dimensions } from './Utils/sitedimension';
import SplashScreen from './Pages/SplashScreen/index';
import PlaceSearchScreen from './Pages/PlaceSearchScreen';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MyRatingPage = lazy(() => import('./Pages/MyRatingPage'));
const FavouritesPage = lazy(() => import('./Pages/FavouritesPage'));
const RestaurantDetailsPage = lazy(() => import('./Pages/RestaurantDetailPage'));
const RatingPage = lazy(() => import('./Pages/RatingPage'));
const LoginScreen = lazy(() => import('./Pages/LoginScreen'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./Pages/TermsOfUse'));
const DesktopMode = lazy(() => import('./Components/DesktopMode'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#52be80",
    },
  },
});

function App() {
  let tokens = localStorage.getItem("userToken");
  tokens = tokens === "null" ? JSON.parse(tokens) : tokens;
  const [token, setToken] = useState(tokens);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState(null);
  const [country, setCountry] = useState(null);
  const { width } = Dimensions.useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const setLatLng = () => {
    setLatitude("51.5074");
    setLongitude("0.1278");
    setLocation("London");
    setCountry("UK");
  }

  useEffect(() => {
    setLoading(true);
    setLatLng();
    if (latitude === null || longitude === null) {
      const parnaLat = localStorage.getItem("parnaLat");
      const parnaLng = localStorage.getItem("parnaLng");
      const parnaLoc = localStorage.getItem("parnaLoc");
      const parnaCon = localStorage.getItem("parnaCon");

      if (parnaLat && parnaLng && parnaLoc && parnaCon) {
        setLatitude(parnaLat);
        setLongitude(parnaLng);
        setLocation(parnaLoc);
        setCountry(parnaCon);
      }
      else {
        setLatitude("51.5074");
        setLongitude("0.1278");
        setLocation("London");
        setCountry("UK");
      }
      setLoading(false);
    }
  }, []);


  const setTokens = (data) => {
    localStorage.setItem("userToken", JSON.stringify(data));
    setToken(data)
  }



  return (
    <div className="App">
      {width < 800 ?
        <ThemeProvider theme={theme}>
          <AuthContext.Provider value={{ token: token, setToken: setTokens }}>
            <LocationContext.Provider value={{
              latitude: latitude,
              longitude: longitude,
              location: location,
              country: country,
              setLatitude,
              setLongitude,
              setLocation,
              setCountry
            }}>
              <BrowserRouter>
                <Suspense fallback={() => { }}>
                  <Switch>
                    <Route exact path="/" component={PlaceSearchScreen} />
                    <Route exact path="/home" component={HomePage} />
                    <PrivateRoute exact path="/my-rating" component={MyRatingPage} />
                    <PrivateRoute exact path="/favourites" component={FavouritesPage} />
                    <Route exact path="/place/:type/:id" component={RestaurantDetailsPage} />
                    <PrivateRoute exact path="/rate/:type/:id" component={RatingPage} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                    <Route exact path="/terms-of-use" component={TermsOfUse} />
                  </Switch>
                </Suspense>
              </BrowserRouter>
            </LocationContext.Provider>
          </AuthContext.Provider>
        </ThemeProvider>
        :
        <Suspense fallback={() => { }}>
          <DesktopMode />
        </Suspense>
      }
    </div>
  );
}

export default App;

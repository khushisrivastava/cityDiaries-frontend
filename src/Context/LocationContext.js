import { createContext, useContext } from 'react';

//Auth Context
export const LocationContext = createContext({
    latitude: null,
    longitude: null,
    location: null,
    country: null,
    setLatitude: (data) => { },
    setLongitude: (data) => { },
    setLocation: (data) => { },
    setCountry: (data) => { }
});

//Use Auth Context
export function useLocationContext() {
    return useContext(LocationContext);
}

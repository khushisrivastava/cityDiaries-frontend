import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import Axios from 'axios';
import { useLocationContext } from '../Context/LocationContext';

function LocationSearchInput(props) {
    const { setLatitude, setLongitude, setLocation, setCountry } = useLocationContext();
    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (searchInput) => {
        console.log(searchInput);
        setLoading(true);
        Axios.get(`/cities?city=${searchInput}`)
            .then(({data}) => {
                setSuggestions(data);
                setLoading(false);
            })
            .catch(({data}) => console.log(data));
        console.log(suggestions);
    };

    const handleSelect = ({ name: location, latitude, longitude, country }) => {
        console.log(`${location} selected.`)
        setLocation(location);
        setCountry(country);
        setLatitude(latitude);
        setLongitude(longitude);
        localStorage.setItem("parnaLoc", location);
        localStorage.setItem("parnaCon", country);
        localStorage.setItem("parnaLat", latitude);
        localStorage.setItem("parnaLng", longitude);
        props.history.push('/home');
        // geocodeByAddress(address)
        //     .then(results => {
        //         // props.setLocation(results[0].address_components[0].long_name);
        //         const address_components = results[0].address_components;
        //         setLocation(address_components[0].long_name);
        //         setCountry(address_components[address_components.length - 1].short_name);
        //         localStorage.setItem("parnaLoc", address_components[0].long_name);
        //         localStorage.setItem("parnaCon", address_components[address_components.length - 1].short_name);
        //         return getLatLng(results[0]);
        //     })
        //     .then(latLng => {
        //         setLatitude(latLng.lat);
        //         setLongitude(latLng.lng);
        //         localStorage.setItem("parnaLat", latLng.lat);
        //         localStorage.setItem("parnaLng", latLng.lng);
        //         props.history.push('/home');
        //     })
        //     .catch(error => console.error('Error', error));
    };

    const styles = {
        placesInput: {
            height: "35px",
            width: "80%",
            border: "none",
            textAlign: "center",
            outline: "none",
            position: "absolute",
            top: "60%",
            borderRadius: 20,
            marginLeft: "10%",
        },
        pin: {
            height: 25,
            width: 25,
            position: "absolute",
            top: "60%",
            zIndex: 10,
            left: "12%",
            marginTop: 6
        }
    }

    const onChange = ({ coords }) => {
        setLatitude(coords.latitude);
        localStorage.setItem("parnaLat", coords.latitude);
        setLongitude(coords.longitude);
        localStorage.setItem("parnaLng", coords.longitude);
        setLocation("Near me");
        localStorage.setItem("parnaLoc", "Near me");
    }

    const onError = (error) => {
        alert("Please allow location to continue");
    }

    const nearbyHandler = () => {
        const latLng = navigator.geolocation.getCurrentPosition(onChange, onError);
        props.history.push('/home');
    }

    let suggestionContainer;
    if (loading) {
        suggestionContainer = <div style={{ textAlign: "center" }}>Loading...</div>;
    } else {
        suggestionContainer = 
            <List style={{ paddingTop: 0 }}>
                {
                    suggestions.filter(suggestion => suggestion.name).map(suggestion => {
                        const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                            ? {
                                backgroundColor: '#fafafa', cursor: 'pointer', borderRadius: 0, fontSize: 13,
                                marginTop: "1px", padding: "8px 10px"
                            }
                            : {
                                backgroundColor: '#ffffff', cursor: 'pointer', borderRadius: 0, fontSize: 13,
                                marginTop: "1px", padding: "8px 10px"
                            };
                        return (
                            <ListItem
                                onClick ={() => handleSelect(suggestion)}
                                {...{ className, style }}>{suggestion.name}
                            </ListItem>
                        );
                    })
                }
            </List>
    }

    return (
        <>
            <img onClick={nearbyHandler} style={styles.pin} src={require('../assets/pin.png')} />
            <input
                autoFocus
                style={styles.placesInput}
                // value={searchInput}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
                placeholder='Search Location'
                className='location-search-input'
                // {...getInputProps({
                //     placeholder: 'Search Location',
                //     className: 'location-search-input',
                // })}
            />

            <div className="autocomplete-dropdown-container" style={{maxHeight: "35%", width: "80%", overflowY: "overlay", marginLeft: "10%", marginRight: "10%", position: "absolute", top: "65%", marginTop: 0, borderRadius: 20}}>
                {suggestionContainer}
            </div>   
        </>

        // <PlacesAutocomplete
        //     value={searchInput}
        //     onChange={handleChange}
        //     onSelect={handleSelect}
        //     searchOptions={{ types: ['(cities)'] }}
        // >
        //     {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        //         <div>
        //             <img onClick={nearbyHandler} style={styles.pin} src={require('../assets/pin.png')} />
        //             <input
        //                 autoFocus
        //                 style={styles.placesInput}
        //                 {...getInputProps({
        //                     placeholder: 'Search Location',
        //                     className: 'location-search-input',
        //                 })}
        //             />
        //             {/* {suggestions.length > 0 && <List
        //                 className='suggestion-item'
        //                 style={{ backgroundColor: '#ffffff', cursor: 'pointer', borderRadius: 20, height: 15, fontSize: 13 }}>
        //                 <ListItem onClick={() => { console.log("clicked"); nearbyHandler(); }} style={{ height: "auto", margin: "0px", padding: "0px 0px 0px 10px", color: '#219A53' }}>Near me</ListItem>
        //             </List>} */}
        //             <div className="autocomplete-dropdown-container" style={{ width: "80%", marginLeft: "10%", marginRight: "10%", position: "absolute", top: "65%", marginTop: 2, borderRadius: 20 }}>
        //                 {/* <ListItem style={{ backgroundColor: '#ffffff', cursor: 'pointer' }} onClick={nearbyHandler}><NearMeIcon />{"Nearby Me"}</ListItem> */}
        //                 {loading && <div style={{ textAlign: "center" }}>Loading...</div>}
        //                 {/* <List {...getSuggestionItemProps({
        //                     className: 'suggestion-item',
        //                     style: { backgroundColor: '#ffffff', cursor: 'pointer', borderRadius: 20, height: 15, fontSize: 13 },
        //                 })}> */}
        //                 <List>
        //                     {suggestions.map(suggestion => {
        //                         const className = suggestion.active
        //                             ? 'suggestion-item--active'
        //                             : 'suggestion-item';
        //                         // inline style for demonstration purpose
        //                         const style = suggestion.active
        //                             ? {
        //                                 backgroundColor: '#fafafa', cursor: 'pointer', borderRadius: 0, fontSize: 13,
        //                                 marginTop: "1px", padding: "8px 10px"
        //                             }
        //                             : {
        //                                 backgroundColor: '#ffffff', cursor: 'pointer', borderRadius: 0, fontSize: 13,
        //                                 marginTop: "1px", padding: "8px 10px"
        //                             };
        //                         return (
        //                             <ListItem
        //                                 {...getSuggestionItemProps(suggestion, {
        //                                     className,
        //                                     style,
        //                                 })}
        //                             //style={{  }}
        //                             >{suggestion.description}</ListItem>
        //                         );
        //                     })}
        //                 </List>
        //             </div>
        //         </div>
        //     )
        //     }
        // </PlacesAutocomplete >
    )
}

export default LocationSearchInput;

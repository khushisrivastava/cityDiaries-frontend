import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';

import colorStyles from '../Default/colorStyles';
import LocationSearchInput from './PlacesAutoComplete';
import { useLocationContext } from '../Context/LocationContext';
import PlacesAutocomplete from 'react-places-autocomplete';
import Drawer from '../Components/Drawer';
import './HomePageAppBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.secondary
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        display: 'block',
        color: colorStyles.defaultGreen,
        fontWeight: "bold",
        marginTop: 15
        // },
    },
    logo: {
        height: 60,
        width: 60,
        marginTop: 5
    },
    search: {
        position: 'relative',
        borderRadius: 25,
        backgroundColor: "#E5E5E54D",
        width: '70%',
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginLeft: 10
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black
    },
    inputRoot: {
        color: theme.palette.common.black
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    locationBtn: {
        backgroundColor: "white",
        border: "0px",
        position: "absolute",
        right: 15,
        fontSize: 15,
        fontWeight: 500
    }
}));


export default function HomePageAppBar(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [google, setGoogle] = useState(null);
    // const [address, setAdress] = useState("");
    const { setSearchQuery, setTypedAddress, typedAddress } = props;
    const { location, latitude, longitude, country } = useLocationContext();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleChange = address => {
        setTypedAddress(address);
        // setSearchQuery(address);
    };

    const handleSelect = address => {
        setSearchQuery(address);
        setTypedAddress(address);
    }

    useEffect(() => {
        setGoogle(window.google);
    }, [])


    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <MenuIcon onClick={() => { setIsDrawerOpen(true) }} />
                    <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} history={props.history} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            {/* <SearchIcon /> */}
                        </div>
                        {/* <PlacesAutocomplete
                            value={typedAddress}
                            onChange={handleChange}
                            onSelect={handleSelect}
                            searchOptions={{
                                location: google && new google.maps.LatLng(latitude, longitude),
                                radius: 10000,
                                componentRestrictions: { country: country }
                            }}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}

                                        inputProps={{ 'aria-label': 'search' }}
                                        {...getInputProps({
                                            placeholder: 'Search Places',
                                            className: 'location-search-input',
                                        })}
                                    />
                                    {/* <input
                        style={styles.placesInput}
                        {...getInputProps({
                            placeholder: 'Search Places and Select ...',
                            className: 'location-search-input',
                        })}
                    /> */}
                                    {/* <div className="autocomplete-dropdown-container-home">
                                        {loading && <div style={{ textAlign: "center",backgroundColor:'white' }}>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <List  {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                })}>
                                                    <ListItem>{suggestion.description}</ListItem>
                                                </List>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete> */}
                    </div>
                    <button className={classes.locationBtn} type="button" onClick={() => { props.history.push('/') }}>
                        {location !== null ? location : "Select Location"}
                    </button>
                    {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <LocationSearchInput handleClose={handleClose} />
                    </Modal> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

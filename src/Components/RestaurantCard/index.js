import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import colorStyles from '../../Default/colorStyles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useDispatch } from 'react-redux';
import { createRemoveFavourite } from '../../Redux/Thunks';
import './RestaurantCard.css';
import { useAuthContext } from '../../Context/AuthContext';
import { Redirect } from 'react-router-dom';


export default function RestaurantCard(props) {
    const dispatch = useDispatch();
    const [favourite, setFavourite] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const { name, address, value, distance, image, place_id, icon, is_favourite, type, favPage } = props;
    const { token } = useAuthContext();

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            margin: 5,
            height: "auto"
        },
        cover: {
            borderRadius: 10,
            width: 151,
            height: 200
        },
        menuButton: {
            color: colorStyles.defaultGreen,
        },
        rating: {
            zIndex: 0
        }
    }));

    // useEffect((prevState, prevProps) => {
    //     if (prevProps.is_favourite != is_favourite) {
    //         setFavourite(props.is_favourite);
    //     }
    // })

    useEffect(() => {
        setFavourite(is_favourite);
    }, [is_favourite]);



    const classes = useStyles();

    const onFavouriteHandler = () => {
        const params = {
            place_id: place_id,
            name: name,
            icon: image,
            rating: value,
            address: address,
            type: type,
        }
        if (token) {
            dispatch(createRemoveFavourite(params));
            if (!favPage)
                setFavourite(!favourite);
            else
                setFavourite(is_favourite);
        }
        else {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
    }

    return (
        <div className="restaurant-card" key={place_id}>
            <img className="image" src={image} alt={name} onClick={() => { props.history.push(`/place/${type}/${place_id}`) }} />
            <div className="details">
                <p className="name" onClick={() => { props.history.push(`/place/${type}/${place_id}`) }}>{name}</p>
                <h6 className="address">{address}</h6>
                <div className="controls">
                    {value ? <Box component="fieldset" borderColor="transparent">
                        <Rating size="small" className={classes.rating} name="read-only" value={value} readOnly precision={0.1} />
                        <h6 className="rating-value">
                            {`(${value && Number(value).toPrecision(2)})`}
                        </h6>
                    </Box> : null}
                    <Typography>
                        {distance}
                    </Typography>
                </div>
            </div>
            {is_favourite !== undefined &&
                <IconButton
                    className={classes.menuButton}
                    aria-label="menu"
                    onClick={onFavouriteHandler}
                >
                    {favourite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                </IconButton>}
        </div>
    );
}

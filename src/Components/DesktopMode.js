import React from 'react';
import colorStyles from '../Default/colorStyles';

function DesktopMode(props) {
    const styles = {
        view: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        text: {
            color: colorStyles.defaultGreen,
            fontSize: 25,
            textAlign: "center",
            fontWeight: 400,
            width: "38%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        image: {
            height: 350,
            width: 480,
            marginLeft: "auto",
            marginRight: "auto"
        },
        banner: {
            color: colorStyles.defaultGreen,
            fontSize: 30,
            textAlign: "center",
            fontWeight: 400,
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 40,
            fontFamily: "Lobster"
        },
        head: {
            backgroundColor: colorStyles.defaultGreen,
            paddingTop: 12,
            // paddingBottom: 12,
            textAlign: "center",
            color: "white",
            marginBottom: 55,
            fontFamily: 'Raleway , sans-serif'
        },
        name: {
            fontSize: 28,
            fontStyle: "Bebas Neue"
        },
        logo: {
            height: "5%",
            width: "5%",
        // marginTop: 5
        }
    }
    return (
        <div style={styles.view}>
            <div style={styles.head}>
                <img src={require('../assets/logo_no_text.png')} alt="logo" style={styles.logo} ></img>
                <h3 style={styles.name}>CityDiaries</h3>
            </div>
             <div style={styles.banner}>"Embrace the power of your views to help others"</div>
            <img style={styles.image} src={require('../assets/desktop.svg')} alt="CityDiaries" />
            <br />
            <div style={styles.text}>
<p>Please open this on your mobile browser to rate and find the most hygienic places near you.</p>
            </div>
        </div>
    )
}

export default DesktopMode;

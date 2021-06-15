import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import colorStyles from '../Default/colorStyles';

function Footer(props) {
    const styles = {
        text: {
            marginTop: 20,
            marginBottom: 5,
        },
        links: {

        },
        link: {
            color: colorStyles.defaultGreen
        }
    }
    return (
        <div style={styles.text}>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit" href="https://citydiaries-46605.firebaseapp.com/">
                    CityDiaries
                </Link>{' '}
                <div style={styles.links}>
                    <a style={styles.link} href="/privacy-policy">Privacy policy</a>{"   "}
                    <a style={styles.link} href="/terms-of-use">Terms of use</a>
                </div>
            </Typography>
        </div >
    )
}

export default Footer;
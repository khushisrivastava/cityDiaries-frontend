import React, { Component, lazy, Suspense } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import { Card, colors } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { AuthContext } from '../Context/AuthContext';
import { Redirect } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
import firebase from 'firebase';
import Axios from 'axios';

const Footer = lazy(() => import('../Components/Footer'));

const styles = (theme) => ({
    heading: {
        // marginTop: theme.spacing(1),
        textAlign: "center",
        marginTop: 15
    },
    card: {
        paddingTop: 40,
        paddingBottom: 40,
        marginLeft: 10,
        marginRight: 10,
        marginTop: theme.spacing(20),
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    button: {
        color: "white",
        marginTop: theme.spacing(1)
    },
    logo: {
        height: 60,
        width: 60,
        marginTop: 5
    },
});


class LoginScreen extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            phoneEntered: false,
            phone: "",
            otp: "",
            confirmResult: null,
            user: null,
            uid: null,
            loading: false,
            error: false,
            message: "",
            isLoggedIn: false
        }
        this.recaptcha = React.createRef();
    }


    componentDidMount() {
        firebase.auth().useDeviceLanguage();
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(this.recaptcha, {
            'size': 'invisible',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
            'expired-callback': function () {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        });
        window.recaptchaVerifier.render().then(function (widgetId) {
            window.recaptchaWidgetId = widgetId;
        });
        let tokens = localStorage.getItem('userToken');
        if (tokens) {
            this.props.history.push('/')
        }
    }

    sendOtpHandler = (e) => {
        e.preventDefault();
        const { phone } = this.state;
        let appVerifier = window.recaptchaVerifier;
        this.setState({ loading: true });
        const phoneNumber = phone;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((result) => {
                this.setState({ confirmResult: result, phoneEntered: true });
                this.setState({ loading: false });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    verifyResult = () => {
        const { otp, confirmResult, phone } = this.state;
        confirmResult.confirm(otp).then((result) => {
            this.setState({ user: result.user, uid: result.user.uid, loading: true, error: false });
            const params = {
                phone: phone,
                firebase_id: result.user.uid
            }
            Axios.post(`/user/login/`, params)
                .then(async (res) => {
                    await this.context.setToken(res.data.token);
                    await localStorage.setItem('userToken', res.data.token);
                    this.setState({ loading: false, isLoggedIn: true });
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ loading: false });
                })
        }).catch(err => {
            this.setState({ loading: false, error: true, message: "Invalid OTP!" });
        })
    }

    render() {
        const referer = this.props.location.state ? this.props.location.state.referer || '/' : "/login";
        if (referer === '/login' && localStorage.getItem('userToken')) {
            return <Redirect to={'/'} />
        }

        const { classes } = this.props;
        const { phoneEntered, loading, error, message, isLoggedIn } = this.state;
        if (isLoggedIn) {
            return <Redirect to={referer} />;
        }
        return (
            <>
                <div style={{ display: "flex", flexDirection: "row", margin: 0, padding: 0 }}>
                    <img onClick={() => { this.props.history.push('/') }} src={require('../assets/logo512.png')} className={classes.logo} alt="logo" />
                </div>
                <Card className={classes.card} elevation={5}>
                    <MuiPhoneNumber
                        defaultCountry={'gb'}
                        autoFormat={false}
                        onChange={(value) => { this.setState({ phone: value }) }} />
                    {!phoneEntered &&
                        <div style={{ display: "flex", justifyContent: "center" }} ref={(ref) => this.recaptcha = ref}></div>}

                    {phoneEntered &&
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="OTP"
                            color="secondary"
                            placeholder="xxxxxx"
                            onChange={(event) => { this.setState({ otp: event.target.value }) }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HttpsOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />}
                    <br />
                    {loading ?
                        <div style={{ textAlign: "center" }}>
                            <CircularProgress color="secondary" />
                        </div> : phoneEntered ?
                            <Button className={classes.button} onClick={this.verifyResult} variant="contained" color="secondary">
                                Login
                            </Button> :
                            <Button className={classes.button} onClick={this.sendOtpHandler} variant="contained" color="secondary">
                                Verify
                            </Button>
                    }
                    {error && <h5 style={{ color: colors.red, textAlign: "center" }}>{message}</h5>}
                </Card>
                <Suspense>
                    {/* <Footer /> */}
                </Suspense>
            </>
        )
    }
}


export default withStyles(styles, { withTheme: true })(LoginScreen);